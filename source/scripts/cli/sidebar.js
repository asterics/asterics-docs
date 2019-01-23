exports.command = "sidebar";

exports.describe = "generate-sidebar description";

exports.builder = {
  version: {
    default: "two"
  }
};

exports.handler = arg => {
  console.log(`B-DOCS: ${arg}`);
};
