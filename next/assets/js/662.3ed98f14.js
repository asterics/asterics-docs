(window.webpackJsonp=window.webpackJsonp||[]).push([[662],{2512:function(e,t,i){e.exports=i.p+"assets/img/MediaPlayer.356cc94f.jpg"},885:function(e,t,i){"use strict";i.r(t);var a=i(2),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mediaplayer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mediaplayer"}},[e._v("#")]),e._v(" MediaPlayer")]),e._v(" "),a("h3",{attrs:{id:"component-type-actuator-subcategory-file-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-file-system"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: File System)")]),e._v(" "),a("p",[e._v("This component allows to play media files supported by the local system. The supported file type depends on the installed media CODEC, but generally all media formats supported by the VLC player should work. Please note that the VLC player (32 bit version) should be installed in the default location: C:/Program Files/VideoLan or C:/Program Files (x86)/VideoLan")]),e._v(" "),a("p",[a("img",{attrs:{src:i(2512),alt:"Screenshot: MediaPlayer plugin",title:"Screenshot: MediaPlayer plugin"}}),a("br"),e._v("\nMediaPlayer plugin")]),e._v(" "),a("h2",{attrs:{id:"input-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("filename [string]:")]),e._v(" Input port for the mediafile name. The file must be present in the filesystem of the ARE. Sending to this port will change the media file.")]),e._v(" "),a("li",[a("strong",[e._v("position [double]:")]),e._v(" Position in the media file (0-100%) - Sending to this port will set the position in the media file.")]),e._v(" "),a("li",[a("strong",[e._v("rate [double]:")]),e._v(" The playback speed of the media file (0-500%) - Sending to this port will change the playback speed.")])]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("pos [double]:")]),e._v(" The current playback position in percent.")])]),e._v(" "),a("h2",{attrs:{id:"event-listener-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("play:")]),e._v(" Triggering this event will start (or resume) the mediafile playback.")]),e._v(" "),a("li",[a("strong",[e._v("pause:")]),e._v(" Triggering this event will pause the mediafile playback.")]),e._v(" "),a("li",[a("strong",[e._v("stop:")]),e._v(" Triggering this event will stop the mediafile playback.")]),e._v(" "),a("li",[a("strong",[e._v("reset:")]),e._v(" Triggering this event will reset the mediafile playback to position 0.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("filename [string]:")]),e._v(" Initial mediafile name. The file must be present in the filesystem the ARE. This is a dynamic property: a synchronized ARE can suggest available files which are located in the data/videos and data/music subfolders of the ARE.")]),e._v(" "),a("li",[a("strong",[e._v("autoplay [boolean]:")]),e._v(" if selected, the file will play automatically.")]),e._v(" "),a("li",[a("strong",[e._v("displayGUI [boolean]:")]),e._v(" if selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")]),e._v(" "),a("li",[a("strong",[e._v("pathToVLC [string]:")]),e._v(" path to the VLC installation (32-bit version needed).")])])])}),[],!1,null,null,null);t.default=s.exports}}]);