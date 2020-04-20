(window.webpackJsonp=window.webpackJsonp||[]).push([[1229],{1359:function(e,t,n){"use strict";n.r(t);var i=n(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"oskaexternalscanning1d"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oskaexternalscanning1d"}},[e._v("#")]),e._v(" OskaExternalScanning1D")]),e._v(" "),i("p",[e._v("Component Type: Processor (Subcategory: OSKA)")]),e._v(" "),i("p",[e._v("This component interacts with the On Screen Keyboard Application (OSKA) and forwards key selections and command (action-) strings to other ARE plugins. The scanning function of OSKA can be controlled via this plugin, allowing 1-dimensional input values to be used for direct scanning position selection. This is done in a two-step fashion where first the columns are highlighted and then keys of a column are highlighted. Selection of columns and cells is performed upon incoming events. The event input ports allow switching from row- to column scanning, moving the cell highlighter and selecting a cell.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3315),alt:"Screenshot: OskaExternalScanning1D plugin",title:"Screenshot: OskaExternalScanning1D plugin"}})]),e._v(" "),i("p",[e._v("OskaExternalScanning1D plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v('This component requires Sensory Software\'s OSKA keyboard. OSKA is automatically started by the plugin if it is located in the expected path ("../OSKA/Start Keyboard.exe").')]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("posKey [double]:")]),e._v(' This port takes values for the selection of keys (respectively columns). Depending on the value of the property "inputRange", the incoming values are expected to be in a range from 0 to 1 (where 0 represents the first selection and 1 the last) or they identifiy the absolute key/column position as integer values. The input moves either the highlighted column or the highlighted key in the selected column to the corresponding position. A selection of the currently highlighted item can be triggered by incoming events.')])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("action [string]:")]),e._v(" This output sends the action strings (which have been added to a key in the OSKA editor) when this key is pressed.")]),e._v(" "),i("li",[i("strong",[e._v("keycodes [string]:")]),e._v(' If a key is selected which contains the "@KDB: ..." action string, the key codes are extracted from the action string and sent via this port, e.g. to the remoteKeyboard plugin\'s corresponding input port for keyboard input emulation.')])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("switch:")]),e._v(" Incoming events will trigger a state change in the scanning state machine. On the first press highlighting will switch from column highlighting to cell highlighting. On the second press, the currently highlighted OSKA cell will be selected.")]),e._v(" "),i("li",[i("strong",[e._v("highlightNext:")]),e._v(" Incoming events highlight the next column (or cell in a column).")]),e._v(" "),i("li",[i("strong",[e._v("highlightPrev:")]),e._v(" Incoming events highlight the previous column (or cell in a column).")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("eventOut1-eventOut10:")]),e._v(" These events can be triggered by selecting a cell which contains an @OSKA,event .. action string, (for example @OSKA,event 3).")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("port [integer]:")]),e._v(" This property defines the TCP port that the component listens on for connections of the OSKA.")]),e._v(" "),i("li",[i("strong",[e._v("title [string]:")]),e._v(" This property defines the caption to be displayed in OSKA?s title bar.")]),e._v(" "),i("li",[i("strong",[e._v("oskaPath [string]:")]),e._v(" The absolute path to the OSKA player as well as the program name is needed in order for the component to start OSKA by itself.")]),e._v(" "),i("li",[i("strong",[e._v("keyboardPath [string]:")]),e._v(" If this property does not hold an empty string, the component will ask OSKA to load the keyboard referred to by this property. When the ACS is synchronized with the ARE (connected and model deployed) available keyboards can be selected from a drop-down listbox. (dynamic property)")]),e._v(" "),i("li",[i("strong",[e._v("highlightStyle [integer]:")]),e._v(" This property selects the style of highlighting used in OSKA, the value range is from 0 to 2.")]),e._v(" "),i("li",[i("strong",[e._v("settingsFile [string]:")]),e._v(" if this property is not empty OSKA will be started with this settings file as a command line parameter. When the ACS is synchronized with the ARE (connected and model deployed) available settings files can be selected from a drop-down listbox "),i("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])]),e._v(" "),i("li",[i("strong",[e._v("windowDecorated [boolean]:")]),e._v(" if true, Oska will display a decorated window frame, otherwise only a lightweight frame.")]),e._v(" "),i("li",[i("strong",[e._v("eventScanningEnabled [boolean]:")]),e._v(" if true, incoming events can move the highlighter.")]),e._v(" "),i("li",[i("strong",[e._v("valueScanningEnabled [boolean]:")]),e._v(" if true, incoming values can move the highlighter.")]),e._v(" "),i("li",[i("strong",[e._v("inputRange [boolean] (combobox):")]),e._v(" the range of the incoming input port values: either float values between 0 and 1, or integer values or integer values from 0 to the maximum element (number of cells in a respective row or column of the grid).")]),e._v(" "),i("li",[i("strong",[e._v("resizeEnabled [boolean]:")]),e._v(" if true, the Oska will be resized to the dimensions specified in the GUI designer (slower).")])])])}),[],!1,null,null,null);t.default=o.exports},3315:function(e,t,n){e.exports=n.p+"assets/img/OskaExternalScanning1D.cfe422d9.jpg"}}]);