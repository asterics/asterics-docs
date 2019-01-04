const fs = require("fs-extra");
const klaw = require("klaw-sync");

function prettify(name) {
  // Replace underscore with space
  // file.replace(/_/, " ");

  // Split at underscore
  let words = name.split("_");

  // Capitalize words
  let Words = [];
  words.forEach(word => {
    Words.push(word.charAt(0).toUpperCase() + word.substr(1));
  });

  // Construct string
  let result = Words[0];
  Words.splice(0, 1);
  Words.forEach(Word => {
    result = result + " " + Word;
  });

  return result;
}

async function loadDirStructure(root, path) {
  console.log(`util-vuepress: ${root}`);
  console.log(`util-vuepress: ${path}`);

  let directories = fs.readdirSync(path);

  directories.forEach(dir => {
    let filesPath = `${path}/${dir}`;
    let files = fs.readdirSync(filesPath);
    let filesArray = [];

    files.forEach(file => {
      // https://regex101.com/r/m75K7L/1
      if (file.match(/.*\.md$/)) {
        file = file.replace(/.[^.]+$/, "");
        console.log(file);
        let entry = [`${dir}/${file}`, prettify(file)];
        filesArray.push(entry);
      }
    });

    let entry = {
      title: dir,
      collapsable: true
    };

    console.log(entry);
  });
}

module.exports = {
  loadDirStructure
};
