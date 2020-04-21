(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{336:function(e,t,s){"use strict";s.r(t);var r=s(22),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lipmouse"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lipmouse"}},[e._v("#")]),e._v(" Lipmouse")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory:Sensor Modules)")]),e._v(" "),r("p",[e._v("This component provides signals from the "),r("a",{attrs:{href:"https://github.com/asterics/FLipMouse",target:"_blank",rel:"noopener noreferrer"}},[e._v("FLipmouse"),r("OutboundLink")],1),e._v(" module, which is a universal hardware module for alternative computer control and environnmental control. The FLipMouse allows computer control via a mouthpiece (i.e. via lips or small finger movements), and can create USB HID input for computers or smart phones (mouse-, keyboard- and joystick emulation). The FlipMouse also includes an infrared receiver and transmitter so that it can record and replay infrared codes of different consumer electronic devices. A user interacts with the FLpiMouse mouthpiece: left/right, up/down and sip/puff. Alternatively, HID actions and IR functions can be controlled via AT-commands (see below). The FLipmouse can be adjusted to work with very low forces so that it can be used by persons with severly reduced motor capabilites.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(3749),alt:"Screenshot: Lipmouse plugin",title:"Screenshot: Lipmouse plugin"}})]),e._v(" "),r("p",[e._v("The Lipmouse sensor plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("The FLipmouse module must be connected to a USB port. Firmware for the FLipmouse sensor can be found in "),r("a",{attrs:{href:"https://github.com/asterics/FLipMouse",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github"),r("OutboundLink")],1),e._v(" repository. The free Arduino IDE + Teensyduino can be used to update the firmware of the FLipmouse module.")]),e._v(" "),r("p",[r("img",{attrs:{src:s(3750),alt:"Lipmouse sensor application",title:"Lipmouse sensor application"}})]),e._v(" "),r("p",[e._v("FLipmouse application")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("AtCmd [string]:")]),e._v(" many functions of the FLipMouse can be controlled via AT commands, i.e. commands strings which start with ‘AT’ and are supported by the FLipMouse module. For a comprehensive list of supported commands see: "),r("a",{attrs:{href:"https://github.com/asterics/FLipMouse/blob/master/FLipWare/commands.h",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(". The command strings sent to this input port do not need to start with ‘AT’ and do not need to end with a CR/LF character. For example: if you want to move the mouse 20 steps in x-direction, send ‘MX 20’ to the input port.")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("X [integer]:")]),e._v(" the force applied to the FLipmouse mouthpiece in x-direction")]),e._v(" "),r("li",[r("strong",[e._v("Y [integer]:")]),e._v(" the force applied to the FLipmouse mouthpiece in y-direction")]),e._v(" "),r("li",[r("strong",[e._v("pressure [integer]:")]),e._v(" the pressure value applied to the sip/puff - sensor")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("calibration:")]),e._v(" if this event is received, the x/y force value is set to 0 (removing any drift of the sensor values)")]),e._v(" "),r("li",[r("strong",[e._v("setLed1:")]),e._v(" if this event is received, Led1 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed1:")]),e._v(" if this event is received, Led1 will be turned off")]),e._v(" "),r("li",[r("strong",[e._v("setLed2:")]),e._v(" if this event is received, Led2 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed2:")]),e._v(" if this event is received, Led2 will be turned off")]),e._v(" "),r("li",[r("strong",[e._v("setLed3:")]),e._v(" if this event is received, Led3 will be turned on")]),e._v(" "),r("li",[r("strong",[e._v("clearLed3:")]),e._v(" if this event is received, Led3 will be turned off")])]),e._v(" "),r("h2",{attrs:{id:"event-triggerer-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increses back before the selected sipTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("longSip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increases back after the selected sipTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("sipStart:")]),e._v(" will be triggered at the moment when pressure decreases under the selected sip treshold")]),e._v(" "),r("li",[r("strong",[e._v("sipEnd:")]),e._v(" will be triggered at the moment when pressure increases above the selected sip treshold")]),e._v(" "),r("li",[r("strong",[e._v("puff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back before the selected puffTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("longPuff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back after the selected puffTime has passed")]),e._v(" "),r("li",[r("strong",[e._v("puffStart:")]),e._v(" will be triggered at the moment when pressure increases above the selected puff treshold")]),e._v(" "),r("li",[r("strong",[e._v("puffEnd:")]),e._v(" will be triggered at the moment when pressure decreases under the selected puff treshold")]),e._v(" "),r("li",[r("strong",[e._v("button1Pressed:")]),e._v(" will be triggered when button1 of the FLipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button1Released:")]),e._v(" will be triggered when button1 of the FLipmouse is released")]),e._v(" "),r("li",[r("strong",[e._v("button2Pressed:")]),e._v(" will be triggered when button2 of the FLipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button2Released:")]),e._v(" will be triggered when button2 of the FLipmouse is released")]),e._v(" "),r("li",[r("strong",[e._v("button3Pressed:")]),e._v(" will be triggered when button3 of the FLipmouse is pressed")]),e._v(" "),r("li",[r("strong",[e._v("button3Released:")]),e._v(" will be triggered when button3 of the FLipmouse is released")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("uniqueID [integer]:")]),e._v(" a unique identifier, useful if more then one lipmouse modules are used (dynamic property).")]),e._v(" "),r("li",[r("strong",[e._v("periodicADCUpdate [integer]:")]),e._v(" the update rate for force and pressure values in milliseconds.")]),e._v(" "),r("li",[r("strong",[e._v("sipThreshold [integer]:")]),e._v(" threshold value for sip actions.")]),e._v(" "),r("li",[r("strong",[e._v("sipTime [integer]:")]),e._v(" threshold time for sip/longSip events.")]),e._v(" "),r("li",[r("strong",[e._v("puffThreshold [integer]:")]),e._v(" threshold value for puff actions.")]),e._v(" "),r("li",[r("strong",[e._v("puffTime [integer]:")]),e._v(" threshold time for puff/longPuff events.")])])])}),[],!1,null,null,null);t.default=i.exports},3749:function(e,t,s){e.exports=s.p+"assets/img/lipmouse.ac98bdc4.jpg"},3750:function(e,t,s){e.exports=s.p+"assets/img/lipmouseapplication.da7bc790.jpg"}}]);