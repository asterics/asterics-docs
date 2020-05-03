(window.webpackJsonp=window.webpackJsonp||[]).push([[788],{1220:function(e,t,o){"use strict";o.r(t);var s=o(1),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"oscilloscope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oscilloscope"}},[e._v("#")]),e._v(" Oscilloscope")]),e._v(" "),s("h3",{attrs:{id:"component-type-actuator-subcategory-graphical-user-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-graphical-user-interface"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Graphical User Interface)")]),e._v(" "),s("p",[e._v("The Oscilloscope provides graphical output of one or two signal values. It is a very basic implementation but useful to visualize sensor values, changes in values and value history. The trace colours and update speed can be configured via component parameters.")]),e._v(" "),s("p",[s("img",{attrs:{src:o(2730),alt:"Screenshot: Oscilloscope plugin",title:"Screenshot: Oscilloscope plugin"}}),s("br"),e._v("\nOscilloscope plugin")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("in [double]:")]),e._v(" The input signal for the oscilloscope.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("displayBuffer [integer]:")]),e._v(" This property value specifies how often the oscilloscope window is drawn. For example if the display buffer size is 0, the oscilloscope traces are redrawn at every incoming value. If the display buffer size is set to 10, 10 values are stored in a buffer and drawn at once as the tenth value is received. This significantly reduces the computational resources spent for drawing the oscilloscope, which is useful especially at high update rates.")]),e._v(" "),s("li",[s("strong",[e._v("drawingMode [integer]:")]),e._v(" Declares whether the y axis is adapting to mininum and maximum values automatically or to stay in preset bounds.")]),e._v(" "),s("li",[s("strong",[e._v("displayMode [integer]:")]),e._v(" Affects the time when oscilloscope is redrawn. Can be set to the values “redraw on incoming samples” or “redraw periodically”.")]),e._v(" "),s("li",[s("strong",[e._v("drawInterval [integer]:")]),e._v(" Redraw interval in milliseconds (if periodic drawing is used).")]),e._v(" "),s("li",[s("strong",[e._v("min [integer]:")]),e._v(" Preset minimum value for y axis of oscilloscope.")]),e._v(" "),s("li",[s("strong",[e._v("max [integer]:")]),e._v(" Preset maximum value for y axis of oscilloscope.")]),e._v(" "),s("li",[s("strong",[e._v("gridColor [integer]:")]),e._v(" The colour of the value-grid.")]),e._v(" "),s("li",[s("strong",[e._v("channelColor [integer]:")]),e._v(" The colour of the signal trace for the channel.")]),e._v(" "),s("li",[s("strong",[e._v("backgroundColor [integer]:")]),e._v(" The colour of the background of the oscilloscope window.")]),e._v(" "),s("li",[s("strong",[e._v("fontSize [integer]:")]),e._v(" The size of the oscilloscope’s caption.")]),e._v(" "),s("li",[s("strong",[e._v("caption [string]:")]),e._v(" The caption to be displayed on the oscilloscope.")]),e._v(" "),s("li",[s("strong",[e._v("displayGUI [boolean]:")]),e._v(" If selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")])])])}),[],!1,null,null,null);t.default=i.exports},2730:function(e,t,o){e.exports=o.p+"assets/img/Oscilloscope.1a3665f5.jpg"}}]);