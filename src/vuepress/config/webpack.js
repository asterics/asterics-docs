function storeWebpackConfig(config, file) {
  const filename = path.join(process.cwd(), file);
  let cfg = config.toConfig();
  writeWebpackConfigToFile(filename, cfg);
  console.log("Writing configuration");
}

function replace(name, val) {
  return val && val.constructor === RegExp ? val.toString() : val;
}

function writeWebpackConfigToFile(filename, config) {
  fs.writeFileSync(filename, JSON.stringify(config, replace, 2), "utf-8");
}
