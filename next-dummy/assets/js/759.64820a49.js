(window.webpackJsonp=window.webpackJsonp||[]).push([[759],{1096:function(e,t,r){"use strict";r.r(t);var n=r(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"keyboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#keyboard"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),n("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation). The component supports key press/release actions and sending key sequences and special keycodes. Multiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(2547),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}}),n("br"),e._v("\nKeyboard plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("No special hardware or software required.")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),n("li",[n("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port generates a press (hold and release) event on the next keycode of the keycode string. After the last character, the send position will be reset to the first character.")]),e._v(" "),n("li",[n("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port generates a hold event on the next key of the keycode string (the key is pressed but not released). The holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),n("li",[n("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the current key of the keycode string.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keyCodeString can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character. For example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values to the target computer. For a description of the currently supported special key codes please refer to Appendix B of the user manual.")]),e._v(" "),n("li",[n("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages or system-wide SendInput API function as the way how keyboard input is injected.")]),e._v(" "),n("li",[n("strong",[e._v("waitTime [integer]:")]),e._v(" Defines a number of milliseconds for a pause which shall occur when {WAIT} appears in the keycode string.")])])])}),[],!1,null,null,null);t.default=s.exports},2547:function(e,t,r){e.exports=r.p+"assets/img/Keyboard.e9630b11.jpg"}}]);