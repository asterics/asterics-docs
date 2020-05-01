(window.webpackJsonp=window.webpackJsonp||[]).push([[1410],{3758:function(t,e,n){t.exports=n.p+"assets/img/nexusconnector.2616bf6b.png"},436:function(t,e,n){"use strict";n.r(e);var o=n(2),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"nexusconnector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nexusconnector"}},[t._v("#")]),t._v(" NexusConnector")]),t._v(" "),o("p",[t._v("Component Type: Processors (Subcategory: Web)")]),t._v(" "),o("p",[t._v("The NexusConnector component provides a bidirectional connection to a GPII Nexus instance.")]),t._v(" "),o("p",[o("img",{attrs:{src:n(3758),alt:"Screenshot: NexusConnector plugin",title:"Screenshot: NexusConnector plugin"}})]),t._v(" "),o("p",[t._v("NexusConnector plugin")]),t._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),o("p",[t._v("The NexusConnector component requres a running GPII Nexus instance to connect to and a peer component constructed within the Nexus for the connector to bind to. The Nexus instance is run and managed separately from this component and AsTeRICS. Please see the “Properties” section below for details on specifying the address of the Nexus instance to connect to.")]),t._v(" "),o("p",[t._v("The NexusConnector component expects the peer component within the Nexus to have a model of the following structure:")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("\n\t\t{\n\t\t\tconnector: {\n\t\t\t\tinputs: {\n\t\t\t\t\tin1d: <double value>,\n\t\t\t\t\tin2d: <double value>,\n\t\t\t\t\tin3d: <double value>,\n\t\t\t\t\tin4d: <double value>,\n\t\t\t\t\tin5s: <string value>,\n\t\t\t\t\tin6s: <string value>,\n\t\t\t\t\tin7s: <string value>,\n\t\t\t\t\tin8s: <string value>\n\t\t\t\t},\n\t\t\t\toutputs: {\n\t\t\t\t\tout1d: <double value>,\n\t\t\t\t\tout2d: <double value>,\n\t\t\t\t\tout3d: <double value>,\n\t\t\t\t\tout4d: <double value>,\n\t\t\t\t\tout5s: <string value>,\n\t\t\t\t\tout6s: <string value>,\n\t\t\t\t\tout7s: <string value>,\n\t\t\t\t\tout8s: <string value>\n\t\t\t\t}\n\t\t\t}\n\t\t}\n")])])]),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),o("p",[t._v("The NexusConnector component has 8 generic input ports. Four each of type double and string. When a value on one of the inputs changes, that change is relayed to the Nexus and the model of the bound component is updated.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("in1d [double]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in2d [double]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in3d [double]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in4d [double]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in5s [string]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in6s [string]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in7s [string]:")]),t._v(" Sent to the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("in8s [string]:")]),t._v(" Sent to the Nexus")])]),t._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),o("p",[t._v("The NexusConnector component has 8 generic output ports. Four each of type double and string. When a value, or values, change within the “outputs” section of the peer component in the Nexus, that change is relayed to the NexusConnector and the value on the NexusConnector output ports are updated accordingly.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("out1d [double]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out2d [double]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out3d [double]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out4d [double]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out5s [string]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out6s [string]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out7s [string]:")]),t._v(" Received from the Nexus")]),t._v(" "),o("li",[o("strong",[t._v("out8s [string]:")]),t._v(" Received from the Nexus")])]),t._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("nexusHostname [string]:")]),t._v(" The address of the machine on which the Nexus is running")]),t._v(" "),o("li",[o("strong",[t._v("nexusPort [integer]:")]),t._v(" The port number on which the Nexus is listening")]),t._v(" "),o("li",[o("strong",[t._v("nexusComponentPath [string]:")]),t._v(" The path of the peer component to bind to within the Nexus")])])])}),[],!1,null,null,null);e.default=s.exports}}]);