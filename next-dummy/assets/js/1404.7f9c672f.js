(window.webpackJsonp=window.webpackJsonp||[]).push([[1404],{3686:function(e,t,a){e.exports=a.p+"assets/img/peakdetector.696ec72f.png"},475:function(e,t,a){"use strict";a.r(t);var o=a(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"peakdetector"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#peakdetector"}},[e._v("#")]),e._v(" PeakDetector")]),e._v(" "),o("p",[e._v("Component Type: Processor (Subcategory: Basic Math)")]),e._v(" "),o("p",[e._v("The Peakdetector component can be used to detect peaks (top values of the signal) and valleys (bottom values) in a signal. Additionally it can calculate the time between two peaks or two valleys or between a peak and a valley. Optionally, top and bottom values can be compared with an average of the most recent top / bottom values - this allows to detect only peaks which are for example greater than 150% of the last 5 averaged peak values.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(3686),alt:"Screenshot: PeakDetector plugin",title:"Screenshot: PeakDetector plugin"}})]),e._v(" "),o("p",[e._v("PeakDetector plugin")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("in [double]:")]),e._v(" The incoming signal.")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("top:")]),e._v(" The peak value of the signal.")]),e._v(" "),o("li",[o("strong",[e._v("bottom:")]),e._v(" The bottom value of the signal.")]),e._v(" "),o("li",[o("strong",[e._v("time:")]),e._v(" The time in ms or beats per minute (BPM) (depending on the property timeMode) between two peaks (Mode=detect tops), two valleys (Mode=detect bottoms) or a valley and a peak (Mode=detect both) depending on the selected mode in the properties.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("topDetected:")]),e._v(" The event gets fired if a new top value was detected in the input signal.")]),e._v(" "),o("li",[o("strong",[e._v("bottomDetected:")]),e._v(" The event gets fired if a new bottom value was detected in the input signal.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("mode:")]),e._v(" Determines which time frame will be used for the time output signal (see description of the output port time).")]),e._v(" "),o("li",[e._v("**comparePeaks:**the number of top / bottom values which are taken into account for averaging (0 = disable)")]),e._v(" "),o("li",[e._v("**validTopPercentage:**the percentage of the recent averaged top values which constitutes a valid top value (0 = all top values are valid)")]),e._v(" "),o("li",[e._v("**validBottomPercentage:**the percentage of the recent averaged bottom values which constitutes a valid bottom value (0 = all bottom values are valid)")]),e._v(" "),o("li",[o("strong",[e._v("timeMode:")]),e._v(" Determines the unit for the measured time frame between top/bottom values. Options are beats per minute (BPM) or milliseconds.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);