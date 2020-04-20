(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1841:function(t,e,n){},1842:function(t,e,n){},1858:function(t,e,n){"use strict";n(148),n(65),n(147),n(91),n(1854),n(42),n(1855),n(1857),n(64);var i=n(38),a=n(1852),s=n(1840),o=n(1853);n(22),n(1865),n(149),n(152),n(150),n(153),n(1859);function r(t){return c(t).length>1}function l(t){var e,n,i,a,s=(n=(e=t).$themeConfig,i=e.$route,(a=n.versions).reduce((function(t,e){return i.path.startsWith("/"+e)?e:t}),a[0]||"latest")),o=c(t);return r(t)?{text:s,items:o}:{link:o[0].link,text:s,type:"link"}}function c(t){var e=t.$themeConfig,n=t.$site.pages.map((function(t){return t.path})),i=function(t){var e=t.$themeConfig,n=t.$route,i=e.versions,a=n.path,s="/"+(i.find((function(t,e){return 0!==e&&a.startsWith("/"+t)}))||"");return"/"===s?a:a.replace(new RegExp("^".concat(s)),"")}(t);return e.versions.map((function(t,e){return 0===e?{text:t,link:i}:{text:t,link:"/"+t+i}})).filter((function(t){var e=t.link;return n.includes(e)}))}var u={name:"VersionLinks",components:{NavLink:o.a,DropdownLink:a.a},data:function(){return{versions:null,selected:null}},watch:{$route:function(){this.versions=l(this)}},computed:{hasVersions:function(){return r(this)}},created:function(){this.versions=l(this)}},h=n(21),d=Object(h.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"version-links"},[this.hasVersions?e("DropdownLink",{attrs:{item:this.versions}}):e("NavLink",{attrs:{item:this.versions}})],1)}),[],!1,null,null,null).exports,f={name:"SettingsButton",methods:{onClick:function(){this.$store.commit("toggleSettingsDisplay")}}},g=(n(1866),Object(h.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"settings-button",on:{click:this.onClick}},[e("span",{attrs:{id:"settings-label"}},[this._v("Settings")]),this._v(" "),e("font-awesome-icon",{attrs:{id:"settings-icon",icon:"cog"}})],1)}),[],!1,null,"3c4e242c",null).exports),p=(n(66),n(39)),m=n(1912),v={name:"GoogleTranslate",components:{DropdownLink:a.a},data:function(){return{items:null,favorites:null}},methods:{loadTranslationLinks:function(t){if(void 0!==this.$themeConfig.translate){var e,n=this.getSourceLanguage(),i="EN",a=[],s=Object(m.a)(this.$themeConfig.translate.codes);try{for(s.s();!(e=s.n()).done;){var o=Object(p.a)(e.value,3),r=o[0],l=o[1],c=o[2];r===n?i=l.toUpperCase():a.push({text:c,link:this.generateLink(this.isConfigured()?n:"auto",r,t)})}}catch(t){s.e(t)}finally{s.f()}var u=this.$themeConfig.translate.favorites;this.items=u?{text:i,items:[{items:a.slice(0,u.length-1),type:"links"},{items:a.slice(u.length-1,a.length),type:"links"}]}:{text:i,items:a}}},generateLink:function(t,e,n){var i=encodeURIComponent(n.replace(/http\:\/\/localhost(\:\d+)?\//,"https://www.asterics.eu/"));return"".concat("https://translate.google.com/translate","?sl=").concat(t,"&tl=").concat(e,"&u=").concat(i)},isConfigured:function(){return this.$page.frontmatter&&this.$page.frontmatter.lang},getSourceLanguage:function(){return this.isConfigured()?this.$page.frontmatter.lang:"en"}},watch:{$route:function(t,e){this.loadTranslationLinks(window.location.href)}},created:function(){this.loadTranslationLinks(window.location.href)}},b=Object(h.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"google-translate"},[e("DropdownLink",{attrs:{item:this.items}})],1)}),[],!1,null,"41d64711",null).exports,k={name:"NavLinks",components:{NavLink:o.a,DropdownLink:a.a,VersionLinks:d,SettingsButton:g,GoogleTranslate:b},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,a=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var o,r=e[i],l=s[i]&&s[i].label||r.lang;return r.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),a.some((function(t){return t.path===o}))||(o=i)),{text:l,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(s.j)(t),{items:(t.items||[]).map(s.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},$=(n(1867),Object(h.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e(),t._v(" "),n("span",{staticClass:"nav-addon"},[n("SettingsButton",{staticClass:"nav-item"}),t._v(" "),n("VersionLinks",{staticClass:"nav-item"}),t._v(" "),n("ClientOnly",[n("GoogleTranslate",{staticClass:"nav-item"})],1)],1)],2):t._e()}),[],!1,null,null,null));e.a=$.exports},1866:function(t,e,n){"use strict";var i=n(1841);n.n(i).a},1867:function(t,e,n){"use strict";var i=n(1842);n.n(i).a},1879:function(t,e,n){},1880:function(t,e,n){},1944:function(t,e,n){"use strict";var i=n(1879);n.n(i).a},1945:function(t,e,n){"use strict";var i=n(1880);n.n(i).a},3856:function(t,e,n){"use strict";n.r(e);n(1909);var i=n(1910),a=n(1915),s=n(1919),o=n(1858);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:s.a,NavLinks:o.a,SearchBox:a.a,AlgoliaSearchBox:i.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},c=(n(1944),n(21)),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null).exports,h=n(1917),d=(n(42),n(64),n(1913)),f=n.n(d),g=n(1840),p={name:"PageEdit",computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink:function(){var t=f()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,e=this.$site.themeConfig,n=e.repo,i=e.docsDir,a=void 0===i?"":i,s=e.docsBranch,o=void 0===s?"master":s,r=e.docsRepo,l=void 0===r?n:r;return t&&l&&this.$page.relativePath?this.createEditLink(n,l,a,o,this.$page.relativePath):null},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,a){return/bitbucket.org/.test(t)?(g.i.test(e)?e:t).replace(g.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(g.a,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(g.i.test(e)?e:"https://github.com/".concat(e)).replace(g.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(g.a,"")+"/":"")+a}}},m=(n(1945),Object(c.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null).exports),v={components:{Navbar:u,Sidebar:h.a,PageEdit:m},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(g.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},b=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),n("div",{staticClass:"page"},[t._t("content"),t._v(" "),n("PageEdit")],2)],1)}),[],!1,null,null,null);e.default=b.exports}}]);