import fs from "fs";
import { join, relative, dirname } from "path";
import { Repository } from "nodegit";
import { mkdirp } from "@asterics/node-utils";
import { getIndex } from "./index.js";

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
  const index = await getIndex(options);
  await load(index, options);
};

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
