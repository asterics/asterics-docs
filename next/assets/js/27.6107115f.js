(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1979:function(t,n,e){},1980:function(t,n,e){},3952:function(t,n,e){"use strict";var i=e(1979);e.n(i).a},3953:function(t,n,e){"use strict";var i=e(1980);e.n(i).a},3975:function(t,n,e){"use strict";e.r(n);var i=e(28),o={name:"Solutions",methods:{onSlideChangeStart:function(){i.a.$emit("slide-change-transition-start")},onSlideChangeEnd:function(){i.a.$emit("slide-change-transition-end")},onPrevious:function(){this.$refs.previous.click()},onNext:function(){this.$refs.next.click()}},data:function(){return{options:{a11y:!0,loop:!1,grabCursor:!0,mode:"horizontal",keyboard:{enabled:!0},autoplay:{delay:7e3,disableOnInteraction:!0},pagination:{el:".swiper-pagination",dynamicBullets:!0,clickable:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}}},a=(e(3952),e(3953),e(2)),s=Object(a.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("swiper",{ref:"swiper",staticClass:"swiper",attrs:{options:t.options},on:{"slide-change-transition-start":t.onSlideChangeStart,"slide-change-transition-end":t.onSlideChangeEnd}},[t._t("default"),t._v(" "),e("div",{ref:"previous",staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),t.onPrevious(n))}},slot:"button-prev"}),t._v(" "),e("div",{ref:"next",staticClass:"swiper-button-next",attrs:{slot:"button-next"},on:{keydown:function(n){return!n.type.indexOf("key")&&t._k(n.keyCode,"space",32,n.key,[" ","Spacebar"])?null:(n.preventDefault(),t.onNext(n))}},slot:"button-next"}),t._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)}),[],!1,null,"6f33f8f4",null);n.default=s.exports}}]);