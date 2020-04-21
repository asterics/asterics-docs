(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1848:function(e,t,r){e.exports=r.p+"assets/img/hid_cim.7d2b7157.jpg"},3601:function(e,t,r){e.exports=r.p+"assets/img/remotekeyboard.a97bc5eb.jpg"},704:function(e,t,r){"use strict";r.r(t);var i=r(22),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"frontmatter-title"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),i("p",[e._v("Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),i("p",[e._v("The RemoteKeyboard component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard USB keyboard device on the target computer (no special driver software is needed). The component supports key press/release actions and sending key sequences and special keycodes. Note that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions for up to three different input devices on the target computer.")]),e._v(" "),i("p",[i("img",{attrs:{src:r(3601),alt:"Screenshot: RemoteKeyboard plugin",title:"Screenshot: RemoteKeyboard plugin"}})]),e._v(" "),i("p",[e._v("RemoteKeyboard plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),i("p",[i("img",{attrs:{src:r(1848),alt:"HID Actuator CIM",title:"HID Actuator CIM"}})]),e._v(" "),i("p",[e._v("The HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially sent to the target computer via the HID actuator as the string is received and as the elp_sendkey(s) events of the component are being triggered.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port sends the whole keycodes string to the target computer. The key will be released immediately after it has been pressed.")]),e._v(" "),i("li",[i("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port sends the next keycode of the keycode string to the target computer. After the last character, the send position will be reset to the first character.")]),e._v(" "),i("li",[i("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the current key of the keycode string on the target computer (the key is pressed but not released). The holdKey function can be used together with the releaseKey function to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),i("li",[i("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the current key of the keycode string on the target computer.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keycode-string can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are sent with the next a printable character. For example, the keystrings “{SHIFT}a” or “{CTRL}{ALT}{DEL}” are sent as single key-values to the target computer.")]),e._v(" "),i("li",[i("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),i("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])]),e._v(" "),i("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[e._v("#")]),e._v(" List of supported special key code identifiers:")]),e._v(" "),i("ul",[i("li",[e._v("{LEFTCTRL}")]),e._v(" "),i("li",[e._v("{LEFTSHIFT}")]),e._v(" "),i("li",[e._v("{ALT}, {LEFTALT}")]),e._v(" "),i("li",[e._v("{WIN}, {LEFTGUI}")]),e._v(" "),i("li",[e._v("{CTRL}, {RIGHTCTRL}")]),e._v(" "),i("li",[e._v("{SHIFT}, {RIGHTSHIFT}")]),e._v(" "),i("li",[e._v("{ALTGR}, {RIGHTALT}")]),e._v(" "),i("li",[e._v("{RIGHTGUI}")]),e._v(" "),i("li",[e._v("{F1}")]),e._v(" "),i("li",[e._v("{F2}")]),e._v(" "),i("li",[e._v("{F3}")]),e._v(" "),i("li",[e._v("{F4}")]),e._v(" "),i("li",[e._v("{F5}")]),e._v(" "),i("li",[e._v("{F6}")]),e._v(" "),i("li",[e._v("{F7}")]),e._v(" "),i("li",[e._v("{F8}")]),e._v(" "),i("li",[e._v("{F9}")]),e._v(" "),i("li",[e._v("{F10}")]),e._v(" "),i("li",[e._v("{F11}")]),e._v(" "),i("li",[e._v("{F12}")]),e._v(" "),i("li",[e._v("{RETURN}, {ENTER}")]),e._v(" "),i("li",[e._v("{ESCAPE}")]),e._v(" "),i("li",[e._v("{BACKSPACE}")]),e._v(" "),i("li",[e._v("{TAB}")]),e._v(" "),i("li",[e._v("{PRINT}, {PRINTSCREEN}")]),e._v(" "),i("li",[e._v("{PAUSE}")]),e._v(" "),i("li",[e._v("{INSERT}, {INS}")]),e._v(" "),i("li",[e._v("{HOME}, {POS1}")]),e._v(" "),i("li",[e._v("{END}")]),e._v(" "),i("li",[e._v("{DEL}, {DELETE}")]),e._v(" "),i("li",[e._v("{PAGEUP}")]),e._v(" "),i("li",[e._v("{PAGEDOWN}")]),e._v(" "),i("li",[e._v("{RIGHT}, {RIGHTARROW}")]),e._v(" "),i("li",[e._v("{LEFT}, {LEFTARROW}")]),e._v(" "),i("li",[e._v("{DOWN}, {DOWNARROW}")]),e._v(" "),i("li",[e._v("{UP}, {UPARROW}")]),e._v(" "),i("li",[e._v("{WAIT}")])])])}),[],!1,null,null,null);t.default=s.exports}}]);