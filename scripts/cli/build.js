require("dotenv").config();
exports.command = "build";
exports.aliases = ["build-doc", "build-docs"];
exports.describe = "build asterics-docs";

exports.builder = yargs => {
  yargs
    .usage("node cli.js build [options]")
    .example(`node cli.js build -p "docs" -e "v1.0" -i "docs" -o "dist"`)
    .options({
      h: { alias: "help" },
      p: {
        alias: "prefix",
        describe: "Hosting prefix.",
        type: "string",
        default: process.env.PREFIX
      },
      e: {
        alias: "endpoint",
        describe: "Hosting endpoint",
        type: "string",
        default: process.env.ENDPOINT
      },
      i: {
        alias: ["input", "from"],
        describe: "Input folder",
        type: "string",
        default: "."
      },
      o: {
        alias: ["output", "to"],
        describe: "Output folder",
        default: process.env.DEST
      }
    });
};

exports.handler = argv => {
  // do something with argv.
  console.log(argv);
};
