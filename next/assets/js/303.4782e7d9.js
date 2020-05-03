(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{1790:function(e,t,o){"use strict";o.r(t);var i=o(1),n=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"remote-mouse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#remote-mouse"}},[e._v("#")]),e._v(" Remote Mouse")]),e._v(" "),i("p",[e._v("Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),i("p",[e._v("The RemoteMouse component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard USB mouse on the target computer (no special driver software is needed). The mouse x-position, y-position, press/release actions of three mouse buttons and mouse-wheel movements can be controlled via desired input values and event triggers. Note that multiple instances of the Remote components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different key actions for up to three different input devices on the target computer.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(3185),alt:"Screenshot: RemoteMouse plugin",title:"Screenshot: RemoteMouse plugin"}})]),e._v(" "),i("p",[e._v("RemoteMouse plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(1992),alt:"HID Actuator CIM",title:"HID Actuator CIM"}})]),e._v(" "),i("p",[e._v("The HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("mouseX [integer]:")]),e._v(" The desired X-Position of the mouse. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("mouseY [integer]:")]),e._v(" The desired Y-Position of the mouse. "),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("action [string]:")]),e._v(" Input port for a command string. This command string allows to modify the action of the next left mouse click. It can be set to trigger other types of mouse clicks. A command string may be composed of several items that are delimited by ‘,’ or ’ '. Following command strings are accepted:\n"),i("ul",[i("li",[i("em",[e._v("“@MOUSE: nextclick, right”:")]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, double”:")]),e._v(" next left click event will create a double click.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, middle”:")]),e._v(" next left click event will create a middle button click.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, drag”:")]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, release”:")]),e._v(" next left click event will release the left mouse button.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: action, enable”:")]),e._v(" enables all mouse actions.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: action, disable”:")]),e._v(" disables all mouse actions.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: action, toggle”:")]),e._v(" enables / disables all mouse actions.")])])])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("leftClick:")]),e._v(" An incoming event at this port creates a mouse button click. A left click will be generated, unless a valid “nextclick…” command has been received at the cmd input which changed the type of the click (see above).")]),e._v(" "),i("li",[i("strong",[e._v("middleClick:")]),e._v(" A click with the middle mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("rightClick:")]),e._v(" A click with the right mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("doubleClick:")]),e._v(" A double click with the left mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("dragPress:")]),e._v(" The left mouse button is pressed (but not released again).")]),e._v(" "),i("li",[i("strong",[e._v("dragRelease:")]),e._v(" The left mouse button is released.")]),e._v(" "),i("li",[i("strong",[e._v("wheelUp:")]),e._v(" The mouse wheel is turned one position from the user.")]),e._v(" "),i("li",[i("strong",[e._v("wheelDown:")]),e._v(" The mouse wheel is turned one position to the user.")]),e._v(" "),i("li",[i("strong",[e._v("nextClickRight")]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),i("li",[i("strong",[e._v("nextClickDouble")]),e._v(" next left click event will create a double click.")]),e._v(" "),i("li",[i("strong",[e._v("nextClickMiddle")]),e._v("next left click event will create a middle button click")]),e._v(" "),i("li",[i("strong",[e._v("nextClickDrag")]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),i("li",[i("strong",[e._v("nextClickRelease")]),e._v(" next left click event will release the left mouse button.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("absolutePosition [boolean]:")]),e._v(" Currently not supported. All mouse position input values are interpreted as relative changes of the position (X- and Y-movement).")]),e._v(" "),i("li",[i("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),i("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=n.exports},1992:function(e,t,o){e.exports=o.p+"assets/img/HID_CIM.7d2b7157.jpg"},3185:function(e,t,o){e.exports=o.p+"assets/img/RemoteMouse.b79f6ca9.jpg"}}]);