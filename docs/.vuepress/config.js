const path = require("path"),
  configPath = path.join(process.cwd(), "src", "config", "config.js"),
  config = require(configPath);

module.exports = {
  host: config.get("host"),
  port: config.get("port"),
  base: config.get("endpoint") ? `/${config.get("endpoint")}/` : "",
  dest: config.get("destination"),
  title: "AsTeRICS",
  description: "Customized Low-Cost Assistive Technologies",
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
      { text: "Getting Started", link: "/getting-started/" },
      {
        text: "Discover",
        items: [
          { text: "Models", link: "/getting-started/Search-Models" },
          { text: "Grids", link: "/getting-started/Search-asterics-grids" },
          { text: "AT Solutions", link: "/getting-started/Search-AT-solutions" }
        ]
      },
      { text: "Help", link: "/help/" },
      // {
      //   text: "Getting Started",
      //   items: [
      //     { text: "Overview", link: "/getting_started/Overview" },
      //     { text: "Demos", link: "/getting_started/Demos" }
      //   ]
      // },
      // {
      //   text: "Use", //maybe rename to 'Create/Use/Configure'
      //   items: [
      //     { text: "Model", link: "/models/Search" },
      //     { text: "AsTeRICS Grid", link: "/asterics_grids/Search" },
      //     { text: "AT solution", link: "/at_solutions/Search" } //maybe rename to 'AT application'
      //   ]
      // },
      // { text: "Download", link: "/user_doc/Installation" },
      // {
      //   text: "Documentation",
      //   link: "/user_doc/"
      //   //   items: [
      //   //     { text: "Concepts", link: "/user_doc/Concepts" },
      //   //     { text: "Installation", link: "/user_doc/Installation" },
      //   //     { text: "User Interfaces", link: "/user_doc/User_Interfaces" },
      //   //     { text: "Tutorials", link: "/user_doc/Tutorials" },
      //   //     { text: "User manuals", link: "/user_doc/User_Manuals" },
      //   //     { text: "APIs", link: "/user_doc/APIs" }
      //   //   ]
      // },
      {
        text: "Applications", //maybe rename to 'Create/Use/Configure'
        items: [
          {
            text: "WebACS",
            link:
              "http://asterics.github.io/AsTeRICS/webapps/WebACS/?areBaseURI=http://localhost:8081"
          },
          {
            text: "AsTeRICS Grid",
            link:
              "https://asterics.github.io/AsTeRICS-Grid/package/static/#main"
          },
          { text: "Plugin IDE", link: "/plugins/New" },
          { text: "AT solution IDE", link: "/at_solutions/New" } //maybe rename to 'AT application'
        ]
      },
      { text: "Develop", link: "/develop/" },
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
        items: [
          { text: "English", link: "/" },
          { text: "German", link: "/de/" }
        ]
      }
    ],
    sidebar: {
      "/getting-started/": [
        {
          title: "Getting Started",
          collapsable: false,
          children: [["", "Introduction"]]
        },
        {
          title: "Discover",
          collapsable: false,
          children: [
            ["Search-Models", "Models"],
            ["Search-asterics-grids", "Grids"],
            ["Search-AT-solutions", "AT Solutions"]
          ]
        }
      ],
      "/develop/": [
        {
          title: "Introduction",
          collapsable: false,
          children: [
            ["DeveloperGuide", "Development Environment"],
            ["Coding-Guidelines", "Coding Guidelines"],
            ["Unit-Testing", "Unit Testing"]
          ]
        },
        {
          title: "Plugin",
          collapsable: false,
          children: [
            ["Simple-Plugin-Tutorial.md", "Tutorial"],
            ["Plugin", "Creation Wizard"],
            ["ARE-HW-Interfacing-JNI.md", "HW Interfacing (JNI)"]
          ]
        },
        {
          title: "AT Solution",
          collapsable: false,
          children: [
            ["AT_solution_development", "Introduction"],
            ["AT-solution-demos", "Demos"],
            [
              "asterics-wiki/coding_instructions/AsTeRICS Solutions",
              "Tutorial"
            ],
            ["APE", "AsTeRICS Packaging Environment (APE)"]
          ]
        },
        {
          title: "ARE Remote APIs",
          collapsable: false,
          children: [
            ["ARE-Webserver.md", "Webserver"],
            ["REST-API", "REST"],
            // ["REST-demos.md", "REST API Demos"],
            // ["asterics-wiki/api/REST-API.md", "REST API Tutorial"],
            // ["REST-API-js-areCommunicator.md", "JS REST Client lib"],
            // [
            //   "REST-API-js-wrapper-ext.md",
            //   "JS Model Manipulation / Deployment lib"
            // ],
            ["asterics-wiki/api/AsTeRICS Websocket.md", "Websocket"]
            // ["REST-API-java-client.md", "REST Java Client lib"]
          ]
        },
        {
          title: "ARE Middleware",
          collapsable: false,
          children: [
            ["ARE API.md", "Introduction"],
            ["asterics-wiki/api/Resource Handling.md", "Resource handling"],
            ["ARE-Keyboard-Mouse-Services.md", "Keyboard/Mouse"],
            ["asterics-wiki/coding_instructions/JavaCV.md", "Computer Vision"],
            ["ARE-HW-Interfacing-CIM.md", "Interfacing Peripherals (CIM)"]
          ]
        }
      ],
      "/help/Plugins/": [
        {
          title: "Actuators",
          collapsable: true,
          children: [["actuators/AnalogOut", "Analog Out"]]
        }
      ],
      "/help/": [
        ["", "Introduction"],
        ["User-Interfaces", "User Interfaces"],
        ["Tutorials", "Tutorials"],
        {
          title: "WebACS",
          collapsable: true,
          children: [
            ["ACS/intro", "Intro"],
            ["ACS/ACS_Basic_Functions", "Basic Functions"],
            ["ACS/Actuators", "Actuators"],
            ["ACS/Channels", "Channels"],
            ["ACS/Colours_settings", "Colors Settings"],
            [
              "ACS/Component_Collection_Manager",
              "Component Collection Manager"
            ],
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
            [
              "ACS/Status_Reporting_and_Error_Logging",
              "Status Reporting and Error Logging"
            ],
            ["ACS/Synchronized", "Synchronized"],
            ["ACS/The_Edit_Tab", "Edit Tab"],
            ["ACS/Tooltips", "Tooltips"]
          ]
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
            [
              "ACS/Component_Collection_Manager",
              "Component Collection Manager"
            ],
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
            [
              "ACS/Status_Reporting_and_Error_Logging",
              "Status Reporting and Error Logging"
            ],
            ["ACS/Synchronized", "Synchronized"],
            ["ACS/The_Edit_Tab", "Edit Tab"],
            ["ACS/Tooltips", "Tooltips"]
          ]
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
        },
        {
          title: "ARE",
          collapsable: true,
          children: [["ARE/ARE_Introduction", "Introduction"]]
        }
      ]
    },
    sidebarDepth: 3,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};

function loadHelp() {
  return {};
}
