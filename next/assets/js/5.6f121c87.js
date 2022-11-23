(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{279:function(t,e,s){"use strict";var i={name:"Linker",props:{to:{type:[String,Boolean],default:!1},tab:{type:Boolean,default:!1}},computed:{external(){return null!==/^https?\:\/\//.exec(this.to)}}},n=s(2),a=Object(n.a)(i,(function(){var t=this,e=t._self._c;return e("div",[t.external?e("a",{staticStyle:{display:"block"},attrs:{tabindex:t.tab?0:-1,href:t.to,rel:t.tab?"noopener":"",target:t.tab?"_blank":""}},[t._t("default")],2):t.to?e("router-link",{staticStyle:{display:"block"},attrs:{to:t.to}},[t._t("default")],2):t._t("default")],2)}),[],!1,null,"65108834",null);e.a=a.exports},362:function(t,e,s){},363:function(t,e,s){},364:function(t,e,s){},365:function(t,e,s){},366:function(t,e,s){},367:function(t,e,s){},368:function(t,e,s){},369:function(t,e,s){},817:function(t,e,s){"use strict";s(362)},818:function(t,e,s){"use strict";s(363)},819:function(t,e,s){"use strict";s(364)},820:function(t,e,s){"use strict";s(365)},821:function(t,e,s){"use strict";s(366)},822:function(t,e,s){"use strict";s(367)},823:function(t,e,s){"use strict";s(368)},824:function(t,e,s){"use strict";s(369)},837:function(t,e,s){"use strict";s.r(e);var i=s(14),n=s(381),a={name:"OS",props:{type:{validator:t=>/(lin|win|mac|apple|android|ios)/i.exec(t)||!1,required:!0}},data:()=>({patterns:[[/lin/i,"linux","Linux"],[/win/i,"windows","Windows"],[/(mac|apple)/i,"apple","macOS"],[/android/i,"android","Android"],[/ios/i,"apple","iOS"]]}),computed:{icon(){return this.patterns.find(([t])=>t.exec(this.type))[1]},label(){return this.patterns.find(([t])=>t.exec(this.type))[2]}}},o=(s(817),s(2)),l=Object(o.a)(a,(function(){var t=this._self._c;return t("div",{staticClass:"badge os-badge"},[t("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fab",this.icon]}}),this._v(" "),t("span",{staticClass:"label"},[this._v(this._s(this.label))])],1)}),[],!1,null,"59004b3a",null).exports,r={name:"Badge"},d=(s(818),{name:"Information",components:{OS:l,Badge:Object(o.a)(r,(function(){var t=this._self._c;return t("div",{staticClass:"badge"},[t("span",[this._t("default")],2)])}),[],!1,null,"00450bf4",null).exports},props:{title:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:""},category:{type:String,default:""}}}),c=(s(819),Object(o.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"information"},[e("div",{staticClass:"category"},[t._v("\n    "+t._s(t.category)+"\n  ")]),t._v(" "),e("div",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.os?e("div",{staticClass:"os"},t._l(t.os.split(","),(function(t){return e("OS",{key:t,attrs:{type:t}})})),1):t._e(),t._v(" "),t.badges?e("div",{staticClass:"badges"},t._l(t.badges.split(","),(function(s){return e("Badge",{key:s},[t._v(t._s(s))])})),1):t._e(),t._v(" "),e("div",{staticClass:"description"},[t._t("default")],2)])}),[],!1,null,"ec41c552",null).exports),p={name:"Description",components:{Media:n.a,Information:c},props:{title:{type:String,default:""},category:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:""},media:{type:String,default:null}}},u=(s(820),Object(o.a)(p,(function(){var t=this._self._c;return t("div",{staticClass:"description"},[t("Media",{staticClass:"description-media",attrs:{content:this.media,active:!0,zoom:!1}}),this._v(" "),t("Information",{staticClass:"description-information",attrs:{title:this.title,os:this.os,badges:this.badges,category:this.category}},[this._t("default")],2)],1)}),[],!1,null,"70bba1b6",null).exports),g=s(7),f={name:"Logo",props:{back:{type:String,default:"#000"},front:{type:String,default:"#0ea1d2"}}},h=Object(o.a)(f,(function(){var t=this._self._c;return t("svg",{attrs:{"xmlns:svg":"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 458.32377 450.19883",id:"asterics-logo"}},[t("g",{attrs:{transform:"translate(-573.69531,-758.69136)"}},[t("g",{attrs:{transform:"matrix(4.1999887,0,0,4.1999887,-2248.6971,-580.62625)"}},[t("path",{attrs:{id:"back",fill:this.back,d:"m 686.75,400.57649 c 3.625,-10.25 6,-81.625 22.75,-81.625 18.25,-2.5 39,67.375 71.625,73.5 -27.75,1.25 -60.91114,-69.6709 -70.86905,-69.56548 C 699.52953,322.95091 689,398.70149 686.75,400.57649 Z"}}),this._v(" "),t("path",{attrs:{id:"front",fill:this.front,d:"m 672,426.07649 c 65.5,-42.375 116.25,-118.75 66,-83.75 45.75,-38.75 25.375,32.25 -66,83.75 z"}})])])])}),[],!1,null,"9281b096",null).exports,m=s(279),b={name:"ModelControls",components:{Logo:h,Linker:m.a},props:{os:{type:String,default:""},model:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null},active:{type:Boolean,default:!0}},data:()=>({deploy:null,setURI:null}),methods:{openSolutionSettings(){this.$store.commit("setSettingsView","SolutionSettings"),this.$store.commit("showSettings")},encode:t=>"undefined"==typeof encodeURIComponent?t:encodeURIComponent(t),onStart(){if(this.model){this.setURI(this.settings.are.host+"/rest/");try{this.deploy(this.model,{},(t,e)=>{console.log(t,e),console.log("Model deployed to "+this.settings.are.host)},(t,e)=>{console.log(t,e),"Internal Server Error"===e&&i.a.$emit("toaster-push",{message:e,supportedOS:this.os,component:"InternalServerError"}),"Network Error"===e&&i.a.$emit("toaster-push",{message:e,host:this.settings.are.host,component:"NetworkError"})})}catch(t){console.log("DEBUG",t)}}}},computed:{...Object(g.b)(["settings"]),webappSettingsUrl(){const{host:t}=this.$themeConfig,{base:e}=this.$site,s=t.replace(/\/$/,"")+e;return this.webapp?this.webapp.replace(t,s)+"?areBaseURI="+this.settings.are.host:this.webapp},webappURL(){return!!this.webapp&&this.webapp},modelURL(){return!!this.model&&this.settings.webacs.host+"?areBaseURI="+this.settings.are.host+"&openFile="+this.model}},mounted(){s.e(281).then(s.t.bind(null,835,7)).then(({deployModelFromWebserverApplySettingsAndStartModel:t,setBaseURI:e})=>{this.deploy=t,this.setURI=e})}},v=(s(821),Object(o.a)(b,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"model-controls-wrapper"},[e("div",{staticClass:"control model",class:{disabled:!t.model},attrs:{title:"Edit the AsTeRICS model"}},[e("Linker",{attrs:{to:t.modelURL,tab:Boolean(t.model)}},[e("div",{staticClass:"icon-background small external"},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{staticStyle:{transform:"rotate(-45deg)"},attrs:{icon:"draw-polygon"}})],1)])])],1),t._v(" "),e("div",{staticClass:"control webapp",class:{disabled:!t.webapp},attrs:{title:"Open the web app to customize the solution"}},[e("Linker",{attrs:{to:t.webappURL,tab:Boolean(t.webapp)}},[e("div",{staticClass:"icon-background small external"},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:"rocket"}})],1)])])],1),t._v(" "),e("div",{staticClass:"control start",attrs:{title:"Start the AsTeRICS Model"}},[e("div",{staticClass:"icon-background",attrs:{tabindex:"0"},on:{click:t.onStart,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onStart.apply(null,arguments)}}},[e("div",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:"play"}})],1)])]),t._v(" "),e("div",{staticClass:"control settings",attrs:{title:"Open the solution settings"}},[e("div",{staticClass:"icon-background small dark",attrs:{tabindex:"0"},on:{click:t.openSolutionSettings,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.openSolutionSettings.apply(null,arguments)}}},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:"cog"}})],1)])]),t._v(" "),e("div",{staticClass:"control docs",class:{disabled:!t.docs},attrs:{title:"Open the plugin documentation"}},[e("Linker",{attrs:{to:t.docs,tab:Boolean(t.docs)}},[e("div",{staticClass:"icon-background small dark"},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:["fab","readme"]}})],1)])])],1)])}),[],!1,null,"020f6196",null).exports),y={name:"GridControls",components:{Linker:m.a},props:{grid:{type:String,default:null},docs:{type:String,default:null}},methods:{openSolutionSettings(){this.$store.commit("setSettingsView","SolutionSettings"),this.$store.commit("showSettings")}},computed:{...Object(g.b)(["settings"]),gridURL(){return!!this.grid&&this.settings.grid.host+"/"+this.grid},gridEditURL(){return!!this.grid&&this.settings.grid.host+"/edit/"+this.grid}}},S=(s(822),{name:"Controls",components:{ModelControls:v,GridControls:Object(o.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"model-controls-wrapper"},[e("div",{staticClass:"control edit",class:{disabled:!t.grid},attrs:{title:"Edit the AsTeRICS Grid"}},[e("Linker",{attrs:{to:t.gridEditURL,tab:Boolean(t.grid)}},[e("div",{staticClass:"icon-background small external"},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1)])])],1),t._v(" "),e("div",{staticClass:"control grid",class:{disabled:!t.grid},attrs:{title:"Launch the AsTeRICS Grid"}},[e("Linker",{attrs:{to:t.gridURL,tab:Boolean(t.grid)}},[e("div",{staticClass:"icon-background"},[e("div",{staticClass:"icon"},[e("font-awesome-icon",{attrs:{icon:"rocket"}})],1)])])],1),t._v(" "),e("div",{staticClass:"control settings",attrs:{title:"Open the solution settings"}},[e("div",{staticClass:"icon-background small dark",attrs:{tabindex:"0"},on:{click:t.openSolutionSettings,keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.openSolutionSettings.apply(null,arguments)}}},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:"cog"}})],1)])]),t._v(" "),e("div",{staticClass:"control docs",class:{disabled:!t.docs},attrs:{title:"Open the documentation"}},[e("Linker",{attrs:{to:t.docs,tab:Boolean(t.docs)}},[e("div",{staticClass:"icon-background small dark"},[e("div",{staticClass:"icon small"},[e("font-awesome-icon",{attrs:{icon:["fab","readme"]}})],1)])])],1)])}),[],!1,null,"5665d1bb",null).exports},props:{os:{type:String,default:""},model:{type:String,default:null},grid:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null},active:{type:Boolean,default:!0}}}),C={name:"Solution",components:{Description:u,Controls:Object(o.a)(S,(function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"controls-wrapper"},[t.model?e("ModelControls",{attrs:{os:t.os,model:t.model,webapp:t.webapp,docs:t.docs,active:t.active}}):e("GridControls",{attrs:{grid:t.grid,docs:t.docs}})],1)}),[],!1,null,"03d01ad3",null).exports},props:{category:{type:String,default:""},title:{type:String,default:""},os:{type:String,default:""},badges:{type:String,default:null},media:{type:String,default:null},model:{type:String,default:null},grid:{type:String,default:null},webapp:{type:String,default:null},docs:{type:String,default:null}},data:()=>({active:!0}),methods:{classes(){return Array.from(this.$refs.solution.parentNode.classList)||[]},onSlideChangeTransitionStart(){this.active=!0},onSlideChangeTransitionEnd(){this.active=this.classes().includes("swiper-slide-active")}},created(){i.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart),i.a.$on("slide-change-transition-end",this.onSlideChangeTransitionEnd)},beforeDestroy(){i.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart),i.a.$off("slide-change-transition-end",this.onSlideChangeTransitionEnd)}},w=(s(823),s(824),Object(o.a)(C,(function(){var t=this,e=t._self._c;return e("swiper-slide",[e("div",{ref:"solution",staticClass:"slide"},[e("div",{staticClass:"solution-media"},[e("Description",{attrs:{title:t.title,category:t.category,os:t.os,badges:t.badges,media:t.media}},[t._t("default")],2)],1),t._v(" "),e("div",{staticClass:"controls"},[e("Controls",{attrs:{model:t.model,grid:t.grid,os:t.os,webapp:t.webapp,docs:t.docs,active:t.active}})],1)])])}),[],!1,null,"19581b50",null));e.default=w.exports}}]);