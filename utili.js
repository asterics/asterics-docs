require("yargs")
  .commandDir("libraries/cli")
  .demandCommand()
  // .command(require("./libraries/util/build-docs.js"))
  // .command(require("./libraries/util/generate-sidebar.js"))
  .help("h")
  .parse();
