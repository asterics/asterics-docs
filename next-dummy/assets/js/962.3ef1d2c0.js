(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{1505:function(t,e,i){"use strict";i.r(e);var n=i(21),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"ssvep-detect"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ssvep-detect"}},[t._v("#")]),t._v(" SSVEP Detect")]),t._v(" "),n("p",[t._v("This component is in charge of evaluating the SSVEP response (up to 4 different frequencies) among the frequencies defined by the user. It also calculates the config file based on previously recorded training files that will be used to evaluate the detection, and is also in charge of updating its parameters according to the config file")]),t._v(" "),n("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feauture-extraction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feauture-extraction"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: DSP and Feauture extraction)")]),t._v(" "),n("p",[n("img",{attrs:{src:i(2868),alt:"Screenshot: SSVEPDetect plugin",title:"Screenshot: SSVEPDetect plugin"}}),n("br"),t._v("\nSSVEPDetect plugin")]),t._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),n("p",[t._v("SSVEPTrainFunction.exe and Matlab 2008B runtime engine")]),t._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("O1 [double]:")]),t._v(" Input port for the EEG channel O1. "),n("strong",[t._v("This input port supports synchronization")])]),t._v(" "),n("li",[n("strong",[t._v("Oz [double]:")]),t._v(" Input port for the EEG channel Oz. "),n("strong",[t._v("This input port supports synchronization")])]),t._v(" "),n("li",[n("strong",[t._v("O2 [double]:")]),t._v(" Input port for the EEG channel O2. "),n("strong",[t._v("This input port supports synchronization")])]),t._v(" "),n("li",[n("strong",[t._v("UserName [string]:")]),t._v(" Name Identifying current the user.")]),t._v(" "),n("li",[n("strong",[t._v("NumberOfPanels [string]:")]),t._v(" Number of stimulation panels.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP1 [string]:")]),t._v(" Stimulation frequency of panel 1.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP2 [string]:")]),t._v(" Stimulation frequency of panel 2.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP3 [string]:")]),t._v(" Stimulation frequency of panel 3.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP4 [string]:")]),t._v(" Stimulation frequency of panel 4.")])]),t._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("FreqP1 [integer]:")]),t._v(" Stimulation frequency of panel 1.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP2 [integer]:")]),t._v(" Stimulation frequency of panel 2.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP3 [integer]:")]),t._v(" Stimulation frequency of panel 3.")]),t._v(" "),n("li",[n("strong",[t._v("FreqP4 [integer]:")]),t._v(" Stimulation frequency of panel 4.")])]),t._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("StartStim:")]),t._v(" Event Informing that the stimulation period has started.")]),t._v(" "),n("li",[n("strong",[t._v("StopStim:")]),t._v(" Event Informing that the stimulation period has finished.")]),t._v(" "),n("li",[n("strong",[t._v("CalculateConfigFile:")]),t._v(" Event requesting the calculation of the configuration file")]),t._v(" "),n("li",[n("strong",[t._v("UpdateFromConfigFile:")]),t._v(" Event requested an update of the properties according to the configuration file.")]),t._v(" "),n("li",[n("strong",[t._v("UpdatePanelsConfig:")]),t._v(" Event reporting the stimulation panels plugin to update the stimulation frequencies.")])]),t._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("UpdatePanelsConfig:")]),t._v(" Event reporting the stimulation panels plugin to update the stimulation frequencies.")]),t._v(" "),n("li",[n("strong",[t._v("NonStimFreqD:")]),t._v(" Event reporting that none stimulation frequency could be detected.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq1D:")]),t._v(" Event reporting that stimulation frequency number 1 was detected.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq2D:")]),t._v(" Event reporting that stimulation frequency number 2 was detected.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq3D:")]),t._v(" Event reporting that stimulation frequency number 3 was detected.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq4D:")]),t._v(" Event reporting that stimulation frequency number 4 was detected.")])]),t._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("SF1GO1 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 1 and electrode O1.")]),t._v(" "),n("li",[n("strong",[t._v("SF1GOz [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 1 and electrode Oz.")]),t._v(" "),n("li",[n("strong",[t._v("SF1GO2 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 1 and electrode O2.")]),t._v(" "),n("li",[n("strong",[t._v("SF2GO1 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 2 and electrode O1.")]),t._v(" "),n("li",[n("strong",[t._v("SF2GOz [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 2 and electrode Oz.")]),t._v(" "),n("li",[n("strong",[t._v("SF2GO2 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 2 and electrode O2.")]),t._v(" "),n("li",[n("strong",[t._v("SF3GO1 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 3 and electrode O1.")]),t._v(" "),n("li",[n("strong",[t._v("SF3GOz [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 3 and electrode Oz.")]),t._v(" "),n("li",[n("strong",[t._v("SF3GO2 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 3 and electrode O2.")]),t._v(" "),n("li",[n("strong",[t._v("SF4GO1 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 4 and electrode O1.")]),t._v(" "),n("li",[n("strong",[t._v("SF4GOz [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 4 and electrode Oz.")]),t._v(" "),n("li",[n("strong",[t._v("SF4GO2 [double]:")]),t._v(" Spatial filter coefficient for stimulation frequency 4 and electrode O2.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq1 [integer]:")]),t._v(" Stimulation frequency number 2 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection…")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq2 [integer]:")]),t._v(" Stimulation frequency number 2 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq3 [integer]:")]),t._v(" Stimulation frequency number 3 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),t._v(" "),n("li",[n("strong",[t._v("StimFreq4 [integer]:")]),t._v(" Stimulation frequency number 4 in Hz. If its value is 0 it will not be evaluated in the SSVEP detection.")]),t._v(" "),n("li",[n("strong",[t._v("BestHarm1 [integer]:")]),t._v(" Best harmonic to detect stimulation frequency 1.")]),t._v(" "),n("li",[n("strong",[t._v("BestHarm2 [integer]:")]),t._v(" Best harmonic to detect stimulation frequency 2.")]),t._v(" "),n("li",[n("strong",[t._v("BestHarm3 [integer]:")]),t._v(" Best harmonic to detect stimulation frequency 3.")]),t._v(" "),n("li",[n("strong",[t._v("BestHarm4 [integer]:")]),t._v(" Best harmonic to detect stimulation frequency 4.")])])])}),[],!1,null,null,null);e.default=r.exports},2868:function(t,e,i){t.exports=i.p+"assets/img/SSVEPDetect.a71b1d1d.jpg"}}]);