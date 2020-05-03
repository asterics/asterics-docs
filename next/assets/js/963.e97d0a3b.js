(window.webpackJsonp=window.webpackJsonp||[]).push([[963],{1580:function(t,e,r){"use strict";r.r(e);var i=r(1),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"integrate"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#integrate"}},[t._v("#")]),t._v(" Integrate")]),t._v(" "),i("h3",{attrs:{id:"component-type-processor-subcategory-basic-math"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-basic-math"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: Basic Math)")]),t._v(" "),i("p",[t._v("The integrate component performs successive addition of incoming signal values. This is useful for transforming relative movement information coming from a sensor into absolute position values.")]),t._v(" "),i("p",[i("img",{attrs:{src:r(3015),alt:"Screenshot: Integrate plugin",title:"Screenshot: Integrate plugin"}}),i("br"),t._v("\nIntegrate plugin")]),t._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("in [double]:")]),t._v(" The input port for signal values.")])]),t._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("out [double]:")]),t._v(" Output of the integrated values.")])]),t._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("reset:")]),t._v(" An incoming event at this port sets the current accumulator value to the rest value (specified in the rest property field).")])]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("resetValue [double]:")]),t._v(" The initial value of the accumulator, which is set when starting the model or when an event comes in at the elp_rest event listener port.")]),t._v(" "),i("li",[i("strong",[t._v("upperLimit [double]:")]),t._v(" The maximum accumulator value (the integration sum will stay at this value and not get higher even if positive values come in at the input port).")]),t._v(" "),i("li",[i("strong",[t._v("lowerLimit [double]:")]),t._v(" The minimum accumulator value (the integration sum will stay at this value and not get lower even if negative values come in at the input port) Upper and lower limit are useful e.g. to set bounds for mouse movement etc.")]),t._v(" "),i("li",[i("strong",[t._v("wrapAround [boolean]:")]),t._v(" If this property is set to true, the accumulator value is set to the lower_limit if it gets greater than the upper_limit (overflow), and to the upper_limit if it would get lower than the lower_limit (underflow).")])])])}),[],!1,null,null,null);e.default=o.exports},3015:function(t,e,r){t.exports=r.p+"assets/img/Integrate.dfb8529f.jpg"}}]);