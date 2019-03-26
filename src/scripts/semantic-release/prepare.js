const { lstatSync, readdirSync, symlinkSync } = require("fs");

const version = process.argv[2];

/* Search `docs.zip` in root folder */
const release = readdirSync(process.cwd())
  .filter(e => !lstatSync(e).isDirectory())
  .filter(e => e.match(/^docs.zip$/));

/* Rename if `docs.zip` found */
if (release.length > 0) {
  symlinkSync("docs.zip", `docs-v${version}.zip`);
}