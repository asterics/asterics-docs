const path = require("path");

const { source } = require("../../../../docs.config.js");
const { loadSidebarFrom } = require("./utils.js");

module.exports = loadSidebarFrom({
  location: path.join(source, "plugins"),
  pre: [],
  post: [],
  excludeFiles: [/README\.md/],
});
