const path = require("path");

const configPath = path.join(process.cwd(), ..."src/config/config.js".split("/"));
const config = require(configPath);
const { ensureGitSubmodule } = require("@asterics/git-tools");

exports.command = "init";
exports.aliases = [""];
exports.describe = "initialize asterics-docs project";

exports.builder = yargs => {
  yargs.usage("node cli.js init").options({
    h: { alias: "help", describe: "Show this help." }
  });
};

exports.handler = args => {
  config.get("submodules").forEach(({ name, location, reference, branch }) => {
    ensureGitSubmodule({ name, location, reference, branch }, config.get("verbose"));
  });
};
