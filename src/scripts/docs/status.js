import { join } from "path";
import { Index } from "./shared/index.js";
import { success, error, info } from "./shared/logger.js";
import { Repository, Status } from "nodegit";

let index;
const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

const ident = {
  repository: 4,
  file: 8
};

export const command = "status";
export const alias = ["s", "stat"];
export const describe = "show the status of the asterics-docs project docs";
export const builder = yargs => {
  yargs.usage("yarn docs status").options({
    h: { alias: "help", describe: "Show this help." },
    v: { alias: "verbose", describe: "Print processing information to stdout.", type: "boolean" }
  });
};
export const handler = async options => {
  try {
    const dependencies = config.get("dependencies");
    const versions = config.get("versions");
    index = await new Index(dependencies, versions);

    const d = join(process.cwd(), config.get("documentation"));
    const r = await Repository.open(d);

    if (await hasChanges(r)) {
      await logStaged(r);
      await logUnstaged(r);
      await logUntracked(r);
    } else {
      process.stdout.write("nothing to commit, working tree clean\n");
    }
  } catch (err) {
    process.stdout.write(error(err));
  }
};

async function hasChanges(r) {
  const staged = await getStaged(r);
  const unstaged = await getUnstaged(r);
  const untracked = await getUntracked(r);
  const equality = staged.length === 0 && unstaged.length === 0 && untracked.length === 0;
  return !equality;
}

async function logStaged(r) {
  const staged = await getStaged(r);
  if (staged.length > 0) {
    process.stdout.write("Changes to be committed:\n");

    /* Log indexed files */
    for (const repo of config.get("submodules")) {
      if (hasCandidate(staged, repo.name)) {
        process.stdout.write(
          info("\n" + " ".repeat(ident.repository) + repo.name, { end: "\n", label: "" })
        );
        for (const file of staged) {
          if (isInRepository(file, repo.name)) {
            log(success, file);
          }
        }
      }
    }

    /* Log unindexed files */
    const unindexed = staged.filter(e => e.isNew());
    if (unindexed.length > 0) {
      process.stdout.write(
        info("\n" + " ".repeat(ident.repository) + "*".repeat(6), { end: "\n", label: "" })
      );
      for (const file of unindexed) {
        log(success, file);
      }
    }
    process.stdout.write("\n");
  }
}

async function getStaged(r) {
  const opts = {
    flags:
      Status.OPT.INCLUDE_UNTRACKED |
      Status.OPT.RECURSE_UNTRACKED_DIRS |
      Status.OPT.RENAMES_HEAD_TO_INDEX |
      Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.INDEX_ONLY
  };
  return await r.getStatusExt(opts);
}

async function logUnstaged(r) {
  const unstaged = await getUnstaged(r);

  if (unstaged.length > 0) {
    process.stdout.write("Changes not staged for commit:\n");

    /* Log indexed files */
    for (const repo of config.get("submodules")) {
      if (hasCandidate(unstaged, repo.name, "indexToWorkdir")) {
        process.stdout.write(
          info("\n" + " ".repeat(ident.repository) + repo.name, { end: "\n", label: "" })
        );
        for (const file of unstaged) {
          if (isInRepository(file, repo.name, "indexToWorkdir")) {
            log(error, file, "indexToWorkdir");
          }
        }
      }
    }

    /* Log unindexed files */
    if (hasUnindexed(unstaged)) {
      process.stdout.write(
        info("\n" + " ".repeat(ident.repository) + "*".repeat(6), { end: "\n", label: "" })
      );
      for (const file of unstaged) {
        if (isInNoneRepository(file)) {
          log(error, file);
        }
      }
    }

    process.stdout.write("\n");
  }
}

async function getUnstaged(r) {
  const opts = {
    flags:
      Status.OPT.RENAMES_HEAD_TO_INDEX |
      Status.OPT.RENAMES_INDEX_TO_WORKDIR |
      Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.WORKDIR_ONLY
  };
  return await r.getStatusExt(opts);
}

async function logUntracked(r) {
  const untracked = await getUntracked(r);
  const prefix = " ".repeat(ident.file);

  if (untracked.length > 0) {
    process.stdout.write("Untracked files:\n\n");
    for (const file of untracked) {
      process.stdout.write(error("", { end: "\n", label: prefix + `${file.path()}` }));
    }
    process.stdout.write("\n");
  }
}

async function getUntracked(r) {
  const opts = {
    flags: Status.OPT.INCLUDE_UNTRACKED | Status.OPT.RECURSE_UNTRACKED_DIRS,
    show: Status.SHOW.WORKDIR_ONLY
  };
  const status = await r.getStatusExt(opts);
  return status.filter(e => e.isNew());
}

function log(logger, file, changes = "headToIndex") {
  const prefix = " ".repeat(ident.file);
  if (file.isConflicted()) {
    process.stdout.write(logger("", { end: "\n", label: prefix + `conflicted: ${file.path()}` }));
  } else if (file.isDeleted()) {
    process.stdout.write(logger("", { end: "\n", label: prefix + `deleted:    ${file.path()}` }));
  } else if (file.isRenamed()) {
    const oldFile = file[changes]().oldFile();
    const newFile = file[changes]().newFile();
    process.stdout.write(
      logger("", {
        end: "\n",
        label: prefix + `renamed:    ${oldFile.path()} -> ${newFile.path()}`
      })
    );
  } else if (file.isIgnored()) {
  } else if (file.isModified()) {
    process.stdout.write(logger("", { end: "\n", label: prefix + `modified:   ${file.path()}` }));
  } else if (file.isNew()) {
    process.stdout.write(logger("", { end: "\n", label: prefix + `new file:   ${file.path()}` }));
  } else {
    process.stdout.write(logger("", { end: "\n", label: prefix + `unknown:    ${file.path()}` }));
  }
}

function hasCandidate(status, repository, changes = "headToIndex") {
  let result = false;
  for (const file of status) {
    if (isInRepository(file, repository, changes)) {
      result = true;
    }
  }
  return result;
}

function hasUnindexed(status) {
  for (const file of status) {
    let found = false;

    for (const repo of config.get("submodules")) {
      if (hasCandidate([file], repo.name)) {
        found = true;
      }
    }

    if (!found) return true;
  }

  return false;
}

function isInRepository(file, repository, changes = "headToIndex") {
  const path = file.isRenamed() ? getOldFilePath(file, changes) : file.path();
  const entry = index.get(path);
  if (entry && entry.repository === repository) {
    return true;
  }
  return false;
}

function isInNoneRepository(file) {
  for (const repo of config.get("submodules")) {
    if (isInRepository(file, repo.name)) {
      return false;
    }
  }
  return true;
}

function getOldFilePath(file, changes = "headToIndex") {
  return file[changes]()
    .oldFile()
    .path();
}
