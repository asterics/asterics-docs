(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1980:function(e,t,i){"use strict";i.r(t);var a=i(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"grid-element-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grid-element-actions"}},[e._v("#")]),e._v(" Grid element actions")]),e._v(" "),a("p",[e._v("This chapter is about actions that can be performed if a grid element is selected and how to configure them:")]),e._v(" "),a("ol",[a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#edit-actions-modal"}},[e._v("Edit actions modal")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#speak-label"}},[e._v("Action Types")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#speak-label"}},[e._v("Speak label")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#navigate-to-other-grid"}},[e._v("Navigate to other grid")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#speak-custom-text"}},[e._v("Speak custom text")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#fill-prediction-elements"}},[e._v("Fill prediction elements")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#collect-element-action"}},[e._v("Collect element action")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#asterics-action"}},[e._v("AsTeRICS Action")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#web-radio-action"}},[e._v("Web radio action")])],1)])],1)]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),a("h2",{attrs:{id:"edit-actions-modal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-actions-modal"}},[e._v("#")]),e._v(" Edit actions modal")]),e._v(" "),a("p",[e._v("Choosing “Actions” in the "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/03_appearance_layout.html#editing-grid-elements"}},[e._v("Edit grid element menu")]),e._v(" opens a configuration modal (Fig. 1):")],1),e._v(" "),a("p",[a("img",{attrs:{src:i(3965),alt:"input options"}}),e._v(" "),a("em",[e._v("Fig. 1: Edit actions modal")])]),e._v(" "),a("p",[e._v("This modal configures the actions that will be performed if the grid element is selected. These are the elements in the action modal:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("New action")]),e._v(": adds a new action to the grid, in the combobox the action type has to be selected")]),e._v(" "),a("li",[a("strong",[e._v("Current actions")]),e._v(": list of currently configured actions that will be performed if the grid element is selected")]),e._v(" "),a("li",[a("strong",[e._v("Speak label")]),e._v(": first configured action of this element - speak the label of the element")]),e._v(" "),a("li",[a("strong",[e._v("Edit")]),e._v(": edit and configure the particular action")]),e._v(" "),a("li",[a("strong",[e._v("Delete")]),e._v(": delete the action from this grid element")]),e._v(" "),a("li",[a("strong",[e._v("Test")]),e._v(": tests the action, e.g. speaks the label. This button is not available for all types of actions.")]),e._v(" "),a("li",[a("strong",[e._v("Cancel")]),e._v(": discard any changes and close the modal")]),e._v(" "),a("li",[a("strong",[e._v("OK")]),e._v(": save all changes and close the modal")]),e._v(" "),a("li",[a("strong",[e._v("OK, edit previous")]),e._v(": save all changes and edit the actions of the previous element")]),e._v(" "),a("li",[a("strong",[e._v("OK, edit next")]),e._v(": save all changes and edit the actions of the next element")])]),e._v(" "),a("h2",{attrs:{id:"action-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action-types"}},[e._v("#")]),e._v(" Action types")]),e._v(" "),a("p",[e._v("These are the types of actions that are selectable (Fig. 1, number 1):")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Speak label")]),e._v(": speaks the label of the element using a computer voice (text-to-speech)")]),e._v(" "),a("li",[a("strong",[e._v("Navigate to other grid")]),e._v(": navigates to another grid")]),e._v(" "),a("li",[a("strong",[e._v("Speak custom text")]),e._v(": speaks a customizeable text using a computer voice (text-to-speech)")]),e._v(" "),a("li",[a("strong",[e._v("Fill prediction elements")]),e._v(": fills all "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("prediction elements")]),e._v(" in the current grid with word suggestions")],1),e._v(" "),a("li",[a("strong",[e._v("Collect element action")]),e._v(": performs actions on "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("collect elements")]),e._v(" in the current grid, e.g. clearing it or copying it’s text to clipboard")],1),e._v(" "),a("li",[a("strong",[e._v("AsTeRICS Action")]),e._v(": do an action in a running "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-model"}},[e._v("model")]),e._v(" in the "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-framework"}},[e._v("AsTeRICS Framework")])],1)]),e._v(" "),a("h3",{attrs:{id:"speak-label"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speak-label"}},[e._v("#")]),e._v(" Speak label")]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “speak label” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3966),alt:"action speak label"}})]),e._v(" "),a("p",[e._v("By default the language of the browser/system is selected. Available languages can differ depending on the browser, from experience "),a("a",{attrs:{href:"https://www.google.com/chrome/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Chrome"),a("OutboundLink")],1),e._v(" offers most languages. Clicking on the “Test” button speaks the label in the selected language.")]),e._v(" "),a("p",[a("em",[e._v("Note: some browsers like Internet Explorer do not support text-to-speech. In these browsers speak actions will do nothing.")])]),e._v(" "),a("h3",{attrs:{id:"navigate-to-other-grid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigate-to-other-grid"}},[e._v("#")]),e._v(" Navigate to other grid")]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “navigate to other grid” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3967),alt:"action navigate to other grid"}})]),e._v(" "),a("p",[e._v("“Grid to navigate” selects the grid to switch to if this action is performed. The combobox contains a list of the names of all available grids of the current user.")]),e._v(" "),a("h3",{attrs:{id:"speak-custom-text"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speak-custom-text"}},[e._v("#")]),e._v(" Speak custom text")]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “speak custom text” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3968),alt:"Speak custom text"}})]),e._v(" "),a("p",[e._v("For language selection the same conditions as for "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#speak-label"}},[e._v("speak label")]),e._v(" actions apply. “Text to speak” is the custom text that should be spoken. The button “Test” tests the configuration and speaks the current text.")],1),e._v(" "),a("h3",{attrs:{id:"fill-prediction-elements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fill-prediction-elements"}},[e._v("#")]),e._v(" Fill prediction elements")]),e._v(" "),a("p",[e._v("The action “fill prediction elements” fills all "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("prediction elements")]),e._v(" in the grid with word suggestions. Suggestions are calculated on the basis of the label of the current element, so an “fill prediction elements” action of an element with label “A” will fill the prediction elements with the most common words starting with character “A”:")],1),e._v(" "),a("p",[a("img",{attrs:{src:i(3969),alt:"fill prediction elements animation"}})]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “fill prediction elements” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3970),alt:"fill prediction elements action options"}})]),e._v(" "),a("p",[e._v("The meaning of the options is:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Refresh suggestions on change")]),e._v(" (only available on "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("collect elements")]),e._v("): if checked prediction elements are recalculated and refilled on every change of the collection element on base of the current value of the collection element: "),a("div",{staticStyle:{"margin-left":"2em"}},[a("img",{attrs:{src:i(3971),alt:"fill predictions elements with collect element animation",width:"350"}})])],1),e._v(" "),a("li",[a("strong",[e._v("Dictionary to use")]),e._v(": select the dictionary you want to use (see "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/02_navigation.html#manage-dictionaries-view"}},[e._v("manage dictionaries")]),e._v("). If nothing selected words from all available dictionaries will be suggested.")],1)]),e._v(" "),a("h3",{attrs:{id:"collect-element-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collect-element-action"}},[e._v("#")]),e._v(" Collect element action")]),e._v(" "),a("p",[e._v("Collect element actions are various actions that are related to "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("collect elements")]),e._v(".")],1),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “collect element action” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3972),alt:"Collect element action options"}})]),e._v(" "),a("p",[e._v("The possible actions to chose are:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Clear collect element")]),e._v(" empties the collect element")]),e._v(" "),a("li",[a("strong",[e._v("Delete last word")]),e._v(" deletes the last word of the collection elements: "),a("div",{staticStyle:{"margin-left":"2em"}},[a("img",{attrs:{src:i(3973),alt:"Delete last word animation",width:"350"}})])]),e._v(" "),a("li",[a("strong",[e._v("Delete last character")]),e._v(": "),a("div",{staticStyle:{"margin-left":"2em"}},[a("img",{attrs:{src:i(3974),alt:"Delete last character animation",width:"350"}})])]),e._v(" "),a("li",[a("strong",[e._v("Copy text to clipboard")]),e._v(": copies the current text of the collect element to clipboard in order to be available for paste in other programs")]),e._v(" "),a("li",[a("strong",[e._v("Append text to clipboard")]),e._v(": appends the current text of the collect element to clipboard making it possible to collect longer texts in the clipboard which can be used in another program afterwards")]),e._v(" "),a("li",[a("strong",[e._v("Clear clipboard")]),e._v(": empties the clipboard")])]),e._v(" "),a("h3",{attrs:{id:"asterics-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asterics-action"}},[e._v("#")]),e._v(" AsTeRICS Action")]),e._v(" "),a("p",[e._v("An “AsTeRICS action” performs an action in a running "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-model"}},[e._v("model")]),e._v(" in the "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-framework"}},[e._v("AsTeRICS Framework")]),e._v(". This can be any action that is possible with the AsTeRICS Framework, e.g. controlling a TV or performing computer actions like opening a program.")],1),e._v(" "),a("p",[e._v("Figure 2 shows how an AsTeRICS action that controls a TV is working in more detail:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3975),alt:"asterics action detail concept"}}),e._v(" "),a("em",[e._v("Fig. 2: AsTeRICS action concept, example of controlling a TV")])]),e._v(" "),a("p",[e._v("The following steps are shown in Figure 2:")]),e._v(" "),a("ol",[a("li",[e._v("A user selects a grid element with an associated AsTeRICS action. An "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-model"}},[e._v("AsTeRICS model")]),e._v(" which can perform the desired action (e.g. controlling a TV) is saved within the current grid.")],1),e._v(" "),a("li",[e._v("The AsTeRICS model is uploaded to a running instance of the AsTeRICS Framework (ARE) and afterwards started. The model contains so-called “plugins” which are elements capable of communicating with external hardware, e.g. attached to the computer or accessible via network. In the example the “IrTrans” plugin is capable of communicating with an IrTrans device, which is a replacement for infrared remotes.")]),e._v(" "),a("li",[e._v("After uploading and starting the model on the AsTeRICS Framework, data is sent to a plugin contained in the model. In Fig. 2 some data is sent to the “action” port of the IrTrans plugin.")]),e._v(" "),a("li",[e._v("Sending data to the plugin causes the AsTeRICS Framework to communicate with the external real “IrTrans” hardware. The action contains the needed information to perform the desired action, for instance sending a “Volume down” command to a TV.")]),e._v(" "),a("li",[e._v("Finally the IrTrans device sends the infrared signal to the TV causing it to reduce the volume.")])]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “AsTeRICS action” action (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3976),alt:"asterics action options"}})]),e._v(" "),a("p",[e._v("These are the possibilities while configuring an AsTeRICS Action:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("ARE URL")]),e._v(": the URL of a running ARE (AsTeRICS Framework) to connect with. Standard URL is "),a("code",[e._v("http://127.0.0.1:8081/rest/")]),e._v(" for a locally running ARE.")]),e._v(" "),a("li",[a("strong",[e._v("Test URL")]),e._v(": click in order to test the current URL. A tick (✓) or times (×) symbol will indicate if the test was successful or has failed.")]),e._v(" "),a("li",[a("strong",[e._v("ARE Model")]),e._v(": if there is already a "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#asterics-model"}},[e._v("model")]),e._v(" of this action defined, the name of it is shown here. A click on the link downloads the model.")],1),e._v(" "),a("li",[a("strong",[e._v("Download from ARE")]),e._v(": downloads the currently running model from a running AsTeRICS Framework (ARE) instance and saves it to the grid. The current ARE model is replaced by this action.")]),e._v(" "),a("li",[a("strong",[e._v("Upload to ARE")]),e._v(": uploads the saved model to a running AsTeRICS Framework (ARE) for testing purpose or in order to adapt it.")]),e._v(" "),a("li",[a("strong",[e._v("Component")]),e._v(": selection of the component (plugin) of the selected model that should be used")]),e._v(" "),a("li",[a("strong",[e._v("Send data")]),e._v(": define data that should be sent to a specific port of the component")]),e._v(" "),a("li",[a("strong",[e._v("Trigger event")]),e._v(": selects an event that should be triggered on the selected component (optional, either “send data”, “trigger event” or both can be used)")]),e._v(" "),a("li",[a("strong",[e._v("Test action")]),e._v(": performs the defined AsTeRICS action for testing, same as will be later performed if the grid element is selected")]),e._v(" "),a("li",[a("strong",[e._v("OK")]),e._v(": apply changes and close edit mode of this AsTeRICS action")])]),e._v(" "),a("h3",{attrs:{id:"web-radio-action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-radio-action"}},[e._v("#")]),e._v(" Web radio action")]),e._v(" "),a("p",[e._v("AsTeRICS Grid is capable of searching and playing web radio stations. The station search capabilities are powered by the API of "),a("a",{attrs:{href:"https://www.radio-browser.info/gui/#!/",target:"_blank"}},[e._v("radio-browser.info")]),e._v(".")]),e._v(" "),a("p",[e._v("Clicking on “Edit” on a “Web radio action” (or creating a new one) shows the following configuration possibilities:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(3977),alt:"Web radio action options"}})]),e._v(" "),a("p",[e._v("These are the elements in this configuration dialog:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Web radio action")]),e._v(": chooses the type of web radio action to perform which can be one of the following:\n"),a("ul",[a("li",[a("em",[e._v("Turn radio on")]),e._v(": turns on the radio with the channel selected at "),a("em",[e._v("Webradio to play")])]),e._v(" "),a("li",[a("em",[e._v("Turn radio on/off")]),e._v(": toggles the radio on/off state with the channel selected at "),a("em",[e._v("Webradio to play")])]),e._v(" "),a("li",[a("em",[e._v("Turn radio off")]),e._v(": turns the radio off")]),e._v(" "),a("li",[a("em",[e._v("Next radio channel")]),e._v(": moves to next radio channel in the list of selected radio stations, see (4)")]),e._v(" "),a("li",[a("em",[e._v("Previous radio channel")]),e._v(": moves to previous radio channel in the list of selected radio stations, see (4)")]),e._v(" "),a("li",[a("em",[e._v("Radio volume up")]),e._v(": increases the radio volume")]),e._v(" "),a("li",[a("em",[e._v("Radio volume down")]),e._v(": decreases the radio volume")])])]),e._v(" "),a("li",[a("strong",[e._v("Webradio to play")]),e._v(": chooses which radio to play (only visible for "),a("em",[e._v("Turn radio on")]),e._v(" and "),a("em",[e._v("Turn radio on/off")]),e._v("), possible channels to select are defined in selected radio stations list, see (4)")]),e._v(" "),a("li",[a("strong",[e._v("Manage webradio list")]),e._v(": accordion which folds/unfolds the section where radio stations can be searched and selected")]),e._v(" "),a("li",[a("strong",[e._v("Selected radio stations list")]),e._v(": list of selected radio stations which are available within the current grid")]),e._v(" "),a("li",[a("strong",[e._v("Up")]),e._v(": moves the station up in the list (reordering)")]),e._v(" "),a("li",[a("strong",[e._v("Play")]),e._v(": plays the radio channel")]),e._v(" "),a("li",[a("strong",[e._v("Remove")]),e._v(": removes the radio channel from the list of selected radio stations")]),e._v(" "),a("li",[a("strong",[e._v("Search term input")]),e._v(": search bar for searching new radio stations. By default search is done for radio station name, but the following additional properties are possible (see "),a("a",{attrs:{href:"http://www.radio-browser.info/webservice#Advanced_station_search",target:"_blank",rel:"noopener noreferrer"}},[e._v("API documentation"),a("OutboundLink")],1),e._v("): "),a("em",[e._v("name (default), country, state, language, tag, tagList, order")]),e._v(". To use this additional properties they have to be added with semicolon to the search term.\n"),a("ul",[a("li",[a("em",[e._v("Examples")]),e._v(": The search term for looking for austrian radio stations with name "),a("code",[e._v("Hitradio")]),e._v(" would be: "),a("code",[e._v("name:Hitradio country:austria")]),e._v(". If the search term is just "),a("code",[e._v("Hitradio")]),e._v(" search will be done for radio stations with this name.")])])]),e._v(" "),a("li",[a("strong",[e._v("Webradio search result list")]),e._v(": result list for the current search term")]),e._v(" "),a("li",[a("strong",[e._v("Play")]),e._v(": plays the radio station")]),e._v(" "),a("li",[a("strong",[e._v("Select")]),e._v(": adds the radio station to the list of selected radio stations, see (4)")]),e._v(" "),a("li",[a("strong",[e._v("Previous page")]),e._v(": navigates to the previous page of search results (if available)")]),e._v(" "),a("li",[a("strong",[e._v("Next page")]),e._v(": navigates to the next page of search results (if available)")])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/04_input_options.html"}},[e._v("← Previous Chapter")]),e._v(" "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/06_users.html"}},[e._v("Next Chapter →")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=o.exports},3965:function(e,t,i){e.exports=i.p+"assets/img/edit_actions_en.cfa34a8c.jpg"},3966:function(e,t,i){e.exports=i.p+"assets/img/action_speak_label_en.aa02d84b.jpg"},3967:function(e,t,i){e.exports=i.p+"assets/img/action_navigate_en.ad33c37c.jpg"},3968:function(e,t,i){e.exports=i.p+"assets/img/action_speak_custom_en.d4cc8311.jpg"},3969:function(e,t,i){e.exports=i.p+"assets/img/fill_predictions.b9cbc05d.gif"},3970:function(e,t,i){e.exports=i.p+"assets/img/action_fillprediction_en.b994d042.jpg"},3971:function(e,t,i){e.exports=i.p+"assets/img/fill_predictions2.22eb1354.gif"},3972:function(e,t,i){e.exports=i.p+"assets/img/action_collectelement_en.7077e8a1.jpg"},3973:function(e,t,i){e.exports=i.p+"assets/img/collect_delete.3acb3ae6.gif"},3974:function(e,t,i){e.exports=i.p+"assets/img/collect_delete_c.a3d47cfc.gif"},3975:function(e,t,i){e.exports=i.p+"assets/img/asterics-action-are_en.663cadf0.png"},3976:function(e,t,i){e.exports=i.p+"assets/img/action_asterics_en.d893206a.jpg"},3977:function(e,t,i){e.exports=i.p+"assets/img/action_webradio_en.7231dd3b.jpg"}}]);