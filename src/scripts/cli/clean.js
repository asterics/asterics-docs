const path = require("path");
const rimraf = require("rimraf");

const configPath = path.join(process.cwd(), "src/config/config.js");
const config = require(configPath);

exports.command = "clean";
exports.aliases = [""];
exports.describe = "clean asterics-docs project";

exports.builder = yargs => {
  yargs.usage("node cli.js clean").options({
    h: { alias: "help", describe: "Show this help." }
  });
};

exports.handler = args => {
  config.get("submodules").forEach(({ location }) => {
    rimraf.sync(path.join(process.cwd(), location));
    rimraf.sync(path.join(process.cwd(), ".git", "modules", location));
  });
};
