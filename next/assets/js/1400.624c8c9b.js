(window.webpackJsonp=window.webpackJsonp||[]).push([[1400],{3746:function(e,t,s){e.exports=s.p+"assets/img/hrvanalysis.4919a786.jpg"},447:function(e,t,s){"use strict";s.r(t);var r=s(2),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"hrvanalysis"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hrvanalysis"}},[e._v("#")]),e._v(" HRVAnalysis")]),e._v(" "),r("p",[e._v("Component Type: Processor (Subcategory: DSP and Feature Extraction)")]),e._v(" "),r("p",[e._v("This component calculates various Heart Rate Variability (HRV) parameters from an incoming signal of raw ECG-data. For a detailed description of the HRV parameters and a guide how to use optical and electrical heart rate sensors see the work of Andreas Schreiber (in /documentation/DIYGuides/HRVAnalysis_Schreiber.pdf and /documentation/OpticalPulseSensor_Schreiber.pdf)")]),e._v(" "),r("p",[r("img",{attrs:{src:s(3746),alt:"Screenshot: HRVAnalysis plugin",title:"Screenshot: HRVAnalysis plugin"}})]),e._v(" "),r("p",[e._v("HRVAnalysis plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("HRVInput [double]:")]),e._v(" Input port for the raw signal")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("runtime [double]:")]),e._v(" the current time, since the first sample, in seconds")]),e._v(" "),r("li",[r("strong",[e._v("pulserate [double]:")]),e._v(" the current calculated pulserate")]),e._v(" "),r("li",[r("strong",[e._v("SDNN [double]:")]),e._v(" the standard deviation of all RR-intervals")]),e._v(" "),r("li",[r("strong",[e._v("rMSSD [double]:")]),e._v(" the square-root of the average sum of the quadratic differences between neighboring RR-intervals")]),e._v(" "),r("li",[r("strong",[e._v("SDSD [double]:")]),e._v(" the current standard deviation of successive differences between neighbouring RR-intervals")]),e._v(" "),r("li",[r("strong",[e._v("pNN50 [double]:")]),e._v(" the numer of successive RR-intervales that differ by more than 50ms (expressed as percentage of all RR-intervals)")]),e._v(" "),r("li",[r("strong",[e._v("pNN20 [double]:")]),e._v(" the numer of successive RR-intervales that differ by more than 20ms (expressed as percentage of all RR-intervals)")]),e._v(" "),r("li",[r("strong",[e._v("DD [double]:")]),e._v(" the deviation of 2 succesive RR-intervals")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("start:")]),e._v(" An incoming event starts the HRV analysis")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("samplerate [double]:")]),e._v(" specifies the sample rate of the incoming signal.")]),e._v(" "),r("li",[r("strong",[e._v("outlierRange [double]:")]),e._v(" Defines factor of the mean R-amplitudes which is used as a threshold to detect spikes / signal artefacts.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);