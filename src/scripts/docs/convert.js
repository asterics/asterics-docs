import chalk from "chalk";
import fs from "fs";
import { join, relative, dirname, basename, isAbsolute, parse } from "path";
import { cursorTo, moveCursor, clearScreenDown } from "readline";
import { mkdirp } from "@asterics/node-utils";
import { warn, info, error, success } from "./shared";
import converter from "./shared/converter";

/* Locals */
let convertedFiles = [];
let copiedPictures = [];
let missingPictures = [];

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
      d: { alias: "dry-run", describe: "Dry run.", type: "boolean", default: false },
      h: { alias: "help", describe: "Show this help." },
      e: { alias: "ext", describe: "File extension for conversion.", type: "string", default: "md" },
      p: { alias: "pictures", describe: "Copy pictures during conversion.", type: "boolean", default: true },
      l: {
        alias: "logging",
        describe: "Print processing information to stdout",
        type: "boolean"
      },
      f: {
        alias: "filter",
        describe: "Regular expression filter to apply (only when input is a directory).",
        default: "\\.html?$",
        type: "string"
      }
    });
};
export const handler = options => {
  if (!fs.existsSync(options.file)) {
    process.stdout.write(error("Input file/folder does not exist!"));
    return;
  }

  options.file = loadPath(options.file);
  options.folder = loadPath(options.folder);
  options.output = loadPath(options.output);

  let j = jobs(options);
  convert(j, options);
  logStats(options);
};

function loadPath(path) {
  return path ? (isAbsolute(path) ? path : join(process.cwd(), path)) : path;
}

function jobs(options) {
  /* Input file */
  if (fs.statSync(options.file).isFile()) {
    let destination = "";
    const i = parse(options.file);
    const o = parse(options.output || "");

    /* no output provided */
    if (o.root === "") {
      options.output = "";
    } else {
      if (fs.existsSync(options.output)) {
        if (fs.statSync(options.output).isDirectory()) {
          destination = join(o.dir, o.name, `${i.name}.${options.ext}`);
        } else {
          process.stdout.write(error("Output file exists already!"));
          process.exit(1);
        }
      } else {
        destination = options.output;
      }
    }
    return [{ source: options.file, destination }];

    /* Input folder */
  } else if (fs.statSync(options.folder).isDirectory()) {
    const i = parse(options.folder);
    const o = parse(options.output || "");

    if (o.root === "") {
      process.stdout.write(error("No output folder specified!"));
      process.exit(1);
    } else if (o.ext !== "") {
      if (fs.existsSync(options.output)) {
        if (fs.statSync(options.output).isFile()) {
          process.stdout.write(warn("Output exists already."));
          process.exit(1);
        } else if (!fs.statSync(options.output).isDirectory()) {
          process.stdout.write(warn("Output is not a directory."));
          process.exit(1);
        }
      }
    }

    let a = [];
    let r = new RegExp(options.filter);
    walk(options.folder, file => {
      if (r.exec(file)) {
        let name = relative(options.folder, file);
        let f = parse(name);
        let destination = join(options.output, f.dir, `${f.name}.${options.ext}`);
        a.push({ source: file, destination });
      }
    });
    return a;
  }
}

function walk(dir, cb) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, cb) : cb(join(dir, f));
  });
}

function convert(jobs, options) {
  for (let job of jobs) {
    log(job, options);
    let md = markup(job.source);
    convertedFiles.push(job.destination);

    if (job.destination === "" && jobs.length === 1) {
      process.stdout.write(`\n${"~".repeat(120)}\n${md}\n${"~".repeat(120)}\n`);
      return;
    }

    let pictures = pics(job.source, options);
    if (options.pictures) {
      copy(pictures, options);
    }

    logMd(job.destination, options);
    if (!options["dry-run"]) {
      ensure(job.destination, () => {
        fs.writeFileSync(job.destination, md);
      });
    }
    process.stdout.write("\n");

    if (!options.logging) {
      moveCursor(process.stdout, 0, -pictures.length - 2);
      cursorTo(process.stdout, 0);
      clearScreenDown(process.stdout);
    }
  }
}

function log(job, options) {
  process.stdout.write(
    success(relative(options.folder, job.source), {
      label: "Converting page",
      end: ""
    })
  );
  // if (job.destination === "" || job.destination === undefined) {
  //   process.stdout.write(
  //     success(relative(process.cwd(), job.source), {
  //       label: "Converting page",
  //       end: ""
  //     })
  //   );
  // } else {
  //   process.stdout.write(
  //     success(`${relative(process.cwd(), job.source)} to ${relative(process.cwd(), job.destination)}`, {
  //       label: "Converting page",
  //       end: ""
  //     })
  //   );
  // }
}

function markup(source) {
  const r = /src="(.*\.(?:jpe?g|gif|png|svg))"/gim;
  let html = fs.readFileSync(source, { encoding: "utf-8" });
  html = html.replace(r, (_, file) => {
    let filename = basename(file).toLowerCase();
    let dir = dirname(file);
    return `src=${dir}/${filename}`;
  });
  let md = converter.turndown(html);
  md = md.split("\n");
  md.splice(0, 1);
  return md.join("\n");
}

function pics(source, options) {
  const r = /src="(.*\.(?:jpe?g|gif|png|svg))"/gim;
  let html = fs.readFileSync(source, { encoding: "utf-8" });
  let m;
  let a = [];
  do {
    m = r.exec(html);
    if (m) {
      const o = parse(m[1]);
      const s = join(dirname(source), m[1]);
      const b = relative(options.folder, dirname(source));
      let destination = join(options.output, b, o.dir, o.base.toLowerCase());
      destination = isAbsolute(destination) ? destination : join(process.cwd(), destination);
      a.push({ source: s, destination });
    }
  } while (m);
  return a;
}

function copy(pictures, options) {
  for (let picture of pictures) {
    if (fs.existsSync(picture.destination)) {
      logPicExists(picture);
    } else {
      if (!options["dry-run"]) {
        ensure(picture.destination, () => {
          if (fs.existsSync(picture.source)) {
            copiedPictures.push(picture.destination);
            logPic(picture, options);
            fs.copyFileSync(picture.source, picture.destination);
          } else {
            missingPictures.push(picture.source);
            logPicMissing(picture, options);
          }
        });
      }
    }
  }
}

function ensure(destination, cb) {
  if (!fs.existsSync(dirname(destination))) {
    mkdirp(dirname(destination));
  }
  if (fs.statSync(dirname(destination)).isDirectory()) {
    cb();
  }
}

function logPic(picture, options) {
  process.stdout.write(
    `\n${info(
      `${relative(dirname(options.folder), picture.source)} ... ${join(
        relative(process.cwd(), options.output),
        relative(options.output, picture.destination)
      )}`,
      {
        end: "",
        label: "copy"
      }
    )}`
  );
}

function logPicExists(picture) {
  process.stdout.write(`\n${info(picture.destination, { end: "", label: "exists" })}`);
}

function logPicMissing(picture, options) {
  process.stdout.write(`\n${warn(relative(options.folder, picture.source), { end: "", label: "missing" })}`);
}

function logMd(destination, options) {
  process.stdout.write(
    `\n${info(join(relative(process.cwd(), options.output), relative(options.output, destination)), { end: "", label: "create" })}`
  );
}

function logMissing() {
  if (missingPictures.length > 0) {
    process.stdout.write(`${warn("Missing pictures", { label: "warning", end: "" })}:\n`);
    for (let picture of missingPictures) {
      moveCursor(process.stdout, 5);
      process.stdout.write(warn(picture, { label: "", end: "\n" }));
    }
  }
}

function logStats(options) {
  process.stdout.write(
    `${options.logging ? `${"=".repeat(120)}\n` : ""}Converted ${chalk.green(convertedFiles.length)} files. Copied ${chalk.blue(
      copiedPictures.length
    )} pictures.\n`
  );
  logMissing();
}
