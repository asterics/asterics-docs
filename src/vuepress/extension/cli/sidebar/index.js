module.exports = (options, ctx) => {
  return {
    name: "@asterics/vuepress-plugin-cli-sidebar",
    extendCli(cli) {
      registerCommand(cli, options);
    }
  };
};

function registerCommand(cli, options) {
  cli.command("sidebar [targetDir]", "").action((dir = ".", commandOptions) => {
    console.log("vuepress sidebar extension");
  });
}
