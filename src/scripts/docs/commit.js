import { join } from "path";
import { Repository, Status } from "nodegit";
import { error } from "./shared/logger.js";
import { ask, hasUntracked, resolveUntracked, promptSelection } from "./shared/untracked.js";
import { Index } from "./shared/index.js";
import { getStaged, getUnstaged, getUntracked } from "./shared/status.js";
// import { getIndex } from "./shared/util.js";
import { getBranchesOfRepository } from "./shared/util.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
const repositories = config.get("repositories");
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
    // index = await getIndex(false);

    /* Verify if author, committer, and message are specified */
    if (!verifyOptions(options)) {
      return false;
    }

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

async function proceed() {
  await promptSelection();
  return "n" === (await ask("\nContinue? (Y/n): "));
}

async function commit(index) {
  const d = join(process.cwd(), config.get("documentation"));
  const r = await Repository.open(d);
  const staged = await getStaged(r);
  // printIndexInfo(staged);
  // for (const file of staged) {
  //   console.log(file.path());
  // }

  console.log("\n");

  // Iterate repo
  for (const repo of repositories) {
    const b = await getBranchesOfRepository(repo.name);
    const branches = getStagedBranches(staged, repo, b);
    // Iterate branch
    // console.log(repo.name, branches);
    for (const branch of branches) {
      await commitFiles(repo, branch, staged);
    }
  }
}

async function commitFiles(r, b, status) {
  /* Get relevant files */
  console.log(r, b);

  /* Commit */
}

function printIndexInfo(status) {
  for (const file of status) {
    let entry = index.entry(file);
    process.stdout.write(`${file.path()}, ${entry.repository}, ${entry.branch}, ${entry.source}\n`);
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

function getStagedBranches(status, repo, branches) {
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
