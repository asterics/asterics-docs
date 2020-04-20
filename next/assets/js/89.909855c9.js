(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1842:function(e,t,o){e.exports=o.p+"assets/img/HID_CIM.7d2b7157.jpg"},1985:function(e,t,o){e.exports=o.p+"assets/img/RemoteMouse.b79f6ca9.jpg"},402:function(e,t,o){"use strict";o.r(t);var n=o(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"remote-mouse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-mouse"}},[e._v("#")]),e._v(" Remote Mouse")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),n("p",[e._v("The RemoteMouse component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer).\nThe HID actuator emulates a standard USB mouse on the target computer (no special driver software is needed).\nThe mouse x-position, y-position, press/release actions of three mouse buttons and mouse-wheel movements can be controlled via desired input values and event triggers.\nNote that multiple instances of the Remote components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different key actions for up to three different input devices on the target computer.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1985),alt:"Screenshot: RemoteMouse plugin",title:"Screenshot: RemoteMouse plugin"}}),n("br"),e._v("\nRemoteMouse plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1842),alt:"HID Actuator CIM",title:"HID Actuator CIM"}}),n("br"),e._v("\nthe HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("mouseX [integer]:")]),e._v(" The desired X-Position of the mouse.\n"),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("mouseY [integer]:")]),e._v(" The desired Y-Position of the mouse.\n"),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("action [string]:")]),e._v(" Input port for a command string.\nThis command string allows to modify the action of the next left mouse click �V it can be set to trigger other types of mouse clicks.\nFollowing command strings are accepted:\n"),n("ul",[n("li",[n("em",[e._v('"@MOUSE: nextclick, right":')]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: nextclick, double":')]),e._v(" next left click event will create a double click.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: nextclick, middle":')]),e._v(" next left click event will create a middle button click.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: nextclick, drag":')]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: nextclick, release":')]),e._v(" next left click event will release the left mouse button.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: action, enable":')]),e._v(" enables all mouse actions.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: action, disable":')]),e._v(" disables all mouse actions.")]),e._v(" "),n("li",[n("em",[e._v('"@MOUSE: action, toggle":')]),e._v(" enables / disables all mouse actions.")])])])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("leftClick:")]),e._v(' An incoming event at this port creates a mouse button click.\nA left click will be generated, unless a valid "nextclick �" command has been received at the cmd input which changed the type of the click (see above).')]),e._v(" "),n("li",[n("strong",[e._v("middleClick:")]),e._v(" A click with the middle mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("rightClick:")]),e._v(" A click with the right mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("doubleClick:")]),e._v(" A double click with the left mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("dragPress:")]),e._v(" The left mouse button is pressed (but not released again).")]),e._v(" "),n("li",[n("strong",[e._v("dragRelease:")]),e._v(" The left mouse button is released.")]),e._v(" "),n("li",[n("strong",[e._v("wheelUp:")]),e._v(" The mouse wheel is turned one position from the user.")]),e._v(" "),n("li",[n("strong",[e._v("wheelDown:")]),e._v(" The mouse wheel is turned one position to the user.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("absolutePosition [boolean]:")]),e._v(" Currently not supported.\nAll mouse position input values are interpreted as relative changes of the position (X- and Y-movement).")]),e._v(" "),n("li",[n("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used.\nThe module flashes a LED for identification when the ID is selected.\n"),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);