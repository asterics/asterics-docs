(window.webpackJsonp=window.webpackJsonp||[]).push([[514],{2129:function(e,t,n){e.exports=n.p+"assets/img/AndroidPhoneControl.c66f2379.jpg"},576:function(e,t,n){"use strict";n.r(t);var r=n(22),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"androidphonecontrol"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#androidphonecontrol"}},[e._v("#")]),e._v(" AndroidPhoneControl")]),e._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-phone-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-phone-interface"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Phone Interface)")]),e._v(" "),r("p",[e._v("This component controls a mobile phone with Android operating system through the TCP/IP connection.\nCurrently this component is able to perform such action as: call a remote phone, drop a phone call, send and receive SMS message.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(2129),alt:"Screenshot: AndroidPhoneControl plugin",title:"Screenshot:\n        AndroidPhoneControl plugin"}}),r("br"),e._v("\nAndroidPhoneControl plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("Android phone running AsTeRICSPhoneServer application.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("phoneID [string]:")]),e._v(" The phone number used for outgoing SMS and make phone calls.")]),e._v(" "),r("li",[r("strong",[e._v("SMSContent [string]:")]),e._v(" The SMS content which will be used for the send SMS action.")]),e._v(" "),r("li",[r("strong",[e._v("command [string]:")]),e._v(" String command that can be sent to this component from other plugins to trigger phone actions.\nCurrently supported commands are:\n"),r("ul",[r("li",[e._v("@PHONE: SMS:Phone_ID, “Message_content”")]),e._v(" "),r("li",[e._v("@PHONE: SMS")]),e._v(" "),r("li",[e._v("@PHONE: CALL: Phone_ID")]),e._v(" "),r("li",[e._v("@PHONE: CALL")]),e._v(" "),r("li",[e._v("@PHONE: ACCEPT")]),e._v(" "),r("li",[e._v("@PHONE: DROP")]),e._v(" "),r("li",[e._v("@PHONE: SET_ID: Phone_ID")]),e._v(" "),r("li",[e._v("@PHONE: SET_SMS: “Message_content”")])])])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("remotePhoneID [string]:")]),e._v(" This is a phone number of the caller or SMS sender.")]),e._v(" "),r("li",[r("strong",[e._v("receivedSMS [string]:")]),e._v(" This is the content of the incoming SMS.")]),e._v(" "),r("li",[r("strong",[e._v("errorNumber [integer]:")]),e._v(" The number of the error.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("sendSMS:")]),e._v(" Sends the SMS message.")]),e._v(" "),r("li",[r("strong",[e._v("makePhoneCall:")]),e._v(" Makes the phone call.")]),e._v(" "),r("li",[r("strong",[e._v("acceptPhoneCall:")]),e._v(" Accepts the incoming phone call.")]),e._v(" "),r("li",[r("strong",[e._v("dropPhoneCall:")]),e._v(" Drops the phone call.")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("idleState:")]),e._v(" Phone is in the idle state.")]),e._v(" "),r("li",[r("strong",[e._v("ringState:")]),e._v(" Phone is in the ring state.")]),e._v(" "),r("li",[r("strong",[e._v("connectedState:")]),e._v(" Phone is connected with the remote phone.")]),e._v(" "),r("li",[r("strong",[e._v("newSMS:")]),e._v(" There is a new SMS.")]),e._v(" "),r("li",[r("strong",[e._v("error:")]),e._v(" An error occurred.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("connectionType [integer]:")]),e._v(" Defines connection type for the plugin: client or server.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("IP [string]:")]),e._v(" IP of the remote server used in the client mode.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("port [integer]:")]),e._v(" TCP/IP port of the service.")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("defaultPhoneID [string]:")]),e._v(" Default phone number for outgoing SMS and phone calls.")])])]),e._v(" "),r("p",[r("a",{attrs:{href:"Android_connection.htm"}},[e._v("Preparation of the connection with Android Phone.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);