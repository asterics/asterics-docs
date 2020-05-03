(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{1760:function(e,t,n){"use strict";n.r(t);var i=n(2),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"blink-detection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#blink-detection"}},[e._v("#")]),e._v(" Blink Detection")]),e._v(" "),i("p",[e._v("Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),i("p",[e._v("This component detects the shape that a blink produces in an electro-oculogram signal. The plugin analyses the input samples and recognises both a single blink and a double blink. Here a single blink is defined by an action whereby both eyes are simultaneously and voluntary closed and open. A double blink refers to the repletion of this action twice in an consecutive way. When one of these conditions is found the corresponding event is fired. In addition, a true Boolean will be output to the corresponding output port.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3212),alt:"Screenshot: Blink Detection plugin",title:"Screenshot: Blink Detection plugin"}})]),e._v(" "),i("p",[e._v("Blink Detection plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("The input signal shall correspond to a 250-Hz sampled electro-oculogram signal, i.e., an output port of the "),i("a",{attrs:{href:"../sensors/Enobio.htm"}},[e._v("Enobio")]),e._v(" component when the corresponding electrode is placed on the user’s forehead.")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("input [integer]:")]),e._v(" Input values that correspond to a 250-Hz sampled electro-oculogram signal.")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("BlinkDetected:")]),e._v(" This event port fires an event if a blink is detected in the input sequence of integers.")]),e._v(" "),i("li",[i("strong",[e._v("DoubleblinkDetected:")]),e._v(" This event port fires an event if a double blink is detected in the input sequence of integers.")])])])}),[],!1,null,null,null);t.default=o.exports},3212:function(e,t,n){e.exports=n.p+"assets/img/BlinkDetection.5593407c.jpg"}}]);