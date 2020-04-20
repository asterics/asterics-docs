(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{2006:function(e,t,i){e.exports=i.p+"assets/img/BasicTRalgorithms.e1416158.jpg"},428:function(e,t,i){"use strict";i.r(t);var r=i(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"basic-tremor-reduction-algorithms"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#basic-tremor-reduction-algorithms"}},[e._v("#")]),e._v(" Basic Tremor Reduction algorithms")]),e._v(" "),r("h3",{attrs:{id:"component-type-processor-subcategory-singal-shaping"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-singal-shaping"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Singal Shaping)")]),e._v(" "),r("p",[e._v("This plugin contains three algorithms for user hand tremor reduction: Arithmetic Mean, Outlier Reduction and Exponential Smoothing. The Arithmetic Mean algorithm calculates the cursor position as an average of the past n cursor positions. N is defined by the bufferSize parameter. The Outlier Reduction algorithm keeps the maximum distance between two followed cursor positions. The maximum distance is defined by the maxDistance parameter. If the distance between two cursor positions is greater than maxDistance, it is reduced to the value of maxDistance. The Exponential Smoothing algorithm implements the "),r("a",{attrs:{href:"http://en.wikipedia.org/wiki/Exponential_smoothing",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exponential smoothing"),r("OutboundLink")],1),e._v(" technique. The factor parameter defines the Exponential Smoothing and the degree parameters define the degree of the equation.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(2006),alt:"Screenshot: Basic Tremor Reduction algorithms plugin",title:"Screenshot: Basic Tremor Reduction algorithms plugin"}}),r("br"),e._v("\nBasic Tremor Reduction algorithms plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("inputX [integer]:")]),e._v(" Input mouse X position.")]),e._v(" "),r("li",[r("strong",[e._v("inputY [integer]:")]),e._v(" Input mouse Y position.")]),e._v(" "),r("li",[r("strong",[e._v("bufferSize [integer]:")]),e._v(" The new buffer size value for the Arithmetic Mean algorithm.")]),e._v(" "),r("li",[r("strong",[e._v("maxDistance [double]:")]),e._v(" The new maximum distance value for the Outlier Reduction algorithm.")]),e._v(" "),r("li",[r("strong",[e._v("factor [double]:")]),e._v(" The new factor value for Exponential Smoothing algorithm.")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("outputX [**"),r("strong",[e._v("integer*")]),e._v("*]:")]),e._v(" Output mouse X position.")]),e._v(" "),r("li",[r("strong",[e._v("outputY [**"),r("strong",[e._v("integer*")]),e._v("*]:")]),e._v(" Output mouse Y position.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("algorithm [integer]:")]),e._v(" Defines the algorithm used for the tremor reduction.")]),e._v(" "),r("li",[r("strong",[e._v("eventsType [integer]:")]),e._v(" Defines if the mouse coordinates are absolute or relative.")]),e._v(" "),r("li",[r("strong",[e._v("bufferSize [integer]:")]),e._v(" The buffer size value for the Arithmetic Mean algorithm.")]),e._v(" "),r("li",[r("strong",[e._v("maxDistance [double]:")]),e._v(" The maximum distance value for the Outlier Reduction algorithm.")]),e._v(" "),r("li",[r("strong",[e._v("factor [double]:")]),e._v(" The factor value for Exponential Smoothing algorithm.")]),e._v(" "),r("li",[r("strong",[e._v("degree [integer]:")]),e._v(" The degree of the equation for Exponential Smoothing algorithm.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);