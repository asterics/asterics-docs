(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1304:function(e,t,r){"use strict";r.r(t);var s=r(21),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"osc-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osc-server"}},[e._v("#")]),e._v(" Osc Server")]),e._v(" "),s("h3",{attrs:{id:"component-type-sensor-subcategory-communication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-communication"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Communication)")]),e._v(" "),s("p",[e._v("The OscServer component enables the ARE to receive messages using the OpenSoundControl (OSC) protocol. The OscServer can receive various OSC data messages which can be divided in the individual data segments and forwarded to the output ports. The properties are used for the segmentation of the individual information segments of a whole OSC message. This plugin utilizes the NetUtil java library ("),s("a",{attrs:{href:"http://www.sciss.de/netutil/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.sciss.de/netutil/"),s("OutboundLink")],1),e._v(") for the OSC implementation, it is ©opyrighted 2004-2011 by Hanns Holger Rutz and released under the GNU Lesser General Public License.")]),e._v(" "),s("p",[s("img",{attrs:{src:r(2709),alt:"Screenshot: OscServer plugin",title:"Screenshot: OscServer plugin"}}),s("br"),e._v("\nOscServer plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("ul",[s("li",[e._v("Any OSC client software which sends data to the server e.g. ARE OscOutClient Plugin, various OSC Apps for Android and various PC software.")]),e._v(" "),s("li",[e._v("Check your firewall configuration and network settings to ensure that OSC messages are not blocked.")]),e._v(" "),s("li",[e._v("Exact knowledge about the structure of the OSC message, to determine the OSC message structure refere to the OSC client documentation or utilze a neworksniffer e.g. Wireshark ("),s("a",{attrs:{href:"http://www.wireshark.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("www.wireshark.org"),s("OutboundLink")],1),e._v(")")])]),e._v(" "),s("h2",{attrs:{id:"functional-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functional-principle"}},[e._v("#")]),e._v(" Functional Principle")]),e._v(" "),s("p",[s("img",{attrs:{src:r(2710),alt:"Symblic OSC Message",title:"Symbolic OSC Message"}}),s("br"),e._v("\nSymbolic OSC Message")]),e._v(" "),s("p",[e._v("Each time the OscServer Plugin receives a OSC message it decompose it according to the plugin properties (AddressCH[n], ArgNrCH[n]) and forward it to the output ports. The OscServer is able to receive OSC messages with arguments of the type float and string. The OSC datatype float is typcased to the ARE type double.")]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("out 1-8 [double]:")]),e._v(" Forward data form the OSC message.")]),e._v(" "),s("li",[s("strong",[e._v("out 9-12 [string]:")]),e._v(" Forward strings from the OSC message")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Port [integer]:")]),e._v(" This value specifies the OscServer port.")]),e._v(" "),s("li",[s("strong",[e._v("AddressCH[n] [string]:")]),e._v(" This value specifies the OSC input address e.g. “/path/to/sensor/accxyz”.")]),e._v(" "),s("li",[s("strong",[e._v("ArgNrCH[n] [integer]:")]),e._v(" The Argument Number defines which single argument of an entire message is picked out and forwarded to the output. The first argument of an OSC message begins with the index value zero, e.g. the first argument has the index 0, the second the index 1 and so on.")])]),e._v(" "),s("h2",{attrs:{id:"referred-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referred-plugins"}},[e._v("#")]),e._v(" Referred Plugins")]),e._v(" "),s("ul",[s("li",[e._v("OscOutClient")]),e._v(" "),s("li",[e._v("OpenVibe")]),e._v(" "),s("li",[e._v("OscGestureFollower")])])])}),[],!1,null,null,null);t.default=i.exports},2709:function(e,t,r){e.exports=r.p+"assets/img/OscServer.1e05d9e8.jpg"},2710:function(e,t,r){e.exports=r.p+"assets/img/OscMsg.2cebaa20.jpg"}}]);