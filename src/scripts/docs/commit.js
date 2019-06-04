import { join } from "path";
import { getIndex } from "./shared/util.js";
import { error } from "./shared/logger.js";
import { hasUntracked, resolveUntracked } from "./shared/untracked.js";

let index;
const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

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
    index = await getIndex(false);

    /* Verify if author, committer, and message are specified */
    if (!verifyOptions(options)) {
      return false;
    }

    /* Verify if any new files were created */
    while (await hasUntracked(index)) {
      await resolveUntracked(index);
    }

    /* Commit all changes to local repository */

    /* Commit all changes to remote submodules */
  } catch (err) {
    console.log(err);
  }
};

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
