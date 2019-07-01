module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          targets: {
            node: "current"
          }
          // debug: true
        }
      ]
    ]
  };
};
