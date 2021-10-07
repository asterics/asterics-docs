(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1049:function(e,t,n){e.exports=n.p+"assets/img/phonecontrol.738f8590.jpg"},542:function(e,t,n){"use strict";n.r(t);var o=n(3),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"phone-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#phone-control"}},[e._v("#")]),e._v(" Phone Control")]),e._v(" "),o("p",[e._v("Component Type: Actuator (Subcategory: Phone Interface)")]),e._v(" "),o("p",[e._v("This component controls a mobile phone with Windows Mobile operating system (v. 5.0 and above) through a Bluetooth connection. Currently supported functions are: Calling a phone number and accepting an incoming call, sending and receiving SMS messages. These functions can either be triggered by incoming events or by sending string commands to the phone plugin.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(1049),alt:"Screenshot: PhoneControl plugin",title:"Screenshot: PhoneControl plugin"}})]),e._v(" "),o("p",[e._v("PhoneControl plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("A Phone running Windows Mobile, a Bluetooth dongle or Bluetooth HW support, Microsoft Bluetooth stack active. AsTeRICS Phone server application running on the mobile phone.")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("phoneID [string]:")]),e._v(" This is the phone number which will be used for actions like: send SMS, make phone call.")]),e._v(" "),o("li",[o("strong",[e._v("SMSContent [string]:")]),e._v(" This is the SMS content which will be used for sending SMS action.")]),e._v(" "),o("li",[o("strong",[e._v("command [string]:")]),e._v(" String command that can be sent to this component from other plugins to trigger phone actions. Currently supported commands are:\n"),o("ul",[o("li",[e._v("@PHONE: SMS:Phone_ID, “Message_content”")]),e._v(" "),o("li",[e._v("@PHONE: CALL: Phone_ID")]),e._v(" "),o("li",[e._v("@PHONE: ACCEPT")]),e._v(" "),o("li",[e._v("@PHONE: DROP")])])])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("remotePhoneID [string]:")]),e._v(" This is a phone number of the caller or SMS sender.")]),e._v(" "),o("li",[o("strong",[e._v("receivedSMS [string]:")]),e._v(" This is the content of the incoming SMS.")]),e._v(" "),o("li",[o("strong",[e._v("errorNumber [integer]:")]),e._v(" The number of the error.")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("sendSMS:")]),e._v(" Sends SMS.")]),e._v(" "),o("li",[o("strong",[e._v("makePhoneCall:")]),e._v(" Makes the phone call.")]),e._v(" "),o("li",[o("strong",[e._v("acceptPhoneCall:")]),e._v(" Accepts the incoming phone call.")]),e._v(" "),o("li",[o("strong",[e._v("dropPhoneCall:")]),e._v(" Drops the phone call.")]),e._v(" "),o("li",[o("strong",[e._v("reconnect:")]),e._v(" Reconnects the phone.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("idleState:")]),e._v(" Phone is in the idle state.")]),e._v(" "),o("li",[o("strong",[e._v("ringState:")]),e._v(" Phone is in the ring state.")]),e._v(" "),o("li",[o("strong",[e._v("connectedState:")]),e._v(" Phone is connected with the remote phone.")]),e._v(" "),o("li",[o("strong",[e._v("newSMS:")]),e._v(" There is a new SMS.")]),e._v(" "),o("li",[o("strong",[e._v("error:")]),e._v(" The error occurs.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("defaultPhoneID [string]:")]),e._v(" This is a default phone number, which will be used for send SMS and make phone call actions.")]),e._v(" "),o("li",[o("strong",[e._v("bluetoothPhoneName [string]:")]),e._v(" This is a Bluetooth name of the phone which the component will connect.")]),e._v(" "),o("li",[o("strong",[e._v("port [integer]:")]),e._v(" This is a Bluetooth port number.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);