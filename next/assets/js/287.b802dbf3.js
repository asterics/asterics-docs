(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{1284:function(e,t,s){"use strict";s.r(t);var o=s(2),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"sensorboard"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#sensorboard"}},[e._v("#")]),e._v(" Sensorboard")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-sensor-modules"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-sensor-modules"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory:Sensor Modules)")]),e._v(" "),o("p",[e._v("This component provides the sensor signals from the Sensorboard CIM module, which has been developed in course of the Master Thesis of Yat-Sin Yeung at the UAS Technikum Wien. The Sensorboard is part of the head-mounted Smart Vision Module setup but can also be used as a stand-alone unit for movement analysis. The Sensorboard contains a 3-axis accelerometer, a 3-axis gyroscope, a 3-axis compass module, one analogue pressure sensor (a sip/puff sensor) and a connection to an optical IR-object tracking sensor which can track the position of up to 4 infrared LEDs in the field of view of the sensor. Furthermore, the Sensorboard contains a USB hub so that a USB camera can be connected.")]),e._v(" "),o("p",[e._v("The sensorboard is necessary for the headpose-compensated eye gaze tracking applications of the SVM. It can be used also for other applications like remote IR-led tracking or as inertial measurement unit. For a detailled description of the Sensorboard and its application for eye-tracking please refer to the files Documentation/DIYGuides/SVM_Eyetracking_Yeung.pdf and Documentation/DIYGuides/SmartVisionModule.pdf")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3031),alt:"Screenshot: Sensorboard plugin",title:"Screenshot: Sensorboard plugin"}}),o("br"),e._v("\nthe Sensorboard plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The Sensorboard has to be connected to an USB port. Design files and firmware of the Sensorboard can be found in the folder CIMs/Sensorboard.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3032),alt:"Screenshot: the Sensorboard PCB",title:"Screenshot: Sensorboard PCB"}}),o("br"),e._v("\nThe Sensorboard PCB")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("accX/Y/Z [integer]:")]),e._v(" the three axis output of the acceleration sensor")]),e._v(" "),o("li",[o("strong",[e._v("gyroX/Y/Z [integer]:")]),e._v(" the three axis output of the gyroscope sensor")]),e._v(" "),o("li",[o("strong",[e._v("compassX/Y/Z [integer]:")]),e._v(" the three axis output of the compass sensor")]),e._v(" "),o("li",[o("strong",[e._v("pt1x - pt4x [integer]:")])]),e._v(" "),o("li",[o("strong",[e._v("pt1y - pt4y [integer]:")]),e._v(" The x/y corrdinates of the IR-LED tracking camera (0-1022, 1023 if no LED detected)")]),e._v(" "),o("li",[o("strong",[e._v("pressure [integer]:")]),e._v(" the output of the pressure (sip/puff) sensor")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("refreshInterval [integer]:")]),e._v(" the refresh interval for sensor values in milliseconds (should not be less than 20).")])])])}),[],!1,null,null,null);t.default=r.exports},3031:function(e,t,s){e.exports=s.p+"assets/img/Sensorboard_plugin.38fd7418.jpg"},3032:function(e,t,s){e.exports=s.p+"assets/img/Sensorboard.0f3cc561.jpg"}}]);