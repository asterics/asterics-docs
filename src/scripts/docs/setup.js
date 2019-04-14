export const command = "setup [version] [out]";
export const aliases = ["s"];
export const describe = "setup asterics-docs project docs";
export const builder = yargs => {
  yargs
    .usage("yarn docs setup")
    .default("version", undefined)
    .default("out", undefined)
    .options({
      h: { alias: "help", describe: "Show this help." }
    });
};
export const handler = ({ version, out }) => {
  if (version === undefined) {
    console.log("use config");
  }

  // Create index
  // Add routes
  // Add jobs
  // Create output folder
  // Process index
};
