(window.webpackJsonp=window.webpackJsonp||[]).push([[341],{1764:function(t,e,o){"use strict";o.r(e);var r=o(1),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"platform-digital-out"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#platform-digital-out"}},[t._v("#")]),t._v(" Platform Digital Out")]),t._v(" "),r("p",[t._v("Component Type: Actuator (Subcategory: Personal Platform)")]),t._v(" "),r("p",[t._v("The PlatformDigitalOut plugin operates the output ports of the AsTeRICS Personal Platform. The output ports 1-2 are open-collector outputs with a deactivated pull-up resistor.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(3408),alt:"Screenshot: PlatformDigitalOut plugin",title:"Screenshot: PlatformDigitalOut plugin"}})]),t._v(" "),r("p",[t._v("PlatformDigitalOut plugin")]),t._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("p",[t._v("This component requires the Core CIM (CIM Id: 0x0602) of the AsTeRICS Personal Platform.")]),t._v(" "),r("p",[r("img",{attrs:{src:o(2018),alt:"The AsteRICS Personal Platform (preliminary version)",title:"The AsteRICS Personal Platform (preliminary version)"}})]),t._v(" "),r("p",[t._v("The AsteRICS Personal Platform")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("command [string]:")]),t._v(" The plugin reacts to incoming action strings starting with “@GPIO:” and a command. Valid commands are “set”, “clear”, “toggle” and “press”. The command has to be followed by a comma and the port number, for example: “@GPIO:set,1” or “@GPIO:toggle,2”. The following examples illustrate the available action strings:\n"),r("ul",[r("li",[t._v('_"@DIGITALOUT:set,1":_Output port 1 of the Personal Platform will be set (5 Volt)')]),t._v(" "),r("li",[t._v('_"@DIGITALOUT:clear,2":_Output port 2 of the Personal Platform will be cleared (0 Volt)')]),t._v(" "),r("li",[t._v('_"@DIGITALOUT:toggle,1":_Output port 1 of the Personal Platform will be changed')])])])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("setOutput1 to setOutput2:")]),t._v(" an incoming event on these ports will cause the corresponding output port to go to the high level.")]),t._v(" "),r("li",[r("strong",[t._v("clearOutput1 to clearOutput2:")]),t._v(" an incoming event on these ports will cause the corresponding output port to go to the low level.")])])])}),[],!1,null,null,null);e.default=a.exports},2018:function(t,e,o){t.exports=o.p+"assets/img/PersonalPlatform.a241125e.jpg"},3408:function(t,e,o){t.exports=o.p+"assets/img/PlatformDigitalOut.eb94b6a5.jpg"}}]);