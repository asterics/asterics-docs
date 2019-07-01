import { join } from "path";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

export function Dependency(dependency) {
  const cfg = getDependencyConfiguration(dependency);
  return {
    map: mapVersions(dependency),
    repository: cfg.repository,
    source: cfg.source,
    filter: cfg.filter,
    destination: dependency.destination,
    location: cfg.location
  };
}

function mapVersions(dependency) {
  const versions = config.get("versions");
  if (dependency.branch) {
    const latest = versions[versions.length - 1];
    return [[latest, dependency.branch]];
  } else {
    return dependency.versions.map(e => [e[0], e[1]]);
  }
}

function getDependencyConfiguration(dependency) {
  let s = dependency.source.split(":");
  const repository = s.length === 2 ? s[0] : dependency.repository;
  const source = s.length === 2 ? s[1] : dependency.source;
  const filter = dependency.filter ? dependency.filter : /.*/;
  // const { location } = config.get("repositories").find(r => r.name === repository);
  const { location } = config.get("submodules").find(r => r.name === repository);
  return { repository, source, filter, location };
}
