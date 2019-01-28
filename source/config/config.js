const path = require("path");

let envConfigPath = path.join(process.cwd(), "source", "config", ".env"),
  schemaPath = path.join(process.cwd(), "source", "config", "schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { gitLocalPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  env: "production",
  wd: process.cwd(),
  documentation: "docs",
  destination: path.join("docs", ".vuepress", "dist"),
  submodules: [
    {
      name: "AsTeRICS",
      destination: path.join(process.cwd(), "source", "external", "asterics"),
      reference: gitLocalPath(path.join(process.cwd(), ".."), "auto:AsTeRICS"),
      branch: "master"
    },
    {
      name: "AsTeRICS.wiki",
      destination: path.join(process.cwd(), "source", "external", "asterics-wiki"),
      reference: gitLocalPath(path.join(process.cwd(), ".."), "auto:AsTeRICS.wiki"),
      branch: "master"
    }
  ],
  versions: ["v2.3", "v2.5", "v3.0.1", "master"],
  html_to_md: [
    {
      from: path.join("source", "external", "asterics", "Documentation", "ACS-Help", "HTML"),
      to: path.join("docs", "help")
    }
  ]
});

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

module.exports = config;
