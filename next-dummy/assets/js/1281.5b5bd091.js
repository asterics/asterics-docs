(window.webpackJsonp=window.webpackJsonp||[]).push([[1281],{1116:function(e,t,i){"use strict";i.r(t);var r=i(21),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"slider"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#slider"}},[e._v("#")]),e._v(" Slider")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Graphical User Interface)")]),e._v(" "),r("p",[e._v("The Slider component generates a slider with adjustable range of values and size on the ARE desktop. This slider can be used to change important parameters of the model during runtime. Furthermore, an incoming signal can be adjusted by the slider component, using a gain factor property.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(3412),alt:"Screenshot: Slider plugin",title:"Screenshot: Slider plugin"}})]),e._v(" "),r("p",[e._v("Slider plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("setValue [integer]:")]),e._v(" Sets the slider position to the incoming value. Note that this value is not propagated to the output port (to avoid loops).")]),e._v(" "),r("li",[r("strong",[e._v("in [double]:")]),e._v(" input port for an incoming signal which can be amplified by the slider component")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("value [integer]:")]),e._v(" This port provides the currently selected slider value (position). Only integer values are possible.")]),e._v(" "),r("li",[r("strong",[e._v("out [double]:")]),e._v(" The amplified (or attenuated) input signal (out = in * gain * slider value)")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("min [integer]:")]),e._v(" The minimum value of the slider range")]),e._v(" "),r("li",[r("strong",[e._v("max [integer]:")]),e._v(" The maximum value of the slider range")]),e._v(" "),r("li",[r("strong",[e._v("default [integer]:")]),e._v(" The defualt position of the slider at model startup (this value is not automatically sent to the port at model startup.")]),e._v(" "),r("li",[r("strong",[e._v("gain [double]:")]),e._v(" The amplification value for an (optional) incoming signal (out = in * gain * slider value)")]),e._v(" "),r("li",[r("strong",[e._v("caption [string]:")]),e._v(" A label for the slider")]),e._v(" "),r("li",[r("strong",[e._v("majorTickspacing [integer]:")]),e._v(" Coarse sections for the slider value captions")]),e._v(" "),r("li",[r("strong",[e._v("minorTickspacing [integer]:")]),e._v(" Fine sections for the slider value captions")]),e._v(" "),r("li",[r("strong",[e._v("alignment [integer, combobox selection]:")]),e._v(" Slider orientation in the GUI, can be horizontal or vertical")]),e._v(" "),r("li",[r("strong",[e._v("fontSize [integer]:")]),e._v(" Font size of the caption")]),e._v(" "),r("li",[r("strong",[e._v("storeValue [boolean]:")]),e._v(" if the storeValue property is enabled, the current value of the slider position is stored and restored when the model is started next time. Note that this overrides the defaultValue property.")]),e._v(" "),r("li",[r("strong",[e._v("displayGUI [boolean]:")]),e._v(" if selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")])])])}),[],!1,null,null,null);t.default=o.exports},3412:function(e,t,i){e.exports=i.p+"assets/img/Slider.5dd042d2.jpg"}}]);