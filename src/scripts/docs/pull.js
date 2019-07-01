import { join } from "path";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export const command = "pull";
export const alias = "";
export const describe = "pull from origin";
export const builder = yargs => {
  yargs.usage("yarn docs pull").options({
    h: { alias: "help", describe: "Show this help.", type: "boolean" }
  });
};
export const handler = async options => {
  console.log("pull", options);
  try {
  } catch (err) {
    console.log(err);
  }
};
