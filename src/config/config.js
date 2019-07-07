const path = require("path");

const envConfigPath = path.join(process.cwd(), "src/config/.env"),
  schemaPath = path.join(process.cwd(), "src/config/schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  versions: ["4.0"],
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
      branch: "alija/feature/extensions"
    },
    {
      source: "AsTeRICS:Documentation/docs",
      destination: "",
      filter: /\.(md|jpg|png|svg)$/i,
      versions: [["4.0", "pre-3.1"]]
    },
    {
      repository: "WebACS",
      source: "help_files/WebACS",
      destination: "more/manuals/WebACS",
      filter: /\.(html?|jpg|png|svg)$/i,
      branch: "master"
      // version4681a736d7e9745517a4bdacb05fcd43d72a7ff2s: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    // {
    //   repository: "AsTeRICS.wiki",
    //   source: "developer_guide/api",
    //   destination: "develop/are-middleware",
    //   filter: /resource\ handling\.md$/i,
    //   branch: "master"
    // },
    // {
    //   repository: "AsTeRICS.wiki",
    //   source: "developer_guide/coding_instructions",
    //   destination: "develop/are-middleware",
    //   filter: /javacv\.md$/i,
    //   branch: "master"
    // },
    {
      repository: "AsTeRICS.wiki",
      source: "developer_guide/api",
      destination: "develop/are-remote-api",
      filter: /api\/asterics\ websocket\.md$/i,
      branch: "master"
    },

    {
      repository: "AsTeRICS.wiki",
      source: "developer_guide/coding_instructions",
      destination: "develop/at-solution",
      filter: /asterics\ solutions\.md$/i,
      branch: "master"
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
