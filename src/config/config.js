const path = require("path");

const envConfigPath = path.join(process.cwd(), "src/config/.env"),
  schemaPath = path.join(process.cwd(), "src/config/schema.json");

require("dotenv").config({ path: envConfigPath });
const convict = require("convict"),
  config = convict(schemaPath),
  { getReferenceInPath } = require("@asterics/git-tools");

/* Load configuration */
config.load({
  versions: ["4.0.x"],
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
      name: "asterics-grid",
      location: "src/external/asterics-grid",
      reference: getReferenceInPath(process.cwd(), "asterics-grid")
    },
    {
      name: "asterics-camerainput-cameramouse",
      location: "src/external/asterics-camerainput-cameramouse",
      reference: getReferenceInPath(
        process.cwd(),
        "asterics-camerainput-cameramouse"
      )
    },
    {
      name: "asterics-camerainput-eyecontrol",
      location: "src/external/asterics-camerainput-eyecontrol",
      reference: getReferenceInPath(
        process.cwd(),
        "asterics-camerainput-eyecontrol"
      )
    },
    {
      name: "asterics-solution-template",
      location: "src/external/asterics-solution-template",
      reference: getReferenceInPath(process.cwd(), "asterics-solution-template")
    }
  ],
  dependencies: [
    {
      repository: "asterics-docs",
      source: "src/vuepress",
      destination: ".vuepress",
      filter: /\.*/,
      branch: "master"
    },
    {
      source: "AsTeRICS:Documentation/docs",
      destination: "",
      filter: /\.(md|jpg|png|svg)$/i,
      versions: [["4.0.x", "4.0.x"]]
    },
    {
      repository: "WebACS",
      source: "docs/manuals/WebACS",
      destination: "manuals/WebACS",
      filter: /\.*/,
      branch: "master"
      // versions: [["2.6", "2.6"], ["2.7", "2.7"], ["2.8", "2.8"], ["3.0", "3.0"], ["3.0.1", "3.0.1"], ["4.0", "pre-3.1"]]
    },
    {
      repository: "asterics-grid",
      source: "docs/documentation_user",
      destination: "manuals/asterics-grid",
      filter: /\.*/,
      branch: "master"
    },
    {
      repository: "asterics-grid",
      source: "docs/documentation_dev",
      destination: "develop/asterics-grid",
      filter: /\.*/,
      branch: "master"
    },
    {
      repository: "asterics-camerainput-cameramouse",
      source: "custom/bin/ARE/web/webapps/asterics-camerainput-cameramouse",
      destination: ".vuepress/public/webapps/asterics-camerainput-cameramouse",
      filter: /\.*/,
      branch: "master"
    },
    {
      repository: "asterics-camerainput-eyecontrol",
      source: "custom/bin/ARE/web/webapps/asterics-camerainput-eyecontrol",
      destination: ".vuepress/public/webapps/asterics-camerainput-eyecontrol",
      filter: /\.*/,
      branch: "master"
    },
    //provides modelManipulation.js and webAppUtils.js
    //TODO: use npm libs
    {
      repository: "asterics-solution-template",
      source: "custom/bin/ARE/web/webapps/startpage",
      destination: ".vuepress/public/webapps/startpage",
      filter: /\.*/,
      branch: "master"
    },
    //provides areCommunicator.js, JSMap.js and jquery
    //TODO: use npm libs
    {
      source: "AsTeRICS:ARE_RestAPIlibraries/clientExample",
      destination: ".vuepress/public/webapps/startpage/clientExample",
      filter: /\.*/,
      branch: "master"
    },
    //provides jquery at another path: startpage/lib
    //TODO: use npm libs, cleanup
    {
      source: "AsTeRICS:ARE_RestAPIlibraries/clientExample/javascript",
      destination: ".vuepress/public/webapps/startpage/lib",
      filter: /\.*/,
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
