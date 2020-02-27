import { join } from "path";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export class Dependency {
  constructor(dependency) {
    this._map = mapVersions(dependency, config.get("versions"));
    this.cfg = getDependencyConfiguration(dependency);
    this._destination = dependency.destination;
  }
  get map() {
    return this._map;
  }
  get repository() {
    return this.cfg.repository;
  }
  get source() {
    return this.cfg.source;
  }
  get filter() {
    return this.cfg.filter;
  }
  get location() {
    return this.cfg.location;
  }
  get destination() {
    return this._destination;
  }
}

function mapVersions(dependency, versions) {
  if (dependency.branch) {
    const latest = versions[versions.length - 1];
    return [[latest, dependency.branch]];
  } else {
    return dependency.versions.map(([version, branch]) => [version, branch]);
  }
}

function getDependencyConfiguration(dependency) {
  let s = dependency.source.split(":");
  const repository = s.length === 2 ? s[0] : dependency.repository;
  const source = s.length === 2 ? s[1] : dependency.source;
  const filter = dependency.filter ? dependency.filter : /.*/;
  const { location } = config.get("submodules").find(r => r.name === repository);
  return { repository, source, filter, location };
}
