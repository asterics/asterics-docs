module.exports = {
  "/get-started/": require("./sidebar/get-started.js"),
  "/develop/": require("./sidebar/develop.js"),
  "/plugins/": require("./sidebar/plugins.js"),
  ...require("./sidebar/manuals.js"),
  "/customize/": require("./sidebar/customize.js"),
};
