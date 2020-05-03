(window.webpackJsonp=window.webpackJsonp||[]).push([[960],{1503:function(e,t,o){"use strict";o.r(t);var s=o(2),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"fabi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fabi"}},[e._v("#")]),e._v(" FABI")]),e._v(" "),s("h3",{attrs:{id:"component-type-processor-subcategory-microcontroller-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-microcontroller-interface"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Microcontroller Interface)")]),e._v(" "),s("p",[e._v("This component provides an interface for a FABI controller and enables the programming process. It is possible to configure the buttons which are connected to the FABI controller and store the set to the built in EEPROM.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(3004),alt:"Screenshot: FABI plugin",title:"Screenshot: FABI plugin"}}),s("br"),e._v("\nFABI plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("The Plugin requires a FABI2.0 compatible Version as well as the right COM Port. The Baudrate is predefined at 9600 Baud.")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("ButtonMode [integer]:")]),e._v(" Number of the button")]),e._v(" "),s("li",[s("strong",[e._v("SlotSaveName [string]:")]),e._v(" Name of the slot to save the set of modes")]),e._v(" "),s("li",[s("strong",[e._v("SlotLoadName [string]:")]),e._v(" Name of the slot to load the set of modes")]),e._v(" "),s("li",[s("strong",[e._v("MoveMouseX [integer]:")]),e._v(" Number of pixels to move the mouse in X direction (right)")]),e._v(" "),s("li",[s("strong",[e._v("MoveMouseY [integer]:")]),e._v(" Number of pixels to move the mouse in Y direction (down)")]),e._v(" "),s("li",[s("strong",[e._v("Text [string]:")]),e._v(" Text for the KeyWrite command")]),e._v(" "),s("li",[s("strong",[e._v("key [string]:")]),e._v(" Text for the KeyPress command"),s("br"),e._v("\n(e.g. AT KP KEY_UP presses the “Cursor-Up” key, AT KP KEY_CTRL KEY_ALT KEY_DELETE presses all three keys)"),s("br"),e._v("\nsupported key identifiers for key press command (AT KP):"),s("br"),e._v("\nKEY_A KEY_B KEY_C KEY_D KEY_E KEY_F KEY_G KEY_H KEY_I KEY_J KEY_K KEY_L KEY_M KEY_N KEY_O KEY_P KEY_Q KEY_R KEY_S KEY_T KEY_U KEY_V KEY_W KEY_X KEY_Y KEY_Z KEY_1 KEY_2 KEY_3 KEY_4 KEY_5 KEY_6 KEY_7 KEY_8 KEY_9 KEY_0 KEY_F1 KEY_F2 KEY_F3 KEY_F4 KEY_F5 KEY_F6 KEY_F7 KEY_F8 KEY_F9 KEY_F10 KEY_F11 KEY_F12 KEY_RIGHT KEY_LEFT KEY_DOWN KEY_UP KEY_ENTER KEY_ESC KEY_BACKSPACE KEY_TAB KEY_HOME KEY_PAGE_UP KEY_PAGE_DOWN KEY_DELETE KEY_INSERT KEY_END KEY_NUM_LOCK KEY_SCROLL_LOCK KEY_SPACE KEY_CAPS_LOCK KEY_PAUSE KEY_SHIFT KEY_CTRL KEY_ALT KEY_RIGHT_ALT KEY_GUI KEY_RIGHT_GUI")])]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("List [string]:")]),e._v(" Lists the slots stored in the EEPROM of the FABI controller")]),e._v(" "),s("li",[s("strong",[e._v("ID [string]:")]),e._v(" Shows the ID of the FABI version")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("ID :")]),e._v(" identification string will be returned (e.g. “FABI Version 2.0”)"),s("br"),e._v("\nCorresponding FABI command is : “AT ID”")]),e._v(" "),s("li",[s("strong",[e._v("ButtonMode :")]),e._v(" button mode setting for a button (e.g. AT BM 2 -> next command defines the new function for button 2)"),s("br"),e._v("\nCorresponding FABI command is : “AT BM num”")]),e._v(" "),s("li",[s("strong",[e._v("ClickLeft :")]),e._v(" click left mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT CL”")]),e._v(" "),s("li",[s("strong",[e._v("ClickRight :")]),e._v(" click right mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT CR”")]),e._v(" "),s("li",[s("strong",[e._v("ClickDoubleLeft :")]),e._v(" click double with left mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT CD”")]),e._v(" "),s("li",[s("strong",[e._v("ClickMiddle :")]),e._v(" click middle mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT CM”")]),e._v(" "),s("li",[s("strong",[e._v("PressLeft :")]),e._v(" press/hold the left mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT PL”")]),e._v(" "),s("li",[s("strong",[e._v("PressRight :")]),e._v(" press/hold the right mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT PR”")]),e._v(" "),s("li",[s("strong",[e._v("PressMiddle :")]),e._v(" press/hold the middle mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT PM”")]),e._v(" "),s("li",[s("strong",[e._v("ReleaseLeft :")]),e._v(" release the left mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT RL”")]),e._v(" "),s("li",[s("strong",[e._v("ReleaseRight :")]),e._v(" release the right mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT RR”")]),e._v(" "),s("li",[s("strong",[e._v("ReleaseMiddle :")]),e._v(" release the middle mouse button"),s("br"),e._v("\nCorresponding FABI command is : “AT RM”")]),e._v(" "),s("li",[s("strong",[e._v("WheelUp :")]),e._v(" move mouse wheel up"),s("br"),e._v("\nCorresponding FABI command is : “AT WU”")]),e._v(" "),s("li",[s("strong",[e._v("WheelDown :")]),e._v(" move mouse wheel down"),s("br"),e._v("\nCorresponding FABI command is : “AT WD”")]),e._v(" "),s("li",[s("strong",[e._v("MoveMouseX :")]),e._v(" move mouse in x direction (e.g. AT X 4 moves 4 pixels to the right)"),s("br"),e._v("\nCorresponding FABI command is : “AT MX num”")]),e._v(" "),s("li",[s("strong",[e._v("MoveMouseY :")]),e._v(" move mouse in y direction (e.g. AT Y -10 moves 10 pixels up)"),s("br"),e._v("\nCorresponding FABI command is : “AT MY num”")]),e._v(" "),s("li",[s("strong",[e._v("KeyWrite :")]),e._v(" keyboard write text (e.g. AT KW Hello! writes “Hello!”)"),s("br"),e._v("\nCorresponding FABI command is : “AT KW text”")]),e._v(" "),s("li",[s("strong",[e._v("KeyPress :")]),e._v(" key press: press/hold all keys identified in text (e.g. AT KP KEY_UP presses the “Cursor-Up” key, AT KP KEY_CTRL KEY_ALT KEY_DELETE presses all three keys) The possible KeyPress commands are described in detail at the input port “key”!"),s("br"),e._v("\nCorresponding FABI command is : “AT KP text”")]),e._v(" "),s("li",[s("strong",[e._v("KeyRelease :")]),e._v(" key release: releases all keys identified in text"),s("br"),e._v("\nCorresponding FABI command is : “AT KR text”")]),e._v(" "),s("li",[s("strong",[e._v("KeyReleaseAll :")]),e._v(" release all: releases all currently pressed keys and buttons"),s("br"),e._v("\nCorresponding FABI command is : “AT RA”")]),e._v(" "),s("li",[s("strong",[e._v("Save :")]),e._v(" save settings and current button modes to next free eeprom slot under given name (e.g. AT SAVE mouse1)"),s("br"),e._v("\nCorresponding FABI command is : “AT SAVE text”")]),e._v(" "),s("li",[s("strong",[e._v("Load :")]),e._v(" load button modes from eeprom slot (e.g. AT LOAD mouse1 -> loads profile named “mouse1”)"),s("br"),e._v("\nCorresponding FABI command is : “AT LOAD text”")]),e._v(" "),s("li",[s("strong",[e._v("List :")]),e._v(" list all saved mode names"),s("br"),e._v("\nCorresponding FABI command is : “AT LIST”")]),e._v(" "),s("li",[s("strong",[e._v("Next :")]),e._v(" next mode will be loaded (wrap around after last slot)"),s("br"),e._v("\nCorresponding FABI command is : “AT NEXT”")]),e._v(" "),s("li",[s("strong",[e._v("Clear :")]),e._v(" clear EEPROM content (delete all stored slots)"),s("br"),e._v("\nCorresponding FABI command is : “AT CLEAR”")]),e._v(" "),s("li",[s("strong",[e._v("Idle :")]),e._v(" idle command (no operation)"),s("br"),e._v("\nCorresponding FABI command is : “AT IDLE”")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Stepsize [integer]:")]),e._v(" set mouse wheel stepsize (e.g. AT WS 3 sets the wheel stepsize to 3 rows)"),s("br"),e._v("\nThe stepsize is set when the plugin is started")]),e._v(" "),s("li",[s("strong",[e._v("COMPort [integer]:")]),e._v(" COM Port of FABI.")])])])}),[],!1,null,null,null);t.default=r.exports},3004:function(e,t,o){e.exports=o.p+"assets/img/FABI.d2820cd0.png"}}]);