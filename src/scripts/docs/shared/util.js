import { join, relative } from "path";
import { Repository, Reference } from "nodegit";
import { error, info } from "./logger.js";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

// export async function getIndexEntry(file, index = null) {
//   if (index === null) index = await getIndex(false);
//   return index[file.isRenamed() ? getPreviousIndexPath(file) : file.path()];
// }

// export function getPreviousIndexPath(file, changes = "headToIndex") {
//   const delta = file[changes]();
//   return delta ? delta.oldFile().path() : "";
// }

// export async function isInIndex(path) {
//   const index = await getIndex();
//   if (index[path]) {
//     return true;
//   }
//   return false;
// }

export async function getBranchesOfRepository(repository) {
  const repositories = config.get("repositories");
  const repo = repositories.filter(e => e.name === repository);
  const d = join(process.cwd(), repo[0].location);
  const r = await Repository.open(d);
  const refs = await r.getReferenceNames(Reference.TYPE.LISTALL);
  return refs
    .filter(e => {
      const regex = /^refs\/remotes\/origin\/(.*)/;
      return regex.exec(e);
    })
    .map(e => {
      const regex = /^refs\/remotes\/origin\/(.*)/;
      return e.replace(regex, (m, branch) => branch);
    })
    .filter(e => e !== "HEAD");
}
