(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1287:function(t,e,n){"use strict";n.r(e);var a=n(13),i=n(22),s={name:"Home",components:{NavLink:n(729).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},r=(n(842),n(2)),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,a){return n("div",{key:a,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports,u=n(781),l=n(782),c=n(783),d={components:{PageEdit:l.a,PageNav:c.a},props:["sidebarItems"],computed:Object(i.b)(["settings"])},h=Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],staticClass:"page"},[t._t("top"),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,"c1e4f7d2",null).exports,p=n(784),g=n(718),f={name:"Layout",components:{Home:o,Page:h,Sidebar:p.a,Navbar:u.a},data:function(){return{isSidebarOpen:!1}},computed:Object(a.a)(Object(a.a)({},Object(i.b)(["settings"])),{},{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(g.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}}),mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1,t.$store.commit("hideSettings")}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},v=Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}]}):n("Page",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=v.exports},720:function(t,e,n){},721:function(t,e,n){},722:function(t,e,n){},723:function(t,e,n){},724:function(t,e,n){},733:function(t,e,n){"use strict";n(720)},734:function(t,e,n){"use strict";n(721)},735:function(t,e,n){"use strict";n(722)},736:function(t,e,n){"use strict";n(723)},737:function(t,e,n){var a=n(40),i=n(23),s=n(35);t.exports=function(t){return"string"==typeof t||!i(t)&&s(t)&&"[object String]"==a(t)}},738:function(t,e){t.exports=function(t){return null==t}},739:function(t,e,n){"use strict";n(724)},782:function(t,e,n){"use strict";n(717);var a={name:"EditorGuide",data:function(){return{path:"/guide/editor.html"}},computed:{target:function(){return this.valid?this.path:"#"},valid:function(){var t=this;return void 0!==this.$site.pages.find((function(e){return e.regularPath===t.path}))}}},i=(n(733),n(2)),s=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":"",title:"Open Editor Guide"}},[e("font-awesome-icon",{staticClass:"icon outbound",attrs:{id:"editor-guide",icon:["fas","hands-helping"]}})],1)}),[],!1,null,"372c302e",null).exports,r={name:"EditorGuide",data:function(){return{path:"/guide/markdown.html"}},computed:{target:function(){return this.valid?this.path:"#"},valid:function(){var t=this;return void 0!==this.$site.pages.find((function(e){return e.regularPath===t.path}))}}},o=(n(734),Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":"",title:"Open Markdown Guide"}},[e("font-awesome-icon",{staticClass:"icon outbound",attrs:{id:"markdown-guide",icon:["fab","markdown"]}})],1)}),[],!1,null,"a46fcbd6",null).exports),u={name:"DocsGuide",data:function(){return{path:"/guide/docs.html"}},computed:{target:function(){return this.valid?this.path:"#"},valid:function(){var t=this;return void 0!==this.$site.pages.find((function(e){return e.regularPath===t.path}))}}},l=(n(735),{name:"PageEdit",components:{MarkdownGuide:o,EditorGuide:s,DocsGuide:Object(i.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":"",title:"Open AsTeRICS Docs Guide"}},[e("font-awesome-icon",{staticClass:"icon outbound",attrs:{id:"docs-guide",icon:"info-circle"}})],1)}),[],!1,null,"0d23a20a",null).exports},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},editPreambleText:function(){return this.$themeLocaleConfig.editPreambleText||this.$site.themeConfig.editPreambleText||""}}}),c=(n(736),Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.$page.editLink?n("div",{staticClass:"edit-link"},[t.editPreambleText?n("div",{staticClass:"edit-preamble"},[t._v(t._s(t.editPreambleText))]):t._e(),t._v(" "),n("div",{staticClass:"edit-text"},[n("a",{attrs:{href:t.$page.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink"),t._v(" "),n("span",{staticClass:"edit-guides"},[n("EditorGuide"),t._v(" "),n("MarkdownGuide"),t._v(" "),n("DocsGuide")],1)],1)]):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("div",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText))]),t._v(" "),n("div",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null));e.a=c.exports},783:function(t,e,n){"use strict";var a=n(718),i=n(737),s=n.n(i),r=n(738),o=n.n(r),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return c(l.PREV,this)},next:function(){return c(l.NEXT,this)}}};var l={NEXT:{resolveLink:function(t,e){return d(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return d(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function c(t,e){var n=e.$themeConfig,i=e.$page,r=e.$route,u=e.$site,l=e.sidebarItems,c=t.resolveLink,d=t.getThemeLinkConfig,h=t.getPageLinkConfig,p=d(n),g=h(i),f=o()(g)?p:g;return!1===f?void 0:s()(f)?Object(a.i)(u.pages,f,r.path):c(i,l)}function d(t,e,n){var a=[];!function t(e,n){for(var a=0,i=e.length;a<i;a++)"group"===e[a].type?t(e[a].children||[],n):n.push(e[a])}(e,a);for(var i=0;i<a.length;i++){var s=a[i];if("page"===s.type&&s.path===decodeURIComponent(t.path))return a[i+n]}}var h=u,p=(n(739),n(2)),g=Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=g.exports},787:function(t,e,n){},842:function(t,e,n){"use strict";n(787)}}]);