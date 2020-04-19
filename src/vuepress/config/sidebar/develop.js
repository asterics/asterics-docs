module.exports = [
  {
    title: "Get Started",
    path: "/develop/get-started/",
    collapsable: false,
    children: [
      ["get-started/Development-Environment", "Development Environment"],
      ["get-started/Coding-Guidelines", "Coding Guidelines"],
      //   ["Unit-Testing", "Unit Testing"]
    ],
  },
  {
    title: "Plugin",
    path: "/develop/plugin/",
    collapsable: false,
    children: [
      ["plugin/Plugin-Averager", "Averager Example"],
      ["plugin/Plugin-Advanced", "Advanced"],
      ["plugin/Resource-Handling", "Resource Handling"],
      ["plugin/Computer-Vision", "Computer Vision"],
    ],
  },
  {
    title: "ARE",
    path: "/develop/ARE/",
    collapsable: false,
    children: [
      ["ARE/ARE-Development-Manual.md", "Development Manual"],
      // ["asterics-wiki/api/Resource Handling.md", "Resource handling"],
      // ["ARE-Keyboard-Mouse-Services.md", "Keyboard/Mouse"],
      // ["asterics-wiki/coding_instructions/JavaCV.md", "Computer Vision"],
      // ["ARE-HW-Interfacing-CIM.md", "Interfacing Peripherals (CIM)"]
    ],
  },
  {
    title: "ARE Remote APIs",
    path: "/develop/are-remote-apis/",
    collapsable: false,
    children: [
      ["are-remote-apis/Webserver", "Webserver"],
      ["are-remote-apis/REST-API", "REST"],
      ["are-remote-apis/Websocket", "Websocket"],
    ],
  },
  {
    title: "AsTeRICS Grid",
    path: "/develop/asterics-grid/",
    collapsable: false,
    children: [
      ["asterics-grid/01_structure.md", "01 Structure"],
      ["asterics-grid/02_tools.md", "02 Tools"],
      ["asterics-grid/03_grid.md", "03 Grid"],
      ["asterics-grid/04_vuejs.md", "04 Vuejs"],
      ["asterics-grid/05_datamodel.md", "05 Datamodel"],
      ["asterics-grid/06_data_storage.md", "06 Data storage"],
      ["asterics-grid/07_i18n.md", "07 I18n"],
    ],
  },
  {
    title: "AT Solution",
    path: "/develop/at-solution/",
    collapsable: false,
    children: [
      ["at-solution/AT-solution-tutorial.md", "Tutorial"],
      ["at-solution/APE", "APE"],
    ],
  },
];
