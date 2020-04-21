(window.webpackJsonp=window.webpackJsonp||[]).push([[297],{1823:function(e,t,o){"use strict";o.r(t);var i=o(22),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"enobio"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#enobio"}},[e._v("#")]),e._v(" Enobio")]),e._v(" "),i("p",[e._v("Component Type: Sensor (Subcategory: Bioelectric Measurement)")]),e._v(" "),i("p",[e._v("This component interfaces the Enobio sensor to the AsTeRICS system. It is in charge of driving the USB interface, commanding the proprietary protocol that Enobio uses, filtering the signal for removing the environmental noise and performing an automatic offset compensation for each channel in order to keep the electrophysiological signal correctly calibrated and avoid the effects that the skin contact may introduce in the signal. The component delivers the sampled signal in the Enobio electrodes through four output ports (one per channel). In addition, there is another output port which reports the calibration status of the channels and information regarding the sample loses due to environmental issues in the wireless link. The output ports (sampled data and status) deliver 250 values per second, which corresponds to the sample rate in the Enobio electrodes.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(3126),alt:"Screenshot: Enobio plugin",title:"Screenshot: Enobio plugin"}})]),e._v(" "),i("p",[e._v("Enobio plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("This software component requires an Enobio receiver connected to the platform, the Enobio device switched on and the electrodes correctly placed on the user.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(3127),alt:"Enobio device",title:"Enobio device"}})]),e._v(" "),i("p",[e._v("Enobio device")]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Channel1 to Channel4 [integer]:")]),e._v(" Each output corresponds to the sampled data from its corresponding Enobio channel. The integer represents the microvolts of the electro-physiological signal read by Enobio. The data might be pre-processed according to the value of the properties of the component.")]),e._v(" "),i("li",[i("strong",[e._v("Status [integer]:")]),e._v(" This port provides information regarding both the calibration status of the four channels and the status of the wireless link. For every integer value that is available in the data output ports, another integer value is available in this port with the corresponding status information. The information is proprietary codified within a 16-bit integer. This includes information of calibration status of each channel and the status of the wireless link. This information would be kept away for the moment form the ARE programmers and provided upon request if necessary.")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("externalSignalPosEdgeEvent:")]),e._v(" This event is fired if the external signal toggles from low to high level.")]),e._v(" "),i("li",[i("strong",[e._v("externalSignalNegEdgeEvent:")]),e._v(" This event is fired if the external signal toggles from high to low level.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("IsChannel1Activated to IsChannel4Activated [Boolean]:")]),e._v(" If this property is set to true, the corresponding channel is calibrated, thus the raw data from this channel will be meaningful.")]),e._v(" "),i("li",[i("strong",[e._v("HighPassFilterInChannel1 to HighPassFilterInChannel4 [Boolean]:")]),e._v(" If this property is set to true, a high pass filter is applied to the data from the corresponding channel.")]),e._v(" "),i("li",[i("strong",[e._v("LineNoiseFilter [Boolean]:")]),e._v(" If this property is set to true, a 50 Hz band pass filter is applied to the data before it is passed to the output port. This filter is useful when the environmental electrical noise is present in the signal.")])])])}),[],!1,null,null,null);t.default=n.exports},3126:function(e,t,o){e.exports=o.p+"assets/img/Enobio.4b813b2b.jpg"},3127:function(e,t,o){e.exports=o.p+"assets/img/Enobio_picture.1eacd44c.jpg"}}]);