import { join } from "path";
import { getIndex } from "./shared/util.js";
import { success, error, info } from "./shared/logger.js";
import { Repository, Odb, Object } from "nodegit";
import { DiffieHellman } from "crypto";
import { relativeTimeRounding } from "moment";

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
    index = await getIndex(false);
    const d = join(process.cwd(), config.get("documentation"));
    const r = await Repository.open(d);
    // const s = await getStatus(r);
    // const se = await r.getStatusExt();

    // await logStatus(r);

    // for (const f of s) {
    //   log(success, f);
    // }
    // return;

    await logStaged(r);
    await logUnstaged(r);
    await logUntracked(r);
  } catch (err) {
    console.log(err);
  }
};

// async function logStatus(repository) {
//   const s = await r.getStatusExt();
// }

// async function getStatus(r) {
//   let status = await r.getStatus();
//   let statusExt = await r.getStatusExt();

//   const renamed = statusExt.filter(e => e.isRenamed()).map(e => e.path());
//   if (renamed.length === 0) {
//     return status;
//   }

//   const deleted = status.filter(e => e.isDeleted()).map(e => e.path());
//   const head = await r.getHeadCommit();
//   for (let file of deleted) {
//     const e = await head.getEntry(file);
//     const o = e.oid();
//     console.log(file, o);
//   }

//   for (let file of renamed) {
//     const p = join(process.cwd(), config.get("documentation"), file);
//     const oid = await Odb.hashfile(p, Object.TYPE.BLOB);
//     const o = oid.tostrS();
//     console.log(file, o);
//   }

//   /* Populate status with correct renamed entry */
//   for (let file of status) {
//     file.isRenamed = () => (renamed.includes(file.path()) ? true : false);
//   }
//   /* Find original file for each renamed one */
//   for (let rename of renamed) {
//     const head = r.getHeadCommit();
//   }
//   for (let file of status) {
//     console.log(`${file.path()}: renamed (${file.isRenamed() ? "true" : "false"})`);
//   }
// }

async function logStaged(repository) {
  const status = await repository.getStatus();
  const statusExt = await repository.getStatusExt();
  const staged = statusExt.filter(e => e.inIndex());
  if (staged.length > 0) {
    process.stdout.write("Changes to be committed:\n");

    for (const r of config.get("repositories")) {
      if (hasCandidate(status.filter(e => e.inIndex()), r.name)) {
        process.stdout.write(info("\n" + " ".repeat(ident.repository) + r.name, { end: "\n", label: "" }));

        for (const file of staged) {
          if (file.isRenamed()) {
            await logRenamed(success, file, repository, r.name);
          } else if (isInRepository(file, r.name)) {
            log(success, file);
          }
        }
      }
    }

    process.stdout.write("\n" + " ".repeat(ident.repository) + "*".repeat(6) + "\n");
    for (const file of staged.filter(e => e.isNew())) {
      log(success, file);
    }
    process.stdout.write("\n");
  }
}

async function logUnstaged(repository) {
  const status = await repository.getStatus();
  const unstaged = status.filter(e => !e.inIndex()).filter(e => !e.isNew());
  if (unstaged.length > 0) {
    process.stdout.write("Changes not staged for commit:\n");

    for (const r of config.get("repositories")) {
      if (hasCandidate(unstaged, r.name)) {
        process.stdout.write(info("\n" + " ".repeat(ident.repository) + r.name, { end: "\n", label: "" }));

        for (const file of unstaged) {
          if (isInRepository(file, r.name)) {
            log(error, file);
          }
        }
      }
    }
    process.stdout.write("\n");
  }
}

async function logUntracked(repository) {
  const status = await repository.getStatus();
  const untracked = status.filter(e => !e.inIndex()).filter(e => e.isNew());
  if (untracked.length > 0) {
    process.stdout.write("Untracked files:\n\n");
    for (const file of untracked) {
      process.stdout.write(error("", { end: "\n", label: " ".repeat(ident.file) + file.path() }));
    }
    process.stdout.write("\n");
  }
}

function hasCandidate(status, repository) {
  let result = false;
  for (const file of status) {
    if (isInRepository(file, repository)) {
      result = true;
    }
  }
  return result;
}

function isInRepository(file, repository) {
  const entry = index[file.path()];
  if (entry && entry.repository === repository) {
    return true;
  }
  return false;
}

function log(logger, f, identation = ident.file) {
  const text = f.isConflicted()
    ? "conflicted: "
    : f.isDeleted()
    ? "deleted:    "
    : // : f.isIgnored()
    // ? "ignored:      "
    f.isModified()
    ? "modified:   "
    : f.isNew()
    ? "new file:   "
    : f.isRenamed()
    ? "renamed:    "
    : // : f.isTypechange()
      // ? "typechange: "
      "other:      ";
  const label = " ".repeat(identation) + text;
  process.stdout.write(logger("", { end: "\n", label: `${label}${f.path()}` }));
}

async function logRenamed(logger, f, repository, submodule, identation = ident.file) {
  const status = await repository.getStatus();
  const head = await repository.getHeadCommit();
  const path = join(process.cwd(), config.get("documentation"), f.path());
  const newOid = await Odb.hashfile(path, Object.TYPE.BLOB);

  /* Search for a deleted file with same oid */
  for (const file of status.filter(e => e.isDeleted())) {
    const e = await head.getEntry(file.path());
    if (newOid.equal(e.id())) {
      if (isInRepository(file, submodule)) {
        const label = " ".repeat(identation) + "renamed:    ";
        process.stdout.write(logger("", { end: "\n", label: `${label}${file.path()} -> ${f.path()}` }));
      }
      return;
    }
  }

  /* Default log if same oid was not found */
  // log(logger, f);
}
