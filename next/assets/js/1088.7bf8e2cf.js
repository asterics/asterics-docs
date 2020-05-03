(window.webpackJsonp=window.webpackJsonp||[]).push([[1088],{1778:function(t,e,r){"use strict";r.r(e);var i=r(2),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"ecmascriptinterpreter"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ecmascriptinterpreter"}},[t._v("#")]),t._v(" ECMAScriptInterpreter")]),t._v(" "),i("p",[t._v("Component Type: Processor (Subcategory: Scripting)")]),t._v(" "),i("p",[t._v("This component is a general purpose processor that can relays the input and incoming events to a script compatible to the ECMA script specification (e.g. JavaScript). The script is specified by the property scriptname. If the property is left empty, the component will load the file “script.js” from local storage. If this file does not exist, the component will generate the file in local storage and fill it with a default “pass-through” script.")]),t._v(" "),i("p",[t._v("There are certain constraints for the script:")]),t._v(" "),i("ul",[i("li",[t._v("the script has to contain an object named scriptclass.")]),t._v(" "),i("li",[t._v("the object has to implement a method dataInput(input_index, input_data)")]),t._v(" "),i("li",[t._v("the object has to implement a method eventInput(event_index)")])]),t._v(" "),i("p",[t._v("The script is provided with the following external variables:")]),t._v(" "),i("ul",[i("li",[t._v("output: an array of size 8 representing 8 IRuntimeOutputPorts")]),t._v(" "),i("li",[t._v("eventout: an array of size 8 representing 8 IRuntimeEventTriggererPorts")]),t._v(" "),i("li",[t._v("property: an array of size 8 holding strings with the property inputs from the components property fields")])]),t._v(" "),i("p",[t._v("The sendData method of the output variables has to be called with a string. If necessary this needs to be converted into a Java string, this can be done like this:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",[i("code",[t._v("\t\tstr = new java.lang.String(in\\_data);\n\t\toutput\\[in\\_nb\\].sendData(str.getBytes());\n")])])]),i("p",[t._v("For more information please see a demo script in the plugin source code!")]),t._v(" "),i("p",[i("img",{attrs:{src:r(3223),alt:"Screenshot: ECMAScriptInterpreter plugin",title:"Screenshot: ECMAScriptInterpreter plugin"}})]),t._v(" "),i("p",[t._v("ECMAScriptInterpreter plugin")]),t._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("inputPort1 - inputPort8 [string]:")]),t._v(" input ports for script parameters")])]),t._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("outputPort1 - outputPort8 [string]:")]),t._v(" output ports for script results")])]),t._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("elpPort1 - elpPort8:")]),t._v(" 8 event listener ports which can be used by the script code.")])]),t._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("etpPort1 - elpPort8:")]),t._v(" 8 event trigger ports which can be used by the script code.")])]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("scriptname [string]:")]),t._v(" a valid filename of an ECMA-compatible script (e.g. Javascript) which shall be interpreted")]),t._v(" "),i("li",[i("strong",[t._v("value1 - value8 [string]:")]),t._v(" 8 properties which can be used by the script.")])])])}),[],!1,null,null,null);e.default=s.exports},3223:function(t,e,r){t.exports=r.p+"assets/img/ECMAScriptInterpreter.dc7ee5f0.jpg"}}]);