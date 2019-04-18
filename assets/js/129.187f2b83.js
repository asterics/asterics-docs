(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{1010:function(e,t,i){"use strict";i.r(t);var r=i(15),a=Object(r.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"serialsender"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#serialsender","aria-hidden":"true"}},[e._v("#")]),e._v(" SerialSender")]),e._v(" "),r("p",[e._v("Component Type: Actuator (Subcategory: Serial Communication)")]),e._v(" "),r("p",[e._v("The Serialsender can be used to send structured data to Serial devices. It has 16 data slots. Whenever a send event occurs the plugin sends every slot which is active to the device, beginning with slot0")]),e._v(" "),r("p",[r("img",{attrs:{src:i(583),alt:"Screenshot: SerialSender plugin",title:"Screenshot: SerialSender plugin"}})]),e._v(" "),r("p",[e._v("SerialSender plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("slot0 - slot15 [int]:")]),e._v(" Input data for each slot. The lower 8 Bit of the input will be sent when the slot is set Active and a send event occurs")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("COMPort [string]:")]),e._v(" Defines the COM Port of the target serial device. e.g. COM0")]),e._v(" "),r("li",[r("strong",[e._v("BaudRate [integer]:")]),e._v(" Defines the Baudrate for the communication. It must match the baudrate of the target device")]),e._v(" "),r("li",[e._v("**Slot[0-15] [int]😗*Defines the default value of a slot. This value will be overridden if there is data available at the corresponding input slot")]),e._v(" "),r("li",[e._v("**Slot[0-15]Active [boolean]😗*Activate a Slot. Whenever a send event occurs the SerialSender will iterate over all Slots beginning with slot 0 and send the data of every Active Slot")]),e._v(" "),r("li",[e._v("**Slot[0-15]Delay [int]😗*Defines the delay the plugin should wait before sending data to a slot.")])]),e._v(" "),r("EditLink")],1)},[],!1,null,null,null);t.default=a.exports},583:function(e,t,i){e.exports=i.p+"assets/img/serialsender.58f95c8a.png"}}]);