(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{1033:function(e,t,n){e.exports=n.p+"assets/img/keyboard.7420e4ca.jpg"},529:function(e,t,n){"use strict";n.r(t);var s=n(3),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"keyboard"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keyboard"}},[e._v("#")]),e._v(" Keyboard")]),e._v(" "),s("h2",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),s("p",[e._v("The Keyboard component generates local keyboard input on the computer that the ARE is running on (per software emulation). The component supports key press/hold/release actions and sending key sequences and special keycodes. special or non-printable characters can be sent using curly braces and key identifier strings, e.g. {UP} {ENTER} {ALT} {DELETE} etc. - see description of the property keyCodeString. Multiple instances of the Keyboard component can be used to provide different key actions.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(1033),alt:"Screenshot: Keyboard plugin",title:"Screenshot: Keyboard plugin"}})]),e._v(" "),s("p",[e._v("Keyboard plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("No special hardware or software required.")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodes [string]:")]),e._v(" An incoming string which consists of alphanumeric characters and special key codes. The keys are sequentially generated as local keystrokes as the string is received, and as the sendKeys and other input related events of the component are being triggered.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("sendKeys:")]),e._v(" An incoming event at this port generates all keycodes of the keycode string (sequentially).")]),e._v(" "),s("li",[s("strong",[e._v("pressKey:")]),e._v(" An incoming event at this port pressed (and releases) the key (first key + modifiers if there are multiple keys).")]),e._v(" "),s("li",[s("strong",[e._v("holdKey:")]),e._v(" An incoming event at this port holds the key (first key + modifiers if there are multiple keys). The key is pressed but not released. The holdKey listener can be used together with the releaseKey feature to create long key presses of single keys (e.g. of the cursor keys) to allow game control etc.")]),e._v(" "),s("li",[s("strong",[e._v("releaseKey:")]),e._v(" An incoming event at this port releases the key which was pressed using the hold event.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("keyCodeString [string]:")]),e._v(" A string containing keys and keycodes. Please note that this string will be replaced by an incoming string at the keycodes input port. The keyCodeString can contain alphanumeric characters and special characters. Special characters are written in parentheses, for example {SHIFT}, {CTRL}, {ALT}, {BACKSPACE}, {ENTER} etc. Modifier keys like {SHIFT} or {ALT} are combined as they appear consecutively in the keystring, and are generated with the next printable character. For example, the keystrings “{SHIFT}” or “{CTRL}{ALT}{DEL}” are sent as single key values. For a description of the currently supported special key codes see the table below.")]),e._v(" "),s("li",[s("strong",[e._v("inputMethod [integer]:")]),e._v(" Declares whether to use sending window messages (Windows), system-wide SendInput API function (Windows) or JNativehook (cross-platform) as key injection method. (Please note that there are still problems with locales and special key translation…)")]),e._v(" "),s("li",[s("strong",[e._v("waitTime [integer]:")]),e._v(" Defines a number of milliseconds for a pause which shall occur when {WAIT} appears in the keycode string.")])]),e._v(" "),s("h2",{attrs:{id:"list-of-supported-special-key-code-identifiers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list-of-supported-special-key-code-identifiers"}},[e._v("#")]),e._v(" List of supported special key code identifiers")]),e._v(" "),s("p",[e._v("The key codes must be surrounded with braces.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("{SHIFT}\n{CTRL}\n{ALT}, {LEFTALT}, {MENU}\n{ALTGR}, {RIGHTALT}\n{WINDOWS}\n{LWIN}\n{RWIN}\n{UP}, {UPARROW}\n{DOWN}, {DOWNARROW}\n{LEFT}, {LEFTARROW}\n{RIGHT}, {RIGHTARROW}\n{RETURN}\n{ENTER}\n{ESCAPE}\n{BACKSPACE}\n{TAB}\n{PRINT}, {PRINTSCREEN}\n{PAUSE}\n{INSERT}, {INS}\n{HOME}, {POS1}\n{END}\n{DEL}\n{DELETE}\n{PAGEUP}\n{PAGEDOWN}\n{F1}\n{F2}\n{F3}\n{F4}\n{F5}\n{F6}\n{F7}\n{F8}\n{F9}\n{F10}\n{F11}\n{F12}\n{WAIT}\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);