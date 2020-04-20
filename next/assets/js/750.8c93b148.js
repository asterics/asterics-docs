(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1073:function(e,a,t){"use strict";t.r(a);var r=t(21),i=Object(r.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"bar-display"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bar-display"}},[e._v("#")]),e._v(" Bar Display")]),e._v(" "),r("h3",{attrs:{id:"component-type-actuator-subcategory-graphical-user-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-graphical-user-interface"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Graphical User Interface)")]),e._v(" "),r("p",[e._v("The Bar display generates a coloured bar graph to visualise a current signal value in the ARE environment (of course the LC - display or a computer monitor have to be connected to the platform). The Bar display features auto-scale of value range, display of a threshold value and selectable update rate and foreground / background colours.")]),e._v(" "),r("p",[r("img",{attrs:{src:t(2526),alt:"Screenshot: BarDisplay plugin",title:"Screenshot: BarDisplay plugin"}}),r("br"),e._v("\nBarDisplay plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("Computer Monitor or LC-Display available for graphics output.")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("input [double]:")]),e._v(" The input port for the signal to be displayed.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("displayBuffer [integer]:")]),e._v(" This number specifies how often an update of the bar graph is performed. For example if the display buffer is set to 10, ten values are accumulated and the average value is displayed after the tenth incoming value.")]),e._v(" "),r("li",[r("strong",[e._v("min [double]:")]),e._v(" The default minimum of the signal range at model start (this value is automatically updated as lower values come in).")]),e._v(" "),r("li",[r("strong",[e._v("max [double]:")]),e._v(" The default maximum of the signal range at model start (this value is automatically updated as higher values come in).")]),e._v(" "),r("li",[r("strong",[e._v("threshold [double]:")]),e._v(" This value will be displayed with a marker in the bar graph (if enabled).")]),e._v(" "),r("li",[r("strong",[e._v("displayThreshold [boolean]:")]),e._v(" This property enables (true) or disables (false) the threshold marker in the bar graph.")]),e._v(" "),r("li",[r("strong",[e._v("integerDisplay [boolean]:")]),e._v(" This property selects if double values are rounded to integral values before being displayed in the bar graph.")]),e._v(" "),r("li",[r("strong",[e._v("mode [integer]:")]),e._v(' Via this property the way how values which exceed the current min/max range of the bar graph component are handled: "clip to min and max" crops incoming values to the min/max range, "autoupdate min and max" scales the bar graph window and updates the min/max values to cover the incoming value.')]),e._v(" "),r("li",[r("strong",[e._v("gridColor [integer]:")]),e._v(" The colour of the bar graph grid and descriptions.")]),e._v(" "),r("li",[r("strong",[e._v("barColor [integer]:")]),e._v(" The colour of the bar display.")]),e._v(" "),r("li",[r("strong",[e._v("backgroundColour [integer]:")]),e._v(" The colour of the window background.")]),e._v(" "),r("li",[r("strong",[e._v("fontSize [integer]:")]),e._v(" The font size of the display's caption.")]),e._v(" "),r("li",[r("strong",[e._v("caption [string]:")]),e._v(" The text of the display's caption.")]),e._v(" "),r("li",[r("strong",[e._v("displayGUI [boolean]:")]),e._v(" If selected, the GUI of this component will be displayed - if not, the GUI will be hidden and disabled.")])])])}),[],!1,null,null,null);a.default=i.exports},2526:function(e,a,t){e.exports=t.p+"assets/img/BarDisplay.824890df.jpg"}}]);