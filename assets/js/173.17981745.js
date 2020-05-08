(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{1003:function(e,t,a){e.exports=a.p+"assets/img/averager.e86f771d.jpg"},655:function(e,t,a){"use strict";a.r(t);var i=a(2),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"averager"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#averager"}},[e._v("#")]),e._v(" Averager")]),e._v(" "),i("p",[e._v("Component Type: Processor (Subcategory: Basic Math)")]),e._v(" "),i("p",[e._v("The averager component takes an input stream and forwards the average of certain amount of buffered last inputs. The size of the buffer can be set via a property. The component can be used to eliminate spikes in an input data stream. Furthermore the unit can also be used as an accumulator which accumulates all inputs within a certain time interval.")]),e._v(" "),i("p",[i("img",{attrs:{src:a(1003),alt:"Screenshot: Averager plugin",title:"Screenshot: Averager plugin"}})]),e._v(" "),i("p",[e._v("Averager plugin")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("input [double]:")]),e._v(" This port reads the inputs to be averaged.")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("output [double]:")]),e._v(" This port provides the current average of the buffered inputs.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("enablePlugin:")]),e._v(" Enables the functionality of this plugin.")]),e._v(" "),i("li",[i("strong",[e._v("disablePlugin:")]),e._v(" Disables the functionality of this plugin. New values aren’t accumulated anymore and no output is sent to the output port. If property autoReenableTime set, the plugin is automatically re-enabled after the time defined by this property. Generally disabling is delayed until the buffer of values is full, preventing any startup glitches.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("enabled [boolean]:")]),e._v(" if true (default), the plugin is enabled, if false the plugin does nothing. Generally disabling is delayed until the buffer of values is full, preventing any startup glitches.")]),e._v(" "),i("li",[i("strong",[e._v("mode [integer]:")]),e._v(" Denotes the operating mode of the unit, three modes are available:\n"),i("ul",[i("li",[i("em",[e._v("average:")]),e._v(" unit performs averaging calculations and emits double values average with integer.")]),e._v(" "),i("li",[i("em",[e._v("output:")]),e._v(" unit performs calculations and rounds result to integer.")]),e._v(" "),i("li",[i("em",[e._v("accumulate:")]),e._v(" unit accumulates inputs for certain amount of time.")])])]),e._v(" "),i("li",[i("strong",[e._v("bufferSize [integer]:")]),e._v(" Specifies the size of the buffer in the averaging modes or the amount of milliseconds to accumulate in the accumulator mode.")]),e._v(" "),i("li",[i("strong",[e._v("autoReenableTime [integer]:")]),e._v(" Time in ms, after the plugin automatically re-enables itself after being disabled. Set to zero (default) to deactivate this functionality (never auto re-enable).")])])])}),[],!1,null,null,null);t.default=r.exports}}]);