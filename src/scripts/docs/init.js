import { join } from "path";
import { moveCursor, clearScreenDown } from "readline";
import { sync as rmdir } from "rimraf";
import chalk from "chalk";
import { ensureGitSubmodule } from "@asterics/git-tools";
import { info, success } from "./shared";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export const command = "init";
export const aliases = ["i"];
export const describe = "initialize asterics-docs";
export const builder = yargs => {
  yargs.usage("yarn docs init").options({
    h: { alias: "help", describe: "Show this help." },
    v: {
      alias: "verbose",
      describe: "Print processing information to stdout",
      type: "boolean"
    },
    c: { alias: "clean", describe: "Reset and cleanup asterics-docs." }
  });
};
export const handler = options => {
  options.verbose = config.get("verbose") || options.verbose;
  if (options.clean) {
    clean(options);
  } else {
    init(options);
  }
};

function clean(options) {
  let s = [];
  process.stdout.write(info("Cleaning asterics-docs."));
  for (let { name, location, reference, branch } of config.get("submodules")) {
    process.stdout.write(info(`Deleting submodule ${chalk.green(name)}`));
    s.push(name);

    let path = join(process.cwd(), location);
    process.stdout.write(info(`Deleting directory ${path}`));
    rmdir(path);

    path = join(process.cwd(), ".git/modules", location);
    process.stdout.write(info(`Deleting directory ${path}`));
    rmdir(path);

    reset(options, 3);
  }

  log(s, "Deleted");
}

function init(options) {
  let s = [];
  process.stdout.write(info("Initializing asterics-docs."));
  for (let { name, location, reference, branch } of config.get("submodules")) {
    process.stdout.write(info(`Updating submodule ${chalk.green(name)} at ${location}`));
    ensureGitSubmodule({ name, location, reference, branch }, config.get("verbose"));
    s.push(name);

    reset(options, 4);
  }

  log(s, "Updated");
}

function reset(options, lines) {
  if (!options.verbose) {
    moveCursor(process.stdout, 0, -lines);
    clearScreenDown(process.stdout);
  }
}

function log(s, text) {
  process.stdout.write(success(`${text} submodule${s.length > 1 ? "s" : ""}: `, { label: "success", end: "" }));
  for (let submodule of s)
    process.stdout.write(`${submodule === s[s.length - 1] ? `${chalk.green(submodule)}.` : `${chalk.green(submodule)}, `}`);
  process.stdout.write("\n");
}
