import { join } from "path";
import { clearScreenDown } from "readline";
import { Index } from "./shared/index.js";
import { info, success, error } from "./shared/logger.js";
import { cursorSavePosition, cursorRestorePosition } from "ansi-escapes";

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
  const end = options.verbose ? "\n" : cursorRestorePosition;

  const dependencies = config.get("dependencies");
  const versions = config.get("versions");

  process.stdout.write(cursorSavePosition);

  const index = await new Index(
    dependencies,
    versions,
    file => {
      process.stdout.write(info(`${file} ...`, { end, label: "indexing" }));
      clearScreenDown(process.stdout);
    },
    err => {
      const msg = err.toString().slice(7);
      process.stdout.write(error(msg, { end, label: "error" }));
      clearScreenDown(process.stdout);
    }
  );

  process.stdout.write(success(`Indexed ${Object.keys(index.entries).length} entries.`));
  process.stdout.write(error(`Paths of ${index.duplicates.size} entries are specified multiple times.`));
};
