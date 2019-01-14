require("dotenv").config();
const fs = require("fs");
const shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script reqiuire git");
  shell.exit(1);
}

let asterics = {
    path: process.env.GIT_SUBMODULE_ASTERICS,
    ref: process.env.GIT_SUBMODULE_ASTERICS_REF,
    branch: process.env.GIT_SUBMODULE_ASTERICS_BRANCH || "master",
    fatal: process.env.GIT_SUBMODULE_ASTERICS_FATALITY || false
  },
  asterics_wiki = {
    path: process.env.GIT_SUBMODULE_ASTERICS_WIKI,
    ref: process.env.GIT_SUBMODULE_ASTERICS_WIKI_REF,
    branch: process.env.GIT_SUBMODULE_ASTERICS_WIKI_BRANCH || "master",
    fatal: process.env.GIT_SUBMODULE_ASTERICS_WIKI_FATALITY || false
  };
// commands_init = [
//   r => {
//     return {
//       cmd: `git submodule init ${r.path}`,
//       response: `failed initializing submodule ${r.path}`
//     };
//   },
//   r => {
//     return {
//       cmd: `git submodule update ${r.path}`,
//       response: `failed cloning submodule ${r.path}`
//     };
//   },
//   r => {
//     return {
//       cmd: `git --git-dir=${r.path} --work-tree=${r.path} checkout ${
//         r.branch
//       }`,
//       response: `failed checking out ${r.branch} of submodule ${r.path}`
//     };
//   }
// ];

/* Run init commands for each repository */
[asterics, asterics_wiki].forEach(r => {
  /* Clone from local repository (if folder exists). FIXME: search .git/ folder */
  let ref = fs.existsSync(`../${r.ref}`) ? `--reference ${r.ref}` : "";
  [
    `git submodule update --init ${ref} ${r.path}`,
    `git --git-dir=${r.path}/.git --work-tree=${r.path} checkout ${r.branch}`
  ].forEach(cmd => {
    if (shell.exec(cmd).code !== 0) {
      shell.echo(``);
      if (r.fatal) shell.exit(1);
    }
  });
});
