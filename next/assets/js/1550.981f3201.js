(window.webpackJsonp=window.webpackJsonp||[]).push([[1550],{469:function(e,t,r){"use strict";r.r(t);var i=r(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"serialport"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serialport"}},[e._v("#")]),e._v(" SerialPort")]),e._v(" "),r("p",[e._v("Component Type: Processor (Subcategory: Communication)")]),e._v(" "),r("p",[e._v("The SerialPort plugin can be used to send and receive data from serial devices (e.g. microcontrollers/embedded devices/wireless links etc.) via a serial port (COM port) or virtual serial port. The plugin adds some convinience methods to append or wait for termination characters. Furthermore the sending and receiving of byte values is supported.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("send [string]:")]),e._v(" string which will be sent to the microcontroller / embedded module")]),e._v(" "),r("li",[r("strong",[e._v("sendBytes [byte]:")]),e._v(" bytes to be sent to the serial port.")])]),e._v(" "),r("p",[r("em",[e._v("Note:")]),e._v(' Any data sent to one of the input ports tries to open the given COM port or serial device with given cimId, if the port is not currently open. Therefore sending a byte/command to an input port can be used to trigger a CIM-rescan or retry to open a device with specified cimId. The current status can be monitored by output values of "opPortStatus".')]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("received [string]:")]),e._v(" string which has been received (was sent from the microcontroller / embedded module)")]),e._v(" "),r("li",[r("strong",[e._v("receivedBytes [byte]:")]),e._v(" received bytes from the serial port.")]),e._v(" "),r("li",[r("strong",[e._v("opPortStatus [string]:")]),e._v(' status for mode with specified property "cimId". The following outputs are possible:\n'),r("ul",[r("li",[e._v('"IN_PORT_RESCAN": sent if CIM scanning is currently in progress and was not just triggered')]),e._v(" "),r("li",[e._v('"NEW_PORT_RESCAN": sent if a new CIM scanning was just triggered and CIM scanning is now in progress')])])])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("ComPort [string]:")]),e._v(" Defines the COM Port of the target serial device. e.g. COM0 or /dev/ttyS0")]),e._v(" "),r("li",[r("strong",[e._v("BaudRate [integer]:")]),e._v(" Defines the Baudrate for the communication. It must match the baudrate of the target device")]),e._v(" "),r("li",[r("strong",[e._v("sendStringTerminator [combobox selection]:")]),e._v(" Append a character when sending the string, e.g. CR, LF, CR+LF, 0")]),e._v(" "),r("li",[r("strong",[e._v("receiveStringTerminator [combobox selection]:")]),e._v(" wait for a termination character when receiving characters (-> receive a string)")]),e._v(" "),r("li",[r("strong",[e._v("sendBytesBufferSize [integer]:")]),e._v(" Wait for the given number of bytes before sending them to the serial port.")]),e._v(" "),r("li",[r("strong",[e._v("cimId [string]:")]),e._v(' If specified it is tried to open a raw COM port for a device with the given CIM-ID. If no device with the given CIM-ID is found a CIM rescan is triggered. The accepted format is a hex-value with prefix "0x", e.g. "0xa401" for FLipMouse. Status of CIM scan/rescan is sent to "opPortStatus" - see port description for details.')])])])}),[],!1,null,null,null);t.default=o.exports}}]);