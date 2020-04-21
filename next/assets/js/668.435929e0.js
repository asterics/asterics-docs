(window.webpackJsonp=window.webpackJsonp||[]).push([[668],{2391:function(e,t,s){e.exports=s.p+"assets/img/ComputeBandpower.9a67636f.jpg"},898:function(e,t,s){"use strict";s.r(t);var r=s(22),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"compute-bandpower"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#compute-bandpower"}},[e._v("#")]),e._v(" Compute Bandpower")]),e._v(" "),r("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feature-detection"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feature-detection"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),r("p",[e._v("This component computes the power that an input signal has in a specific frequency band. The plugin stores as many values as the DataLen property indicates before providing a new value in the output port. This solution is based on the FFT so only the bins corresponding to the specified band are considered. This approach removes the contribution of the out-band frequencies to the final value. This approach improves the power output of the filter plugin which uses the filtered signal for computing the output value so the frequencies out of the pass band contributes to the final value since the filter is implemented as FIR filter with a finite number of coefficients so the frequency response will not never be perfect.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(2391),alt:"Screenshot: Compute Bandpower plugin",title:"Screenshot: Compute Bandpower plugin"}}),r("br"),e._v("\nCompute Bandpower plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("The values in the input port shall correspond to a time series.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("input [double]:")]),e._v(" Input port for the values of time series which power in band is computed.")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("output [double]:")]),e._v(" Output of the value that corresponds to the power of the signal present in the last DataLen samples. If the input signal is expressed in volts, then the output is expressed in squared volts.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("DataLen [integer]:")]),e._v(" Defines the length of the time series over which the band power computation is performed. Only power of two values are allowed for this property.")]),e._v(" "),r("li",[r("strong",[e._v("SampleRate [integer]:")]),e._v(" Defines the sample rate of the input time series. It is defined in samples per second.")]),e._v(" "),r("li",[r("strong",[e._v("StartBandFrequency [integer]:")]),e._v(" Defines the beginning of the band to be analysed. It is defined in Hertz.")]),e._v(" "),r("li",[r("strong",[e._v("EndBandFrequency [integer]:")]),e._v(" Defines the end of the band to be analysed. It is defined in Hertz.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);