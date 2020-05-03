(window.webpackJsonp=window.webpackJsonp||[]).push([[1434],{3828:function(t,e,n){t.exports=n.p+"assets/img/signaltranslation.77320c23.jpg"},573:function(t,e,n){"use strict";n.r(e);var i=n(1),a=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"signal-translation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#signal-translation"}},[t._v("#")]),t._v(" Signal Translation")]),t._v(" "),i("p",[t._v("Component Type: Processor (Subcategory: Signal Shaping)")]),t._v(" "),i("p",[t._v("The signal translation component is used to translate an input value which resides in a certain value range to a given output range. Interpolation of the position in the output range is done linearly. The component provides two inputs which allow other components to set the minimum and maximum value of the input range.")]),t._v(" "),i("p",[i("img",{attrs:{src:n(3828),alt:"Screenshot: SignalTranslation plugin",title:"Screenshot: SignalTranslation plugin"}})]),t._v(" "),i("p",[t._v("SignalTranslation plugin")]),t._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("in [double]:")]),t._v(" This port receives the input values which will be translated to the new range.")]),t._v(" "),i("li",[i("strong",[t._v("setMax [double]:")]),t._v(" This port sets the value of the input maximum property (inMax) in the component.")]),t._v(" "),i("li",[i("strong",[t._v("setMin [double]:")]),t._v(" This port sets the value of the input minimum property (inMin) in the component.")])]),t._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("out [double]:")]),t._v(" This port sends the translated values corresponding to the output range.")])]),t._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("enterRange:")]),t._v(" This event is generated if the defined input range was entered by the last input value and now inMin < value < inMax holds. It is also fired if inMin or inMax is changed using the corresponding input ports and after this change now inMin < value < inMax newly holds.")]),t._v(" "),i("li",[i("strong",[t._v("exitRangeBelow:")]),t._v(" This event is generated if value < inMin holds and value >= inMin was true for the last value. It is also fired if inMin is changed using the corresponding input port and after this change value < inMin newly holds.")]),t._v(" "),i("li",[i("strong",[t._v("exitRangeAbove:")]),t._v(" This event is generated if value > inMax holds and value <= inMax was true for the last value. It is also fired if inMax is changed using the corresponding input port and after this change value > inMax newly holds.")])]),t._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("inMin [double]:")]),t._v(" Sets the minimum value of the input range, input values below this value will be clipped to the minimum.")]),t._v(" "),i("li",[i("strong",[t._v("inMax [double]:")]),t._v(" Sets the maximum value of the input range, input values above this value will be clipped to the maximum.")]),t._v(" "),i("li",[i("strong",[t._v("outMin [double]:")]),t._v(" Sets the minimum value of the output range.")]),t._v(" "),i("li",[i("strong",[t._v("outMax [double]:")]),t._v(" Sets the maximum value of the output range.")])])])}),[],!1,null,null,null);e.default=a.exports}}]);