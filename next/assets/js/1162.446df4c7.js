(window.webpackJsonp=window.webpackJsonp||[]).push([[1162],{1604:function(e,t,i){"use strict";i.r(t);var s=i(22),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"keyboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyboard"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),s("h2",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),s("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation). The component supports key press/hold/release actions and sending key sequences and special keycodes. special or non-printable characters can be sent using curly braces and key identifier strings, e.g. {UP} {ENTER} {ALT} {DELETE} etc. - see description of the property keyCodeString. Multiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),s("p",[s("img",{attrs:{src:i(3222),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}})]),e._v(" "),s("p",[e._v("Keyboard plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("No special hardware or software required.")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),s("li",[s("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port pressed (and releases) the key (first key + modifiers if there are multiple keys).")]),e._v(" "),s("li",[s("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the key (first key + modifiers if there are multiple keys). The key is pressed but not released. The holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),s("li",[s("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the key which was pressed using the hold event.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keyCodeString can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character. For example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values. For a description of the currently supported special key codes see the table below.")]),e._v(" "),s("li",[s("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages (Windows), system-wide SendInput API function (Windows) or JNativehook (cross-platform) as key injection method. (Please note that there are still problems with locales and special key translation…)")]),e._v(" "),s("li",[s("strong",[e._v("waitTime [integer]:")]),e._v(" Defines a number of milliseconds for a pause which shall occur when {WAIT} appears in the keycode string.")])]),e._v(" "),s("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[e._v("#")]),e._v(" List of supported special key code identifiers")]),e._v(" "),s("ul",[s("li",[e._v("{SHIFT}")]),e._v(" "),s("li",[e._v("{CTRL}")]),e._v(" "),s("li",[e._v("{ALT}, {LEFTALT}, {MENU}")]),e._v(" "),s("li",[e._v("{ALTGR}, {RIGHTALT}")]),e._v(" "),s("li",[e._v("{WINDOWS}")]),e._v(" "),s("li",[e._v("{LWIN}")]),e._v(" "),s("li",[e._v("{RWIN}")]),e._v(" "),s("li",[e._v("{UP}, {UPARROW}")]),e._v(" "),s("li",[e._v("{DOWN}, {DOWNARROW}")]),e._v(" "),s("li",[e._v("{LEFT}, {LEFTARROW}")]),e._v(" "),s("li",[e._v("{RIGHT}, {RIGHTARROW}")]),e._v(" "),s("li",[e._v("{RETURN}")]),e._v(" "),s("li",[e._v("{ENTER}")]),e._v(" "),s("li",[e._v("{ESCAPE}")]),e._v(" "),s("li",[e._v("{BACKSPACE}")]),e._v(" "),s("li",[e._v("{TAB}")]),e._v(" "),s("li",[e._v("{PRINT}, {PRINTSCREEN}")]),e._v(" "),s("li",[e._v("{PAUSE}")]),e._v(" "),s("li",[e._v("{INSERT}, {INS}")]),e._v(" "),s("li",[e._v("{HOME}, {POS1}")]),e._v(" "),s("li",[e._v("{END}")]),e._v(" "),s("li",[e._v("{DEL}")]),e._v(" "),s("li",[e._v("{DELETE}")]),e._v(" "),s("li",[e._v("{PAGEUP}")]),e._v(" "),s("li",[e._v("{PAGEDOWN}")]),e._v(" "),s("li",[e._v("{F1}")]),e._v(" "),s("li",[e._v("{F2}")]),e._v(" "),s("li",[e._v("{F3}")]),e._v(" "),s("li",[e._v("{F4}")]),e._v(" "),s("li",[e._v("{F5}")]),e._v(" "),s("li",[e._v("{F6}")]),e._v(" "),s("li",[e._v("{F7}")]),e._v(" "),s("li",[e._v("{F8}")]),e._v(" "),s("li",[e._v("{F9}")]),e._v(" "),s("li",[e._v("{F10}")]),e._v(" "),s("li",[e._v("{F11}")]),e._v(" "),s("li",[e._v("{F12}")]),e._v(" "),s("li",[e._v("{WAIT}")])])])}),[],!1,null,null,null);t.default=r.exports},3222:function(e,t,i){e.exports=i.p+"assets/img/Keyboard.7420e4ca.jpg"}}]);