(window.webpackJsonp=window.webpackJsonp||[]).push([[1134],{1764:function(e,t,s){"use strict";s.r(t);var i=s(21),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"lipmouseir"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#lipmouseir"}},[e._v("#")]),e._v(" LipmouseIR")]),e._v(" "),i("p",[e._v("Component Type: Sensor (Subcategory:Sensor Modules)")]),e._v(" "),i("p",[e._v("This component provides signals from the Lipmouse module, which allows computer control via a mouthpiece. The user can create input signals with 3 degrees of freedom by interacting with the mouthpiece: left/right, up/down and sip/puff. The horizontal and vertical movements are measured via force sensors inside the lipmouse module. The sip/puff actions are measured via a pressure sensor. The lipmouse can be adjusted to very low force that it can be used by persons with severly reduced motor capabilites (e.g. late stage musculuar dystrophy or quadraplegia up to C1/C2 lesions). Additionally the Lipmouse has an infrared interface which enables it to control electronic devices."),i("br"),e._v("\nThrough a receiver it is possible to record commands from existing remote controls and store the codes to a database. When needed, the IR signal is reconstructed and transmitted to the device to be controlled.")]),e._v(" "),i("p",[i("img",{attrs:{src:s(3155),alt:"Screenshot: LipmouseIR plugin",title:"Screenshot: LipmouseIR plugin"}})]),e._v(" "),i("p",[e._v("The LipmouseIR sensor plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v('The LipmouseIR module must be connected to a USB port. Firmware for the lipmouseIR sensor can be found in the folder CIMs/Lipmouse_CIM. The free "teensy loader" tool can be used to update the firmware of the lipmouseIR module. Detailed design documentation will be provided in the future.')]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("DeviceType [string]:")]),e._v(" Type of the device to be controlled via IR (e.g.: TV)")]),e._v(" "),i("li",[i("strong",[e._v("DeviceName [string]:")]),e._v(" Name of the device to be controlled via IR (e.g.: Sony, Samsung, etc.)")]),e._v(" "),i("li",[i("strong",[e._v("DeviceFunction [string]:")]),e._v(" Name of function of the device (e.g.: On, Off, VolumeUp, etc.)")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("X [integer]:")]),e._v(" the force applied to the Lipmouse mouthpiece in x-direction")]),e._v(" "),i("li",[i("strong",[e._v("Y [integer]:")]),e._v(" the force applied to the Lipmouse mouthpiece in y-direction")]),e._v(" "),i("li",[i("strong",[e._v("pressure [integer]:")]),e._v(" the pressure value applied to the sip/puff - sensor")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("SendIRCode:")]),e._v(" Send an IR Code to the Lipmouse")]),e._v(" "),i("li",[i("strong",[e._v("RecordIRCode:")]),e._v(" Record an IR Code through the Lipmouse")]),e._v(" "),i("li",[i("strong",[e._v("calibration:")]),e._v(" if this event is received, the x/y force value is set to 0 (removing any drift of the sensor values)")]),e._v(" "),i("li",[i("strong",[e._v("setLed1:")]),e._v(" if this event is received, Led1 will be turned on")]),e._v(" "),i("li",[i("strong",[e._v("clearLed1:")]),e._v(" if this event is received, Led1 will be turned off")]),e._v(" "),i("li",[i("strong",[e._v("setLed2:")]),e._v(" if this event is received, Led2 will be turned on")]),e._v(" "),i("li",[i("strong",[e._v("clearLed2:")]),e._v(" if this event is received, Led2 will be turned off")]),e._v(" "),i("li",[i("strong",[e._v("setLed3:")]),e._v(" if this event is received, Led3 will be turned on")]),e._v(" "),i("li",[i("strong",[e._v("clearLed3:")]),e._v(" if this event is received, Led3 will be turned off")])]),e._v(" "),i("h2",{attrs:{id:"event-triggerer-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("StartRecord:")]),e._v(" will be triggered when Lipmouse is recording")]),e._v(" "),i("li",[i("strong",[e._v("StopRecord:")]),e._v(" will be triggered when Lipmouse has finished recording")]),e._v(" "),i("li",[i("strong",[e._v("sip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increses back before the selected sipTime has passed")]),e._v(" "),i("li",[i("strong",[e._v("longSip:")]),e._v(" will be triggered when pressure decreases under the selected sip treshold and increases back after the selected sipTime has passed")]),e._v(" "),i("li",[i("strong",[e._v("sipStart:")]),e._v(" will be triggered at the moment when pressure decreases under the selected sip treshold")]),e._v(" "),i("li",[i("strong",[e._v("sipEnd:")]),e._v(" will be triggered at the moment when pressure increases above the selected sip treshold")]),e._v(" "),i("li",[i("strong",[e._v("puff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back before the selected puffTime has passed")]),e._v(" "),i("li",[i("strong",[e._v("longPuff:")]),e._v(" will be triggered when pressure increases above the selected puff treshold and decreases back after the selected puffTime has passed")]),e._v(" "),i("li",[i("strong",[e._v("puffStart:")]),e._v(" will be triggered at the moment when pressure increases above the selected puff treshold")]),e._v(" "),i("li",[i("strong",[e._v("puffEnd:")]),e._v(" will be triggered at the moment when pressure decreases under the selected puff treshold")]),e._v(" "),i("li",[i("strong",[e._v("button1Pressed:")]),e._v(" will be triggered when button1 of the lipmouse is pressed")]),e._v(" "),i("li",[i("strong",[e._v("button1Released:")]),e._v(" will be triggered when button1 of the lipmouse is released")]),e._v(" "),i("li",[i("strong",[e._v("button2Pressed:")]),e._v(" will be triggered when button2 of the lipmouse is pressed")]),e._v(" "),i("li",[i("strong",[e._v("button2Released:")]),e._v(" will be triggered when button2 of the lipmouse is released")]),e._v(" "),i("li",[i("strong",[e._v("button3Pressed:")]),e._v(" will be triggered when button3 of the lipmouse is pressed")]),e._v(" "),i("li",[i("strong",[e._v("button3Released:")]),e._v(" will be triggered when button3 of the lipmouse is released")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("uniqueID [integer]:")]),e._v(" a unique identifier, useful if more then one lipmouse modules are used (dynamic property).")]),e._v(" "),i("li",[i("strong",[e._v("periodicADCUpdate [integer]:")]),e._v(" the update rate for force and pressure values in milliseconds.")]),e._v(" "),i("li",[i("strong",[e._v("sipThreshold [integer]:")]),e._v(" threshold value for sip actions.")]),e._v(" "),i("li",[i("strong",[e._v("sipTime [integer]:")]),e._v(" threshold time for sip/longSip events.")]),e._v(" "),i("li",[i("strong",[e._v("puffThreshold [integer]:")]),e._v(" threshold value for puff actions.")]),e._v(" "),i("li",[i("strong",[e._v("puffTime [integer]:")]),e._v(" threshold time for puff/longPuff events.")]),e._v(" "),i("li",[i("strong",[e._v("IRCodeFilePath [string]:")]),e._v(" Filepath to the file, where the IR Codes are stored.")])]),e._v(" "),i("h2",{attrs:{id:"ir-code-database"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#ir-code-database"}},[e._v("#")]),e._v(" IR Code Database")]),e._v(" "),i("p",[e._v("The database which contains the IR codes as well as the information about the type and name of the device and the specific function is a comma separated value file. The first value is the type, the second one is the name and the third one is the function. The following 512 values are the IR code. This database is automatically generated and maintained if new IR codes are recorded with the Lipmouse with IR functions.")])])}),[],!1,null,null,null);t.default=r.exports},3155:function(e,t,s){e.exports=s.p+"assets/img/LipmouseIR.135b0f05.png"}}]);