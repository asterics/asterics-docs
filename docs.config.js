module.exports = {
  base: "/next/",
  port: 8080,
  source: "docs",
  dest: "dist",
  host: "https://www.asterics.eu/",
  // versions: ["4.0", "3.0.1", "3.0", "2.8", "2.7", "2.6", "2.5", "2.3"],
  versions: ["4.1"],
  sources: [
    {
      repository: "asterics-docs",
      reference: ".",
      files: [
        {
          source: "src/vuepress",
          destination: ".vuepress",
          branch: "next",
        },
      ],
    },
    {
      repository: "AsTeRICS",
      reference: "../AsTeRICS",
      files: [
        {
          source: "Documentation/docs",
          destination: ".",
          filter: /\.(md|jpg|png|svg)$/i,
          exclude: /(Documentation\/docs\/acs)/i,
          versions: [
            ["4.1", "master"],
            ["4.0", "docs/4.0.x"],
            ["3.0.1", "docs/3.0.1"],
            ["3.0", "docs/3.0"],
            ["2.8", "docs/2.8"],
            ["2.7", "docs/2.7"],
            ["2.6", "docs/2.6"],
            ["2.5", "docs/2.5"],
            ["2.3", "docs/2.3"],
          ],
        },
        {
          source: "ARE_RestAPIlibraries/clientExample",
          destination: ".vuepress/public/webapps/startpage/clientExample",
          branch: "master",
        },
        {
          source: "ARE_RestAPIlibraries/clientExample/javascript",
          destination: ".vuepress/public/webapps/startpage/lib",
          branch: "master",
        },
      ],
    },
    {
      repository: "WebACS",
      reference: "../WebACS",
      files: [
        {
          source: "docs/manuals/WebACS",
          destination: "manuals/WebACS",
          branch: "master",
        },
      ],
    },
    {
      repository: "AsTeRICS-Grid",
      reference: "../AsTeRICS-Grid",
      files: [
        {
          source: "docs/documentation_user",
          destination: "manuals/asterics-grid",
          branch: "master",
        },
        {
          source: "docs/documentation_dev",
          destination: "develop/asterics-grid",
          branch: "master",
        },
      ],
    },
    {
      repository: "asterics-camerainput-cameramouse",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/asterics-camerainput-cameramouse",
          destination: ".vuepress/public/webapps/asterics-camerainput-cameramouse",
          branch: "master",
        },
      ],
    },
    {
      repository: "asterics-camerainput-eyecontrol",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/asterics-camerainput-eyecontrol",
          destination: ".vuepress/public/webapps/asterics-camerainput-eyecontrol",
          branch: "master",
        },
      ],
    },
    {
      repository: "asterics-solution-template",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/startpage",
          destination: ".vuepress/public/webapps/startpage",
          branch: "master",
        },
      ],
    },
    {
      repository: "asterics-docs.js",
      reference: "../asterics-docs.js",
      files: [
        {
          source: "packages/@asterics-docs/vuepress-theme-docs/README.md",
          destination: "guide/editor.md",
          branch: "master",
        },
        {
          source: "packages/@asterics-docs/tool/README.md",
          destination: "guide/docs.md",
          branch: "master",
        },
      ],
    },
  ],
};
