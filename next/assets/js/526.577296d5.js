(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{2266:function(e,t,s){e.exports=s.p+"assets/img/micgpi.c3fe15a9.png"},655:function(e,t,s){"use strict";s.r(t);var i=s(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"micgpi"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#micgpi"}},[e._v("#")]),e._v(" MicGPI")]),e._v(" "),i("h3",{attrs:{id:"component-type-sensor-subcategory-generic-control-input"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-generic-control-input"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Generic Control Input)")]),e._v(" "),i("p",[e._v("This component reads the input from the microphone or line-in of a computer’s sound device. The sound pressure level and the dominant frequency can be calculated and used for control purposes. It is highly recommended to use a headset microphone to avoid unwanted detections from ambient noise. The sample speed is 8000 Hz, mono (1 channel) at 8 bit resoltion.")]),e._v(" "),i("p",[e._v("It is possible to attach a momentary switch via standard 3.5mm jack plug to the mic/line input of the soundcard and use this component for detection of switch presses.")]),e._v(" "),i("p",[i("strong",[e._v("Disclaimer:")]),e._v(" Attaching a switch to mic/line input does not work with all sound cards. Although we are not aware of a permanent damage to a sound card, you do this on your own risk !")]),e._v(" "),i("p",[i("img",{attrs:{src:s(2266),alt:"Screenshot: MicGPI plugin",title:"Screenshot: MicGPI plugin"}})]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("A internal or external sound device with mic or line input is required. If the component is utilized as switch input, a momentary switch must be attached to the line-in or microphone input jack. No additional input circuit is required. Any sort of filtering of the signal like background noise cancelling must be disabled.")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("thresholdLow [int]:")]),e._v(" This input port sets the low threshold below a signal must move that a inLow event gets triggered.")]),e._v(" "),i("li",[i("strong",[e._v("thresholdHigh [int]:")]),e._v(" This input port sets the high threshold above a signal must move that a inHigh event gets triggered.")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("pressure [double]:")]),e._v(" This port outputs the sound pressure level of the mic input signal (envelope of amplitudes).")]),e._v(" "),i("li",[i("strong",[e._v("frequency [integer]:")]),e._v(" In case frequency calculation is enabled, this port outputs the dominant frequency of the spectrum (in Hz).")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("inLow:")]),e._v(" This event is fired if the external signal goes below the low threshold (can be used to detect switch press/release).")]),e._v(" "),i("li",[i("strong",[e._v("inHigh:")]),e._v(" This event is fired if the external signal goes above the high threshold (can be used to detect switch press/release).")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("sampleSize [int]:")]),e._v(" Defines the size of the sample buffer. Must be a power of 2. The values 32/64/128/256/512/1024/2048 can be selected from a combobox. This buffer size determines the calculation-interval on the output ports.")]),e._v(" "),i("li",[i("strong",[e._v("thresholdLow [int]:")]),e._v(" This property sets the low threshold below a signal must move that a inLow event gets triggered.")]),e._v(" "),i("li",[i("strong",[e._v("thresholdHigh [int]:")]),e._v(" This property sets the high threshold above a signal must move that a inHigh event gets triggered.")]),e._v(" "),i("li",[i("strong",[e._v("noiseLevel [double]:")]),e._v(" This property defines a minimum level fo a valid sound signal. All noise which is below this level will be attenauted to avoid unwanted detections.")]),e._v(" "),i("li",[i("strong",[e._v("calculateFrequency [boolean]:")]),e._v(" If true, an FFT will be performed to calculate the frequency spectrum and output the dominant frequency to the associated port.")]),e._v(" "),i("li",[i("strong",[e._v("printSpectrum [boolean]:")]),e._v(" If this property is set to true and frequency calculation is enabled, the FFT spectrum will be printed to the console (only reasonable in debug mode).")]),e._v(" "),i("li",[i("strong",[e._v("captureDevice: [string]:")]),e._v(" This property defines the sound card from which the audio samples should be analysed. (dynamic property, values are suggested when ARE is in synced state)")])])])}),[],!1,null,null,null);t.default=o.exports}}]);