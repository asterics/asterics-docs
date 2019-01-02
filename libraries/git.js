const { Checkout } = require("nodegit");

function loadTaggedVersions(tags, pattern = /^v\d+(.\d+)*$/) {
  // https://regex101.com/r/d75rRK/1
  // https://regex101.com/r/d75rRK/2
  versions = [];
  tags.forEach(tag => {
    if (pattern.test(tag)) {
      versions.push(tag);
    }
  });
  return versions;
}

async function getTargetId(repo, tagName) {
  let tag, targetId;
  try {
    /* Get tag object and target ID */
    tag = await repo.getTagByName(tagName);
    targetId = tag.targetId().tostrS();
  } catch (err) {
    try {
      /* Get tag object and target ID, of tag without annotation (msg) */
      tag = await repo.getReferenceCommit(`refs/tags/${tagName}`);
      targetId = tag.id().tostrS();
    } catch (err) {
      console.error(err);
    }
  }
  return targetId;
}

async function checkoutCommit(repo, targetid) {
  await Checkout.tree(repo, targetid, { checkoutStrategy: Checkout.STRATEGY.SAFE_CREATE });
  await repo.setHeadDetached(targetid, repo.defaultSignature);
}

async function checkoutBranch(repo, branchName) {
  let commit = await repo.getReferenceCommit(branchName);
  await repo.setHeadDetached(commit.id(), repo.defaultSignature);
  await repo.checkoutBranch(branchName);
}
module.exports = {
  loadTaggedVersions,
  getTargetId,
  checkoutCommit,
  checkoutBranch
};
