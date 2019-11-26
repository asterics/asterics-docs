(window.webpackJsonp=window.webpackJsonp||[]).push([[284],{765:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"are-webserver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#are-webserver"}},[e._v("#")]),e._v(" ARE Webserver")]),e._v(" "),s("p",[e._v("The ARE provides a webserver with the document root at")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ARE/web/\n")])])]),s("p",[e._v("If you start the ARE, you can open the start page of the webserver by")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("http://localhost:8081/\n")])])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("https://localhost:8083/\n")])])]),s("h2",{attrs:{id:"document-root-subpath-definitions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#document-root-subpath-definitions"}},[e._v("#")]),e._v(" Document root subpath definitions")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("/ or /index.html")]),e._v(": Landing page of the webserver. This URL provides some general informations about AsTeRICS and should link to the WebACS, REST demos and model demos. Can be overridden in case of an APE project. ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("rest/")]),e._v(": This is the base path of the "),s("router-link",{attrs:{to:"/develop/are-remote-apis/REST-API.html"}},[e._v("REST interface")]),e._v(".\n("),s("em",[e._v("read, write")]),e._v(")")],1),e._v(" "),s("li",[s("strong",[e._v("ws/")]),e._v(": This is the base path of the websocket functionality. "),s("em",[e._v("(read, write)")])]),e._v(" "),s("li",[s("strong",[e._v("data/")]),e._v(": Reserved for providing access to the "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/data/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/data"),s("OutboundLink")],1),e._v(" folder containing model data files, plugin config files, plugin images,… ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("models/")]),e._v(": Reserved for providing access to "),s("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/tree/master/bin/ARE/models/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/models"),s("OutboundLink")],1),e._v(". ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("modelSettings/")]),e._v(": Reserved for static or dynamically generated settings dialogs of a model targeted for end users (users with disabilities or care takers, personal assistents, occupational therapists,…) ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("componentCollections/")]),e._v(": Reserved for providing various component collections describing the set of plugins available on an ARE installation. ("),s("em",[e._v("readonly")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("webapps")]),e._v("/: Reserved for web applications. Could be used to extend web functionality by (optional) web applications. ("),s("em",[e._v("read, write")]),e._v(")")]),e._v(" "),s("li",[s("strong",[e._v("WebACS/")]),e._v(": Base URL of the webbased AsTeRICS Configuration Suite "),s("a",{attrs:{href:"https://github.com/asterics/WebACS",target:"_blank",rel:"noopener noreferrer"}},[e._v("(WebACS)"),s("OutboundLink")],1),e._v(" including help of WebACS "),s("strong",[e._v("without plugin help files")]),e._v(". ("),s("em",[e._v("read, write")]),e._v(")")])]),e._v(" "),s("h2",{attrs:{id:"physical-folder-structure"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#physical-folder-structure"}},[e._v("#")]),e._v(" Physical folder structure")]),e._v(" "),s("p",[e._v("The virtual paths are represented by the following physical folder structure on the ARE:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ARE\n |-data/\n |-models/\n |-web/\n  |index.html\n  |-modelSettings/\n  |-componentCollections/\n  |-WebACS/\n  |-webapps/\n")])])]),s("p",[e._v("The subpaths "),s("em",[e._v("rest/")]),e._v(" and "),s("em",[e._v("ws/")]),e._v(" are only virtual paths needed for the REST API and websocket functionalities.")])])}),[],!1,null,null,null);t.default=r.exports}}]);