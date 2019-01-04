require("dotenv").config();
const term = require("terminal-kit").terminal;
const { Repository, Tag } = require("nodegit");
const ora = require("ora");
const klaw = require("klaw-sync");
const path = require("path");
const fs = require("fs-extra");
const turndown = require("turndown")();
const exec = require("util").promisify(require("child_process").exec);
/* Custom modules */
const { asyncForEach } = require("./util/util");
const { loadTaggedVersions, getTargetId, checkoutCommit, checkoutBranch } = require("./util/git");

/* FIXME: Print configuration and simplify output */
/* FIXME: Ask and create folders where necessary */
/* FIXME: Change timeout to continue on ENTER */
async function handleBuild(header, callback) {
  term.clear();
  header();
  term("Select from available tags:\n");

  let versions = await getValidVersions(process.env.ASTERICS_REPO);
  let menu = ["all", ...versions];
  let options = { cancelable: true, exitOnUnexpectedKey: true };
  term.singleColumnMenu(menu, options, async (error, response) => {
    /* Clear terminal */
    term.clear();
    header();
    if (response.selectedText !== "all") {
      let version = response.selectedText;
      await convertBuildAndCopy(version);
    } else {
      await asyncForEach(versions, async v => {
        let final = v === versions[versions.length - 1];
        await convertBuildAndCopy(v, final);
      });
    }

    callback();
  });
}

async function convertBuildAndCopy(v, final = true) {
  term(`Selection: `).bold(`${v}\n\n`);

  /* Checkout commit */
  await checkoutVersion(process.env.ASTERICS_REPO, v);

  /* Copy and convert ACS Help files */
  let acsHelpPath = `${process.env.ASTERICS_REPO}/${process.env.ACS_HELP_SRC}`,
    acsHelpDestPath = `${process.env.DOCS_SRC}/${process.env.ACS_HELP_DEST}`;
  await convertHTMLtoMarkdown(acsHelpPath, acsHelpDestPath);

  /* Build asterics-docs version */
  await buildDocs(process.env.DOCS_SRC, process.env.DOCS_DEST, v);

  /* Backup built version */
  await backupBuild(process.env.DOCS_DEST, process.env.BUILD_DEST, v);

  /* Check out master branch */
  if (final) {
    await checkoutMasterBranch(process.env.ASTERICS_REPO);
  } else {
    term("\n");
  }
}

async function getValidVersions(path) {
  let repository = await Repository.open(path);
  let tags = await Tag.list(repository);
  let versions = loadTaggedVersions(tags);
  return versions.sort().reverse();
}

async function checkoutVersion(path, v) {
  let spinner = ora(`checking out tag ${v} in ${path}...`).start();
  let astericsRepo = await Repository.open(path);
  let targetId = await getTargetId(astericsRepo, v);
  await checkoutCommit(astericsRepo, targetId);
  spinner.succeed(`checked out tag ${v} in ${path}`);
}

/* FIXME: Remove exiting folders (ACS, ARE, Plugin) from destination before copy */
async function convertHTMLtoMarkdown(src, dest, v) {
  spinner = ora(`convert and copy files of ${v} from ${src} to ${dest}...`).start();

  let dirs = await klaw(src, { nofile: true });
  await asyncForEach(dirs, async dir => {
    let dirName = dir.path.substr(dir.path.lastIndexOf("/") + 1, dir.path.length);
    let relPath = path.relative(src, dir.path);
    let dstPath = `${dest}/${relPath}`;

    /* Copy images */
    if (dirName.match(/img/)) {
      fs.copySync(dir.path, dstPath);
    }

    /* Copy & convert (html) documentation files */
    if (!dirName.match(/(stylesheet|img)/)) {
      /* Ensure target subfolder exists */
      await fs.ensureDir(dstPath);

      /* Get all files of folder */
      let files = fs.readdirSync(dir.path);

      await asyncForEach(files, async file => {
        /* Load html files only */
        if (file.match(/.*html?$/)) {
          let target = file.substr(0, file.lastIndexOf(".")) + ".md";
          let srcHTML = `${dir.path}/${file}`;
          let dstMD = `${dstPath}/${target}`;

          /* Convert html to markdown */
          let textHTML = fs.readFileSync(srcHTML);
          textHTML = textHTML.toString("utf8");
          let textMD = turndown.turndown(textHTML);

          /* Copy markdown files (only) */
          fs.writeFile(dstMD, textMD);
        }
      });
    }
  });

  spinner.succeed(`converted and copied files of ${v} from ${src} to ${dest}`);
}

async function buildDocs(src, dest, v) {
  let cmd = `node_modules/vuepress/bin/vuepress.js build ${src}`;
  let txt = `building version ${v} of asterics-docs from ${src} with enpoint /${v}/ using following command:\n\n\t"${cmd}"`;
  spinner = ora(txt).start();

  /* Run vuepress build command */
  process.env.AS_DOCS_VERSION = v;
  let { stdout, stderr } = await exec(`${cmd}`);

  txt = `built version ${v} of asterics-docs from ${src} with enpoint /${v}/. Results stored to ${dest}.`;
  spinner.succeed(txt);
}

async function backupBuild(srcPath, destPath, version) {
  let src = srcPath,
    dest = `${destPath}/${version}`;
  let spinner = ora(`copying built version ${version} from ${src} to ${dest}...`).start();
  await fs.copy(src, dest);
  spinner.succeed(`copyied built version ${version} from ${src} to ${dest}`);
}

async function checkoutMasterBranch(path) {
  let repository = await Repository.open(path);
  let spinner = ora("checking out master branch...").start();
  await checkoutBranch(repository, "master");
  spinner.succeed("checked out master branch");
}

module.exports = {
  handleBuild
};
