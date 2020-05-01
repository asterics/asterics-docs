(window.webpackJsonp=window.webpackJsonp||[]).push([[550],{1084:function(t,e,r){"use strict";r.r(e);var i=r(2),n=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"ssvep-file-writer"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-file-writer"}},[t._v("#")]),t._v(" SSVEP File Writer")]),t._v(" "),i("h3",{attrs:{id:"component-type-actuator-subcategory-brain-computer-interface"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-brain-computer-interface"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Brain Computer Interface)")]),t._v(" "),i("p",[t._v("This plugin writes to a text file the 4 EEG channels along with a software trigger received through the event listener ports. This file is lately analyzed by the "),i("a",{attrs:{href:"../processors/ProtocolSSVEPTrain.htm"}},[t._v("ProtocolSSVEPTrain")]),t._v(" plugin to obtain the optimus frequencies to be used on the SSVEP detection.")]),t._v(" "),i("p",[i("img",{attrs:{src:r(2253),alt:"Screenshot: SSVEPFileWriter plugin",title:"Screenshot: SSVEPFileWriter plugin"}}),i("br"),t._v("\nSSVEPFileWriter plugin")]),t._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("filename [string]:")]),t._v(" Name of the file to be saved.")]),t._v(" "),i("li",[i("strong",[t._v("channel1 to channel4 [integer]:")]),t._v(" Input EEG signal from channels 1 to 4.")]),t._v(" "),i("li",[i("strong",[t._v("StimulationFrequency [integer]:")]),t._v(" If a stimulation frequency value is received before the StarStimulation Event the stimulation freqeuncy is appended to the name of the output file to be saved.")])]),t._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("StartTrial:")]),t._v(" An incoming event at this port starts the file writer process.")]),t._v(" "),i("li",[i("strong",[t._v("StopTrial:")]),t._v(" An incoming event at this port stops the file writer process.")]),t._v(" "),i("li",[i("strong",[t._v("StartStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to the corresponding stimulation frequency value in Hz.")]),t._v(" "),i("li",[i("strong",[t._v("StopStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to zeros.")])]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("DefaultFileName [string]:")]),t._v(" The default file name.")])])])}),[],!1,null,null,null);e.default=n.exports},2253:function(t,e,r){t.exports=r.p+"assets/img/SSVEPFileWriter.8aaaba2b.jpg"}}]);