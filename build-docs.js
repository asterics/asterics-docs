exports.command = "get <source> <destination> [proxy]";
exports.describe = "make a get HTTP request";
exports.builder = {
  banana: {
    default: "cool"
  },
  batman: {
    default: "sad"
  }
};

exports.handler = function(argv) {
  console.log("Handler");
};
