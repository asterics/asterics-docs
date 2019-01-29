const path = require("path"),
  configPath = path.join(process.cwd(), "src", "config", "config.js"),
  config = require(configPath);

module.exports = {
  host: config.get("host"),
  port: config.get("port"),
  base: config.get("endpoint") ? `/${config.get("endpoint")}/` : "",
  dest: config.get("destination"),
  title: "AsTeRICS",
  description: "That's all folks.",
  themeConfig: {
    repo: "asterics/AsTeRICS",
    repoLabel: "Repository!",
    docsRepo: "asterics/asterics-docs",
    docsDir: config.get("documentation"),
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {
        text: "Getting Started",
        items: [{ text: "Overview", link: "/getting_started/Overview" }, { text: "Demos", link: "/getting_started/Demos" }]
      },
      {
        text: "Use!", //maybe rename to 'Create/Use/Configure'
        items: [
          { text: "Model", link: "/models/Search" },
          { text: "AsTeRICS Grid", link: "/asterics_grids/Search" },
          { text: "AT solution", link: "/at_solutions/Search" } //maybe rename to 'AT application'
        ]
      },
      { text: "Download", link: "/user_doc/Installation" },
      {
        text: "Documentation",
        items: [
          { text: "Concepts", link: "/user_doc/Concepts" },
          { text: "Installation", link: "/user_doc/Installation" },
          { text: "User Interfaces", link: "/user_doc/User_Interfaces" },
          { text: "Tutorials", link: "/user_doc/Tutorials" },
          { text: "User manuals", link: "/user_doc/User_Manuals" },
          { text: "APIs", link: "/user_doc/APIs" }
        ]
      },
      {
        text: "Help",
        link: "/help/"
      },
      {
        text: "Create!", //maybe rename to 'Create/Use/Configure'
        items: [
          { text: "Model", link: "/models/New" },
          { text: "AsTeRICS Grid", link: "/asterics_grids/New" },
          { text: "Plugin", link: "/plugins/New" },
          { text: "AT solution", link: "/at_solutions/New" } //maybe rename to 'AT application'
        ]
      },
      {
        text: "Support",
        items: [
          { text: "Issues", link: "/support/Issues" },
          { text: "Contact", link: "/support/Contact" },
          { text: "Contribute", link: "/support/Contribute" },
          { text: "Donate", link: "/support/Donate" }
        ]
      },

      {
        text: "Languages",
        items: [{ text: "English", link: "/" }, { text: "German", link: "/de/" }]
      }
    ],
    sidebar: {
      "/concepts/": [],
      "/support/": [
        {
          title: "Actuators",
          collapsable: true,
          children: [["Contact", "Contact"]]
        }
      ],
      "/installation/": [],
      "/user_guide/": [],
      "/help/Plugins/": loadPluginHelp(),
      "/help/": loadHelp()
    },
    sidebarDepth: 2,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};

function loadHelp() {
  return {};
}
