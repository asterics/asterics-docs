(window.webpackJsonp=window.webpackJsonp||[]).push([[494],{2215:function(e,t,n){e.exports=n.p+"assets/img/OskaInternalScanning.bfba2e29.jpg"},590:function(e,t,n){"use strict";n.r(t);var s=n(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"oska-internal-scanning"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oska-internal-scanning"}},[e._v("#")]),e._v(" Oska Internal Scanning")]),e._v(" "),s("h3",{attrs:{id:"component-type-processor-subcategory-oska"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-oska"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: OSKA)")]),e._v(" "),s("p",[e._v("This component interacts with the On Screen Keyboard Application (OSKA) and forwards key selections and command (action-) strings to other ARE plugins. OSKA is set to use its internal scanning methods and the component exposes the two button input events that Oska can work with.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(2215),alt:"Screenshot: OskaInternalScanning plugin",title:"Screenshot: OskaInternalScanning plugin"}}),s("br"),e._v("\nOskaInternalScanning plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v('This component requires Sensory Software’s OSKA keyboard. OSKA is automatically started by the plugin if it is located in the expected path ("…/OSKA/Start Keyboard.exe").')]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("action [string]:")]),e._v(" This output sends the action string which is attached to a specific key on the keyboard to connected components.")]),e._v(" "),s("li",[s("strong",[e._v("keycodes [string]:")]),e._v(" This output sends the key codes which are attached to a key via the @KDB command.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("increaseScanspeed:")]),e._v(" Incoming events will increase the internal scanning speed of OSKA.")]),e._v(" "),s("li",[s("strong",[e._v("decreaseScanspeed:")]),e._v(" Incoming events will decrease the internal scanning speed of OSKA.")]),e._v(" "),s("li",[s("strong",[e._v("pressSwitch1:")]),e._v(" Incoming events start the automatic scanning or switch to the next selection (to speed up the scanning).")]),e._v(" "),s("li",[s("strong",[e._v("pressSwitch2:")]),e._v(" Incoming events switch from column- to row scanning (or in the next step select the cell). If the scanning is stopped, it will be started.")])]),e._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("eventOut1-eventOut10:")]),e._v(" These events can be triggered by selecting a cell which contains an @OSKA,event … action string, (for example @OSKA,event 3).")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("port [integer]:")]),e._v(" This property defines the TCP port that the component listens on for connections of the OSKA.")]),e._v(" "),s("li",[s("strong",[e._v("title [string]:")]),e._v(" This property defines the caption to be displayed in OSKA?s title bar.")]),e._v(" "),s("li",[s("strong",[e._v("oskaPath [string]:")]),e._v(" The absolute path to the OSKA player as well as the program name is needed in order for the component to start OSKA by itself.")]),e._v(" "),s("li",[s("strong",[e._v("keyboardPath [string]:")]),e._v(" If this property does not hold an empty string, the component will ask OSKA to load the keyboard referred to by this property. When the ACS is synchronized with the ARE (connected and model deployed) available keyboards can be selected from a drop-down listbox. (dynamic property)")]),e._v(" "),s("li",[s("strong",[e._v("scanSpeed [integer]:")]),e._v(" This property relates to the internal row column scanning method of OSKA and sets the speed of scanning, the value range is between 1 and 10.")]),e._v(" "),s("li",[s("strong",[e._v("highlightStyle [integer]:")]),e._v(" This property selects the style of highlighting used in OSKA, the value range is from 0 to 2.")]),e._v(" "),s("li",[s("strong",[e._v("settingsFile [string]:")]),e._v(" if this property is not empty OSKA will be started with this settings file as a command line parameter. When the ACS is synchronized with the ARE (connected and model deployed) available settings files can be selected from a drop-down listbox. (dynamic property)")]),e._v(" "),s("li",[s("strong",[e._v("windowDecorated [boolean]:")]),e._v(" if true, Oska will display a decorated window frame, otherwise only a lightweight frame.")]),e._v(" "),s("li",[s("strong",[e._v("resizeEnabled [boolean]:")]),e._v(" if true, the Oska will be resized to the dimensions specified in the GUI designer (slower).")])])])}),[],!1,null,null,null);t.default=i.exports}}]);