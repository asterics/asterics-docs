(window.webpackJsonp=window.webpackJsonp||[]).push([[941],{1552:function(e,t,n){"use strict";n.r(t);var s=n(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"deadzone"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deadzone"}},[e._v("#")]),e._v(" Deadzone")]),e._v(" "),s("h3",{attrs:{id:"component-type-processor-subcategory-signal-shaping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-signal-shaping"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Signal Shaping)")]),e._v(" "),s("p",[e._v("The purpose of this component is to define active and passive areas (zones) for one- or two dimensional sensor values. This function could also be called “resting zone” or “centerzone”. It can be useful for example when a mouse pointer should not move before a certain value of a sensor (displacement of an analogue sensor, strength of activity) is reached.")]),e._v(" "),s("p",[s("img",{attrs:{src:n(2995),alt:"Screenshot: Deadzone plugin",title:"Screenshot: Deadzone plugin"}}),s("br"),e._v("\nDeadzone plugin")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("inX [double]:")]),e._v(" Input of x values. "),s("strong",[e._v("This input port supports synchronization")])]),e._v(" "),s("li",[s("strong",[e._v("inY [double]:")]),e._v(" Input of y values. "),s("strong",[e._v("This input port supports synchronization")])]),e._v(" "),s("li",[s("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")])]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("outX [double]:")]),e._v(" Output of modified x values.")]),e._v(" "),s("li",[s("strong",[e._v("outY [double]:")]),e._v(" Output of modified y values.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("setCenter:")]),e._v(" An incoming event stores the current x- and y- input values to represent the centre (It defines them as offset values). This can be useful for sensor calibration because it defines the “baseline” or resting position.")])]),e._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("enterZone:")]),e._v(" This event is triggered when the x or x- and y- values enter the specified radius around the centre.")]),e._v(" "),s("li",[s("strong",[e._v("exitZone:")]),e._v(" This event is triggered when the x or x- and y- values leave the specified radius around the centre.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("xCenter [double]:")]),e._v(" This value defines the x- position of the centre (the middle of the active/passive zones).")]),e._v(" "),s("li",[s("strong",[e._v("yCenter [double]:")]),e._v(" This value defines the y- position of the centre (the middle of the active/passive zones).")]),e._v(" "),s("li",[s("strong",[e._v("radius [double]:")]),e._v(" The radius of the active/passive zone around the centre point.")]),e._v(" "),s("li",[s("strong",[e._v("mode [integer]:")]),e._v(" Selects the mode of operation of the centerzone component, following modes are available:\n"),s("ul",[s("li",[s("em",[e._v("“only inner values”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is lower than the given radius.")]),e._v(" "),s("li",[s("em",[e._v("“only outer values”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the centre is greater than the given radius.")]),e._v(" "),s("li",[s("em",[e._v("“deadzone”:")]),e._v(" x- and y- values are passed to the output ports only if the distance to the center is lower than the given radius, and additionally a correction of the values is performed so that they start with 0 when leaving the inner zone. This is useful for defining a “deadzone” for sensor values, where an inactive area shall be provided and no sudden acceleration is desired when leaving this inactive area.")])])])])])}),[],!1,null,null,null);t.default=o.exports},2995:function(e,t,n){e.exports=n.p+"assets/img/Deadzone.fa4ae800.jpg"}}]);