(window.webpackJsonp=window.webpackJsonp||[]).push([[851],{1255:function(e,t,n){"use strict";n.r(t);var o=n(22),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"analog-in"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#analog-in"}},[e._v("#")]),e._v(" Analog In")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),o("p",[e._v("The AnalogIn component is a sensor which is used in combination with the ADC CIM. The component provides two output ports which correlate to the inputs IN1 and IN2 of the CIM. The component can be set up to sample the inputs periodically or upon an incoming event. Both inputs can be used for voltage and resistance measurement.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(2666),alt:"Screenshot: AnalogIn plugin",title:"Screenshot: AnalogIn plugin"}}),o("br"),e._v("\nAnalogIn plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("This software component requires an ADC CIM (CIM ID: 0x0901) connected to a USB port.")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("in1 to in2 [integer]:")]),e._v(" Each of these output port corresponds to one input of the ADC CIM. The measured values are forwarded directly from the CIM thus corresponding to the description given in the CIM specification. Depending on the type of connected sensor the values either correspond to a voltage or a resistive value.")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("adcSampleTrigger:")]),e._v(" An incoming event on this port will cause the ADC CIM to sample data on its inputs. This event will only take effect if the periodic_update property is set to 0.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("periodicUpdate [integer]:")]),e._v(" This property defines the time between data sampling requests to the ADC CIM (in milliseconds). The software component will send requests to the CIM in the given intervals. Due to current limitations of the ADC CIM it is recommended to use time intervals not lower than 50 milliseconds (20 samples per second).")]),e._v(" "),o("li",[o("strong",[e._v("activateInput1 to activateInput2 [Boolean]:")]),e._v(" These properties correspond the CIM’s ADC inputs IN1 to IN8, if the property is true, the corresponding output port of the software component will send the sampled data.")]),e._v(" "),o("li",[o("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),o("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=s.exports},2666:function(e,t,n){e.exports=n.p+"assets/img/AnalogIn.1a43205a.jpg"}}]);