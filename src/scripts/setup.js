const path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");
const indexPath = path.join(process.cwd(), "src", "config", "index.json");

const config = require(configPath),
  shell = require("shelljs"),
  { execute } = require("@asterics/node-utils");

const legacy = config.get("versions");
const latest = legacy.pop();

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

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
function init() {
  let script = path.join(process.cwd(), "src", "scripts", "cli.js");
  execute({
    cmd: `node ${script} init`,
    success: `initialized asterics-docs`,
    error: `failed initializing asterics-docs`,
    verbose: config.get("verbose")
  });
}

function index() {
  let script = path.join(process.cwd(), "src", "scripts", "cli.js");
  execute({
    cmd: `node ${script} index`,
    success: `index all required versions`,
    error: `failed indexing versions`,
    verbose: config.get("verbose")
  });
}
function setup(version, latest) {
  let script = path.join(process.cwd(), "src", "scripts", "cli.js");
  let folder = path.join(process.cwd(), config.get("documentation"));
  folder += latest ? "" : `-${version}`;
  execute({
    cmd: `node ${script} setup -v="'${version}'" -o ${folder}`,
    success: `setup version ${version} in ${folder}`,
    error: `failed setup version ${version} in ${folder}`,
    verbose: config.get("verbose")
  });
}

function build(version, isLatest, latest) {
  let docsDir = path.join(process.cwd(), config.get("documentation"));
  docsDir += isLatest ? "" : `-${version}`;
  let destDir = path.join(process.cwd(), config.get("destination"));
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
    let destination = path.join(process.cwd(), config.get("destination"), version);
    let source = path.join(process.cwd(), config.get("destination"));
    source += `-${version.replace(/\./g, "")}`;
    shell.mv(source, destination);
  });
}

// /* Setup git submodules */
// // config.get("submodules").forEach(submodule => ensureGitSubmodule(submodule, config.get("verbose")));

// /* Clean possible conversion files of latest release */
// // checkoutSubmodule({ ...AsTeRICS, branch: latest }, config.get("verbose"));
// // clean();

// /* Index versioned content */
// // versions();

// /* Build legacy versions */
// // legacy.forEach(version => {
// //   checkoutSubmodule({ ...AsTeRICS, branch: version }, config.get("verbose"));
//   // convert();
//   // copy(version);
//   // buildLegacy(version);
//   // clean(); // conversion
// // });

// /* Build latest versions */
// // checkoutSubmodule({ ...AsTeRICS, branch: latest }, config.get("verbose"));
// // convert();
// // copy(latest);
// // // build();

// /* Copy legacy build to public */
// // public();

// function versions() {
//   let script = path.join(config.get("wd"), "src", "scripts", "cli.js");
//   let versioned = path.join(config.get("wd"), "src", "config", "versions.json");
//   execute({
//     cmd: `node ${script} versions ${versioned} -r -f`,
//     success: "indexed versioned content",
//     error: "failed indexing versioned content",
//     verbose: config.get("verbose")
//   });
// }

// function convert() {
//   config.get("html_to_md").forEach(({ from, to }) => {
//     let script = path.join(config.get("wd"), "src", "scripts", "cli.js");
//     execute({
//       cmd: `node ${script} convert ${from} ${to} -r`,
//       success: `converted files in ${from} to ${to}`,
//       error: `failed converting files in ${from} to ${to}`,
//       verbose: config.get("verbose")
//     });
//   });
// }

// function copy(version) {
//   config.get("md_to_md").forEach(({ from, to, versions }) => {
//     console.log(versions[version]);
//     let v = versions[version] || version;

//     ensure(from);

//     let { copies } = loadCopyJobs({ input: path.join(process.cwd(), from), output: path.join(process.cwd(), to), recursive: true });
//   });
// }

// function ensure(from) {
//   let submodule = isSubmodule(from);

//   if (submodule) {
//     ensureGitSubmodule()
//   }
// }

// function isSubmodule(location) {
//   let submodule = null;
//   config.get("submodules").forEach(s => {
//     /* Test whether location points to submodule destination, i.e.
//        relative path does not start with ".."
//     */
//     if(!/^\.\./.test(path.relative(s.destination, location))) {
//       submodule = s;
//       break;
//     }
//   });

//   return s;
// }

// function clean() {
//   config.get("html_to_md").forEach(({ from, to }) => {
//     let script = path.join(config.get("wd"), "src", "scripts", "cli.js");
//     execute({
//       cmd: `node ${script} convert ${from} ${to} -r -c`,
//       success: `cleaned converted files in ${to}`,
//       error: `failed cleaning converted files in ${to}`,
//       verbose: config.get("verbose")
//     });
//   });
// }

// // function build() {
// //   let documentation = path.join(config.get("wd"), config.get("documentation")),
// //     destination = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "dist");
// //   execute({
// //     cmd: `npx vuepress build ${documentation}`,
// //     success: `built docs at ${documentation} (endpoint: ${endpoint}, destination: ${destination})`,
// //     error: `failed building docs at ${documentation} (endpoint: ${endpoint}, destination: ${destination})`,
// //     env: { DESTINATION: destination },
// //     verbose: config.get("verbose")
// //   });
// // }

// function buildLegacy(version) {
//   let documentation = path.join(config.get("wd"), config.get("documentation")),
//     endpoint = config.get("endpoint") ? `${config.get("endpoint")}/${version}` : `${version}`,
//     /* NOTE: destinations with a dot in the folder name (e.g., v2.3/) result in error (EISDIR). */
//     destination = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp", "build"),
//     final = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp", version);
//   execute({
//     cmd: `npx vuepress build ${documentation}`,
//     success: `built docs at ${documentation} (endpoint: /${endpoint}/, destination: ${final})`,
//     error: `failed building docs at ${documentation} (endpoint: /${endpoint}/, destination: ${final})`,
//     env: { ENDPOINT: endpoint, DESTINATION: destination },
//     verbose: config.get("verbose")
//   });
//   shell.mv(destination, final);
// }

// function public() {
//   let public = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "public"),
//     temp = path.join(config.get("wd"), config.get("documentation"), ".vuepress", "temp");

//   fs.readdirSync(temp).forEach(folder => {
//     let source = path.join(temp, folder);
//     destination = path.join(public, folder);

//     fs.renameSync(source, destination);
//   });

//   fs.rmdirSync(temp);
// }
