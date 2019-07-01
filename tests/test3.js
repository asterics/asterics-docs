const ensureGitSubmodule = require("@asterics/git-tools").ensureGitSubmodule;

console.log("Starting clone ...");
ensureGitSubmodule(
  {
    name: "AsTeRICS",
    location: "src/external/asterics",
    reference: "/media/alija/DataNTFS/Git/github/asterics/AsTeRICS",
    branch: "pre-3.1"
  },
  true
);
console.log("Done");
