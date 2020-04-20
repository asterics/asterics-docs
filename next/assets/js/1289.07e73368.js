(window.webpackJsonp=window.webpackJsonp||[]).push([[1289],{1048:function(e,t,n){"use strict";n.r(t);var r=n(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"vue-js"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-js"}},[e._v("#")]),e._v(" Vue.js")]),e._v(" "),r("p",[e._v("This chapter is about "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),r("OutboundLink")],1),e._v(", the single-page application framework used for AsTeRICS Grid.")]),e._v(" "),r("ol",[r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/04_vuejs.html#general"}},[e._v("General")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/04_vuejs.html#component-structure"}},[e._v("Component structure")])],1),e._v(" "),r("li",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/04_vuejs.html#used-components"}},[e._v("Used components")])],1)]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),r("h2",{attrs:{id:"general"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),r("p",[e._v("In AsTeRICS Grid "),r("a",{attrs:{href:"https://vuejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vue.js"),r("OutboundLink")],1),e._v(" is used in order to manage views and it's elements in components and to create all kinds of interactivity in the UI. In Vue.js components can be organized in single "),r("code",[e._v(".vue")]),e._v(" files, containing the HTML, Javascript and CSS needed for this component. These are the files and folders that are important regarding the usage of Vue.js:")]),e._v(" "),r("ul",[r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/master/src/vue-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/vue-components"),r("OutboundLink")],1)]),e._v(": contains all Vue.js single-file components ("),r("code",[e._v(".vue")]),e._v(" files)")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("index.html"),r("OutboundLink")],1)]),e._v(": contains the HTML for the main Vue wrapper component consisting of the navigation sidebar and a placeholder for the currently show view")]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/vue/mainVue.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/js/vue/mainVue.js"),r("OutboundLink")],1)]),e._v(": Javascript part for the main Vue component in "),r("code",[e._v("index.html")])]),e._v(" "),r("li",[r("strong",[r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/vue/vuePluginManager.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/js/vue/vuePluginManager.js"),r("OutboundLink")],1)]),e._v(": defines custom Vue directives and filters that can be used globally, e.g. a "),r("RouterLink",{attrs:{to:"/develop/asterics-grid/07_i18n.html#vuejs-filter"}},[e._v("translate filter")]),e._v(".")],1)]),e._v(" "),r("h2",{attrs:{id:"component-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-structure"}},[e._v("#")]),e._v(" Component structure")]),e._v(" "),r("p",[e._v("The main Vue wrapper component is defined in "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("index.html"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/vue/mainVue.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainVue.js"),r("OutboundLink")],1),e._v(". This line in "),r("code",[e._v("index.html")]),e._v(" is a placeholder for the currently shown view of the application:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('<component v-if="component" v-bind:is="component" v-bind="properties" :key="componentKey"></component>\n')])])]),r("p",[e._v("The method "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/vue/mainVue.js",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("MainVue.setViewComponent()")]),r("OutboundLink")],1),e._v(" is used in order to change the currently shown view. This method is primarily used by "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/router.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("router.js"),r("OutboundLink")],1),e._v(" which chooses the correct view based on the current "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Fragment_identifier",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL hash"),r("OutboundLink")],1),e._v(" in the address. For instance "),r("code",[e._v("https://grid.asterics.eu/#grids")]),e._v(" has the hash "),r("code",[e._v("#grids")]),e._v(" and therefore will render the "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#manage-grids-view"}},[e._v("manage grids")]),e._v(" component which is defined in file "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/vue-components/views/allGridsView.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("allGridsView.vue"),r("OutboundLink")],1),e._v(".")],1),e._v(" "),r("p",[e._v("Figure 1 highlights the Vue.js components that are used for the main view:")]),e._v(" "),r("p",[r("img",{attrs:{src:n(3448),alt:""}}),e._v(" "),r("em",[e._v("Fig. 1: Vue component structure of the main view, red part is replaced depending on the current navigation")])]),e._v(" "),r("h2",{attrs:{id:"used-components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#used-components"}},[e._v("#")]),e._v(" Used components")]),e._v(" "),r("p",[e._v("The used Vue components can be found in the folder "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/tree/master/src/vue-components",target:"_blank",rel:"noopener noreferrer"}},[e._v("src/vue-components"),r("OutboundLink")],1),e._v(" which contains the following folders:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("components")]),e._v(": generic components that can be used in various places across the application:\n"),r("ul",[r("li",[r("strong",[e._v("comparisonComponent.vue")]),e._v(": accordion component showing a comparison between online and offline users (information only)")]),e._v(" "),r("li",[r("strong",[e._v("headerIcon.vue")]),e._v(": component used in the header of different views which shows a hamburger menu and the AsTeRICS Grid logo")])])]),e._v(" "),r("li",[r("strong",[e._v("modals")]),e._v(": contains all kinds of modals (popup dialogs):\n"),r("ul",[r("li",[r("strong",[e._v("addMultipleModal.vue")]),e._v(": modal for importing multiple new grid elements at once, used in "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#edit-view"}},[e._v("edit view")])],1),e._v(" "),r("li",[r("strong",[e._v("editActionsModal.vue")]),e._v(": action edit modal for a grid element, see chapter "),r("RouterLink",{attrs:{to:"/develop/documentation_user/05_actions.html#edit-actions-modal"}},[e._v("Actions")]),e._v(" chapter in user documentation. The file "),r("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/vue-components/modals/editActionsSub/editAREAction.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("editAREAction.vue"),r("OutboundLink")],1),e._v(" is a sub-component of this modal containing the configuration of an "),r("RouterLink",{attrs:{to:"/develop/documentation_user/05_actions.html#asterics-action"}},[e._v("AsTeRICS action")]),e._v(".")],1),e._v(" "),r("li",[r("strong",[e._v("editGridModal.vue")]),e._v(": edit modal for a grid element (label and image), see chapter "),r("RouterLink",{attrs:{to:"/develop/documentation_user/03_appearance_layout.html#edit-modal"}},[e._v("Grid appearance and layout")]),e._v(" in user documentation")],1),e._v(" "),r("li",[r("strong",[e._v("importDictionaryModal.vue")]),e._v(": modal for importing new words to a dictionary, see chapter "),r("RouterLink",{attrs:{to:"/develop/documentation_user/07_dictionaries.html#add-words"}},[e._v("Dictionaries")]),e._v(" in user documentation")],1),e._v(" "),r("li",[r("strong",[e._v("inputOptionsModal.vue")]),e._v(": modal for setting input options like e.g. scanning, see chapter "),r("RouterLink",{attrs:{to:"/develop/documentation_user/04_input_options.html"}},[e._v("Input Options")]),e._v(" in user documentation")],1)])]),e._v(" "),r("li",[r("strong",[e._v("views")]),e._v(": contains different views which are rendered into the component placeholder described in "),r("RouterLink",{attrs:{to:"/develop/asterics-grid/04_vuejs.html#component-structure"}},[e._v("component structure")]),e._v(":\n"),r("ul",[r("li",[r("strong",[e._v("aboutView.vue")]),e._v(": view containing general information about AsTeRICS Grid")]),e._v(" "),r("li",[r("strong",[e._v("addOfflineView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/06_users.html#offline-users"}},[e._v("Offline users")])],1),e._v(" "),r("li",[r("strong",[e._v("allGridsView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#manage-grids-view"}},[e._v("Manage grids view")])],1),e._v(" "),r("li",[r("strong",[e._v("dictionariesView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#manage-dictionaries-view"}},[e._v("Manage dictionaries view")])],1),e._v(" "),r("li",[r("strong",[e._v("gridEditView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#edit-view"}},[e._v("Edit view")])],1),e._v(" "),r("li",[r("strong",[e._v("gridView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#main-view"}},[e._v("Main view")])],1),e._v(" "),r("li",[r("strong",[e._v("loginView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#change-user-view"}},[e._v("Change user view")])],1),e._v(" "),r("li",[r("strong",[e._v("registerView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/06_users.html#online-users"}},[e._v("Online users")])],1),e._v(" "),r("li",[r("strong",[e._v("welcomeView.vue")]),e._v(": see "),r("RouterLink",{attrs:{to:"/develop/documentation_user/02_navigation.html#welcome-view"}})],1)])],1)]),e._v(" "),r("p",[e._v("For general information about the structure and usage of Vue.js components, see the official documentation, for instance "),r("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Component Basics"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/03_grid.html"}},[e._v("← Previous Chapter")]),e._v(" "),r("RouterLink",{attrs:{to:"/develop/asterics-grid/05_datamodel.html"}},[e._v("Next Chapter →")])],1),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=o.exports},3448:function(e,t,n){e.exports=n.p+"assets/img/main.a269c26b.png"}}]);