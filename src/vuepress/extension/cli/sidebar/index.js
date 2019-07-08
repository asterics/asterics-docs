const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const toml = require("toml");

module.exports = (options, ctx) => {
  const { sourceDir } = ctx;
  const sidebar = loadSidebar(sourceDir, options);
  ctx.themeConfig.sidebar = sidebar;

  return {
    name: "@asterics/vuepress-plugin-cli-sidebar",
    extendCli(cli) {
      registerCommand(cli, options, sidebar, sourceDir);
    }
  };
};

function registerCommand(cli, options, sidebar, sourceDir) {
  cli.command("sidebar [targetDir]", "").action((dir = ".", commandOptions) => {
    const docsDir = path.join(process.cwd(), dir);
    if (docsDir !== sourceDir) {
      console.log("docsDir does not match configured sourceDir");
    }
    console.log(sidebar);
  });
}

function loadSidebar(docsPath, options) {
  const { exclude } = options;
  let sidebar = {};
  let paths = [];
  loadPaths(paths, docsPath, docsPath, options.sidebarDepth, exclude);
  paths
    .filter(entry => {
      return hasMarkdownFiles(docsPath, entry);
    })
    .sort()
    .reverse()
    .map(entry => {
      // const entryPath = path.join(docsPath, entry, "README.md");
      // const title = loadTitle(entryPath);
      const children = loadSidebarEntry(docsPath, entry);
      if (children.length > 0) {
        // sidebar[entry] = {
        //   title,
        //   collapseable: false,
        //   children
        // };
        sidebar[entry] = children;
      }
    });
  return sidebar;
}

function loadPaths(paths, topPath, readPath, depth, exclude = null) {
  const currentPathRelative = path.relative(topPath, readPath).replace(new RegExp(`${path.sep}`, "g"), "/");
  const currentPath = currentPathRelative === "" ? "/" : `/${currentPathRelative}/`;
  const level = currentPath.split(path.sep).length - 1;
  if (level > depth) return;
  if (!paths.includes(currentPath)) paths.push(currentPath);
  if (level < depth) {
    fs.readdirSync(readPath)
      .filter(entry => {
        const entryPath = path.join(readPath, entry);
        return fs.statSync(entryPath).isDirectory();
      })
      .filter(entry => {
        if (exclude) {
          return !exclude.exec(entry);
        }
        return true;
      })
      .forEach(entry => {
        const entryPath = path.join(readPath, entry);
        loadPaths(paths, topPath, entryPath, depth);
      });
  }
}

function hasMarkdownFiles(docsPath, sidebarEntry) {
  const sidebarEntryPath = path.join(docsPath, sidebarEntry);
  const files = fs.readdirSync(sidebarEntryPath).filter(entry => filterEnabledMarkdownFiles(sidebarEntryPath, entry));
  // console.log(files);
  return files.length > 0;
}

function loadSidebarEntry(docsPath, sidebarEntry) {
  const sidebarEntryPath = path.join(docsPath, sidebarEntry);
  let files = fs
    .readdirSync(sidebarEntryPath)
    .filter(entry => filterEnabledMarkdownFiles(sidebarEntryPath, entry))
    .map((entry, idx, entries) => {
      const { length } = entries;
      const entryPath = path.join(sidebarEntryPath, entry);
      return {
        order: loadSidebarOrder(entryPath, length),
        entry: [entry.replace(/\.md$/, "").replace(/^README$/, ""), loadTitle(entryPath)]
      };
    })
    // .filter(entry => {
    //   return entry.entry[0] !== "README";
    // })
    .sort((a, b) => {
      return a.order > b.order;
    });

  sortandPopulateArrayOrder(files);

  return files.map(entry => entry.entry);
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

function filterEnabledMarkdownFiles(entryPath, entry) {
  const p = path.join(entryPath, entry);
  return fs.statSync(p).isFile() && /\.md$/.exec(entry) && isSidebarEnabled(p);
}

function loadSidebarOrder(entryPath, length) {
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
  if (typeof frontmatter.data.sidebarOrder === "undefined") {
    return -1;
  }
  if (frontmatter.data.sidebarOrder > length) {
    return -1;
  }
  return frontmatter.data.sidebarOrder;
}

function loadTitle(entryPath) {
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
  const { navTitle, title } = frontmatter ? frontmatter.data : {};
  return title || navTitle || "No title specified!";
}

function isSidebarEnabled(entryPath) {
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
  if (typeof frontmatter.data.sidebar === "undefined") {
    return true;
  }
  return frontmatter.data.sidebar;
}

// function loadSidebarEntries(docsPath, depth, level, exclude = null) {
//   level++;
//   const currentPath = path.relative(path.join(docsPath, "../".repeat(level)), docsPath);
//   let paths = [];
//   if (level > depth) {
//     return [];
//   } else if (level < depth) {
//     const dirs = fs
//       .readdirSync(docsPath)
//       .filter(entry => {
//         const entryPath = path.join(docsPath, entry);
//         return fs.statSync(entryPath).isDirectory();
//       })
//       .map(entry => {
//         const entryPath = path.join(docsPath, entry);
//         return loadSidebarEntries(entryPath, depth, level);
//       });
//     return dirs;
//   } else {
//     return currentPath;
//   }

// if (depth > 0) {
//   depth--;
//   const dirs = fs
//     .readdirSync(docsPath)
//     .filter(entry => {
//       const entryPath = path.join(docsPath, entry);
//       return fs.statSync(entryPath).isDirectory();
//     })
//     .filter(entry => {
//       if (exclude) {
//         return !exclude.exec(entry);
//       }
//       return true;
//     });
//   for (const dir of dirs) {
//     const dirPath = path.join(docsPath, dir);
//     list.push(...loadSidebarEntries(dirPath, list, depth));
//   }
// }
// return [];
// }

// function loadSidebar(docsPath, options) {
//   const { exclude, sidebarDepth } = options;
//   const toplevelDirs = fs
//     .readdirSync(docsPath)
//     .filter(entry => {
//       const entryPath = path.join(docsPath, entry);
//       return fs.statSync(entryPath).isDirectory();
//     })
//     .filter(entry => {
//       const entryPath = path.join(docsPath, entry);
//       return fs.readdirSync(entryPath).find(entry => {
//         return /\.md$/.exec(entry);
//       });
//     })
//     .map(entry => {
//       return loadSidebarEntry(docsPath, entry);
//     });
//   console.log(toplevelDirs);
// }

// function loadSidebarEntry(docsPath, sidebarEntry) {
//   const sidebarPath = path.join(docsPath, sidebarEntry);
//   const files = fs
//     .readdirSync(sidebarPath)
//     .filter(entry => {
//       const entryPath = path.join(sidebarPath, entry);
//       return fs.statSync(entryPath).isFile();
//     })
//     .filter(entry => {
//       return /\.md$/.exec(entry);
//     })
//     .map(entry => {
//       const entryPath = path.join(sidebarPath, entry);
//       return [`${path.join(sidebarEntry, entry.replace(/\.md$/, ""))}`, getDocumentTitle(entryPath)];
//     });
//   console.log(files);
// }

// function getDocumentTitle(entryPath) {
//   let frontmatter;
//   if (fs.existsSync(entryPath) && fs.statSync(entryPath).isFile()) {
//     const content = fs.readFileSync(entryPath, "utf8");
//     frontmatter = matter(content, {
//       excerpt_separator: "<!-- more -->",
//       engines: {
//         toml: toml.parse.bind(toml),
//         excerpt: false
//       }
//     });
//   }
//   const { title } = frontmatter ? frontmatter.data : {};
//   return title || "No title specified";
// }

// function loadSidebar(docsPath, options) {
//   loadSidebarEntries([docsPath]);

//   for (let i = 0; i < options.subDirLevel; i++) {
//     let sidebar = fs
//       .readdirSync(docsPath)
//       .filter(entry => {
//         const entryPath = path.join(docsPath, entry);
//         return fs.statSync(entryPath).isDirectory();
//       })
//       .filter(entry => {
//         const entryPath = path.join(docsPath, entry);
//         return hasTopLevelReadmeFile(entryPath);
//       });
//   }
//   console.log(sidebar);
//   return sidebar;
// }

// function hasTopLevelReadmeFile(docsPath) {
//   const entries = fs.readdirSync(docsPath).filter(entry => /^README\.md$/.exec(entry));
//   console.log(entries);
//   return entries.length > 0;
// }

// function readDirs(base, directory, exclude = /\.\*/, tree = { dirs: [], files: [] }) {
//   const p = path.join(base, directory);
//   const entries = fs.readdirSync(p).filter(entry => !exclude.exec(entry));
//   for (const entry of entries) {
//     if (fs.statSync(path.join(p, entry)).isDirectory()) {
//       const [dirs, files] = readDirs(p, entry);
//       tree.dirs.push({ name: entry, dirs, files });
//     } else {
//       tree.files.push(entry);
//     }
//   }
//   return [tree.dirs, tree.files];
// }
