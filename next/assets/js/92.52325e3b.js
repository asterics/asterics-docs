(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{2001:function(e,t,n){e.exports=n.p+"assets/img/AdjustmentCurve.f9b5bfd5.jpg"},2002:function(e,t,n){e.exports=n.p+"assets/img/AdjustmentCurve1.ffe23a80.jpg"},420:function(e,t,n){"use strict";n.r(t);var i=n(22),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"adjustmentcurve"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#adjustmentcurve"}},[e._v("#")]),e._v(" AdjustmentCurve")]),e._v(" "),i("h3",{attrs:{id:"component-type-processor-subcategory-signal-shaping"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-signal-shaping"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Signal Shaping)")]),e._v(" "),i("p",[e._v("The AdjustmentCurve component allows transformation of an incoming signal to an outgoing signal. The signal mapping can be freely arranged in a drawing window (GUI) during runtime of the model. The resulting mapping can be saved as a curve file. The GUI is optional - an existing curve can be loaded to perform the signal mapping without the GUI.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(2001),alt:"Screenshot: AdjustmentCurve plugin",title:"Screenshot: AdjustmentCurve plugin"}}),i("br"),e._v("\nAdjustmentCurve plugin")]),e._v(" "),i("p",[i("img",{attrs:{src:n(2002),alt:"Screenshot: AdjustmentCurve GUI during runtime",title:"Screenshot: AdjustmentCurve GUI during runtime"}}),i("br"),e._v("\nAdjustmentCurve GUI during runtime")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("in [double]:")]),e._v(" This port receives the input values which will be mapped to output values.")]),e._v(" "),i("li",[i("strong",[e._v("CurveName [string]:")]),e._v(" When this port receives a string, the plugin tries to load a curve file of this name from the plugin’s data subdirectory (ARE/data/processor.adjustmentcurve).")])]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("out [double]:")]),e._v(" This port provides the resulting output value.")])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("displayGui:")]),e._v(" An incoming event makes the GUI visible.")]),e._v(" "),i("li",[i("strong",[e._v("hideGui:")]),e._v(" An incoming event makes the GUI invisible.")]),e._v(" "),i("li",[i("strong",[e._v("loadCurve:")]),e._v(" An incoming event loads a curve of the current filename (as given in the plugin property or received from the input port “curveName”).")]),e._v(" "),i("li",[i("strong",[e._v("saveCurve:")]),e._v(" An incoming event saves the current mapping curve under the given filename. This event has teh same function like the “save”-button which is available in the GUI window of the plugin.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("filename [string]:")]),e._v(" The filename of the curve file. If the curve file exists in the plugin’s subdirectory (ARE/data/processor.adjustmentcurve), this curve is loaded. If the file does not exist, a new curve can be drawn in the GUI and saved under this name into the plugin’s data subfolder (ARE/data/processor.adjustmentcurve).")]),e._v(" "),i("li",[i("strong",[e._v("display GUI [boolean]:")]),e._v(" If checked, the GUI of the adjustment curve plugin will be shown and the user can modify and save the curve in real time by dragging, creating or deleting curve points.")]),e._v(" "),i("li",[i("strong",[e._v("intMin [double]:")]),e._v(" Sets the minimum value of the input range.")]),e._v(" "),i("li",[i("strong",[e._v("outMax [double]:")]),e._v(" Sets the maximum value of the input range.")]),e._v(" "),i("li",[i("strong",[e._v("outMin [double]:")]),e._v(" Sets the minimum value of the output range.")]),e._v(" "),i("li",[i("strong",[e._v("outMax [double]:")]),e._v(" Sets the maximum value of the output range.")]),e._v(" "),i("li",[i("strong",[e._v("mode [combobox]:")]),e._v(" “autoupdate min and max” modifies the input range if incoming values exceed the current minimum or maximum, “clip to min and max” which keeps the values as set by the min/max properties.")]),e._v(" "),i("li",[i("strong",[e._v("fontSize [integer]:")]),e._v(" The size of the font for dispaying text in the GUI.")]),e._v(" "),i("li",[i("strong",[e._v("caption [string]:")]),e._v(" The caption of the AdjustmentCurve GUI.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);