(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1248:function(t,e,n){"use strict";n.r(e);n(182);var i=n(11),a=(n(28),n(18)),s=n(782),r=n(786),o=n(783),u=n(784),c=n(676),d={name:"JumboTron",props:{id:{type:String,default:"jumbotron"}}},l=n(2),h=Object(l.a)(d,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.id}},[this._t("default",[this._v("Default")])],2)}),[],!1,null,"701b13a1",null).exports,p={name:"Home",components:{Sidebar:r.a,Navbar:s.a,PageEdit:o.a,PageNav:u.a,JumboTron:h},data:function(){return{isSidebarOpen:!1,isMounted:!1,lockJumbotron:!1}},computed:Object(i.a)(Object(i.a)({},Object(a.b)(["settings"])),{},{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(c.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}}),mounted:function(){var t=this;"undefined"!=typeof setTimeout&&setTimeout((function(){t.isMounted=!0}),500),this.$router.afterEach((function(){t.isSidebarOpen=!1}))},beforeMount:function(){this.isMounted=!1},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},toggleSidebarFromNavbar:function(t){this.toggleSidebar(t),this.settings.page.settings.display&&this.$store.commit("hideSettings")},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},f=(n(815),Object(l.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebarFromNavbar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),n("main",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],staticClass:"page"},[n("JumboTron",{class:{mounted:t.isMounted,lock:t.lockJumbotron},attrs:{id:"home-jumbotron"}},[n("Content",{attrs:{"slot-key":"jumbotron"}})],1),t._v(" "),n("Content",{staticClass:"theme-default-content"}),t._v(" "),n("PageEdit"),t._v(" "),n("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1))],1)],1)}),[],!1,null,"5ae9e92a",null));e.default=f.exports},677:function(t,e,n){},678:function(t,e,n){},679:function(t,e,n){},680:function(t,e,n){},699:function(t,e,n){"use strict";var i=n(677);n.n(i).a},700:function(t,e,n){"use strict";var i=n(678);n.n(i).a},701:function(t,e,n){"use strict";var i=n(679);n.n(i).a},702:function(t,e,n){var i=n(34),a=n(20),s=n(29);t.exports=function(t){return"string"==typeof t||!a(t)&&s(t)&&"[object String]"==i(t)}},703:function(t,e){t.exports=function(t){return null==t}},704:function(t,e,n){"use strict";var i=n(680);n.n(i).a},708:function(t,e,n){},783:function(t,e,n){"use strict";n(675);var i={name:"EditorGuide",data:function(){return{path:"/guide/editor.html"}},computed:{target:function(){return this.valid?this.path:"#"},valid:function(){var t=this;return void 0!==this.$site.pages.find((function(e){return e.regularPath===t.path}))}}},a=(n(699),n(2)),s=Object(a.a)(i,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":""}},[e("font-awesome-icon",{staticClass:"icon outbound",attrs:{id:"editor-guide",icon:["fab","markdown"]}})],1)}),[],!1,null,"057ae4f4",null).exports,r={name:"DocsGuide",data:function(){return{path:"/guide/docs.html"}},computed:{target:function(){return this.valid?this.path:"#"},valid:function(){var t=this;return void 0!==this.$site.pages.find((function(e){return e.regularPath===t.path}))}}},o=(n(700),{name:"PageEdit",components:{EditorGuide:s,DocsGuide:Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("router-link",{attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":""}},[e("font-awesome-icon",{staticClass:"icon outbound",attrs:{id:"docs-guide",icon:"info-circle"}})],1)}),[],!1,null,"063a6b76",null).exports},computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}}}),u=(n(701),Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"page-edit"},[t.$page.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.$page.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink"),t._v(" "),n("EditorGuide"),t._v(" "),n("DocsGuide")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+":")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null));e.a=u.exports},784:function(t,e,n){"use strict";var i=n(676),a=n(702),s=n.n(a),r=n(703),o=n.n(r),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return d(c.PREV,this)},next:function(){return d(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return l(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return l(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function d(t,e){var n=e.$themeConfig,a=e.$page,r=e.$route,u=e.$site,c=e.sidebarItems,d=t.resolveLink,l=t.getThemeLinkConfig,h=t.getPageLinkConfig,p=l(n),f=h(a),g=o()(f)?p:f;return!1===g?void 0:s()(g)?Object(i.i)(u.pages,g,r.path):d(a,c)}function l(t,e,n){var i=[];!function t(e,n){for(var i=0,a=e.length;i<a;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var a=0;a<i.length;a++){var s=i[a];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[a+n]}}var h=u,p=(n(704),n(2)),f=Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=f.exports},815:function(t,e,n){"use strict";var i=n(708);n.n(i).a}}]);