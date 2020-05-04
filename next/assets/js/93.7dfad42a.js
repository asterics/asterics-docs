(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1138:function(e,t,i){e.exports=i.p+"assets/img/legacydigitalin.4f0bc82a.jpg"},1139:function(e,t,i){e.exports=i.p+"assets/img/digitalin_cim.32abc9c9.jpg"},429:function(e,t,i){"use strict";i.r(t);var n=i(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"legacy-digital-in"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#legacy-digital-in"}},[e._v("#")]),e._v(" Legacy Digital In")]),e._v(" "),n("p",[e._v("Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),n("p",[e._v("The LegacyDigitalIn component provides an interface to read the digital inputs of the legacy GPIO CIM (CIM Id: 0x0201). On state changes of the connected signals (transitions to high or low level), the component generates corresponding trigger-events.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(1138),alt:"Screenshot: LegacyDigitalIn plugin",title:"Screenshot: LegacyDigitalIn plugin"}})]),e._v(" "),n("p",[e._v("LegacyDigitalIn plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("This component requires the legacy GPIO CIM (CIM Id: 0x0201) connected to an USB port.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(1139),alt:"GPIO CIM",title:"GPIO CIM"}})]),e._v(" "),n("p",[e._v("GPIO CIM")]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("in1High to in8High:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to high level, an event will be raised on the corresponding port.")]),e._v(" "),n("li",[n("strong",[e._v("in1Low to in8Low:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to low level, an event will be raised on the corresponding port.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("activateEventIn1 to activateEventIn8 [Boolean]:")]),e._v(" These properties declare for each port whether or not a signal transition on the actual input port should result in an event being triggered in the ARE. If a property is set true for one input, it will raise events on signal transitions, if it is set to false it will not.")]),e._v(" "),n("li",[n("strong",[e._v("periodicUpdate:")]),e._v(" Period in milliseconds for update messages about state of device inputs. If the property is set to zero, the plugin will receive messages from the CIM on signal transitions, if the property is non-zero, the CIM will send status messages in the defined intervals without extra event messages on signal changes. Both modes will have the same effect on the software plugin, it will raise events on its trigger ports.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);