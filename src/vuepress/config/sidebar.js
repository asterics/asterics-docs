const path = require("path");
const fs = require("fs");

const configPath = path.join(process.cwd(), "src/config/config.js");
const config = require(configPath);

const sidebar = {
  "/get-started/": [
    ["Overview.md", "Overview"],
    ["Installation.md", "Installation"]
  ],
  "/develop/": [
    {
      title: "Get Started",
      collapsable: false,
      children: [
        ["Development-Environment", "Development Environment"]
        //   ["Coding-Guidelines", "Coding Guidelines"],
        //   ["Unit-Testing", "Unit Testing"]
      ]
    },
    {
      title: "Plugin",
      path: "/develop/plugin/",
      collapsable: false,
      children: [
        ["plugin/Plugin-Averager", "Averager Example"],
        ["plugin/Plugin-Advanced", "Advanced"],
        ["plugin/Resource-Handling", "Resource Handling"],
        ["plugin/Computer-Vision", "Computer Vision"]
      ]
    },
    {
      title: "ARE",
      path: "/develop/ARE/",
      collapsable: false,
      children: [
        ["ARE/ARE-Development-Manual.md", "Development Manual"]
        // ["asterics-wiki/api/Resource Handling.md", "Resource handling"],
        // ["ARE-Keyboard-Mouse-Services.md", "Keyboard/Mouse"],
        // ["asterics-wiki/coding_instructions/JavaCV.md", "Computer Vision"],
        // ["ARE-HW-Interfacing-CIM.md", "Interfacing Peripherals (CIM)"]
      ]
    },
    {
      title: "ARE Remote APIs",
      path: "/develop/are-remote-apis/",
      collapsable: false,
      children: [
        ["are-remote-apis/Webserver", "Webserver"],
        ["are-remote-apis/REST-API", "REST"],
        ["are-remote-apis/Websocket", "Websocket"]
      ]
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
        ["asterics-grid/07_i18n.md", "07 I18n"]
      ]
    },
    {
      title: "AT Solution",
      collapsable: false,
      children: [
        ["AT_solution_development", "Introduction"],
        ["AT-solution-demos", "Demos"],
        ["asterics-wiki/coding_instructions/AsTeRICS Solutions", "Tutorial"],
        ["APE", "AsTeRICS Packaging Environment (APE)"]
      ]
    }
  ],
  "/plugins/": loadSidebarFrom({
    location: path.join(config.get("documentation"), "plugins"),
    pre: [],
    post: [],
    excludeFiles: [/README\.md/]
  }),
  // "/manuals/": loadSidebarFrom({
  //   location: path.join(config.get("documentation"), "manuals"),
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
      location: path.join(config.get("documentation"), "manuals/ACS")
    })
  ],
  "/manuals/asterics-grid/": [
    loadSingleSidebar({
      title: "AsTeRICS Grid",
      titlePath: "/manuals/asterics-grid/",
      location: path.join(config.get("documentation"), "manuals/asterics-grid")
    })
  ],
  "/manuals/WebACS/": [
    loadSingleSidebar({
      title: "WebACS",
      titlePath: "/manuals/WebACS/",
      location: path.join(config.get("documentation"), "manuals/WebACS")
    })
  ],
  "/manuals/": [
    ["/manuals/ACS/", "ACS"],
    ["/manuals/asterics-grid/", "AsTeRICS Grid"],
    ["/manuals/WebACS/", "WebACS"]
  ],
  "/customize/": [
    {
      title: "Model",
      collapsable: false,
      children: [
        ["Model-Customization", "Customization"],
        ["Model-Creation", "Creation"]
      ]
    },
    {
      title: "AsTeRICS Grid",
      collapsable: false,
      children: [
        ["Grid-Customization", "Customization"],
        ["Grid-Creation", "Creation"]
      ]
    }
  ]
};

module.exports = sidebar;

function loadSidebarFrom({
  location,
  pre,
  post,
  exclude = [],
  excludeFiles = []
}) {
  let sidebar = fs.readdirSync(location);

  /* First level only directories */
  sidebar = sidebar.filter(e =>
    fs.statSync(path.join(location, e)).isDirectory()
  );

  /* Filter exclude */
  sidebar = sidebar.filter(e => !exclude.some(r => r.test(e)));

  /* Map to first level entry */
  sidebar = sidebar.map(e => ({ title: e, collapsable: true, children: null })); //abs: path.join(location, e) }));

  /* Append children for each entry */
  sidebar.forEach(e => {
    let children = fs.readdirSync(path.join(location, e.title));

    /* Filter markdown files, only */
    children = children.filter(child => /.*md$/.test(child));

    /* Remove file extension */
    children = children.filter(e => !excludeFiles.some(r => r.test(e)));
    children = children.map(child => child.replace(/\.md$/, ""));

    /* Construct arrays containing link and title */
    children = children.map(child => {
      let title = child.replace(/_/g, " ");
      let link = `${e.title}/${child}`;
      return [link, capitalize(title)];
    });

    e.children = children;
  });

  /* Capitalize titles */
  sidebar = sidebar.map(e => ({ ...e, title: capitalize(e.title) }));

  return [...pre, ...sidebar, ...post];
}

function loadSidebarFromWithPath({ location, title, titlePath, pre }) {
  const children = fs
    .readdirSync(location)
    .map(child => child.replace(/\.md$/, ""))
    .filter(child => child !== "img")
    .filter(child => child !== "README")
    .map(child => {
      let title = child.replace(/_/g, " ");
      let link = `${titlePath}${child}`;
      return [link, capitalize(title)];
    });

  return {
    title,
    path: titlePath,
    collapsable: false,
    sidebarDepth: 1,
    children
  };
}

function loadSingleSidebar({ title, titlePath, location }) {
  const children = fs
    .readdirSync(location)
    .map(child => child.replace(/\.md$/, ""))
    .filter(child => child !== "img")
    .filter(child => child !== "README")
    .map(child => {
      let title = child.replace(/_/g, " ");
      let link = `${titlePath}${child}`;
      return [link, capitalize(title)];
    });
  return {
    title,
    path: titlePath,
    collapsable: false,
    sidebarDepth: 1,
    children
  };
}

function capitalize(words) {
  return words
    .split(" ")
    .map(word => [word.charAt(0).toUpperCase(), word.slice(1)].join(""))
    .join(" ");
}
