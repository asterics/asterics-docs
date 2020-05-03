(window.webpackJsonp=window.webpackJsonp||[]).push([[976],{1604:function(t,e,r){"use strict";r.r(e);var o=r(1),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"pathselector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#pathselector"}},[t._v("#")]),t._v(" Pathselector")]),t._v(" "),o("h3",{attrs:{id:"component-type-processor-subcategory-signal-pathways"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-signal-pathways"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: Signal Pathways)")]),t._v(" "),o("p",[t._v("The pathselector component allows routing of an incoming numerical signal between up to 4 output ports. The desired output port can be directly selected by a dedicated event listener port, or the signal can be switched to the next or previous output port. This component can be used to utilize one particular signal for different purposes, e.g. controlling different actuators within a single model by sequentially switching between them.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(3032),alt:"Screenshot: PathSelector plugin",title:"Screenshot: PathSelector plugin"}}),o("br"),t._v("\nPathSelector plugin")]),t._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("in [double]:")]),t._v(" The incoming signal to be routed.")])]),t._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("out1 to out4:")]),t._v(" Four output ports where the incoming signal can be routed to.")])]),t._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("select1 to select4:")]),t._v(" An incoming event at these ports directly activates the associated output path (e.g. as an event comes in at select 3, the input signal will be routed to out3.")]),t._v(" "),o("li",[o("strong",[t._v("selectNext:")]),t._v(" The next output port is selected for signal output. The maximum number of active ports is set via the active ports property. If the current number of active ports is already the maximum one, the select next event will wrap around the active port number and one port will be selected.")]),t._v(" "),o("li",[o("strong",[t._v("selectPrevious:")]),t._v(" The previous output port is selected for signal output. If the current port is out1, the select previous event will switch to the port with the maximum number given by the active ports property.")])]),t._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("activePorts [integer]:")]),t._v(" The maximum port number in use (can be 2 to 4).")])])])}),[],!1,null,null,null);e.default=s.exports},3032:function(t,e,r){t.exports=r.p+"assets/img/PathSelector.972367d5.jpg"}}]);