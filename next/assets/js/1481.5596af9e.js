(window.webpackJsonp=window.webpackJsonp||[]).push([[1481],{3987:function(t,e,n){"use strict";n.r(e);var i=n(28),o={name:"UseCases",methods:{onSlideChangeStart:function(){i.a.$emit("slide-change-transition-start")},onSlideChangeEnd:function(){i.a.$emit("slide-change-transition-end")},onPrevious:function(){this.$refs.previous.click()},onNext:function(){this.$refs.next.click()}},data:function(){return{options:{a11y:!0,loop:!1,grabCursor:!0,mode:"horizontal",keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{swiper:function(){return this.$refs.swiper.$swiper}},mounted:function(){}},a=n(2),s=Object(a.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.options},on:{"slide-change-transition-start":t.onSlideChangeStart,"slide-change-transition-end":t.onSlideChangeEnd}},[t._t("default"),t._v(" "),n("div",{ref:"previous",staticClass:"swiper-button-prev",attrs:{slot:"button-prev",tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:(e.preventDefault(),t.onPrevious(e))}},slot:"button-prev"}),t._v(" "),n("div",{ref:"next",staticClass:"swiper-button-next",attrs:{slot:"button-next",tabindex:"0"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:(e.preventDefault(),t.onNext(e))}},slot:"button-next"}),t._v(" "),n("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)}),[],!1,null,"06559d54",null);e.default=s.exports}}]);