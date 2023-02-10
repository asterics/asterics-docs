(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1061:function(t,e,n){"use strict";n.r(e);var o=n(2),s=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"analogout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#analogout"}},[t._v("#")]),t._v(" AnalogOut")]),t._v(" "),e("p",[t._v("Component Type: Actuator (Subcategory: Generic Control Output)")]),t._v(" "),e("p",[t._v("This plugin communicates with the DAC CIM and operates the analog outputs of the module. The plugin provides four input ports which correspond to the four DAC outputs of the CIM.")]),t._v(" "),e("p",[e("img",{attrs:{src:n(615),alt:"Screenshot: AnalogOut plugin",title:"Screenshot: AnalogOut plugin"}})]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("p",[t._v("This software component requires an DAC CIM (CIM ID: 0x0401) connected to an USB port.")]),t._v(" "),e("p",[e("img",{attrs:{src:n(616),alt:"ADC/DAC CIM",title:"ADC/DAC CIM"}})]),t._v(" "),e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("out1 to out4 [integer]:")]),t._v(" these input ports correspond to the DAC output of the same number on the CIM.\nThe input is an integer and has a valid range between 0 and 240.\nThe values represent the output voltage in 100mv steps, e.g. a value of 10 represents 1.0V, 143 represents 14.3V.")]),t._v(" "),e("li",[e("strong",[t._v("uniqueId:")]),t._v(" unique number of the CIM - if more than one CIMs of the same type are used.\nThe module flashes a LED for identification when the ID is selected.")])])])}),[],!1,null,null,null);e.default=s.exports},615:function(t,e,n){t.exports=n.p+"assets/img/analogout.502d9254.jpg"},616:function(t,e,n){t.exports=n.p+"assets/img/analogout_cim.c0b8e23d.jpg"}}]);