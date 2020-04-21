(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{2149:function(t,e,a){t.exports=a.p+"assets/img/LegacyDigitalOut.b9ce1088.jpg"},2150:function(t,e,a){t.exports=a.p+"assets/img/DigitalOut_CIM.32abc9c9.jpg"},601:function(t,e,a){"use strict";a.r(e);var o=a(22),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"legacy-digital-out"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#legacy-digital-out"}},[t._v("#")]),t._v(" Legacy Digital Out")]),t._v(" "),o("h3",{attrs:{id:"component-type-actuator-subcategory-generic-control-output"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-generic-control-output"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Generic Control Output)")]),t._v(" "),o("p",[t._v("The DigitalOut plugin operates the output ports of the legacy GPIO CIM (CIM Id: 0x0201). The output ports 1-4 are open-collector outputs, where a pull-up resistor can be activated or deactivated using the plugin’s properties. The output ports 5-8 are relais outputs where loads can be connected via a galvanic isolation barrier. The plugin provides event listener ports which serve the activation or deactivation of an output channel, and a command port which accepts string parameters to set, clear and toggle particular output channels.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(2149),alt:"Screenshot: Legacy DigitalOut plugin",title:"Screenshot: LegacyDigitalOut plugin"}}),o("br"),t._v("\nLegacy DigitalOut plugin")]),t._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),o("p",[t._v("This component requires the GPIO CIM (CIM Id: 0x0201) to be connected to an USB port.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(2150),alt:"GPIO CIM",title:"GPIO CIM"}}),o("br"),t._v("\nLegacy GPIO CIM")]),t._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input port Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("action [string]:")]),t._v(" The plugin reacts to incoming action strings starting with “@GPIO:” and a command. Valid commands are “set”, “clear”, “toggle” and “press”. The command has to be followed by a comma and the port number, for example: “@GPIO:set,1” or “@GPIO:toggle,2”. The “press”-command toggles the given output port two times with a delay of 500 milliseconds. The following examples illustrate the available action strings:\n"),o("ul",[o("li",[o("em",[t._v("“@DIGITALOUT:set,1”:")]),t._v(" Pin 1 of the GPIO CIM will be set")]),t._v(" "),o("li",[t._v('_"@DIGITALOUT:clear,2":_Pin 2 of the GPIO CIM will be cleared')]),t._v(" "),o("li",[o("em",[t._v("“@DIGITALOUT:toggle,1”:")]),t._v(" Pin 1 of the GPIO CIM will be changed")]),t._v(" "),o("li",[o("em",[t._v("“@DIGITALOUT:press,4”:")]),t._v(" Pin 4 of the GPIO CIM will be cleared and after 500ms it will be set again")])])])]),t._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("setOutput1 to setOutput8:")]),t._v(" an incoming event on these ports will cause the corresponding output port on the CIM to go to the high level.")]),t._v(" "),o("li",[o("strong",[t._v("clearOutput1 to clearOutput8:")]),t._v(" an incoming event on these ports will cause the corresponding output port on the CIM to go to the low level.")])]),t._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("pullupStateOut1 to pullupStateOut4 [boolean]:")]),t._v(" These properties specify if the internal pullup resistor shall be activated on the respective open collector output channels.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);