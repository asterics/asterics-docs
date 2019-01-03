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
const { asyncForEach } = require("./util");
const { loadTaggedVersions, getTargetId, checkoutCommit, checkoutBranch } = require("./git");

async function handleBuild(header, callback) {
  let astericsRepo = await Repository.open(process.env.ASTERICS_REPO);
  let astericsTags = await Tag.list(astericsRepo);
  /* Get valid version tags */
  let astericsVersions = loadTaggedVersions(astericsTags);
  astericsVersions = astericsVersions.sort().reverse();

  // selection
  let menu = ["all"];
  astericsVersions.forEach(version => {
    let entry = `${version}`;
    menu.push(entry);
  });

  term.clear();
  term("Select from available tags:\n");
  let options = { cancelable: true, exitOnUnexpectedKey: true };
  term.singleColumnMenu(menu, options, async (error, response) => {
    console.log(response);

    if (response.selectedText !== "all") {
      let version = response.selectedText;
      /*
       * Checkout commit
       */
      term.clear();
      header();
      let spinner = ora(`checking out tag ${version} in ${process.env.ASTERICS_REPO}...`).start();
      let targetId = await getTargetId(astericsRepo, version);
      await checkoutCommit(astericsRepo, targetId);
      spinner.succeed(`checked out tag ${version} in ${process.env.ASTERICS_REPO}`);

      /* 
       * Copy and convert ACS Help files
       */
      spinner = ora(
        `convert and copy files of ${version} from ${process.env.ASTERICS_REPO}/${
          process.env.ACS_HELP_SRC
        } to ${process.env.DOCS_SRC}/${process.env.ACS_HELP_DEST}...`
      ).start();

      let acsHelpPath = `${process.env.ASTERICS_REPO}/${process.env.ACS_HELP_SRC}`;
      let dirs = await klaw(acsHelpPath, { nofile: true });
      await asyncForEach(dirs, async dir => {
        let dirName = dir.path.substr(dir.path.lastIndexOf("/") + 1, dir.path.length);
        let relPath = path.relative(acsHelpPath, dir.path);
        let dstPath = `${process.env.DOCS_SRC}/${process.env.ACS_HELP_DEST}/${relPath}`;

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

      spinner.succeed(
        `converted and copied files of ${version} from ${process.env.ASTERICS_REPO}/${
          process.env.ACS_HELP_SRC
        } to ${process.env.DOCS_SRC}/${process.env.ACS_HELP_DEST}`
      );

      /* 
       * Build asterics-docs version
       */
      process.env.AS_DOCS_VERSION = version;
      let cmd = `node_modules/vuepress/bin/vuepress.js build ${process.env.DOCS_SRC}`;
      spinner = ora(
        `building version ${version} of asterics-docs from ${process.env.DOCS_SRC} with enpoint /${
          process.env.AS_DOCS_VERSION
        }/ using following command:\n\n\t"${cmd}"`
      ).start();
      let { stdout, stderr } = await exec(`${cmd}`);

      spinner.succeed(
        `built version ${version} of asterics-docs from ${process.env.DOCS_SRC} with enpoint /${
          process.env.AS_DOCS_VERSION
        }/. Results stored to ${process.env.DOCS_DEST}.`
      );

      /* 
       * Backup built version
       */
      let src = process.env.DOCS_DEST,
        dest = `${process.env.BUILD_DEST}/${version}`;
      spinner = ora(`copying built version ${version} from ${src} to ${dest}...`).start();
      await fs.copy(src, dest);
      spinner.succeed(`copyied built version ${version} from ${src} to ${dest}`);

      /*
       * Check out master branch
       */
      spinner = ora("checking out master branch...").start();
      await checkoutBranch(astericsRepo, "master");
      spinner.succeed("checked out master branch");
    }

    callback();
  });
}

module.exports = {
  handleBuild
};
