(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{373:function(t,i,e){},374:function(t,i,e){},828:function(t,i,e){"use strict";e(373)},829:function(t,i,e){"use strict";e(374)},840:function(t,i,e){"use strict";e.r(i);var n=e(14),s=e(381),a={name:"Description",props:{title:{type:String,default:""}}},r=(e(828),e(2)),o=Object(r.a)(a,(function(){var t=this,i=t._self._c;return i("div",{staticClass:"container"},[i("div",{staticClass:"title"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),i("div",{staticClass:"description"},[t._t("default",(function(){return[t._v("Description")]}))],2)])}),[],!1,null,"62d3a188",null).exports,l={name:"UseCase",components:{Media:s.a,Description:o},props:{link:{type:String,default:"#"},media:{type:String,default:null},title:{type:String,default:""},stop:{type:Boolean,default:!1}},data:()=>({active:!0}),methods:{classes(){return Array.from(this.$refs.slide.parentNode.classList)||[]},onSlideChangeTransitionStart(){this.stop&&(this.active=!0)},onSlideChangeTransitionEnd(){this.stop&&(this.active=this.classes().includes("swiper-slide-active"))}},created(){n.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart),n.a.$on("slide-change-transition-end",this.onSlideChangeTransitionEnd)},beforeDestroy(){n.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart),n.a.$off("slide-change-transition-end",this.onSlideChangeTransitionEnd)}},c=(e(829),Object(r.a)(l,(function(){var t=this,i=t._self._c;return i("swiper-slide",[i("div",{ref:"slide",staticClass:"slide"},[i("Media",{attrs:{content:t.media,active:t.active}}),t._v(" "),i("div",{staticClass:"content"},[i("Description",{attrs:{title:t.title}},[t._t("default",(function(){return[t._v("Use Case")]}))],2)],1)],1)])}),[],!1,null,"6c18d18a",null));i.default=c.exports}}]);