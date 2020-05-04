(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{512:function(e,t,r){"use strict";r.r(t);var n=r(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),r("p",[e._v("This chapter is about the general structure of the AsTeRICS Grid project:")]),e._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/01_structure.html#project-structure"}},[e._v("Project structure")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/01_structure.html#sources-structure"}},[e._v("Sources structure")])],1)]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),r("h2",{attrs:{id:"project-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project structure")]),e._v(" "),r("p",[e._v("The AsTeRICS Grid project is hosted on "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(". These are the main folders and files in the project:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("app/")]),e._v(": folder containing static and built resources for the actual AsTeRICS Grid application. Host this folder in addition to "),r("code",[e._v("../index.html")]),e._v(" in the root folder on webserver in order to and open the "),r("code",[e._v("../index.html")]),e._v(" file in order to start AsTeRICS Grid.")]),e._v(" "),r("li",[r("strong",[e._v("docs/")]),e._v(": folder containing various documentation resources, e.g. this manual")]),e._v(" "),r("li",[r("strong",[e._v("scripts/")]),e._v(": folder containing shell scripts, e.g. for releasing a new AsTeRICS Grid release")]),e._v(" "),r("li",[r("strong",[e._v("src/")]),e._v(": folder containing Javascript sources")]),e._v(" "),r("li",[r("strong",[e._v("superlogin/")]),e._v(": folder containing configuration of "),r("a",{attrs:{href:"https://github.com/sen-su/superlogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("superlogin"),r("OutboundLink")],1),e._v(", a tool that handles users and databases for "),r("a",{attrs:{href:"http://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CouchDB"),r("OutboundLink")],1),e._v(", the database backend used by AsTeRICS Grid.")]),e._v(" "),r("li",[r("strong",[e._v(".babelrc")]),e._v(": configuration for "),r("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),r("OutboundLink")],1),e._v(" Javascript compiler, only needed for running "),r("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jest"),r("OutboundLink")],1),e._v(" tests, other Babel configuration is found in "),r("code",[e._v("webpack.config.js")])]),e._v(" "),r("li",[r("strong",[e._v(".gitignore")]),e._v(": file specifying which files to ignore by "),r("a",{attrs:{href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),r("OutboundLink")],1),e._v(" version control")]),e._v(" "),r("li",[r("strong",[e._v("CNAME")]),e._v(": configuration file of GitHub, specifying which alternative domain points to the version that is found on the GitHub "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/gh-pages",target:"_blank",rel:"noopener noreferrer"}},[e._v("gh-pages branch"),r("OutboundLink")],1),e._v(". Therefore the version found on this branch is the version that is delivered when opening "),r("a",{attrs:{href:"https://grid.asterics.eu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://grid.asterics.eu/"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("index.html")]),e._v(": entry point of the application, uses resources from the "),r("code",[e._v("app/")]),e._v(" folder")]),e._v(" "),r("li",[r("strong",[e._v("LICENSE")]),e._v(": file specifying the license of AsTeRICS Grid which is "),r("a",{attrs:{href:"https://www.gnu.org/licenses/agpl-3.0.de.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AGPL3"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("README.md")]),e._v(": markdown readme file for the GitHub project page")]),e._v(" "),r("li",[r("strong",[e._v("package.json")]),e._v(": "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(" configuration file specifying dependencies and scripts for the AsTeRICS Grid project")]),e._v(" "),r("li",[r("strong",[e._v("package-lock.json")]),e._v(": file generated by "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(" specifying the exact version of dependencies used in the project")]),e._v(" "),r("li",[r("strong",[e._v("webpack.config.js")]),e._v(": "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(" configuration file specifying options for building and bundling the application")])]),e._v(" "),r("h2",{attrs:{id:"sources-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sources-structure"}},[e._v("#")]),e._v(" Sources structure")]),e._v(" "),r("p",[e._v("All custom sources are located in the "),r("code",[e._v("src")]),e._v(" folder which has the following structure:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("css/")]),e._v(": includes custom stylesheets")]),e._v(" "),r("li",[r("strong",[e._v("js/")]),e._v(": all pure Javascript sources\n"),r("ul",[r("li",[r("strong",[e._v("externals/")]),e._v(": folder including ES6 module wrapppers of libraries that are included externally within a "),r("code",[e._v("<script>")]),e._v(" tag in "),r("code",[e._v("index.html")]),e._v(". Wrapper is needed in order to make the libraries test- and mockable with "),r("a",{attrs:{href:"https://jestjs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jest"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("input/")]),e._v(": folder containing modules implementing various input options like hovering or scanning")]),e._v(" "),r("li",[r("strong",[e._v("model/")]),e._v(": definitions of data model classes using "),r("a",{attrs:{href:"https://objectmodel.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ObjectModel"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("service/")]),e._v(": all kind of modules providing a functionality that is related to AsTeRICS Grid’s functionality, access the database or performing actions")]),e._v(" "),r("li",[r("strong",[e._v("util/")]),e._v(": all modules providing any general functionality that is needed by other modules or services")]),e._v(" "),r("li",[r("strong",[e._v("vue/")]),e._v(": all "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),r("OutboundLink")],1),e._v(" related modules, not including vue components")]),e._v(" "),r("li",[r("strong",[e._v("grid.js")]),e._v(": module that creates dynamic grids (UI) out of the saved data in the database and provides interaction possibilities with the grid")]),e._v(" "),r("li",[r("strong",[e._v("mainScript.js")]),e._v(": starting point of the whole application")]),e._v(" "),r("li",[r("strong",[e._v("router.js")]),e._v(": module that does routing to different views based on the current hash of the URL, e.g. "),r("code",[e._v("#main")]),e._v(", "),r("code",[e._v("#login")]),e._v(" or "),r("code",[e._v("#grids")]),e._v(". Uses the "),r("a",{attrs:{href:"https://github.com/krasimir/navigo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Navigo"),r("OutboundLink")],1),e._v(" library.")]),e._v(" "),r("li",[r("strong",[e._v("templates.js")]),e._v(": module that holds HTML templates which are used for generating the HTML sources for various grid elements")])])]),e._v(" "),r("li",[r("strong",[e._v("vue-components/")]),e._v(": folder containing all "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),r("OutboundLink")],1),e._v(" components\n"),r("ul",[r("li",[r("strong",[e._v("components/")]),e._v(": folder for general purpose components")]),e._v(" "),r("li",[r("strong",[e._v("modals/")]),e._v(": folder for modal (popup) components")]),e._v(" "),r("li",[r("strong",[e._v("views/")]),e._v(": folder for view components, see all kinds of views in the "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#navigation-and-basic-functionality"}},[e._v("user documentation")])],1)])])]),e._v(" "),r("h3",{attrs:{id:"elements-in-folder-app"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#elements-in-folder-app"}},[e._v("#")]),e._v(" Elements in folder “app/”")]),e._v(" "),r("p",[e._v("Besides the custom sources in the "),r("code",[e._v("src/")]),e._v(" folder the "),r("code",[e._v("app/")]),e._v(" folder contains these elements which in total realize the working AsTeRICS Grid application:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("build/")]),e._v(": folder containing a built and minified file of all sources that are included in the "),r("code",[e._v("src/")]),e._v(" folder. For transpiling and bundling "),r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1),e._v(" is used.")]),e._v(" "),r("li",[r("strong",[e._v("build_legacy/")]),e._v(": also containing a built and minified file of all sources in the "),r("code",[e._v("src/")]),e._v(" folder, but not transpiled with "),r("a",{attrs:{href:"https://babeljs.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Babel"),r("OutboundLink")],1),e._v(" and therefore containing newer language features (e.g. arrow functions) which may not be working in older browsers (e.g. IE).")]),e._v(" "),r("li",[r("strong",[e._v("css/")]),e._v(": global stylesheets which are directly included "),r("code",[e._v("index.html")]),e._v(". There is no specific reason for not putting them into "),r("code",[e._v("src/css/")]),e._v(" and let them also be bundled with webpack to the bundle in "),r("code",[e._v("build/")]),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("dictionaries/")]),e._v(": "),r("a",{attrs:{href:"http://pieroxy.net/blog/pages/lz-string/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("lz-string"),r("OutboundLink")],1),e._v(" compressed "),r("a",{attrs:{href:"https://github.com/asterics/predictionary",target:"_blank",rel:"noopener noreferrer"}},[e._v("predictionary"),r("OutboundLink")],1),e._v(" dictionaries including the most frequently used words of different languages. The dictionary fitting the user’s language preferences is automatically imported on creating a new user and visible in the "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#manage-dictionaries-view"}},[e._v("manage dictionaries view")]),e._v(".")],1),e._v(" "),r("li",[r("strong",[e._v("examples/")]),e._v(": folder containing example grid-sets. The gridset "),r("code",[e._v("default_[language_code].grd")]),e._v(" is automatically imported on creating a new user.")]),e._v(" "),r("li",[r("strong",[e._v("img/")]),e._v(": folder containing images and icons")]),e._v(" "),r("li",[r("strong",[e._v("lib/")]),e._v(": folder containing various javascript libraries, which are not imported using "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("npm"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("strong",[e._v("polyfill/")]),e._v(": folder containing "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Polyfill_(programming)"}},[e._v("polyfills")]),e._v(" which are used in order to bring newer language features to older browsers")]),e._v(" "),r("li",[r("strong",[e._v("simple/")]),e._v(": folder containing a simple version of AsTeRICS Grid which only shows simple buttons which can trigger ARE actions defined in a gridset ("),r("code",[e._v(".grd")]),e._v(") file.")]),e._v(" "),r("li",[r("strong",[e._v("index.html")]),e._v(": starting point of the application, basic html including all bundled javascript resources and libraries.")]),e._v(" "),r("li",[r("strong",[e._v("manifest.appcache")]),e._v(": "),r("a",{attrs:{href:"https://developer.mozilla.org/de/docs/Web/HTML/Using_the_application_cache",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppCache"),r("OutboundLink")],1),e._v(" manifest file including all resources to cache for offline usage")]),e._v(" "),r("li",[r("strong",[e._v("manifest.webmanifest")]),e._v(": "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Manifest",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web App Manifest"),r("OutboundLink")],1),e._v(" file containing information about the app and making it usable as progressive web app, e.g. using and installing it in an app-like fashion on smartphones.")])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/02_tools.html"}},[e._v("Next Chapter →")])],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);