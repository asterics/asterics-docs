require("dotenv").config();
const { gitLocalPath } = require("asterics-web-git");
const shell = require("shelljs");

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

var asterics = {
  path: process.env.GIT_SUBMODULE_ASTERICS,
  ref: gitLocalPath(__dirname, process.env.GIT_SUBMODULE_ASTERICS_REF),
  branch: process.env.GIT_SUBMODULE_ASTERICS_BRANCH || "master",
  fatal: process.env.GIT_SUBMODULE_ASTERICS_FATALITY || false
};
var asterics_wiki = {
  path: process.env.GIT_SUBMODULE_ASTERICS_WIKI,
  ref: gitLocalPath(__dirname, process.env.GIT_SUBMODULE_ASTERICS_WIKI_REF),
  branch: process.env.GIT_SUBMODULE_ASTERICS_WIKI_BRANCH || "master",
  fatal: process.env.GIT_SUBMODULE_ASTERICS_WIKI_FATALITY || false
};

/* Run init commands for (all) repositories */
[asterics, asterics_wiki].forEach(r => {
  let ref = r.ref ? `--reference ${r.ref}` : "";
  if (ref) console.log(`From (local) ${r.ref}`);

  /* clone repository */
  // eslint-disable-next-line
  if (shell.exec(`git submodule update --init ${ref} ${r.path}`).code !== 0) {
    shell.echo(`failed cloning ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
  /* checkout branch/tag */
  // eslint-disable-next-line
  if (shell.exec(`git --git-dir=${r.path}/.git --work-tree=${r.path} checkout ${r.branch}`).code !== 0) {
    shell.echo(`failed checking out ${r.branch} in ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
  /* pull latest commits */
  // eslint-disable-next-line
  if (shell.exec(`git --git-dir=${r.path}/.git --work-tree=${r.path} pull origin ${r.branch}`).code !== 0) {
    shell.exec(`failed to pull latest commits of ${r.path}`);
    if (r.fatal) shell.exit(1);
  }
});
