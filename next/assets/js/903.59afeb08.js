(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1515:function(e,t,r){"use strict";r.r(t);var i=r(2),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"knx"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#knx"}},[e._v("#")]),e._v(" KNX")]),e._v(" "),i("h3",{attrs:{id:"component-type-actuator-subcategory-home-control"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-home-control"}},[e._v("#")]),e._v(" Component Type: actuator (Subcategory: Home Control)")]),e._v(" "),i("p",[e._v("The KNX plugin enables the ARE to interface a KNX installation. This plugin utilizes the calimero java library (http://calimero.sourceforge.net/) for the KNX implementation, it is ©opyrighted 2006-2008 by W. Kastner and released under the GNU General Public License (FSF v2 or later). The KNX plugin provides an interface to the KNX home automation bus via a KNXnet/IP router. KNX actuators with specific group addresses can be switched on or off, or a specific value can be sent to the KNX actuators. This allows control of lightning, heat and ventilation, blend control or other utilization of other home automation facilities via the AsTeRICS platform.")]),e._v(" "),i("p",[i("img",{attrs:{src:r(2853),alt:"Screenshot: KNX plugin",title:"Screenshot: KNX plugin"}}),i("br"),e._v("\nKNX plugin")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("ul",[i("li",[e._v("A KNX infrastructure")]),e._v(" "),i("li",[e._v("A little knowledge on KNX")])]),e._v(" "),i("h2",{attrs:{id:"functional-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#functional-description"}},[e._v("#")]),e._v(" Functional Description")]),e._v(" "),i("p",[e._v("By starting the model, the KNX plugin establishes a connection to the KNX gateway specified by the plugin properties. Currently, this plugin supports only IP connection (due to the limitation of the underlaying calimero library, USB interfaces will be supported with Java8). The plugin has three different possibilities to interface KNX datapoints:")]),e._v(" "),i("ul",[i("li",[e._v("Transmitting: Input ports (slider): Intended for dimming actuators")]),e._v(" "),i("li",[e._v("Transmitting: Event Listeners: Used to send a defined value (with a given type) to a KNX group address.")]),e._v(" "),i("li",[e._v("Transmitting: Action string: The most flexible way to send something to KNX. The command structure is: "),i("em",[e._v("@KNX: group_address,datapoint_type,value")]),e._v(". It is possible to use either a space, a comma or a number sign as separation tokens. The datapoint type is described later.")]),e._v(" "),i("li",[e._v("Receiving: Event Triggers: An event trigger can be used to listen to a defined KNX group address. If there is ANYTHING happening on this dedicated group address, an event will be raised.")]),e._v(" "),i("li",[e._v("Receiving: Output ports: The received value of a KNX group address will be interpreted by the given data point type, parsed to a string and sent out to the output ports")])]),e._v(" "),i("h2",{attrs:{id:"knx-datapoint-types"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#knx-datapoint-types"}},[e._v("#")]),e._v(" KNX datapoint types")]),e._v(" "),i("p",[e._v("KNX itself doesn’t provide any possibilty to get information on how to interpret received data. This is the point where you need the datapoint types. There are a few main types and some sub types. For example: "),i("em",[e._v("1.001")]),e._v(" is the datapoint type for a simple switch actuator/sensor. The input values are varying on the different datapoint types. For the switch example, the valid values are "),i("em",[e._v("on")]),e._v(" and "),i("em",[e._v("off")]),e._v(". The full list of all datatypes is provided by the ARE. If you want to receive a full list, you have to place the plugin in your ACS model, connect to the ARE and upload the model (even without any functionality). Afterwards, the full list of all currently supported datapoint types is available. Every list entry contains following information:")]),e._v(" "),i("ul",[i("li",[e._v("Description")]),e._v(" "),i("li",[e._v("[Minimum,Maximum value]")]),e._v(" "),i("li",[e._v("(Datapoint ID)")])]),e._v(" "),i("p",[e._v("The example of the light switch:"),i("br"),e._v(" "),i("em",[e._v("Switch[off,on] (1.001)")]),e._v(" The literal name for this datapoint type is “Switch” and its ID is 1.001. Because this is a boolean value, off and on are the only valid values. For float values, these given values are representing the minimum and the maximum value.")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("actionString [string]:")]),e._v(' This port receives string commands for the KNX component. The commands have to be in the format “@KNX: group_address,datapoint_type,value”. The delimiters ‘,’, ‘#’ and ’ ’ are allowed. An example for a valid command is"@KNX:1/1/1,1.001,on". As a valid command is received by the input port, the value is sent to the KNX group address. The group addresses comply to the setup of the KNX network which can be configured with the ETS software.')]),e._v(" "),i("li",[i("strong",[e._v("slider[1-6] [double]:")]),e._v(" Input port for a double value which is converted to a given datapoint (Property: DPTSlider[1-6]) and sent to the given KNX group address (Property: groupAddressSlider[1-6]")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("data [1-6] [string]:")]),e._v(" These output ports are sending received data from the group addresses (Property: groupAddressOutput[1-6]). The data interpretation is controlled by the DPT (datapoint type, property: DPTOutput[1-6])")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("p",[i("strong",[e._v("localIP [string]:")]),e._v(" The local IP address of the interface which can reach the KNXnetIP.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("KNXNetIP [string]:")]),e._v(" The destination IP address of the KNX gateway.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("NAT [boolean]:")]),e._v(" Enable NAT")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("groupAddress[1-6] [string]:")]),e._v(" (Event Listener) Specifies KNX group addresses for the [n] Event Listener e.g. “1/1/1”.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("dataValue[1-6] [string]:")]),e._v(" (Event Listener) Date value, which should be sent (triggered by the input event). The possible values are determined by the used DPT property (see the chapter on datapoint types)")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("DPTEvent[1-6] [string/dropdown]:")]),e._v(" (Event Listener) Specifies the DPT (datapoint type) of the dataValue[1-6] which is sent to the KNX group address, triggered by the input event.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("groupAddressSlider[1-6] [string]:")]),e._v(" (Input port) Specifies KNX group addresses for the Slider[n].")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("DPTSlider[1-6] [string/dropdown]:")]),e._v(" (Input port) Determines the datapoint type corresponding to the sliders [1-6].")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("groupAddressTrigger[1-6] [string]:")]),e._v(" (Event Trigger) Specifies KNX group addresses for the Event Trigger [n]. The event is triggered if ANY action is happening on the given group address. If you need additional data processing, please use the output ports and process the received data values.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("groupAddressOutput[1-6] [string]:")]),e._v(" (Output port) Specifies the KNX group adresses, which are sent to the output ports. If there is anything happening on the given group adresses, the corresponding data is sent to the output ports.")])]),e._v(" "),i("li",[i("p",[i("strong",[e._v("DPTOutput[1-6] [string/dropdown]:")]),e._v(" (Output port) Determines the datapoint type for the output port. The received data interpretation is defined by the DPTOutput property.")])])]),e._v(" "),i("h2",{attrs:{id:"event-listener"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener"}},[e._v("#")]),e._v(" Event Listener")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("send[1-6]:")]),e._v(" Each time an event is triggered, the corresponding KNX command which is specified in the plugin properties (groupAddress[1-6],dataValue[1-6],DPTEvent[1-6]), is issued.")]),e._v(" "),i("li",[i("strong",[e._v("read[1-6]:")]),e._v(" Trigger a read command on the output port. The settings for the group address and the DPT are the same as for the output ports (groupAddressOutput[1-6], DPTOutput[1-6]).")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger"}},[e._v("#")]),e._v(" Event Trigger")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("event_out_[1-6]:")]),e._v(" When there is any activity on the given KNX group address, set by the properties (groupAddressTrigger[1-6]) an event is raised by this plugin.")])])])}),[],!1,null,null,null);t.default=s.exports},2853:function(e,t,r){e.exports=r.p+"assets/img/Knx.98c3039f.jpg"}}]);