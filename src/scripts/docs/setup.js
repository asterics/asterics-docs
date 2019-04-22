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
    } catch (err) {
      console.log("error", location, source, filter);
    }
  }
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
