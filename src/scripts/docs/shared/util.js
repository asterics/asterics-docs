import { join, relative } from "path";
import { Repository } from "nodegit";
import { error, info } from "./logger.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export function getDependencyConfiguration(dependency) {
  let s = dependency.source.split(":");
  const repository = s.length === 2 ? s[0] : dependency.repository;
  const source = s.length === 2 ? s[1] : dependency.source;
  const filter = dependency.filter ? dependency.filter : /.*/;
  return { repository, source, filter };
}

export async function getIndex(log = true) {
  let index = {};
  const versions = config.get("versions");
  const dependencies = config.get("dependencies");

  for (const [i, dependency] of dependencies.entries()) {
    const map = versionMap(dependency);
    for (const [version, branch] of map) {
      const cfg = getDependencyConfiguration(dependency);
      const { location } = config.get("repositories").find(r => r.name === cfg.repository);

      try {
        const l = join(process.cwd(), location);
        const r = await Repository.open(l);
        const c = await r.getBranchCommit(branch);
        const e = await c.getEntry(cfg.source);
        const t = await e.getTree();

        const files = await walk(cfg.source, cfg.filter, t);
        for (let file of files) {
          let path = join(dependency.destination, file);

          if (version !== versions[versions.length - 1]) {
            path = join(version, path);
          }

          if (index[path]) {
            if (log) {
              process.stdout.write(error(`path '${path}' exists already. duplicates not possible.`));
            }
          } else {
            index[path] = {
              repository: cfg.repository,
              source: join(cfg.source, file),
              branch,
              hash: c.sha()
            };
          }
        }
      } catch (err) {
        if (log) {
          process.stdout.write(error(err.message));
          process.stdout.write(
            info(`config.dependencies[${i}]: repository: ${cfg.repository}, version (branch): ${version}, location (tree): ${cfg.source}`)
          );
        }
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

function versionMap(dependency) {
  const versions = config.get("versions");
  if (dependency.branch) {
    return [[versions[versions.length - 1], dependency.branch]];
  } else {
    return dependency.versions.map(e => [e[0], `origin/${e[1]}`]);
  }
}

export async function isInIndex(path) {
  const index = await getIndex();
  if (index[path]) {
    return true;
  }
  return false;
}
