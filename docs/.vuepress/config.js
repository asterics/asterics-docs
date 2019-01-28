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
      // "/getting_started/": ["", "QuickStart", "Community", "Architecture"],
      // "/": ""
      // "/",
      // {
      //   title: "Welcome",
      //   collapsable: true,
      //   children: ["/getting_started/QuickStart", "/getting_started/Architecture", "/getting_started/Community"]
      // },
      "/support/": [
        {
          title: "Actuators",
          collapsable: true,
          children: [["Contact", "Contact"]]
        }
      ],
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
          children: [["ARE/ARE_Introduction", "Intro"]]
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
