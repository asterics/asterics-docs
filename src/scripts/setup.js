const path = require("path"),
  fs = require("fs");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath),
  shell = require("shelljs"),
  { ensureGitSubmodule, checkoutSubmodule } = require("@asterics/git-tools"),
  { execute } = require("@asterics/node-utils");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

const AsTeRICS = config.get("submodules").find(submodule => submodule.name === "AsTeRICS"),
  legacy = config.get("versions"),
  latest = legacy.pop();

/* Setup git submodules */
config.get("submodules").forEach(submodule => ensureGitSubmodule(submodule, config.get("verbose")));

/* Clean possible conversion files of latest release */
checkoutSubmodule({ ...AsTeRICS, branch: latest }, config.get("verbose"));
clean();

/* Build legacy versions */
legacy.forEach(version => {
  checkoutSubmodule({ ...AsTeRICS, branch: version }, config.get("verbose"));
  convert();
  buildLegacy(version);
  clean(); // conversion
});

/* Build latest versions */
checkoutSubmodule({ ...AsTeRICS, branch: latest }, config.get("verbose"));
convert();
// build();

/* Copy legacy build to public */
public();

function convert() {
  config.get("html_to_md").forEach(({ from, to }) => {
    let script = path.join(config.get("wd"), "src", "scripts", "cli.js");
    execute({
      cmd: `node ${script} convert ${from} ${to} -r`,
      success: `converted files in ${from} to ${to}`,
      error: `failed converting files in ${from} to ${to}`,
      verbose: config.get("verbose")
    });
  });
}

function clean() {
  config.get("html_to_md").forEach(({ from, to }) => {
    let script = path.join(config.get("wd"), "src", "scripts", "cli.js");
    execute({
      cmd: `node ${script} convert ${from} ${to} -r -c`,
      success: `cleaned converted files in ${to}`,
      error: `failed cleaning converted files in ${to}`,
      verbose: config.get("verbose")
    });
  });
}

// function build() {
//   let documentation = path.join(config.get("wd"), config.get("documentation")),
//     destination = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "dist");
//   execute({
//     cmd: `npx vuepress build ${documentation}`,
//     success: `built docs at ${documentation} (endpoint: ${endpoint}, destination: ${destination})`,
//     error: `failed building docs at ${documentation} (endpoint: ${endpoint}, destination: ${destination})`,
//     env: { DESTINATION: destination },
//     verbose: config.get("verbose")
//   });
// }

function buildLegacy(version) {
  let documentation = path.join(config.get("wd"), config.get("documentation")),
    endpoint = config.get("endpoint") ? `${config.get("endpoint")}/${version}` : `${version}`,
    /* NOTE: destinations with a dot in the folder name (e.g., v2.3/) result in error (EISDIR). */
    destination = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp", "build"),
    final = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp", version);
  execute({
    cmd: `npx vuepress build ${documentation}`,
    success: `built docs at ${documentation} (endpoint: /${endpoint}/, destination: ${final})`,
    error: `failed building docs at ${documentation} (endpoint: /${endpoint}/, destination: ${final})`,
    env: { ENDPOINT: endpoint, DESTINATION: destination },
    verbose: config.get("verbose")
  });
  shell.mv(destination, final);
}

function public() {
  let public = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "public"),
    temp = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp");

  fs.readdirSync(temp).forEach(folder => {
    let source = path.join(temp, folder);
    destination = path.join(public, folder);

    fs.renameSync(source, destination);
  });

  fs.rmdirSync(temp);
}
