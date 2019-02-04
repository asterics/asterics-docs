const fs = require("fs"),
  path = require("path"),
  { mkdirp } = require("@asterics/node-utils"),
  { loadConversionJobs, loadImageJobs } = require("./util/jobs.js"),
  { html_to_md } = require("./util/markdown.js");

exports.command = "convert <input> [output]";
exports.aliases = ["conv"];
exports.describe = "convert HTML to Markdown";

exports.builder = yargs => {
  yargs
    .usage("node cli.js convert <input> [output] [options]")
    .example("node cli.js convert index.html")
    .example("node cli.js convert index.html index.md")
    .example("node cli.js convert -i path/to/input -o path/to/output")
    .options({
      h: { alias: "help", describe: "Show this help." },
      c: { alias: "clean", describe: "Clean converted files." },
      r: {
        alias: "recursive",
        describe: "Process input folder recursively.",
        type: "boolean",
        default: false
      }
    });
};

exports.handler = ({ input, output, recursive, clean }) => {
  output = output ? output : input;

  let { directories, conversions } = loadConversionJobs({ input, output, recursive });
  let { imgDirectories, images } = loadImageJobs({ input, output, recursive });

  /* =============== CLEAN ==================== */
  if (clean) {
    conversions.forEach(({ to }) => {
      try {
        fs.unlinkSync(to);
      } catch (e) {}
    });
    images.forEach(({ to }) => {
      try {
        fs.unlinkSync(to);
      } catch (e) {}
    });

    /* Parent folders need to be last in list */
    directories.push(...imgDirectories);
    directories = directories.filter(directory => fs.existsSync(directory));
    directories = directories.sort((a, b) => b.length - a.length);
    directories.forEach(directory => {
      try {
        fs.rmdirSync(directory);
      } catch (e) {}
    });
  } else {
    /* ============== BUILD =================== */
    directories.push(...imgDirectories);
    directories.forEach(directory => {
      mkdirp(directory);
    });

    conversions.forEach(({ from, to }) => {
      try {
        html_to_md(from, to);
      } catch (e) {}
    });

    images.forEach(({ from, to }) => {
      try {
        fs.copyFileSync(from, to);
      } catch (e) {}
    });
  }
};
