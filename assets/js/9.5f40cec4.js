(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{274:function(t,e,a){},275:function(t,e,a){},281:function(t,e,a){"use strict";a(274)},282:function(t,e,a){var s=a(17),i=a(8),n=a(15);t.exports=function(t){return"string"==typeof t||!i(t)&&n(t)&&"[object String]"==s(t)}},283:function(t,e){t.exports=function(t){return null==t}},284:function(t,e,a){"use strict";a(275)},328:function(t,e,a){"use strict";var s={name:"FancyLink",props:{path:{type:String,required:!0},icon:{type:Array,default:["fas","question"]}},computed:{valid(){return void 0!==this.$site.pages.find(({regularPath:t})=>t===this.path)},target(){return this.valid?this.path:"#"}}},i=a(2),n={name:"PageEdit",components:{FancyLink:Object(i.a)(s,(function(){var t=this._self._c;return t("router-link",{staticClass:"fancy-link",attrs:{to:this.target,target:this.valid?"_blank":"",rel:this.valid?"noopener":""}},[t("font-awesome-icon",{attrs:{icon:this.icon}})],1)}),[],!1,null,"ef03c048",null).exports},computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"},editPreambleText(){return this.$themeLocaleConfig.editPreambleText||this.$site.themeConfig.editPreambleText||""}}},r=(a(281),Object(i.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"page-edit"},[t.$page.editLink?e("div",{staticClass:"edit-link"},[t.editPreambleText?e("div",{staticClass:"edit-preamble"},[t._v(t._s(t.editPreambleText))]):t._e(),t._v(" "),e("div",{staticClass:"edit-text"},[e("a",{attrs:{href:t.$page.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),e("OutboundLink"),t._v(" "),e("span",{staticClass:"edit-guides"},[e("FancyLink",{attrs:{id:"editor-guide",path:"/guide/editor.html",icon:["fas","pencil-alt"],title:"Open Website Editor Guide"}}),t._v(" "),e("FancyLink",{attrs:{id:"markdown-guide",path:"/guide/markdown.html",icon:["fab","markdown"],title:"Open Website Markdown Guide"}}),t._v(" "),e("FancyLink",{attrs:{id:"developer-guide",path:"/guide/docs.html",icon:["fas","info-circle"],title:"Open Website Developer Guide"}})],1)],1)]):t._e(),t._v(" "),t.lastUpdated?e("div",{staticClass:"last-updated"},[e("div",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText))]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()])}),[],!1,null,null,null));e.a=r.exports},329:function(t,e,a){"use strict";a(109);var s=a(272),i=a(282),n=a.n(i),r=a(283),o=a.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return c(d.PREV,this)},next(){return c(d.NEXT,this)}}};const d={NEXT:{resolveLink:function(t,e){return p(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return p(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function c(t,{$themeConfig:e,$page:a,$route:i,$site:r,sidebarItems:l}){const{resolveLink:d,getThemeLinkConfig:c,getPageLinkConfig:p}=t,u=c(e),h=p(a),g=o()(h)?u:h;return!1===g?void 0:n()(g)?Object(s.i)(r.pages,g,i.path):d(a,l)}function p(t,e,a){const s=[];!function t(e,a){for(let s=0,i=e.length;s<i;s++)"group"===e[s].type?t(e[s].children||[],a):a.push(e[s])}(e,s);for(let e=0;e<s.length;e++){const i=s[e];if("page"===i.type&&i.path===decodeURIComponent(t.path))return s[e+a]}}var u=l,h=(a(284),a(2)),g=Object(h.a)(u,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=g.exports},332:function(t,e,a){},384:function(t,e,a){"use strict";a(332)},838:function(t,e,a){"use strict";a.r(e);var s=a(7),i={name:"Home",components:{NavLink:a(280).a},computed:{data(){return this.$page.frontmatter},actionLink(){return{link:this.data.actionLink,text:this.data.actionText}}}},n=(a(384),a(2)),r=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[e("header",{staticClass:"hero"},[t.data.heroImage?e("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?e("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(a,s){return e("div",{key:s,staticClass:"feature"},[e("h2",[t._v(t._s(a.title))]),t._v(" "),e("p",[t._v(t._s(a.details))])])})),0):t._e(),t._v(" "),e("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):e("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,o=a(327),l=a(328),d=a(329),c={components:{PageEdit:l.a,PageNav:d.a},props:["sidebarItems"],computed:Object(s.b)(["settings"])},p=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("main",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],staticClass:"page"},[t._t("top"),t._v(" "),e("Content",{staticClass:"theme-default-content"}),t._v(" "),e("PageEdit"),t._v(" "),e("PageNav",t._b({},"PageNav",{sidebarItems:t.sidebarItems},!1)),t._v(" "),t._t("bottom")],2)}),[],!1,null,"c1e4f7d2",null).exports,u=a(330),h=a(272),g={name:"Layout",components:{Home:r,Page:p,Sidebar:u.a,Navbar:o.a},data:()=>({isSidebarOpen:!1}),computed:{...Object(s.b)(["settings"]),shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(h.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1,this.$store.commit("hideSettings")})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},v=Object(n.a)(g,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?e("Home",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}]}):e("Page",{directives:[{name:"show",rawName:"v-show",value:!t.settings.page.settings.display,expression:"!settings.page.settings.display"}],attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=v.exports}}]);