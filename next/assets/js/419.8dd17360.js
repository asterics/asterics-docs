(window.webpackJsonp=window.webpackJsonp||[]).push([[419],{376:function(e,t,n){"use strict";n.r(t);var i=n(2),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"openvibe"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#openvibe"}},[e._v("#")]),e._v(" OpenVibe")]),e._v(" "),i("p",[e._v("Component Type: Sensor (Subcategory: Bioelectric Measurement)")]),e._v(" "),i("p",[e._v("The OpenVibe plugin allows obtaining data from a connection to the OpenVibe BCI software which is currently one of the most prominent BCI frameworks. OpenVibe supports a wide range of biosignal and EEG acquisition devices and provides sophisticated signal processor training and classification algorithms. The graphical design concept is similar to the ACS, and plugins can be committed by the open source community."),i("br"),e._v("\nTo send data from OpenVibe to the ARE plugin, a dedicated OpenVibe Plugin called �AsTeRICS connection� has been created. This OpenVibe plugin sends up to 16 channels of signal data and up to 61 different stimulation events to the ARE plugin via a UDP connection, by using the Open Sound Control (OSC) protocol. The following figure shows this communication flow.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3886),alt:"Screenshot: data flow from OpenVibe to AsTeRICS",title:"Screenshot: data flow from OpenVibe to AsTeRICS"}})]),e._v(" "),i("p",[e._v("Data flow from OpenVibe to AsTeRICS")]),e._v(" "),i("h2",{attrs:{id:"requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),i("p",[e._v("The OpenVibe framework has to be installed and the AsTeRICS connection plugin must be available (this means that OpenVibe has to be built from sources and the AsTeRICS connection plugin is included in the build process). Furthermore, the correct UDP port must be set in the properties of both plugins, and the ARE plugin has to be running when OpenVibe is started (because the ARE plugin acts as server and opens a listening port).")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3887),alt:"Screenshot: OpenVibe plugin",title:"Screenshot: OpenVibe plugin"}})]),e._v(" "),i("p",[e._v("OpenVibe plugin")]),e._v(" "),i("h2",{attrs:{id:"output-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),i("ul",[i("li",[e._v("**CH1 - CH16 [double]"),i("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*these are the output ports for the OpenVibe signals. Up to 16 signals can be sent")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("OVTK_StimulationId_Label_00 - 0C")]),e._v("\n*** OVTK_StimulationId_Letter_0 - Z")]),e._v(" "),i("li",[e._v("OVTK_StimulationId_Label_Target")]),e._v(" "),i("li",[e._v("OVTK_StimulationId_Label_NonTarget**")])]),e._v(" "),i("p",[e._v("These are the Event triggers which can be linked to the corresponding OpenVibe Stimulation IDs. In total, 56 different stimulations can be processed.")]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("Port [integer]:")]),e._v(" the UPD port which is opened by the AsTeRICS plugin to wait for the OpenVibe connection")])])])}),[],!1,null,null,null);t.default=s.exports},3886:function(e,t,n){e.exports=n.p+"assets/img/openvibe_flow.4c88d4f6.jpg"},3887:function(e,t,n){e.exports=n.p+"assets/img/openvibe.5fca2f7b.jpg"}}]);