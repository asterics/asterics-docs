const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const toml = require("toml");

module.exports = (options, ctx) => {
  const { sourceDir, themeConfig } = ctx;
  const oldNav = themeConfig.nav;
  const nav = loadNav(sourceDir, options);
  ctx.themeConfig.nav = nav;

  return {
    name: "@asterics/vuepress-cli-nav",
    extendCli(cli) {
      registerCommand(cli, options, nav, sourceDir);
    }
  };
};

function registerCommand(cli, options, nav, sourceDir) {
  cli.command("nav [targetDir]", "").action((dir = ".", commandOptions) => {
    const docsDir = path.join(process.cwd(), dir);
    if (docsDir !== sourceDir) {
      console.log("docsDir does not match configured sourceDir");
    }
    console.log(nav);
  });
}

function loadNav(docsPath, options) {
  const { exclude } = options;
  let nav = fs
    .readdirSync(docsPath)
    .filter(entry => {
      return exclude.exec(entry) === null;
    })
    .filter(entry => {
      const entryPath = path.join(docsPath, entry);
      return fs.statSync(entryPath).isDirectory();
    })
    .map(entry => {
      return navEntry(entry, docsPath);
    });

  for (const [index, entry] of nav.entries()) {
    if (entry.order > nav.length) {
      entry.order = -1;
    } else if (entry.order !== -1 && entry.order !== index) {
      const swap = nav[entry.order];
      nav[entry.order] = entry;
      nav[index] = swap;
    }
  }

  for (const [index, entry] of nav.entries()) {
    if (entry.order === -1) entry.order = index;
  }

  return nav;
}

function navEntry(entry, docsPath) {
  const entryPath = path.join(docsPath, entry, "README.md");
  let frontmatter;

  if (fs.existsSync(entryPath) && fs.statSync(entryPath).isFile()) {
    const content = fs.readFileSync(entryPath, "utf8");
    frontmatter = matter(content, {
      excerpt_separator: "<!-- more -->",
      engines: {
        toml: toml.parse.bind(toml),
        excerpt: false
      }
    });
  }
  const { navTitle, title, navOrder } = frontmatter ? frontmatter.data : {};

  return {
    order: navOrder || -1,
    text: navTitle || title || entry,
    link: `/${entry}/`
  };
}
