(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{2282:function(e,t,n){e.exports=n.p+"assets/img/LegacyAnalogIn.fe010a5f.jpg"},2283:function(e,t,n){e.exports=n.p+"assets/img/AnalogIn_CIM.c0b8e23d.jpg"},777:function(e,t,n){"use strict";n.r(t);var o=n(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"legacy-analog-in"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#legacy-analog-in"}},[e._v("#")]),e._v(" Legacy Analog In")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),o("p",[e._v("The LegacyAnalogIn component is a sensor which is used in combination with the legacy ADC CIM (CIM Id: 0x0401). The component provides eight output ports which correlate to the inputs IN1 to IN8 of the CIM. The component can be set up to sample the inputs periodically or upon an incoming event.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(2282),alt:"Screenshot: LegacyAnalogIn plugin",title:"Screenshot: LegacyAnalogIn plugin"}}),o("br"),e._v("\nLegacy AnalogIn plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("This software component requires an ADC-DAC CIM (CIM ID: 0x0401) connected to a USB port.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(2283),alt:"ADC/DAC CIM",title:"ADC/DAC CIM"}}),o("br"),e._v("\nLegacy ADC/DAC CIM")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("in1 to in8 [integer]:")]),e._v(" Each of these output port corresponds to one input of the ADC CIM. The measured values are forwarded directly from the CIM thus corresponding to the description given in the CIM specification.")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("adcSampleTrigger:")]),e._v(" An incoming event on this port will cause the ADC CIM to sample data on its inputs. This event will only take effect if the periodic_update property is set to 0.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("periodicUpdate [integer]:")]),e._v(" This property defines the time between data sampling requests to the ADC CIM (in milliseconds). The software component will send requests to the CIM in the given intervals. Due to current limitations of the ADC CIM it is recommended to use time intervals not lower than 50 milliseconds (20 samples per second).")]),e._v(" "),o("li",[o("strong",[e._v("activateInput1 to activateInput8 [Boolean]:")]),e._v(" These properties correspond the CIM’s ADC inputs IN1 to IN8, if the property is true, the corresponding output port of the software component will send the sampled data.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);