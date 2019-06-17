import { createInterface, cursorTo, clearScreenDown } from "readline";
import { join, isAbsolute, extname, dirname, normalize } from "path";
import { Repository, Reference, Status } from "nodegit";
import { cursorSavePosition, cursorRestorePosition } from "ansi-escapes";
import { table } from "table";
import { success, error, message } from "./logger.js";
import { getBranchesOfRepository } from "./util.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
const repositories = config.get("repositories");
let index = null;

export async function hasUntracked(index) {
  const untracked = await getUntracked();
  for (const file of untracked) {
    const entry = index.entry(file);
    if (entry === undefined) {
      return true;
    }
  }
  return false;
}

export async function resolveUntracked(i) {
  process.stdout.write(cursorSavePosition);
  /* FIXME: use method Index#update() instead of direct manipulation */
  index = i.entries;
  const selection = await getSelection();
  await getRepository(selection);
  await getBranch(selection);
  await getSource(selection);
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
      const r = new RegExp(`^${selection}`);
      return untracked.filter(e => r.exec(e.path()));
    } catch (err) {}
  }
  return [];
}

function getTableOptions(header, entries) {
  let opts = {
    columns: {},
    border: {
      topBody: "",
      topJoin: "",
      topLeft: "",
      topRight: "",
      bottomBody: "",
      bottomJoin: "",
      bottomLeft: "",
      bottomRight: "",
      bodyLeft: "",
      bodyRight: "",
      bodyJoin: "",
      joinBody: "-",
      joinLeft: "",
      joinRight: "",
      joinJoin: ""
    },
    drawHorizontalLine: (index, size) => {
      return index === 1;
    }
  };
  for (let i = 0; i < header.length; i++) {
    const min = i === 0 ? 4 : 20;
    const alignment = i === 0 ? "right" : "left";
    opts.columns[i] = {
      alignment: alignment,
      width: getColumnWidth(entries, i, min)
    };
  }
  return opts;
}

function getColumnWidth(entries, idx, min) {
  const l = entries.map(e => e[idx].length);
  const max = Math.max(...l);
  return max > min ? max : min;
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

export function ask(query) {
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
  // cursorTo(process.stdout, 0, 0);
  process.stdout.write(cursorRestorePosition);
  clearScreenDown(process.stdout);
}

/* Selection */
async function getSelection() {
  let selection = "";
  let valid = true;

  do {
    // await promptSelection("");
    await promptSelection();
    selection = await ask("\nSelection: ");
    if (await isValidSelection(selection)) {
      valid = true;
      await promptSelection(selection);
    } else {
      valid = false;
    }
  } while (!valid || "n" === (await ask("\nProceed with selection? (Y/n): ")));
  return selection;
}

export async function promptSelection(selection = "") {
  const header = ["# ", "path", "repository", "branch", "source"];
  const entries = await getUntrackedEntries(selection);
  const opts = getTableOptions(header, entries);
  resetScreen();
  process.stdout.write("Select entries. Status of untracked files:\n");
  process.stdout.write("  (use the index number, the file name or a regular expression)\n\n");
  process.stdout.write(table([header, ...highlightSelection(entries, selection)], opts));
}

function highlightSelection(entries, selection = "") {
  let result = [];

  for (const [i, entry] of entries.entries()) {
    const valid = entry[2] !== "-" && entry[3] !== "-" && entry[4] !== "-";
    let logger = valid ? success : message;
    if (Number.isInteger(parseInt(selection))) {
      const idx = parseInt(selection);
      if (idx > 0 && idx <= entries.length) {
        if (idx - 1 === i) {
          logger = error;
        }
      }
    } else if (selection !== "") {
      try {
        const r = new RegExp(`^${selection}`);
        if (r.exec(entry[1])) {
          logger = error;
        }
      } catch (err) {}
    }
    let newEntry = [];
    for (const e of entry) {
      newEntry.push(logger("", { end: "", label: e }));
    }
    result.push(newEntry);
  }
  return result;
}

async function getUntrackedEntries() {
  const untracked = await getUntracked();
  return untracked.map((file, idx) => {
    const i = `${idx + 1}`;
    const p = file.path();
    const e = index[p];
    const r = e ? (e.repository ? e.repository : "-") : "-";
    const b = e ? (e.branch ? e.branch : "-") : "-";
    const d = e ? (e.source ? e.source : "-") : "-";
    return [i, p, r, b, d];
  });
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
      // await promptSelection(selection);
      // promptRepository();
    } else {
      valid = false;
      continue;
    }
  } while (!valid); // || "n" === (await ask("\nContinue? (Y/n): ")));
}

function promptRepository() {
  const header = ["# ", "repository"];
  const entries = repositories.map((repo, idx) => {
    return [`${idx + 1}`, repo.name];
  });
  const opts = getTableOptions(header, entries);
  process.stdout.write("\nSelect repository:\n");
  process.stdout.write("  (use the index or the repository name)\n\n");
  process.stdout.write(table([header, ...entries], opts));
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

/* Branch */
async function getBranch(selection) {
  let branch = "";
  let valid = true;
  const repository = await getRepositoryOfSelection(selection);
  const branches = await getBranchesOfRepository(repository);

  do {
    await promptSelection(selection);
    promptBranch(branches);
    branch = await ask("\nSelection: ");
    if (isValidBranch(branch, branches)) {
      valid = true;
      await updateBranch(selection, branch, branches);
      // await promptSelection(selection);
      // promptBranch(branches);
    } else {
      valid = false;
      continue;
    }
  } while (!valid); // || "n" === (await ask("\nContinue? (Y/n)")));
}

async function getRepositoryOfSelection(selection) {
  let repository = "";
  const untracked = await getUntracked();

  if (Number.isInteger(parseInt(selection))) {
    const idx = parseInt(selection);
    if (idx > 0 && idx <= untracked.length) {
      const file = untracked[idx - 1];
      const entry = index[file.path()];
      repository = entry.repository;
    }
  } else {
    try {
      const r = new RegExp(`${selection}`);
      for (const file of untracked) {
        if (selection !== "" && r.exec(file.path())) {
          const entry = index[file.path()];
          repository = entry.repository;
        }
      }
    } catch (err) {}
  }
  return repository;
}

async function promptBranch(branches) {
  const header = ["# ", "branch"];
  const entries = branches.map((branch, idx) => {
    return [`${idx + 1}`, branch];
  });
  const opts = getTableOptions(header, entries);
  process.stdout.write(`\nSelect branch:\n`);
  process.stdout.write("  (use the index or the branch name)\n\n");
  process.stdout.write(table([header, ...entries], opts));
}

async function isValidBranch(branch, branches) {
  let result = false;
  if (Number.isInteger(parseInt(branch))) {
    const idx = parseInt(branch);
    if (idx > 0 && idx <= branches.length) result = true;
  } else {
    for (const b of branches) {
      if (b === branch) {
        result = true;
        break;
      }
    }
  }
  return result;
}

async function updateBranch(selection, branch, branches) {
  if (Number.isInteger(parseInt(branch))) {
    const idx = parseInt(branch);
    if (idx > 0 && idx <= branches.length) {
      branch = branches[idx - 1];
    }
  }
  for (let entry of await filterUntrackedSelection(selection)) {
    index[entry.path()] = index[entry.path()] || {};
    index[entry.path()].branch = branch;
  }
}

/* Source */
async function getSource(selection) {
  let source = "";
  let valid = true;

  do {
    await promptSelection(selection);
    source = await ask("\nSource: ");
    if (isValidSource(source)) {
      valid = true;
      await updateSource(selection, source);
      // await promptSelection(selection);
    } else {
      valid = false;
      continue;
    }
  } while (!valid); // || "n" === (await ask("\nContinue? (Y/n): ")));
  resetScreen();
}

function isValidSource(source) {
  return !isAbsolute(source);
}

async function updateSource(selection, source) {
  source = normalize(source);
  if (extname(source) !== "") {
    source = dirname(source);
  }
  for (let entry of await filterUntrackedSelection(selection)) {
    index[entry.path()] = index[entry.path()] || {};
    index[entry.path()].source = source;
  }
}
