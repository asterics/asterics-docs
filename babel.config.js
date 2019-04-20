module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/env",
        {
          // useBuiltIns: "usage",
          // corejs: "3.0.0",
          targets: {
            node: "current"
          },
          debug: true
        }
      ],
      ["@babel/typescript"]
    ]
  };
};
