(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{410:function(t,e,n){"use strict";var i=n(22);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},411:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"a",function(){return s}),n.d(e,"i",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"b",function(){return h}),n.d(e,"e",function(){return p}),n.d(e,"k",function(){return f}),n.d(e,"l",function(){return d}),n.d(e,"c",function(){return g}),n.d(e,"j",function(){return v});const i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,a=/^(https?:|mailto:|tel:)/;function o(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return a.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function h(t){if(u(t))return t;const e=t.match(i),n=e?e[0]:"",r=o(t);return s.test(r)?t:r+".html"+n}function p(t,e){const n=t.hash,r=function(t){const e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&o(t.path)===o(e)}function f(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const r=e.split("/");n&&r[r.length-1]||r.pop();const s=t.replace(/^\//,"").split("/");for(let t=0;t<s.length;t++){const e=s[t];".."===e?r.pop():"."!==e&&r.push(e)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));const i=o(e);for(let e=0;e<t.length;e++)if(o(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:h(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function d(t,e,n,i){const{pages:r,themeConfig:s}=n,a=i&&s.locales&&s.locales[i]||s;if("auto"===(t.frontmatter.sidebar||a.sidebar||s.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||s.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const i in e)if(0===(n=t,/(\.html|\/)$/.test(n)?n:n+"/").indexOf(encodeURI(i)))return{base:i,config:e[i]};var n;return{}}(e,o);return n?n.map(e=>(function t(e,n,i,r=1){if("string"==typeof e)return f(n,e,i);if(Array.isArray(e))return Object.assign(f(n,e[0],i),{title:e[1]});{r>3&&console.error("[vuepress] detected a too deep nested sidebar group.");const s=e.children||[];return 0===s.length&&e.path?Object.assign(f(n,e.path,i),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,children:s.map(e=>t(e,n,i,r+1)),collapsable:!1!==e.collapsable}}})(e,r,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function v(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},415:function(t,e,n){"use strict";var i=n(41),r=n(420)(3);i(i.P+i.F*!n(416)([].some,!0),"Array",{some:function(t){return r(this,t,arguments[1])}})},416:function(t,e,n){"use strict";var i=n(40);t.exports=function(t,e){return!!t&&i(function(){e?t.call(null,function(){},1):t.call(null)})}},420:function(t,e,n){var i=n(45),r=n(109),s=n(108),a=n(106),o=n(461);t.exports=function(t,e){var n=1==t,u=2==t,c=3==t,l=4==t,h=6==t,p=5==t||h,f=e||o;return function(e,o,d){for(var g,v,m=s(e),b=r(m),x=i(o,d,3),_=a(b.length),k=0,$=n?f(e,_):u?f(e,0):void 0;_>k;k++)if((p||k in b)&&(v=x(g=b[k],k,m),t))if(n)$[k]=v;else if(v)switch(t){case 3:return!0;case 5:return g;case 6:return k;case 2:$.push(g)}else if(l)return!1;return h?-1:c||l?l:$}}},421:function(t,e,n){},422:function(t,e,n){},423:function(t,e,n){},424:function(t,e,n){},425:function(t,e,n){},426:function(t,e,n){},427:function(t,e,n){},428:function(t,e,n){},429:function(t,e,n){},430:function(t,e,n){},431:function(t,e,n){},432:function(t,e,n){},448:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},449:function(t,e,n){"use strict";var i=n(22),r=n(106),s=n(450),a=n(451);n(452)("match",1,function(t,e,n,o){return[function(n){var i=t(this),r=null==n?void 0:n[e];return void 0!==r?r.call(n,i):new RegExp(n)[e](String(i))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=i(t),c=String(this);if(!u.global)return a(u,c);var l=u.unicode;u.lastIndex=0;for(var h,p=[],f=0;null!==(h=a(u,c));){var d=String(h[0]);p[f]=d,""===d&&(u.lastIndex=s(c,r(u.lastIndex),l)),f++}return 0===f?null:p}]})},450:function(t,e,n){"use strict";var i=n(472)(!0);t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},451:function(t,e,n){"use strict";var i=n(110),r=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw new TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},452:function(t,e,n){"use strict";n(473);var i=n(54),r=n(44),s=n(40),a=n(72),o=n(16),u=n(453),c=o("species"),l=!s(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var p=o(t),f=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=f?!s(function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[c]=function(){return n}),n[p](""),!e}):void 0;if(!f||!d||"replace"===t&&!l||"split"===t&&!h){var g=/./[p],v=n(a,p,""[t],function(t,e,n,i,r){return e.exec===u?f&&!r?{done:!0,value:g.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}}),m=v[0],b=v[1];i(String.prototype,t,m),r(RegExp.prototype,p,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},453:function(t,e,n){"use strict";var i,r,s=n(410),a=RegExp.prototype.exec,o=String.prototype.replace,u=a,c=(i=/a/,r=/b*/g,a.call(i,"a"),a.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),l=void 0!==/()??/.exec("")[1];(c||l)&&(u=function(t){var e,n,i,r,u=this;return l&&(n=new RegExp("^"+u.source+"$(?!\\s)",s.call(u))),c&&(e=u.lastIndex),i=a.call(u,t),c&&i&&(u.lastIndex=u.global?i.index+i[0].length:e),l&&i&&i.length>1&&o.call(i[0],n,function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)}),i}),t.exports=u},454:function(t,e,n){t.exports=n(202)},455:function(t,e,n){"use strict";var i=n(22),r=n(108),s=n(106),a=n(107),o=n(450),u=n(451),c=Math.max,l=Math.min,h=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,f=/\$([$&`']|\d\d?)/g;n(452)("replace",2,function(t,e,n,d){return[function(i,r){var s=t(this),a=null==i?void 0:i[e];return void 0!==a?a.call(i,s,r):n.call(String(s),i,r)},function(t,e){var r=d(n,t,this,e);if(r.done)return r.value;var h=i(t),p=String(this),f="function"==typeof e;f||(e=String(e));var v=h.global;if(v){var m=h.unicode;h.lastIndex=0}for(var b=[];;){var x=u(h,p);if(null===x)break;if(b.push(x),!v)break;""===String(x[0])&&(h.lastIndex=o(p,s(h.lastIndex),m))}for(var _,k="",$=0,C=0;C<b.length;C++){x=b[C];for(var y=String(x[0]),w=c(l(a(x.index),p.length),0),S=[],L=1;L<x.length;L++)S.push(void 0===(_=x[L])?_:String(_));var O=x.groups;if(f){var I=[y].concat(S,w,p);void 0!==O&&I.push(O);var E=String(e.apply(void 0,I))}else E=g(y,p,w,S,O,e);w>=$&&(k+=p.slice($,w)+E,$=w+y.length)}return k+p.slice($)}];function g(t,e,i,s,a,o){var u=i+t.length,c=s.length,l=f;return void 0!==a&&(a=r(a),l=p),n.call(o,l,function(n,r){var o;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(u);case"<":o=a[r.slice(1,-1)];break;default:var l=+r;if(0===l)return n;if(l>c){var p=h(l/10);return 0===p?n:p<=c?void 0===s[p-1]?r.charAt(1):s[p-1]+r.charAt(1):n}o=s[l-1]}return void 0===o?"":o})}})},456:function(t,e,n){"use strict";var i=n(41),r=n(420)(1);i(i.P+i.F*!n(416)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},457:function(t,e,n){"use strict";n.r(e);n(415);var i=n(411),r={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(460).a},beforeCreate:function(){this.$options.components.SidebarLinks=n(457).default},methods:{isActive:i.e}},s=(n(486),n(19)),a=Object(s.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?n("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)},[],!1,null,null,null).exports;n(456);function o(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function u(t,e,n,r,s){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||a>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[o(t,n+"#"+e.slug,e.title,c),u(t,e.children,n,r,s,a+1)])}))}var c={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),a=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,h=l.item,p=l.sidebarDepth,f=Object(i.e)(s,h.path),d="auto"===h.type?f||h.children.some(function(t){return Object(i.e)(s,h.basePath+"#"+t.slug)}):f,g=o(t,h.path,h.title||h.path,d),v=r.frontmatter.sidebarDepth||p||c.sidebarDepth||a.sidebarDepth,m=null==v?1:v,b=c.displayAllHeaders||a.displayAllHeaders;return"auto"===h.type?[g,u(t,h.children,h.basePath,s,m)]:(d||b)&&h.headers&&!i.d.test(h.path)?[g,u(t,Object(i.c)(h.headers),h.path,s,m)]:g}};n(487);var l={name:"SidebarLinks",components:{SidebarGroup:a,SidebarLink:Object(s.a)(c,void 0,void 0,!1,null,null,null).exports},props:["items","depth","sidebarDepth"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if("group"===r.type&&r.children.some(function(e){return"page"===e.type&&Object(i.e)(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:e}})],1)}),0):t._e()},[],!1,null,null,null);e.default=h.exports},460:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(481),n(19)),s=Object(r.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},461:function(t,e,n){var i=n(462);t.exports=function(t,e){return new(i(t))(e)}},462:function(t,e,n){var i=n(30),r=n(463),s=n(16)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),i(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},463:function(t,e,n){var i=n(43);t.exports=Array.isArray||function(t){return"Array"==i(t)}},464:function(t,e,n){"use strict";n(465)("link",function(t){return function(e){return t(this,"a","href",e)}})},465:function(t,e,n){var i=n(41),r=n(40),s=n(72),a=/"/g,o=function(t,e,n,i){var r=String(s(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},466:function(t,e,n){"use strict";var i=n(421);n.n(i).a},467:function(t,e,n){t.exports=n(468)},468:function(t,e,n){n(469),t.exports=n(14).parseInt},469:function(t,e,n){var i=n(23),r=n(470);i(i.G+i.F*(parseInt!=r),{parseInt:r})},470:function(t,e,n){var i=n(24).parseInt,r=n(471).trim,s=n(448),a=/^[-+]?0[xX]/;t.exports=8!==i(s+"08")||22!==i(s+"0x16")?function(t,e){var n=r(String(t),3);return i(n,e>>>0||(a.test(n)?16:10))}:i},471:function(t,e,n){var i=n(23),r=n(73),s=n(35),a=n(448),o="["+a+"]",u=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),l=function(t,e,n){var r={},o=s(function(){return!!a[t]()||"​"!="​"[t]()}),u=r[t]=o?e(h):a[t];n&&(r[n]=u),i(i.P+i.F*o,"String",r)},h=l.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(c,"")),t};t.exports=l},472:function(t,e,n){var i=n(107),r=n(72);t.exports=function(t){return function(e,n){var s,a,o=String(r(e)),u=i(n),c=o.length;return u<0||u>=c?t?"":void 0:(s=o.charCodeAt(u))<55296||s>56319||u+1===c||(a=o.charCodeAt(u+1))<56320||a>57343?t?o.charAt(u):s:t?o.slice(u,u+2):a-56320+(s-55296<<10)+65536}}},473:function(t,e,n){"use strict";var i=n(453);n(41)({target:"RegExp",proto:!0,forced:i!==/./.exec},{exec:i})},474:function(t,e,n){"use strict";var i=n(41),r=n(420)(2);i(i.P+i.F*!n(416)([].filter,!0),"Array",{filter:function(t){return r(this,t,arguments[1])}})},475:function(t,e,n){"use strict";var i=n(41),r=n(200)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(416)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:r(this,t,arguments[1])}})},476:function(t,e,n){"use strict";n(205)("trim",function(t){return function(){return t(this,3)}})},477:function(t,e,n){"use strict";var i=n(422);n.n(i).a},478:function(t,e,n){"use strict";var i=n(423);n.n(i).a},479:function(t,e,n){var i=n(15),r=n(203),s=n(42).f,a=n(204).f,o=n(480),u=n(410),c=i.RegExp,l=c,h=c.prototype,p=/a/g,f=/a/g,d=new c(p)!==p;if(n(29)&&(!d||n(40)(function(){return f[n(16)("match")]=!1,c(p)!=p||c(f)==f||"/a/i"!=c(p,"i")}))){c=function(t,e){var n=this instanceof c,i=o(t),s=void 0===e;return!n&&i&&t.constructor===c&&s?t:r(d?new l(i&&!s?t.source:t,e):l((i=t instanceof c)?t.source:t,i&&s?u.call(t):e),n?this:h,c)};for(var g=function(t){t in c||s(c,t,{configurable:!0,get:function(){return l[t]},set:function(e){l[t]=e}})},v=a(l),m=0;v.length>m;)g(v[m++]);h.constructor=c,c.prototype=h,n(54)(i,"RegExp",c)}n(201)("RegExp")},480:function(t,e,n){var i=n(30),r=n(43),s=n(16)("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==r(t))}},481:function(t,e,n){"use strict";var i=n(424);n.n(i).a},482:function(t,e,n){"use strict";var i=n(425);n.n(i).a},483:function(t,e,n){"use strict";var i=n(426);n.n(i).a},484:function(t,e,n){"use strict";var i=n(427);n.n(i).a},485:function(t,e,n){"use strict";var i=n(428);n.n(i).a},486:function(t,e,n){"use strict";var i=n(429);n.n(i).a},487:function(t,e,n){"use strict";var i=n(430);n.n(i).a},488:function(t,e,n){"use strict";var i=n(431);n.n(i).a},489:function(t,e,n){"use strict";var i=n(432);n.n(i).a},845:function(t,e,n){"use strict";n.r(e);var i=n(111),r=n.n(i),s=(n(415),n(464),n(411)),a={props:{item:{required:!0}},computed:{link:function(){return Object(s.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?r()(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:s.f,isMailto:s.g,isTel:s.h}},o=n(19),u=Object(o.a)(a,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null).exports,c={components:{NavLink:u},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},l=(n(466),Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":"main-title"}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v(t._s(t.data.heroText||t.$title||"Hello"))]):t._e(),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])}),0):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null).exports),h=n(467),p=n.n(h),f=(n(449),n(474),n(191)),d=n.n(f),g=n(454),v=n.n(g),m=(n(475),n(476),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},r=[],s=0;s<e.length&&!(r.length>=5);s++){var a=e[s];if(this.getPageLocalePath(a)===n&&this.isSearchable(a))if(i(a))r.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(r.length>=5);o++){var u=a.headers[o];i(u)&&r.push(v()({},a,{path:a.path+"#"+u.slug,header:u}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=d()(e)?e:new Array(e)).filter(function(e){return t.path.match(e)}).length>0},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),b=(n(477),Object(o.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown(e)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])}),0):t._e()])},[],!1,null,null,null).exports),x=(n(478),Object(o.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null).exports),_=(n(479),n(192)),k=(n(455),n(456),{components:{NavLink:u,DropdownTransition:n(460).a},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}}),$=(n(482),{components:{NavLink:u,DropdownLink:Object(o.a)(k,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)}),0):n("NavLink",{attrs:{item:e}})],1)}),0)])],1)},[],!1,null,null,null).exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&r()(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},a={text:this.$themeLocaleConfig.selectText||"Languages",items:r()(e).map(function(r){var a,o=e[r],u=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some(function(t){return t.path===a})||(a=r)),{text:u,link:a}})};return[].concat(Object(_.a)(this.userNav),[a])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return v()(Object(s.j)(t),{items:(t.items||[]).map(s.j)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^\/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}}),C=(n(483),Object(o.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null).exports);function y(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var w={components:{SidebarButton:x,NavLinks:C,SearchBox:b,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=p()(y(this.$el,"paddingLeft"))+p()(y(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},S=(n(484),Object(o.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null).exports);function L(t,e,n){var i=[];!function t(e,n){for(var i=0,r=e.length;i<r;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(var r=0;r<i.length;r++){var s=i[r];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[r+n]}}var O={props:["sidebarItems"],computed:{lastUpdated:function(){return this.$page.lastUpdated},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t,e,n=this.$page.frontmatter.prev;return!1===n?void 0:n?Object(s.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,L(t,e,-1))},next:function(){var t,e,n=this.$page.frontmatter.next;return!1===n?void 0:n?Object(s.k)(this.$site.pages,n,this.$route.path):(t=this.$page,e=this.sidebarItems,L(t,e,1))},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,r=void 0===i?"":i,s=t.docsBranch,a=void 0===s?"master":s,o=t.docsRepo,u=void 0===o?e:o;return u&&n&&this.$page.relativePath?this.createEditLink(e,u,r,a,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,r){return/bitbucket.org/.test(t)?(s.i.test(e)?e:t).replace(s.a,"")+"/src"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(s.i.test(e)?e:"https://github.com/".concat(e)).replace(s.a,"")+"/edit"+"/".concat(i,"/")+(n?n.replace(s.a,"")+"/":"")+r}}},I=(n(485),Object(o.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),n("footer",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]),t._v(" "),t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null).exports),E={name:"Sidebar",components:{SidebarLinks:n(457).default,NavLinks:C},props:["items"]},j=(n(488),{components:{Home:l,Page:I,Sidebar:Object(o.a)(E,function(){var t=this.$createElement,e=this._self._c||t;return e("aside",{staticClass:"sidebar"},[e("NavLinks"),this._v(" "),this._t("top"),this._v(" "),e("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)},[],!1,null,null,null).exports,Navbar:S},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(s.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach(function(){t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),A=(n(489),Object(o.a)(j,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));e.default=A.exports}}]);