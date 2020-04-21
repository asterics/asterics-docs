(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1841:function(e,t,o){e.exports=o.p+"assets/img/HID_CIM.7d2b7157.jpg"},1988:function(e,t,o){e.exports=o.p+"assets/img/RemoteTablet.1d33ce95.jpg"},403:function(e,t,o){"use strict";o.r(t);var n=o(22),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"remote-tablet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#remote-tablet"}},[e._v("#")]),e._v(" Remote Tablet")]),e._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),n("p",[e._v("The RemoteTablet component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer).\nThis plugins performs similar like the RemoteMouse plugin, with the difference that the coorindates are set absolutely via the table devie, not relatively like a mouse device works.\nThe HID actuator emulates a standard USB Tablet on the target computer (no special driver software is needed).\nThe Tablet x-position, y-position, press/release actions of Tablet buttons and wheel movements can be controlled via desired input values and event triggers.\nNote that multiple instances of the Remote components (RemoteJoystick, RemoteKeyboard, RemoteMouse and RemoteTablet) can be used concurrently with one HID actuator USB dongle, e.g. to provide different key actions for up to four different input devices on the target computer.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1988),alt:"Screenshot: RemoteTablet plugin",title:"Screenshot: RemoteTablet plugin"}}),n("br"),e._v("\nRemoteTablet plugin")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1841),alt:"HID Actuator CIM",title:"HID Actuator CIM"}}),n("br"),e._v("\nthe HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("mouseX [integer]:")]),e._v(" The desired X-Position of the cursor.\n"),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("mouseY [integer]:")]),e._v(" The desired Y-Position of the cursor.\n"),n("strong",[e._v("This input port supports synchronization")])]),e._v(" "),n("li",[n("strong",[e._v("action [string]:")]),e._v(" Input port for a command string.\nThis command string allows to modify the action of the next left Tablet click �V it can be set to trigger other types of Tablet clicks.\nFollowing command strings are accepted:\n"),n("ul",[n("li",[n("em",[e._v("“@Mouse: nextclick, right”:")]),e._v(" next left click event will create a right Mouse button click.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: nextclick, double”:")]),e._v(" next left click event will create a double click.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: nextclick, middle”:")]),e._v(" next left click event will create a middle button click.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: nextclick, drag”:")]),e._v(" next left click event will hold the left Mouse button.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: nextclick, release”:")]),e._v(" next left click event will release the left Mouse button.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: action, enable”:")]),e._v(" enables all Mouse actions.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: action, disable”:")]),e._v(" disables all Mouse actions.")]),e._v(" "),n("li",[n("em",[e._v("“@Mouse: action, toggle”:")]),e._v(" enables / disables all Mouse actions.")])])])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("leftClick:")]),e._v(" An incoming event at this port creates a Mouse button click.\nA left click will be generated, unless a valid “nextclick �” command has been received at the cmd input which changed the type of the click (see above).")]),e._v(" "),n("li",[n("strong",[e._v("middleClick:")]),e._v(" A click with the middle Mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("rightClick:")]),e._v(" A click with the right Mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("doubleClick:")]),e._v(" A double click with the left Mouse button is generated.")]),e._v(" "),n("li",[n("strong",[e._v("dragPress:")]),e._v(" The left Mouse button is pressed (but not released again).")]),e._v(" "),n("li",[n("strong",[e._v("dragRelease:")]),e._v(" The left Mouse button is released.")]),e._v(" "),n("li",[n("strong",[e._v("wheelUp:")]),e._v(" The Mouse wheel is turned one position from the user.")]),e._v(" "),n("li",[n("strong",[e._v("wheelDown:")]),e._v(" The Mouse wheel is turned one position to the user.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("absolutePosition [boolean]:")]),e._v(" Currently not supported.\nAll Mouse position input values are interpreted as relative changes of the position (X- and Y-movement).")]),e._v(" "),n("li",[n("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used.\nThe module flashes a LED for identification when the ID is selected.\n"),n("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);