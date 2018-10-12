const { Checkout, Repository, Tag, Tree } = require("nodegit");
const path = require("path");
const fs = require("fs-extra");
const klaw = require("klaw-sync");

let asterics = __dirname + "/source/asterics";
let acs_help = asterics + "/Documentation/ACS-Help/HTML";
let acs_help_intermediate = __dirname + "/intermediate/help";

(async () => {
  let astericsRepo = await Repository.open(asterics);
  let astericsTags = await Tag.list(astericsRepo);

  /* Get valid version tags */
  let astericsVersions = [];
  astericsTags.forEach(tag => {
    if (/v\d+.\d+$/.test(tag)) astericsVersions.push(tag);
  });
  console.log(astericsVersions);

  /* Checkout versions */
  let tag = await astericsRepo.getTagByName(astericsVersions[0]);
  console.log(tag.targetId().tostrS());
  await Checkout.tree(astericsRepo, tag.targetId().tostrS(), {
    checkoutStrategy: Checkout.STRATEGY.SAFE_CREATE
  });
  await astericsRepo.setHeadDetached(tag.targetId().tostrS(), astericsRepo.defaultSignature);

  /* Copy plugin docs from Documentation */
  let dirs = await klaw(acs_help, { nofile: true });
  // let files = await klaw(acs_help, { nodir: true });
  console.log(dirs);
  // console.log(files);

  await fs.emptyDir(acs_help_intermediate);

  dirs.forEach(dir => {
    let diff = path.relative(acs_help, dir.path);
    let f = `${acs_help_intermediate}/${astericsVersions[0]}/${diff}`;
    if (!f.match(/stylesheet/) && !f.match(/img/)) {
      console.log(f);
      await fs.ensureDir(f)
    }

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
  console.log(commit.id().tostrS());
  await astericsRepo.setHeadDetached(commit.id(), astericsRepo.defaultSignature);
  await astericsRepo.checkoutBranch("master");
})().catch(err => {
  console.log(err);
});
