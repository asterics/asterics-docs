const path = require("path");

let envConfigPath = path.join(process.cwd(), "src", "config", ".env"),
  schemaPath = path.join(process.cwd(), "src", "config", "schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  env: "production",
  wd: process.cwd(),
  documentation: "docs",
  destination: path.join("docs", ".vuepress", "dist"),
  submodules: [
    {
      name: "AsTeRICS",
      destination: path.join(process.cwd(), "src", "external", "asterics"),
      reference: getReferenceInPath(process.cwd(), "AsTeRICS"),
      branch: "master"
    },
    {
      name: "AsTeRICS.wiki",
      destination: path.join(process.cwd(), "src", "external", "asterics-wiki"),
      reference: getReferenceInPath(process.cwd(), "AsTeRICS.wiki"),
      branch: "master"
    }
  ],
  versions: ["v2.3-patch", "v2.5-patch", "v3.0.1", "master"],
  html_to_md: [
    {
      from: path.join("src", "external", "asterics", "Documentation", "ACS-Help", "HTML"),
      to: path.join("docs", "help")
    }
  ]
});

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

module.exports = config;
