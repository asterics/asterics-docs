(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{317:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s(n(318)),r=s(n(319)),a=s(n(327));function s(e){return e&&e.__esModule?e:{default:e}}let i;t.default=(e,t={},n=!1)=>{const s=(0,o.default)();if(i||(i=(0,a.default)(s)),t.events)throw new Error("Event handlers cannot be overwritten.");if("string"==typeof e&&!document.getElementById(e))throw new Error('Element "'+e+'" does not exist.');t.events=r.default.proxyEvents(s);const u=new Promise(n=>{if("object"==typeof e&&e.playVideo instanceof Function){n(e)}else i.then(o=>{const r=new o.Player(e,t);return s.on("ready",()=>{n(r)}),null})}),c=r.default.promisifyPlayer(u,n);return c.on=s.on,c.off=s.off,c},e.exports=t.default},318:function(e,t,n){"use strict";var o;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/o=function(){var e={},t={};return e.on=function(e,n){var o={name:e,handler:n};return t[e]=t[e]||[],t[e].unshift(o),o},e.off=function(e){var n=t[e.name].indexOf(e);-1!==n&&t[e.name].splice(n,1)},e.trigger=function(e,n){var o,r=t[e];if(r)for(o=r.length;o--;)r[o].handler(n)},e},e.exports=o},319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(320)),r=i(n(323)),a=i(n(325)),s=i(n(326));function i(e){return e&&e.__esModule?e:{default:e}}const u=(0,o.default)("youtube-player"),c={proxyEvents:e=>{const t={};for(const n of a.default){const o="on"+n.slice(0,1).toUpperCase()+n.slice(1);t[o]=t=>{u('event "%s"',o,t),e.trigger(n,t)}}return t},promisifyPlayer:(e,t=!1)=>{const n={};for(const o of s.default)t&&r.default[o]?n[o]=(...t)=>e.then(e=>{const n=r.default[o],a=e.getPlayerState(),s=e[o].apply(e,t);return n.stateChangeRequired||Array.isArray(n.acceptableStates)&&!n.acceptableStates.includes(a)?new Promise(t=>{const o=()=>{const r=e.getPlayerState();let a;"number"==typeof n.timeout&&(a=setTimeout(()=>{e.removeEventListener("onStateChange",o),t()},n.timeout)),Array.isArray(n.acceptableStates)&&n.acceptableStates.includes(r)&&(e.removeEventListener("onStateChange",o),clearTimeout(a),t())};e.addEventListener("onStateChange",o)}).then(()=>s):s}):n[o]=(...t)=>e.then(e=>e[o].apply(e,t));return n}};t.default=c,e.exports=t.default},320:function(e,t,n){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const n="color: "+this.color;t.splice(1,0,n,"color: inherit");let o=0,r=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(o++,"%c"===e&&(r=o))}),t.splice(r,0,n)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=n(321)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},321:function(e,t,n){e.exports=function(e){function t(e){let n,r,a,s=null;function i(...e){if(!i.enabled)return;const o=i,r=Number(new Date),a=r-(n||r);o.diff=a,o.prev=n,o.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let s=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(n,r)=>{if("%%"===n)return"%";s++;const a=t.formatters[r];if("function"==typeof a){const t=e[s];n=a.call(o,t),e.splice(s,1),s--}return n}),t.formatArgs.call(o,e);(o.log||t.log).apply(o,e)}return i.namespace=e,i.useColors=t.useColors(),i.color=t.selectColor(e),i.extend=o,i.destroy=t.destroy,Object.defineProperty(i,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==s?s:(r!==t.namespaces&&(r=t.namespaces,a=t.enabled(e)),a),set:e=>{s=e}}),"function"==typeof t.init&&t.init(i),i}function o(e,n){const o=t(this.namespace+(void 0===n?":":n)+e);return o.log=this.log,o}function r(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(r),...t.skips.map(r).map(e=>"-"+e)].join(",");return t.enable(""),e},t.enable=function(e){let n;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const o=("string"==typeof e?e:"").split(/[\s,]+/),r=o.length;for(n=0;n<r;n++)o[n]&&("-"===(e=o[n].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let n,o;for(n=0,o=t.skips.length;n<o;n++)if(t.skips[n].test(e))return!1;for(n=0,o=t.names.length;n<o;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n(322),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach(n=>{t[n]=e[n]}),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let n=0;for(let t=0;t<e.length;t++)n=(n<<5)-n+e.charCodeAt(t),n|=0;return t.colors[Math.abs(n)%t.colors.length]},t.enable(t.load()),t}},322:function(e,t){var n=1e3,o=6e4,r=60*o,a=24*r;function s(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var s=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*s;case"days":case"day":case"d":return s*a;case"hours":case"hour":case"hrs":case"hr":case"h":return s*r;case"minutes":case"minute":case"mins":case"min":case"m":return s*o;case"seconds":case"second":case"secs":case"sec":case"s":return s*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?s(i=e,a,"day")||s(i,r,"hour")||s(i,o,"minute")||s(i,n,"second")||i+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=o)return Math.round(e/o)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},323:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(324),a=(o=r)&&o.__esModule?o:{default:o};t.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},e.exports=t.default},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},e.exports=t.default},325:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],e.exports=t.default},326:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],e.exports=t.default},327:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(328),a=(o=r)&&o.__esModule?o:{default:o};t.default=e=>new Promise(t=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function)return void t(window.YT);{const t="http:"===window.location.protocol?"http:":"https:";(0,a.default)(t+"//www.youtube.com/iframe_api",t=>{t&&e.trigger("error",t)})}const n=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{n&&n(),t(window.YT)}}),e.exports=t.default},328:function(e,t){function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function o(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}e.exports=function(e,t,r){var a=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");"function"==typeof t&&(r=t,t={}),t=t||{},r=r||function(){},s.type=t.type||"text/javascript",s.charset=t.charset||"utf8",s.async=!("async"in t)||!!t.async,s.src=e,t.attrs&&function(e,t){for(var n in t)e.setAttribute(n,t[n])}(s,t.attrs),t.text&&(s.text=""+t.text),("onload"in s?n:o)(s,r),s.onload||n(s,r),a.appendChild(s)}},378:function(e,t,n){},901:function(e,t,n){"use strict";n(378)},925:function(e,t,n){"use strict";n.r(t);var o=n(317),r=n.n(o),a={name:"Video",props:{code:{type:String,required:!0}},data:()=>({player:null,ready:!1}),computed:{id(){return"youtube-player-"+this.code}},mounted(){this.player||(this.player=r()(this.id,{wmode:"transparent",host:"https://www.youtube-nocookie.com",videoId:this.code,playerVars:{wmode:"transparent",showinfo:0,autohide:1,color:"white",origin:window?window.location.origin:this.$themeConfig.host}}),this.player.on("ready",e=>{this.ready=!0}))}},s=(n(901),n(2)),i=Object(s.a)(a,(function(){var e=this._self._c;return e("div",{staticClass:"video-container"},[e("div",{staticClass:"yt-player",staticStyle:{width:"100%",height:"100%"},attrs:{id:this.id}})])}),[],!1,null,"32c7b29a",null);t.default=i.exports}}]);