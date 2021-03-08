(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1044:function(t,e,o){t.exports=o.p+"assets/img/remotejoystick.6fa6bfd8.jpg"},539:function(t,e,o){"use strict";o.r(e);var s=o(2),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[t._v("Component Type: Actuator (Subcategory: Input Device Emulation)")]),t._v(" "),s("p",[t._v("The RemoteJoystick component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard HID Joystick device on the target computer (no special driver software is needed). The Joystick controller is compatible to the Playstation3 SixAxis controller and can be used for PS3 game interfacing. The X/Y axis represent the left stick, the Z/R axis represent the right sick. The button numbers correspond to the PS3-controller buttons as labeled in the event port descriptions. The Joystick analog positions, the Point-Of-View angle and up to 13 Buttons can be emulated via desired input values and event triggers. Note that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions from up to three different input devices on the target computer.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(1044),alt:"Screenshot: RemoteJoystick plugin",title:"Screenshot: RemoteJoystick plugin"}})]),t._v(" "),s("p",[t._v("RemoteJoystick plugin")]),t._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),s("p",[t._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),t._v(" "),s("p",[s("img",{attrs:{src:o(718),alt:"HID Actuator CIM",title:"HID Actuator CIM"}})]),t._v(" "),s("p",[t._v("The HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),t._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("joystickX [integer]:")]),t._v(" The desired X-Position of the Joystick.")]),t._v(" "),s("li",[s("strong",[t._v("joystickY [integer]:")]),t._v(" The desired Y-Position of the Joystick.")]),t._v(" "),s("li",[s("strong",[t._v("joystickZ [integer]:")]),t._v(" The desired Z-Position of the Joystick.")]),t._v(" "),s("li",[s("strong",[t._v("joystickR [integer]:")]),t._v(" The desired R-Position of the Joystick.")]),t._v(" "),s("li",[s("strong",[t._v("joystickPov [integer]:")]),t._v(" The desired POV-angle of the Joystick.")])]),t._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("pressButton1 - pressButton13:")]),t._v(" An incoming event at this port causes the corresponding button of the Joystick to be pressed.")]),t._v(" "),s("li",[s("strong",[t._v("releaseButton1 - releaseButton13:")]),t._v(" An incoming event at this port causes the corresponding button of the Joystick to be released.")])]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("refreshInterval [integer]:")]),t._v(" This property value sets a minimum time (in milliseconds) between two updates of the remote joystick device. If set to 0, no limit is given to the update rate - which should be okay unless very high update rates (>100 Hz) of the joystick angles are performed.")]),t._v(" "),s("li",[s("strong",[t._v("uniqueId:")]),t._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),s("strong",[t._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);e.default=r.exports},718:function(t,e,o){t.exports=o.p+"assets/img/hid_cim.7d2b7157.jpg"}}]);