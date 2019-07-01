const NodeGit = require("nodegit");
const path = require("path");
const source = path.normalize("/media/alija/DataNTFS/Git/github/asterics/AsTeRICS/.git");
const location = path.join(process.cwd(), "dummy-clone-asyncawait");

(async () => {
  console.log("Starting clone ...");
  const repo = await NodeGit.Clone(source, location);
  console.log("Done.");
})();
