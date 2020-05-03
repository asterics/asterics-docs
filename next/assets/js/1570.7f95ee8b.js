(window.webpackJsonp=window.webpackJsonp||[]).push([[1570],{1093:function(e,t,s){"use strict";s.r(t);var r=s(2),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[s("strong",[e._v("Note:")]),e._v(" Will be implemented with https://github.com/asterics/AsTeRICS/issues/163")]),e._v(" "),s("h1",{attrs:{id:"specification-of-the-asterics-webserver-document-root"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#specification-of-the-asterics-webserver-document-root"}},[e._v("#")]),e._v(" Specification of the AsTeRICS webserver document root")]),e._v(" "),s("p",[e._v("This specification defines the paths/subpaths of the webserver document root, which was previously located at the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/data/webservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/data/webservice/"),s("OutboundLink")],1),e._v(" subfolder of an AsTeRICS installation.")]),e._v(" "),s("p",[e._v("The new location of the document root will be at "),s("code",[e._v("ARE/web")]),e._v(".")]),e._v(" "),s("p",[e._v("The goal is to prevent current or future namespace collisions between AsTeRICS web functionalities. Not all of the documented subpaths are already implemented.")]),e._v(" "),s("h2",{attrs:{id:"security-considerations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),s("p",[e._v("Currently the AsTeRICS web functionality does not provide authentication and authorization functionality. There is no support for SSL encryption through https either. These requirements are planned for future releases. The parentheses in the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/wiki/AsTeRICS-webserver-document-root-specification/#subpath-definitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subpath definitions"),s("OutboundLink")],1),e._v(" describe permission requirements for the respective path.")]),e._v(" "),s("h2",{attrs:{id:"virtual-subpath-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtual-subpath-definitions"}},[e._v("#")]),e._v(" Virtual Subpath definitions")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("/ or /index.html")]),e._v(": Landing page of the webserver. This URL provides some general informations about AsTeRICS and should link to the WebACS, REST demos and model demos. Can be overridden in case of an APE project. ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("rest/")]),e._v(": This is the base path of the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/blob/master/Documentation/REST_API.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST interface"),s("OutboundLink")],1),e._v(".\n("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("ws/")]),e._v(": This is the base path of the websocket functionality. "),s("em",[e._v("(read, write)")])]),e._v(" "),s("li",[s("strong",[e._v("data/")]),e._v(": Reserved for providing access to the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/data"),s("OutboundLink")],1),e._v(" folder containing model data files, plugin config files, plugin images,… ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("models/")]),e._v(": Reserved for providing access to "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/models"),s("OutboundLink")],1),e._v(". ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("modelSettings/")]),e._v(": Reserved for static or dynamically generated settings dialogs of a model targeted for end users (users with disabilities or care takers, personal assistents, occupational therapists,…) ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("help/")]),e._v(": Base URL of the help system. Only the generic help system without contents. The content is provided through the parallel path "),s("code",[e._v("../help_files/")]),e._v(" ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("help/help_files/")]),e._v(": Definition of content paths with files "),s("code",[e._v("helpPaths-hosted.json")]),e._v(" and "),s("code",[e._v("helpPaths-local.json")]),e._v(" and ARE, C#-ACS and Plugin help files, e.g. Plugins/actuators/FS20Sender.htm or ARE/Introduction.htm, see "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("#45"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("strong",[e._v("componentCollections/")]),e._v(": Reserved for providing various component collections describing the set of plugins available on an ARE installation. ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("webapps")]),e._v("/: Reserved for web applications. Could be used to extend web functionality by (optional) web applications. ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("webapps/WebACS/")]),e._v(": Base URL of the webbased AsTeRICS Configuration Suite "),s("a",{attrs:{href:"https://github.com/asterics/WebACS",target:"_blank",rel:"noopener noreferrer"}},[e._v("(WebACS)"),s("OutboundLink")],1),e._v(" including help of WebACS "),s("strong",[e._v("without plugin help files")]),e._v(". ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("webapps/WebACS/help/help_files/")]),e._v(": Definition of content paths with files "),s("code",[e._v("helpPaths-hosted.json")]),e._v(" and "),s("code",[e._v("helpPaths-local.json")]),e._v(" and ARE, WebACS and Plugin help files, e.g. Plugins/actuators/FS20Sender.htm or ARE/Introduction.htm, see "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("#45"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("strong",[e._v("webapps/AsTeRICS-Ergo")]),e._v("/: Reserved for the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Ergo",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsTeRICS Ergo"),s("OutboundLink")],1),e._v(" wizard based web application. ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("webapps/CCCSD")]),e._v("/: Reserved for the Clinician/Consumer Custom Solution Development environment "),s("a",{attrs:{href:"https://github.com/asterics/CCCSD",target:"_blank",rel:"noopener noreferrer"}},[e._v("(CCCSD)"),s("OutboundLink")],1),e._v(" ("),s("em",[e._v("read, write")]),e._v(")")])]),e._v(" "),s("h2",{attrs:{id:"physical-folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-folder-structure"}},[e._v("#")]),e._v(" Physical folder structure")]),e._v(" "),s("p",[e._v("The virtual paths are represented by the following physical folder structure on the ARE:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ARE\n |-data/\n |-models/\n |-web/\n  |index.html\n  |-modelSettings/\n  |-componentCollections/\n  |-help/\n  |-help_files/\n    |-helpPaths-hosted.json\n    |-helpPaths-local.json\n  |-webapps/\n   |-WebACS/\n   |-AsTeRICS-Ergo/\n")])])]),s("p",[e._v("The subpaths "),s("em",[e._v("rest/")]),e._v(" and "),s("em",[e._v("ws/")]),e._v(" are only virtual paths needed for the REST API and websocket functionalities.")])])}),[],!1,null,null,null);t.default=o.exports}}]);