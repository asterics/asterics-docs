var fs = require("fs"),
  turndown = require("turndown")({ headingStyle: "atx" });

function html_to_md(source, target) {
  /* Read html */
  let html = fs.readFileSync(source).toString("utf8");

  /* Convert to markdown */
  let md = turndown.turndown(html);

  /* Remove first two lines of text (filename) */
  md = md
    .split("\n")
    .splice(2)
    .join("\n");

  /* Correct relative image links */
  md = md.replace(/img\//g, "./img/");

  /* Lowercase image name */
  md = md.replace(/img\/(.*?(jpg|png))/g, (url, filename) => url.replace(filename, filename.toLowerCase()));

  /* Append version selection */
  md = md + "\n\n<SelectVersion/>";

  /* Append edit link */
  md = md + '\n<!-- <EditLink href="?"/> -->';

  /* Create and write to file */
  fs.writeFileSync(target, md);
}

module.exports = { html_to_md };
