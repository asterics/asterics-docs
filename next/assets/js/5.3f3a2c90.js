(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1999:function(t,e,n){"use strict";n(15);var s={name:"Linker",props:{to:{type:[String,Boolean],default:!1},tab:{type:Boolean,default:!1}},computed:{external:function(){return null!==/^https?\:\/\//.exec(this.to)}}},i=n(1),a=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.external?n("a",{staticStyle:{display:"block"},attrs:{tabindex:t.tab?0:-1,href:t.to,rel:t.tab?"noopener":"",target:t.tab?"_blank":""}},[t._t("default")],2):t.to?n("router-link",{staticStyle:{display:"block"},attrs:{to:t.to}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"7cf0a7e7",null);e.a=a.exports},2088:function(t,e,n){},2089:function(t,e,n){},2090:function(t,e,n){},2091:function(t,e,n){},2092:function(t,e,n){},2093:function(t,e,n){},2094:function(t,e,n){},2095:function(t,e,n){},3993:function(t,e,n){"use strict";var s=n(2088);n.n(s).a},3994:function(t,e,n){"use strict";var s=n(2089);n.n(s).a},3995:function(t,e,n){"use strict";var s=n(2090);n.n(s).a},3996:function(t,e,n){"use strict";var s=n(2091);n.n(s).a},3997:function(t,e,n){"use strict";var s=n(2092);n.n(s).a},3998:function(t,e,n){"use strict";var s=n(2093);n.n(s).a},3999:function(t,e,n){"use strict";var s=n(2094);n.n(s).a},4e3:function(t,e,n){"use strict";var s=n(2095);n.n(s).a},4014:function(t,e,n){"use strict";n.r(e);n(227),n(118),n(119),n(120);var s=n(20),i=n(2114),a=(n(45),n(15),n(60)),o={name:"OS",props:{type:{validator:function(t){return/(lin|win|mac|apple|android|ios)/i.exec(t)||!1},required:!0}},data:function(){return{patterns:[[/lin/i,"linux","Linux"],[/win/i,"windows","Windows"],[/(mac|apple)/i,"apple","macOS"],[/android/i,"android","Android"],[/ios/i,"apple","iOS"]]}},computed:{icon:function(){var t=this;return this.patterns.find((function(e){return Object(a.a)(e,1)[0].exec(t.type)}))[1]},label:function(){var t=this;return this.patterns.find((function(e){return Object(a.a)(e,1)[0].exec(t.type)}))[2]}}},r=(n(3993),n(1)),l=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"badge os-badge"},[e("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab",this.icon]}}),this._v(" "),e("span",{staticClass:"label"},[this._v(this._s(this.label))])],1)}),[],!1,null,"3f040aed",null).exports,c={name:"Badge"},d=(n(3994),{name:"Information",components:{OS:l,Badge:Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"badge"},[e("span",[this._t("default")],2)])}),[],!1,null,"0cc47a61",null).exports},props:{title:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:""},category:{type:String,default:""}}}),u=(n(3995),Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"information"},[n("div",{staticClass:"category"},[t._v("\n    "+t._s(t.category)+"\n  ")]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.os?n("div",{staticClass:"os"},t._l(t.os.split(","),(function(t){return n("OS",{key:t,attrs:{type:t}})})),1):t._e(),t._v(" "),t.badges?n("div",{staticClass:"badges"},t._l(t.badges.split(","),(function(e){return n("Badge",{key:e},[t._v(t._s(e))])})),1):t._e(),t._v(" "),n("div",{staticClass:"description"},[t._t("default")],2)])}),[],!1,null,"4ddd3044",null).exports),p={name:"Description",components:{Media:i.a,Information:u},props:{title:{type:String,default:""},category:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:""},media:{type:String,default:null}}},f=(n(3996),Object(r.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"description"},[e("Media",{staticClass:"description-media",attrs:{content:this.media,active:!0,zoom:!1}}),this._v(" "),e("Information",{staticClass:"description-information",attrs:{title:this.title,os:this.os,badges:this.badges,category:this.category}},[this._t("default")],2)],1)}),[],!1,null,"04a8d5e3",null).exports),g=(n(26),n(30),n(8)),m=n(12),v={name:"Logo",props:{back:{type:String,default:"#000"},front:{type:String,default:"#0ea1d2"}}},h=Object(r.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 458.32377 450.19883",id:"asterics-logo"}},[e("g",{attrs:{transform:"translate(-573.69531,-758.69136)"}},[e("g",{attrs:{transform:"matrix(4.1999887,0,0,4.1999887,-2248.6971,-580.62625)"}},[e("path",{attrs:{id:"back",fill:this.back,d:"m 686.75,400.57649 c 3.625,-10.25 6,-81.625 22.75,-81.625 18.25,-2.5 39,67.375 71.625,73.5 -27.75,1.25 -60.91114,-69.6709 -70.86905,-69.56548 C 699.52953,322.95091 689,398.70149 686.75,400.57649 Z"}}),this._v(" "),e("path",{attrs:{id:"front",fill:this.front,d:"m 672,426.07649 c 65.5,-42.375 116.25,-118.75 66,-83.75 45.75,-38.75 25.375,32.25 -66,83.75 z"}})])])])}),[],!1,null,"2d1f7322",null).exports,b=n(1999),y={name:"ModelControls",components:{Logo:h,Linker:b.a},props:{os:{type:String,default:""},model:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null},active:{type:Boolean,default:!0}},data:function(){return{deploy:null,setURI:null}},methods:{openSolutionSettings:function(){this.$store.commit("setSettingsView","SolutionSettings"),this.$store.commit("showSettings")},encode:function(t){return"undefined"==typeof encodeURIComponent?t:encodeURIComponent(t)},onStart:function(){var t=this;if(this.model){this.setURI(this.settings.are.host+"/rest/");try{this.deploy(this.model,{},(function(e,n){console.log(e,n),console.log("Model deployed to "+t.settings.are.host)}),(function(e,n){console.log(e,n),"Internal Server Error"===n&&s.a.$emit("toaster-push",{message:n,supportedOS:t.os,component:"InternalServerError"}),"Network Error"===n&&s.a.$emit("toaster-push",{message:n,host:t.settings.are.host,component:"NetworkError"})}))}catch(t){console.log("DEBUG",t)}}}},computed:Object(g.a)(Object(g.a)({},Object(m.b)(["settings"])),{},{webappSettingsUrl:function(){var t=this.$themeConfig.host,e=this.$site.base,n=t.replace(/\/$/,"")+e;return this.webapp?this.webapp.replace(t,n)+"?areBaseURI=".concat(this.settings.are.host):this.webapp},webappURL:function(){return!!this.webapp&&this.webapp},modelURL:function(){return!!this.model&&this.settings.webacs.host+"?"+"areBaseURI=".concat(this.settings.are.host)+"&"+"openFile=".concat(this.model)}}),mounted:function(){var t=this;n.e(1483).then(n.t.bind(null,4013,7)).then((function(e){var n=e.deployModelFromWebserverApplySettingsAndStartModel,s=e.setBaseURI;t.deploy=n,t.setURI=s}))}},S=(n(3997),Object(r.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-controls-wrapper"},[n("div",{staticClass:"control model",class:{disabled:!t.model}},[n("Linker",{attrs:{to:t.modelURL,tab:Boolean(t.model)}},[n("div",{staticClass:"icon-background small external"},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{staticStyle:{transform:"rotate(-45deg)"},attrs:{icon:"draw-polygon"}})],1)])])],1),t._v(" "),n("div",{staticClass:"control webapp",class:{disabled:!t.webapp}},[n("Linker",{attrs:{to:t.webappURL,tab:Boolean(t.webapp)}},[n("div",{staticClass:"icon-background small external"},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:"rocket"}})],1)])])],1),t._v(" "),n("div",{staticClass:"control start"},[n("div",{staticClass:"icon-background",attrs:{tabindex:"0"},on:{click:t.onStart,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onStart(e)}}},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"play"}})],1)])]),t._v(" "),n("div",{staticClass:"control settings"},[n("div",{staticClass:"icon-background small dark",attrs:{tabindex:"0"},on:{click:t.openSolutionSettings,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.openSolutionSettings(e)}}},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:"cog"}})],1)])]),t._v(" "),n("div",{staticClass:"control docs",class:{disabled:!t.docs}},[n("Linker",{attrs:{to:t.docs,tab:Boolean(t.docs)}},[n("div",{staticClass:"icon-background small dark"},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:["fab","readme"]}})],1)])])],1)])}),[],!1,null,"6d6272e2",null).exports),C={name:"GridControls",components:{Linker:b.a},props:{grid:{type:String,default:null},docs:{type:String,default:null}},methods:{openSolutionSettings:function(){this.$store.commit("setSettingsView","SolutionSettings"),this.$store.commit("showSettings")}},computed:Object(g.a)(Object(g.a)({},Object(m.b)(["settings"])),{},{gridURL:function(){return!!this.grid&&this.settings.grid.host+"/"+this.grid},gridEditURL:function(){return!!this.grid&&this.settings.grid.host+"/edit/"+this.grid}})},w=(n(3998),{name:"Controls",components:{ModelControls:S,GridControls:Object(r.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-controls-wrapper"},[n("div",{staticClass:"control edit",class:{disabled:!t.grid}},[n("Linker",{attrs:{to:t.gridEditURL,tab:Boolean(t.grid)}},[n("div",{staticClass:"icon-background small external"},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1)])])],1),t._v(" "),n("div",{staticClass:"control grid",class:{disabled:!t.grid}},[n("Linker",{attrs:{to:t.gridURL,tab:Boolean(t.grid)}},[n("div",{staticClass:"icon-background"},[n("div",{staticClass:"icon"},[n("font-awesome-icon",{attrs:{icon:"rocket"}})],1)])])],1),t._v(" "),n("div",{staticClass:"control settings"},[n("div",{staticClass:"icon-background small dark",attrs:{tabindex:"0"},on:{click:t.openSolutionSettings,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.openSolutionSettings(e)}}},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:"cog"}})],1)])]),t._v(" "),n("div",{staticClass:"control docs",class:{disabled:!t.docs}},[n("Linker",{attrs:{to:t.docs,tab:Boolean(t.docs)}},[n("div",{staticClass:"icon-background small dark"},[n("div",{staticClass:"icon small"},[n("font-awesome-icon",{attrs:{icon:["fab","readme"]}})],1)])])],1)])}),[],!1,null,"1f1d773b",null).exports},props:{os:{type:String,default:""},model:{type:String,default:null},grid:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null},active:{type:Boolean,default:!0}}}),_={name:"Solution",components:{Description:f,Controls:Object(r.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"controls-wrapper"},[t.model?n("ModelControls",{attrs:{os:t.os,model:t.model,webapp:t.webapp,docs:t.docs,active:t.active}}):n("GridControls",{attrs:{grid:t.grid,docs:t.docs}})],1)}),[],!1,null,"5fef3806",null).exports},props:{category:{type:String,default:""},title:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:null},media:{type:String,default:null},model:{type:String,default:null},grid:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null}},data:function(){return{active:!0}},methods:{classes:function(){return Array.from(this.$refs.solution.parentNode.classList)||[]},onSlideChangeTransitionStart:function(){this.active=!0},onSlideChangeTransitionEnd:function(){this.active=this.classes().includes("swiper-slide-active")}},created:function(){s.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart),s.a.$on("slide-change-transition-end",this.onSlideChangeTransitionEnd)},beforeDestroy:function(){s.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart),s.a.$off("slide-change-transition-end",this.onSlideChangeTransitionEnd)}},k=(n(3999),n(4e3),Object(r.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper-slide",[n("div",{ref:"solution",staticClass:"slide"},[n("div",{staticClass:"solution-media"},[n("Description",{attrs:{title:t.title,category:t.category,os:t.os,badges:t.badges,media:t.media}},[t._t("default")],2)],1),t._v(" "),n("div",{staticClass:"controls"},[n("Controls",{attrs:{model:t.model,grid:t.grid,os:t.os,webapp:t.webapp,docs:t.docs,active:t.active}})],1)])])}),[],!1,null,"bfcfe1ea",null));e.default=k.exports}}]);