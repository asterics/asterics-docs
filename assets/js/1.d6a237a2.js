(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{724:function(t,e,n){"use strict";var i=n(2),r=n(44).find,s=n(123),a=!0;"find"in[]&&Array(1).find((function(){a=!1})),i({target:"Array",proto:!0,forced:a},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("find")},725:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"g",(function(){return c})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"j",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"h",(function(){return v}));n(36),n(87),n(734),n(213),n(212),n(88),n(89),n(90),n(28),n(124),n(209);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^[a-z]+:/i;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),a=0;a<s.length;a++){var o=s[a];".."===o?r.pop():"."!==o&&r.push(o)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=o(e),r=0;r<t.length;r++)if(o(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,i){var r=n.pages,s=n.themeConfig,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return g(t);var o=a.sidebar||s.sidebar;if(o){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(i=t,/(\.html|\/)$/.test(i)?i:i+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var i;return{}}(e,o),l=u.base,c=u.config;return"auto"===c?g(t):c?c.map((function(t){return function t(e,n,i){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,i);if(Array.isArray(e))return Object.assign(p(n,e[0],i),{title:e[1]});var s=e.children||[];return 0===s.length&&e.path?Object.assign(p(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:s.map((function(e){return t(e,n,i,r+1)})),collapsable:!1!==e.collapsable}}(t,r,l)})):[]}return[]}function g(t){var e=m(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function m(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},733:function(t,e,n){"use strict";n(787),n(208),n(92);var i=n(725),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.a)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.f)(this.link)||Object(i.g)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.e)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.e)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(3),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=a.exports},734:function(t,e,n){"use strict";var i=n(94),r=n(8),s=n(17),a=n(20),o=n(24),u=n(39),l=n(131),c=n(95);i("match",(function(t,e,n){return[function(e){var n=o(this),i=null==e?void 0:u(e,t);return i?i.call(e,n):new RegExp(e)[t](a(n))},function(t){var i=r(this),o=a(t),u=n(e,i,o);if(u.done)return u.value;if(!i.global)return c(i,o);var f=i.unicode;i.lastIndex=0;for(var h,p=[],d=0;null!==(h=c(i,o));){var g=a(h[0]);p[d]=g,""===g&&(i.lastIndex=l(o,s(i.lastIndex),f)),d++}return 0===d?null:p}]}))},735:function(t,e,n){var i=n(10),r=n(5),s=n(93),a=n(224),o=n(33),u=n(13).f,l=n(48).f,c=n(128),f=n(20),h=n(211),p=n(130),d=n(18),g=n(4),m=n(12),v=n(40).enforce,b=n(217),k=n(6),x=n(218),y=n(219),w=k("match"),_=r.RegExp,$=_.prototype,C=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,L=/a/g,O=/a/g,S=new _(L)!==L,I=p.UNSUPPORTED_Y,j=i&&(!S||I||x||y||g((function(){return O[w]=!1,_(L)!=L||_(O)==O||"/a/i"!=_(L,"i")})));if(s("RegExp",j)){for(var A=function(t,e){var n,i,r,s,u,l,p=this instanceof A,d=c(t),g=void 0===e,b=[],k=t;if(!p&&d&&g&&t.constructor===A)return t;if((d||t instanceof A)&&(t=t.source,g&&(e="flags"in k?k.flags:h.call(k))),t=void 0===t?"":f(t),e=void 0===e?"":f(e),k=t,x&&"dotAll"in L&&(i=!!e&&e.indexOf("s")>-1)&&(e=e.replace(/s/g,"")),n=e,I&&"sticky"in L&&(r=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,"")),y&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],a={},o=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=t.charAt(i)))e+=t.charAt(++i);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:C.test(t.slice(i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||m(a,c))throw new SyntaxError("Invalid capture group name");a[c]=!0,s.push([c,l]),u=!1,c="";continue}u?c+=e:r+=e}return[r,s]}(t))[0],b=s[1]),u=a(_(t,e),p?this:$,A),(i||r||b.length)&&(l=v(u),i&&(l.dotAll=!0,l.raw=A(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=t.charAt(i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+t.charAt(++i);return r}(t),n)),r&&(l.sticky=!0),b.length&&(l.groups=b)),t!==k)try{o(u,"source",""===k?"(?:)":k)}catch(t){}return u},E=function(t){t in A||u(A,t,{configurable:!0,get:function(){return _[t]},set:function(e){_[t]=e}})},R=l(_),D=0;R.length>D;)E(R[D++]);$.constructor=A,A.prototype=$,d(r,"RegExp",A)}b("RegExp")},736:function(t,e,n){"use strict";var i=n(91).PROPER,r=n(18),s=n(8),a=n(20),o=n(4),u=n(211),l=RegExp.prototype,c=l.toString,f=o((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),h=i&&"toString"!=c.name;(f||h)&&r(RegExp.prototype,"toString",(function(){var t=s(this),e=a(t.source),n=t.flags;return"/"+e+"/"+a(void 0===n&&t instanceof RegExp&&!("flags"in l)?u.call(t):n)}),{unsafe:!0})},782:function(t,e,n){"use strict";n(844),n(789),n(209),n(124),n(28),n(36),n(734),n(206),n(207),n(212),n(87),n(735),n(736),n(88),n(213),n(847),n(208);var i=n(220),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),a(t,i)},a=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},o={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||10,i=this.$localePath,r=[],a=0;a<e.length&&!(r.length>=n);a++){var o=e[a];if(this.getPageLocalePath(o)===i&&this.isSearchable(o))if(s(t,o))r.push(o);else if(o.headers)for(var u=0;u<o.headers.length&&!(r.length>=n);u++){var l=o.headers[u];l.title&&s(t,o,l.title)&&r.push(Object.assign({},o,{path:o.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=["/"];return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(848),n(3)),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports,c=(n(849),Object(u.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports),f=n(836),h={name:"AsTeRICSLogo"},p=(n(854),Object(u.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 458.32377 450.19883",id:"asterics-logo"}},[e("g",{attrs:{transform:"translate(-573.69531,-758.69136)"}},[e("g",{attrs:{transform:"matrix(4.1999887,0,0,4.1999887,-2248.6971,-580.62625)"}},[e("path",{attrs:{id:"back",d:"m 686.75,400.57649 c 3.625,-10.25 6,-81.625 22.75,-81.625 18.25,-2.5 39,67.375 71.625,73.5 -27.75,1.25 -60.91114,-69.6709 -70.86905,-69.56548 C 699.52953,322.95091 689,398.70149 686.75,400.57649 Z"}}),this._v(" "),e("path",{attrs:{id:"front",d:"m 672,426.07649 c 65.5,-42.375 116.25,-118.75 66,-83.75 45.75,-38.75 25.375,32.25 -66,83.75 z"}})])])])}),[],!1,null,"135fb28f",null).exports);function d(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var g={name:"Navbar",components:{SidebarButton:c,NavLinks:f.a,SearchBox:l,AlgoliaSearchBox:{},AsTeRICSLogo:p},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(d(this.$el,"paddingLeft"))+parseInt(d(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},m=(n(855),Object(u.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[n("AsTeRICSLogo",{staticClass:"logo"}),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()],1),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=m.exports},785:function(t,e,n){"use strict";var i=n(837),r=n(836),s={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:r.a},props:["items"]},a=(n(858),n(3)),o=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("aside",{staticClass:"sidebar",attrs:{tag:"aside"}},[n("NavLinks",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),t._t("top"),t._v(" "),n("SidebarLinks",{attrs:{depth:0,items:t.items}}),t._v(" "),t._t("bottom")],2)}),[],!1,null,null,null);e.a=o.exports},787:function(t,e,n){"use strict";var i=n(2),r=n(841);i({target:"String",proto:!0,forced:n(842)("link")},{link:function(t){return r(this,"a","href",t)}})},789:function(t,e,n){"use strict";var i=n(2),r=n(215).trim;i({target:"String",proto:!0,forced:n(846)("trim")},{trim:function(){return r(this)}})},790:function(t,e,n){},791:function(t,e,n){},792:function(t,e,n){},793:function(t,e,n){},794:function(t,e,n){},795:function(t,e,n){},796:function(t,e,n){},797:function(t,e,n){},798:function(t,e,n){},799:function(t,e,n){},800:function(t,e,n){},836:function(t,e,n){"use strict";var i=n(60),r=(n(92),n(88),n(36),n(87),n(208),n(126),n(734),n(735),n(736),n(733)),s=n(840),a=n(221),o=n.n(a),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return o()(e)===t}}},l=(n(851),n(3)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(725);n(787),n(210),n(122),n(28),n(206),n(207),n(724);function h(t){return d(t).length>1}function p(t){var e,n,i,r,s=(n=(e=t).$themeConfig,i=e.$route,(r=n.versions).reduce((function(t,e){return i.path.startsWith("/"+e)?e:t}),r[0]||"latest")),a=d(t);return h(t)?{text:s,items:a}:{link:a[0].link,text:s,type:"link"}}function d(t){var e=t.$themeConfig,n=t.$site.pages.map((function(t){return t.path})),i=function(t){var e=t.$themeConfig,n=t.$route,i=e.versions,r=n.path,s="/"+(i.find((function(t,e){return 0!==e&&r.startsWith("/"+t)}))||"");return"/"===s?r:r.replace(new RegExp("^".concat(s)),"")}(t);return e.versions.map((function(t,e){return 0===e?{text:t,link:i}:{text:t,link:"/"+t+i}})).filter((function(t){var e=t.link;return n.includes(e)}))}var g={name:"VersionLinks",components:{NavLink:r.a,DropdownLink:c},data:function(){return{versions:null,selected:null}},watch:{$route:function(){this.versions=p(this)}},computed:{hasVersions:function(){return h(this)}},created:function(){this.versions=p(this)}},m=Object(l.a)(g,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"version-links"},[this.hasVersions?e("DropdownLink",{attrs:{item:this.versions}}):e("NavLink",{attrs:{item:this.versions}})],1)}),[],!1,null,null,null).exports,v={name:"SettingsButton",methods:{onClick:function(){this.$emit("toggle-sidebar"),this.$store.commit("setSettingsView","PageSettings"),this.$store.commit("showSettings")}}},b=(n(852),Object(l.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings-button",attrs:{tabindex:"0"},on:{click:t.onClick,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onClick.apply(null,arguments)}}},[n("span",{attrs:{id:"settings-label"}},[t._v("Settings")]),t._v(" "),n("font-awesome-icon",{attrs:{id:"settings-icon",icon:"cog"}})],1)}),[],!1,null,"67ec87f5",null).exports),k=n(96),x=(n(41),n(50),n(11),n(63),n(14),n(19),n(124),n(85));n(62);var y={name:"GoogleTranslate",components:{DropdownLink:c},data:function(){return{items:null,favorites:null}},computed:{route:function(){return this.$themeConfig.host.replace(/\/$/,"")+this.$site.base.replace(/\/$/,"")+this.$route.path}},methods:{loadTranslationLinks:function(){if(void 0!==this.$themeConfig.translate){var t,e=this.getSourceLanguage(),n="EN",i=[],r=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(x.a)(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,o=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){o=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(o)throw s}}}}(this.$themeConfig.translate.codes);try{for(r.s();!(t=r.n()).done;){var s=Object(k.a)(t.value,3),a=s[0],o=s[1],u=s[2];a===e?n=o.toUpperCase():i.push({text:u,link:this.generateLink(this.isConfigured()?e:"auto",a)})}}catch(t){r.e(t)}finally{r.f()}var l=this.$themeConfig.translate.favorites;this.items=l?{text:n,items:[{items:i.slice(0,l.length-1),type:"links"},{items:i.slice(l.length-1,i.length),type:"links"}]}:{text:n,items:i}}},generateLink:function(t,e){var n=encodeURIComponent(this.route);return"".concat("https://translate.google.com/translate","?sl=").concat(t,"&tl=").concat(e,"&u=").concat(n)},isConfigured:function(){return this.$page.frontmatter&&this.$page.frontmatter.lang},getSourceLanguage:function(){return this.isConfigured()?this.$page.frontmatter.lang:"en"}},watch:{$route:function(){this.loadTranslationLinks()}},created:function(){this.loadTranslationLinks()}},w=Object(l.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"google-translate"},[e("DropdownLink",{attrs:{item:this.items}})],1)}),[],!1,null,"67f85130",null).exports,_={name:"NavLinks",components:{NavLink:r.a,DropdownLink:c,VersionLinks:m,SettingsButton:b,GoogleTranslate:w},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var a,o=e[i],u=s[i]&&s[i].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===a}))||(a=i)),{text:u,link:a}}))};return[].concat(Object(i.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.h)(t),{items:(t.items||[]).map(f.h)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},$=(n(853),Object(l.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e(),t._v(" "),n("span",{staticClass:"nav-addon"},[n("ClientOnly",[n("SettingsButton",{staticClass:"nav-item",on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}})],1),t._v(" "),n("VersionLinks",{staticClass:"nav-item"}),t._v(" "),n("GoogleTranslate",{staticClass:"nav-item"})],1)],2):t._e()}),[],!1,null,null,null));e.a=$.exports},837:function(t,e,n){"use strict";n.r(e);n(208);var i=n(725),r={name:"SidebarGroup",components:{DropdownTransition:n(840).a},props:["item","open","collapsable","depth"],beforeCreate:function(){this.$options.components.SidebarLinks=n(837).default},methods:{isActive:i.d}},s=(n(856),n(3)),a=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},attrs:{tabindex:"0"},on:{click:function(e){return t.$emit("toggle")},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null).exports;n(724),n(88);function o(t,e,n,i,r){var s={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return r>2&&(s.style={"padding-left":r+"rem"}),t("RouterLink",s,n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var l=Object(i.d)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,l,e.level-1),u(t,e.children,n,r,s,a+1)])})))}var l={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,l=n.$themeLocaleConfig,c=e.props,f=c.item,h=c.sidebarDepth,p=Object(i.d)(s,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.d)(s,f.basePath+"#"+t.slug)})):p,g="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):o(t,f.path,f.title||f.path,d),m=[r.frontmatter.sidebarDepth,h,l.sidebarDepth,a.sidebarDepth,1].find((function(t){return void 0!==t})),v=l.displayAllHeaders||a.displayAllHeaders;return"auto"===f.type?[g,u(t,f.children,f.basePath,s,m)]:(d||v)&&f.headers&&!i.c.test(f.path)?[g,u(t,Object(i.b)(f.headers),f.path,s,m)]:g}};n(857);function c(t,e){if("group"===e.type){var n=e.path&&Object(i.d)(t,e.path),r=e.children.some((function(e){return"group"===e.type?c(t,e):"page"===e.type&&Object(i.d)(t,e.path)}));return n||r}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(l,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if(c(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.d)(this.$route,t.regularPath)}}},h=Object(s.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},840:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(850),n(3)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},841:function(t,e,n){var i=n(24),r=n(20),s=/"/g;t.exports=function(t,e,n,a){var o=r(i(t)),u="<"+e;return""!==n&&(u+=" "+n+'="'+r(a).replace(s,"&quot;")+'"'),u+">"+o+"</"+e+">"}},842:function(t,e,n){var i=n(4);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},844:function(t,e,n){var i=n(2),r=n(845);i({global:!0,forced:parseInt!=r},{parseInt:r})},845:function(t,e,n){var i=n(5),r=n(4),s=n(20),a=n(215).trim,o=n(216),u=i.parseInt,l=i.Symbol,c=l&&l.iterator,f=/^[+-]?0[Xx]/,h=8!==u(o+"08")||22!==u(o+"0x16")||c&&!r((function(){u(Object(c))}));t.exports=h?function(t,e){var n=a(s(t));return u(n,e>>>0||(f.test(n)?16:10))}:u},846:function(t,e,n){var i=n(91).PROPER,r=n(4),s=n(216);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},847:function(t,e,n){"use strict";var i,r=n(2),s=n(29).f,a=n(17),o=n(20),u=n(127),l=n(24),c=n(129),f=n(31),h="".endsWith,p=Math.min,d=c("endsWith");r({target:"String",proto:!0,forced:!!(f||d||(i=s(String.prototype,"endsWith"),!i||i.writable))&&!d},{endsWith:function(t){var e=o(l(this));u(t);var n=arguments.length>1?arguments[1]:void 0,i=a(e.length),r=void 0===n?i:p(a(n),i),s=o(t);return h?h.call(e,s,r):e.slice(r-s.length,r)===s}})},848:function(t,e,n){"use strict";n(790)},849:function(t,e,n){"use strict";n(791)},850:function(t,e,n){"use strict";n(792)},851:function(t,e,n){"use strict";n(793)},852:function(t,e,n){"use strict";n(794)},853:function(t,e,n){"use strict";n(795)},854:function(t,e,n){"use strict";n(796)},855:function(t,e,n){"use strict";n(797)},856:function(t,e,n){"use strict";n(798)},857:function(t,e,n){"use strict";n(799)},858:function(t,e,n){"use strict";n(800)}}]);