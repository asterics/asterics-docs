(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1002:function(t,e,o){"use strict";o.r(e);var i=o(2),a=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dotmeter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dotmeter"}},[t._v("#")]),t._v(" DotMeter")]),t._v(" "),e("p",[t._v("Component Type: Actuator (Subcategory: Graphical User Interface)")]),t._v(" "),e("p",[t._v("The Dot Meter generates a graphical representation of a 2-dimensional signal (for example x/y-coordinates) using a colored dot.")]),t._v(" "),e("p",[e("img",{attrs:{src:o(560),alt:"Screenshot: DotMeter plugin",title:"Screenshot: DotMeter plugin"}})]),t._v(" "),e("p",[e("img",{attrs:{src:o(561),alt:"Screenshot: DotMeter example",title:"Screenshot: DotMeter example"}})]),t._v(" "),e("h2",{attrs:{id:"requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),e("p",[t._v("Computer Monitor or LC-Display available for graphics output.")]),t._v(" "),e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("x [double]:")]),t._v(" The x-input port for the signal to be displayed. "),e("strong",[t._v("This input port supports synchronization")])]),t._v(" "),e("li",[e("strong",[t._v("y [double]:")]),t._v(" The y-input port for the signal to be displayed. "),e("strong",[t._v("This input port supports synchronization")])])]),t._v(" "),e("h2",{attrs:{id:"event-listener-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description:")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("dotOn:")]),t._v(" fill the dot with color.")]),t._v(" "),e("li",[e("strong",[t._v("dotOff:")]),t._v(" show only outline of the dot (can be used to create a led indicator).")])]),t._v(" "),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("xMin [double]:")]),t._v(" The default x-minimum of the signal range at model start (this value is automatically updated as lower values come in).")]),t._v(" "),e("li",[e("strong",[t._v("xMax [double]:")]),t._v(" The default x-maximum of the signal range at model start (this value is automatically updated as higher values come in).")]),t._v(" "),e("li",[e("strong",[t._v("yMin [double]:")]),t._v(" The default y-minimum of the signal range at model start (this value is automatically updated as lower values come in).")]),t._v(" "),e("li",[e("strong",[t._v("yMax [double]:")]),t._v(" The default y-maximum of the signal range at model start (this value is automatically updated as higher values come in).")]),t._v(" "),e("li",[e("strong",[t._v("mode [integer]:")]),t._v(" Via this property the way how values which exceed the current min/max range of the bar graph component are handled: “clip to min and max” crops incoming values to the min/max range, “autoupdate min and max” scales the bar graph window and updates the min/max values to cover the incoming value.")]),t._v(" "),e("li",[e("strong",[t._v("dotSize [integer]:")]),t._v(" The radius of the dot.")]),t._v(" "),e("li",[e("strong",[t._v("centerLine [boolean]:")]),t._v(" defines if a line to the window center is shown or not.")]),t._v(" "),e("li",[e("strong",[t._v("displayDot [boolean]:")]),t._v(" defines if the dot is filled or not.")]),t._v(" "),e("li",[e("strong",[t._v("displayCaptions [boolean]:")]),t._v(" defines if the value / captions are shown or not.")]),t._v(" "),e("li",[e("strong",[t._v("gridColor [integer]:")]),t._v(" The colour of the graph grid and descriptions.")]),t._v(" "),e("li",[e("strong",[t._v("dotColor [integer]:")]),t._v(" The colour of the dot.")]),t._v(" "),e("li",[e("strong",[t._v("backgroundColour [integer]:")]),t._v(" The colour of the window background.")]),t._v(" "),e("li",[e("strong",[t._v("fontSize [integer]:")]),t._v(" The font size of the display’s caption.")]),t._v(" "),e("li",[e("strong",[t._v("caption [string]:")]),t._v(" The text of the display’s caption.")]),t._v(" "),e("li",[e("strong",[t._v("displayGUI [boolean]:")]),t._v(" if selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")])])])}),[],!1,null,null,null);e.default=a.exports},560:function(t,e,o){t.exports=o.p+"assets/img/dotmeter.f1cc0200.jpg"},561:function(t,e,o){t.exports=o.p+"assets/img/dotmeter_example.6039baa6.jpg"}}]);