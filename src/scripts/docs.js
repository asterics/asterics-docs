import { join } from "path";
import yargs from "yargs";

yargs
  .usage("yarn docs <command> <version>")
  .wrap(yargs.terminalWidth() * 0.9)
  .commandDir(join(__dirname, "docs"))
  .help("h")
  .version(false)
  .epilog("Run yarn docs <command> --help for detailed usage instruction for a command.")
  .showHelpOnFail(true)
  .demandCommand()
  .parse();
