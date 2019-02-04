const path = require("path");
const { Repository } = require("nodegit");
const configPath = path.join(process.cwd(), ..."src/config/config.js".split("/"));
const config = require(configPath);

async function getGitRepository(name) {
  let { location } = config.get("submodules").find(s => s.name === name);
  return location ? await Repository.open(location) : null;
}

module.exports = { getGitRepository };
