import { Repository, Signature } from "nodegit";
import { error } from "./logger.js";
export const init = async path => {
  try {
    const r = await Repository.init(path, 0);
  } catch (err) {
    process.stdout.write(error(err));
  }
};

export const commit = async (path, name, email, message = "Initial commit") => {
  try {
    const r = await Repository.open(path);
    const index = await r.refreshIndex();
    await index.addAll();
    await index.write();
    const oid = await index.writeTree();

    const author = Signature.now(name, email);
    const committer = Signature.now(name, email);
    await r.createCommit("HEAD", author, committer, message, oid, []);
  } catch (err) {
    process.stdout.write(error(err));
  }
};
