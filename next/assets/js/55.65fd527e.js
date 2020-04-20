(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1831:function(e,t,o){"use strict";o.r(t);var r=o(21),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"eshoe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#eshoe"}},[e._v("#")]),e._v(" EShoe")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Sensor Modules)")]),e._v(" "),r("p",[e._v("This component provides an interface to the eShoe which is an insole for shoes with sensor inlays, capabale of measuring multiple degrees of freedom (pressure, acceleration and angular velocity) for gait analysis and rehabilitation purposes. See: "),r("a",{attrs:{href:"http://deutsch.ceit.at/ceit-raltec/projekte/aal---eshoe",target:"_blank",rel:"noopener noreferrer"}},[e._v("eShoe-info (german)"),r("OutboundLink")],1),e._v(". The COM Port number for the device must be specified in the plugin properties.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(3120),alt:"Screenshot: EShoe plugin",title:"Screenshot: EShoe plugin"}})]),e._v(" "),r("p",[e._v("EShoe plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("This software component requires an EShoe connected via Bluetooth to a COM Port.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(3121),alt:"EShoe",title:"EShoe"}})]),e._v(" "),r("p",[e._v("Picture of the EShoe")]),e._v(" "),r("p",[r("img",{attrs:{src:o(3122),alt:"Schematic of the EShoe",title:"Schematic of the EShoe"}})]),e._v(" "),r("p",[e._v("Schematic view of the EShoe (left insole), light grey circles mark pressure sensors (big toe (BT), metatarsal head I (M1), metatarsal head V (M5), heel (HE)), the grey box marks the positon of the triaxial acceleration sensor (a) and triaxial gyroscope (ω)."),r("br"),e._v('\nV. David, H. Jagos, S. Litzenberger, and M. Reichel, "Instrumented insole for mobile and long distance motion pattern measurement," Procedia Eng., vol. 34, pp. 760-765, 2012.')]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Channel1 to Channel3 [Short]:")]),e._v(" Output of the acceleration in X, Y and Z direction. The values range for -1285,81632m/s² to 1285,77708m/s².")]),e._v(" "),r("li",[r("strong",[e._v("Channel4 to Channel7 [Unsigned Short]:")]),e._v(" Output of the pressure sensors of heel, metaV, metaI and toe. The unit of the output data is gram.")]),e._v(" "),r("li",[r("strong",[e._v("Channel8 to Channel10 [Short]:")]),e._v(" Output of the gyroscope in X, Y and Z direction. The values range for -2280,6528°/s to 2280,5832°/s.")]),e._v(" "),r("li",[r("strong",[e._v("Channel11 [Short]:")]),e._v(" This is the angle between subsurface and insole of the users foot. The values range for -327,68° to 327,67°.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("COMPort [String]:")]),e._v(" The name of the COM port, for example COM2 or COM17.")]),e._v(" "),r("li",[r("strong",[e._v("SamplingRate [Integer]:")]),e._v(" The sampling rate of the eShoe. Could be chosen between 50Hz and 200Hz.")]),e._v(" "),r("li",[r("strong",[e._v("SDMemory [Boolean]:")]),e._v(" The storage on the SD card in the eShoe can be turned on if checked.")])])])}),[],!1,null,null,null);t.default=a.exports},3120:function(e,t,o){e.exports=o.p+"assets/img/eShoe.5a9af4da.jpg"},3121:function(e,t,o){e.exports=o.p+"assets/img/eShoe_picture.b86aa9aa.jpg"},3122:function(e,t,o){e.exports=o.p+"assets/img/eShoe_schematic.55bb2db4.jpg"}}]);