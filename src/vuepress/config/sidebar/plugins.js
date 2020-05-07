const path = require("path");

const { source } = require("../../../../docs.config.js");
const { loadSidebarFrom } = require("./utils.js");

module.exports = (dir) => {
  return loadSidebarFrom({
    location: path.join(source, dir),
    pre: [["/plugins/", "Plugins"]],
    post: [],
    excludeFiles: [/README\.md/],
  });
};
