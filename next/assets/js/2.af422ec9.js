(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1246:function(e,t,n){"use strict";var o=n(794);n.n(o).a},704:function(e,t,n){"use strict";var o=n(2),r=n(39).find,a=n(129),i=n(20),s=!0,u=i("find");"find"in[]&&Array(1).find((function(){s=!1})),o({target:"Array",proto:!0,forced:s||!u},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("find")},712:function(e,t,n){},771:function(e,t,n){"use strict";var o=n(712);n.n(o).a},782:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=s(n(783)),a=s(n(784)),i=s(n(786));function s(e){return e&&e.__esModule?e:{default:e}}var u=void 0;t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],s=(0,r.default)();if(u||(u=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=i.default.proxyEvents(s);var c=new Promise((function(n){"object"===(void 0===e?"undefined":o(e))&&e.playVideo instanceof Function?n(e):u.then((function(o){var r=new o.Player(e,t);return s.on("ready",(function(){n(r)})),null}))})),l=i.default.promisifyPlayer(c,n);return l.on=s.on,l.off=s.off,l},e.exports=t.default},783:function(e,t,n){"use strict";var o;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/o=function(){var e={},t={};return e.on=function(e,n){var o={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(o),o},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var o,r=t[e];if(r)for(o=r.length;o--;)r[o].handler(n)},e},e.exports=o},784:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(785),a=(o=r)&&o.__esModule?o:{default:o};t.default=function(e){return new Promise((function(t){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)t(window.YT);else{var n="http:"===window.location.protocol?"http:":"https:";(0,a.default)(n+"//www.youtube.com/iframe_api",(function(t){t&&e.trigger("error",t)}));var o=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){o&&o(),t(window.YT)}}}))},e.exports=t.default},785:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},i.type=t.type||"text/javascript",i.charset=t.charset||"utf8",i.async=!("async"in t)||!!t.async,i.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(i,t.attrs),t.text&&(i.text=""+t.text),("onload"in i?n:o)(i,r),i.onload||n(i,r),a.appendChild(i)}},786:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(787)),r=s(n(790)),a=s(n(791)),i=s(n(792));function s(e){return e&&e.__esModule?e:{default:e}}var u=(0,o.default)("youtube-player"),c={proxyEvents:function(e){var t={},n=function(n){var o="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[o]=function(t){u('event "%s"',o,t),e.trigger(n,t)}},o=!0,r=!1,i=void 0;try{for(var s,c=a.default[Symbol.iterator]();!(o=(s=c.next()).done);o=!0){n(s.value)}}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return t},promisifyPlayer:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={},o=function(o){t&&i.default[o]?n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then((function(e){var t=i.default[o],r=e.getPlayerState(),a=e[o].apply(e,n);return t.stateChangeRequired||Array.isArray(t.acceptableStates)&&-1===t.acceptableStates.indexOf(r)?new Promise((function(n){e.addEventListener("onStateChange",(function o(){var r=e.getPlayerState(),a=void 0;"number"==typeof t.timeout&&(a=setTimeout((function(){e.removeEventListener("onStateChange",o),n()}),t.timeout)),Array.isArray(t.acceptableStates)&&-1!==t.acceptableStates.indexOf(r)&&(e.removeEventListener("onStateChange",o),clearTimeout(a),n())}))})).then((function(){return a})):a}))}:n[o]=function(){for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.then((function(e){return e[o].apply(e,n)}))}},a=!0,s=!1,u=void 0;try{for(var c,l=r.default[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var d=c.value;o(d)}}catch(e){s=!0,u=e}finally{try{!a&&l.return&&l.return()}finally{if(s)throw u}}return n}};t.default=c,e.exports=t.default},787:function(e,t,n){function o(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=n(788)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var r=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(a=r))})),e.splice(a,0,o)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(o())},788:function(e,t,n){var o;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,a=r-(o||r);e.diff=a,e.prev=o,e.curr=r,o=r;for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var u=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(n,o){if("%%"===n)return n;u++;var r=t.formatters[o];if("function"==typeof r){var a=i[u];n=r.call(e,a),i.splice(u,1),u--}return n})),t.formatArgs.call(e,i);var c=n.log||t.log||console.log.bind(console);c.apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,o=0;for(n in e)o=(o<<5)-o+e.charCodeAt(n),o|=0;return t.colors[Math.abs(o)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),o=n.length,r=0;r<o;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(789),t.names=[],t.skips=[],t.formatters={}},789:function(e,t){var n=1e3,o=6e4,r=60*o,a=24*r;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var s,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*o;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?i(s=e,a,"day")||i(s,r,"hour")||i(s,o,"minute")||i(s,n,"second")||s+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=o)return Math.round(e/o)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},790:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],e.exports=t.default},791:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},792:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(793),a=(o=r)&&o.__esModule?o:{default:o};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},793:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},794:function(e,t,n){},814:function(e,t,n){"use strict";n(128);var o={name:"Figure",props:{src:{type:String,required:!0},zoom:{type:Boolean,default:!0},alt:{type:String,default:""}},computed:{source:function(){return this.src.startsWith("/")?this.$withBase(this.src):this.src}}},r=(n(771),n(3)),a=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container",class:{"no-zoom":!this.zoom}},[t("img",{attrs:{src:this.source,alt:this.alt}})])}),[],!1,null,"4098f926",null);t.a=a.exports},819:function(e,t,n){"use strict";n(704),n(32),n(88);var o=n(814),r=n(34),a=n(782),i=n.n(a),s={name:"Video",props:{code:{type:String,required:!0},nocookie:{type:Boolean,default:!1},stop:{type:Boolean,default:!1},active:{type:Boolean,default:!0}},data:function(){return{player:null,ready:!1}},computed:{id:function(){return"youtube-player-".concat(this.code)}},methods:{onSlideChangeTransitionStart:function(){this.player&&this.ready&&(this.stop?this.player.stopVideo():this.player.pauseVideo())}},mounted:function(){var e=this;this.player||(this.player=i()(this.id,{wmode:"transparent",host:"https://www.youtube-nocookie.com",videoId:this.code,playerVars:{wmode:"transparent",showinfo:0,autohide:1,color:"white",origin:window?window.location.origin:this.$themeConfig.host}}),this.player.on("ready",(function(t){e.ready=!0})),r.a.$on("slide-change-transition-start",this.onSlideChangeTransitionStart))},beforeDestroy:function(){r.a.$off("slide-change-transition-start",this.onSlideChangeTransitionStart)}},u=(n(1246),n(3)),c=Object(u.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.active,expression:"active"}]},[t("div",{staticClass:"player",staticStyle:{width:"100%",height:"100%"},attrs:{id:this.id}})])}),[],!1,null,"1da8540b",null).exports,l={name:"Media",components:{Figure:o.a,Video:c},props:{content:{type:String,default:null},active:{type:Boolean,default:!1},stop:{type:Boolean,default:!1},zoom:{type:Boolean,default:!0}},computed:{isYoutube:function(){var e=this,t=[/https:\/\/.*youtube\.com.*v=(.*?)(&.*)?$/,/https?:\/\/.*youtu\.be\/(.*?)(\?.*)?$/].find((function(t){return t.exec(e.content)}));return!(!this.content||!t)&&this.content.replace(t,(function(e,t){return t}))}}},d=Object(u.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"media"},[e.content&&!e.isYoutube?n("Figure",{attrs:{src:e.content,zoom:e.zoom}}):e.isYoutube?n("Video",{attrs:{code:e.isYoutube,stop:e.stop,active:e.active,nocookie:""}}):n("div",{staticClass:"media-default"})],1)}),[],!1,null,"f5db23d0",null);t.a=d.exports}}]);