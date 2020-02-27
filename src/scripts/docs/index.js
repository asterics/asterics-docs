import { join } from "path";
import { clearScreenDown } from "readline";
import { Index } from "./shared/index.js";
import { info, success, error } from "./shared/logger.js";
import { cursorSavePosition, cursorRestorePosition } from "ansi-escapes";
import { Dependency } from "./shared/config.js";

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
  /* TODO:
   *  - print index information
   *  - allow regex selection of printed paths
   */
  options.verbose = config.get("verbose") || options.verbose;
  const end = options.verbose ? "\n" : cursorRestorePosition;

  process.stdout.write(cursorSavePosition);
  const index = await new Index(
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

  process.stdout.write(success(`Indexed ${index.all.length} entries.`));
  // process.stdout.write(
  //   error(`Paths of ${index.duplicates.size} entries are specified multiple times.`)
  // );
  // console.log(index.all);

  // console.log(index);
  console.log(index.get(".vuepress/public/favicon/favicon.ico"));
  // console.log(index.get(".vuepress/public/favicon/favicon.ico'"));
  // .vuepress/public/webapps/startpage/lib/LICENSE/jquery_MIT.txt
};
