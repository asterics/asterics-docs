(window.webpackJsonp=window.webpackJsonp||[]).push([[1387],{3779:function(e,t,n){e.exports=n.p+"assets/img/deadzone.fa4ae800.jpg"},714:function(e,t,n){"use strict";n.r(t);var o=n(1),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"deadzone"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#deadzone"}},[e._v("#")]),e._v(" Deadzone")]),e._v(" "),o("p",[e._v("Component Type: Processor (Subcategory: Signal Shaping)")]),e._v(" "),o("p",[e._v("The purpose of this component is to define active and passive areas (zones) for one- or two dimensional sensor values. This function could also be called “resting zone” or “centerzone”. It can be useful for example when a mouse pointer should not move before a certain value of a sensor (displacement of an analogue sensor, strength of activity) is reached.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(3779),alt:"Screenshot: Deadzone plugin",title:"Screenshot: Deadzone plugin"}})]),e._v(" "),o("p",[e._v("Deadzone plugin")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("inX [double]:")]),e._v(" Input of x values. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("inY [double]:")]),e._v(" Input of y values. "),o("strong",[e._v("This input port supports synchronization")])]),e._v(" "),o("li",[o("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("outX [double]:")]),e._v(" Output of modified x values.")]),e._v(" "),o("li",[o("strong",[e._v("outY [double]:")]),e._v(" Output of modified y values.")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("setCenter:")]),e._v(" An incoming event stores the current x- and y- input values to represent the centre (It defines them as offset values). This can be useful for sensor calibration because it defines the “baseline” or resting position.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("enterZone:")]),e._v(" This event is triggered when the x- and/or y- values enter the active zone. The active zone is the zone, in which values are passed to the output ports, see property ‘mode’.")]),e._v(" "),o("li",[o("strong",[e._v("exitZone:")]),e._v(" This event is triggered when the x- and/or y- values leave the active zone. The active zone is the zone, in which values are passed to the output ports, see property ‘mode’.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("xCenter [double]:")]),e._v(" This value defines the x- position of the centre (the middle of the active/passive zones).")]),e._v(" "),o("li",[o("strong",[e._v("yCenter [double]:")]),e._v(" This value defines the y- position of the centre (the middle of the active/passive zones).")]),e._v(" "),o("li",[o("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")]),e._v(" "),o("li",[o("strong",[e._v("mode [integer]:")]),e._v(" Selects the mode of operation of the centerzone component, following modes are available:\n"),o("ul",[o("li",[o("em",[e._v("“only inner values”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is lower than the given radius.")]),e._v(" "),o("li",[o("em",[e._v("“only outer values”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is greater than the given radius.")]),e._v(" "),o("li",[o("em",[e._v("“deadzone”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the center is greater than the given radius, and additionally a correction of the values is performed so that they start with 0 when leaving the inner zone. This is useful for defining a “deadzone” for sensor values, where an inactive area shall be provided and no sudden acceleration is desired when leaving this inactive area.")])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);