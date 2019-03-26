const { writeFileSync } = require("fs");
const { join } = require("path");
const { execSync } = require("child_process");

const configPath = join(process.cwd(), "src/config/config.js");
const indexPath = join(process.cwd(), "src/config/index.json");

const config = require(configPath),
  shell = require("shelljs"),
  { execute } = require("@asterics/node-utils");

const legacy = config.get("versions");
const latest = legacy.pop();

console.log(`Configured versions: ${config.get("versions")}`);

/* Setup submodules */
init();

/* Create index */
index();

config.get("versions").forEach(version => {
  /* Setup version */
  setup(version, version === latest);
  /* Build version */
  build(version, version === latest, latest);
});

/* Merge results */
merge(latest);

/* Create and save build statistics */
logBuildInfo();

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
function init() {
  let script = join(process.cwd(), "src/scripts/cli.js");
  execute({
    cmd: `node ${script} init`,
    success: `initialized asterics-docs`,
    error: `failed initializing asterics-docs`,
    verbose: config.get("verbose")
  });
}

function index() {
  let script = join(process.cwd(), "src/scripts/cli.js");
  execute({
    cmd: `node ${script} index`,
    success: `index all required versions`,
    error: `failed indexing versions`,
    verbose: config.get("verbose")
  });
}
function setup(version, latest) {
  let script = join(process.cwd(), "src/scripts/cli.js");
  let folder = join(process.cwd(), config.get("documentation"));
  folder += latest ? "" : `-${version}`;
  execute({
    cmd: `node ${script} setup -v=${version} -o ${folder}`,
    success: `setup version ${version} in ${folder}`,
    error: `failed setup version ${version} in ${folder}`,
    verbose: config.get("verbose")
  });
}

function build(version, isLatest, latest) {
  let docsDir = join(process.cwd(), config.get("documentation"));
  docsDir += isLatest ? "" : `-${version}`;
  let destDir = join(process.cwd(), config.get("destination"));
  destDir += isLatest ? "" : `-${version.replace(/\./g, "")}`;
  const index = require(indexPath);
  const endpoint = index["setup"][version]["endpoint"];
  execute({
    cmd: `npx vuepress build ${docsDir}`,
    success: `build asterics-docs in ${docsDir} to ${destDir} (version: ${version}, endpoint: ${endpoint})`,
    error: `failed building asterics-docs in ${docsDir} to ${destDir} (version: ${version}, endpoint: ${endpoint})`,
    verbose: config.get("verbose"),
    env: { VERSION: version, DOCUMENTATION: docsDir, DESTINATION: destDir, ENDPOINT: endpoint, LATEST: latest }
  });
}

function merge(latest) {
  config.get("versions").forEach(version => {
    if (version === latest) return;
    let destination = join(process.cwd(), config.get("destination"), version);
    let source = join(process.cwd(), config.get("destination"));
    source += `-${version.replace(/\./g, "")}`;
    shell.mv(source, destination);
  });
}

function logBuildInfo() {
  let commitId = execSync("git rev-parse HEAD", { encoding: "utf8" }).replace("\n", "");
  let commitUrl = "https://github.com/asterics/asterics-docs/commit/" + commitId;
  let date = Date();

  let buildInfo = { date, commitId, commitUrl };

  writeFileSync(join(process.cwd(), config.get("destination"), "build.json"), JSON.stringify(buildInfo, null, 4), "utf8");
}
