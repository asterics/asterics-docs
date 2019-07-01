import { join } from "path";
import { Repository, IndexEntry } from "nodegit";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export const command = "add <source|file|folder> [repository] [destination]";
export const alias = ["a"];
export const describe = "add a file to the asterics-docs project docs";
export const builder = yargs => {
  yargs
    .usage("yarn docs add <file|folder>")
    .positional("file", { describe: "file/folder to add.", type: "string" })
    .options({
      h: { alias: "help", describe: "Show this help.", type: "boolean" },
      v: { alias: "verbose", describe: "Print processing information to stdout.", type: "boolean" }
    });
};
export const handler = async options => {
  try {
    const r = await Repository.open(join(process.cwd(), config.get("documentation")));
    const i = await r.refreshIndex();
    await i.addAll(options.source);
    await i.write();
  } catch (err) {
    console.log(err);
  }
};
