(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1221:function(e,t,n){"use strict";var r=n(177),o=n(19),a=n(1222),i=n(1223),s=n(17),u=n(51),c=n(1224);e.exports=function(e){var t,n,l,f,d,p,y=o(e),h="function"==typeof this?this:Array,v=arguments.length,m=v>1?arguments[1]:void 0,g=void 0!==m,w=c(y),b=0;if(g&&(m=r(m,v>2?arguments[2]:void 0,2)),null==w||h==Array&&i(w))for(n=new h(t=s(y.length));t>b;b++)p=g?m(y[b],b):y[b],u(n,b,p);else for(d=(f=w.call(y)).next,n=new h;!(l=d.call(f)).done;b++)p=g?a(f,m,[l.value,b],!0):l.value,u(n,b,p);return n.length=b,n}},1222:function(e,t,n){var r=n(12);e.exports=function(e,t,n,o){try{return o?t(r(n)[0],n[1]):t(n)}catch(t){var a=e.return;throw void 0!==a&&r(a.call(e)),t}}},1223:function(e,t,n){var r=n(5),o=n(78),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},1224:function(e,t,n){var r=n(178),o=n(78),a=n(5)("iterator");e.exports=function(e){if(null!=e)return e[a]||e["@@iterator"]||o[r(e)]}},1225:function(e,t,n){var r=n(5)("iterator"),o=!1;try{var a=0,i={next:function(){return{done:!!a++}},return:function(){o=!0}};i[r]=function(){return this},Array.from(i,(function(){throw 2}))}catch(e){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var a={};a[r]=function(){return{next:function(){return{done:n=!0}}}},e(a)}catch(e){}return n}},1226:function(e,t,n){"use strict";var r=n(766);n.n(r).a},675:function(e,t,n){"use strict";var r=n(3),o=n(33).find,a=n(107),i=n(15),s=!0,u=i("find");"find"in[]&&Array(1).find((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("find")},683:function(e,t,n){},743:function(e,t,n){"use strict";var r=n(683);n.n(r).a},754:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=s(n(755)),a=s(n(756)),i=s(n(758));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,o.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var c=new Promise((function(n){"object"===(void 0===e?"undefined":r(e))&&e.playVideo instanceof Function?n(e):u.then((function(r){var o=new r.Player(e,t);return s.on("ready",(function(){n(o)})),null}))})),l=i.default.promisifyPlayer(c,n);return l.on=s.on,l.off=s.off,l},e.exports=t.default},755:function(e,t,n){"use strict";var r;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/r=function(){var e={},t={};return e.on=function(e,n){var r={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(r),r},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var r,o=t[e];if(o)for(r=o.length;r--;)o[r].handler(n)},e},e.exports=r},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(757),a=(r=o)&&r.__esModule?r:{default:r};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var r=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){r&&r(),t(window.YT)}}}))},e.exports=t.default},757:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function r(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,o){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:r)(i,o),i.onload||n(i,o),a.appendChild(i)}},758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s(n(759)),o=s(n(762)),a=s(n(763)),i=s(n(764));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,r.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var r="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[r]=function(t){u('event "%s"',r,t),e.trigger(n,t)}},r=!0,o=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(r=(s=c.next()).done);r=!0){n(s.value)}}catch(e){o=!0,i=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},r=function(r){t&&i.default[r]?n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){var t=i.default[r],o=e.getPlayerState(),a=e[r].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(o)?new Promise((function(n){e.addEventListener("onStateChange",(function r(){var o=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",r),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(o)&&(e.removeEventListener("onStateChange",r),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[r]=function(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];return e.then((function(e){return e[r].apply(e,n)}))}},a=!0,s=!1,u=void 0;try{for(var c,l=o.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var f=c.value;r(f)}}catch(e){s=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}return n}};t.default=c,e.exports=t.default},759:function(e,t,n){function r(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(760)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(r())},760:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;u++;var o=t.formatters[r];if("function"==typeof o){var a=i[u];n=o.call(e,a),i.splice(u,1),u--}return n})),t.formatArgs.call(e,i);var c=n.log||t.log||console.log.bind(console);c.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(761),t.names=[],t.skips=[],t.formatters={}},761:function(e,t){var n=1e3,r=6e4,o=60*r,a=24*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?i(s=e,a,"day")||i(s,o,"hour")||i(s,r,"minute")||i(s,n,"second")||s+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},762:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},763:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},764:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(765),a=(r=o)&&r.__esModule?r:{default:r};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},766:function(e,t,n){},785:function(e,t,n){"use strict";n(106);var r={name:"Figure",props:{src:{type:String,required:!0},zoom:{type:Boolean,default:!0},alt:{type:String,default:""}},computed:{source:function(){return this.src.startsWith("/")?this.$withBase(this.src):this.src}}},o=(n(743),n(2)),a=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",class:{"no-zoom":!this.zoom}},[t("img",{attrs:{src:this.source,alt:this.alt}})])}),[],!1,null,"4098f926",null);t.a=a.exports},790:function(e,t,n){var r=n(3),o=n(1221);r({target:"Array",stat:!0,forced:!n(1225)((function(e){Array.from(e)}))},{from:o})},793:function(e,t,n){"use strict";n(675),n(27),n(76);var r=n(785),o=n(28),a=n(754),i=n.n(a),s={name:"Video",props:{code:{type:String,required:!0},nocookie:{type:Boolean,default:!1},stop:{type:Boolean,default:!1},active:{type:Boolean,default:!0}},data:function(){return{player:null,ready:!1}},computed:{id:function(){return"youtube-player-".concat(this.code)}},methods:{onSlideChangeTransitionStart:function(){this.player&&this.ready&&(this.stop?this.player.stopVideo():this.player.pauseVideo())}},mounted:function(){var e=this;this.player||(this.player=i()(this.id,{wmode:"transparent",host:"https://www.youtube-nocookie.com",videoId:this.code,playerVars:{wmode:"transparent",showinfo:0,autohide:1,color:"white",origin:window?window.location.origin:this.$themeConfig.host}}),this.player.on("ready",(function(t){e.ready=!0})),o.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart))},beforeDestroy:function(){o.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart)}},u=(n(1226),n(2)),c=Object(u.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.active,expression:"active"}]},[t("div",{staticClass:"player",staticStyle:{width:"100%",height:"100%"},attrs:{id:this.id}})])}),[],!1,null,"1da8540b",null).exports,l={name:"Media",components:{Figure:r.a,Video:c},props:{content:{type:String,default:null},active:{type:Boolean,default:!1},stop:{type:Boolean,default:!1},zoom:{type:Boolean,default:!0}},computed:{isYoutube:function(){var e=this,t=[/https:\/\/.*youtube\.com.*v=(.*?)(&.*)?$/,/https?:\/\/.*youtu\.be\/(.*?)(\?.*)?$/].find((function(t){return t.exec(e.content)}));return!(!this.content||!t)&&this.content.replace(t,(function(e,t){return t}))}}},f=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"media"},[e.content&&!e.isYoutube?n("Figure",{attrs:{src:e.content,zoom:e.zoom}}):e.isYoutube?n("Video",{attrs:{code:e.isYoutube,stop:e.stop,active:e.active,nocookie:""}}):n("div",{staticClass:"media-default"})],1)}),[],!1,null,"f5db23d0",null);t.a=f.exports}}]);