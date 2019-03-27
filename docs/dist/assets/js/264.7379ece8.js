(window.webpackJsonp=window.webpackJsonp||[]).push([[264],{907:function(e,t,r){"use strict";r.r(t);var s=r(40),n=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[r("strong",[e._v("Note:")]),e._v(" Will be implemented with https://github.com/asterics/AsTeRICS/issues/163")]),e._v(" "),r("h1",{attrs:{id:"specification-of-the-asterics-webserver-document-root"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specification-of-the-asterics-webserver-document-root","aria-hidden":"true"}},[e._v("#")]),e._v(" Specification of the AsTeRICS webserver document root")]),e._v(" "),r("p",[e._v("This specification defines the paths/subpaths of the webserver document root, which was previously located at the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/data/webservice",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/data/webservice/"),r("OutboundLink")],1),e._v(" subfolder of an AsTeRICS installation.")]),e._v(" "),r("p",[e._v("The new location of the document root will be at "),r("code",[e._v("ARE/web")]),e._v(".")]),e._v(" "),r("p",[e._v("The goal is to prevent current or future namespace collisions between AsTeRICS web functionalities. Not all of the documented subpaths are already implemented.")]),e._v(" "),r("h2",{attrs:{id:"security-considerations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security-considerations","aria-hidden":"true"}},[e._v("#")]),e._v(" Security considerations")]),e._v(" "),r("p",[e._v("Currently the AsTeRICS web functionality does not provide authentication and authorization functionality. There is no support for SSL encryption through https either. These requirements are planned for future releases. The parentheses in the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/wiki/AsTeRICS-webserver-document-root-specification/#subpath-definitions",target:"_blank",rel:"noopener noreferrer"}},[e._v("Subpath definitions"),r("OutboundLink")],1),e._v(" describe permission requirements for the respective path.")]),e._v(" "),r("h2",{attrs:{id:"virtual-subpath-definitions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#virtual-subpath-definitions","aria-hidden":"true"}},[e._v("#")]),e._v(" Virtual Subpath definitions")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("/ or /index.html")]),e._v(": Landing page of the webserver. This URL provides some general informations about AsTeRICS and should link to the WebACS, REST demos and model demos. Can be overridden in case of an APE project. ("),r("em",[e._v("readonly")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("rest/")]),e._v(": This is the base path of the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/blob/master/Documentation/REST_API.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST interface"),r("OutboundLink")],1),e._v(".\n("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("ws/")]),e._v(": This is the base path of the websocket functionality. "),r("em",[e._v("(read, write)")])]),e._v(" "),r("li",[r("strong",[e._v("data/")]),e._v(": Reserved for providing access to the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/data"),r("OutboundLink")],1),e._v(" folder containing model data files, plugin config files, plugin images,... ("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("models/")]),e._v(": Reserved for providing access to "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/models"),r("OutboundLink")],1),e._v(". ("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("modelSettings/")]),e._v(": Reserved for static or dynamically generated settings dialogs of a model targeted for end users (users with disabilities or care takers, personal assistents, occupational therapists,...) ("),r("em",[e._v("readonly")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("help/")]),e._v(": Base URL of the help system. Only the generic help system without contents. The content is provided through the parallel path "),r("code",[e._v("../help_files/")]),e._v(" ("),r("em",[e._v("readonly")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("help/help_files/")]),e._v(": Definition of content paths with files "),r("code",[e._v("helpPaths-hosted.json")]),e._v(" and "),r("code",[e._v("helpPaths-local.json")]),e._v(" and ARE, C#-ACS and Plugin help files, e.g. Plugins/actuators/FS20Sender.htm or ARE/Introduction.htm, see "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("#45"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("componentCollections/")]),e._v(": Reserved for providing various component collections describing the set of plugins available on an ARE installation. ("),r("em",[e._v("readonly")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("webapps")]),e._v("/: Reserved for web applications. Could be used to extend web functionality by (optional) web applications. ("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("webapps/WebACS/")]),e._v(": Base URL of the webbased AsTeRICS Configuration Suite "),r("a",{attrs:{href:"https://github.com/asterics/WebACS",target:"_blank",rel:"noopener noreferrer"}},[e._v("(WebACS)"),r("OutboundLink")],1),e._v(" including help of WebACS "),r("strong",[e._v("without plugin help files")]),e._v(". ("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("webapps/WebACS/help/help_files/")]),e._v(": Definition of content paths with files "),r("code",[e._v("helpPaths-hosted.json")]),e._v(" and "),r("code",[e._v("helpPaths-local.json")]),e._v(" and ARE, WebACS and Plugin help files, e.g. Plugins/actuators/FS20Sender.htm or ARE/Introduction.htm, see "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/issues/45",target:"_blank",rel:"noopener noreferrer"}},[e._v("#45"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("strong",[e._v("webapps/AsTeRICS-Ergo")]),e._v("/: Reserved for the "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Ergo",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsTeRICS Ergo"),r("OutboundLink")],1),e._v(" wizard based web application. ("),r("em",[e._v("read, write")]),e._v(")")]),e._v(" "),r("li",[r("strong",[e._v("webapps/CCCSD")]),e._v("/: Reserved for the Clinician/Consumer Custom Solution Development environment "),r("a",{attrs:{href:"https://github.com/asterics/CCCSD",target:"_blank",rel:"noopener noreferrer"}},[e._v("(CCCSD)"),r("OutboundLink")],1),e._v(" ("),r("em",[e._v("read, write")]),e._v(")")])]),e._v(" "),r("h2",{attrs:{id:"physical-folder-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#physical-folder-structure","aria-hidden":"true"}},[e._v("#")]),e._v(" Physical folder structure")]),e._v(" "),r("p",[e._v("The virtual paths are represented by the following physical folder structure on the ARE:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("ARE\n |-data/\n |-models/\n |-web/\n  |index.html\n  |-modelSettings/\n  |-componentCollections/\n  |-help/\n  |-help_files/\n    |-helpPaths-hosted.json\n    |-helpPaths-local.json\n  |-webapps/\n   |-WebACS/\n   |-AsTeRICS-Ergo/\n")])])]),r("p",[e._v("The subpaths "),r("em",[e._v("rest/")]),e._v(" and "),r("em",[e._v("ws/")]),e._v(" are only virtual paths needed for the REST API and websocket functionalities.")]),e._v(" "),r("EditLink")],1)},[],!1,null,null,null);t.default=n.exports}}]);