(window.webpackJsonp=window.webpackJsonp||[]).push([[11,40],{1014:function(t,e,s){"use strict";s.r(e);var a=s(456),i=s(369),n=s(325),r={name:"Layout",components:{Sidebar:i.default,Navbar:a.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(n.j)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,s=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(s)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},o=s(2),l=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("main",{staticClass:"page"},[t._t("content")],2)],1)}),[],!1,null,null,null);e.default=l.exports},327:function(t,e,s){},329:function(t,e,s){},332:function(t,e,s){"use strict";s.r(e);s(19),s(71);var a=s(348),i=s(346),n=s(325);function r(t,e){if("group"===e.type){const s=e.path&&Object(n.d)(t,e.path),a=e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(n.d)(t,e.path));return s||a}return!1}var o={name:"SidebarLinks",components:{SidebarGroup:a.default,SidebarLink:i.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let s=0;s<e.length;s++){const a=e[s];if(r(t,a))return s}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(n.d)(this.$route,t.regularPath)}}},l=s(2),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(s,a){return e("li",{key:a},["group"===s.type?e("SidebarGroup",{attrs:{item:s,open:a===t.openGroupIndex,collapsable:s.collapsable||s.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(a)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:s}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},338:function(t,e,s){"use strict";s(327)},339:function(t,e,s){},346:function(t,e,s){"use strict";s.r(e);s(19),s(324),s(49),s(71);var a=s(325);function i(t,e,s,a,i){const n={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:a,"sidebar-link":!0}};return i>2&&(n.style={"padding-left":i+"rem"}),t("RouterLink",n,s)}function n(t,e,s,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(a.d)(r,s+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[i(t,s+"#"+e.slug,e.title,u,e.level-1),n(t,e.children,s,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:s,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:d}}){const c=Object(a.d)(r,u.path),p="auto"===u.type?c||u.children.some(t=>Object(a.d)(r,u.basePath+"#"+t.slug)):c,h="external"===u.type?function(t,e,s){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[s,t("OutboundLink")])}(t,u.path,u.title||u.path):i(t,u.path,u.title||u.path,p),b=[e.frontmatter.sidebarDepth,d,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),g=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,n(t,u.children,u.basePath,r,b)];if((p||g)&&u.headers&&!a.c.test(u.path)){return[h,n(t,Object(a.b)(u.headers),u.path,r,b)]}return h}},o=(s(338),s(2)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},347:function(t,e,s){"use strict";s(329)},348:function(t,e,s){"use strict";s.r(e);var a=s(325),i={name:"SidebarGroup",components:{DropdownTransition:s(331).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=s(332).default},methods:{isActive:a.d}},n=(s(347),s(2)),r=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},attrs:{tabindex:"0"},on:{click:function(e){return t.$emit("toggle")},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},361:function(t,e,s){"use strict";s(339)},369:function(t,e,s){"use strict";s.r(e);var a=s(332),i=s(394),n={name:"Sidebar",components:{SidebarLinks:a.default,NavLinks:i.default},props:["items"]},r=(s(361),s(2)),o=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("aside",{staticClass:"sidebar",attrs:{tag:"aside"}},[e("NavLinks",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),t._t("top"),t._v(" "),e("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports}}]);