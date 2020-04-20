(window.webpackJsonp=window.webpackJsonp||[]).push([[1426],{3705:function(e,t,o){e.exports=o.p+"assets/img/threshold.5ccba1f1.jpg"},412:function(e,t,o){"use strict";o.r(t);var s=o(21),h=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"threshold"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#threshold"}},[e._v("#")]),e._v(" Threshold")]),e._v(" "),s("p",[e._v("Component Type: Processor (Subcategory: Basic Math)")]),e._v(" "),s("p",[e._v("This component takes an input and compares it to a given threshold and generates an according output value dependent on the operation mode. The component allows three operation modes: binary, deadzone and cut off which are described in the property section. The component allows operating with a hysteresis by setting the thresholds for transition from below to above and vice versa differently. Transitions over the thresholds are always evaluated arithmetically thus a below threshold to above transition always happens when the new value is mathematically greater than the threshold while the last input was less than threshold. Respectively the transition from above to below happens when the last value was greater than the threshold value and the new value is less than it. This statement also holds for negative values in the threshold."),s("br"),e._v("\nThe component provides the possibility to raise events on threshold transitions either on below to above, above to below or on both.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(3705),alt:"Screenshot: Threshold plugin",title:"Screenshot: Threshold plugin"}})]),e._v(" "),s("p",[e._v("Threshold plugin")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("in [double]:")]),e._v(" the input to be evaluated.")])]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("out[double]:")]),e._v(" the value that the threshold passes on for the given input.")])]),e._v(" "),s("h2",{attrs:{id:"event-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-port-description"}},[e._v("#")]),e._v(" Event Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("eventPosEdge:")]),e._v(" This event port will trigger an event when the value crosses the thresholdHigh property from below.")]),e._v(" "),s("li",[s("strong",[e._v("eventNegEdge:")]),e._v(" This event port will trigger an event when the value crosses the thresholdLow property from above.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("thresholdHigh [double]:")]),e._v(" The threshold that is checked for transitions from below the threshold to above.")]),e._v(" "),s("li",[s("strong",[e._v("thresholdLow [double]:")]),e._v(" The threshold that is checked for transitions from above the threshold to below. Setting it to the same value as threshold_high will remove the hysteresis from the threshold system.")]),e._v(" "),s("li",[s("strong",[e._v("outputHigh [double]:")]),e._v(" The value to be sent to the output if the input is above the threshold in certain operation modes.")]),e._v(" "),s("li",[s("strong",[e._v("outputLow [double]:")]),e._v(" The value to be sent to the output if the input is below the threshold in certain operation modes (see below).")]),e._v(" "),s("li",[s("strong",[e._v("operationMode [integer]:")]),e._v(" There are three operation modes for the threshold component:\n"),s("ul",[s("li",[s("em",[e._v("binary:")]),e._v(" the output will only generate two different values, the value of output_high if the input is in the range above the threshold and the value of output_low if the input is below the threshold.")]),e._v(" "),s("li",[s("em",[e._v("cutoff:")]),e._v(" the input value will be passed through to the output as long as the value is below the threshold. If the input passes the threshold the output will take on the value set in output_high.v")]),e._v(" "),s("li",[s("em",[e._v("deadzone:")]),e._v(" the input value will be passed through to the output as long as the value is above the threshold. If the input falls below the threshold the output will take on the value set in output_low.")])])]),e._v(" "),s("li",[s("strong",[e._v("eventCondition [integer]:")]),e._v(" This property declares on which types of transitions an event will be raised:\n"),s("ul",[s("li",[s("em",[e._v("Below->above:")]),e._v(" only transitions from below to above threshold raise events.")]),e._v(" "),s("li",[s("em",[e._v("Above->below:")]),e._v(" only transitions from above to below threshold raise events.")]),e._v(" "),s("li",[s("em",[e._v("Both:")]),e._v(" both types of transitions raise events.")])])])])])}),[],!1,null,null,null);t.default=h.exports}}]);