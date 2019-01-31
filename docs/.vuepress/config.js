const path = require("path"),
  fs = require("fs"),
  configPath = path.join(process.cwd(), "src", "config", "config.js"),
  config = require(configPath);

module.exports = {
  devtools: true,
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
      {
        text: "Applications", //maybe rename to 'Create/Use/Configure'
        items: [
          {
            text: "WebACS",
            link: "http://asterics.github.io/AsTeRICS/webapps/WebACS/?areBaseURI=http://localhost:8081"
          },
          {
            text: "AsTeRICS Grid",
            link: "https://asterics.github.io/AsTeRICS-Grid/package/static/#main"
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
        items: [{ text: "English", link: "/" }, { text: "German", link: "/de/" }]
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
          children: [["Search-Models", "Models"], ["Search-asterics-grids", "Grids"], ["Search-AT-solutions", "AT Solutions"]]
        }
      ],
      "/develop/": [
        {
          title: "Introduction",
          collapsable: false,
          children: [["DeveloperGuide", "Development Environment"], ["Coding-Guidelines", "Coding Guidelines"], ["Unit-Testing", "Unit Testing"]]
        },
        {
          title: "Plugin",
          collapsable: false,
          children: [["Simple-Plugin-Tutorial.md", "Tutorial"], ["Plugin", "Creation Wizard"], ["ARE-HW-Interfacing-JNI.md", "HW Interfacing (JNI)"]]
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
        },
        {
          title: "ARE Remote APIs",
          collapsable: false,
          children: [["ARE-Webserver.md", "Webserver"], ["REST-API", "REST"], ["asterics-wiki/api/AsTeRICS Websocket.md", "Websocket"]]
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
      "/help/Plugins/": loadSidebarFrom({
        location: path.join(process.cwd(), config.get("documentation"), "help", "Plugins"),
        pre: [["/help/", "Back to Help"]],
        post: [],
        exclude: []
      }),
      "/help/": loadSidebarFrom({
        location: path.join(process.cwd(), config.get("documentation"), "help"),
        pre: [["", "Introduction"], ["User-Interfaces", "User Interfaces"], ["Tutorials", "Tutorials"]],
        sidebar: [["ACS/ACS_Basic_Functions", "Basic"]],
        post: [["Plugins/Introduction", "Plugins"]],
        exclude: [/Plugins/]
      })
    },
    sidebarDepth: 3,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};

function loadSidebarFrom({ location, pre, post, exclude }) {
  //location, sidebar, appendix = []) {
  let sidebar = fs.readdirSync(location);

  /* First level only directories */
  sidebar = sidebar.filter(e => fs.statSync(path.join(location, e)).isDirectory());

  /* Filter exclude */
  sidebar = sidebar.filter(e => !exclude.some(r => r.test(e)));

  /* Map to first level entry */
  sidebar = sidebar.map(e => ({ title: e, collapable: true, children: null })); //abs: path.join(location, e) }));

  /* Append children for each entry */
  sidebar.forEach(e => {
    let children = fs.readdirSync(path.join(location, e.title));

    /* Filter markdown files, only */
    children = children.filter(child => /.*md$/.test(child));

    /* Remove file extension */
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

function capitalize(words) {
  return words
    .split(" ")
    .map(word => [word.charAt(0).toUpperCase(), word.slice(1)].join(""))
    .join(" ");
}
