(window.webpackJsonp=window.webpackJsonp||[]).push([[393],{1994:function(t,e,r){t.exports=r.p+"assets/img/hid_cim.7d2b7157.jpg"},3735:function(t,e,r){t.exports=r.p+"assets/img/remotekeyboard.a97bc5eb.jpg"},825:function(t,e,r){"use strict";r.r(e);var s=r(1),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[t._v("Component Type: Actuator (Subcategory: Input Device Emulation)")]),t._v(" "),s("p",[t._v("The RemoteKeyboard component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard USB keyboard device on the target computer (no special driver software is needed). The component supports key press/release actions and sending key sequences and special keycodes. Note that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions for up to three different input devices on the target computer.")]),t._v(" "),s("p",[s("img",{attrs:{src:r(3735),alt:"Screenshot: RemoteKeyboard plugin",title:"Screenshot: RemoteKeyboard plugin"}})]),t._v(" "),s("p",[t._v("RemoteKeyboard plugin")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("p",[t._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),t._v(" "),s("p",[s("img",{attrs:{src:r(1994),alt:"HID Actuator CIM",title:"HID Actuator CIM"}})]),t._v(" "),s("p",[t._v("The HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),t._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("keyCodes [string]:")]),t._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially sent to the target computer via the HID actuator as the string is received and as the elp_sendkey(s) events of the component are being triggered.")])]),t._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("sendKeys:")]),t._v(" An incoming event at this port sends the whole keycodes string to the target computer. The key will be released immediately after it has been pressed.")]),t._v(" "),s("li",[s("strong",[t._v("pressKey:")]),t._v(" An incoming event at this port sends the next keycode of the keycode string to the target computer. After the last character, the send position will be reset to the first character.")]),t._v(" "),s("li",[s("strong",[t._v("holdKey:")]),t._v(" An incoming event at this port holds the current key of the keycode string on the target computer (the key is pressed but not released). The holdKey function can be used together with the releaseKey function to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),t._v(" "),s("li",[s("strong",[t._v("releaseKey:")]),t._v(" An incoming event at this port releases the current key of the keycode string on the target computer.")])]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("keyCodeString [string]:")]),t._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keycode-string can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are sent with the next a printable character. For example, the keystrings “{SHIFT}a” or “{CTRL}{ALT}{DEL}” are sent as single key-values to the target computer.")]),t._v(" "),s("li",[s("strong",[t._v("uniqueId:")]),t._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),s("strong",[t._v("Supports value suggestions from ARE (dynamic property)")])])]),t._v(" "),s("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[t._v("#")]),t._v(" List of supported special key code identifiers:")]),t._v(" "),s("ul",[s("li",{attrs:{LEFTCTRL:""}}),t._v(" "),s("li",{attrs:{LEFTSHIFT:""}}),t._v(" "),s("li",{attrs:{LEFTALT:""}},[t._v("{ALT},")]),t._v(" "),s("li",{attrs:{LEFTGUI:""}},[t._v("{WIN},")]),t._v(" "),s("li",{attrs:{RIGHTCTRL:""}},[t._v("{CTRL},")]),t._v(" "),s("li",{attrs:{RIGHTSHIFT:""}},[t._v("{SHIFT},")]),t._v(" "),s("li",{attrs:{RIGHTALT:""}},[t._v("{ALTGR},")]),t._v(" "),s("li",{attrs:{RIGHTGUI:""}}),t._v(" "),s("li",{attrs:{F1:""}}),t._v(" "),s("li",{attrs:{F2:""}}),t._v(" "),s("li",{attrs:{F3:""}}),t._v(" "),s("li",{attrs:{F4:""}}),t._v(" "),s("li",{attrs:{F5:""}}),t._v(" "),s("li",{attrs:{F6:""}}),t._v(" "),s("li",{attrs:{F7:""}}),t._v(" "),s("li",{attrs:{F8:""}}),t._v(" "),s("li",{attrs:{F9:""}}),t._v(" "),s("li",{attrs:{F10:""}}),t._v(" "),s("li",{attrs:{F11:""}}),t._v(" "),s("li",{attrs:{F12:""}}),t._v(" "),s("li",{attrs:{ENTER:""}},[t._v("{RETURN},")]),t._v(" "),s("li",{attrs:{ESCAPE:""}}),t._v(" "),s("li",{attrs:{BACKSPACE:""}}),t._v(" "),s("li",{attrs:{TAB:""}}),t._v(" "),s("li",{attrs:{PRINTSCREEN:""}},[t._v("{PRINT},")]),t._v(" "),s("li",{attrs:{PAUSE:""}}),t._v(" "),s("li",{attrs:{INS:""}},[t._v("{INSERT},")]),t._v(" "),s("li",{attrs:{POS1:""}},[t._v("{HOME},")]),t._v(" "),s("li",{attrs:{END:""}}),t._v(" "),s("li",{attrs:{DELETE:""}},[t._v("{DEL},")]),t._v(" "),s("li",{attrs:{PAGEUP:""}}),t._v(" "),s("li",{attrs:{PAGEDOWN:""}}),t._v(" "),s("li",{attrs:{RIGHTARROW:""}},[t._v("{RIGHT},")]),t._v(" "),s("li",{attrs:{LEFTARROW:""}},[t._v("{LEFT},")]),t._v(" "),s("li",{attrs:{DOWNARROW:""}},[t._v("{DOWN},")]),t._v(" "),s("li",{attrs:{UPARROW:""}},[t._v("{UP},")]),t._v(" "),s("li",{attrs:{WAIT:""}})])])}),[],!1,null,null,null);e.default=a.exports}}]);