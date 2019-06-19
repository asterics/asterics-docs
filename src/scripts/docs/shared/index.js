import { join, relative, dirname, sep as pathSep } from "path";
import { Repository } from "nodegit";
import { Dependency } from "./config.js";

const noop = () => {};

export class Index {
  constructor(dependencies, versions, apply = noop, error = noop) {
    /* Process dependency configuration */
    dependencies = dependencies.map(d => Dependency(d));
    return (async () => {
      // const [index, identical] = await loadIndex(dependencies, versions, apply, error);
      // this.index = index;
      // this.identical = identical;
      [this.index, this.identical] = await loadIndex(dependencies, versions, apply, error);
      return this;
    })();
  }

  get entry() {
    return file => {
      let path = "";
      if (typeof file === "string") {
        path = file;
      } else if (file.isRenamed()) {
        const oldFile = file["headToIndex"]().oldFile();
        path = oldFile.path();
      } else {
        path = file.path();
      }
      return this.index[path];
    };
  }

  get entries() {
    return this.index;
  }

  get duplicates() {
    return this.identical;
  }

  update(path, entry) {
    this.index[path] = entry;
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
  const entry = index.entry(file);
  const rPathSep = new RegExp("\\" + pathSep, "g");
  return (join(entry.source, entry.file).match(rPathSep) || []).length;
}

function getNewDestination(index, location, file) {
  const entry = index.entry(file);
  const delta = file["headToIndex"]();
  const oldFile = delta.oldFile();
  const newFile = delta.newFile();
  const dest = relative(oldFile.path(), newFile.path());
  return join(process.cwd(), location, entry.source, entry.file, dest);
}

// export async function Index(dependencies, apply = noop, error = noop) {
//   /* Process dependency configuration */
//   dependencies = dependencies.map(d => Dependency(d));

//   return {
//     entries: await loadIndex(dependencies, apply, error),
//     get: path => {},
//     filter: (files = null, opts = { repository: "", branch: "" }) => {}
//   };
// }

async function loadIndex(dependencies, versions, apply = noop, error = noop) {
  let index = {};
  let identical = new Set();

  for (const dependency of dependencies) {
    for (const [version, branch] of dependency.map) {
      const latest = version === versions[versions.length - 1];
      const files = await getFiles(dependency, branch, error);

      for (const file of files) {
        addToIndex(index, identical, dependency, file, branch, latest ? "" : version);
        apply(file);
      }
    }
  }

  return [index, identical];
}

async function getFiles(dependency, branch, error = noop) {
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

function addToIndex(index, identical, dependency, file, branch, version) {
  let path = join(version, dependency.destination, file);
  if (typeof index[path] === "undefined") {
    index[path] = {
      /* Repository name */
      repository: dependency.repository,
      /* Repository branch */
      branch,
      /* Filename */
      file,
      /* File location in asterics-docs */
      destination: dependency.destination,
      /* File location in repository */
      source: dependency.source,
      /* File indexed */
      indexed: true
    };
  } else {
    identical.add(path);
  }
}

// export async function getIndex(log = true) {
//   let index = {};
//   const versions = config.get("versions");
//   const dependencies = config.get("dependencies");

//   for (const [i, dependency] of dependencies.entries()) {
//     const map = versionMap(dependency);
//     for (const [version, branch] of map) {
//       const cfg = getDependencyConfiguration(dependency);
//       const { location } = config.get("repositories").find(r => r.name === cfg.repository);

//       try {
//         const l = join(process.cwd(), location);
//         const r = await Repository.open(l);
//         const c = await r.getBranchCommit(`origin/${branch}`);
//         const e = await c.getEntry(cfg.source);
//         const t = await e.getTree();

//         const files = await walk(cfg.source, cfg.filter, t);
//         for (let file of files) {
//           let path = join(dependency.destination, file);

//           if (version !== versions[versions.length - 1]) {
//             path = join(version, path);
//           }

//           if (index[path]) {
//             if (log) {
//               process.stdout.write(error(`path '${path}' exists already. duplicates not possible.`));
//             }
//           } else {
//             index[path] = {
//               repository: cfg.repository,
//               source: join(cfg.source, file),
//               branch,
//               hash: c.sha()
//             };
//           }
//         }
//       } catch (err) {
//         if (log) {
//           process.stdout.write(error(err.message));
//           process.stdout.write(
//             info(`config.dependencies[${i}]: repository: ${cfg.repository}, version (branch): ${version}, location (tree): ${cfg.source}`)
//           );
//         }
//       }
//     }
//   }

//   return index;
// }

// export async function getIndex(each = null) {
//   let index = {};

//   /* For each dependency entry in `src/config/config.js`... */
//   for (const dependency of config.get("dependencies")) {

//     /* For each version (=branch) of current depdency... */
//     for (const [version, branch] of map(dependency)) {

//       const cfg = getDependencyConfiguration(dependency);
//       const { location } = config.get("repositories").find(r => r.name === cfg.repository);

//     }
//   }

// }

// async function walk(location, filter, tree) {
//   return await new Promise(async resolve => {
//     let a = [];
//     await tree
//       .walk()
//       .on("end", trees => {
//         trees = trees.filter(t => t && filter.test(t.path()));
//         for (let tree of trees) {
//           a.push(relative(location, tree.path()));
//         }
//         resolve(a);
//       })
//       .start();
//   });
// }

// export async function getIndexEntry(file) {}
// export async function filterIndex(files = null, opts = {repository: "", branch: ""})
