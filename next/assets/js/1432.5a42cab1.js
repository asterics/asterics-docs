(window.webpackJsonp=window.webpackJsonp||[]).push([[1432],{3713:function(e,t,i){e.exports=i.p+"assets/img/digitalin.83464356.jpg"},391:function(e,t,i){"use strict";i.r(t);var n=i(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"frontmatter-title"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),n("p",[e._v("Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),n("p",[e._v("The DigitalIn component provides an interface to read the digital inputs of the GPIO CIM. On state changes of the connected signals (transitions to high or low level), the component generates corresponding trigger-events.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(3713),alt:"Screenshot: DigitalIn plugin",title:"Screenshot: DigitalIn plugin"}})]),e._v(" "),n("p",[e._v("DigitalIn plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("This component requires the DigitalIn (GPO) CIM (CIM Id: 0x0701) connected to an USB port.")]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("in1High to in6High:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to high level, an event will be raised on the corresponding port.")]),e._v(" "),n("li",[n("strong",[e._v("in1Low to in6Low:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to low level, an event will be raised on the corresponding port.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("activateEventIn1 to activateEventIn6 [Boolean]:")]),e._v(" These properties declare for each port whether or not a signal transition on the actual input port should result in an event being triggered in the ARE. If a property is set true for one input, it will raise events on signal transitions, if it is set to false it will not.")]),e._v(" "),n("li",[n("strong",[e._v("periodicUpdate:")]),e._v(" Period in milliseconds for update messages about state of device inputs. If the property is set to zero, the plugin will receive messages from the CIM on signal transitions, if the property is non-zero, the CIM will send status messages in the defined intervals without extra event messages on signal changes. Both modes will have the same effect on the software plugin, it will raise events on its trigger ports.")]),e._v(" "),n("li",[n("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);