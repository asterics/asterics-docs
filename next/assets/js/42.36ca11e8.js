(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{195:function(t,o,n){},660:function(t,o,n){"use strict";var e=n(195);n.n(e).a},672:function(t,o,n){"use strict";n.r(o);var e={data:function(){return{showDropdown:!1}},computed:{version:function(){var t=this.$site.themeConfig.store.version;return t===this.$site.themeConfig.store.latest?"latest":t},routes:function(){return this.$site.themeConfig.store.routes}},methods:{toggle:function(){this.showDropdown=!this.showDropdown},documentClick:function(t){t.target.matches(".dropbtn")||(this.showDropdown=!1)}},mounted:function(){document.addEventListener("click",this.documentClick)},destroyed:function(){document.removeEventListener("click",this.documentClick)}},s=(n(660),n(19)),i=Object(s.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"dropdown"},[n("button",{staticClass:"dropbtn",on:{click:function(o){return t.toggle()}}},[t._v(t._s(this.version))]),t._v(" "),n("div",{staticClass:"dropdown-content",class:{show:t.showDropdown}},t._l(t.routes[decodeURIComponent(this.$route.path)],(function(o,e){return n("a",{key:o.route,attrs:{href:o.route}},[t._v(t._s(e))])})),0)])}),[],!1,null,null,null);o.default=i.exports}}]);