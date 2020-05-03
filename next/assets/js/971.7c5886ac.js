(window.webpackJsonp=window.webpackJsonp||[]).push([[971],{1598:function(e,t,s){"use strict";s.r(t);var r=s(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"osc-gesture-follower"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#osc-gesture-follower"}},[e._v("#")]),e._v(" Osc Gesture Follower")]),e._v(" "),r("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feature-detection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feature-detection"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),r("p",[e._v("The OscGestureFollower component copules the ARE with the external gesture recognition software GestureFollower. The program is copyrighted by IRCAM. GestureFollower is stored in the ARE subfolder tools/GestureFollower. Gesture data can be stored and loaded from files in this subdirectory, these files have the extension “.mubu”. The communication between GestureFollower and the ARE is based on the OpenSoundControl (OSC) protocol. This plugin utilizes the NetUtil java library (http://www.sciss.de/netutil/) for the OSC implementation, it is ©opyrighted 2004-2011 by Hanns Holger Rutz and released under the GNU Lesser General Public License.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(3028),alt:"OscGestureFollower howto",title:"OscGestureFollower howto"}}),r("br"),e._v("\nOscGestureFollower howto")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("ul",[r("li",[e._v("The plugin requires the gfOSC_v1.exe in subfolder tools/GestureFollower, which implements the actual gesture follower algorithms.")]),e._v(" "),r("li",[e._v("Check your firewall configuration and network settings to ensure that OSC messages are not blocked.")])]),e._v(" "),r("h2",{attrs:{id:"functional-principle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functional-principle"}},[e._v("#")]),e._v(" Functional Principle")]),e._v(" "),r("p",[e._v("Input data is received through CH1 to CH4 e.g. from sensors like the acceleration measurement unit. Not all inputs must be connected, but the synchronized checkboxes have to be checked correct. The events must be connected like illustrated in the picture. First the gestures must be teached in. To teach in the first gesture, send an event into the ‘learn1’ eventListener. After finishing the first gesture, send an event to ‘learn2’ to teach in the second gesture, and so on. After all gestures are teached in, send the ‘stoplearn’ event. To clear all gestures send the ‘clear’ event. To start the gesture recognition process, send the ‘follow’ event. To stop the gesture following process, send the ‘stop’ event. The ‘load’ and ‘save’ events can be used to load or store the learned gesture data into the given filename.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("CH1 - CH4 [double]:")]),e._v(" The input port which receive data values. "),r("strong",[e._v("These 4 input ports support synchronization")])])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("likeliest [double]:")]),e._v(" While the gesturefollower is in ‘follwing mode’ the most likeliest gesture is indicated on the likeliest output port. Before it can sample the input data and recognize a gesture, some data must be teached in.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("InPort [integer]:")]),e._v(" This value specifies the Port where OscMessages form the gesture follower are received.")]),e._v(" "),r("li",[r("strong",[e._v("OutPort [integer]:")]),e._v(" This value specifies the Port where OscMessages are send to.")]),e._v(" "),r("li",[r("strong",[e._v("filename [string]:")]),e._v(" Filename for the gesture data (load or save, .mubu file stored in the ARE subfoler tools/GestureFollower/). "),r("strong",[e._v("Supports value suggestions from ARE (dynamic property)")]),e._v(".")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-ports"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-ports"}},[e._v("#")]),e._v(" Event Listener Ports")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("stop:")]),e._v(" this event stops the gesture following")]),e._v(" "),r("li",[r("strong",[e._v("stoplearn:")]),e._v(" this event stops the gesture learning process")]),e._v(" "),r("li",[r("strong",[e._v("learn1 - learn5:")]),e._v(" these events select gestures 1 - 5 for learning")]),e._v(" "),r("li",[r("strong",[e._v("learn1 - learn5:")]),e._v(" these events select gestures 1 - 5 for learning")]),e._v(" "),r("li",[r("strong",[e._v("clear:")]),e._v(" this event clears learned gestures")]),e._v(" "),r("li",[r("strong",[e._v("follow:")]),e._v(" this event starts the gesture recognition phase")]),e._v(" "),r("li",[r("strong",[e._v("load:")]),e._v(" this event loads gesture data from file")]),e._v(" "),r("li",[r("strong",[e._v("save:")]),e._v(" this event saves gesture data to file")])]),e._v(" "),r("h2",{attrs:{id:"referred-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#referred-plugins"}},[e._v("#")]),e._v(" Referred Plugins")]),e._v(" "),r("ul",[r("li",[e._v("OscOutClient")]),e._v(" "),r("li",[e._v("OpenVibe")]),e._v(" "),r("li",[e._v("OscServer")])])])}),[],!1,null,null,null);t.default=o.exports},3028:function(e,t,s){e.exports=s.p+"assets/img/OscGestureFollower.2b835bc5.jpg"}}]);