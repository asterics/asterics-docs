const fs = require("fs");
const { parseString } = require("xml2js");
const yargs = require("yargs");

yargs
  .scriptName("component-collection-categorizer")
  .usage("$0 <cmd> [args]")
  .command(
    "* [input] [output]",
    "",
    (yargs) => {
      yargs.positional("input", {
        type: "string",
        describe: "Input file containing the generated component collection",
      });
      yargs.positional("output", {
        type: "string",
        describe: "Output file to write categories of component collection to",
      });
    },
    function(argv) {
      const { input, output } = argv;
      if (!input || !output) return;
      categorize(input, output);
    }
  )
  .showHelpOnFail(true)
  .help().argv;

function unique(value, index, self) {
  return self.indexOf(value) === index;
}

function categorize(input, output) {
  const xml = fs.readFileSync(input, "utf8");
  parseString(xml, (err, json) => {
    const components = reduceCC(json);
    const categorized = refactorCategories(components);
    fs.writeFileSync(output, categorized);
  });
}

function reduceCC(json) {
  const components = [];
  for (const component of json.componentTypes.componentType) {
    const id = component.$.id;
    const canonical = component.$.canonical_name;
    const main = component.type[0]._;
    const sub = component.type[0].$.subtype;
    components.push({ main, sub, id, canonical });
  }
  return components;
}

function refactorCategories(components) {
  let result = "";

  const types = components.map(({ main }) => main).filter(unique);
  for (const type of types) {
    result += `${type}\n`;

    const subtypes = components
      .filter(({ main }) => main === type)
      .map(({ sub }) => sub)
      .filter(unique);
    for (const subtype of subtypes) {
      result += " ".repeat(4) + `${subtype}\n`;

      const componentsOfSubtype = components.filter(
        ({ main, sub }) => main === type && sub === subtype
      );
      for (const c of componentsOfSubtype) {
        result += " ".repeat(8) + `${c.id} (${c.canonical})\n`;
      }
    }
  }
  return result;
}
