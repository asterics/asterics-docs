(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{385:function(t,e,o){t.exports=o.p+"assets/img/digitalout.1a89ad2e.jpg"},878:function(t,e,o){"use strict";o.r(e);var r=o(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),r("p",[t._v("Component Type: Actuator (Subcategory: Generic Control Output)")]),t._v(" "),r("p",[t._v("The DigitalOut plugin operates the output ports of the GPIO CIM. The output ports 1-2 are relais outputs where loads can be connected via a galvanic isolation barrier. The output ports 3-5 are open-collector outputs, where a pull-up resistor can be activated or deactivated using the plugin’s properties. The plugin provides event listener ports which serve the activation or deactivation of an output channel, and a command port which accepts string parameters to set, clear and toggle particular output channels.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(385),alt:"Screenshot: DigitalOut plugin",title:"Screenshot: DigitalOut plugin"}})]),t._v(" "),r("p",[t._v("DigitalOut plugin")]),t._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("p",[t._v("This component requires the GPIO CIM (CIM Id: 0x0801) to be connected to an USB port.")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("action [string]:")]),t._v(" The plugin reacts to incoming action strings starting with “@GPIO:” and a command. Valid commands are “set”, “clear”, “toggle” and “press”. The command has to be followed by a comma and the port number, for example: “@GPIO:set,1” or “@GPIO:toggle,2”. The “press”-command toggles the given output port two times with a delay of 500 milliseconds. The following examples illustrate the available action strings:\n"),r("ul",[r("li",[r("em",[t._v("“@DIGITALOUT:set,1”:")]),t._v(" Pin 1 of the GPIO CIM will be set")]),t._v(" "),r("li",[t._v('_"@DIGITALOUT:clear,2":_Pin 2 of the GPIO CIM will be cleared')]),t._v(" "),r("li",[r("em",[t._v("“@DIGITALOUT:toggle,1”:")]),t._v(" Pin 1 of the GPIO CIM will be changed")]),t._v(" "),r("li",[r("em",[t._v("“@DIGITALOUT:press,4”:")]),t._v(" Pin 4 of the GPIO CIM will be cleared and after 500ms it will be set again")])])])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("setOutput1 to setOutput5:")]),t._v(" an incoming event on these ports will cause the corresponding output port on the CIM to go to the high level.")]),t._v(" "),r("li",[r("strong",[t._v("clearOutput1 to clearOutput5:")]),t._v(" an incoming event on these ports will cause the corresponding output port on the CIM to go to the low level.")]),t._v(" "),r("li",[t._v("**toggleOutput1 to toggleOutput5:**Toggles the state of the output port.")]),t._v(" "),r("li",[t._v("**pressOutput1 to pressOutput5:**Presses the output port: Clears the state and after 500ms sets the state to high.")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("pullupStateOut3 to pullupStateOut5 [boolean]:")]),t._v(" These properties specify if the internal pullup resistor shall be activated on the respective open collector output channels.")]),t._v(" "),r("li",[r("strong",[t._v("uniqueId:")]),t._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),r("strong",[t._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);