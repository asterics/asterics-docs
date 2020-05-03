(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1101:function(e,t,s){"use strict";s.r(t);var a=s(2),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tobi-tic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tobi-tic"}},[e._v("#")]),e._v(" Tobi TiC")]),e._v(" "),a("h3",{attrs:{id:"component-type-sensor-subcategory-bioelectric-measurement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-bioelectric-measurement"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Bioelectric Measurement)")]),e._v(" "),a("p",[e._v("The Tobi TiC plugin allows obtaining data from a connection to the "),a("a",{attrs:{href:"http://www.tobi-project.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobi Framework"),a("OutboundLink")],1),e._v(" (Tools for Brain Computer Interaction). Tobi defined standard for BCI interfaces, e.g. beteween classification and actuator modues. Tobi supports a wide range of biosignal and EEG acquisition devices. The TiC interface is dedicated to transfer classifier results to actuators. This plugin implements a simple TiC reader via a TCP socket. Up to 5 TOBI class labels can be defined which will be used to extract values from incoming TiC-compatible xml messages. These class labels and the sever socket which is openend by the plugin can be defined viy plugin properties.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2685),alt:"Screenshot: Tobi TiC plugin",title:"Screenshot: Tobi TiC plugin"}}),a("br"),e._v("\nTobi TiC plugin")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("TiC-compatible messages must be sent to the server port which is opened by the plugin.")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2686),alt:"Screenshot: Internal strcuture of a TOBI iC message",title:"Screenshot: Internal structure of a TOBI iC message"}}),a("br"),e._v("\nInternal structure of a TOBI iC message")]),e._v(" "),a("h3",{attrs:{id:"example-ic-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-ic-message"}},[e._v("#")]),e._v(" Example iC message:")]),e._v(" "),a("p",[a("img",{attrs:{src:s(2687),alt:"example TOBI iC message",title:"example TOBI iC message"}}),a("br"),e._v("\nexample TOBI iC message")]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[e._v("**value1 � value5 [double]"),a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*these are the output ports for the Tobi class values. Up to 5 signals can be sent")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("tcpPort [integer]:")]),e._v(" the TCP port which is opened by the AsTeRICS plugin to wait for the Tobi connection")]),e._v(" "),a("li",[a("strong",[e._v("classLabel1 - classLabel5 [string]:")]),e._v(" the classLabels to extract values from the Tobi TiC messages. Values will be directed to the corresponding output ports of the plugin.")])])])}),[],!1,null,null,null);t.default=i.exports},2685:function(e,t,s){e.exports=s.p+"assets/img/tobi_tic.39c74c4e.jpg"},2686:function(e,t,s){e.exports=s.p+"assets/img/tobi_ic_message.063d3114.jpg"},2687:function(e,t,s){e.exports=s.p+"assets/img/tobi_example_ic.5e0290b1.jpg"}}]);