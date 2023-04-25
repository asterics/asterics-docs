(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1233:function(e,t,n){"use strict";n.r(t);var o=n(2),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"legacy-analog-in"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#legacy-analog-in"}},[e._v("#")]),e._v(" Legacy Analog In")]),e._v(" "),t("p",[e._v("Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),t("p",[e._v("The LegacyAnalogIn component is a sensor which is used in combination with the legacy ADC CIM (CIM Id: 0x0401). The component provides eight output ports which correlate to the inputs IN1 to IN8 of the CIM. The component can be set up to sample the inputs periodically or upon an incoming event.")]),e._v(" "),t("p",[t("img",{attrs:{src:n(810),alt:"Screenshot: LegacyAnalogIn plugin",title:"Screenshot: LegacyAnalogIn plugin"}})]),e._v(" "),t("p",[e._v("Legacy AnalogIn plugin")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("This software component requires an ADC-DAC CIM (CIM ID: 0x0401) connected to a USB port.")]),e._v(" "),t("p",[t("img",{attrs:{src:n(811),alt:"ADC/DAC CIM",title:"ADC/DAC CIM"}})]),e._v(" "),t("p",[e._v("Legacy ADC/DAC CIM")]),e._v(" "),t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("in1 to in8 [integer]:")]),e._v(" Each of these output port corresponds to one input of the ADC CIM. The measured values are forwarded directly from the CIM thus corresponding to the description given in the CIM specification.")])]),e._v(" "),t("h2",{attrs:{id:"event-listener-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("adcSampleTrigger:")]),e._v(" An incoming event on this port will cause the ADC CIM to sample data on its inputs. This event will only take effect if the periodic_update property is set to 0.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("periodicUpdate [integer]:")]),e._v(" This property defines the time between data sampling requests to the ADC CIM (in milliseconds). The software component will send requests to the CIM in the given intervals. Due to current limitations of the ADC CIM it is recommended to use time intervals not lower than 50 milliseconds (20 samples per second).")]),e._v(" "),t("li",[t("strong",[e._v("activateInput1 to activateInput8 [Boolean]:")]),e._v(" These properties correspond the CIM’s ADC inputs IN1 to IN8, if the property is true, the corresponding output port of the software component will send the sampled data.")])])])}),[],!1,null,null,null);t.default=i.exports},810:function(e,t,n){e.exports=n.p+"assets/img/legacyanalogin.fe010a5f.jpg"},811:function(e,t,n){e.exports=n.p+"assets/img/analogin_cim.c0b8e23d.jpg"}}]);