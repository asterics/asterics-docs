const path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath),
  { ensureGitSubmodule } = require("@asterics/git-tools");

exports.command = "submodule";
exports.aliases = ["init"];
exports.describe = "setup submodules";

exports.builder = yargs => {
  yargs.usage("node cli.js submodule").options({ h: { alias: "help", describe: "Show this help." } });
};

exports.handler = () => {
  /* Setup git submodules */
  config.get("submodules").forEach(submodule => ensureGitSubmodule(submodule, config.get("verbose")));
};
