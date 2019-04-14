import { join } from "path";
import { sync as rmdir } from "rimraf";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);
import { ensureGitSubmodule } from "@asterics/git-tools";

export const command = "init";
export const aliases = ["i"];
export const describe = "initialize asterics-docs";
export const builder = yargs => {
  yargs.usage("yarn docs init").options({
    h: { alias: "help", describe: "Show this help." },
    c: { alias: "clean", describe: "Reset and cleanup asterics-docs." }
  });
};
export const handler = ({ clean }) => {
  if (clean) {
    console.log("reseting asterics-docs ...");
    for (let { name, location, reference, branch } of config.get("submodules")) {
      const path = join(process.cwd(), location);
      if (config.get("verbose")) console.log(`deleting submodule ${name} at ${path}`);
      rmdir(path);
      path = join(process.cwd(), ".git/modules", location);
      if (config.get("verbose")) console.log(`deleting submodule ${name} at ${path}`);
      rmdir(path);
    }
  } else {
    console.log("initializing asterics-docs ...");
    for (let { name, location, reference, branch } of config.get("submodules")) {
      ensureGitSubmodule({ name, location, reference, branch }, config.get("verbose"));
    }
  }
};
