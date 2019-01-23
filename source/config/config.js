const path = require("path");
const convict = require("convict");
/* Load the schema */
const config = convict(path.join(__dirname, "schema.json"));

require("dotenv").config({ path: path.join(__dirname, ".env") });
let html_to_md_ext = process.env.HTML_TO_MD
  ? process.env.HTML_TO_MD.split(" ")
      .map(v => ({
        from: v.split("=>")[0],
        to: v.split("=>")[1]
      }))
      .filter(v => v.from !== "")
  : "";

/* Load configuration */
config.load({
  env: "production",
  repositories: [
    {
      name: "AsTeRICS",
      path: "source/external/asterics",
      reference: "auto:AsTeRICS",
      branch: "master"
    },
    {
      name: "AsTeRICS.wiki",
      path: "source/external/asterics-wiki",
      reference: "auto:AsTeRICS.wiki",
      branch: "master"
    }
  ],
  html_to_md: [
    { from: "source/external/asterics/Documentation/ACS-Help/HTML", to: "docs/help" }
    // ...html_to_md_ext
  ]
  // TODO: Implement hook for customization
  // html_to_md_custom: [{ from: "InPut.txt", to: "input.txt" }]
});

/* Override configuration */
// config.set("port", 8002);

/* Validate configuration with loaded schema */
config.validate({ allowed: "warn" });

module.exports = config;
