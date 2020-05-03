(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{2140:function(e,t,i){e.exports=i.p+"assets/img/MidiPanel.3dc01ab6.jpg"},2141:function(e,t,i){e.exports=i.p+"assets/img/MidiPlayer.9ca6b88e.jpg"},429:function(e,t,i){"use strict";i.r(t);var r=i(2),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"midi-player"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#midi-player"}},[e._v("#")]),e._v(" Midi Player")]),e._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-audio-and-voice"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-audio-and-voice"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Audio and Voice)")]),e._v(" "),r("p",[e._v("The MidiPlayer component can generate midi tone output on the default midi device of the system.\nThis can be used for audio feedback (e.g. for a selection or click) or for creation of musical instruments.\nThe MidiPlayer Plugin features an optional GUI where the currently played tone can be seen.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(2140),alt:"Screenshot: MidiPlayer GUI",title:"Screenshot: MidiPlayer GUI"}}),r("br"),e._v("\nMidiPlayer GUI")]),e._v(" "),r("p",[r("img",{attrs:{src:i(2141),alt:"Screenshot: MidiPlayer plugin",title:"Screenshot: MidiPlayer plugin"}}),r("br"),e._v("\nMidiPlayer plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("trigger [integer]:")]),e._v(" The input strength (tone trigger).")]),e._v(" "),r("li",[r("strong",[e._v("pitch [integer]:")]),e._v(" The tone height input.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("midiDevice [combobox]:")]),e._v(" The Midi Output device.\nThis combobox allows selection of an installed Midi device for tone output.\n"),r("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),r("li",[r("strong",[e._v("Instrument [combobox]:")]),e._v(" The midi instrument or controller (the first 127 selections are instruments, then 127 controllers are available.\nIf a controller is selected, the incoming pitch value is use as control change value).\n"),r("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),r("li",[r("strong",[e._v("triggerThreshold [integer]:")]),e._v(" The value of the trigger input threshold.\nTones will only be generated if the trigger input is bigger than this value.\nIf the trigger inptu is not used, all tone heights received at the pitch input port are played with full volume.")]),e._v(" "),r("li",[r("strong",[e._v("triggerMax [integer]:")]),e._v(" The maximum value of the trigger input.\nThis value influences the volume of the played tones: Tones will get louder as the trigger input value approaches the triggerMax value.")]),e._v(" "),r("li",[r("strong",[e._v("pitchMin [integer]:")]),e._v(" The minimum value for pitch input.\nDefines the pitch input value for the lowest tone output.")]),e._v(" "),r("li",[r("strong",[e._v("pitchMax [integer]:")]),e._v(" The maximum value for pitch input Defines the pitch input value for the highest tone output.")]),e._v(" "),r("li",[r("strong",[e._v("toneScale [integer]:")]),e._v(" One of several tone scales can be selected.\nThe tonscales are stored in the plugin’s subfolder in the ARE.\n"),r("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),r("li",[r("strong",[e._v("displayGUI [boolean]:")]),e._v(" If this property value is set to true, the GUI window for the MidiPlugin will be displayed.\nThe GUI window shows the current tone height and the available feedback tone scale.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);