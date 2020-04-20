(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1843:function(e,t,r){e.exports=r.p+"assets/img/HID_CIM.7d2b7157.jpg"},1983:function(e,t,r){e.exports=r.p+"assets/img/RemoteKeyboard.a97bc5eb.jpg"},402:function(e,t,r){"use strict";r.r(t);var n=r(21),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"remote-keyboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-keyboard"}},[e._v("#")]),e._v(" Remote Keyboard")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),n("p",[e._v("The RemoteKeyboard component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer).\nThe HID actuator emulates a standard USB keyboard device on the target computer (no special driver software is needed).\nThe component supports key press/release actions and sending key sequences and special keycodes.\nNote that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions for up to three different input devices on the target computer.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1983),alt:"Screenshot: RemoteKeyboard plugin",title:"Screenshot: RemoteKeyboard plugin"}}),n("br"),e._v("\nRemoteKeyboard plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(1843),alt:"HID Actuator CIM",title:"HID Actuator CIM"}}),n("br"),e._v("\nthe HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes.")]),e._v(" "),n("li",[e._v("The keys are sequentially sent to the target computer via the HID actuator as the string is received and as the elp_sendkey(s) events of the component are being triggered.")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port sends the whole keycodes string to the target computer.")]),e._v(" "),n("li",[e._v("The key will be released immediately after it has been pressed.")]),e._v(" "),n("li",[n("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port sends the next keycode of the keycode string to the target computer.")]),e._v(" "),n("li",[e._v("After the last character, the send position will be reset to the first character.")]),e._v(" "),n("li",[n("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the current key of the keycode string on the target computer (the key is pressed but not released).")]),e._v(" "),n("li",[e._v("The holdKey function can be used together with the releaseKey function to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),n("li",[n("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the current key of the keycode string on the target computer.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes.\nPlease note that this string will be replaced by an incoming string at the keycodes input port.\nThe keycode-string can contain alphanumeric characters and special characters.\nSpecial characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are sent with the next a printable character.\nFor example, the keystrings “{SHIFT}a” or “{CTRL}{ALT}{DEL}” are sent as single key-values to the target computer.")]),e._v(" "),n("li",[n("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used.\nThe module flashes a LED for identification when the ID is selected.\n"),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);