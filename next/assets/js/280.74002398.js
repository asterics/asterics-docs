(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{1648:function(e,t,o){"use strict";o.r(t);var A=o(22),i=Object(A.a)({},(function(){var e=this,t=e.$createElement,A=e._self._c||t;return A("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[A("h1",{attrs:{id:"ir-trans"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#ir-trans"}},[e._v("#")]),e._v(" IR Trans")]),e._v(" "),A("h2",{attrs:{id:"component-type-actuator-subcategory-home-control"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-home-control"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Home Control)")]),e._v(" "),A("p",[e._v("This component sends transmission commands to an infrared-transmitter. The different commands can be selected by the different events. The commands must be programmed into the IR-transmitter, before this component can be used. Furthermore, commands can also be sent to this component’s input port (“action”).")]),e._v(" "),A("p",[A("strong",[e._v("Action String example:")]),e._v(" The action string starts with “@IRTRANS:” and contains the remote control name and the command name. For example, if the IR-Transmitter is programmed with a database called “LG-TV” and the desired command is called “TvOn”, the action string to play the IR-code is “@IRTRANS: snd LG-TV,TvOn”.")]),e._v(" "),A("p",[e._v("Using the event based option, the property “prestring” is set to “snd LG-TV”, and at property “send1” is set to “TvOn”.")]),e._v(" "),A("p",[A("img",{attrs:{src:o(2989),alt:"Screenshot: IRTrans plugin",title:"Screenshot: IRTrans plugin"}})]),e._v(" "),A("p",[e._v("IRTrans plugin")]),e._v(" "),A("h2",{attrs:{id:"requirements"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),A("p",[e._v("The IRTrans module (USB, LAN or WiFi version) is required. It can be purchased from "),A("a",{attrs:{href:"http://www.irtrans.de",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.irtrans.de"),A("OutboundLink")],1),e._v(".")]),e._v(" "),A("p",[A("img",{attrs:{src:o(2990),alt:"IRTrans universal IR remote module",title:"IRTrans universal IR remote module"}})]),e._v(" "),A("p",[e._v("IRTrans universal IR remote module")]),e._v(" "),A("h2",{attrs:{id:"input-port-description"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),A("ul",[A("li",[A("strong",[e._v("action[string]:")]),e._v(" A string, which will be sent to the IRTrans module, must start with “@IRTRANS”."),A("br"),e._v("\nFor possible commands see "),A("a",{attrs:{href:"http://www.irtrans.de/download/Docs/IRTrans%20TCP%20ASCII%20Interface_EN.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("official IrTrans protocol guide"),A("OutboundLink")],1),e._v("."),A("br"),e._v(" "),A("strong",[e._v("Note:")]),e._v(" the action string sent to the input port must not contain the prefix “A” like described in the protocol guide. This is because of compatibility reasons with the old UDP protocol.")])]),e._v(" "),A("h2",{attrs:{id:"output-port-description"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),A("ul",[A("li",[A("strong",[e._v("output[string]:")]),e._v(" The IRTrans can also receive IR-Commands. With the IRTrans Configuration tool string commands can be defined for every received IR-Command. Received IR-commands are sent to this port, e.g. “**00028 RCV_COM test,on,0,0” (see protocol guide for format details)")]),e._v(" "),A("li",[A("strong",[e._v("outputResult[string]:")]),e._v(" Receives the result of an action string that was previously sent to action-port.")])]),e._v(" "),A("h2",{attrs:{id:"event-listener-description"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),A("ul",[A("li",[A("strong",[e._v("sendprop1:")]),e._v(" sends the command, stored in the property send1 to the IRTrans (including the prestring).")]),e._v(" "),A("li",[e._v("…")]),e._v(" "),A("li",[A("strong",[e._v("sendprop24:")]),e._v(" sends the command, stored in the property send24 to the IRTrans (including the prestring).")])]),e._v(" "),A("h2",{attrs:{id:"properties"}},[A("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),A("ul",[A("li",[A("strong",[e._v("hostname[string]:")]),e._v(" The hostname/IP-address of the IRTrans. Use “localhost” if you have the IRTrans USB Version (IRTrans server tool must be running), or use the IP address of your IRTrans LAN or WiFi module.")]),e._v(" "),A("li",[A("strong",[e._v("port[string]:")]),e._v(" The port of the IRTrans (default is 21000).")]),e._v(" "),A("li",[A("strong",[e._v("prestring[string]:")]),e._v(" A string, being added before the strings of properties send1 to send24. Typically snd or snd , should be used.")]),e._v(" "),A("li",[A("strong",[e._v("Send1[string]:")]),e._v(" This string (including the prestring) will be sent, if the event EventProp1 will be triggered.")]),e._v(" "),A("li",[e._v("…")]),e._v(" "),A("li",[A("strong",[e._v("Send24[string]:")]),e._v(" This string (including the prestring) will be sent, if the event EventProp24 will be triggered.")])]),e._v(" "),A("p",[A("em",[e._v("Comment:")]),e._v(" This component is exactly tailored to the IRTrans module and needs expert knowledge to be configured.")])])}),[],!1,null,null,null);t.default=i.exports},2989:function(e,t,o){e.exports=o.p+"assets/img/IRTrans.7b56a6e8.jpg"},2990:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);