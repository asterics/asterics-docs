(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{1059:function(e,r,t){"use strict";t.r(r);var n=t(2),a=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"tools-and-libraries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools-and-libraries"}},[e._v("#")]),e._v(" Tools and libraries")]),e._v(" "),r("p",[e._v("This chapter is about tools, libraries and technologies that are used in AsTeRICS Grid project:")]),e._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/02_tools.html#tools"}},[e._v("Tools")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/02_tools.html#javascript-libraries"}},[e._v("Javascript libaries")])],1)]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),r("h2",{attrs:{id:"tools"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tools"}},[e._v("#")]),e._v(" Tools")]),e._v(" "),r("p",[e._v("This section is about tools that are used for development, dependency management and releasing.")]),e._v(" "),r("h3",{attrs:{id:"node-package-manager-npm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-package-manager-npm"}},[e._v("#")]),e._v(" Node package manager (npm)")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("node package manager (npm)"),r("OutboundLink")],1),e._v(" is used for managing Javascript dependencies and running various tasks related to the project. The npm configuration file is "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"npm-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm-dependencies"}},[e._v("#")]),e._v(" npm dependencies")]),e._v(" "),r("p",[e._v("The configuration file "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),r("OutboundLink")],1),e._v(" includes the key "),r("code",[e._v("dependencies")]),e._v(" which include dependencies that are used in order to run AsTeRICS Grid:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/sen-su/superlogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("@sensu/superlogin"),r("OutboundLink")],1)]),e._v(": framework providing user management in connection to "),r("a",{attrs:{href:"http://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CouchDB"),r("OutboundLink")],1),e._v(", the database backend used by AsTeRICS Grid")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/cors",target:"_blank",rel:"noopener noreferrer"}},[e._v("cors"),r("OutboundLink")],1)]),e._v(": CORS handler for HTTP requests, used by superlogin")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/morgan",target:"_blank",rel:"noopener noreferrer"}},[e._v("morgan"),r("OutboundLink")],1)]),e._v(": logger for HTTP requests, used by superlogin")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/superlogin-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("superlogin-client"),r("OutboundLink")],1)]),e._v(": Javascript client for a superlogin instance running on a server")])]),e._v(" "),r("p",[e._v("The other listed dependencies are "),r("RouterLink",{attrs:{to:"/develop/asterics-grid/02_tools.html#javascript-libraries"}},[e._v("Javascript libraries")]),e._v(".")],1),e._v(" "),r("h4",{attrs:{id:"npm-dev-dependencies"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#npm-dev-dependencies"}},[e._v("#")]),e._v(" npm dev-dependencies")]),e._v(" "),r("p",[e._v("The configuration file "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),r("OutboundLink")],1),e._v(" includes the key "),r("code",[e._v("dev-dependencies")]),e._v(" which include dependencies that are used for development of AsTeRICS Grid. These are the most important ones:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/webpack",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack"),r("OutboundLink")],1)]),e._v(": framework using for bundling javascript, vue and css resources")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/webpack-dev-server",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack-dev-server"),r("OutboundLink")],1)]),e._v(": local http server for development of the application")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/babel-core",target:"_blank",rel:"noopener noreferrer"}},[e._v("babel-core"),r("OutboundLink")],1)]),e._v(": framework for transpiling Javascript sources with newer language features to Javascript that is compatible with older browsers.")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/jest",target:"_blank",rel:"noopener noreferrer"}},[e._v("jest"),r("OutboundLink")],1)]),e._v(": Unit testing framework for javascript")])]),e._v(" "),r("h3",{attrs:{id:"webpack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[e._v("#")]),e._v(" Webpack")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://webpack.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Webpack"),r("OutboundLink")],1),e._v(" is used in order to bundling the Javascript sources to a single and minified bundle file. The configuration file for webpack is "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/webpack.config.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("webpack.config.js"),r("OutboundLink")],1),e._v(". It may seem complicated at first sight, but basically it’s configuring 3 things:")]),e._v(" "),r("ol",[r("li",[r("strong",[e._v("Bundling of all sources")]),e._v(" from the "),r("code",[e._v("src/")]),e._v(" folder to one minified file in "),r("code",[e._v("app/build/")]),e._v(" and "),r("code",[e._v("app/build_lecagy")]),e._v(". This bundling is configured by the two objects "),r("code",[e._v("configNormal")]),e._v(" and "),r("code",[e._v("configLegacy")]),e._v(" that are returned at the end of the script.")]),e._v(" "),r("li",[r("strong",[e._v("Generating the appcache.manifest file")]),e._v(" for offline support. This is done by using the "),r("a",{attrs:{href:"https://www.npmjs.com/package/appcache-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("appcache-webpack-plugin"),r("OutboundLink")],1),e._v(" and listing all needed resources in it’s configuration.")]),e._v(" "),r("li",[r("strong",[e._v("Configuring the development webserver")]),e._v(": this is done by the property object returned in the function "),r("code",[e._v("getDevServer()")])])]),e._v(" "),r("h2",{attrs:{id:"javascript-libraries"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascript-libraries"}},[e._v("#")]),e._v(" Javascript libraries")]),e._v(" "),r("p",[e._v("This section is about Javascript libraries that are used within the AsTeRICS Grid project. They can be found in two locations:")]),e._v(" "),r("ol",[r("li",[e._v("As dependency listed within "),r("code",[e._v("dependencies")]),e._v(" in the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json"),r("OutboundLink")],1),e._v(" configuration file")]),e._v(" "),r("li",[e._v("As external library included in the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/master/app/lib",target:"_blank",rel:"noopener noreferrer"}},[e._v("app/lib/ folder"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("These are the Javascript libraries that are used:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/file-saver",target:"_blank",rel:"noopener noreferrer"}},[e._v("file-saver"),r("OutboundLink")],1)]),e._v(": library for downloading files within a web-application")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/lz-string",target:"_blank",rel:"noopener noreferrer"}},[e._v("lz-string"),r("OutboundLink")],1)]),e._v(": library for string compression, used for imported default dictionaries*")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/navigo",target:"_blank",rel:"noopener noreferrer"}},[e._v("navigo"),r("OutboundLink")],1)]),e._v(": javascript routing library based on URL hash")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/predictionary",target:"_blank",rel:"noopener noreferrer"}},[e._v("predictionary"),r("OutboundLink")],1)]),e._v(": javascript word prediction library")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://www.npmjs.com/package/vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue"),r("OutboundLink")],1)]),e._v(": javascript single-page application framework")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/ruyadorno/dom-i18n",target:"_blank",rel:"noopener noreferrer"}},[e._v("dom-i18n"),r("OutboundLink")],1)]),e._v(": easy to use DOM-internationalization library")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://jquery.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQuery"),r("OutboundLink")],1)]),e._v(": library for document traversal and manipulation, needed for jQueryUI")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://jqueryui.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQueryUI"),r("OutboundLink")],1)]),e._v(": library for user interface interactions, needed for jQuery contextMenu and GridList")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://swisnl.github.io/jQuery-contextMenu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jQuery contextMenu"),r("OutboundLink")],1)]),e._v(": jQuery plugin for right-click context menus, used in AsTeRICS Grid e.g. for edit menu of a grid element")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/klues/grid",target:"_blank",rel:"noopener noreferrer"}},[e._v("GridList"),r("OutboundLink")],1)]),e._v(": jQueryUI based library for creation of a dynamic, draggable grid")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/pimterry/loglevel",target:"_blank",rel:"noopener noreferrer"}},[e._v("loglevel"),r("OutboundLink")],1)]),e._v(": javascript logging library")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://objectmodel.js.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ObjectModel"),r("OutboundLink")],1)]),e._v(": library for dynamic type checking, see data models in "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/master/src/js/model",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/js/model/"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://pouchdb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PouchDB"),r("OutboundLink")],1)]),e._v(": library for accessing "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexedDB"),r("OutboundLink")],1),e._v(" and synchronization with a remote "),r("a",{attrs:{href:"http://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CouchDB"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/bitwiseshiftleft/sjcl",target:"_blank",rel:"noopener noreferrer"}},[e._v("sjcl"),r("OutboundLink")],1)]),e._v(": crypto library published by Stanford University that is used for encryption of user configuration")])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/01_structure.html"}},[e._v("← Previous Chapter")]),e._v(" "),r("RouterLink",{attrs:{to:"/develop/asterics-grid/03_grid.html"}},[e._v("Next Chapter →")])],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);r.default=a.exports}}]);