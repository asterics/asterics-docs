(window.webpackJsonp=window.webpackJsonp||[]).push([[431],{1991:function(t,e,a){t.exports=a.p+"assets/img/SerialSender.58f95c8a.png"},408:function(t,e,a){"use strict";a.r(e);var s=a(22),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"serialsender"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serialsender"}},[t._v("#")]),t._v(" SerialSender")]),t._v(" "),s("h3",{attrs:{id:"component-type-actuator-subcategory-serial-communication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-serial-communication"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Serial Communication)")]),t._v(" "),s("p",[t._v("The Serialsender can be used to communicate with Serial devices.\nIt has 16 slots.\nWhenever a send event occurs the plugin sends every slot which is active out to the device beginnint with the slot0")]),t._v(" "),s("p",[s("img",{attrs:{src:a(1991),alt:"Screenshot: SerialSender plugin",title:"Screenshot: SerialSender plugin"}}),s("br"),t._v("\nSerialSender plugin")]),t._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("slot0 - slot15 [int]:")]),t._v(" Input data for each slot.\nThe lower 8 Bit of the input will be sent when the slot is set Active and a send event occurs")])]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("COMPort [string]:")]),t._v(" Defines the COM Port of the target serial device, e.g. COM0.")]),t._v(" "),s("li",[s("strong",[t._v("BaudRate [integer]:")]),t._v(" Defines the Baudrate for the communication.\nIt must match the baudrate of the target device")]),t._v(" "),s("li",[t._v("**Slot[0-15] [int]"),s("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),t._v("*Defines the default value of a slot.\nThis value will be overridden if there is data available at the corresponding input slot")]),t._v(" "),s("li",[t._v("**Slot[0-15]Active [boolean]"),s("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),t._v("*Activate a Slot.\nWhenever a send event occurs the SerialSender will iterate over all Slots beginning with slot 0 and send the data of every Active Slot")]),t._v(" "),s("li",[t._v("**Slot[0-15]Delay [int]"),s("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),t._v("*Defines the delay, the plugin should wait before sending the data of a slot.")])])])}),[],!1,null,null,null);e.default=i.exports}}]);