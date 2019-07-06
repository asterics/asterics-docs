module.exports = (options, ctx) => {
  return {
    name: "@asterics/vuepress-cli-nav",
    extendCli(cli) {
      cli.command("nav [targetDir]", "").action((dir = ".") => {
        process.stdout.write("vuepress nav");
      });
    }
  };
};
