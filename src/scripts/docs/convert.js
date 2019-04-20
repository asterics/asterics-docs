import fs from "fs";
import { join, relative, dirname, basename, isAbsolute } from "path";
import { mkdirp } from "@asterics/node-utils";
import { JSDOM } from "jsdom";

import turndown from "turndown";
const conv = turndown({ headingStyle: "atx", hr: "---", codeBlockStyle: "fenced", linkStyle: "referenced" });
// conv.remove("HEAD");
conv.addRule("title", {
  filter: ["title"],
  replacement: function(content) {
    return `\n---\ntitle: ${content}\n---`;
  }
});

import chalk from "chalk";
const warn = text => {
  console.warn(chalk.yellow("warning"), text);
};

export const command = "convert <file|folder> [output]";
export const aliases = ["c", "conv"];
export const describe = "convert files to markdown";
export const builder = yargs => {
  yargs
    .positional("file|folder", {
      describe: "input file or folder",
      type: "string",
      default: "."
    })
    .positional("output", {
      describe: "output file or folder",
      type: "string",
      default: "."
    })
    .usage("Usage: yarn docs convert <file|folder> [output]")
    .default("file|folder", undefined)
    .default("output", undefined)
    .options({
      "dry-run": { describe: "Dry run.", type: "boolean" },
      h: { alias: "help", describe: "Show this help." },
      f: {
        alias: "filter",
        describe: "Regular expression filter to apply (only when input is a directory).",
        default: "\\.html?$",
        type: "string"
      }
    });
};
export const handler = ({ file, folder, output, filter }) => {
  if (filter !== undefined) {
    console.log(filter);
  }

  if (output === undefined) {
    console.log("no output provided");
  }

  /* Process folder */
  if (fs.statSync(folder).isDirectory()) {
    console.log("is dir");
    if (output === undefined) {
      warn("Output folder must be specified when operating on folders!");
    } else {
      output = isAbsolute(output) ? output : join(process.cwd(), output);
      let files = [];
      walkDir(folder, f => {
        if (new RegExp(filter).exec(f)) {
          let destination = relative(folder, f);
          destination = join(dirname(destination), basename(destination).replace(/\.html?$/, ".md"));
          destination = join(output, destination);
          files.push({ source: f, destination });
        }
      });
      for (const f of files) {
        convertHTMLToMarkdown(f.source, f.destination);
      }
    }
  } else if (fs.statSync(file).isFile()) {
    /* Process single file */
    console.log("is file");
  }
};

function walkDir(dir, cb) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, cb) : cb(join(dir, f));
  });
}

function convertHTMLToMarkdown(i, o) {
  let dir = dirname(o);
  // console.log(dir);
  if (!fs.existsSync(dir)) {
    console.log(chalk.yellow("creating: "), `${dir}`);
    mkdirp(dir);
  }
  if (fs.statSync(dir).isDirectory()) {
    const html = fs.readFileSync(i, { encoding: "utf-8" });
    // let markdown = conv.turndown(getBody(html));
    let markdown = conv.turndown(html);

    console.log(chalk.yellow("converting:"), `${i} --> ${o}`);
    let { pics, md } = loadPictures(markdown);
    copyPictures(i, o, pics);
    fs.writeFileSync(o, md);
  }
}

function getBody(html) {
  let dom = new JSDOM(html);
  return dom.window.document.body.innerHTML;
}

function loadPictures(md) {
  let m;
  let r = /\((.*\.(?:png|jpe?g|svg|gif))/gim;

  let files = [];
  do {
    m = r.exec(md);
    if (m) {
      files.push(m[1]);
    }
  } while (m);

  let markdown = md.replace(r, (match, file) => {
    let filename = basename(file).toLowerCase();
    let dir = dirname(file);
    return `(${dir}/${filename}`;
  });

  return { pics: files, md: markdown };
}

function copyPictures(input, output, pictures) {
  input = dirname(input);
  output = dirname(output);

  for (let picture of pictures) {
    const source = join(input, picture);
    const destination = join(output, dirname(picture), basename(picture).toLowerCase());

    ensureFile(source, destination, () => {
      fs.copyFileSync(source, destination);
      console.log(chalk.green("      copy:"), `${source} --> ${destination}`);
    });
  }
}

function ensureFile(source, destination, cb) {
  /* input */
  if (!fs.statSync(source).isFile()) return;
  /* output */
  if (!fs.existsSync(dirname(destination))) {
    mkdirp(dirname(destination));
  }
  if (fs.statSync(dirname(destination)).isDirectory()) {
    if (fs.existsSync(destination)) {
      console.log(chalk.yellow("    exists:"), destination);
    } else {
      cb();
    }
  }
}
