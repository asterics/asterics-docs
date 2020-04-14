module.exports = {
  base: "/",
  port: 8080,
  source: "docs",
  dest: "dist",
  versions: ["4.0.x", "2.8"],
  sources: [
    {
      repository: "asterics-docs",
      reference: ".",
      files: [
        {
          source: "src/vuepress",
          destination: ".vuepress",
          branch: "alija/feature/versioning"
        }
      ]
    },
    {
      repository: "AsTeRICS",
      reference: "../AsTeRICS",
      files: [
        {
          source: "Documentation/docs",
          destination: "",
          filter: /\.(md|jpg|png|svg)$/i,
          versions: [
            ["4.0.x", "master"],
            ["2.8", "docs/2.8"]
          ]
        },
        {
          source: "ARE_RestAPIlibraries/clientExample",
          destination: ".vuepress/public/webapps/startpage/clientExample",
          branch: "master"
        },
        {
          source: "ARE_RestAPIlibraries/clientExample/javascript",
          destination: ".vuepress/public/webapps/startpage/lib",
          branch: "master"
        }
      ]
    },
    {
      repository: "WebACS",
      reference: "../WebACS",
      files: [
        {
          source: "docs/manuals/WebACS",
          destination: "manuals/WebACS",
          branch: "master"
        }
      ]
    },
    {
      repository: "AsTeRICS-Grid",
      reference: "../AsTeRICS-Grid",
      files: [
        {
          source: "docs/documentation_user",
          destination: "manuals/asterics-grid",
          branch: "master"
        },
        {
          source: "docs/documentation_dev",
          destination: "develop/asterics-grid",
          branch: "master"
        }
      ]
    },
    {
      repository: "asterics-camerainput-cameramouse",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/asterics-camerainput-cameramouse",
          destination: ".vuepress/public/webapps/asterics-camerainput-cameramouse",
          branch: "master"
        }
      ]
    },
    {
      repository: "asterics-camerainput-eyecontrol",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/asterics-camerainput-eyecontrol",
          destination: ".vuepress/public/webapps/asterics-camerainput-eyecontrol",
          branch: "master"
        }
      ]
    },
    {
      repository: "asterics-solution-template",
      files: [
        {
          source: "custom/bin/ARE/web/webapps/startpage",
          destination: ".vuepress/public/webapps/startpage",
          branch: "master"
        }
      ]
    }
  ]
};
