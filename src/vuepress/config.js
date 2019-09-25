const path = require("path");

const configPath = path.join(process.cwd(), "src/config/config.js");
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
  theme: "@asterics-docs/docs",
  title: "AsTeRICS",
  description: "Customized Low-Cost Assistive Technologies",
  head: require("./config/head.js"),
  plugins: require("./config/plugins.js"),
  extraWatchFiles: [".vuepress/config/**/*.js"],
  themeConfig: {
    logo: "/assets/img/asterics-logo.svg",
    nav: require("./config/nav/en.js"),
    sidebar: require("./config/sidebar.js"),
    sidebarDepth: 3,
    lastUpdated: "Last Updated",
    editLinks: false,
    repo: "asterics/asterics-docs",
    docsRepo: "asterics/asterics-docs",
    docsDir: "docs",
    docsBranch: "master"
  }
};
