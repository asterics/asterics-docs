// const { BRANCH, ENDPOINT } = process.env;
// const { writeFileSync } = require("fs");
// const { join } = require("path");
// const { execSync } = require("child_process");

// const configPath = join(process.cwd(), "src/config/config.js");
// const config = require(configPath);

// const endpoint = ENDPOINT;
// const branch = BRANCH || execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).replace("\n", "");
// const commitId = execSync("git rev-parse HEAD", { encoding: "utf8" }).replace("\n", "");
// const commitUrl = "https://github.com/asterics/asterics-docs/commit/" + commitId;
// const date = Date();

// const buildInfo = JSON.stringify({ date, endpoint: endpoint, branch, commitId, commitUrl }, null, 4);
// console.log("Creating build information:");
// console.log(buildInfo);
// writeFileSync(join(process.cwd(), config.get("destination"), "build.json"), buildInfo, "utf8");
