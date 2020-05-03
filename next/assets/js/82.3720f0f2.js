(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{3771:function(e,t,i){e.exports=i.p+"assets/img/double_original.44573796.jpg"},3772:function(e,t,i){e.exports=i.p+"assets/img/double_derivative.02027388.jpg"},3773:function(e,t,i){e.exports=i.p+"assets/img/blinkdetector.0ba0e07d.jpg"},735:function(e,t,i){"use strict";i.r(t);var n=i(1),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"blink-detector"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blink-detector"}},[e._v("#")]),e._v(" Blink Detector")]),e._v(" "),n("h2",{attrs:{id:"component-type-processor-subcategory-dsp-and-feature-detection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feature-detection"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),n("p",[e._v("This component detects the shape that a blink produces in an electro-oculogram signal. The plugin analyses the input samples and recognises both a single blink and a double blink. Here a single blink is defined by an action whereby both eyes are simultaneously and voluntary closed and open. A double blink refers to the repletion of this action twice in an consecutive way. When one of these conditions is found the corresponding event is fired."),n("br"),e._v("\nNote that the plugin will only detect simple or double blinks with a duration smaller than BlinkLength miliseconds. Similarly, it will only detect double blinks that are separated by less than DoubleBlinkSeparation miliseconds. In addition, the “strength” of the blinks is defined by the maxThreshold and minThreshodld properties:")]),e._v(" "),n("p",[n("img",{attrs:{src:i(3771),alt:"Screenshot: EEG signal double blink",title:"Screenshot: EEG signal double blink"}})]),e._v(" "),n("p",[e._v("EEG signal double blink")]),e._v(" "),n("p",[n("img",{attrs:{src:i(3772),alt:"Screenshot: Double blink derivative",title:"Screenshot: Double blink derivative"}})]),e._v(" "),n("p",[e._v("Double blink derivative")]),e._v(" "),n("p",[e._v("In order to propperly configure these 4 properties, they should be previously obtained by running the "),n("a",{attrs:{href:"../processors/BlinkDetectorTrainer.htm"}},[e._v("BlinkDetectorTrainer")]),e._v(" plugin for each different subject."),n("br"),e._v("\nIn order to correctly detect simple and double blinks, the input signal is internally decimated by a factor of 11 and derivated. For debugging purposes, the decimated samples and the derivated samples are output to the corresponding output ports.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(3773),alt:"Screenshot: Blink Detector plugin",title:"Screenshot: Blink Detector plugin"}})]),e._v(" "),n("p",[e._v("Blink Detector plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("The input signal shall correspond to a 250-Hz sampled electro-oculogram signal, i.e., an output port of the "),n("a",{attrs:{href:"../sensors/Enobio.htm"}},[e._v("Enobio")]),e._v(" component when the corresponding electrode is placed on the user’s forehead.")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("input [integer]:")]),e._v(" Input values that correspond to a 250-Hz sampled electro-oculogram signal.")])]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Filtered Sample [integer]:")]),e._v(" For each input sample, this output port delivers the decimated sample with a decimation factor of 11.")]),e._v(" "),n("li",[n("strong",[e._v("Differential [integer]:")]),e._v(" For each input sample, this output port delivers the derivated sample (after the decimation).")])]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("BlinkDetected:")]),e._v(" This event port fires an event if a blink is detected in the input sequence of integers.")]),e._v(" "),n("li",[n("strong",[e._v("DoubleblinkDetected:")]),e._v(" This event port fires an event if a double blink is detected in the input sequence of integers.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("sampleRate [integer]:")]),e._v(" Sample rate of the input signal in Hertz.")]),e._v(" "),n("li",[n("strong",[e._v("maxThreshold [integer]:")]),e._v(" Positive threshold for a peak in the derivated signal to be considered as a potential blink (see “Double blink derivative” figure).")]),e._v(" "),n("li",[n("strong",[e._v("minThreshold [integer]:")]),e._v(" Negative threshold for a peak in the derivated signal to be considered as a potential blink (see “Double blink derivative” figure).")]),e._v(" "),n("li",[n("strong",[e._v("BlinkLength [integer]:")]),e._v(" Duration of one blink in miliseconds (see “Double blink derivative” figure).")]),e._v(" "),n("li",[n("strong",[e._v("DoubleBlinkSeparation [integer]:")]),e._v(" Separation (in miliseconds) between two blinks that correspond to a double blink (see “Double blink derivative” figure).")])])])}),[],!1,null,null,null);t.default=r.exports}}]);