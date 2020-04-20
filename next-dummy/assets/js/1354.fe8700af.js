(window.webpackJsonp=window.webpackJsonp||[]).push([[1354],{3622:function(e,t,n){e.exports=n.p+"assets/img/acousticscanning.edcc95ce.jpg"},652:function(e,t,n){"use strict";n.r(t);var i=n(21),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"acousticscannning"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#acousticscannning"}},[e._v("#")]),e._v(" AcousticScannning")]),e._v(" "),i("p",[e._v("Component Type: Processor (Subcategory: Audio and Voice)")]),e._v(" "),i("p",[e._v("The purpose of this component is to provide a stepwise, voice assisted selection of a large number of options. Examples for use cases are the selection of individual letters for text composition or selection of spoken phrases (eg. for environmental control via the amazon echo device). The component uses the MaryTTS text-to-speech library which supports multiple languages and voices. Currently, the component is in beta stage and only one english female voice and one german male voice are included.")]),e._v(" "),i("p",[e._v("The component provides up to 6 selectionSets. A selectionSet contains a number of individal items, seperated by commas (e.g. a number of letters for spelling words). When a selectionSet is started (by an incoming event), every selection item is spoken with an adjustable pause between the items. If an event is received at the “selection” event listener port during the presentation or pause time of a particular item, this item is added to the “preview string” output port. When the preview string contains the finalized word/phrase/sentence, it can be sent to the “selection” output port.")]),e._v(" "),i("p",[e._v("Additional functionalities can be given to the selection items via commands strings which are added to a selection item (seperated by the #-character). Supported command strings allow the deletion of the last character, the speaking of the currently composed text and other functions which are described below, thereby increasing the flexibility of the plugin. For more information see the demo model (ACS/models/componentTests/processors/AcousticScanning_test.acs)")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3622),alt:"Screenshot: AcousticScanning plugin",title:"Screenshot: AcousticScanning plugin"}})]),e._v(" "),i("p",[e._v("AcousticScanning plugin")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("loadSetFile [string]:")]),e._v(" Path/name of a file which contains alternative selectionSets (which override the default selectionSets defined in the properties “selectionSet1”-“selectionSet6”. The selectionSets are provided as individual lines, terminated with a newline character. (This functionality is currently not supported.)")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("selectionPreview [string]:")]),e._v(" Output of preview string. This output port shows the current word/phrase/sentence which is composed or spelled using the stepwise scanning process.")]),e._v(" "),i("li",[i("strong",[e._v("selection [string]:")]),e._v(" The finalized word/phrase/sentence is sent to this output port when an item containing the #commit command string has been selected.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("selectionSet1-selectionSet6:")]),e._v(" an incoming event starts the acoustic scanning process of the given selection set.")]),e._v(" "),i("li",[i("strong",[e._v("select:")]),e._v(" selects the currently spoken item and adds the item text to the preview string (or executes the command associated with the selected item)")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("event1-event10:")]),e._v(" These events are triggerd if the currently selected item contains the command string “event1”, “event2”, etc.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("language [string]:")]),e._v(" The languge of the text-to-speech engine (currently only “en” and “de” are supported).")]),e._v(" "),i("li",[i("strong",[e._v("voice [string]:")]),e._v(" The voice for the given language (currently this property is ignored, there is only one german and one english voice which are selected automatically due to the value of the language property).")]),e._v(" "),i("li",[i("strong",[e._v("selectionSet1 [string]:")]),e._v(" The items of selectionSet1, separated by commas.")]),e._v(" "),i("li",[i("strong",[e._v("selectionSet2-selectionSet6 [string]:")]),e._v(" The items of selection sets 2-6. In the following a list of all currently supported command strings is given:\n"),i("ul",[i("li",[i("em",[e._v("#del:")]),e._v(" deletes one charater from the preview string.")]),e._v(" "),i("li",[i("em",[e._v("#clear:")]),e._v(" clear the preview string.")]),e._v(" "),i("li",[i("em",[e._v("#space:")]),e._v(" adds a space key to the preview string.")]),e._v(" "),i("li",[i("em",[e._v("#enter:")]),e._v(" adds the text {ENTER} to the preview string (this generates an enter key when sent to the keyboard actuator plugin).")]),e._v(" "),i("li",[i("em",[e._v("#speak:")]),e._v(" speaks the preview string.")]),e._v(" "),i("li",[i("em",[e._v("#commit:")]),e._v(" sends the preview string to the output port “selection” and clears the preview string. This can be used to write the composed word/phrase to a keybaord actuator etc.")]),e._v(" "),i("li",[i("em",[e._v("#event1:")]),e._v(" sends an event via event trigger port “event1”.")]),e._v(" "),i("li",[i("em",[e._v("#event2:")]),e._v(" sends an event via event trigger port “event2”.")]),e._v(" "),i("li",[i("em",[e._v("#event3 - #event10:")]),e._v(" sends an events via event trigger ports event2 - 10.")]),e._v(" "),i("li",[i("em",[e._v("other text which follows a hash character will be spoken when the item is selected")])])])]),e._v(" "),i("li",[i("em",[e._v("An example of a valid selection set:")]),e._v(" “a,b,c,d,e,f,g” for the first 7 letters of the alphabet.")]),e._v(" "),i("li",[i("em",[e._v("Another example including command strings:")]),e._v(" “backspace#del,start music#event1”.")]),e._v(" "),i("li",[i("em",[e._v("Note")]),e._v(" that the selectionSet is specified without the double quotation marks and without spaces after the commas.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);