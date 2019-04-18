const { lstatSync, readdirSync, symlinkSync } = require("fs");

const version = process.argv[2];

/* Search `asterics-docs.zip` in root folder */
const release = readdirSync(process.cwd())
  .filter(e => !lstatSync(e).isDirectory())
  .filter(e => e.match(/^asterics-docs.zip$/));

/* Rename if `asterics-docs.zip` found */
if (release.length > 0) {
  symlinkSync("asterics-docs.zip", `asterics-docs-v${version}.zip`);
}