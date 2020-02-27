import { existsSync, writeFileSync } from "fs";
import { join, dirname, relative } from "path";
import { clearScreenDown } from "readline";
import { Index } from "./shared/index.js";
import { init, commit } from "./shared/repository.js";
import { error, info } from "./shared/logger.js";
import { cursorSavePosition, cursorRestorePosition } from "ansi-escapes";
import { Repository } from "nodegit";
import { mkdirp } from "@asterics/node-utils";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
let opts = null;

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
  /* Process options */
  options.verbose = config.get("verbose") || options.verbose;
  opts = options;

  /* Check existance of local `docs` repository */
  const docsPath = join(process.cwd(), config.get("documentation"));
  if (!existsSync(docsPath)) {
    /* Load index */
    const index = await new Index();

    process.stdout.write(cursorSavePosition);

    /* Load indexed files */
    await index.setup();
    // for (const path of index.all) {
    //   const entries = index.get(path);
    //   await loadFile(
    //     path,
    //     entries.find(({ indexed }) => indexed)
    //   );
    // }
    clearScreenDown(process.stdout);

    /* Create local `docs` repository and commit initial state */
    await init(docsPath);
    await commit(docsPath, "robot", "noreply+studyathome@technikum-wien.at");
  } else {
    process.stdout.write(
      error(
        `cannot setup asterics-docs. folder '${relative(process.cwd(), docsPath)}' exists already.`
      )
    );
  }
};

async function loadFile(path, entry) {
  ensureParentDir(path);
  await copyFile(path, entry);
}

function ensureParentDir(path) {
  try {
    const d = join(process.cwd(), config.get("documentation"), path);
    const parent = dirname(d);
    if (!existsSync(parent)) {
      mkdirp(parent);
    }
  } catch (err) {
    process.stdout.write(error(err));
  }
}

async function copyFile(path, entry) {
  try {
    const { repository, source, file, branch } = entry;
    // const { location } = config.get("repositories").find(r => r.name === repository);
    const { location } = config.get("submodules").find(r => r.name === repository);
    const r = await Repository.open(join(process.cwd(), location));
    const c = await r.getBranchCommit(`origin/${branch}`);
    const e = await c.getEntry(join(source, file));
    const b = await e.getBlob();
    const destination = join(process.cwd(), config.get("documentation"), path);
    const content = b.isBinary() ? b.content() : b.toString();
    clearScreenDown(process.stdout);
    process.stdout.write(
      info(path, { end: opts.verbose ? "\n" : cursorRestorePosition, label: "loading" })
    );
    writeFileSync(destination, content);
  } catch (err) {
    process.stdout.write(error(err));
  }
}
