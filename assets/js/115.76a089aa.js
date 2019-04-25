(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{562:function(e,t,i){e.exports=i.p+"assets/img/keyboard.7420e4ca.jpg"},982:function(e,t,i){"use strict";i.r(t);var r=i(15),s=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"keyboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard","aria-hidden":"true"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),r("h2",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation","aria-hidden":"true"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),r("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation). The component supports key press/hold/release actions and sending key sequences and special keycodes. special or non-printable characters can be sent using curly braces and key identifier strings, e.g. {UP} {ENTER} {ALT} {DELETE} etc. - see description of the property keyCodeString. Multiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(562),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}})]),e._v(" "),r("p",[e._v("Keyboard plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("No special hardware or software required.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),r("li",[r("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port pressed (and releases) the key (first key + modifiers if there are multiple keys).")]),e._v(" "),r("li",[r("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the key (first key + modifiers if there are multiple keys). The key is pressed but not released. The holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),r("li",[r("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the key which was pressed using the hold event.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keyCodeString can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character. For example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values. For a description of the currently supported special key codes see the table below.")]),e._v(" "),r("li",[r("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages (Windows), system-wide SendInput API function (Windows) or JNativehook (cross-platform) as key injection method. (Please note that there are still problems with locales and special key translation…)")]),e._v(" "),r("li",[r("strong",[e._v("waitTime [integer]:")]),e._v(" Defines a number of milliseconds for a pause which shall occur when {WAIT} appears in the keycode string.")])]),e._v(" "),r("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers","aria-hidden":"true"}},[e._v("#")]),e._v(" List of supported special key code identifiers")]),e._v(" "),r("ul",[r("li",[e._v("{SHIFT}")]),e._v(" "),r("li",[e._v("{CTRL}")]),e._v(" "),r("li",[e._v("{ALT}, {LEFTALT}, {MENU}")]),e._v(" "),r("li",[e._v("{ALTGR}, {RIGHTALT}")]),e._v(" "),r("li",[e._v("{WINDOWS}")]),e._v(" "),r("li",[e._v("{LWIN}")]),e._v(" "),r("li",[e._v("{RWIN}")]),e._v(" "),r("li",[e._v("{UP}, {UPARROW}")]),e._v(" "),r("li",[e._v("{DOWN}, {DOWNARROW}")]),e._v(" "),r("li",[e._v("{LEFT}, {LEFTARROW}")]),e._v(" "),r("li",[e._v("{RIGHT}, {RIGHTARROW}")]),e._v(" "),r("li",[e._v("{RETURN}")]),e._v(" "),r("li",[e._v("{ENTER}")]),e._v(" "),r("li",[e._v("{ESCAPE}")]),e._v(" "),r("li",[e._v("{BACKSPACE}")]),e._v(" "),r("li",[e._v("{TAB}")]),e._v(" "),r("li",[e._v("{PRINT}, {PRINTSCREEN}")]),e._v(" "),r("li",[e._v("{PAUSE}")]),e._v(" "),r("li",[e._v("{INSERT}, {INS}")]),e._v(" "),r("li",[e._v("{HOME}, {POS1}")]),e._v(" "),r("li",[e._v("{END}")]),e._v(" "),r("li",[e._v("{DEL}")]),e._v(" "),r("li",[e._v("{DELETE}")]),e._v(" "),r("li",[e._v("{PAGEUP}")]),e._v(" "),r("li",[e._v("{PAGEDOWN}")]),e._v(" "),r("li",[e._v("{F1}")]),e._v(" "),r("li",[e._v("{F2}")]),e._v(" "),r("li",[e._v("{F3}")]),e._v(" "),r("li",[e._v("{F4}")]),e._v(" "),r("li",[e._v("{F5}")]),e._v(" "),r("li",[e._v("{F6}")]),e._v(" "),r("li",[e._v("{F7}")]),e._v(" "),r("li",[e._v("{F8}")]),e._v(" "),r("li",[e._v("{F9}")]),e._v(" "),r("li",[e._v("{F10}")]),e._v(" "),r("li",[e._v("{F11}")]),e._v(" "),r("li",[e._v("{F12}")]),e._v(" "),r("li",[e._v("{WAIT}")])]),e._v(" "),r("EditLink")],1)},[],!1,null,null,null);t.default=s.exports}}]);