(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{568:function(e,i,o){e.exports=o.p+"assets/img/oscilloscope.1a3665f5.jpg"},991:function(e,i,o){"use strict";o.r(i);var t=o(15),s=Object(t.a)({},function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"oscilloscope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oscilloscope","aria-hidden":"true"}},[e._v("#")]),e._v(" Oscilloscope")]),e._v(" "),t("p",[e._v("Component Type: Actuator (Subcategory: Graphical User Interface)")]),e._v(" "),t("p",[e._v("The Oscilloscope provides graphical output of one or two signal values. It is a very basic implementation but useful to visualize sensor values, changes in values and value history. The trace colours and update speed can be configured via component parameters.")]),e._v(" "),t("p",[t("img",{attrs:{src:o(568),alt:"Screenshot: Oscilloscope plugin",title:"Screenshot: Oscilloscope plugin"}})]),e._v(" "),t("p",[e._v("Oscilloscope plugin")]),e._v(" "),t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description","aria-hidden":"true"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("in [double]:")]),e._v(" The input signal for the oscilloscope.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties","aria-hidden":"true"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("displayBuffer [integer]:")]),e._v(" This property value specifies how often the oscilloscope window is drawn. For example if the display buffer size is 0, the oscilloscope traces are redrawn at every incoming value. If the display buffer size is set to 10, 10 values are stored in a buffer and drawn at once as the tenth value is received. This significantly reduces the computational resources spent for drawing the oscilloscope, which is useful especially at high update rates.")]),e._v(" "),t("li",[t("strong",[e._v("drawingMode [integer]:")]),e._v(" Declares whether the y axis is adapting to mininum and maximum values automatically or to stay in preset bounds.")]),e._v(" "),t("li",[t("strong",[e._v("displayMode [integer]:")]),e._v(' Affects the time when oscilloscope is redrawn. Can be set to the values "redraw on incoming samples" or "redraw periodically".')]),e._v(" "),t("li",[t("strong",[e._v("drawInterval [integer]:")]),e._v(" Redraw interval in milliseconds (if periodic drawing is used).")]),e._v(" "),t("li",[t("strong",[e._v("min [integer]:")]),e._v(" Preset minimum value for y axis of oscilloscope.")]),e._v(" "),t("li",[t("strong",[e._v("max [integer]:")]),e._v(" Preset maximum value for y axis of oscilloscope.")]),e._v(" "),t("li",[t("strong",[e._v("gridColor [integer]:")]),e._v(" The colour of the value-grid.")]),e._v(" "),t("li",[t("strong",[e._v("channelColor [integer]:")]),e._v(" The colour of the signal trace for the channel.")]),e._v(" "),t("li",[t("strong",[e._v("backgroundColor [integer]:")]),e._v(" The colour of the background of the oscilloscope window.")]),e._v(" "),t("li",[t("strong",[e._v("fontSize [integer]:")]),e._v(" The size of the oscilloscope's caption.")]),e._v(" "),t("li",[t("strong",[e._v("caption [string]:")]),e._v(" The caption to be displayed on the oscilloscope.")]),e._v(" "),t("li",[t("strong",[e._v("displayGUI [boolean]:")]),e._v(" If selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")])]),e._v(" "),t("EditLink")],1)},[],!1,null,null,null);i.default=s.exports}}]);