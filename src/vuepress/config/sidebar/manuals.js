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
    {
      sidebarDepth: 0,
      title: "AsTeRICS Grid",
      path: "/manuals/asterics-grid/",
      collapsable: false,
      children: [
        ["/manuals/asterics-grid/01_terms", "Terms"],
        ["/manuals/asterics-grid/02_installation", "Installation"],
        ["/manuals/asterics-grid/03_basic_setup", "Basic Setup"],
        ["/manuals/asterics-grid/04_navigation-overview", "Navigation Overview"],
        ["/manuals/asterics-grid/05_editing-grid-set", "Editing a Grid Set"],
        ["/manuals/asterics-grid/06_editing-grid", "Editing a Grid"],
        {
          title: "Grid Elements",
          path: "/manuals/asterics-grid/07_grid-elements",
          sidebarDepth: 0,
          children: [
            ["/manuals/asterics-grid/07a_word-forms", "Word Forms"],
            ["/manuals/asterics-grid/07b_live-elements", "Live Elements"],
          ],
        },
        ["/manuals/asterics-grid/08_actions", "Grid Element Actions"],
        ["/manuals/asterics-grid/09_input-options", "Input Options"],
        ["/manuals/asterics-grid/10_dictionaries", "Dictionaries"],
        ["/manuals/asterics-grid/11_voices", "Voices"],
        ["/manuals/asterics-grid/12_multilingual-grid-sets", "Multilingual Grid Sets"],
      ],
    },
    {
      sidebarDepth: 0,
      title: "Additional Resources",
      path: "/manuals/asterics-grid/",
      collapsable: false,
      children: [
        ["/manuals/asterics-grid/faq", "FAQ"],
        ["/manuals/asterics-grid/contributing-to-ag", "Contributing to AG"],
      ],
    },
    {
      sidebarDepth: 0,
      title: "Tutorials",
      path: "/manuals/asterics-grid/",
      collapsable: false,
      children: [
        ["/manuals/asterics-grid/tutorials/01_http-action-tutorials", "HTTP Action"],
        ["/manuals/asterics-grid/tutorials/02_uart-action-tutorials", "UART Action"],
        ["/manuals/asterics-grid/tutorials/03_predefined-action-tutorials", "Predefined Action"],
      ],
    },
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
