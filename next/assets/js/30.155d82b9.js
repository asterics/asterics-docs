(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1273:function(t,i,e){"use strict";e(826)},1274:function(t,i,e){"use strict";e(827)},1285:function(t,i,e){"use strict";e.r(i);e(116),e(14),e(200),e(201);var n=e(34),s=e(834),a={name:"Description",props:{title:{type:String,default:""}}},o=(e(1273),e(2)),r=Object(o.a)(a,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[this._v("\n    "+this._s(this.title)+"\n  ")]),this._v(" "),i("div",{staticClass:"description"},[this._t("default",[this._v("Description")])],2)])}),[],!1,null,"62d3a188",null).exports,c={name:"UseCase",components:{Media:s.a,Description:r},props:{link:{type:String,default:"#"},media:{type:String,default:null},title:{type:String,default:""},stop:{type:Boolean,default:!1}},data:function(){return{active:!0}},methods:{classes:function(){return Array.from(this.$refs.slide.parentNode.classList)||[]},onSlideChangeTransitionStart:function(){this.stop&&(this.active=!0)},onSlideChangeTransitionEnd:function(){this.stop&&(this.active=this.classes().includes("swiper-slide-active"))}},created:function(){n.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart),n.a.$on("slide-change-transition-end",this.onSlideChangeTransitionEnd)},beforeDestroy:function(){n.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart),n.a.$off("slide-change-transition-end",this.onSlideChangeTransitionEnd)}},l=(e(1274),Object(o.a)(c,(function(){var t=this.$createElement,i=this._self._c||t;return i("swiper-slide",[i("div",{ref:"slide",staticClass:"slide"},[i("Media",{attrs:{content:this.media,active:this.active}}),this._v(" "),i("div",{staticClass:"content"},[i("Description",{attrs:{title:this.title}},[this._t("default",[this._v("Use Case")])],2)],1)],1)])}),[],!1,null,"6c18d18a",null));i.default=l.exports},826:function(t,i,e){},827:function(t,i,e){}}]);