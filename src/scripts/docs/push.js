import { join } from "path";
import { createInterface } from "readline";
import { Writable } from "stream";
import { Repository, Reference, Cred } from "nodegit";

const configPath = join(process.cwd(), "src/config/config.js");
const config = require(configPath);

function askUsername() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve => {
    rl.question("Username: ", answer => {
      rl.close();
      resolve(answer);
    });
  });
}

function askPassword() {
  // let mute = false;

  const mutable = new Writable({
    write: (chunk, encoding, resolve) => {
      // if (!mute) {
      //   process.stdout.write(chunk, encoding);
      // }
      resolve();
    }
  });

  const rl = createInterface({
    input: process.stdin,
    stdout: mutable,
    terminal: true
  });

  process.stdout.write("Password: ");
  return new Promise(resolve => {
    rl.question("Password: ", answer => {
      // rl.history = rl.history.slice(1);
      rl.close();
      process.stdout.write("\n");
      resolve(answer);
    });
    // mute = true;
  });
}

export const command = "push";
export const alias = "";
export const describe = "push from origin";
export const builder = yargs => {
  yargs.usage("yarn docs push").options({
    h: { alias: "help", describe: "Show this help.", type: "boolean" }
  });
};
export const handler = async options => {
  // console.log("push", options);
  try {
    process.stdout.write("Enter credentials.\n");
    const name = await askUsername();
    const pwd = await askPassword();

    for (const repo of config.get("submodules")) {
      const location = join(process.cwd(), repo.location);
      const r = await Repository.open(location);
      const remote = await r.getRemote("origin");
      const refs = await r.getReferenceNames(Reference.TYPE.LISTALL);
      const regex = /^refs\/heads\//;
      const refSpecs = refs.filter(ref => ref.match(regex)).map(ref => `${ref}:${ref}`);
      try {
        await remote.push(refSpecs, {
          callbacks: {
            credentials: async (url, username) => {
              return Cred.userpassPlaintextNew(name, pwd);
            }
          }
        });
        process.stdout.write(`Pushed local branches to origin (${repo.name}).\n`);
      } catch (err) {
        process.stdout.write(`${repo.name}:\n`);
        console.log(err.message);
      }
    }
  } catch (err) {
    console.log(err);
  } finally {
    process.stdout.write("Done.\n");
  }
};
