(window.webpackJsonp=window.webpackJsonp||[]).push([[1415],{3689:function(e,t,n){e.exports=n.p+"assets/img/speechprocessor.69f52c9f.jpg"},458:function(e,t,n){"use strict";n.r(t);var o=n(22),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"speech-processor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#speech-processor"}},[e._v("#")]),e._v(" Speech Processor")]),e._v(" "),o("p",[e._v("Component Type: Processor (Subcategory: Audio and Voice)")]),e._v(" "),o("p",[e._v("The SpeechProcessor component provides methods to use a speech recognition engine and a speech synthesizer, provided via the Microsoft Speech Platform Server version 11 (see "),o("a",{attrs:{href:"http://www.microsoft.com/en-us/download/details.aspx?id=27225",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.microsoft.com/en-us/download/details.aspx?id=27225"),o("OutboundLink")],1),e._v("). The Microsoft Speech Platform provides enables recognition of spoken words and generation of synthesized speech (text-to-speech, TTS). Engines and language packs for 26 languages can be downloaded for free (see above link). The language (culture) of speech recognition and synthesis can be adjusted as a plugin property (currently English, German, Spanish and Polish are supported by the plugin, if the language packs are installed.) The supported voice commands can be set by the plugin properties. Recognized commands trigger events and are put to an output port as stings. Moreover, the component can receive strings which are spoken via the selected speech synthesizer. The component features special commands for activation, deactivation and speaking all supported commands")]),e._v(" "),o("p",[o("img",{attrs:{src:n(3689),alt:"Screenshot: SpeechProcessor plugin",title:"Screenshot: SpeechProcessor plugin"}})]),e._v(" "),o("p",[e._v("SpeechProcessor plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("ul",[o("li",[e._v("This component requires Microsoft’s Speech Platform version 11 Runtime and the desired language packs to be installed on the platform running the plugin.")])]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("speak [string]:")]),e._v(" This port receives strings containing sentences or words that should be spoken via a speech synthesizer which fits the selected language (text-to-speech).")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("command [string]:")]),e._v(" This output sends strings which have been recognized by the speech recognition engine (matching one of the commands defined by property values).")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("help:")]),e._v(" and incoming event starts the help mode where all supported voice commands will be spoken.")])]),e._v(" "),o("h2",{attrs:{id:"event-triggerer-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description"}},[e._v("#")]),e._v(" Event Triggerer Description:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("activated:")]),e._v(" triggered when the recognition is activated via the defined activation command.")]),e._v(" "),o("li",[o("strong",[e._v("deActivated:")]),e._v(" triggered when the recognition is deactivated via the defined command.")]),e._v(" "),o("li",[o("strong",[e._v("recognizedCommand1 - recognizedCommand10:")]),e._v(" If an incoming word matches a command defined in the plugin properties, the corresponding event will fire.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("language [integer] (combobox selection):")]),e._v(" A combobox which defines which speech pack is to be used (currently: English, German, Spanish, Polish) - these language packs need to be installed !")]),e._v(" "),o("li",[o("strong",[e._v("recognitionConfidence [double]:")]),e._v(" This value defines the needed confidence for a valid recognition. The value can range from 0 to 1. A higher value results in a more precise pronunciation needed to detect a command, a lower level could lead to more false-positive recognition results.")]),e._v(" "),o("li",[o("strong",[e._v("speechLoopDelay [integer]:")]),e._v(" This value defines the minimal time between two speech commands. It is used to avoid recognition-loops")]),e._v(" "),o("li",[o("strong",[e._v("activationCommand [string]:")]),e._v(" a speech command to start the recognition of the other commands.")]),e._v(" "),o("li",[o("strong",[e._v("deactivationCommand [string]:")]),e._v(" a speech command to stop the recognition of the other commands.")]),e._v(" "),o("li",[o("strong",[e._v("helpCommand [string]:")]),e._v(" a speech command to speak out all supported voice commands.")]),e._v(" "),o("li",[o("strong",[e._v("mode [integer] (combobox selection):")]),e._v(" This property selects one out of three operating modes for the speech recognition:\n"),o("ul",[o("li",[e._v("“always active”: the command recognition is always running")]),e._v(" "),o("li",[e._v("“voice-triggered activation and deactivation”: the command recognition is started by the recognition of the activation command and stopped by the deactivation command (these commands are defined in the according properties).")]),e._v(" "),o("li",[e._v("“automatic deactivation after command recognition”: after a recognized command, the speech recognition will be bypassed until another activation command has been recognized.")]),e._v(" "),o("li",[e._v("“speech recognition disabled (TTS only)”: In this mode, the speech recognition engine is not used whichs saved CPU power in text-to-speech-only applications.")])])]),e._v(" "),o("li",[o("strong",[e._v("command1 to command10:")]),e._v(" The command strings which are checked by the speech recognition engines (these build the recognition grammar).")])])])}),[],!1,null,null,null);t.default=i.exports}}]);