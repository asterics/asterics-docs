(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{2306:function(e,t,r){e.exports=r.p+"assets/img/TextfieldReader.3a481d00.jpg"},798:function(e,t,r){"use strict";r.r(t);var s=r(22),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"textfield-reader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#textfield-reader"}},[e._v("#")]),e._v(" Textfield Reader")]),e._v(" "),s("h3",{attrs:{id:"component-type-sensor-subcategory-graphical-user-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-graphical-user-interface"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Graphical User Interface)")]),e._v(" "),s("p",[e._v("Similar to the Keyboard Hook component, this component provides access to keystrokes coming from a standard keyboard or injected via software. The difference to the Keyboard Hook is that the Text Field Reader opens a GUI element with a text input filed and processes key input only from this text field. The keycodes of the pressed keys and accumulated words (multiple keys separated by ) are provided at the output ports of this component. Possible applications include triggering functions by keyboard input or remapping keys to other keycodes.")]),e._v(" "),s("p",[s("img",{attrs:{src:r(2306),alt:"Screenshot: TextfieldReader plugin",title:"Screenshot: TextfieldReader plugin"}}),s("br"),e._v("\nTextfieldReader plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("A keyboard which generates keystrokes or a software component which injects keystrokes into the operating system?s message queue.")]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keys [integer]:")]),e._v(" This port sends the virtual keycode of the last pressed key as an integer value.")]),e._v(" "),s("li",[s("strong",[e._v("words [string]:")]),e._v(" This ports accumulates keystrokes and sends them as a string as soon as a blank separator (space key) appears in the key input stream.")])]),e._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("recognizedCommand1 - recognizedCommand7:")]),e._v(" These event ports fire an event if one of seven command strings has been detected in the current input stream of keys.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("command1 [string] - command7 [string]:")]),e._v(" Seven string properties to specify command strings. The component looks for these command strings in the input stream of keystrokes. If a command string matches, the corresponding event trigger port is raised. This can be useful for example to define voice commands which should trigger certain actions in other ARE plugins.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);