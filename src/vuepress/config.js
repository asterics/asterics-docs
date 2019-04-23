const path = require("path");
const fs = require("fs");

const configPath = path.join(process.cwd(), "src/config/config.js");
const indexPath = path.join(process.cwd(), "src/config/index.json");

const index = require(indexPath);
const config = require(configPath);

console.log(`host: ${config.get("host")}`);
console.log(`port: ${config.get("port")}`);
console.log(`endpoint: ${config.get("endpoint")}`);
console.log(`destination: ${config.get("destination")}`);
console.log(`version: ${config.get("version")}`);
console.log(`latest: ${config.get("latest")}`);

module.exports = {
  devtools: true,
  host: config.get("host"),
  port: config.get("port"),
  base: config.get("endpoint"),
  dest: config.get("destination"),
  shouldPrefetch: (file, type) => {
    //console.log("shouldPrefetch: " + file);
    return true;
    // type is inferred based on the file extension.
    // https://fetch.spec.whatwg.org/#concept-request-destination
    if (type === "script" || type === "style") {
      return true;
    }
    if (type === "font") {
      // only preload woff2 fonts
      return /\.woff2$/.test(file);
    }
    if (type === "image") {
      // only preload important images
      return file === "hero.jpg";
    }
  },
  title: "AsTeRICS",
  description: "Customized Low-Cost Assistive Technologies",
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png"
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png"
      }
    ],
    ["link", { rel: "manifest", href: "/favicon/site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/favicon/safari-pinned-tab.svg",
        color: "#0ea1f2"
      }
    ],
    ["meta", { name: "apple-mobile-web-app-title", content: "AsTeRICS Docs" }],
    ["meta", { name: "application-name", content: "AsTeRICS Docs" }],
    ["meta", { name: "msapplication-TileColor", content: "#2b5797" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],
  plugins: {
    "@vuepress/medium-zoom": {
      selector: ".content img"
    },
    "@vuepress/back-to-top": {},
    "@vuepress/pwa": {
      serviceWorker: true,
      popupComponent: "AstericsSWUpdatePopup",
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    "@vuepress/active-header-links": {
      sidebarLinkSelector: ".sidebar-link",
      headerAnchorSelector: ".header-anchor",
      headerTopOffset: 120
    }
  },
  themeConfig: {
    // repo: "asterics/AsTeRICS",
    // repoLabel: "Repository!",
    docsRepo: "asterics/AsTeRICS",
    docsDir: "Documentation/docs",
    docsBranch: "master",
    editLinks: false,
    store: {
      latest: config.get("latest"),
      version: config.get("version"),
      routes: index["routes"]
    },
    nav: [
      { text: "Get Started", link: "/get-started/" },
      { text: "Solutions", link: "/solutions/" },
      { text: "Customize", link: "/customize/" },
      { text: "Plugins", link: "/plugins/" },
      { text: "Develop", link: "/develop/" },
      {
        text: "More",
        items: [
          {
            text: "Manuals",
            items: [
              { text: "WebACS", link: "/manuals/WebACS/" },
              { text: "ACS", link: "/manuals/ACS/" }
              // { text: "ARE", link: "/manuals/ARE/" }
            ]
          },
          {
            text: "Applications",
            items: [
              {
                text: "WebACS",
                link:
                  "https://webacs.asterics.eu/index.html?areBaseURI=https://localhost:8083"
              },
              {
                text: "AsTeRICS Grid",
                link: "https://grid.asterics.eu"
              }
            ]
          },
          {
            text: "Get Involved",
            items: [
              { text: "About us", link: "/get-involved/About-us" },
              { text: "Contact", link: "/get-involved/Contact" },
              { text: "Contribute", link: "/get-involved/Contribute" },
              { text: "Legal Notice", link: "/get-involved/Legal-Notice" }
            ]
          }
        ]
      },
      // as long as there is just 1 language, comment it out
      // {
      //   text: "Languages",
      //   items: [
      //     { text: "English", link: "/" },
      //     { text: "German", link: "/de/" }
      //   ]
      // },
      {
        text: "Download",
        link: "https://github.com/asterics/AsTeRICS/releases/latest"
      }
    ],
    sidebar: {
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
        ["Model-Customization", "Model Customization"],
        ["Model-Creation", "Model Creation"]
      ]
    },
    sidebarDepth: 3,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  }
};

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
