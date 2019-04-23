(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{571:function(e,t,r){e.exports=r.p+"assets/img/oscoutclient.dae373d7.jpg"},994:function(e,t,r){"use strict";r.r(t);var s=r(15),i=Object(s.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"osc-out-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#osc-out-client","aria-hidden":"true"}},[e._v("#")]),e._v(" Osc Out Client")]),e._v(" "),s("p",[e._v("Component Type: actuator (Subcategory: Communication)")]),e._v(" "),s("p",[e._v("The OscOutClient plugin enables the ARE to broadcast messages using the OpenSoundControl (OSC) protocol. This plugin utilizes the NetUtil java library ("),s("a",{attrs:{href:"http://www.sciss.de/netutil/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.sciss.de/netutil/"),s("OutboundLink")],1),e._v(") for the OSC implementation, it is ©opyrighted 2004-2011 by Hanns Holger Rutz and released under the GNU Lesser General Public License.")]),e._v(" "),s("p",[s("img",{attrs:{src:r(571),alt:"Screenshot: OscServer plugin",title:"Screenshot: OscServer plugin"}})]),e._v(" "),s("p",[e._v("OscOutClient plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("ul",[s("li",[e._v("Nothing, works sand-alone within ARE")]),e._v(" "),s("li",[e._v("Check your firewall configuration and network settings to ensure that OSC messages are not blocked.")])]),e._v(" "),s("h2",{attrs:{id:"functional-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#functional-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Functional Description")]),e._v(" "),s("p",[e._v("The OscOutClient collects data form the inputs CH1-4 and assamble it to one OSC message with 4 arguments. The address for the OSC channel is set by the property AddressCh1. Furthermore the plugin has a StringIN input port. If the plugin receives a string it broadcast one OSC message with one string argument. The address for the string OSC channel is set by the property AddressStringCh.")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("CH[1-4] [double]:")]),e._v(" Input port for the data, eg. a oszilloscope or any other double value.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Port [integer]:")]),e._v(" This value specifies the OscOutClient port.")]),e._v(" "),s("li",[s("strong",[e._v("PeerAddress [string]:")]),e._v(" Specifies the IP where the OSC server is listening.")]),e._v(" "),s("li",[s("strong",[e._v("AddressCH1 [string]:")]),e._v(" This value specifies the OSC data output address e.g. “/path/to/receiver/accxyz”.")]),e._v(" "),s("li",[s("strong",[e._v("AddressStringCh [string]:")]),e._v(" This value specifies the OSC string output address.")])]),e._v(" "),s("h2",{attrs:{id:"referred-plugins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#referred-plugins","aria-hidden":"true"}},[e._v("#")]),e._v(" Referred Plugins")]),e._v(" "),s("ul",[s("li",[e._v("OscServer")]),e._v(" "),s("li",[e._v("OpenVibe")]),e._v(" "),s("li",[e._v("OscGestureFollower")])]),e._v(" "),s("EditLink")],1)},[],!1,null,null,null);t.default=i.exports}}]);