(window.webpackJsonp=window.webpackJsonp||[]).push([[259],{1501:function(e,t,o){"use strict";o.r(t);var s=o(1),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"remote-joystick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remote-joystick"}},[e._v("#")]),e._v(" Remote Joystick")]),e._v(" "),s("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),s("p",[e._v("The RemoteJoystick component interfaces the AsTeRICS Personal Platform to a second computer via the HID actuator CIM (USB dongle, plugged into the target computer). The HID actuator emulates a standard HID Joystick device on the target computer (no special driver software is needed). The Joystick controller is compatible to the Playstation3 SixAxis controller and can be used for PS3 game interfacing. The X/Y axis represent the left stick, the Z/R axis represent the right sick. The button numbers correspond to the PS3-controller buttons as labeled in the event port descriptions. The Joystick analog positions, the Point-Of-View angle and up to 13 Buttons can be emulated via desired input values and event triggers. Note that multiple instances of the Remote-components (RemoteJoystick, RemoteKeyboard and RemoteMouse) can be used concurrently with one HID actuator USB dongle, e.g. to provide different actions from up to three different input devices on the target computer.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(2955),alt:"Screenshot: RemoteJoystick plugin",title:"Screenshot: RemoteJoystick plugin"}}),s("br"),e._v("\nRemoteJoystick plugin")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("The HID Actuator CIM (CIM ID 0x0101) has to be plugged into a free USB port of the target computer and the cable has to be connected to the AsTeRICS platform.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(1991),alt:"HID Actuator CIM",title:"HID Actuator CIM"}}),s("br"),e._v("\nthe HID Actuator plugs into the target computer and connects via Bluetooth wirelessly to the ARE")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("joystickX [integer]:")]),e._v(" The desired X-Position of the Joystick.")]),e._v(" "),s("li",[s("strong",[e._v("joystickY [integer]:")]),e._v(" The desired Y-Position of the Joystick.")]),e._v(" "),s("li",[s("strong",[e._v("joystickZ [integer]:")]),e._v(" The desired Z-Position of the Joystick.")]),e._v(" "),s("li",[s("strong",[e._v("joystickR [integer]:")]),e._v(" The desired R-Position of the Joystick.")]),e._v(" "),s("li",[s("strong",[e._v("joystickPov [integer]:")]),e._v(" The desired POV-angle of the Joystick.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("pressButton1 - pressButton13:")]),e._v(" An incoming event at this port causes the corresponding button of the Joystick to be pressed.")]),e._v(" "),s("li",[s("strong",[e._v("releaseButton1 - releaseButton13:")]),e._v(" An incoming event at this port causes the corresponding button of the Joystick to be released.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("refreshInterval [integer]:")]),e._v(" This property value sets a minimum time (in milliseconds) between two updates of the remote joystick device. If set to 0, no limit is given to the update rate - which should be okay unless very high update rates (>100 Hz) of the joystick angles are performed.")]),e._v(" "),s("li",[s("strong",[e._v("uniqueId:")]),e._v(" unique number of the CIM - if more than one CIMs of the same type are used. The module flashes a LED for identification when the ID is selected. "),s("strong",[e._v("Supports value suggestions from ARE (dynamic property)")])])])])}),[],!1,null,null,null);t.default=r.exports},1991:function(e,t,o){e.exports=o.p+"assets/img/HID_CIM.7d2b7157.jpg"},2955:function(e,t,o){e.exports=o.p+"assets/img/RemoteJoystick.6fa6bfd8.jpg"}}]);