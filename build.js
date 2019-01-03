const { Repository, Tag } = require("nodegit");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs-extra");
const klaw = require("klaw-sync");
const turndown = require("turndown")();
const ora = require("ora");

/* Custom modules */
const { asyncForEach } = require("./libraries/util.js");
const {
  loadTaggedVersions,
  getTargetId,
  checkoutCommit,
  checkoutBranch
} = require("./libraries/git.js");

let astericsPath = __dirname + "/source/asterics";
let acsHelpPath = astericsPath + "/Documentation/ACS-Help/HTML";
let backupPath = __dirname + "/intermediate/.vuepress/intermediate_build";
let docsPath = __dirname + "/intermediate";

(async () => {
  let astericsRepo = await Repository.open(astericsPath);
  let astericsTags = await Tag.list(astericsRepo);

  /* Get valid version tags */
  let astericsVersions = loadTaggedVersions(astericsTags);
  astericsVersions = astericsVersions.sort();

  /* Ensure target folder */
  await fs.ensureDir(backupPath);
  if (await fs.existsSync(backupPath)) {
    await asyncForEach(astericsVersions, async version => {
      /* Checkout commit */
      let spinner = ora(`check out tag ${version}`).start();
      let targetId = await getTargetId(astericsRepo, version);
      await checkoutCommit(astericsRepo, targetId);

      /* Copy and convert ACS Help files */
      spinner.text = `copy and convert files of ${version}`;
      let dirs = await klaw(acsHelpPath, { nofile: true });
      await asyncForEach(dirs, async dir => {
        let dirName = dir.path.substr(dir.path.lastIndexOf("/") + 1, dir.path.length);
        let relPath = path.relative(acsHelpPath, dir.path);
        let dstPath = `${docsPath}/help/${relPath}`;

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

      if (version !== astericsVersions[astericsVersions.length - 1]) {
        /* Build and copy version */
        spinner.text = `building version ${version}`;
        process.env.AS_DOCS_VERSION = `${version}`;
        let { stdout, stderr } = await exec(
          `node_modules/vuepress/bin/vuepress.js build ${docsPath}`
        );

        /* Store built version in public directory */
        spinner.text = `storing results of built version ${version}`;
        let backupSourcePath = `${docsPath}/.vuepress/dist/`;
        let backupTargetPath = `${backupPath}/${version}/`;
        await fs.copy(backupSourcePath, backupTargetPath);

        spinner.succeed(`${version}: results stored in ${backupTargetPath}`);

        /* FIXME: cleanup after build */
      }
    });
  }

  /* Reset to master branch */
  console.log("checking out master branch");
  await checkoutBranch(astericsRepo, "master");
})().catch(err => {
  console.log(err);
});
