(window.webpackJsonp=window.webpackJsonp||[]).push([[29,97],{1933:function(t,e,n){},2025:function(t,e,n){"use strict";var a=n(1933);n.n(a).a},2026:function(t,e,n){},2087:function(t,e,n){"use strict";n.r(e);var a=n(33),o=n(0),s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},u={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"New content is available.",buttonText:"Refresh"},updateEvent:null}},computed:{popupConfig:function(){return Object(o.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"New content is available.",buttonText:"Refresh"}&&(this.rawPopupConfig=s)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(2025),n(2)),p=Object(i.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},3977:function(t,e,n){"use strict";var a=n(2026);n.n(a).a},4033:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(2087).default}},o=(n(3977),n(2)),s=Object(o.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,o=e.reload,s=e.message,u=e.buttonText;return n("div",{},[a?n("div",{staticClass:"asterics-sw-update-popup"},[t._v("\n      "+t._s(s)+"\n      "),n("br"),t._v(" "),n("button",{on:{click:o}},[t._v(t._s(u))])]):t._e()])}}])})}),[],!1,null,null,null);e.default=s.exports}}]);