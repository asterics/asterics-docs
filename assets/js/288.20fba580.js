(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{773:function(e,t,i){"use strict";i.r(t);var a=i(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"internationalization"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#internationalization"}},[e._v("#")]),e._v(" Internationalization")]),e._v(" "),i("p",[e._v("This chapter is about internationalization (translation of elements) in AsTeRICS Grid which can be done in three ways:")]),e._v(" "),i("ol",[i("li",[i("router-link",{attrs:{to:"/develop/asterics-grid/07_i18n.html#dom-i18n"}},[e._v("dom-i18n")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/develop/asterics-grid/07_i18n.html#i18nservicejs"}},[e._v("i18nService.js")])],1),e._v(" "),i("li",[i("router-link",{attrs:{to:"/develop/asterics-grid/07_i18n.html#vuejs-filter"}},[e._v("Vue.js filter")])],1)]),e._v(" "),i("p",[i("router-link",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),i("h2",{attrs:{id:"dom-i18n"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#dom-i18n"}},[e._v("#")]),e._v(" dom-i18n")]),e._v(" "),i("p",[e._v("The library "),i("a",{attrs:{href:"https://github.com/ruyadorno/dom-i18n",target:"_blank",rel:"noopener noreferrer"}},[e._v("dom-i18n"),i("OutboundLink")],1),e._v(" provides an very easy to use possibility for adding translations to an HTML site. Wherever possible it’s used within AsTeRICS Grid. The file "),i("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/vue-components/views/aboutView.vue",target:"_blank",rel:"noopener noreferrer"}},[e._v("aboutView.vue"),i("OutboundLink")],1),e._v(" shows it’s usage within a Vue component:")]),e._v(" "),i("ol",[i("li",[e._v("Usage within HTML: "),i("code",[e._v('<h2 data-i18n="">About AsTeRICS Grid // Über das AsTeRICS Grid</h2>')]),e._v(" "),i("ul",[i("li",[e._v("property "),i("code",[e._v("data-i18n")]),e._v(" on an HTML element indicates that the content of this "),i("code",[e._v("h2")]),e._v(" tag is internationalized")]),e._v(" "),i("li",[e._v("content in different languages is placed directly within the HTML element, separated by "),i("code",[e._v("//")])]),e._v(" "),i("li",[e._v("first language is English, second German")])])]),e._v(" "),i("li",[e._v("For displaying only the content of the correct language, in the Javascript part of the component this code has to be executed (see "),i("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/vue-components/views/aboutView.vue#L88",target:"_blank",rel:"noopener noreferrer"}},[e._v("aboutView.vue:88"),i("OutboundLink")],1),e._v("):"),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("mounted() {\n    i18nService.initDomI18n();\n}\n")])])]),i("ul",[i("li",[e._v("the "),i("code",[e._v("mounted()")]),e._v(" function is called by Vue.js after initialization of the component")]),e._v(" "),i("li",[i("code",[e._v("i18nService.initDomI18n()")]),e._v(" initializes the dom-i18n library for this component, showing only the translations of correct language")]),e._v(" "),i("li",[e._v("if it’s a dynamic Vue.js component it’s maybe necessary to call "),i("code",[e._v("i18nService.initDomI18n()")]),e._v(" also in the Vue.js "),i("code",[e._v("updated()")]),e._v(" method which is called after each view update")])])])]),e._v(" "),i("p",[e._v("The dom-i18n library is initialized in "),i("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/service/i18nService.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("i18nService.js"),i("OutboundLink")],1),e._v(". There it would be possible to add additional languages by adding it to the "),i("code",[e._v("language")]),e._v(" property within the "),i("code",[e._v("i18nService.initDomI18n()")]),e._v(" method.")]),e._v(" "),i("h2",{attrs:{id:"i18nservice-js"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#i18nservice-js"}},[e._v("#")]),e._v(" i18nService.js")]),e._v(" "),i("p",[e._v("If a translation is needed in a piece of Javascript code, the method "),i("code",[e._v("i18nService.translate(key)")]),e._v(" can be used. The "),i("code",[e._v("key")]),e._v(" property to pass and it’s translations are also defined in "),i("code",[e._v("i18nService")]),e._v(". It’s also possible to pass parameters to the "),i("code",[e._v("translate")]),e._v(" method which are inserted in "),i("code",[e._v("{?}")]),e._v(" placeholders in the translated strings.")]),e._v(" "),i("h3",{attrs:{id:"usage-example"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#usage-example"}},[e._v("#")]),e._v(" Usage example")]),e._v(" "),i("p",[e._v("In order to ask the user a translated question with parameter this code can be used:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("if (confirm(i18nService.translate('CONFIRM_DELETE_GRID', 'My grid'))) {\n    // delete grid\n}\n")])])]),i("p",[e._v("These could be the defined translations within "),i("code",[e._v("i18nService.js")]),e._v(":")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v("i18nService.translations['en']['CONFIRM_DELETE_GRID'] = 'Do you really want to delete the grid \"{?}\"?'\ni18nService.translations['de']['CONFIRM_DELETE_GRID'] = 'Möchten Sie das Grid \"{?}\" wirklich löschen?'\n")])])]),i("p",[e._v("The result will be a confirmation dialog containing:")]),e._v(" "),i("ul",[i("li",[e._v("non-german browser setting: "),i("em",[e._v("Do you really want to delete the grid “My grid”?")])]),e._v(" "),i("li",[e._v("german browser setting: "),i("em",[e._v("Möchten Sie das Grid “My grid” wirklich löschen?")])])]),e._v(" "),i("h2",{attrs:{id:"vue-js-filter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#vue-js-filter"}},[e._v("#")]),e._v(" Vue.js filter")]),e._v(" "),i("p",[e._v("There is also an implemented Vue.js filter for translation which uses the "),i("code",[e._v("i18nService.translate()")]),e._v(" method. It’s implemented in "),i("a",{attrs:{href:"https://github.com/asterics/AsTeRICS-Grid/blob/master/src/js/vue/vuePluginManager.js#L39",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuePluginManager.js#initFilters()"),i("OutboundLink")],1),e._v(". General usage is a pipe within any double curly braces expression, for instance "),i("code",[e._v(e._s(e._f("translate")(e.variableToTranslate)))]),e._v(". A real use-case could look like this:")]),e._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[e._v('<li v-for="action in gridElement.actions">\n    <span>{{action.modelName | translate}}</span>\n</li>\n')])])]),i("p",[e._v("This piece of Vue.js code iterates over the array "),i("code",[e._v("actions")]),e._v(" of the object "),i("code",[e._v("gridElement")]),e._v(" and generates a "),i("code",[e._v("span")]),e._v(" with a translated version of the "),i("code",[e._v("modelName")]),e._v(" of each action as content.")]),e._v(" "),i("p",[i("router-link",{attrs:{to:"/develop/asterics-grid/06_data_storage.html"}},[e._v("← Previous Chapter")]),e._v(" "),i("a",{attrs:{href:""}},[e._v("Next Chapter →")])],1),e._v(" "),i("p",[i("router-link",{attrs:{to:"/develop/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);