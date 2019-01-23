const fs = require("fs-extra"),
  path = require("path"),
  turndown = require("turndown")();

exports.command = "convert <input> [output]";
exports.aliases = ["conv"];
exports.describe = "convert HTML to Markdown";

exports.builder = yargs => {
  yargs
    .usage("node cli.js convert <input> [output] [options]")
    .example(`node cli.js convert index.html`)
    .example(`node cli.js convert index.html index.md`)
    .example(`node cli.js convert -i path/to/input -o path/to/output`)
    .options({
      h: { alias: "help", describe: "Show this help." },
      r: {
        alias: "recursive",
        describe: "Process input folder recursively.",
        type: "boolean",
        default: false
      }
    });
};

function html_to_md(source, target) {
  let html = fs.readFileSync(source).toString("utf8");
  let md = turndown.turndown(html);
  fs.writeFile(target, md);
}

function processTargetDirectory(argv, target, source = "") {
  /* Load target */
  let f = fs.readdirSync(target).map(v => ({
    path: path.join(target, v),
    name: v,
    stat: fs.statSync(path.join(target, v))
  }));

  f.forEach(e => {
    if (e.stat.isDirectory() && argv.recursive) {
      processTargetDirectory(argv, e.path, path.join(source, e.name));
    } else if (e.path.match(/.*html?$/)) {
      let folder = path.join(argv.output, source),
        file = /.*\/(.*?html?)/.exec(e.path);
      file = file[1].replace(/html?$/, "md");
      fs.ensureDir(folder);
      html_to_md(e.path, path.join(folder, file));
    }
  });
}

exports.handler = argv => {
  /* Set output to input, if not set */
  argv.output = argv.output ? argv.output : argv.input;
  argv.directory = fs.statSync(argv.input).isDirectory();
  /* Test if <input> is a directory */
  if (argv.directory) {
    processTargetDirectory(argv, argv.input);
  } else {
    let output = argv.output.replace(/html?$/, "md");
    html_to_md(argv.input, output);
  }
};
