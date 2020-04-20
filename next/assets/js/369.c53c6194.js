(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{3574:function(e,t,n){e.exports=n.p+"assets/img/flickeringlightstimulator.f486f940.jpg"},3575:function(e,t,n){e.exports=n.p+"assets/img/flickeringpanels.8094335e.jpg"},769:function(e,t,n){"use strict";n.r(t);var r=n(21),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("h2",{attrs:{id:"component-type-actuator-subcategory-brain-computer-interface"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-brain-computer-interface"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Brain Computer Interface)")]),e._v(" "),r("p",[e._v("This plug-in allows the user to interact with the Flickering Light Stimulator panels by configuring their properties (stimulation frequency, duty cycle, intensity and colour) and start/stop the light stimulation. The stimulation frequency of the panels can be modified while the stimulation is running.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(3574),alt:"Screenshot: Flickering Light Stimulator plugin",title:"Screenshot: Flickering Light Stimulator plugin"}})]),e._v(" "),r("p",[e._v("Flickering Light Stimulator plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("This software component requires at least one of the four Flickering Light Stimulator panels to be connected to any available COM port. The COM port number to which the panels are connected must be configured in the properties before starting the plugin.")]),e._v(" "),r("p",[r("img",{attrs:{src:n(3575),alt:"Screenshot: Flickering Panels setup",title:"Screenshot: Flickering Panels setup"}})]),e._v(" "),r("p",[e._v("Flickering Panels setup")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("panel1 to panel4 [integer]:")]),e._v(" input ports for the stimulation frequency of each panel in Hertz. Their value ranges from 1 to 50 Hertz.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("startStim:")]),e._v(" starts the stimulation of the flickering light panels when receiving an event.")]),e._v(" "),r("li",[r("strong",[e._v("stopStim:")]),e._v(" stops the stimulation of the flickering light panels when receiving an event.")]),e._v(" "),r("li",[r("strong",[e._v("updateConfiguration:")]),e._v(" updates the configuration of the panels (stimulation frequency, duty cycle, intensity and colour) when receiving an event.")]),e._v(" "),r("li",[r("strong",[e._v("startStimPeriod:")]),e._v(" starts a stimulation of N miliseconds.")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("stimPeriodFinished:")]),e._v(" an event is emitted through this port when the stimulation period of N miliseconds has finished.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("frequencyPanel1 [integer]:")]),e._v(" stimulation frequency of panel 1 in Hertz. This property ranges from 1 to 50 Hertz.")]),e._v(" "),r("li",[r("strong",[e._v("frequencyPanel2 [integer]:")]),e._v(" stimulation frequency of panel 2 in Hertz. This property ranges from 1 to 50 Hertz.")]),e._v(" "),r("li",[r("strong",[e._v("frequencyPanel3 [integer]:")]),e._v(" stimulation frequency of panel 3 in Hertz. This property ranges from 1 to 50 Hertz.")]),e._v(" "),r("li",[r("strong",[e._v("frequencyPanel4 [integer]:")]),e._v(" stimulation frequency of panel 4 in Hertz. This property ranges from 1 to 50 Hertz.")]),e._v(" "),r("li",[r("strong",[e._v("dcPanel1 [integer]:")]),e._v(" duty cycle of panel 1. This property ranges from 1 (short cycle) to 100 (large cycle).")]),e._v(" "),r("li",[r("strong",[e._v("dcPanel2 [integer]:")]),e._v(" duty cycle of panel 2. This property ranges from 1 (short cycle) to 100 (large cycle).")]),e._v(" "),r("li",[r("strong",[e._v("dcPanel3 [integer]:")]),e._v(" duty cycle of panel 3. This property ranges from 1 (short cycle) to 100 (large cycle).")]),e._v(" "),r("li",[r("strong",[e._v("dcPanel4 [integer]:")]),e._v(" duty cycle of panel 4. This property ranges from 1 (short cycle) to 100 (large cycle).")]),e._v(" "),r("li",[r("strong",[e._v("intPanel1 [integer]:")]),e._v(" light intensity of panel 1. This property ranges from 1 (low intensity) to 100 (high intensity).")]),e._v(" "),r("li",[r("strong",[e._v("intPanel2 [integer]:")]),e._v(" light intensity of panel 2. This property ranges from 1 (low intensity) to 100 (high intensity).")]),e._v(" "),r("li",[r("strong",[e._v("intPanel3 [integer]:")]),e._v(" light intensity of panel 3. This property ranges from 1 (low intensity) to 100 (high intensity).")]),e._v(" "),r("li",[r("strong",[e._v("intPanel4 [integer]:")]),e._v(" light intensity of panel 4. This property ranges from 1 (low intensity) to 100 (high intensity).")]),e._v(" "),r("li",[r("strong",[e._v("red [boolean]:")]),e._v(" presence of red colour in all the panels.")]),e._v(" "),r("li",[r("strong",[e._v("blue [boolean]:")]),e._v(" presence of blue colour in all the panels.")]),e._v(" "),r("li",[r("strong",[e._v("green [boolean]:")]),e._v(" presence of green colour in all the panels.")]),e._v(" "),r("li",[r("strong",[e._v("comPort [string]:")]),e._v(" COM port number to which the panels are connected. The string must be expressed as “COMx”, where x is the COM port number.")]),e._v(" "),r("li",[r("strong",[e._v("N [integer]:")]),e._v(" duration in miliseconds of the stimulation started by the startStimPeriod event.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);