(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{1442:function(e,t,i){"use strict";i.r(t);var o=i(1),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"wiimote"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wiimote"}},[e._v("#")]),e._v(" WiiMote")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-standard-input-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-standard-input-devices"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Standard Input Devices)")]),e._v(" "),o("p",[e._v("The WiiMote component interfaces to the Nintendo WiiMote controller via Bluetooth and the WiiYourself! library. It provides various sensor values including the Wiimote buttons and the tracked IR-points of the Wiimote IR front camera and the Joystick position of the Nunchuk extension.")]),e._v(" "),o("p",[e._v("Contains WiiYourself! wiimote code by gl.tter - see "),o("a",{attrs:{href:"http://gl.tter.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://gl.tter.org"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("For Wiimote connection and pairing, please see e.g. "),o("a",{attrs:{href:"http://code.google.com/p/giimote/wiki/GettingConnected",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:i(2908),alt:"Screenshot: WiiMote plugin",title:"Screenshot: WiiMote plugin"}}),o("br"),e._v("\nWiiMote plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("A Wiimote controller has to be available and paired with the Bluetooth radio module of the system.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(2909),alt:"WiiMote and Nunchuk",title:"WiiMote and Nunchuk"}}),o("br"),e._v("\nWiiMote and Nunchuk")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("pitch [integer]:")]),e._v(" The calculated pitch orientation of the Wiimote controller (in degrees)")]),e._v(" "),o("li",[o("strong",[e._v("roll [integer]:")]),e._v(" The calculated roll orientation of the Wiimote controller (in degrees)")]),e._v(" "),o("li",[o("strong",[e._v("point1X [integer]:")]),e._v(" The X position of the first visible IR point (0-1023)")]),e._v(" "),o("li",[o("strong",[e._v("point1Y [integer]:")]),e._v(" The Y position of the first visible IR point (0-768)")]),e._v(" "),o("li",[o("strong",[e._v("point2X [integer]:")]),e._v(" The X position of the second visible IR point (0-1023)")]),e._v(" "),o("li",[o("strong",[e._v("point2Y [integer]:")]),e._v(" The Y position of the second visible IR point (0-768)")]),e._v(" "),o("li",[o("strong",[e._v("nunX [integer]:")]),e._v(" The X-position of the analog joystick on the Nunchuk extension (if connected)")]),e._v(" "),o("li",[o("strong",[e._v("nunY [integer]:")]),e._v(" The Y-position of the analog joystick on the Nunchuk extension (if connected)")]),e._v(" "),o("li",[o("strong",[e._v("battery [integer]:")]),e._v(" The battery level (0-100%)")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("pressedUp:")]),e._v(" Up direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedUp:")]),e._v(" Up direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedDown:")]),e._v(" Down direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedDown:")]),e._v(" Down direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedLeft:")]),e._v(" Left direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedLeft:")]),e._v(" Left direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedRight:")]),e._v(" Right direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedRight:")]),e._v(" Right direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedA:")]),e._v(" A direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedA:")]),e._v(" A direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedB:")]),e._v(" B direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedB:")]),e._v(" B direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressed1:")]),e._v(" 1 direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("released1:")]),e._v(" 1 direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressed2:")]),e._v(" 2 direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("released2:")]),e._v(" 2 direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedPlus:")]),e._v(" Plus direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedPlus:")]),e._v(" Plus direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedMinus:")]),e._v(" Minus direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedMinus:")]),e._v(" Minus direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedHome:")]),e._v(" Home direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedHome:")]),e._v(" Home direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedNunchuckC:")]),e._v(" NunchuckC direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedNunchuckC:")]),e._v(" NunchuckC direction button released")]),e._v(" "),o("li",[o("strong",[e._v("pressedNunchuckZ:")]),e._v(" NunchuckZ direction button pressed")]),e._v(" "),o("li",[o("strong",[e._v("releasedNunchuckZ:")]),e._v(" NunchuckZ direction button released")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("updatePeriod [integer]:")]),e._v(" This property defines how often the WiiMote is queried for new data (in milliseconds)")])])])}),[],!1,null,null,null);t.default=r.exports},2908:function(e,t,i){e.exports=i.p+"assets/img/WiiMote.7e82ebda.jpg"},2909:function(e,t,i){e.exports=i.p+"assets/img/WiiMote_picture.0684eac1.jpg"}}]);