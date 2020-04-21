(window.webpackJsonp=window.webpackJsonp||[]).push([[1193],{1484:function(t,e,r){"use strict";r.r(e);var o=r(22),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"blink-detector-trainer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#blink-detector-trainer"}},[t._v("#")]),t._v(" Blink Detector Trainer")]),t._v(" "),o("p",[t._v("Component Type: Processor (Subcategory: DSP and Feature Detection)")]),t._v(" "),o("p",[t._v("This component calculates the maxThreshold, minThreshold, BlinkLength and DoubleBlinkSeparation customized properties of the "),o("a",{attrs:{href:"../processors/BlinkDetector.htm"}},[t._v("Blink Detector")]),t._v(" plugin for each specific subject. For a description of the meaning of these properties, please see "),o("a",{attrs:{href:"../processors/BlinkDetector.htm"}},[t._v("Blink Detector")]),t._v(". The training of the system consists on asking the subject to follow a protocol. This protocol consists on a series of 5 simple blinks and 5 double blinks. Note that the subject can perform only "),o("strong",[t._v("one")]),t._v(" simple (or double) blink each time the protocol indicates so through its Protocol port. When the protocol finishes, the results show up through the Results output port.")]),t._v(" "),o("p",[o("img",{attrs:{src:r(3271),alt:"Screenshot: Blink Detector Trainer plugin",title:"Screenshot: Blink Detector Trainer plugin"}})]),t._v(" "),o("p",[t._v("Blink Detector plugin")]),t._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),o("p",[t._v("The input signal shall correspond to a 250-Hz sampled electro-oculogram signal, i.e., an output port of the "),o("a",{attrs:{href:"../sensors/Enobio.htm"}},[t._v("Enobio")]),t._v(" component when the corresponding electrode is placed on the user’s forehead.")]),t._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("input [integer]:")]),t._v(" Input values that correspond to a 250-Hz sampled electro-oculogram signal.")])]),t._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Protocol [string]:")]),t._v(" Actions to be performed by the user. Note that the user must perform just one blink (or double blink) each time the corresponding message is delivered through this port.")]),t._v(" "),o("li",[o("strong",[t._v("Results [string]:")]),t._v(" Final parameters calculated for the specific subject. They will delivered when the protocol has finished.")])]),t._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("StartProtocol [integer]:")]),t._v(" Starts the training protocol. The actions to be performed by the subject will be delivered through the Protocol port.")]),t._v(" "),o("li",[o("strong",[t._v("StopProtocol:")]),t._v(" Stops the training protocol.")])]),t._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("sampleRate [integer]:")]),t._v(" Sample rate of the input signal in Hertz.")]),t._v(" "),o("li",[o("strong",[t._v("language [list]:")]),t._v(" Language of the messages thrown through the Protocol port while the protocol is running. The user can chose English or Spanish.")])])])}),[],!1,null,null,null);e.default=s.exports},3271:function(t,e,r){t.exports=r.p+"assets/img/BlinkDetectorTrainer.c93653c5.jpg"}}]);