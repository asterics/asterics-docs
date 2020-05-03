(window.webpackJsonp=window.webpackJsonp||[]).push([[1045],{1697:function(e,t,s){"use strict";s.r(t);var r=s(2),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"keyboard"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keyboard"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),r("h2",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),r("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation). The component supports key press/hold/release actions and sending key sequences and special keycodes. special or non-printable characters can be sent using curly braces and key identifier strings, e.g. {UP} {ENTER} {ALT} {DELETE} etc. - see description of the property keyCodeString. Multiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(3161),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}})]),e._v(" "),r("p",[e._v("Keyboard plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("No special hardware or software required.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),r("li",[r("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port pressed (and releases) the key (first key + modifiers if there are multiple keys).")]),e._v(" "),r("li",[r("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the key (first key + modifiers if there are multiple keys). The key is pressed but not released. The holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),r("li",[r("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the key which was pressed using the hold event.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keyCodeString can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character. For example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values. For a description of the currently supported special key codes see the table below.")]),e._v(" "),r("li",[r("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages (Windows), system-wide SendInput API function (Windows) or JNativehook (cross-platform) as key injection method. (Please note that there are still problems with locales and special key translation…)")]),e._v(" "),r("li",[r("strong",[e._v("waitTime [integer]:")]),e._v(" Defines a number of milliseconds for a pause which shall occur when {WAIT} appears in the keycode string.")])]),e._v(" "),r("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[e._v("#")]),e._v(" List of supported special key code identifiers")]),e._v(" "),r("ul",[r("li",{attrs:{SHIFT:""}}),e._v(" "),r("li",{attrs:{CTRL:""}}),e._v(" "),r("li",{attrs:{MENU:""}},[e._v("{ALT}, {LEFTALT},")]),e._v(" "),r("li",{attrs:{RIGHTALT:""}},[e._v("{ALTGR},")]),e._v(" "),r("li",{attrs:{WINDOWS:""}}),e._v(" "),r("li",{attrs:{LWIN:""}}),e._v(" "),r("li",{attrs:{RWIN:""}}),e._v(" "),r("li",{attrs:{UPARROW:""}},[e._v("{UP},")]),e._v(" "),r("li",{attrs:{DOWNARROW:""}},[e._v("{DOWN},")]),e._v(" "),r("li",{attrs:{LEFTARROW:""}},[e._v("{LEFT},")]),e._v(" "),r("li",{attrs:{RIGHTARROW:""}},[e._v("{RIGHT},")]),e._v(" "),r("li",{attrs:{RETURN:""}}),e._v(" "),r("li",{attrs:{ENTER:""}}),e._v(" "),r("li",{attrs:{ESCAPE:""}}),e._v(" "),r("li",{attrs:{BACKSPACE:""}}),e._v(" "),r("li",{attrs:{TAB:""}}),e._v(" "),r("li",{attrs:{PRINTSCREEN:""}},[e._v("{PRINT},")]),e._v(" "),r("li",{attrs:{PAUSE:""}}),e._v(" "),r("li",{attrs:{INS:""}},[e._v("{INSERT},")]),e._v(" "),r("li",{attrs:{POS1:""}},[e._v("{HOME},")]),e._v(" "),r("li",{attrs:{END:""}}),e._v(" "),r("li",{attrs:{DEL:""}}),e._v(" "),r("li",{attrs:{DELETE:""}}),e._v(" "),r("li",{attrs:{PAGEUP:""}}),e._v(" "),r("li",{attrs:{PAGEDOWN:""}}),e._v(" "),r("li",{attrs:{F1:""}}),e._v(" "),r("li",{attrs:{F2:""}}),e._v(" "),r("li",{attrs:{F3:""}}),e._v(" "),r("li",{attrs:{F4:""}}),e._v(" "),r("li",{attrs:{F5:""}}),e._v(" "),r("li",{attrs:{F6:""}}),e._v(" "),r("li",{attrs:{F7:""}}),e._v(" "),r("li",{attrs:{F8:""}}),e._v(" "),r("li",{attrs:{F9:""}}),e._v(" "),r("li",{attrs:{F10:""}}),e._v(" "),r("li",{attrs:{F11:""}}),e._v(" "),r("li",{attrs:{F12:""}}),e._v(" "),r("li",{attrs:{WAIT:""}})])])}),[],!1,null,null,null);t.default=i.exports},3161:function(e,t,s){e.exports=s.p+"assets/img/Keyboard.7420e4ca.jpg"}}]);