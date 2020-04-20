(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1104:function(e,t,s){"use strict";s.r(t);var i=s(21),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"tobi-tic"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#tobi-tic"}},[e._v("#")]),e._v(" Tobi TiC")]),e._v(" "),i("p",[e._v("Component Type: Sensor (Subcategory: Bioelectric Measurement)")]),e._v(" "),i("p",[e._v("The Tobi TiC plugin allows obtaining data from a connection to the "),i("a",{attrs:{href:"http://www.tobi-project.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobi Framework"),i("OutboundLink")],1),e._v(" (Tools for Brain Computer Interaction). Tobi defined standard for BCI interfaces, e.g. beteween classification and actuator modues. Tobi supports a wide range of biosignal and EEG acquisition devices. The TiC interface is dedicated to transfer classifier results to actuators. This plugin implements a simple TiC reader via a TCP socket. Up to 5 TOBI class labels can be defined which will be used to extract values from incoming TiC-compatible xml messages. These class labels and the sever socket which is openend by the plugin can be defined viy plugin properties.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(3417),alt:"Screenshot: Tobi TiC plugin",title:"Screenshot: Tobi TiC plugin"}})]),e._v(" "),i("p",[e._v("Tobi TiC plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("TiC-compatible messages must be sent to the server port which is opened by the plugin.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(3418),alt:"Screenshot: Internal strcuture of a TOBI iC message",title:"Screenshot: Internal structure of a TOBI iC message"}})]),e._v(" "),i("p",[e._v("Internal structure of a TOBI iC message")]),e._v(" "),i("h3",{attrs:{id:"example-ic-message"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#example-ic-message"}},[e._v("#")]),e._v(" Example iC message:")]),e._v(" "),i("p",[i("img",{attrs:{src:s(3419),alt:"example TOBI iC message",title:"example TOBI iC message"}})]),e._v(" "),i("p",[e._v("Example TOBI iC message")]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[e._v("**value1 - value5 [double]"),i("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*these are the output ports for the Tobi class values. Up to 5 signals can be sent")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("tcpPort [integer]:")]),e._v(" the TCP port which is opened by the AsTeRICS plugin to wait for the Tobi connection")]),e._v(" "),i("li",[i("strong",[e._v("classLabel1 - classLabel5 [string]:")]),e._v(" the classLabels to extract values from the Tobi TiC messages. Values will be directed to the corresponding output ports of the plugin.")])])])}),[],!1,null,null,null);t.default=a.exports},3417:function(e,t,s){e.exports=s.p+"assets/img/tobi_tic.39c74c4e.jpg"},3418:function(e,t,s){e.exports=s.p+"assets/img/tobi_ic_message.063d3114.jpg"},3419:function(e,t,s){e.exports=s.p+"assets/img/tobi_example_ic.5e0290b1.jpg"}}]);