(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1858:function(e,t,r){"use strict";r.r(t);var a=r(2),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"razor-imu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#razor-imu"}},[e._v("#")]),e._v(" Razor IMU")]),e._v(" "),a("p",[e._v("Component Type: Sensor (Subcategory: Inertial Measurement)")]),e._v(" "),a("p",[e._v("The RazorIMU plugin provides the serial output of the 9DOF Razor Inertial Measurement Unit at three output ports: pitch, yaw and roll. These three values represent the orientation in terms of rotation along the three axes of the coordinate system.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(3337),alt:"Screenshot: RazorIMU plugin",title:"Screenshot: RazorIMU plugin"}})]),e._v(" "),a("p",[e._v("RazorIMU plugin")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("This plugin requires a 9DOF Razor IMU module connected to the AsTeRICS platform via a UART/USB converter cable (e.g. an FTDI cable) which creates a COM port. The Razor IMU module (and also the converter cable) is available at SparkFun electronics. It has to be updated with the Sparkfun 9DOF Razor IMU AHRS firmware. (The COM port must be determined by looking in the device manager window and cannot be automatically detected like with dedicated AsTeRICS CIMs.) The required baud rate is 57600.")]),e._v(" "),a("p",[a("img",{attrs:{src:r(3338),alt:"RazorIMU",title:"RazorIMU"}})]),e._v(" "),a("p",[e._v("RazorIMU module")]),e._v(" "),a("h2",{attrs:{id:"output-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("pitch [double]:")]),e._v(" The value for the current pitch.")]),e._v(" "),a("li",[a("strong",[e._v("yaw [double]:")]),e._v(" The value for the current yaw.")]),e._v(" "),a("li",[a("strong",[e._v("roll [double]:")]),e._v(" The value for the current roll.")])]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("comPort [String]:")]),e._v(" The name of the COM port the IMU is connected to.")]),e._v(" "),a("li",[a("strong",[e._v("baudRate [integer]:")]),e._v(" The baud rate the IMU is transferring its data at.")]),e._v(" "),a("li",[a("strong",[e._v("operationMode [String]:")]),e._v(" Designates the operation mode (currently only “PitchYawRoll” is available).")])])])}),[],!1,null,null,null);t.default=o.exports},3337:function(e,t,r){e.exports=r.p+"assets/img/RazorIMU.870eca5a.jpg"},3338:function(e,t,r){e.exports=r.p+"assets/img/RazorIMU_picture.a4cedfe8.jpg"}}]);