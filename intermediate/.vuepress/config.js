module.exports = {
  title: "AsTeRICS",
  description: "That's all folks.",
  themeConfig: {
    repo: "asterics/AsTeRICS",
    repoLabel: "Contribute!",
    docsRepo: "asterics/asterics-docs",
    docsDir: "intermediate",
    docsBranch: "master",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    serviceWorker: {
      updatePopup: true // Boolean | Object, default to undefined.
      // If set to true, the default text config will be:
      // updatePopup: {
      //    message: "New content is available.",
      //    buttonText: "Refresh"
      // }
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
      { text: "Model", link: "/model/" },
      { text: "Plugin", link: "/plugin/" },
      { text: "AT Solution", link: "/at_solution/" },
      {
        text: "Languages",
        items: [{ text: "English", link: "/" }, { text: "German", link: "/de/" }]
      }
    ],
    sidebar: [
      // "/welcome/": ["", "QuickStart", "Community", "Architecture"],
      // "/": ""
      // "/",
      {
        title: "Welcome",
        collapseable: true,
        children: ["/welcome/QuickStart", "/welcome/Architecture", "/welcome/Community"]
      },
      "/concepts/",
      "/installation/",
      "/user_guide/"
    ],
    sidebarDepth: 2,
    diplayAllHeaders: true, // default
    lastUpdated: "Last Updated"
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@img": "img"
      }
    }
  }
};
