(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{1109:function(e,t,i){"use strict";i.r(t);var n=i(21),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"midi-player"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#midi-player"}},[e._v("#")]),e._v(" Midi Player")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-audio-and-voice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-audio-and-voice"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Audio and Voice)")]),e._v(" "),n("p",[e._v("The MidiPlayer component can generate midi tone output on the default midi device of the system. This can be used for audio feedback (e.g. for a selection or click) or for creation of musical instruments. The MidiPlayer Plugin features an optional GUI where the currently played tone can be seen.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(2557),alt:"Screenshot: MidiPlayer GUI",title:"Screenshot: MidiPlayer GUI"}}),n("br"),e._v("\nMidiPlayer GUI")]),e._v(" "),n("p",[n("img",{attrs:{src:i(2558),alt:"Screenshot: MidiPlayer plugin",title:"Screenshot: MidiPlayer plugin"}}),n("br"),e._v("\nMidiPlayer plugin")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("trigger [integer]:")]),e._v(" The input strength (tone trigger).")]),e._v(" "),n("li",[n("strong",[e._v("pitch [integer]:")]),e._v(" The tone height input.")]),e._v(" "),n("li",[n("strong",[e._v("instrument [string]:")]),e._v(" accepts a string which contains a valid instrument name to select this instrument")]),e._v(" "),n("li",[n("strong",[e._v("scale [string]:")]),e._v(" accepts a string which contains a tone scale name to select this tone scale")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("midiDevice [combobox]:")]),e._v(" The Midi Output device. This combobox allows selection of an installed Midi device for tone output. "),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),n("li",[n("strong",[e._v("channel [combobox]:")]),e._v(" The midi channel (1-16, 10 usually is the drum channel).")]),e._v(" "),n("li",[n("strong",[e._v("instrument [combobox]:")]),e._v(" The midi instrument or controller (the first 127 selections are instruments, then 127 controllers are available. if a controller is selected, the incoming pitch value is use as control change value). "),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),n("li",[n("strong",[e._v("triggerThreshold [integer]:")]),e._v(" The value of the trigger input threshold. Tones will only be generated if the trigger input is bigger than this value. If the trigger inptu is not used, all tone heights received at the pitch input port are played with full volume.")]),e._v(" "),n("li",[n("strong",[e._v("triggerMax [integer]:")]),e._v(" The maximum value of the trigger input. This value influences the volume of the played tones: Tones will get louder as the trigger input value approaches the triggerMax value.")]),e._v(" "),n("li",[n("strong",[e._v("pitchMin [integer]:")]),e._v(" The minimum value for pitch input. Defines the pitch input value for the lowest tone output.")]),e._v(" "),n("li",[n("strong",[e._v("pitchMax [integer]:")]),e._v(" The maximum value for pitch input Defines the pitch input value for the highest tone output.")]),e._v(" "),n("li",[n("strong",[e._v("toneScale [integer]:")]),e._v(" One of several tone scales can be selected. The tonscales are stored in the plugin’s subfolder in the ARE. "),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),n("li",[n("strong",[e._v("playOnlyChangingNotes [boolean]:")]),e._v(" If selected, only different note values are triggered (else, same note values can be played multiple times)")]),e._v(" "),n("li",[n("strong",[e._v("displayGUI [boolean]:")]),e._v(" If this property value is set to true, the GUI window for the MidiPlugin will be displayed. The GUI window shows the current tone height and the available feedback tone scale.")])])])}),[],!1,null,null,null);t.default=r.exports},2557:function(e,t,i){e.exports=i.p+"assets/img/MidiPanel.3dc01ab6.jpg"},2558:function(e,t,i){e.exports=i.p+"assets/img/MidiPlayer.6599e758.jpg"}}]);