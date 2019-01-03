require("dotenv").config();
const term = require("terminal-kit").terminal;
const { handleBuild } = require("./libraries/build");
const { handleSidebarCreation } = require("./libraries/sidebar");

// term.windowTitle("asterics-docs utility");
// term.iconName("AsTeRICS");
term.setDefaultColorRgb(255, 255, 255);
// term.setDefaultBgColorRgb(14, 161, 210);
term.setDefaultBgColorRgb(7, 80, 105);
term.setHighlightBgColorRgb(11, 121, 157);

let menu = [
  "1. build and backup docs version",
  "2. create sidebar entry",
  "3. show configuration",
  "4. exit"
];
let options = { cancelable: true, exitOnUnexpectedKey: true };

function printHeader() {
  term("### asterics-docs utility ###\n\n");
}
async function handleMenu() {
  term.clear();
  printHeader();
  term("select action:\n");
  term.singleColumnMenu(
    menu,
    options,
    async (error, response) => await processUserEntry(error, response)
  );
}
function handleMenuDelayed() {
  setTimeout(() => {
    handleMenu();
  }, process.env.UTIL_TIMEOUT);
}
function handleExit() {
  term.processExit();
  term.bell();
  term.resetCursorColorRgb();
  term.resetDefaultColorRgb();
  term.resetDefaultBgColorRgb();
  term.resetHighlightBgColorRgb();
  term.reset();
}

async function processUserEntry(e, r) {
  switch (r.selectedText) {
    case menu[0]:
      await handleBuild(printHeader, handleMenuDelayed);
      // handleMenuDelayed();
      break;
    case menu[1]:
      // handleSidebarCreation();
      term.clear();
      printHeader();
      term("...not implemented (yet)");
      handleMenuDelayed();
      break;
    case menu[2]:
      term.clear();
      printHeader();
      term("...not implemented (yet)");
      handleMenuDelayed();
      break;
    case menu[3]:
    default:
      handleExit();
      break;
  }
}

(async () => {
  handleMenu();
})().catch(err => {
  console.log(err);
});
