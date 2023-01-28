(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{425:function(e,t,a){e.exports=a.p+"assets/img/data_storage_layers_en.f40ca1cb.png"},908:function(e,t,a){"use strict";a.r(t);var r=a(2),o=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"data-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-storage"}},[e._v("#")]),e._v(" Data storage")]),e._v(" "),t("p",[e._v("This chapter is about the data storage concept used in AsTeRICS Grid, meaning where and how user configuration and application data is stored.")]),e._v(" "),t("ol",[t("li",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/06_data_storage.html#introduction"}},[e._v("Introduction")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/06_data_storage.html#data-storage-abstraction-layers"}},[e._v("Abstraction layers")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/06_data_storage.html#one-database-per-user"}},[e._v("One database per user")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/06_data_storage.html#authentication-layer"}},[e._v("Authentication layer")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/06_data_storage.html#inspecting-locally-saved-data"}},[e._v("Inspecting locally saved data")])],1)]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),t("h2",{attrs:{id:"introduction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),t("p",[e._v("Since AsTeRICS Grid is designed to work offline, all configuration and user data have to be accessible without internet connection. There are the following possibilities for providing a data storage for an offline web-application:")]),e._v(" "),t("ol",[t("li",[e._v("Any external locally running storage service, e.g. any locally running database like MySQL or MariaDB. This possibility has the downside that users would have to install additional Software in order to use AsTeRICS Grid.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"}},[e._v("LocalStorage"),t("OutboundLink")],1),e._v(", a browser internal storage which is capable to store key-value pairs of string values. However the amount of data is "),t("a",{attrs:{href:"https://www.html5rocks.com/en/tutorials/offline/quota-research/",target:"_blank",rel:"noopener noreferrer"}},[e._v("limited to about 5-10MB"),t("OutboundLink")],1),e._v(" in many browsers which is often too little to store all grids in AsTeRICS Grid.")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexedDB"),t("OutboundLink")],1),e._v(", a browser internal storage for big amounts of structured data")])]),e._v(" "),t("p",[e._v("AsTeRICS Grid uses LocalStorage for temporary data which should not synchronized with the cloud (e.g. hashed encryption password) and IndexedDB for the majority of configuration like e.g. data of stored grids. For online users all data that is stored in IndexedDB is synchronized with the cloud, for offline users (see "),t("RouterLink",{attrs:{to:"/develop/documentation_user/06_users.html"}},[e._v("Users")]),e._v(") data is only stored locally on the device.")],1),e._v(" "),t("p",[e._v("For accessing IndexedDB in a more comfortable manner and making synchronization with a remote "),t("a",{attrs:{href:"http://couchdb.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CouchDB"),t("OutboundLink")],1),e._v(" possible, the Javascript library "),t("a",{attrs:{href:"https://pouchdb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PouchDB"),t("OutboundLink")],1),e._v(" is used.")]),e._v(" "),t("h2",{attrs:{id:"data-storage-abstraction-layers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-storage-abstraction-layers"}},[e._v("#")]),e._v(" Data storage abstraction layers")]),e._v(" "),t("p",[e._v("All Javascript modules regarding storage of data in AsTeRICS Grid can be found in the folder "),t("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/master/src/js/service/data",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/js/service/data"),t("OutboundLink")],1),e._v(". Figure 1 shows the relevant files and their relationships:")]),e._v(" "),t("p",[t("img",{attrs:{src:a(425),alt:"Concept of data storage layers"}})]),e._v(" "),t("p",[t("em",[e._v("Figure 1: Concept of data storage layers")])]),e._v(" "),t("p",[e._v("These are the responsibilities and functions of the different modules:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("dataService.js")]),e._v(": provides access to data objects on an application based abstraction level; implements methods that make it possible to get and save the objects described in chapter "),t("RouterLink",{attrs:{to:"/develop/asterics-grid/05_datamodel.html"}},[e._v("Data model")]),e._v(", e.g. "),t("code",[e._v("GridData")]),e._v(" objects.")],1),e._v(" "),t("li",[t("strong",[e._v("databaseService.js")]),e._v(": implements "),t("a",{attrs:{href:"https://de.wikipedia.org/wiki/CRUD",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRUD"),t("OutboundLink")],1),e._v(" methods for generic data model objects, methods for switching databases (users) and initializes databases with default data. This layer also does encryption and decryption of data using "),t("code",[e._v("filterService.js")]),e._v(". This level of abstraction is still quite independent of "),t("a",{attrs:{href:"https://pouchdb.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PouchDB"),t("OutboundLink")],1),e._v(" or "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API",target:"_blank",rel:"noopener noreferrer"}},[e._v("IndexedDB"),t("OutboundLink")],1),e._v(" and theoretically could also use a different backend.")]),e._v(" "),t("li",[t("strong",[e._v("pouchDbService.js")]),e._v(": performs queries and actions on a PouchDB instance actually accessing the IndexedDB or CouchDB databases. It also caches queries for performance optimizations and broadcasts events if updates from the remote database are recognized.")]),e._v(" "),t("li",[t("strong",[e._v("pouchDBAdapter.js")]),e._v(": manages which actual database should be used, a local PouchDB instance or a remote CouchDB. Also sets up synchronization between both.")]),e._v(" "),t("li",[t("strong",[e._v("undoService.js")]),e._v(": is used by "),t("code",[e._v("grid.js")]),e._v(" in order to pass updates on grids to "),t("code",[e._v("dataService.js")]),e._v(" while keeping track of changes and providing an undo and redo functionality")]),e._v(" "),t("li",[t("strong",[e._v("filterService.js")]),e._v(": provides methods in order to convert objects used in the application to (encrypted) objects that should be saved to database and vice versa. If an object with an outdated data model version passes these methods, additional filter functions are inserted in order to upgrade the data model.")]),e._v(" "),t("li",[t("strong",[e._v("encryptionService.js")]),e._v(": provides methods for AES encryption and decryption and hasing of data objects and strings using the "),t("a",{attrs:{href:"https://github.com/bitwiseshiftleft/sjcl",target:"_blank",rel:"noopener noreferrer"}},[e._v("sjcl"),t("OutboundLink")],1),e._v(" library")]),e._v(" "),t("li",[t("strong",[e._v("localStorageService.js")]),e._v(": accesses the browser internal "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",target:"_blank",rel:"noopener noreferrer"}},[e._v("LocalStorage"),t("OutboundLink")],1),e._v(" for saving data like the last active user or hashed user passwords - in general data which should not be synchronized to cloud or aren’t suitable for a user’s database.")])]),e._v(" "),t("h2",{attrs:{id:"one-database-per-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#one-database-per-user"}},[e._v("#")]),e._v(" One database per user")]),e._v(" "),t("p",[e._v("AsTeRICS Grid implements the idea of "),t("a",{attrs:{href:"https://www.joshmorony.com/creating-a-multiple-user-app-with-pouchdb-couchdb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("one database per user"),t("OutboundLink")],1),e._v(". For each user a new database is created. Offline users have an own IndexedDB database within the browser and online users have both a local IndexedDB database and an online CouchDB database which are kept in sync by "),t("a",{attrs:{href:"https://pouchdb.com/guides/replication.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("replication features"),t("OutboundLink")],1),e._v(" of the PouchDB library. Advantages of this approach are:")]),e._v(" "),t("ul",[t("li",[e._v("access rights are easy to manage, each user can access their own database and nothing else")]),e._v(" "),t("li",[e._v("it’s easy to delete all data of a user, just delete their database")]),e._v(" "),t("li",[e._v("replication and synchronizing is simple, the whole user database can be replicated on the local device")])]),e._v(" "),t("h2",{attrs:{id:"authentication-layer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#authentication-layer"}},[e._v("#")]),e._v(" Authentication layer")]),e._v(" "),t("p",[e._v("The one-database-per-user approach needs a layer for managing user accounts and the corresponding CouchDB user databases (only for online users). For AsTeRICS Grid the framework "),t("a",{attrs:{href:"https://github.com/sen-su/superlogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("superlogin"),t("OutboundLink")],1),e._v(" is used. It provides an API in order to register and login users and creates the corresponding CouchDB databases in the background. However the "),t("a",{attrs:{href:"https://github.com/colinskow/superlogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("original superlogin project"),t("OutboundLink")],1),e._v(" seems to be no longer maintained and therefore AsTeRICS Grid uses a more up-to-date "),t("a",{attrs:{href:"https://github.com/sen-su/superlogin",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork"),t("OutboundLink")],1),e._v(" of it.")]),e._v(" "),t("p",[e._v("The file "),t("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/superlogin/start.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("superlogin/start.js"),t("OutboundLink")],1),e._v(" starts superlogin and contains it’s configuration (= server side). The file "),t("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/service/loginService.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("loginService.js"),t("OutboundLink")],1),e._v(" is the client-side counterpart which uses the library "),t("a",{attrs:{href:"https://www.npmjs.com/package/superlogin-client",target:"_blank",rel:"noopener noreferrer"}},[e._v("superlogin-client"),t("OutboundLink")],1),e._v(" in order to connect to and make use of the superlogin server.")]),e._v(" "),t("p",[e._v("In order to start superlogin a CouchDB instance must be running on the same machine and the correct CouchDB parameters have to be inserted in "),t("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/superlogin/start.js#L43",target:"_blank",rel:"noopener noreferrer"}},[e._v("start.js:43"),t("OutboundLink")],1),e._v(". Then use "),t("code",[e._v("npm run start-superlogin-dev")]),e._v(" or "),t("code",[e._v("npm run start-superlogin-prod")]),e._v(" in order to start superlogin in development or production mode.")]),e._v(" "),t("h2",{attrs:{id:"inspecting-locally-saved-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inspecting-locally-saved-data"}},[e._v("#")]),e._v(" Inspecting locally saved data")]),e._v(" "),t("p",[e._v("For examining the locally saved data of AsTeRICS Grid do the following (e.g. in Firefox or Chrome browser):")]),e._v(" "),t("ol",[t("li",[e._v("open developer tools ("),t("code",[e._v("Ctrl + Shift + I")]),e._v(" or "),t("code",[e._v("right click -> Inspect")]),e._v(")")]),e._v(" "),t("li",[e._v("go to "),t("code",[e._v("Application")]),e._v(" (Chrome) or "),t("code",[e._v("Web-Storage")]),e._v(" (Firefox)")]),e._v(" "),t("li",[e._v("open "),t("code",[e._v("LocalStorage")]),e._v(" or "),t("code",[e._v("IndexedDB")]),e._v(" to inspect the data saved in these storages")])]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/05_datamodel.html"}},[e._v("← Previous Chapter")]),e._v(" "),t("RouterLink",{attrs:{to:"/develop/asterics-grid/07_i18n.html"}},[e._v("Next Chapter →")])],1),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=o.exports}}]);