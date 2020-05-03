(window.webpackJsonp=window.webpackJsonp||[]).push([[1138],{1931:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"universal-remote-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#universal-remote-control"}},[e._v("#")]),e._v(" Universal Remote Control")]),e._v(" "),o("p",[e._v("Component Type: Processor (Subcategory:Microcontroller Interfaces)")]),e._v(" "),o("p",[e._v("The Universal Remote Control (RC) enables the possibility to control all electronic devices in a household which are controlled remotely through infrared (IR) commands. THe necessary IR codes can be recorded with the RC itself and stored on a database on the computer. By choosing the manufacturer, name and function the IR code is deposed in this database and can be selected in order to send the code to the universal RC and therefore control electronic devices. The universal RC can also be used as a handheld gadget due to its built in battery and user interface. THe IR code database can be stored on an SD card.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(3284),alt:"Screenshot: UniversalRemoteControl plugin",title:"Screenshot: Universal Remote Control plugin"}})]),e._v(" "),o("p",[e._v("The Universal Remote Control sensor plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("For the use of the universal RC with a computer, it has to be be connected to a USB port. The firmware of the universal RC can be found in the AsTeRICS folder under /CIMs/UniversalInfraredRemoteControl/. A database will be automatically generated if there is not found one. For the usage of the universal RC as a handheld gadget, the SD card has to be formatted as a FAT16 volume and contain a database as well as the configuration file.")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("DeviceType [string]:")]),e._v(" Type of the device to be controlled via IR (e.g.: TV)")]),e._v(" "),o("li",[o("strong",[e._v("DeviceName [string]:")]),e._v(" Name of the device to be controlled via IR (e.g.: Sony, Samsung, etc.)")]),e._v(" "),o("li",[o("strong",[e._v("DeviceFunction [string]:")]),e._v(" Name of function of the device (e.g.: On, Off, VolumeUp, etc.)")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("SendIRCode:")]),e._v(" Send an IR Code to the Universal Remote Control")]),e._v(" "),o("li",[o("strong",[e._v("RecordIRCode:")]),e._v(" Record an IR Code through the Universal Remote Control")])]),e._v(" "),o("h2",{attrs:{id:"event-triggerer-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("StartRecord:")]),e._v(" will be triggered when Universal Remote Control is recording")]),e._v(" "),o("li",[o("strong",[e._v("StopRecord:")]),e._v(" will be triggered when Universal Remote Control has finished recording")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("IRCodeFilePath [string]:")]),e._v(" Filepath to the file, where the IR Codes are stored.")])]),e._v(" "),o("h2",{attrs:{id:"ir-code-database"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ir-code-database"}},[e._v("#")]),e._v(" IR Code Database")]),e._v(" "),o("p",[e._v("The database which contains the IR codes as well as the information about the type and name of the device and the specific function is a comma separated value file. The first value is the type, the second one is the name and the third one is the function. The following 512 values are the IR code. This database is automatically generated and maintained if new IR codes are recorded with the Universal Remote Control with IR functions.")]),e._v(" "),o("h2",{attrs:{id:"configuration-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[e._v("#")]),e._v(" Configuration File")]),e._v(" "),o("p",[e._v("The settings of the universal RC can be stored in the config.csv file. This is a comma separated value file and contains configurations such as the speed and sensibility of the rotary encoder and external buttons as well as the name of the file that contains the IR codes. The content of the default config.csv file is:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",[o("code",[e._v("\t\tJoystickSpeed,120\n\t\tJoystickSensibility,3\n\t\tFile,IRCODES.CSV\n\t\tSort,2\n")])])])])}),[],!1,null,null,null);t.default=n.exports},3284:function(e,t,a){e.exports=a.p+"assets/img/UniversalRemoteControl.c9a71d59.png"}}]);