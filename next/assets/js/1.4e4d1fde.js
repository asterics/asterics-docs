(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1920:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"b",(function(){return g})),n.d(e,"h",(function(){return v}));n(27),n(109),n(174),n(2076),n(177),n(78),n(26),n(1939),n(77),n(179),n(111);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=a(t);return o.test(i)?t:i+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var o=t.replace(/^\//,"").split("/"),s=0;s<o.length;s++){var a=o[s];".."===a?i.pop():"."!==a&&i.push(a)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=a(e),i=0;i<t.length;i++)if(a(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,r){var i=n.pages,o=n.themeConfig,s=r&&o.locales&&o.locales[r]||o;if("auto"===(t.frontmatter.sidebar||s.sidebar||o.sidebar))return function(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}(t);var a=s.sidebar||o.sidebar;if(a){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,a),c=u.base,l=u.config;return l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});var o=e.children||[];return 0===o.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:o.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},1937:function(t,e,n){"use strict";n(173),n(110),n(2075);var r=n(1920),i={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(r.a)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(r.f)(this.link)||Object(r.g)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(r.e)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(r.e)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":""}},methods:{focusoutAction:function(){this.$emit("focusout")}}},o=n(2),s=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction(e)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},1939:function(t,e,n){"use strict";var r=n(82),i=n(11),o=n(13),s=n(18),a=n(117),u=n(83);r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=null==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return u(s,c);var l=s.unicode;s.lastIndex=0;for(var f,h=[],p=0;null!==(f=u(s,c));){var d=String(f[0]);h[p]=d,""===d&&(s.lastIndex=a(c,o(s.lastIndex),l)),p++}return 0===p?null:h}]}))},1941:function(t,e,n){var r=n(9),i=n(6),o=n(113),s=n(187),a=n(10).f,u=n(52).f,c=n(115),l=n(176),f=n(183),h=n(24),p=n(5),d=n(50).set,g=n(2095),v=n(4)("match"),m=i.RegExp,b=m.prototype,y=/a/g,x=/a/g,k=new m(y)!==y,w=f.UNSUPPORTED_Y;if(r&&o("RegExp",!k||w||p((function(){return x[v]=!1,m(y)!=y||m(x)==x||"/a/i"!=m(y,"i")})))){for(var _=function(t,e){var n,r=this instanceof _,i=c(t),o=void 0===e;if(!r&&i&&t.constructor===_&&o)return t;k?i&&!o&&(t=t.source):t instanceof _&&(o&&(e=l.call(t)),t=t.source),w&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=s(k?new m(t,e):m(t,e),r?this:b,_);return w&&n&&d(a,{sticky:n}),a},O=function(t){t in _||a(_,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},I=u(m),S=0;I.length>S;)O(I[S++]);b.constructor=_,_.prototype=b,h(i,"RegExp",_)}g("RegExp")},1942:function(t,e,n){"use strict";var r=n(24),i=n(11),o=n(5),s=n(176),a=RegExp.prototype,u=a.toString,c=o((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l="toString"!=u.name;(c||l)&&r(RegExp.prototype,"toString",(function(){var t=i(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in a)?s.call(t):n)}),{unsafe:!0})},1943:function(t,e,n){},1944:function(t,e,n){},1945:function(t,e,n){},1947:function(t,e,n){},1960:function(t,e,n){},2071:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(2099),n(2)),o=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=o.exports},2075:function(t,e,n){"use strict";var r=n(3),i=n(2088);r({target:"String",proto:!0,forced:n(2089)("link")},{link:function(t){return i(this,"a","href",t)}})},2076:function(t,e,n){n(3)({target:"Array",stat:!0},{isArray:n(36)})},2077:function(t,e,n){"use strict";var r=n(3),i=n(180).trim;r({target:"String",proto:!0,forced:n(2094)("trim")},{trim:function(){return i(this)}})},2086:function(t,e,n){"use strict";n.r(e);n(173);var r=n(4009),i=(n(170),n(78),n(1920));function o(t,e,n,r,i){var o={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(o.style={"padding-left":i+"rem"}),t("RouterLink",o,n)}function s(t,e,n,r,a){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>a?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.d)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c,e.level-1),s(t,e.children,n,r,a,u+1)])})))}var a={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,a=(n.$site,n.$route),u=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(i.d)(a,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.d)(a,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),v=[r.frontmatter.sidebarDepth,h,c.sidebarDepth,u.sidebarDepth,1].find((function(t){return void 0!==t})),m=c.displayAllHeaders||u.displayAllHeaders;return"auto"===f.type?[g,s(t,f.children,f.basePath,a,v)]:(d||m)&&f.headers&&!i.c.test(f.path)?[g,s(t,Object(i.b)(f.headers),f.path,a,v)]:g}},u=(n(2109),n(2)),c=Object(u.a)(a,void 0,void 0,!1,null,null,null).exports;function l(t,e){return"group"===e.type&&e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.d)(t,e.path)}))}var f={name:"SidebarLinks",components:{SidebarGroup:r.a,SidebarLink:c},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.d)(this.$route,t.regularPath)}}},h=Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},2088:function(t,e,n){var r=n(18),i=/"/g;t.exports=function(t,e,n,o){var s=String(r(t)),a="<"+e;return""!==n&&(a+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+s+"</"+e+">"}},2089:function(t,e,n){var r=n(5);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},2091:function(t,e,n){var r=n(3),i=n(2092);r({global:!0,forced:parseInt!=i},{parseInt:i})},2092:function(t,e,n){var r=n(6),i=n(180).trim,o=n(181),s=r.parseInt,a=/^[+-]?0[Xx]/,u=8!==s(o+"08")||22!==s(o+"0x16");t.exports=u?function(t,e){var n=i(String(t));return s(n,e>>>0||(a.test(n)?16:10))}:s},2093:function(t,e,n){"use strict";e.a={}},2094:function(t,e,n){var r=n(5),i=n(181);t.exports=function(t){return r((function(){return!!i[t]()||"​᠎"!="​᠎"[t]()||i[t].name!==t}))}},2095:function(t,e,n){"use strict";var r=n(51),i=n(10),o=n(4),s=n(9),a=o("species");t.exports=function(t){var e=r(t),n=i.f;s&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},2096:function(t,e,n){"use strict";var r,i=n(3),o=n(30).f,s=n(13),a=n(114),u=n(18),c=n(116),l=n(35),f="".endsWith,h=Math.min,p=c("endsWith");i({target:"String",proto:!0,forced:!!(l||p||(r=o(String.prototype,"endsWith"),!r||r.writable))&&!p},{endsWith:function(t){var e=String(u(this));a(t);var n=arguments.length>1?arguments[1]:void 0,r=s(e.length),i=void 0===n?r:h(s(n),r),o=String(t);return f?f.call(e,o,i):e.slice(i-o.length,i)===o}})},2097:function(t,e,n){"use strict";var r=n(1943);n.n(r).a},2098:function(t,e,n){"use strict";var r=n(1944);n.n(r).a},2099:function(t,e,n){"use strict";var r=n(1945);n.n(r).a},2101:function(t,e,n){"use strict";var r=n(1947);n.n(r).a},2103:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(62);function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(r.a)(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o,s=!0,a=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return s=t.done,t},e:function(t){a=!0,o=t},f:function(){try{s||null==i.return||i.return()}finally{if(a)throw o}}}}},2109:function(t,e,n){"use strict";var r=n(1960);n.n(r).a},4007:function(t,e,n){"use strict";n(27),n(171),n(174),n(2076),n(26),n(172),n(1939),n(2077),n(177),n(78),n(173),n(1941),n(1942),n(2096),n(77),n(179);var r=n(184),i=n.n(r),o=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=i()(e,"title","");return i()(e,"frontmatter.tags")&&(r+=" ".concat(e.frontmatter.tags.join(" "))),n&&(r+=" ".concat(n)),s(t,r)},s=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},r=new RegExp("[^\0-]"),i=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(r.test(t))return i.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var o=t.endsWith(" ");return new RegExp(i.map((function(t,e){return i.length!==e+1||o?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,r=this.$localePath,i=[],s=0;s<e.length&&!(i.length>=n);s++){var a=e[s];if(this.getPageLocalePath(a)===r&&this.isSearchable(a))if(o(t,a))i.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(i.length>=n);u++){var c=a.headers[u];c.title&&o(t,a,c.title)&&i.push(Object.assign({},a,{path:a.path+"#"+c.slug,header:c}))}}return i}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=["/","/3.0.1/","/3.0/","/2.8/","/2.7/","/2.6/","/2.5/","/2.3/"];return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(2097),n(2)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,r){return n("li",{key:r,staticClass:"suggestion",class:{focused:r===t.focusIndex},on:{mousedown:function(e){return t.go(r)},mouseenter:function(e){return t.focus(r)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null);e.a=c.exports},4008:function(t,e,n){"use strict";var r=n(1937),i=n(2071),o=n(178),s=n.n(o),a={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:i.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return s()(e)===t}}},u=(n(2101),n(2)),c=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,r){return n("li",{key:e.link||r,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(r){return n("li",{key:r.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:r},on:{focusout:function(n){t.isLastItemOfArray(r,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null);e.a=c.exports},4010:function(t,e,n){"use strict";n(2098);var r=n(2),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=i.exports}}]);