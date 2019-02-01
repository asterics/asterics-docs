var fs = require("fs"),
  path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath);

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

module.exports = { loadJobs, loadImageJobs };
