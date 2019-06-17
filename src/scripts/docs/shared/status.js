import { Status } from "nodegit";

export async function getStaged(repository) {
  const opts = {
    flags:
      Status.OPT.INCLUDE_UNTRACKED |
      Status.OPT.RECURSE_UNTRACKED_DIRS |
      Status.OPT.RENAMES_HEAD_TO_INDEX |
      Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.INDEX_ONLY
  };
  return await repository.getStatusExt(opts);
}

export async function getUnstaged(repository) {
  const opts = {
    flags: Status.OPT.RENAMES_HEAD_TO_INDEX | Status.OPT.RENAMES_INDEX_TO_WORKDIR | Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.WORKDIR_ONLY
  };
  return await repository.getStatusExt(opts);
}

export async function getUntracked(repository) {
  const opts = {
    flags: Status.OPT.RENAMES_HEAD_TO_INDEX | Status.OPT.RENAMES_INDEX_TO_WORKDIR | Status.OPT.RENAMES_FROM_REWRITES,
    show: Status.SHOW.WORKDIR_ONLY
  };
  // const opts = {
  //   flags:
  //     Status.OPT.INCLUDE_UNTRACKED |
  //     Status.OPT.RECURSE_UNTRACKED_DIRS |
  //     Status.OPT.RENAMES_HEAD_TO_INDEX |
  //     Status.OPT.RENAMES_FROM_REWRITES,
  //   show: Status.SHOW.INDEX_ONLY
  // };
  const status = await repository.getStatusExt(opts);
  return status.filter(e => e.isNew()).filter(e => !e.isRenamed());
}
