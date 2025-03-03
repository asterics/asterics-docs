const path = require("path");
const fs = require("fs");

function loadSidebarFrom({ location, pre, post, exclude = [], excludeFiles = [] }) {
  let sidebar = fs.readdirSync(location);

  /* First level only directories */
  sidebar = sidebar.filter((e) => fs.statSync(path.join(location, e)).isDirectory());

  /* Filter exclude */
  sidebar = sidebar.filter((e) => !exclude.some((r) => r.test(e)));

  /* Map to first level entry */
  sidebar = sidebar.map((e) => ({ title: e, collapsable: true, children: null })); //abs: path.join(location, e) }));

  /* Append children for each entry */
  sidebar.forEach((e) => {
    let children = fs.readdirSync(path.join(location, e.title));

    /* Filter markdown files, only */
    children = children.filter((child) => /.*md$/.test(child));

    /* Remove file extension */
    children = children.filter((e) => !excludeFiles.some((r) => r.test(e)));
    children = children.map((child) => child.replace(/\.md$/, ""));

    /* Construct arrays containing link and title */
    children = children.map((child) => {
      let title = child.replace(/_/g, " ");
      let link = `${e.title}/${child}`;
      return [link, capitalize(title)];
    });

    e.children = children;
  });

  /* Capitalize titles */
  sidebar = sidebar.map((e) => ({ ...e, title: capitalize(e.title) }));

  return [...pre, ...sidebar, ...post];
}

function loadSidebarFromWithPath({ location, title, titlePath, pre }) {
  const children = fs
    .readdirSync(location)
    .map((child) => child.replace(/\.md$/, ""))
    .filter((child) => child !== "img")
    .filter((child) => child !== "README")
    .map((child) => {
      let title = child.replace(/_/g, " ");
      let link = `${titlePath}${child}`;
      return [link, capitalize(title)];
    });

  return {
    title,
    path: titlePath,
    collapsable: false,
    sidebarDepth: 1,
    children,
  };
}

function loadSingleSidebar({ title, titlePath, location }) {
  const children = fs
    .readdirSync(location)
    .filter((child) => !fs.statSync(path.join(location, child)).isDirectory())
    .map((child) => child.replace(/\.md$/, ""))
    .filter((child) => child !== "README")
    .map((child) => {
      let title = child.replace(/_/g, " ");
      let link = `${titlePath}${child}`;
      return [link, capitalize(title)];
    });
  return {
    title,
    path: titlePath,
    collapsable: false,
    sidebarDepth: 1,
    children,
  };
}

function capitalize(words) {
  return words
    .split(" ")
    .map((word) => [word.charAt(0).toUpperCase(), word.slice(1)].join(""))
    .join(" ");
}

module.exports = { loadSidebarFrom, loadSidebarFromWithPath, loadSingleSidebar, capitalize };
