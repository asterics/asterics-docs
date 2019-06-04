import { join } from "path";
import { getIndex } from "./shared/util.js";

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
