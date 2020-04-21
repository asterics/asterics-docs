(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{1039:function(e,t,r){"use strict";r.r(t);var o=r(22),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"proximity"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#proximity"}},[e._v("#")]),e._v(" Proximity")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-sensor-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-sensor-modules"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory:Sensor Modules)")]),e._v(" "),o("p",[e._v("This component provides the distance sensor signal from the Proximity sensor board, which has been developed in course of the Bachelor Theses of Franziska Horak at the UAS Technikum Wien. The Proximity sensor board can be head mounted and offers an alternative input method via minimal movements of facial features - e.g. chin movements. In several proof-of-concept models, on-screen keyboard control and mouse control could be shown. For detailed information please refer to the file Documentation/DIYGuides/ProximitySensor_Horak.pdf")]),e._v(" "),o("p",[o("img",{attrs:{src:r(2499),alt:"Screenshot: Proximity plugin",title:"Screenshot: Proximity plugin"}}),o("br"),e._v("\nthe Proximity sensor plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The Proximity sensor has to be connected to a USB port. Design files and firmware for the proximity sensor can be found in the folder CIMs/Proximity_CIM.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(2500),alt:"Proximity sensor application",title:"Proximity sensor application"}}),o("br"),e._v("\nProximity sensor application")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("input [integer]:")]),e._v(" this input port allows setting the threshold value for the creation of events")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("distance [integer]:")]),e._v(" the currently measured distance from sensor to subject")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("LowToHigh:")]),e._v(" this event is triggered when the distance increases above the threshold value")]),e._v(" "),o("li",[o("strong",[e._v("HighToLow:")]),e._v(" this event is triggered when the distance decreases below the threshold value")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("threshold [integer]:")]),e._v(" the threshold value for creating events.")]),e._v(" "),o("li",[o("strong",[e._v("sendingMode [combobox selection]:")]),e._v(" if “Continuous data” is selected, the distance values are sent to the output port, if “Events: below->above”, “Events: above->below” or “Events: both” are selected, the respective event triggers will be generated.")])])])}),[],!1,null,null,null);t.default=s.exports},2499:function(e,t,r){e.exports=r.p+"assets/img/Proximity.7f3837fb.jpg"},2500:function(e,t,r){e.exports=r.p+"assets/img/ProximityApplication.63217eeb.jpg"}}]);