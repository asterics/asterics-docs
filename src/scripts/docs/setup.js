import fs from "fs";
import { join, relative, dirname } from "path";
import { Repository } from "nodegit";
import { mkdirp } from "@asterics/node-utils";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export const command = "setup [version] [out]";
export const aliases = ["s"];
export const describe = "setup asterics-docs project docs";
export const builder = yargs => {
  yargs
    .usage("yarn docs setup")
    .default("version", undefined)
    .default("out", undefined)
    .options({
      h: { alias: "help", describe: "Show this help." },
      v: {
        alias: "verbose",
        describe: "Print processing information to stdout",
        type: "boolean"
      }
    });
};
export const handler = async options => {
  options.verbose = config.get("verbose") || options.verbose;
  const index = await loadIndex(options);
  await load(index, options);

  // await load(index, version, version === versions[versions.length - 1] ? "" : version, options);

  // if (version === undefined) {
  // console.log("use config");
  // }
  // Resolved dependencies
  // (async () => {
  //   let index = [];
  //   for (let version of config.get("versions")) {
  //     await resolve(index, version);
  //   }
  //   console.log(index);
  // Create index
  // Add routes
  // Add jobs
  // Create output folder
  // Process index
  // })();
};

async function loadIndex(options) {
  let index = {};
  const versions = config.get("versions");
  const dependencies = config.get("dependencies");
  for (let version of versions) {
    for (let dependency of dependencies) {
      const cfg = getDependencyConfiguration(dependency);
      const { location } = config.get("submodules").find(s => s.name === cfg.repository);

      try {
        const r = await Repository.open(join(process.cwd(), location));
        const c = await r.getBranchCommit(`origin/${version}`);
        const e = await c.getEntry(cfg.source);
        const t = await e.getTree();
        // const f = await walk(cfg.filter, t, async file => {
        //   let destination = relative(cfg.source, file);

        //   if (version !== versions[versions.length - 1]) {
        //     destination = join(version, destination);
        //   }

        //   if (index[destination]) {
        //     console.log(`error: path ${destination} exists already`);
        //   } else {
        //     index[destination] = {
        //       repository: cfg.repository,
        //       source: cfg.source,
        //       branch: version,
        //       hash: c.sha()
        //     };
        //   }
        // });

        const f = await walk(cfg.source, cfg.filter, t);
        for (let file of f) {
          let path = join(dependency.destination, file);

          if (version !== versions[versions.length - 1]) {
            path = join(version, path);
          }

          if (index[path]) {
            console.log(`error: path ${path} exists already`);
          } else {
            index[path] = {
              repository: cfg.repository,
              source: join(cfg.source, file),
              branch: version,
              hash: c.sha()
            };
          }
        }
      } catch (err) {
        console.log("error", location, version, cfg.source, cfg.filter);
      }
    }
  }
  return index;
}

async function load(index, options) {
  for (let destination in index) {
    const { repository, source, branch, hash } = index[destination];
    const { location } = config.get("submodules").find(s => s.name === repository);
    const d = join(process.cwd(), config.get("documentation"), destination);
    const s = join(location, source);

    try {
      const r = await Repository.open(join(process.cwd(), location));
      const c = await r.getBranchCommit(`origin/${branch}`);
      const e = await c.getEntry(source);
      const b = await e.getBlob();

      const dir = dirname(d);
      if (!fs.existsSync(dir)) {
        console.log(`creating directory: ${dir}`);
        mkdirp(dir);
      }

      if (b.isBinary()) {
        console.log(`creating binary: ${d}`);
        fs.writeFileSync(d, b.content());
      } else {
        console.log(`creating text file: ${d}`);
        fs.writeFileSync(d, b.toString());
      }

      // console.log(`copying ...\n \t ${s}\n \t ${d}`);
    } catch (err) {}
  }
}

// async function walk(filter, tree, cb) {
//   await tree
//     .walk()
//     .on("end", trees => {
//       trees = trees.filter(t => t && filter.test(t.path()));
//       for (let tree of trees) {
//         cb(tree.path());
//       }
//     })
//     .start();
// }

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

//
//
//
//

// async function loadIndex(version, options) {
//   let files = {};
//   for (let dep of config.get("dependencies")) {
//     await loadDependency(files, version, dep, options);
//   }
//   return { files, version };
// }

async function loadDependency(files, version, dependency, options) {
  const cfg = getDependencyConfiguration(dependency);
  const { location } = config.get("submodules").find(s => s.name === cfg.repository);

  try {
    const r = await Repository.open(join(process.cwd(), location));
    const c = await r.getBranchCommit(`origin/${version}`);
    const e = await c.getEntry(cfg.source);
    const t = await e.getTree();
    const f = await getFiles(cfg.source, cfg.filter, t);
    files[cfg.repository] = files[cfg.repository] || [];
    files[cfg.repository].push({
      source: cfg.source,
      destination: dependency.destination,
      files: f
    });
  } catch (err) {
    console.log("error", location, version, cfg.source, cfg.filter);
  }
}

function getDependencyConfiguration(dependency) {
  let s = dependency.source.split(":");
  const repository = s.length === 2 ? s[0] : dependency.repository;
  const source = s.length === 2 ? s[1] : dependency.source;
  const filter = dependency.filter ? dependency.filter : /.*/;
  return { repository, source, filter };
}

async function getFiles(location, filter, tree) {
  return await new Promise(async resolve => {
    let a = [];
    await tree
      .walk()
      .on("end", trees => {
        trees = trees.filter(t => filter.test(t.path()));
        for (let tree of trees) {
          a.push(relative(location, tree.path()));
        }
        resolve(a);
      })
      .start();
  });
}

async function loadFiles(index) {
  console.log(index);
}

//
//
//
//
async function resolve(index, version) {
  let files = {};

  for (let dependency of config.get("dependencies")) {
    const { submodule } = processSource(dependency);
    files[submodule] = files[submodule] || [];
    await load(files[submodule], dependency, version);
  }

  index.push({ version, files });
}

// async function load(files, dependency, version) {
//   const { submodule, srcPath } = processSource(dependency);
//   const { location } = config.get("submodules").find(s => s.name === submodule);
//   for (let f of await loadFilesFrom(location, version, srcPath, dependency.filter)) {
//     files.push({
//       source: join(srcPath, f),
//       destination: join(dependency.destination, f)
//     });
//   }
//   // console.log(files);
// }

function processSource({ repository, source }) {
  let m = /(.*):(.*)/.exec(source);
  return { submodule: m ? m[1] : repository, srcPath: m ? m[2] : source };
}

async function loadFilesFrom(location, version, source, filter) {
  try {
    const repository = await Repository.open(join(process.cwd(), location));
    const commit = await repository.getBranchCommit(`origin/${version}`);
    const entry = await commit.getEntry(source);
    const tree = await entry.getTree();
    return await getFiles(source, filter, tree);
  } catch (err) {
    return [];
  }
}

async function loadSource(index, submodule, source, filter) {
  /* Get handle to git repository */
  const { location } = config.get("submodules").find(s => s.name === submodule);
  // console.log(location);

  // (async () => {
  repository = await Repository.open(join(process.cwd(), location));
  // console.log(repository);

  for (let version of config.get("versions")) {
    // console.log(version);

    let commit = await repository.getBranchCommit(`origin/${version}`);
    let entry = await commit.getEntry(source);
    let tree = await entry.getTree();
    let result = await getFiles(source, filter, tree);
    // console.log(result);
  }
  // })();
}
