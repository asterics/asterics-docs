(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{281:function(t,e,s){},282:function(t,e,s){"use strict";var a={name:"Linker",props:{to:{type:[String,Boolean],default:!1},tab:{type:Boolean,default:!1}},computed:{external(){return null!==/^https?\:\/\//.exec(this.to)}}},i=s(2),r=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("div",[t.external?e("a",{staticStyle:{display:"block"},attrs:{tabindex:t.tab?0:-1,href:t.to,rel:t.tab?"noopener":"",target:t.tab?"_blank":""}},[t._t("default")],2):t.to?e("router-link",{staticStyle:{display:"block"},attrs:{to:t.to}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"17cf9742",null);e.a=r.exports},316:function(t,e,s){"use strict";s(281)},333:function(t,e,s){"use strict";var a={name:"Figure",props:{src:{type:String,required:!0},zoom:{type:Boolean,default:!0},alt:{type:String,default:""},scale:{type:Number,default:1}},computed:{source(){return this.src.startsWith("/")?this.$withBase(this.src):this.src}}},i=(s(316),s(2)),r=Object(i.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"container",class:{"no-zoom":!this.zoom}},[t("img",{style:{transform:`scale(${this.scale})`},attrs:{src:this.source,alt:this.alt}})])}),[],!1,null,"64a16a31",null);e.a=r.exports},354:function(t,e,s){},355:function(t,e,s){},860:function(t,e,s){"use strict";s(354)},861:function(t,e,s){"use strict";s(355)},904:function(t,e,s){"use strict";s.r(e);var a=s(333),i=s(282),r={name:"Partner",components:{Figure:a.a,Linker:i.a},props:{media:{type:String,default:""},alt:{type:String,default:""},href:{type:String,default:""},scale:{type:String,default:"1"}},computed:{isYoutube(){const t=[/https:\/\/.*youtube\.com.*v=(.*?)(&.*)?$/,/https?:\/\/.*youtu\.be\/(.*?)(\?.*)?$/].find(t=>t.exec(this.media));return!(!this.media||!t)&&this.media.replace(t,(t,e)=>e)}}},n=(s(860),s(861),s(2)),u=Object(n.a)(r,(function(){var t=this._self._c;return t("li",[this.media&&!this.isYoutube?t("Linker",{staticClass:"partner",attrs:{to:this.href}},[t("Figure",{attrs:{src:this.media,zoom:!1,alt:this.alt,scale:Number(this.scale)}})],1):this._e()],1)}),[],!1,null,"a17067bc",null);e.default=u.exports}}]);