import { join, relative } from "path";
import { Repository } from "nodegit";
import { info, error } from "./shared/logger.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export const command = "index";
export const aliases = ["i"];
export const describe = "index files of asterics-docs project docs";
export const builder = yargs => {
  yargs
    .usage("yarn docs index")
    .default("version", undefined)
    .options({
      h: { alias: "help", describe: "Show this help." }
    });
};
export const handler = async options => {
  options.verbose = config.get("verbose") || options.verbose;
  let i = await getIndex();
  console.log(i);
};

export async function getIndex() {
  let index = {};
  const versions = config.get("versions");
  const dependencies = config.get("dependencies");

  for (const [i, version] of versions.entries()) {
    for (const [j, dependency] of dependencies.entries()) {
      const cfg = getDependencyConfiguration(dependency);
      const { location } = config.get("submodules").find(s => s.name === cfg.repository);

      try {
        const l = join(process.cwd(), location);
        const r = await Repository.open(l);
        const c = await r.getBranchCommit(`origin/${version}`);
        const e = await c.getEntry(cfg.source);
        const t = await e.getTree();

        const files = await walk(cfg.source, cfg.filter, t);
        for (let file of files) {
          let path = join(dependency.destination, file);

          if (version !== versions[versions.length - 1]) {
            path = join(version, path);
          }

          if (index[path]) {
            process.stdout.write(error(`path '${path}' exists already.`));
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
        process.stdout.write(error(err.message));
        process.stdout.write(
          info(`config.dependencies[${j}]: repository: ${cfg.repository}, version (branch): ${version}, location (tree): ${cfg.source}`)
        );
      }
    }
  }

  return index;
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

function getDependencyConfiguration(dependency) {
  let s = dependency.source.split(":");
  const repository = s.length === 2 ? s[0] : dependency.repository;
  const source = s.length === 2 ? s[1] : dependency.source;
  const filter = dependency.filter ? dependency.filter : /.*/;
  return { repository, source, filter };
}
