module.exports = [
  { text: "Get Started", link: "/get-started/" },
  { text: "Solutions", link: "/solutions/" },
  { text: "Tutorials", link: "/customize/" },
  { text: "Plugins", link: "/plugins/" },

  {
    text: "More",
    items: [
      {
        text: "Web Applications",
        items: [
          {
            text: "AsTeRICS Grid",
            link: "https://grid.asterics.eu",
          },
          {
            text: "WebACS",
            link: "http://webacs.asterics.eu/?areBaseURI=http://127.0.0.1:8081",
          },
          {
            text: "FABI WebUI",
            link: "https://fabi.asterics.eu",
          },
          {
            text: "FLipMouse WebUI",
            link: "https://flipmouse.asterics.eu",
          }
        ],
      },
      {
        text: "Documentation",
        items: [
          { text: "AsTeRICS Grid User Manual", link: "/manuals/asterics-grid/" },
          { text: "WebACS User Manual", link: "/manuals/WebACS/" },
          { text: "ACS User Manual", link: "/manuals/ACS/" },
          // { text: "ARE", link: "/manuals/ARE/" }
          { text: "Website Editors Guide", link: "/guide/editor.html" },
          {
            text: "Developer Guide",
            link: "/develop/",
          },
        ],
      },
      {
        text: "Get Involved",
        items: [
          { text: "About us", link: "/get-involved/About-us" },
          { text: "Contact", link: "/get-involved/Contact" },
          { text: "Contribute", link: "/get-involved/Contribute" },
          { text: "Legal Notice", link: "/get-involved/Legal-Notice" },
        ],
      },    
    ],
  },
  // as long as there is just 1 language, comment it out
  // {
  //   text: "Languages",
  //   items: [
  //     { text: "English", link: "/" },
  //     { text: "German", link: "/de/" }
  //   ]
  // },
  {
    text: "Download",
    link: "https://github.com/asterics/AsTeRICS/releases/latest",
  },
];
