const { loadDirStructure } = require("./../../libraries/util/util-vuepress.js");

console.log(`config.js: __filename is "${__filename}"`);
console.log(`config.js: __dirname is "${__dirname}"`);
console.log(`config.js: process.cwd is "${process.cwd()}"`);

const base = process.env.AS_DOCS_VERSION ? `/${process.env.AS_DOCS_VERSION}/` : "/";
// const cwd
// const helpPath;
// const pluginPath;

// async () => {
//   const sidebarHelp = loadDirStructure("/help/", "intermediate/help");
//   const sidebarHelpPlugins = loadDirStructure("/help/Plugin/", "intermediate/help/Plugins");
// };

console.log(`Building version ${process.env.AS_DOCS_VERSION} with base: ${base}`);

module.exports = {
  title: "AsTeRICS",
  description: "That's all folks.",
  base,
  themeConfig: {
    repo: "asterics/AsTeRICS",
    repoLabel: "Contribute!",
    docsRepo: "asterics/asterics-docs",
    docsDir: "intermediate",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    serviceWorker: {
      updatePopup: true
    },
    nav: [
      {
        text: "Welcome",
        items: [
          { text: "QuickStart Guide", link: "/welcome/QuickStart" },
          { text: "Architecture", link: "/welcome/Architecture" },
          { text: "Community", link: "/welcome/Community" }
        ]
      },
      { text: "Concepts", link: "/concepts/" },
      { text: "Installation", link: "/installation/" },
      { text: "Tutorial", link: "/tutorial/" },
      { text: "Help", link: "/help/" },
      { text: "Model", link: "/model/" },
      { text: "Plugin", link: "/plugin/" },
      { text: "AT Solution", link: "/at_solution/" },
      {
        text: "Languages",
        items: [{ text: "English", link: "/" }, { text: "German", link: "/de/" }]
      }
    ],
    sidebar: {
      "/concepts/": [],
      "/installation/": [],
      "/user_guide/": [],
      // sidebarHelpPlugins,
      // sidebarHelp,
      "/help/Plugins/": [
        {
          title: "Actuators",
          collapsable: true,
          children: [["actuators/AnalogOut", "Analog Out"]]
        }
      ],
      "/help/": [
        {
          title: "Welcome to AsTeRICS",
          collapsable: false,
          children: [""]
        },
        {
          title: "ACS",
          collapsable: true,
          children: [
            ["ACS/intro", "Intro"],
            ["ACS/ACS_Basic_Functions", "Basic Functions"],
            ["ACS/Actuators", "Actuators"],
            ["ACS/Channels", "Channels"],
            ["ACS/Colours_settings", "Colors Settings"],
            ["ACS/Component_Collection_Manager", "Component Collection Manager"],
            ["ACS/Component_Context_Menu", "Component Context Menu"],
            ["ACS/Connected", "Connected"],
            ["ACS/Control_the_ARE", "Control the ARE"],
            ["ACS/Create_and_Edit_a_Model", "Create and Edit a Model"],
            ["ACS/Dialogs_settings", "Dialogs Settings"],
            ["ACS/Disconnected", "Disconnected"],
            ["ACS/Events", "Events"],
            ["ACS/External_Tools", "External Tools"],
            ["ACS/External_Tools_Options", "External Tools Options"],
            ["ACS/General_settings", "General Settings"],
            ["ACS/GUI_Designer", "GUI Designer"],
            ["ACS/Keyboard_control", "Keyboard Control"],
            ["ACS/Load_and_Save_Models", "Load and Save Models"],
            ["ACS/Miscellaneous", "Miscellaneous"],
            ["ACS/Modes", "Modes"],
            ["ACS/Options", "Options"],
            ["ACS/Pause", "Pause"],
            ["ACS/Print", "Print"],
            ["ACS/Processors", "Processors"],
            ["ACS/Running", "Running"],
            ["ACS/Sensors", "Sensors"],
            ["ACS/Setting_the_Properties", "Setting the Properties"],
            ["ACS/Status_Reporting_and_Error_Logging", "Status Reporting and Error Logging"],
            ["ACS/Synchronized", "Synchronized"],
            ["ACS/The_Edit_Tab", "Edit Tab"],
            ["ACS/Tooltips", "Tooltips"]
          ]
        },
        {
          title: "ARE",
          collapsable: true,
          children: [["ARE/ARE_Introduction", "Introduction"]]
        },
        {
          title: "Plugins",
          collapsable: true,
          children: [["Plugins/Introduction", "Introduction"]]
          // children: [["Plugins/actuators/AnalogOut", "AnalogOut"]]
          // children: [
          //   {
          //     title: "Actuators",
          //     collapsable: true,
          //     children: [["Plugins/actuators/AnalogOut", "AnalogOut"]]
          //   }
          // ]
        }
      ]
    },
    sidebarDepth: 2,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};
