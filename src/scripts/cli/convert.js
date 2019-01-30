const fs = require("fs"),
  path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath),
  turndown = require("turndown")(),
  { mkdirp } = require("@asterics/node-utils");

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

function html_to_md(source, target) {
  /* Read html */
  let html = fs.readFileSync(source).toString("utf8");

  /* Convert to markdown */
  let md = turndown.turndown(html);

  /* Remove first two lines of text (filename) */
  md = md
    .split("\n")
    .splice(2)
    .join("\n");

  /* Correct relative image links */
  md = md.replace(/img\//g, "./img/");

  /* Lowercase image name */
  md = md.replace(/img\/(.*?(jpg|png))/g, (word, first) => word.replace(first, first.toLowerCase()));

  /* Append version selection */
  md = md + "\n\n<SelectVersion/>";

  /* Create and write to file */
  fs.writeFileSync(target, md);
}

function load({ input, recursive }, container = []) {
  let elements = fs.readdirSync(input); //.map(f => ({ name: f, path: path.join(input, f) }));
  let folders = elements.filter(folder => fs.statSync(path.join(input, folder)).isDirectory());
  let files = elements.filter(file => !fs.statSync(path.join(input, file)).isDirectory());

  container.push({ source: input, files });
  if (recursive) folders.forEach(folder => load({ input: path.join(input, folder), recursive }, container));
}

function loadDirsWithFiles({ wd, input, recursive, ext }) {
  let container = [];
  load({ input: path.join(wd, input), recursive }, container);
  return container.map(({ source, files }) => ({ source, files: files.filter(file => file.match(ext)) })).filter(folder => folder.files.length > 0);
}

function loadTargets({ wd, input, output, recursive, from, to }) {
  return loadDirsWithFiles({ wd, input, recursive, ext: from })
    .map(e => ({
      ...e,
      destination: path.join(wd, output, path.relative(path.join(wd, input), e.source))
    }))
    .map(e => ({ ...e, files: e.files.map(file => ({ from: file, to: to ? file.replace(from, to) : file })) }));
}

function loadJobs({ input, output, recursive }) {
  let directories = [],
    conversions = [];

  let t = loadTargets({
    wd: config.get("wd"),
    input: input,
    output: output,
    recursive: recursive,
    from: /html?$/,
    to: "md"
  });

  t.forEach(({ source, destination, files }) => {
    directories.push(destination);
    files.forEach(({ from, to }) => {
      conversions.push({ from: path.join(source, from), to: path.join(destination, to) });
    });
  });

  return { directories, conversions };
}

function loadImageJobs({ input, output, recursive }) {
  let directories = [],
    copies = [];

  let t = loadTargets({
    wd: config.get("wd"),
    input: input,
    output: output,
    recursive: recursive,
    from: /(jpg|png|PNG)/
  });

  t.forEach(({ source, destination, files }) => {
    directories.push(destination);
    files.forEach(({ from, to }) => {
      copies.push({ from: path.join(source, from), to: path.join(destination, to.toLowerCase()) });
    });
  });

  return { imgDirectories: directories, images: copies };
}

exports.handler = ({ input, output, recursive, clean }) => {
  output = output ? output : input;

  let { directories, conversions } = loadJobs({ input, output, recursive });
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
