import { join, relative, dirname, sep as pathSep } from "path";
import { Repository } from "nodegit";
import { Dependency } from "./config.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

const noop = () => {};

export class Index {
  constructor(apply = noop, error = noop) {
    return new Promise(resolve => {
      this.entries = await loadIndex(apply, error);
      resolve(this);
    });
  }

  get all() {
    return Array.from(this.entries.keys());
  }
  get(file) {
    let path = "";
    if (typeof file === "string") {
      path = file;
    } else if (file.isRenamed()) {
      const oldFile = file["headToIndex"]().oldFile();
      path = oldFile.path();
    } else {
      path = file.path();
    }
    return this.entries.get(path);
  }
  async setup() {
    for (const [path, resolution] of this.entries.entries()) {
      console.log({ path, resolution });
    }
  }
  moved(file) {
    return {
      up: () => {
        return getMovedUpDepth(file);
      },
      available: () => {
        return getAvailableDepth(this, file);
      },
      destination: (location = "") => {
        return getNewDestination(this, location, file);
      }
    };
  }
}

function getMovedUpDepth(file) {
  const delta = file["headToIndex"]();
  const oldFile = delta.oldFile();
  const newFile = delta.newFile();
  const moved = relative(dirname(oldFile.path()), newFile.path());
  const rParentDirs = new RegExp("\\.\\.\\" + pathSep, "g");
  return (moved.match(rParentDirs) || []).length;
}

function getAvailableDepth(index, file) {
  const entry = index.get(file);
  const rPathSep = new RegExp("\\" + pathSep, "g");
  return (join(entry.source, entry.file).match(rPathSep) || []).length;
}

function getNewDestination(index, location, file) {
  const entry = index.get(file);
  const delta = file["headToIndex"]();
  const oldFile = delta.oldFile();
  const newFile = delta.newFile();
  const dest = relative(oldFile.path(), newFile.path());
  return join(process.cwd(), location, entry.source, entry.file, dest);
}

async function loadIndex(apply = noop, error = noop) {
  let index = new Map();
  const dependencies = config.get("dependencies").map(entry => new Dependency(entry));
  const versions = config.get("versions");
  
  for (const version of versions) {
    for (const dependency of dependencies) {
      const files = await getFiles(dependency, version, error);
      for (const file of files) {
        addToIndex(index, version, filename, dependency);
        apply(file);
      }
    }
  }
  return index;
}

async function getFiles(dependency, error = noop) {
  let files = [];
  try {
    const l = join(process.cwd(), dependency.location);
    const r = await Repository.open(l);
    const c = await r.getBranchCommit(`origin/${branch}`);
    let t;
    if (dependency.source === "") {
      t = await c.getTree();
    } else {
      const e = await c.getEntry(dependency.source);
      t = await e.getTree();
    }
    files = await walk(dependency.source, dependency.filter, t);
  } catch (err) {
    error(err);
  }
  return files;
}

async function walk(location, filter, tree) {
  return await new Promise(async resolve => {
    let a = [];
    await tree
      .walk()
      .on("end", trees => {
        trees = trees.filter(t => t && filter.test(t.path()));
        for (let tree of trees) {
          a.push(relative(location, tree.path()));
        }
        resolve(a);
      })
      .start();
  });
}

function addToIndex(index, dependency, filename, branch, version) {
  let path = join(version, dependency.destination, filename);
  const entry = { branch, dependency };
  index.has(path) ? index.get(path).push(entry) : index.set(path, [entry]);
}
