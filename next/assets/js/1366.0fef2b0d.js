(window.webpackJsonp=window.webpackJsonp||[]).push([[1366],{3742:function(e,t,s){e.exports=s.p+"assets/img/serialsender.58f95c8a.png"},804:function(e,t,s){"use strict";s.r(t);var a=s(1),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"serialsender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serialsender"}},[e._v("#")]),e._v(" SerialSender")]),e._v(" "),a("p",[e._v("Component Type: Actuator (Subcategory: Generic Control Output)")]),e._v(" "),a("p",[e._v("The Serialsender can be used to send structured data to Serial devices. It has 16 data slots. Whenever a send event occurs the plugin sends every slot which is active to the device, beginning with slot0")]),e._v(" "),a("p",[a("img",{attrs:{src:s(3742),alt:"Screenshot: SerialSender plugin",title:"Screenshot: SerialSender plugin"}})]),e._v(" "),a("p",[e._v("SerialSender plugin")]),e._v(" "),a("h2",{attrs:{id:"input-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("slot0 - slot15 [int]:")]),e._v(" Input data for each slot. The lower 8 Bit of the input will be sent when the slot is set Active and a send event occurs")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("COMPort [string]:")]),e._v(" Defines the COM Port of the target serial device. e.g. COM0")]),e._v(" "),a("li",[a("strong",[e._v("BaudRate [integer]:")]),e._v(" Defines the Baudrate for the communication. It must match the baudrate of the target device")]),e._v(" "),a("li",[e._v("**Slot[0-15] [int]"),a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Defines the default value of a slot. This value will be overridden if there is data available at the corresponding input slot")]),e._v(" "),a("li",[e._v("**Slot[0-15]Active [boolean]"),a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Activate a Slot. Whenever a send event occurs the SerialSender will iterate over all Slots beginning with slot 0 and send the data of every Active Slot")]),e._v(" "),a("li",[e._v("**Slot[0-15]Delay [int]"),a("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Defines the delay the plugin should wait before sending data to a slot.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);