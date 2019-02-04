const fs = require("fs"),
  path = require("path");

const configPath = path.join(process.cwd(), "src", "config", "config.js");

const config = require(configPath),
  { checkoutSubmodule, ensureGitSubmodule } = require("@asterics/git-tools"),
  { loadConversionJobs } = require("./util/jobs.js");

exports.command = "versions <file>";
exports.aliases = ["version"];
exports.describe = "create module exporting all versioned paths/sites";

exports.builder = yargs => {
  yargs
    .usage("node cli.js versions <file> [options]")
    .example("node cli.js versions src/config/versions.js")
    .options({
      h: { alias: "help", describe: "Show this help." },
      f: { alias: "force", describe: "Overwrite output file.", type: "boolean", default: false }
      // r: { alias: "recursive", describe: "Process input folder recursively.", type: "boolean", default: false }
    });
};

exports.handler = ({ file, force }) => {
  const AsTeRICS = config.get("submodules").find(submodule => submodule.name === "AsTeRICS"),
    docs = path.join(process.cwd(), config.get("documentation")),
    legacy = config.get("versions"),
    latest = legacy[legacy.length - 1].replace(/(-patch|pre-)/g, ""),
    versions = Object.create(null);

  ensureGitSubmodule(AsTeRICS, config.get("verbose"));
  legacy.forEach(version => {
    let patchedVersion = version;
    version = version.replace(/(-patch|pre-)/g, "");

    checkoutSubmodule({ ...AsTeRICS, branch: patchedVersion }, config.get("verbose"));
    config.get("html_to_md").forEach(({ from, to }) => {
      let { conversions } = loadConversionJobs({ input: from, output: to, recursive: true });

      conversions = conversions.map(({ to }) => path.relative(docs, to));
      conversions = conversions.map(e => e.replace(/\.md$/, ".html"));
      conversions = conversions.map(e => `/${e}`);

      // conversions.forEach(entry => {
      //   if (!versions[entry]) versions[entry] = Object.create(null);
      //   versions[entry][version] = Object.create(null);
      //   if (version !== latest) {
      //     versions[entry][version]["version"] = `v${version}`;
      //     versions[entry][version]["route"] = `/${version}${entry}`;
      //   } else {
      //     versions[entry][version]["version"] = "latest";
      //     versions[entry][version]["route"] = entry;
      //   }
      // });

      conversions.forEach(entry => {
        if (!versions[entry]) versions[entry] = Object.create(null);
        if (version !== latest) {
          versions[entry][`v${version}`] = `/${version}${entry}`;
        } else {
          versions[entry][`v${version}`] = entry;
        }
      });
    });
  });
  if (force || !fs.existsSync(file)) {
    fs.writeFileSync(file, JSON.stringify(versions, null, 2), "utf-8");
  }
};
