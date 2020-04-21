(window.webpackJsonp=window.webpackJsonp||[]).push([[1344],{3602:function(t,e,i){t.exports=i.p+"assets/img/ssvepfilewriter.8aaaba2b.jpg"},698:function(t,e,i){"use strict";i.r(e);var r=i(22),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ssvep-file-writer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-file-writer"}},[t._v("#")]),t._v(" SSVEP File Writer")]),t._v(" "),r("p",[t._v("Component Type: Actuator (Subcategory: Brain Computer Interface)")]),t._v(" "),r("p",[t._v("This plugin writes to a text file the 4 EEG channels along with a software trigger received through the event listener ports. This file is lately analyzed by the "),r("a",{attrs:{href:"../processors/ProtocolSSVEPTrain.htm"}},[t._v("ProtocolSSVEPTrain")]),t._v(" plugin to obtain the optimus frequencies to be used on the SSVEP detection.")]),t._v(" "),r("p",[r("img",{attrs:{src:i(3602),alt:"Screenshot: SSVEPFileWriter plugin",title:"Screenshot: SSVEPFileWriter plugin"}})]),t._v(" "),r("p",[t._v("SSVEPFileWriter plugin")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("filename [string]:")]),t._v(" Name of the file to be saved.")]),t._v(" "),r("li",[r("strong",[t._v("channel1 to channel4 [integer]:")]),t._v(" Input EEG signal from channels 1 to 4.")]),t._v(" "),r("li",[r("strong",[t._v("StimulationFrequency [integer]:")]),t._v(" If a stimulation frequency value is received before the StarStimulation Event the stimulation freqeuncy is appended to the name of the output file to be saved.")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("StartTrial:")]),t._v(" An incoming event at this port starts the file writer process.")]),t._v(" "),r("li",[r("strong",[t._v("StopTrial:")]),t._v(" An incoming event at this port stops the file writer process.")]),t._v(" "),r("li",[r("strong",[t._v("StartStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to the corresponding stimulation frequency value in Hz.")]),t._v(" "),r("li",[r("strong",[t._v("StopStimulation:")]),t._v(" An incoming event at this port sets the trigger channel to zeros.")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("DefaultFileName [string]:")]),t._v(" The default file name.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);