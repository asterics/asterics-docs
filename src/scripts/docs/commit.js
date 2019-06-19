import { copyFileSync, existsSync, unlinkSync } from "fs";
import { join, relative, dirname, sep as pathSep } from "path";
import { moveCursor, clearScreenDown } from "readline";
import { Repository, Branch, Checkout, Status, Reference, Signature } from "nodegit";
import { error } from "./shared/logger.js";
import { ask, hasUntracked, resolveUntracked, promptSelection } from "./shared/untracked.js";
import { Index } from "./shared/index.js";
import { getStaged, getUnstaged, getUntracked } from "./shared/status.js";
// import { getIndex } from "./shared/util.js";
import { getBranchesOfRepository } from "./shared/util.js";
import { mkdirp } from "@asterics/node-utils";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
// const repositories = config.get("repositories");
const submodules = config.get("submodules");
let index = null;

const envConfigPath = join(process.cwd(), "src/config/.env");
require("dotenv").config({ path: envConfigPath });
const { AUTHOR, COMMITTER } = process.env;

export const command = "commit";
export const alias = ["c"];
export const describe = "commit a file to the asterics-docs project docs";
export const builder = yargs => {
  yargs.usage("yarn docs commit").options({
    h: { alias: "help", describe: "Show this help.", type: "boolean" },
    v: { alias: "verbose", describe: "Print processing information to stdout.", type: "boolean" },
    a: { alias: "author", describe: "Commit author", type: "string" },
    c: { alias: "committer", describe: "Committer", type: "string" },
    m: { alias: "message", describe: "Commit message", type: "string" }
  });
};
export const handler = async options => {
  // console.log("commit", options);
  try {
    /* Load current index */
    const dependendencies = config.get("dependencies");
    const versions = config.get("versions");
    index = await new Index(dependendencies, versions);

    /* Verify if author, committer, and message are specified */
    if (!verifyOptions(options)) {
      return false;
    }

    /* Test resolution of renamed files */
    await verifyRenamedFiles(index, (repo, file) => {
      const delta = file["headToIndex"]();
      const oldFile = delta.oldFile();
      const newFile = delta.newFile();
      process.stdout.write(error(`renaming ${oldFile.path()} to ${newFile.path()} results target destination outside of repository:\n`));
      process.stdout.write(error("", { end: "\n", label: `        ${index.moved(file).destination(repo.location)}\n` }));
      process.stdout.write("Correct renaming or unstage to continue.\n");
      process.exit();
    });

    /* Verify if any new files were created */
    // while (await hasUntracked(index)) {
    //   await resolveUntracked(index);
    // }

    if (await hasUntracked(index)) {
      do {
        await resolveUntracked(index);
      } while ((await hasUntracked(index)) || (await proceed()));
    }

    /* Commit all changes to remote submodules */
    await commit(index);

    /* Commit all changes to local repository */
  } catch (err) {
    process.stdout.write(error(err));
  }
};

async function verifyRenamedFiles(index, handler = (idx, f) => {}) {
  const location = join(process.cwd(), config.get("documentation"));
  const r = await Repository.open(location);
  const staged = await getStaged(r);
  const renamed = staged.filter(file => file.isRenamed());
  for (const file of renamed) {
    if (index.moved(file).up() > index.moved(file).available()) {
      const entry = index.entry(file);
      const repo = config.get("submodules").find(e => e.name === entry.repository);
      handler(repo, file);
    }
  }
}

async function proceed() {
  await promptSelection();
  return "n" === (await ask("\nContinue? (Y/n): "));
}

async function commit(index) {
  const d = join(process.cwd(), config.get("documentation"));
  const r = await Repository.open(d);
  const staged = await getStaged(r);

  console.log("\n");

  // Iterate repo
  for (const repo of submodules) {
    const b = await getBranchesOfRepository(repo.name);
    const branches = getStagedBranches(repo, b, staged);
    // Iterate branch
    for (const branch of branches) {
      await commitFiles(index, repo, branch, staged);
    }
  }

  /* TODO: Commit to temporary repository */
}

async function commitFiles(index, repo, branch, status) {
  try {
    const location = join(process.cwd(), repo.location);
    const r = await Repository.open(location);

    /* Get relevant files */
    const files = getStagedFilesOfRepositoryBranch(repo, branch, status);

    /* Checkout */
    await checkoutBranch(repo.name, r, branch);

    /* NOTE:
     * - delete file from index (if renamed) / not necessary?
     * - load entry configuration from index
     * - load index only once and process multiple times (parameter), decouple funtions using index
     */

    for (const file of files) {
      let src = null;
      let dest = null;
      const entry = index.entry(file);
      /* Copy files */
      if (file.isRenamed()) {
        const delta = file["headToIndex"]();
        const newFile = delta.newFile();

        src = join(process.cwd(), config.get("documentation"), newFile.path());
        dest = index.moved(file).destination(repo.location);

        /* Delete old file */
        const oldDest = join(process.cwd(), repo.location, entry.source, entry.file);
        if (existsSync(oldDest)) unlinkSync(oldDest);

        /* TODO: Handle case for NEW file */
      } else {
        src = join(process.cwd(), config.get("documentation"), file.path());
        dest = join(process.cwd(), entry.source, file.path());
      }
      /* Create parent directory at source repository */
      const parentDir = dirname(dest);
      if (!existsSync(parentDir)) mkdirp(parentDir);
      copyFileSync(src, dest);
    }

    /* Add */
    const idx = await r.refreshIndex();
    await idx.addAll();
    await idx.write();
    const oid = await idx.writeTree();
    const head = await Reference.nameToId(r, "HEAD");
    const parent = await r.getCommit(head);

    // /* Commit */
    const author = Signature.now("robot", "noreply+studyathome@technikum-wien.at");
    const committer = Signature.now("robot", "noreply+studyathome@technikum-wien.at");
    await r.createCommit("HEAD", author, committer, "new commit", oid, [parent]);
  } catch (err) {
    console.log(err);
  }
}

async function checkoutBranch(name, repo, branch) {
  const opts = {
    checkoutStrategy:
      Checkout.STRATEGY.SAFE || Checkout.STRATEGY.RECREATE_MISSING || Checkout.STRATEGY.ALLOW_CONFLICTS || Checkout.STRATEGY.USE_THEIRS,
    progressCb: (path, checkedOut, total) => {
      if (total === 0) return;
      const prefix = "Checking out files: ";
      const percent = Math.round((checkedOut / total) * 100);

      if (percent === 0) {
        process.stdout.write(prefix);
      } else {
        clearScreenDown(process.stdout);
      }

      const text = `${percent}% (${checkedOut}/${total})`;
      process.stdout.write(text);

      if (percent >= 100) {
        process.stdout.write(", done.\n");
        process.stdout.write(`Switched repository '${name}' to branch '${branch}'.\n`);
      } else {
        moveCursor(process.stdout, -text.length);
      }
    }
  };

  /* Get remote branch */
  const remoteBranch = await repo.getBranch(`origin/${branch}`);
  /* Get commit of remote branch */
  const remoteCommit = await repo.getCommit(remoteBranch.target());
  /* Get local branch */
  let localBranch;
  try {
    localBranch = await repo.getBranch(branch);
  } catch (err) {
    if (typeof localBranch === "undefined") {
      localBranch = await repo.createBranch(branch, remoteCommit, false);
      await Branch.setUpstream(localBranch, `origin/${branch}`);
    }
  }
  /* Get commit of local branch */
  const localCommit = await repo.getCommit(localBranch.target());
  /* Get tree object */
  const tree = await repo.getTree(localCommit.treeId());
  /* Checkout tree */
  await Checkout.tree(repo, tree, opts);
  /* Set HEAD to branch */
  await repo.setHead(`refs/heads/${branch}`);
}

// async function checkoutBranch(repo, branch) {
//   const opts = {
//     checkoutStrategy:
//       Checkout.STRATEGY.SAFE || Checkout.STRATEGY.RECREATE_MISSING || Checkout.STRATEGY.ALLOW_CONFLICTS || Checkout.STRATEGY.USE_THEIRS
//   };
//   const remote = await repo.getBranch(`origin/${branch}`);
//   const commit = await repo.getCommit(remote.target());
//   const tree = await repo.getTree(commit.treeId());
//   await Checkout.tree(repo, tree, opts);
//   await repo.setHead(`refs/heads/${branch}`);
// }

function printIndexInfo(status) {
  for (const file of status) {
    let entry = index.entry(file);
    process.stdout.write(`${file.path()}, ${entry.repository}, ${entry.branch}, ${join(entry.source, entry.file)}\n`);
  }
}

// async function getStaged() {
//   const d = join(process.cwd(), config.get("documentation"));
//   const r = await Repository.open(d);
//   const opts = {
//     flags:
//       Status.OPT.INCLUDE_UNTRACKED |
//       Status.OPT.RECURSE_UNTRACKED_DIRS |
//       Status.OPT.RENAMES_HEAD_TO_INDEX |
//       Status.OPT.RENAMES_FROM_REWRITES,
//     show: Status.SHOW.INDEX_ONLY
//   };
//   return await r.getStatusExt(opts);
// }

function getStagedBranches(repo, branches, status) {
  let stagedBranches = status
    .filter(file => {
      let entry = index.entry(file);
      return repo.name === entry.repository;
    })
    .map(file => {
      let entry = index.entry(file);
      return entry.branch;
    });
  return branches.filter(branch => stagedBranches.includes(branch));
}

function getStagedFilesOfRepositoryBranch(repo, branch, status) {
  return status.filter(file => {
    let entry = index.entry(file);
    return repo.name === entry.repository && branch === entry.branch;
  });
}

function verifyOptions(options) {
  let validAuthor = false,
    validCommitter = false;

  /* Author */
  if (options.author) {
    if (isValidUser(options.author)) {
      validAuthor = true;
    } else {
      logInvalidUser(options.author);
    }
  } else if (AUTHOR) {
    if (isValidUser(AUTHOR)) {
      validAuthor = true;
      options.author = AUTHOR;
    } else {
      logInvalidUser(process.env.AUTHOR);
    }
  } else {
    process.stdout.write(info("username and email of commit author have to be specified (--author, env: AUTHOR)."));
  }

  /* Committer */
  if (options.committer) {
    if (isValidUser(options.committer)) {
      validCommitter = true;
    } else {
      logInvalidUser(options.committer);
    }
  } else if (COMMITTER) {
    if (isValidUser(COMMITTER)) {
      validCommitter = true;
      options.committer = COMMITTER;
    } else {
      logInvalidUser(COMMITTER);
    }
  } else {
    process.stdout.write(info("username and email of committer have to specified (--committer, env: COMMITTER)."));
  }

  return validAuthor && validCommitter;
}

function isValidUser(name) {
  const r = /(?:\s*)?(.*?)(?:\s*)?<(?:\s*)?(.*)(?:\s*)?>/;
  const m = r.exec(name);
  if (m) {
    const username = m[1];
    if (username !== "dummy") {
      return true;
    }
  }
  return false;
}

function logInvalidUser(name) {
  process.stdout.write(error(`invalid user: ${name}. Use format: "name <email@domain.org>.`));
}
