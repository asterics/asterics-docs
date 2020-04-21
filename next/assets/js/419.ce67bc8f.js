(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{1966:function(e,t,n){e.exports=n.p+"assets/img/Keyboard.e9630b11.jpg"},376:function(e,t,n){"use strict";n.r(t);var r=n(22),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"keyboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),r("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation).\nThe component supports key press/release actions and sending key sequences and special keycodes.\nMultiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(1966),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}}),r("br"),e._v("\nKeyboard plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("No special hardware or software required.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes.")]),e._v(" "),r("li",[e._v("The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),r("li",[r("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port generates a press (hold and release) event on the next keycode of the keycode string.\nAfter the last character, the send position will be reset to the first character.")]),e._v(" "),r("li",[r("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port generates a hold event on the next key of the keycode string (the key is pressed but not released).\nThe holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),r("li",[r("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the current key of the keycode string.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes.\nPlease note that this string will be replaced by an incoming string at the keycodes input port.\nThe keyCodeString can contain alphanumeric characters and special characters.\nSpecial characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character.\nFor example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values to the target computer.\nFor a description of the currently supported special key codes please refer to Appendix B of the user manual.")]),e._v(" "),r("li",[r("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages or system-wide SendInput API function as the way how keyboard input is injected.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);