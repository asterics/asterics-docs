const NodeGit = require("nodegit");
const path = require("path");
const source = path.normalize("/media/alija/DataNTFS/Git/github/asterics/AsTeRICS/.git");
const location = path.join(process.cwd(), "dummy-clone-promise");

console.log("Starting clone ...");
NodeGit.Clone(source, location).then(repo => {
  console.log("Done.");
});
