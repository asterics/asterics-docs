(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{2148:function(e,t,s){e.exports=s.p+"assets/img/OscOutClient.dae373d7.jpg"},502:function(e,t,s){"use strict";s.r(t);var r=s(1),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"oscoutclient"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#oscoutclient"}},[e._v("#")]),e._v(" OscOutClient")]),e._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-communication"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-communication"}},[e._v("#")]),e._v(" Component Type: actuator (Subcategory: Communication)")]),e._v(" "),r("p",[e._v("The OscOutClient plugin enables the ARE to broadcast messages using the OpenSoundControl (OSC) protocol.\nThis plugin utilizes the NetUtil java library (http://www.sciss.de/netutil/) for the OSC implementation, it is ©opyrighted 2004-2011 by Hanns Holger Rutz and released under the GNU Lesser General Public License.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(2148),alt:"Screenshot: OscServer plugin",title:"Screenshot: OscServer plugin"}}),r("br"),e._v("\nOscOutClient plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("ul",[r("li",[e._v("Nothing, works sand-alone within ARE")]),e._v(" "),r("li",[e._v("Check your firewall configuration and network settings to ensure that OSC messages are not blocked.")])]),e._v(" "),r("h2",{attrs:{id:"functional-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#functional-description"}},[e._v("#")]),e._v(" Functional Description")]),e._v(" "),r("p",[e._v("The OscOutClient collects data form the inputs CH1-4 and assamble it to one OSC message with 4 arguments.\nThe address for the OSC channel is set by the property AddressCh1.\nFurthermore the plugin has a StringIN input port.\nIf the plugin receives a string it broadcast one OSC message with one string argument.\nThe address for the string OSC channel is set by the property AddressStringCh.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("CH[1-4] [double]:")]),e._v(" Input port for the data, eg. a oszilloscope or any other double value.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Port [integer]:")]),e._v(" This value specifies the OscOutClient port.")]),e._v(" "),r("li",[r("strong",[e._v("PeerAddress [string]:")]),e._v(" Specifies the IP where the OSC server is listening.")]),e._v(" "),r("li",[r("strong",[e._v("AddressCH1 [string]:")]),e._v(" This value specifies the OSC data output address e.g. “/path/to/receiver/accxyz”.")]),e._v(" "),r("li",[r("strong",[e._v("AddressStringCh [string]:")]),e._v(" This value specifies the OSC string output address.")])]),e._v(" "),r("h2",{attrs:{id:"referred-plugins"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#referred-plugins"}},[e._v("#")]),e._v(" Referred Plugins")]),e._v(" "),r("ul",[r("li",[e._v("OscServer")]),e._v(" "),r("li",[e._v("OpenVibe")]),e._v(" "),r("li",[e._v("OscGestureFollower")])])])}),[],!1,null,null,null);t.default=i.exports}}]);