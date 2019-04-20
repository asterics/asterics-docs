import { join, relative } from "path";
import { Repository } from "nodegit";

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
      h: { alias: "help", describe: "Show this help." }
    });
};
export const handler = ({ version, out }) => {
  if (version === undefined) {
    // console.log("use config");
  }

  // Resolved dependencies
  (async () => {
    let index = [];
    for (let version of config.get("versions")) {
      await resolve(index, version);
    }

    console.log(index);
    // Create index
    // Add routes
    // Add jobs
    // Create output folder
    // Process index
  })();
};

async function resolve(index, version) {
  let files = {};

  for (let dependency of config.get("dependencies")) {
    const { submodule } = processSource(dependency);
    files[submodule] = files[submodule] || [];
    await load(files[submodule], dependency, version);
  }

  index.push({ version, files });
}

async function load(files, dependency, version) {
  const { submodule, srcPath } = processSource(dependency);
  const { location } = config.get("submodules").find(s => s.name === submodule);
  for (let f of await loadFilesFrom(location, version, srcPath, dependency.filter)) {
    files.push({
      source: join(srcPath, f),
      destination: join(dependency.destination, f)
    });
  }
  // console.log(files);
}

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
