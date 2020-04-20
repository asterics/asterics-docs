(window.webpackJsonp=window.webpackJsonp||[]).push([[1364],{3637:function(e,t,n){e.exports=n.p+"assets/img/computebandpower.9a67636f.jpg"},616:function(e,t,n){"use strict";n.r(t);var s=n(21),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compute-bandpower"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compute-bandpower"}},[e._v("#")]),e._v(" Compute Bandpower")]),e._v(" "),s("p",[e._v("Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),s("p",[e._v("This component computes the power that an input signal has in a specific frequency band. The plugin stores as many values as the DataLen property indicates before providing a new value in the output port. This solution is based on the FFT so only the bins corresponding to the specified band are considered. This approach removes the contribution of the out-band frequencies to the final value. This approach improves the power output of the filter plugin which uses the filtered signal for computing the output value so the frequencies out of the pass band contributes to the final value since the filter is implemented as FIR filter with a finite number of coefficients so the frequency response will not never be perfect.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(3637),alt:"Screenshot: Compute Bandpower plugin",title:"Screenshot: Compute Bandpower plugin"}})]),e._v(" "),s("p",[e._v("Compute Bandpower plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("The values in the input port shall correspond to a time series.")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("input [double]:")]),e._v(" Input port for the values of time series which power in band is computed.")])]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("output [double]:")]),e._v(" Output of the value that corresponds to the power of the signal present in the last DataLen samples. If the input signal is expressed in volts, then the output is expressed in squared volts.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("DataLen [integer]:")]),e._v(" Defines the length of the time series over which the band power computation is performed. Only power of two values are allowed for this property.")]),e._v(" "),s("li",[s("strong",[e._v("SampleRate [integer]:")]),e._v(" Defines the sample rate of the input time series. It is defined in samples per second.")]),e._v(" "),s("li",[s("strong",[e._v("StartBandFrequency [integer]:")]),e._v(" Defines the beginning of the band to be analysed. It is defined in Hertz.")]),e._v(" "),s("li",[s("strong",[e._v("EndBandFrequency [integer]:")]),e._v(" Defines the end of the band to be analysed. It is defined in Hertz.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);