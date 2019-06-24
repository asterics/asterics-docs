const path = require("path");

const envConfigPath = path.join(process.cwd(), "src/config/.env"),
  schemaPath = path.join(process.cwd(), "src/config/schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  versions: ["2.6", "2.7", "2.8", "3.0", "3.0.1", "4.0"],
  submodules: [
    {
      name: "asterics-docs",
      location: "src/external/asterics-docs",
      reference: getReferenceInPath(process.cwd(), "../asterics-docs")
    },
    {
      name: "AsTeRICS",
      location: "src/external/asterics",
      reference: getReferenceInPath(process.cwd(), "AsTeRICS")
    },
    {
      name: "WebACS",
      location: "src/external/webacs",
      reference: getReferenceInPath(process.cwd(), "WebACS")
    },
    {
      name: "AsTeRICS.wiki",
      location: "src/external/asterics-wiki",
      reference: getReferenceInPath(process.cwd(), "AsTeRICS.wiki")
    }
  ],
  dependencies: [
    {
      repository: "asterics-docs",
      source: "src/vuepress",
      destination: ".vuepress",
      filter: /\.*/,
      branch: "alija/feature/workflow"
    },
    {
      repository: "asterics-docs",
      source: "",
      destination: ".vuepress/test",
      filter: /\.(gitignore)$/,
      branch: "alija/feature/workflow"
    },
    {
      repository: "asterics-docs",
      source: "src",
      destination: ".vuepress/tomato",
      filter: /\.(Jenkinsfile)$/,
      branch: "alija/feature/workflow"
    },
    {
      source: "AsTeRICS:Documentation/docs",
      destination: "",
      filter: /\.(md|jpg|png|svg)$/i,
      versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    {
      repository: "AsTeRICS",
      source: "Documentation/docs",
      destination: "",
      filter: /\.(md|jpg|png|svg)$/i,
      versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    {
      source: "AsTeRICS:Documentation/ACS-Help/HTML/ACS",
      destination: "manuals/ACS",
      filter: /\.(html?|jpg|png|svg)$/i,
      versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    {
      source: "AsTeRICS:Documentation/ACS-Help/HTML/ACCS",
      destination: "manuals/ACS",
      filter: /\.(html?|jpg|png|svg)$/i,
      versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    {
      repository: "WebACS",
      source: "help_files/WebACS",
      destination: "manuals/WebACS",
      filter: /\.(html?|jpg|png|svg)$/i,
      branch: "master"
      // versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    }
  ]
});

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

config.load({
  repositories: [
    {
      name: "asterics-docs",
      location: ""
    },
    ...config.get("submodules")
  ]
});

module.exports = config;
