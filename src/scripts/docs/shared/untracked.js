import { createInterface, cursorTo, clearScreenDown } from "readline";
import { join } from "path";
import { Repository, Reference, Status } from "nodegit";
import { success, error, message } from "./logger.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
const repositories = config.get("repositories");
let index = null;

export async function hasUntracked(index) {
  const untracked = await getUntracked();
  for (const file of untracked) {
    const entry = index[file.path()];
    if (entry === undefined) {
      return true;
    }
  }
  return false;
}

export async function resolveUntracked(i) {
  index = i;
  const selection = await getSelection();
  await getRepository(selection);
  // await getBranch(selection);
  // await getDestination(selection);
  await ask("");
}

/* Util */
export async function getUntracked() {
  const d = join(process.cwd(), config.get("documentation"));
  const r = await Repository.open(d);
  const opts = {
    flags:
      Status.OPT.INCLUDE_UNTRACKED |
      Status.OPT.RECURSE_UNTRACKED_DIRS |
      Status.OPT.RENAMES_HEAD_TO_INDEX |
      Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.INDEX_ONLY
  };
  const status = await r.getStatusExt(opts);
  return status.filter(e => e.isNew()).filter(e => !e.isRenamed());
}

async function filterUntrackedSelection(selection) {
  const untracked = await getUntracked();
  if (Number.isInteger(parseInt(selection))) {
    const idx = parseInt(selection);
    if (idx > 0 && idx <= untracked.length) {
      return untracked.slice(idx - 1, idx);
    }
  } else {
    try {
      const r = new RexExp(`^${selection}`);
      return untracked.filter(e => r.exec(e.path()));
    } catch (err) {}
  }
  return [];
}

function ask(query) {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question(query, answer => {
      rl.close();
      resolve(answer);
    })
  );
}

/* Log */
function resetScreen() {
  cursorTo(process.stdout, 0, 0);
  clearScreenDown(process.stdout);
}

async function getLogLengths(status) {
  let lengths = {
    ident: 4,
    columns: {
      "#": 5,
      path: 15,
      repository: 10,
      branch: 10,
      destination: 15
    }
  };

  /* Get number of status entries */
  const i = String(status.length).length;
  lengths.columns["#"] = Math.max(lengths.columns["#"], i);

  /* Get length of longest path */
  const p = Math.max(...status.map(e => e.path().length));
  lengths.columns.path = Math.max(lengths.columns.path, p);

  /* Get length of longest repository name */
  const r = Math.max(...repositories.map(e => e.name.length));
  lengths.columns.repository = Math.max(lengths.columns.repository, r);

  /* Get length of longest branch name */
  const branches = await getBranches();
  const b = Math.max(...branches.map(e => e.length));
  lengths.columns.branch = Math.max(lengths.columns.branch, b);

  /* Get length of longest destination */
  const destinations = status.filter(e => index[e.path()]).map(e => index[e.path()]);
  const d = Math.max(...destinations);
  lengths.columns.destination = Math.max(lengths.columns.destination, d);

  return lengths;
}

async function getBranches() {
  let branches = [];
  for (const repo of repositories) {
    const d = join(process.cwd(), repo.location);
    const r = await Repository.open(d);
    const refs = await r.getReferenceNames(Reference.TYPE.LISTALL);
    const b = refs
      .filter(e => {
        const regex = /^refs\/remotes\/origin\/(.*)/;
        return regex.exec(e);
      })
      .map(e => {
        const regex = /^refs\/remotes\/origin\/(.*)/;
        return e.replace(regex, (m, branch) => branch);
      })
      .filter(e => e !== "HEAD");

    branches.push(...b);
  }
  return branches;
}

function printHeader(lengths) {
  let h = 0;
  for (const column in lengths.columns) {
    const l = lengths.columns[column] + lengths.ident;
    process.stdout.write(`${column}${" ".repeat(l - column.length)}`);
    h += l;
  }
  process.stdout.write("\n" + "-".repeat(h) + "\n");
}

function printUntrackedFile(pos, lengths, file, selection = "") {
  let p = file.path();
  let e = index[p];
  let r = e ? (e.repository ? e.repository : "-") : "-";
  let b = e ? (e.branch ? e.branch : "-") : "-";
  let d = e ? (e.destination ? e.destination : "-") : "-";

  const valid = r === "-" || b === "-" || d === "-" ? false : true;

  const n = `${pos + 1}:  `;
  const i = `${" ".repeat(lengths.columns["#"] + lengths.ident - n.length)}${n}`;
  const path = `${p}${" ".repeat(lengths.columns.path + lengths.ident - p.length)}`;
  const repo = `${r}${" ".repeat(lengths.columns.repository + lengths.ident - r.length)}`;
  const branch = `${b}${" ".repeat(lengths.columns.branch + lengths.ident - b.length)}`;
  const destination = `${d}${" ".repeat(lengths.columns.destination + lengths.ident - d.length)}`;

  let logger = message;
  if (Number.isInteger(parseInt(selection))) {
    const idx = parseInt(selection);
    if (idx > 0 && pos + 1 === idx) {
      logger = error;
      // process.stdout.write(error("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
    } else {
      if (valid) {
        logger = success;
        // process.stdout.write(success("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
      }
      // process.stdout.write(`${i}${path}${repo}${branch}${destination}\n`);
    }
  } else {
    try {
      const r = new RegExp(`^${selection}`);
      if (selection !== "" && r.exec(file.path())) {
        logger = error;
        // process.stdout.write(error("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
      } else {
        if (valid) {
          logger = success;
          // process.stdout.write(success("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
        }
        // process.stdout.write(`${i}${path}${repo}${branch}${destination}\n`);
      }
    } catch (err) {
      if (valid) {
        logger = success;
      }
      // if (valid) {
      //   process.stdout.write(success("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
      // } else {
      //   process.stdout.write(`${i}${path}${repo}${branch}${destination}\n`);
      // }
    }
  }
  process.stdout.write(logger("", { end: "\n", label: `${i}${path}${repo}${branch}${destination}` }));
}

async function logUntracked(selection = "") {
  const untracked = await getUntracked();
  const lengths = await getLogLengths(untracked);
  printHeader(lengths);
  for (const [i, file] of untracked.entries()) {
    printUntrackedFile(i, lengths, file, selection);
  }
  process.stdout.write("\n");
}

/* Selection */
async function getSelection() {
  let selection = "";
  let valid = true;

  do {
    await promptSelection("");
    selection = await ask("Selection: ");
    if (await isValidSelection(selection)) {
      valid = true;
      await promptSelection(selection);
    } else {
      valid = false;
    }
  } while (!valid || "n" === (await ask("Continue? (Y/n): ")));
  return selection;
}

async function promptSelection(selection) {
  resetScreen();
  process.stdout.write("Select entries. Status of untracked files:\n");
  process.stdout.write("  (use the index number or a regular expression)\n\n");
  await logUntracked(selection);
}

async function isValidSelection(selection) {
  let selected = false;
  const untracked = await getUntracked();

  if (Number.isInteger(parseInt(selection))) {
    const idx = parseInt(selection);
    if (idx > 0 && idx <= untracked.length) selected = true;
  } else {
    try {
      const r = new RegExp(`^${selection}`);
      for (const file of untracked) {
        if (selection !== "" && r.exec(file.path())) {
          selected = true;
        }
      }
    } catch (err) {}
  }
  return selected;
}

/* Repository */
async function getRepository(selection) {
  let repository = "";
  let valid = true;

  do {
    await promptSelection(selection);
    promptRepository();
    repository = await ask("\nSelection: ");
    if (isValidRepository(repository)) {
      valid = true;
      await updateRepository(selection, repository);
      await promptSelection(selection);
      promptRepository();
    } else {
      valid = false;
      continue;
    }
  } while (!valid || "n" === (await ask("\nContinue? (Y/n): ")));
}

function promptRepository() {
  process.stdout.write("Select repository:\n");
  process.stdout.write("  (use the index number or a regular expression)\n\n");
  for (const [i, repo] of repositories.entries()) {
    const idx = `${i + 1}`;
    process.stdout.write(" ".repeat(4 - idx.length) + idx + ": " + repo.name + "\n");
  }
}

function isValidRepository(repository) {
  let result = false;
  if (Number.isInteger(parseInt(repository))) {
    const idx = parseInt(repository);
    if (idx > 0 && idx <= repositories.length) result = true;
  } else {
    for (const repo of repositories) {
      if (repository === repo.name) {
        result = true;
        break;
      }
    }
  }
  return result;
}

async function updateRepository(selection, repository) {
  if (Number.isInteger(parseInt(repository))) {
    const idx = parseInt(repository);
    if (idx > 0 && idx <= repositories.length) {
      repository = repositories[idx - 1].name;
    }
  }
  for (let entry of await filterUntrackedSelection(selection)) {
    index[entry.path()] = index[entry.path()] || {};
    index[entry.path()].repository = repository;
  }
}
