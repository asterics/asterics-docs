const { Checkout, Repository, Tag, Tree } = require("nodegit");
const path = require("path");
const fs = require("fs-extra");
const klaw = require("klaw-sync");
const turndown = require("turndown")();
const ora = require("ora");

let asterics = __dirname + "/source/asterics";
let acs_help = asterics + "/Documentation/ACS-Help/HTML";
let acs_help_intermediate = __dirname + "/intermediate/help";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

(async () => {
  let astericsRepo = await Repository.open(asterics);
  let astericsTags = await Tag.list(astericsRepo);

  /* Get valid version tags */
  let astericsVersions = [];
  astericsTags.forEach(tag => {
    if (/v\d+.\d+$/.test(tag)) astericsVersions.push(tag);
  });

  /* Ensure target folder */
  await fs.emptyDir(acs_help_intermediate);

  /* Checkout versions */
  await asyncForEach(astericsVersions, async version => {
    let tag, targetid;
    let spinner = ora(`check out tag ${version}`).start();

    try {
      tag = await astericsRepo.getTagByName(version);
      targetid = tag.targetId().tostrS();
    } catch (err) {
      try {
        tag = await astericsRepo.getReferenceCommit(`refs/tags/${version}`);
        targetid = tag.id().tostrS();
      } catch (err) {
        console.log(err);
      }
    }
    // console.log(tag);
    await Checkout.tree(astericsRepo, targetid, {
      checkoutStrategy: Checkout.STRATEGY.SAFE_CREATE
    });
    await astericsRepo.setHeadDetached(targetid, astericsRepo.defaultSignature);

    /* Copy plugin docs from Documentation */
    spinner.text = `copy and convert files of ${version}`;
    /* Get all folders */
    let dirs = await klaw(acs_help, { nofile: true });
    // let files = await klaw(acs_help, { nodir: true });

    await asyncForEach(dirs, async dir => {
      let rel = path.relative(acs_help, dir.path);
      let dest = `${acs_help_intermediate}/${version}/${rel}`;

      if (dest.match(/img/)) {
        fs.copySync(dir.path, dest);
      }

      if (!dest.match(/(stylesheet|img)/)) {
        /* Ensure target subfolder exists */
        await fs.ensureDir(dest);

        /* Read all files from source folder */
        let files = fs.readdirSync(dir.path);

        await asyncForEach(files, async file => {
          if (file.match(/.*html?$/)) {
            let dstMD = file.substr(0, file.lastIndexOf(".")) + ".md";
            let src = `${dir.path}/${file}`;
            let dstHTML = `${dest}/${file}`;
            dstMD = `${dest}/${dstMD}`;

            let text = fs.readFileSync(src);
            text = text.toString("utf8");
            let mtext = turndown.turndown(text);

            fs.copySync(src, dstHTML);
            fs.writeFile(dstMD, mtext);
          }
        });
      }
    });

    spinner.succeed(`${version}`);
  });
  // let tree = await Checkout.tree(astericsRepo, tag.targetId(), {
  //   checkoutStrategy: Checkout.STRATEGY.SAFE_CREATE
  // });
  // await astericsRepo.setHeadDetached(tag.targetId());
  // let tag = await astericsRepo.getTagByName(astericsVersions[0]);
  // console.log(tag.id());

  // let commit = await astericsRepo.getReferenceCommit(tag.id());
  // let astericsTree = await Tree.lookup(astericsRepo, commit.id());

  // let astericsTree = await commit.tree();
  // console.log(astericsTree);

  // let astericsTree = await Tree.lookup(astericsRepo, tag.id());
  // console.log(astericsTree);

  /* Reset to master branch */
  let commit = await astericsRepo.getReferenceCommit("master");
  // console.log(commit.id().tostrS());
  console.log("checking out master branch");
  await astericsRepo.setHeadDetached(commit.id(), astericsRepo.defaultSignature);
  await astericsRepo.checkoutBranch("master");
})().catch(err => {
  console.log(err);
});
