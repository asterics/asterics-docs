const { sep } = require("path");
const loadVersionedSidebar = require("./sidebar/plugins.js");

module.exports = (versions) => {
  const vmap = [...versions.slice(1, versions.length)];
  let plugins = {};
  const pluginsDir = "plugins";
  for (version of vmap) {
    plugins["/" + version + "/" + pluginsDir + "/"] = loadVersionedSidebar(
      version + sep + pluginsDir
    );
  }
  plugins["/" + pluginsDir + "/"] = loadVersionedSidebar(pluginsDir);

  return {
    "/get-started/": require("./sidebar/get-started.js"),
    "/develop/": require("./sidebar/develop.js"),
    ...plugins,
    ...require("./sidebar/manuals.js"),
    "/customize/": require("./sidebar/customize.js"),
  };
};
