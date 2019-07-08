const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const toml = require("toml");

module.exports = (options, ctx) => {
  const { sourceDir, themeConfig } = ctx;
  const navConfig = options.nav;
  const nav = loadNav(sourceDir, options, navConfig);
  ctx.themeConfig.nav = nav;

  return {
    name: "@asterics/vuepress-plugin-cli-nav",
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

function loadNav(docsPath, options, navConfig) {
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
    })
    .sort((a, b) => {
      return a.order > b.order;
    });

  sortandPopulateArrayOrder(nav);

  for (const entry of navConfig) {
    if (entry.order > nav.length) {
      nav.push(entry);
    } else {
      nav[entry.order] = entry;
    }
  }

  return nav;
}

function sortandPopulateArrayOrder(array) {
  for (const [index, entry] of array.entries()) {
    if (entry.order > array.length) {
      entry.order = -1;
    } else if (entry.order !== -1 && entry.order !== index) {
      const swap = array[entry.order];
      array[entry.order] = entry;
      array[index] = swap;
    }
  }

  for (const [index, entry] of array.entries()) {
    if (entry.order === -1) entry.order = index;
  }
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
    order: navOrder >= 0 ? navOrder : -1,
    text: navTitle || title || entry,
    link: `/${entry}/`
  };
}
