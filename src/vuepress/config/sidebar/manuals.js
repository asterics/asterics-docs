const path = require("path");

const { source } = require("../../../../docs.config.js");
const { loadSingleSidebar } = require("./utils.js");

module.exports = {
  // "/manuals/": loadSidebarFrom({
  //   location: path.join(source, "manuals"),
  //   path: "/manuals/asterics-grid",
  //   pre: [],
  //   post: [],
  //   exclude: [/ARE/],
  //   excludeFiles: [/README\.md/]
  // }),
  "/manuals/ACS/": [
    loadSingleSidebar({
      title: "ACS",
      titlePath: "/manuals/ACS/",
      location: path.join(source, "manuals/ACS"),
    }),
  ],
  "/manuals/asterics-grid/": [
    loadSingleSidebar({
      title: "AsTeRICS Grid",
      titlePath: "/manuals/asterics-grid/",
      location: path.join(source, "manuals/asterics-grid"),
    }),
  ],
  "/manuals/WebACS/": [
    loadSingleSidebar({
      title: "WebACS",
      titlePath: "/manuals/WebACS/",
      location: path.join(source, "manuals/WebACS"),
    }),
  ],
  "/manuals/": [
    ["/manuals/ACS/", "ACS"],
    ["/manuals/WebACS/", "WebACS"],
    ["/manuals/fabi/", "FABI"],
    ["/manuals/flipmouse/", "FLipMouse"],
    ["/manuals/asterics-grid/", "AsTeRICS Grid"],
  ],
};
