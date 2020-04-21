(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1003:function(e,t,n){"use strict";n.r(t);var i=n(22),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"digital-in"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#digital-in"}},[e._v("#")]),e._v(" Digital In")]),e._v(" "),i("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),i("p",[e._v("The DigitalIn component provides an interface to read the digital inputs of the GPIO CIM. On state changes of the connected signals (transitions to high or low level), the component generates corresponding trigger-events.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(2464),alt:"Screenshot: DigitalIn plugin",title:"Screenshot: DigitalIn plugin"}}),i("br"),e._v("\nDigitalIn plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("This component requires the DigitalIn (GPO) CIM (CIM Id: 0x0701) connected to an USB port.")]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("in1High to in6High:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to high level, an event will be raised on the corresponding port.")]),e._v(" "),i("li",[i("strong",[e._v("in1Low to in6Low:")]),e._v(" Each of these event ports is linked to one input port, if the device connection to this input port delivers a signal which changes to low level, an event will be raised on the corresponding port.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("activateEventIn1 to activateEventIn6 [Boolean]:")]),e._v(" These properties declare for each port whether or not a signal transition on the actual input port should result in an event being triggered in the ARE. If a property is set true for one input, it will raise events on signal transitions, if it is set to false it will not.")]),e._v(" "),i("li",[i("strong",[e._v("periodicUpdate:")]),e._v(" Period in milliseconds for update messages about state of device inputs. If the property is set to zero, the plugin will receive messages from the CIM on signal transitions, if the property is non-zero, the CIM will send status messages in the defined intervals without extra event messages on signal changes. Both modes will have the same effect on the software plugin, it will raise events on its trigger ports.")]),e._v(" "),i("li",[i("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),i("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=s.exports},2464:function(e,t,n){e.exports=n.p+"assets/img/DigitalIn.83464356.jpg"}}]);