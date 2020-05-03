(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{1789:function(e,t,r){"use strict";r.r(t);var s=r(1),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"remote-keyboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-keyboard"}},[e._v("#")]),e._v(" Remote Keyboard")]),e._v(" "),s("p",[e._v("Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),s("p",[e._v("The RemoteKeyboard component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard USB keyboard device on the target computer (no special driver software is needed). The component supports key press/release actions and sending key sequences and special keycodes. Note that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions for up to three different input devices on the target computer.")]),e._v(" "),s("p",[s("img",{attrs:{src:r(3184),alt:"Screenshot: RemoteKeyboard plugin",title:"Screenshot: RemoteKeyboard plugin"}})]),e._v(" "),s("p",[e._v("RemoteKeyboard plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),s("p",[s("img",{attrs:{src:r(1992),alt:"HID Actuator CIM",title:"HID Actuator CIM"}})]),e._v(" "),s("p",[e._v("The HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially sent to the target computer via the HID actuator as the string is received and as the elp_sendkey(s) events of the component are being triggered.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port sends the whole keycodes string to the target computer. The key will be released immediately after it has been pressed.")]),e._v(" "),s("li",[s("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port sends the next keycode of the keycode string to the target computer. After the last character, the send position will be reset to the first character.")]),e._v(" "),s("li",[s("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the current key of the keycode string on the target computer (the key is pressed but not released). The holdKey function can be used together with the releaseKey function to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),s("li",[s("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the current key of the keycode string on the target computer.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keycode-string can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are sent with the next a printable character. For example, the keystrings “{SHIFT}a” or “{CTRL}{ALT}{DEL}” are sent as single key-values to the target computer.")]),e._v(" "),s("li",[s("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),s("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])]),e._v(" "),s("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[e._v("#")]),e._v(" List of supported special key code identifiers:")]),e._v(" "),s("ul",[s("li",{attrs:{LEFTCTRL:""}}),e._v(" "),s("li",{attrs:{LEFTSHIFT:""}}),e._v(" "),s("li",{attrs:{LEFTALT:""}},[e._v("{ALT},")]),e._v(" "),s("li",{attrs:{LEFTGUI:""}},[e._v("{WIN},")]),e._v(" "),s("li",{attrs:{RIGHTCTRL:""}},[e._v("{CTRL},")]),e._v(" "),s("li",{attrs:{RIGHTSHIFT:""}},[e._v("{SHIFT},")]),e._v(" "),s("li",{attrs:{RIGHTALT:""}},[e._v("{ALTGR},")]),e._v(" "),s("li",{attrs:{RIGHTGUI:""}}),e._v(" "),s("li",{attrs:{F1:""}}),e._v(" "),s("li",{attrs:{F2:""}}),e._v(" "),s("li",{attrs:{F3:""}}),e._v(" "),s("li",{attrs:{F4:""}}),e._v(" "),s("li",{attrs:{F5:""}}),e._v(" "),s("li",{attrs:{F6:""}}),e._v(" "),s("li",{attrs:{F7:""}}),e._v(" "),s("li",{attrs:{F8:""}}),e._v(" "),s("li",{attrs:{F9:""}}),e._v(" "),s("li",{attrs:{F10:""}}),e._v(" "),s("li",{attrs:{F11:""}}),e._v(" "),s("li",{attrs:{F12:""}}),e._v(" "),s("li",{attrs:{ENTER:""}},[e._v("{RETURN},")]),e._v(" "),s("li",{attrs:{ESCAPE:""}}),e._v(" "),s("li",{attrs:{BACKSPACE:""}}),e._v(" "),s("li",{attrs:{TAB:""}}),e._v(" "),s("li",{attrs:{PRINTSCREEN:""}},[e._v("{PRINT},")]),e._v(" "),s("li",{attrs:{PAUSE:""}}),e._v(" "),s("li",{attrs:{INS:""}},[e._v("{INSERT},")]),e._v(" "),s("li",{attrs:{POS1:""}},[e._v("{HOME},")]),e._v(" "),s("li",{attrs:{END:""}}),e._v(" "),s("li",{attrs:{DELETE:""}},[e._v("{DEL},")]),e._v(" "),s("li",{attrs:{PAGEUP:""}}),e._v(" "),s("li",{attrs:{PAGEDOWN:""}}),e._v(" "),s("li",{attrs:{RIGHTARROW:""}},[e._v("{RIGHT},")]),e._v(" "),s("li",{attrs:{LEFTARROW:""}},[e._v("{LEFT},")]),e._v(" "),s("li",{attrs:{DOWNARROW:""}},[e._v("{DOWN},")]),e._v(" "),s("li",{attrs:{UPARROW:""}},[e._v("{UP},")]),e._v(" "),s("li",{attrs:{WAIT:""}})])])}),[],!1,null,null,null);t.default=a.exports},1992:function(e,t,r){e.exports=r.p+"assets/img/HID_CIM.7d2b7157.jpg"},3184:function(e,t,r){e.exports=r.p+"assets/img/RemoteKeyboard.a97bc5eb.jpg"}}]);