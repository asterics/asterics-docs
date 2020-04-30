const { base, port, dest, versions, host } = require("../../docs.config.js");
const { mapLanguageCodes, languageCodes } = require("./config/translate.js");
const loadSidebar = require("./config/sidebar.js");

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
    host,
    translate: mapLanguageCodes(languageCodes, ["de", "en", "fr", "it", "es", "pt", "zh-CN", "ar"]),
    editLinks: true,
    smoothScroll: false,
    logo: "/assets/img/asterics-logo.svg",
    nav: require("./config/nav/en.js"),
    sidebar: loadSidebar(versions),
    sidebarDepth: 3,
    lastUpdated: "Last Updated",
    docsRepo: "asterics/asterics-docs",
    docsDir: "docs",
    docsBranch: "master",
  },
};
