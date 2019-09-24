const path = require("path");
const fs = require("fs");

const configPath = path.join(process.cwd(), "src/config/config.js");
const config = require(configPath);

module.exports = {
  "/get-started/": [["Overview.md", "Overview"], ["Installation.md", "Installation"]],
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
      collapsable: false,
      children: [
        ["Plugin-Introduction", "Introduction"],
        ["Plugin-Tutorial", "Tutorial"],
        ["Plugin-Advanced", "Advanced"]
      ]
    },
    {
      title: "ARE Middleware",
      collapsable: false,
      children: [
        ["ARE.md", "Advanced"]
        // ["asterics-wiki/api/Resource Handling.md", "Resource handling"],
        // ["ARE-Keyboard-Mouse-Services.md", "Keyboard/Mouse"],
        // ["asterics-wiki/coding_instructions/JavaCV.md", "Computer Vision"],
        // ["ARE-HW-Interfacing-CIM.md", "Interfacing Peripherals (CIM)"]
      ]
    },
    {
      title: "ARE Remote APIs",
      collapsable: false,
      children: [
        ["ARE-Webserver.md", "Webserver"],
        ["REST-API", "REST"],
        ["asterics-wiki/api/AsTeRICS Websocket.md", "Websocket"]
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
  "/manuals/": loadSidebarFrom({
    location: path.join(config.get("documentation"), "manuals"),
    pre: [],
    post: [],
    exclude: [/ARE/],
    excludeFiles: [/README\.md/]
  }),
  "/customize/": [
    {
      title: "Model",
      collapsable: false,
      children: [["Model-Customization", "Customization"], ["Model-Creation", "Creation"]]
    },
    {
      title: "AsTeRICS Grid",
      collapsable: false,
      children: [["Grid-Customization", "Customization"], ["Grid-Creation", "Creation"]]
    }
  ]
};

function loadSidebarFrom({ location, pre, post, exclude = [], excludeFiles = [] }) {
  let sidebar = fs.readdirSync(location);

  /* First level only directories */
  sidebar = sidebar.filter(e => fs.statSync(path.join(location, e)).isDirectory());

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

      //console.log(`title: ${title}, link: ${link}`);

      return [link, capitalize(title)];
    });

    e.children = children;
  });

  /* Capitalize titles */
  sidebar = sidebar.map(e => ({ ...e, title: capitalize(e.title) }));

  return [...pre, ...sidebar, ...post];
}

function capitalize(words) {
  return words
    .split(" ")
    .map(word => [word.charAt(0).toUpperCase(), word.slice(1)].join(""))
    .join(" ");
}
