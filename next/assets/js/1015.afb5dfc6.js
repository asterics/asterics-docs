(window.webpackJsonp=window.webpackJsonp||[]).push([[1015],{1636:function(e,t,n){"use strict";n.r(t);var a=n(21),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"enocean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enocean"}},[e._v("#")]),e._v(" EnOcean")]),e._v(" "),a("p",[e._v("Component Type: actuator (Subcategory: Home Control)")]),e._v(" "),a("p",[e._v("The EnOcean plugin enables the ARE to interface to EnOcean wireless sensors. This plugin utilizes the Priscilla java library for the EnOcean implementation, it is ©opyrighted by UAS FH Technikum Wien and released under the GNU General Public License (FSF v2). The EnOcean plugin provides an interface to the EnOcean sensors over an USB stick (EnOcean USB300) or an IP gateway. Interfacing to EnOcean devices is possible either by sending different data to actuators or receiving different types of values. This allows control of lightning, heat and ventilation devices and many more via the AsTeRICS platform.")]),e._v(" "),a("p",[a("img",{attrs:{src:n(2979),alt:"Screenshot: EnOcean plugin",title:"Screenshot: EnOcean plugin"}})]),e._v(" "),a("p",[e._v("EnOcean plugin")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("An EnOcean gateway (either USB or IP)")]),e._v(" "),a("li",[e._v("Basic knowledge on EnOcean device IDs")])]),e._v(" "),a("h2",{attrs:{id:"functional-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functional-description"}},[e._v("#")]),e._v(" Functional Description")]),e._v(" "),a("p",[e._v("By starting the model, the EnOcean plugin establishes a connection to the EnOcean gateway specified by the plugin properties (defined by gatewayIP and USB checkbox). The gatewayIP is either the IP adress of the gateway or the COM port name (e.g. COM1 or /dev/ttyUSB0). There are 3 different ways of sending data to EnOcean devices. The first one is done by the 6 input slider ports. Each of them has properties for the source device ID (range: 0-127) and a data type (binary, temperature, illumination, humidity, temperature set point and fan level). On every update of the input data, an EnOcean data frame is generated and sent. The second method is done over the event input ports. There are 3 properties to define. The device ID and the data type have equal possible values as with the slider input. The third property defines the value to be sent. The first method is the most flexible one, by sending a command string to the command input port. It expects a special formatted string and parses the dedicated keywords and format to an EnOcean command. The string can be assembled individually with other string formatting plugins. Receiving sensor data is done by combining event and output ports. There are 2 properties, one for the type of input data (the data type are the same as stated before) and one for the source device ID (this property is a hexadecimal string, containing the full 32bit ID, printed on the sensor). The event ports are triggered each time, an event with the defined type and device ID is received. If an event is raised, at the same time the corresponding data value is available at the output ports.")]),e._v(" "),a("h2",{attrs:{id:"input-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("command [string]:")]),e._v(' This port receives string commands for the EnOcean devices. The commands have to be in the format “@ENOCEAN:device_id#type#value”. An example for a valid command is"@ENOCEAN:25#binary#true". As a valid command is received by the input port, the value and data type is broadcasted to the devices with the given device ID offset (range: 0-127)')]),e._v(" "),a("li",[a("strong",[e._v("slider[1-6] [double]:")]),e._v(" Input port for a double value which is converted to an integer (or another type, depends on the datatype) and broadcasted to all EnOcean devices in range")])]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("output[1-6]:")]),e._v(" The output value, from device with IDTrigger[1-6]")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("localIP [string]:")]),e._v(" The local IP address of the interface which can reach the IP gateway.")]),e._v(" "),a("li",[a("strong",[e._v("gatewayIP [string]:")]),e._v(" The destination IP address of the EnOcean gateway or the device name of the USB gateway (emulates a serial interface, e.g. COM1 or /dev/ttyUSB0)")]),e._v(" "),a("li",[a("strong",[e._v("USB [boolean]:")]),e._v(" If checked, then the connection will be established through a serial interface, otherwise through an IP gateway")]),e._v(" "),a("li",[a("strong",[e._v("id[1-6] [integer]:")]),e._v(" Source ID for input event[n]. The range is from 0 to 127.")]),e._v(" "),a("li",[a("strong",[e._v("sendType[1-6] [string]:")]),e._v(" Send type for input event[n]. Following data types are allowed global (for every datatype property, port and event):\n"),a("ul",[a("li",[a("em",[e._v("“binary”:")]),e._v(" e.g. used for switching light actuators on or off.")]),e._v(" "),a("li",[a("em",[e._v("“temperature”:")]),e._v(" e.g. used to transmit a temperature value.")]),e._v(" "),a("li",[a("em",[e._v("“illumination”:")]),e._v(" e.g. used to transmit illumination values.")]),e._v(" "),a("li",[a("em",[e._v("“humidity”:")]),e._v(" e.g. used to transmit humidity values.")]),e._v(" "),a("li",[a("em",[e._v("“setpoint”:")]),e._v(" e.g. used to send set point value (+10K or -5% humidity)")]),e._v(" "),a("li",[a("em",[e._v("“fan”:")]),e._v(" e.g. used to set or simulate a defined fan level")])])]),e._v(" "),a("li",[a("strong",[e._v("dataValue[1-6] [string]:")]),e._v(" The transmitted value for the input event [n] with the given id[n] and type (sendType[n])")]),e._v(" "),a("li",[a("strong",[e._v("IDSlider[1-6] [string]:")]),e._v(" Source ID for slider[n]. The range is from 0 to 127.")]),e._v(" "),a("li",[a("strong",[e._v("sendTypeSlider[1-6] [string]:")]),e._v(" The data type for sending slider[n] data with IDSLider[n]. The possible data types are stated above")]),e._v(" "),a("li",[a("strong",[e._v("IDTrigger[1-6] [string]:")]),e._v(" Source ID for event trigger[n]. This is a full id, as printed on the device as 6 character string(e.g. FFEFA01C)")]),e._v(" "),a("li",[a("strong",[e._v("TypeTrigger[1-6] [string]:")]),e._v(" The data type for the listening event[n]. If an incoming frame from the give ID (IDTrigger[n]) contains this data type, an event on event port [n] is raised. The possible data types are stated above")])]),e._v(" "),a("h2",{attrs:{id:"event-listener"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener"}},[e._v("#")]),e._v(" Event Listener")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("send[1-6]:")]),e._v(" Each time a event is triggered, the coresponding EnOcean frame which is specified in the plugin properties, is transmitted.")])]),e._v(" "),a("h2",{attrs:{id:"event-trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger"}},[e._v("#")]),e._v(" Event Trigger")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("event_out_[1-6]:")]),e._v(" Each time a frame is received with the given parameters (from properties IDTrigger[n] and TypeTrigger[n]), this event is raised")])])])}),[],!1,null,null,null);t.default=i.exports},2979:function(e,t,n){e.exports=n.p+"assets/img/enocean.b119bfe0.png"}}]);