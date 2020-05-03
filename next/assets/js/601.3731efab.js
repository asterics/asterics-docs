(window.webpackJsonp=window.webpackJsonp||[]).push([[601],{2395:function(e,t,n){e.exports=n.p+"assets/img/OskaExternalScanning2D.ffabad8e.jpg"},812:function(e,t,n){"use strict";n.r(t);var i=n(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"oska-external-scanning2d"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#oska-external-scanning2d"}},[e._v("#")]),e._v(" Oska External Scanning2D")]),e._v(" "),i("h3",{attrs:{id:"component-type-processor-subcategory-oska"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-oska"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: OSKA)")]),e._v(" "),i("p",[e._v("This component interacts with the On Screen Keyboard Application (OSKA) and forwards key selections and command (action-) strings to other ARE plugins. The scanning function of OSKA can be controlled via this plugin, allowing 1-dimensional input values to be used for direct scanning position selection. Scanning is operated using two float inputs which take inputs in a range defined by the according property (between 0.0 and 1.0. or integer values). The two inputs control the position of the highlighted cell in a grid with values being mapped to a corresponding position in the grid. An event input allows pressing selected cells in the grid.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(2395),alt:"Screenshot: OskaExternalScanning2D plugin",title:"Screenshot: OskaExternalScanning2D plugin"}}),i("br"),e._v("\nOskaExternalScanning2D plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v('This component requires Sensory Software’s OSKA keyboard. OSKA is automatically started by the plugin if it is located in the expected path ("…/OSKA/Start Keyboard.exe").')]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("posColumn [double]:")]),e._v(" This port takes values for the selection of the X-position (column selection). Depending on the value of the property “inputRange”, the incoming values are expected to be in a range from 0 to 1 (where 0 represents the first column and 1 the last) or they identifiy the absolute column position as integer values. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("posRow [double]:")]),e._v(" This port takes values for the selection of the Y-position (row selection). Depending on the value of the property “inputRange”, the incoming values are expected to be in a range from 0 to 1 (where 0 represents the first row and 1 the last) or they identifiy the absolute row position as integer values. "),i("strong",[e._v("This input port supports synchronization")])])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("action [string]:")]),e._v(" This output sends the action strings (which have been added to a key in the OSKA editor) when this key is pressed.")]),e._v(" "),i("li",[i("strong",[e._v("keycodes [string]:")]),e._v(" If a key is selected which contains the “@KDB: …” action string, the key codes are extracted from the action string and sent via this port, e.g. to the remoteKeyboard plugin’s corresponding input port for keyboard input emulation.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("press:")]),e._v(" Incoming events will trigger a press action on the selected key in OSKA.")]),e._v(" "),i("li",[i("strong",[e._v("highlightNextX:")]),e._v(" Incoming events will highlight the next cell in the selected row.")]),e._v(" "),i("li",[i("strong",[e._v("highlightPrevX:")]),e._v(" Incoming events will highlight the previous cell in the selected row.")]),e._v(" "),i("li",[i("strong",[e._v("highlightNextY:")]),e._v(" Incoming events will highlight the next cell in the selected column.")]),e._v(" "),i("li",[i("strong",[e._v("highlightPrevY:")]),e._v(" Incoming events will highlight the previous cell in the selected column.")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("eventOut1-eventOut10:")]),e._v(" These events can be triggered by selecting a cell which contains an @OSKA,event … action string, (for example @OSKA,event 3).")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("port [integer]:")]),e._v(" This property defines the TCP port that the component listens on for connections of the OSKA.")]),e._v(" "),i("li",[i("strong",[e._v("title [string]:")]),e._v(" This property defines the caption to be displayed in OSKA?s title bar.")]),e._v(" "),i("li",[i("strong",[e._v("oskaPath [string]:")]),e._v(" The absolute path to the OSKA player as well as the program name is needed in order for the component to start OSKA by itself.")]),e._v(" "),i("li",[i("strong",[e._v("keyboardPath [string]:")]),e._v(" If this property does not hold an empty string, the component will ask OSKA to load the keyboard referred to by this property. When the ACS is synchronized with the ARE (connected and model deployed) available keyboards can be selected from a drop-down listbox. (dynamic property)")]),e._v(" "),i("li",[i("strong",[e._v("highlightStyle [integer]:")]),e._v(" This property selects the style of highlighting used in OSKA, the value range is from 0 to 2.")]),e._v(" "),i("li",[i("strong",[e._v("highlightResetPosition [integer]:")]),e._v(" This property selects the behaviour of the highlighter after a key has been pressed (do nothing / got to top left / got to center / got to bottom right).")]),e._v(" "),i("li",[i("strong",[e._v("settingsFile [string]:")]),e._v(" if this property is not empty OSKA will be started with this settings file as a command line parameter. When the ACS is synchronized with the ARE (connected and model deployed) available settings files can be selected from a drop-down listbox. (dynamic property)")]),e._v(" "),i("li",[i("strong",[e._v("windowDecorated [boolean]:")]),e._v(" if true Oska will display a decorated window frame, otherwise only a lightweight frame.")]),e._v(" "),i("li",[i("strong",[e._v("eventScanningEnabled [boolean]:")]),e._v(" if true, incoming events can move the highlighter.")]),e._v(" "),i("li",[i("strong",[e._v("valueScanningEnabled [boolean]:")]),e._v(" if true, incoming values can move the highlighter.")]),e._v(" "),i("li",[i("strong",[e._v("inputRange [boolean] (combobox):")]),e._v(" the range of the incoming input port values: either float values between 0 and 1, or integer values or integer values from 0 to the maximum element (number of cells in a respective row or column of the grid).")]),e._v(" "),i("li",[i("strong",[e._v("resizeEnabled [boolean]:")]),e._v(" if true, the Oska will be resized to the dimensions specified in the GUI designer (slower).")])])])}),[],!1,null,null,null);t.default=o.exports}}]);