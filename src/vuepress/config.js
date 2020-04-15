const { base, port, dest, versions } = require("../../docs.config.js");

module.exports = {
  devtools: true,
  port,
  base,
  dest,
  theme: "@asterics-docs/docs",
  title: "AsTeRICS",
  description: "Customized Low-Cost Assistive Technologies",
  head: require("./config/head.js"),
  plugins: require("./config/plugins.js"),
  extraWatchFiles: [".vuepress/config/**/*.js"],
  themeConfig: {
    versions,
    editLinks: false,
    logo: "/assets/img/asterics-logo.svg",
    nav: require("./config/nav/en.js"),
    sidebar: require("./config/sidebar.js"),
    sidebarDepth: 3,
    lastUpdated: "Last Updated",
    editLinks: false,
    docsRepo: "asterics/asterics-docs",
    docsDir: "docs",
    docsBranch: "master"
  }
};
