(window.webpackJsonp=window.webpackJsonp||[]).push([[283],{853:function(e,t,n){"use strict";n.r(t);var a=n(14),i={name:"UseCases",methods:{onSlideChangeStart(){a.a.$emit("slide-change-transition-start")},onSlideChangeEnd(){a.a.$emit("slide-change-transition-end")},onPrevious(){this.$refs.previous.click()},onNext(){this.$refs.next.click()}},data:()=>({options:{a11y:!0,loop:!1,grabCursor:!0,mode:"horizontal",keyboard:{enabled:!0},autoplay:{delay:5e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}),computed:{swiper(){return this.$refs.swiper.$swiper}},mounted(){}},s=n(2),o=Object(s.a)(i,(function(){var e=this,t=e._self._c;return t("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:e.options},on:{"slide-change-transition-start":e.onSlideChangeStart,"slide-change-transition-end":e.onSlideChangeEnd}},[e._t("default"),e._v(" "),t("div",{ref:"previous",staticClass:"swiper-button-prev",attrs:{slot:"button-prev",tabindex:"0"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.onPrevious.apply(null,arguments))}},slot:"button-prev"}),e._v(" "),t("div",{ref:"next",staticClass:"swiper-button-next",attrs:{slot:"button-next",tabindex:"0"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.onNext.apply(null,arguments))}},slot:"button-next"}),e._v(" "),t("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)}),[],!1,null,"4db285a7",null);t.default=o.exports}}]);