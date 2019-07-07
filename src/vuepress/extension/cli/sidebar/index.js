const path = require("path");
const fs = require("fs");

module.exports = (options, ctx) => {
  const { sourceDir } = ctx;
  const s = readDirs(process.cwd(), "docs", /\.(git|gitignore|vuepress)$/);
  console.log(s);
  return {};
  const sidebar = loadSidebar(sourceDir, options);
  return {
    name: "@asterics/vuepress-plugin-cli-sidebar",
    extendCli(cli) {
      registerCommand(cli, options);
    }
  };
};

function registerCommand(cli, options) {
  cli.command("sidebar [targetDir]", "").action((dir = ".", commandOptions) => {
    console.log("vuepress sidebar extension");
  });
}

function loadSidebar(docsPath, options) {
  loadSidebarEntries([docsPath]);

  for (let i = 0; i < options.subDirLevel; i++) {
    let sidebar = fs
      .readdirSync(docsPath)
      .filter(entry => {
        const entryPath = path.join(docsPath, entry);
        return fs.statSync(entryPath).isDirectory();
      })
      .filter(entry => {
        const entryPath = path.join(docsPath, entry);
        return hasTopLevelReadmeFile(entryPath);
      });
  }
  console.log(sidebar);
  return sidebar;
}

function hasTopLevelReadmeFile(docsPath) {
  const entries = fs.readdirSync(docsPath).filter(entry => /^README\.md$/.exec(entry));
  console.log(entries);
  return entries.length > 0;
}

function readDirs(base, directory, exclude = /\.\*/, tree = { dirs = [], files = []}) {
  const p = path.join(base, directory);
  const entries = fs.readdirSync(p).filter(entry => !exclude.exec(entry));
  for (const entry of entries) {
    if (fs.statSync(path.join(p, entry)).isDirectory()) {
      tree.dirs.push({ name: entry, tree: readDirs(p, entry) });
    } else {
      tree.files.push({ name: entry });
    }
  }
  return tree;
}
