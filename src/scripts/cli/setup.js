const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const turndown = require("turndown")({ headingStyle: "atx" });

const indexPath = path.join(process.cwd(), "src/config/index.json");
const configPath = path.join(process.cwd(), "src/config/config.js");

const { getGitRepository } = require("./util/git.js");
const { mkdirp } = require("@asterics/node-utils");

const config = require(configPath);

exports.command = "setup";
exports.aliases = [""];
exports.describe = "setup asterics-docs project";

exports.builder = yargs => {
  yargs
    .usage("node cli.js setup")
    .options({
      h: { alias: "help", describe: "Show this help.", type: "string" },
      v: { alias: "version", describe: "Version to setup.", type: "string" },
      o: { alias: "output", describe: "Output folder", type: "string" }
    })
    .demandOption(["v", "o"]);
};

exports.handler = ({ version, output }) => {
  /* Load index */
  if (!fs.existsSync(indexPath)) return;
  let index = JSON.parse(fs.readFileSync(indexPath))["setup"][version];

  /* Create output folder */
  output = path.isAbsolute(output) ? output : path.join(process.cwd(), output);
  rimraf.sync(output);
  let jobs = absolute([
    {
      source: "src/config/vuepress.config.js",
      target: `${output}/.vuepress/config.js`
    },
    {
      source: "src/config/enhanceApp.js",
      target: `${output}/.vuepress/enhanceApp.js`
    },
    {
      source: "src/config/palette.styl",
      target: `${output}/.vuepress/styles/palette.styl`
    },
    {
      source: "src/config/index.styl",
      target: `${output}/.vuepress/styles/index.styl`
    },
    {
      source: "src/config/main.scss",
      target: `${output}/.vuepress/styles/main.scss`
    }
  ]);
  jobs.push(...getCopyJobs(path.join(process.cwd(), "src/components"), path.join(output, ".vuepress/components")));
  jobs.push(...getCopyJobs(path.join(process.cwd(), "public"), path.join(output, ".vuepress/public")));
  processCopyJobs(jobs);

  (async () => {
    /* Resolve dependencies */
    for (let dep of index["dependencies"]) {
      let repository = await getGitRepository(dep.repository);
      let commit = await repository.getBranchCommit(`origin/${dep.branch}`);

      for (let file of dep["tree"]) {
        let source = path.join(dep.source, file.source);

        let docs = path.join(process.cwd(), config.get("documentation"));
        let destination = path.join(process.cwd(), dep.destination);
        destination = destination.replace(docs, output);
        let target = path.join(destination, file.target);

        let entry = await commit.getEntry(source);
        let blob = await entry.getBlob();

        if (blob.isBinary()) {
          binary(target, blob.content(), file["action"]);
        } else {
          content(target, blob.toString(), file["action"], file["post-actions"]);
        }
      }
    }
  })();
};

function ensureParentDirectory(location) {
  let parent = location.substring(0, location.lastIndexOf("/"));
  if (!fs.existsSync(parent)) mkdirp(parent);
}

function binary(location, buffer, action) {
  if (action === "copy") {
    ensureParentDirectory(location);
    fs.writeFileSync(location, buffer);
  }
}

function content(location, text, action, postactions) {
  switch (action) {
    case "copy":
      break;
    case "html-to-markdown-copy":
      text = turndown.turndown(text);
      break;
  }
  for (let pa of postactions) {
    switch (pa) {
      case "remove-first-two-lines":
        text = text
          .split("\n")
          .splice(2)
          .join("\n");
        break;
      case "correct-image-path":
        text = text.replace(/img\//g, "./img/");
        break;
      case "lowercase-image":
        text = text.replace(/img\/(.*?(jpg|png))/g, (url, filename) => url.replace(filename, filename.toLowerCase()));
        break;
      case "select-version":
        text = text + "\n\n<SelectVersion/>";
        break;
      case "edit-link":
        text = text + "\n\n<EditLink/>";
        break;
      default:
        break;
    }
  }

  ensureParentDirectory(location);
  fs.writeFileSync(location, text);
}

function processCopyJobs(jobs) {
  for (let job of jobs) {
    ensureParentDirectory(job.target);
    fs.copyFileSync(job.source, job.target);
  }
}

function absolute(list) {
  let result = [];
  for (let { source, target } of list) {
    source = path.isAbsolute(source) ? source : path.join(process.cwd(), ...source.split("/"));
    target = path.isAbsolute(target) ? target : path.join(process.cwd(), ...target.split("/"));
    result.push({ source, target });
  }
  return result;
}

function loadFiles(location, recurse = true) {
  let list = [];
  let f = fs.readdirSync(location).map(e => path.join(location, e));
  let folders = [],
    files = [];
  for (let e of f) {
    if (fs.statSync(e).isDirectory()) folders.push(e);
    else files.push(e);
  }

  if (recurse) {
    for (let folder of folders) {
      list.push(...loadFiles(folder, recurse));
    }
  }
  if (files.length > 0) list.push(...files);
  return list;
}

function getCopyJobs(i, o, r = /.*/) {
  if (!path.isAbsolute(i) || !path.isAbsolute(o)) return;
  let files = loadFiles(i);

  let result = [];
  for (let file of files) {
    let destination = path.relative(i, file);
    destination = path.join(o, destination);
    result.push({ source: file, target: destination });
  }
  return result;
}
