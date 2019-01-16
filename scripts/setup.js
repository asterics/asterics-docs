// require("dotenv").config();
const fs = require("fs-extra"),
  path = require("path");
const config = require(path.join(__dirname, "..", "config.js")),
  shell = require("shelljs");
const { gitLocalPath } = require("asterics-web-git");

console.log("CWD: " + process.cwd());

if (!shell.which("git")) {
  shell.echo("Sorry, this script requires git");
  shell.exit(1);
}

/* Run init commands for (all) repositories */
// [asterics, asterics_wiki].forEach(r => {
config.get("repositories").forEach(r => {
  let localPath = gitLocalPath(__dirname, r.reference),
    outputPath = path.join(r.path);
  let refCommand = localPath ? `--reference ${localPath}` : "";
  if (refCommand) console.log(`From (local) ${localPath}`);

  /* clone repository */
  // eslint-disable-next-line
  let s = shell.exec(`git submodule update --init ${refCommand} ${outputPath}`);
  if (s.code !== 0) {
    shell.echo(`failed cloning ${outputPath}`);
    if (r.fatal) shell.exit(1);
  }
  /* checkout branch/tag */
  // eslint-disable-next-line
  s = shell.exec(`git --git-dir=${outputPath}/.git --work-tree=${outputPath} checkout ${r.branch}`);
  if (s.code !== 0) {
    shell.echo(`failed checking out ${r.branch} in ${outputPath}`);
    if (r.fatal) shell.exit(1);
  }
  /* pull latest commits */
  // eslint-disable-next-line
  s = shell.exec(`git --git-dir=${outputPath}/.git --work-tree=${outputPath} pull origin ${r.branch}`);
  if (s.code !== 0) {
    shell.exec(`failed to pull latest commits of ${outputPath}`);
    if (r.fatal) shell.exit(1);
  }
});

/* Get valid versions */
let versions = config.getSchema().properties.latest.format.sort();
if (versions.some(v => v === "master")) {
  versions = versions.filter(e => e !== "master");
  versions.push("master");
}
/* Get configuration of AsTeRICS */
const asterics = config
  .get("repositories")
  .filter(v => v.name === "AsTeRICS")[0];

// eslint-disable-next-line
let buildPath = path.join(config.get("docsdir"), ".vuepress", config.get("dest"), config.get("prefix")),
  backupPath = path.join(config.get("docsdir"), ".vuepress", "temp"),
  docsdir = config.get("docsdir");

try {
  versions.forEach(v => {
    /* checkout version of AsTeRICS repository */
    // eslint-disable-next-line
    let s = shell.exec(`git --git-dir=${asterics.path}/.git --work-tree=${asterics.path} checkout ${v}`);
    if (s.code !== 0) {
      shell.echo(`failed checking out ${v} in ${asterics.path}`);
      shell.exit(1);
    }
    /* convert html to md */
    config.get("html_to_md").forEach(e => {
      s = shell.exec(`node ./cli.js convert ${e.from} ${e.to} -r`);
      if (s.code !== 0) {
        shell.echo(`failed converting ${e.from} (html) to ${e.to} (md).`);
        // console.log(r.stderr);
        // shell.exit(1);
      }
    });

    /* Stop with latest release */
    if (v === config.get("latest")) throw new Error("latest");

    /* build docs */
    // set environment variables
    process.env.ENDPOINT = `${config.get("prefix")}/${v}/`;
    process.env.DEST = buildPath;
    shell.echo(
      `asterics-docs: building version ${v} (endpoint: ${process.env.ENDPOINT})`
    );
    s = shell.exec(`./node_modules/.bin/vuepress build ${docsdir}`);
    if (s.code === 1) {
      // console.log("FIXME");
    } else if (s.code !== 0) {
      shell.echo(`failed building vuepress project in ${docsdir}/`);
      shell.exit(1);
    }

    /* backup folder */
    let backupDir = path.join(backupPath, v);
    fs.removeSync(backupDir);
    fs.ensureDir(backupDir);
    fs.copySync(buildPath, backupDir);

    /* delete conversion */
    config.get("html_to_md").forEach(e => {
      let folder = e.to;
      fs.readdirSync(folder)
        .filter(e => e !== "README.md")
        .forEach(e => {
          fs.removeSync(path.join(folder, e));
        });
    });
  });
} catch (e) {
  // if (typeof e === "LastestReleaseError") {
  // console.log("SUCCESS");
  if (e != "Error: latest") {
    throw e;
  }
} finally {
  /* build docs */
  // set environment variables
  process.env.ENDPOINT = config.get("prefix");
  process.env.DEST = buildPath;
  shell.echo(
    `asterics-docs: building version ${config.get("latest")} (endpoint: ${
      process.env.ENDPOINT
    })`
  );
  let s = shell.exec(`./node_modules/.bin/vuepress build ${docsdir}`);
  if (s.code === 1) {
    console.log("FIXME");
  } else if (s.code !== 0) {
    shell.echo(`failed building vuepress project in ${config.get("docsdir")}/`);
    shell.exit(1);
  }

  /* merge results */
  fs.readdirSync(backupPath).forEach(e => {
    let sourcePath = path.join(backupPath, e);
    let targetPath = path.join(buildPath, e);
    if (fs.statSync(sourcePath).isDirectory()) {
      fs.copySync(sourcePath, targetPath);
    }
  });

  /* cleanup */
  console.log("finally");
}
