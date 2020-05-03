(window.webpackJsonp=window.webpackJsonp||[]).push([[881],{1329:function(e,t,s){"use strict";s.r(t);var r=s(2),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"keyboard-capture"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-capture"}},[e._v("#")]),e._v(" Keyboard Capture")]),e._v(" "),r("h3",{attrs:{id:"component-type-sensor-subcategory-standard-input-devices"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-standard-input-devices"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Standard Input Devices)")]),e._v(" "),r("p",[e._v("This component provides access to keystrokes input via a standard keyboard. The keystroke capture does not depend on a particular window or text field to have the input focus. The keycodes of the pressed keys and accumulated words (multiple keys separated by ) are provided at the output ports of this component. Possible applications include triggering functions by keyboard input, interfacing to speech recognition software or remapping keys to other keycodes.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(2862),alt:"Screenshot: KeyboardCapture plugin",title:"Screenshot: KeyboardCapture plugin"}}),r("br"),e._v("\nKeyboardCapture plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("A keyboard which generates keystrokes or a software component which injects keystrokes into the operating system message queue.")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCode [integer]:")]),e._v(" This port sends the virtual keycode of the last pressed key as an integer value.")]),e._v(" "),r("li",[r("strong",[e._v("words [string]:")]),e._v(" This ports accumulates keystrokes and sends them as a string as soon as a blank separator (space key) appears in the key input stream.")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("recognizedCommand1 - recognizedCommand10:")]),e._v(" These event ports fire an event if one of seven command strings has been detected in the current input stream of keys.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("blockEvents [boolean]:")]),e._v(" If this property is set to true, no key press activities will be routed to the operating system - they will not be processed by other applications and disappear. If the property value is set to false, keystrokes will be passed back to the operating system and processed as usual.")]),e._v(" "),r("li",[r("strong",[e._v("command1 [string] - command10 [string]:")]),e._v(" Seven string properties to specify command strings. The component looks for these command strings in the input stream of keystrokes. If a command string matches, the corresponding event trigger port is raised. This can be useful for example to define voice commands which should trigger certain actions in other ARE plugins.")])])])}),[],!1,null,null,null);t.default=o.exports},2862:function(e,t,s){e.exports=s.p+"assets/img/KeyboardCapture.483dae78.jpg"}}]);