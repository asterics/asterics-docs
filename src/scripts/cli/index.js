const fs = require("fs");
const path = require("path");
const { getGitRepository } = require("./util/git.js");

const configPath = path.join(process.cwd(), "src/config/config.js");
const indexPath = path.join(process.cwd(), "src/config/index.json");
const config = require(configPath);

exports.command = "index";
exports.aliases = [""];
exports.describe = "index asterics-docs project";

exports.builder = yargs => {
  yargs.usage("node cli.js index").options({
    h: { alias: "help", describe: "Show this help." }
  });
};

exports.handler = async args => {
  let legacy = config.get("versions");
  let latest = legacy.pop();

  let index = {};

  index["setup"] = {};
  index["routes"] = {};

  for (let version of config.get("versions")) {
    let endpoint = loadEndpoint(version, version === latest);
    /* Index setup */
    index["setup"][version] = {};
    index["setup"][version]["endpoint"] = endpoint;
    index["setup"][version]["dependencies"] = [];

    for (let d of config.get("dependencies")) {
      let { repo, entry } = await loadEntry(d, version);
      index["setup"][version]["dependencies"].push(entry);

      // if (d.map[version]) continue;

      /* Index routes */
      for (let t of entry["tree"]) {
        /* Get route */
        let route = `${d.destination}/${t.target}`.replace(/\.md$/i, ".html");

        route = "/" + path.relative(config.get("documentation"), route);
        route = route.replace(/\/\//g, "/");
        if (!/\.html/.test(route)) continue;

        let indexRoute = /README\.html/.test(route);
        let alternativeRoute = null;
        if (indexRoute) {
          route = route.replace(/README\.html/, "index.html");
          alternativeRoute = route.replace(/index\.html/, "");
        }

        /* Get versioned route */
        let versioned = endpoint + route;
        versioned = versioned.replace(/\/\//g, "/");

        /* Get edit link */
        let edit = await urlPrefix(repo);
        let editVersion = d.map[version] ? d.map[version] : version;
        edit += `/edit/${editVersion}/${d.source}/${t.source}`;

        index["routes"][route] = index["routes"][route] || {};
        index["routes"][route][version] = {
          route: versioned,
          editlink: edit
        };

        if (indexRoute) {
          index["routes"][alternativeRoute] = index["routes"][alternativeRoute] || {};
          index["routes"][alternativeRoute][version] = {
            route: versioned,
            editlink: edit
          };
        }
      }
    }
  }

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2), { flag: "w+" });
};

function loadEndpoint(version, latest) {
  let endpoint = "/";
  endpoint += config.get("endpoint") ? `${config.get("endpoint")}/` : "";
  endpoint += !latest ? `${version}/` : "";
  return endpoint;
}
async function loadEntry(dep, version) {
  let repo = await getGitRepository(dep.repository);
  branch = dep.map[version] || version;

  let tree = await getTree(repo, branch, dep.source, dep.filter);
  let treeEntries = processResult(dep.process, dep.postprocess, tree);

  return {
    repo,
    entry: {
      repository: dep.repository,
      branch,
      source: dep.source,
      destination: dep.destination,
      tree: treeEntries
    }
  };
}
function processResult(actions, postActions, tree) {
  tree = tree.slice();

  tree = tree.map(t => {
    let source = t;
    let target = t;
    let a = null;
    let pa = [];
    for (let action of actions) {
      if (action.rule.test(target)) {
        switch (action.apply) {
          case "html-to-markdown-copy":
            target = target.replace(/\.html?$/i, ".md");
            a = action.apply;
            break;
          case "lowercase":
            target = target.replace(/.*\/(.*\..*)/, (t, filename) => t.replace(filename, filename.toLowerCase()));
            break;
          case "copy":
            a = action.apply;
            break;
          default:
            break;
        }
      }
    }
    for (let postAction of postActions) {
      if (postAction.rule.test(target)) {
        pa.push(...postAction.apply);
      }
    }
    return { source, target, action: a, "post-actions": pa };
  });

  return tree;
}
async function getTree(repository, branch, location, filter) {
  let commit = await repository.getBranchCommit(`origin/${branch}`);
  let entry = await commit.getEntry(location);
  let tree = await entry.getTree();

  return await new Promise(async resolve => {
    let a = [];
    await tree
      .walk()
      .on("end", trees => {
        trees = trees.filter(t => filter.test(t.path()));
        for (let tree of trees) {
          a.push(path.relative(location, tree.path()));
        }
        resolve(a);
      })
      .start();
  });
}

async function urlPrefix(repository) {
  let config = await repository.config();
  let buf = await config.getStringBuf("remote.origin.url");
  return buf.toString().replace(/\.git$/i, "");
}
