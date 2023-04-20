(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{288:function(e,t,s){e.exports=s.p+"assets/img/quickstart11.c2ae8b7e.png"},439:function(e,t,s){e.exports=s.p+"assets/img/simple-model-labelled.8f5c2c7f.png"},440:function(e,t,s){e.exports=s.p+"assets/img/asterics-program-overview.e1002930.svg"},441:function(e,t,s){e.exports=s.p+"assets/img/web-acs-empty.276c001e.png"},442:function(e,t,s){e.exports=s.p+"assets/img/ARE-startscreen.c800dec4.png"},993:function(e,t,s){"use strict";s.r(t);var a=s(2),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"asterics-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asterics-overview"}},[e._v("#")]),e._v(" AsTeRICS Overview")]),e._v(" "),t("p",[e._v("This pages explains the most important terms and elements of the AsTeRICS framework.")]),e._v(" "),t("h2",{attrs:{id:"terms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terms"}},[e._v("#")]),e._v(" Terms")]),e._v(" "),t("p",[e._v("The most important terms are described below.")]),e._v(" "),t("h3",{attrs:{id:"asterics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asterics"}},[e._v("#")]),e._v(" AsTeRICS")]),e._v(" "),t("p",[e._v("The term AsTeRICS stands for "),t("strong",[e._v("As")]),e._v("sistive "),t("strong",[e._v("Te")]),e._v("chnology "),t("strong",[e._v("R")]),e._v("apid "),t("strong",[e._v("I")]),e._v("ntegration and "),t("strong",[e._v("C")]),e._v("onstruction "),t("strong",[e._v("S")]),e._v("et and allows the creation of customized low-cost Assistive Technologies.")]),e._v(" "),t("h3",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("p",[e._v("The AsTeRICS framework provides some selected "),t("RouterLink",{attrs:{to:"/solutions/"}},[e._v("solutions")]),e._v(" which can be used out of the box. The solutions are grouped by "),t("strong",[e._v("use cases")]),e._v(" and can be directly started from the solutions page. Some solutions depend on certain "),t("a",{attrs:{href:"#input-device"}},[e._v("input devices")]),e._v(" or other hardware and software. Just click on the "),t("code",[e._v("Read More")]),e._v(" button in a solution’s tile to get a detailed step by step instruction of how to install and use it.")],1),e._v(" "),t("p",[e._v("A solution can be categorized by the AsTeRICS technology used. It can be a "),t("a",{attrs:{href:"#model"}},[e._v("model")]),e._v(", an "),t("a",{attrs:{href:"#asterics-grid"}},[e._v("AsTERICS Grid")]),e._v(" or an "),t("a",{attrs:{href:"#at-solution"}},[e._v("AT solution")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model"}},[e._v("#")]),e._v(" Model")]),e._v(" "),t("p",[e._v("A model represents a simple Assistive Technology (AT). It is used to define "),t("strong",[e._v("what")]),e._v(" should be done (e.g. mouse control, switching light on/off) and "),t("strong",[e._v("how")]),e._v(" this can be done (e.g. button-press, head movement,…). A model uses "),t("a",{attrs:{href:"#plugin"}},[e._v("plugins")]),e._v(" to support input devices (e.g. webcam, switch,…) and required actions. On the image below you can see the XFaceTrackerLK plugin which uses the webcam to track the movements of your head. This gesture is directly translated to mouse movements by connecting the XFaceTrackerLK plugin to the Mouse plugin.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(439),alt:"Model with a webcam plugin as input device and a mouse action plugin"}})]),e._v(" "),t("h3",{attrs:{id:"plugin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[e._v("#")]),e._v(" Plugin")]),e._v(" "),t("p",[e._v("A plugin represents a modular component that can be used within a model.\nIt can be an input device (sensor), a processor (processing, modifying data) or an action (actuator).")]),e._v(" "),t("h3",{attrs:{id:"input-device"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-device"}},[e._v("#")]),e._v(" Input Device")]),e._v(" "),t("p",[e._v("AsTeRICS supports numerous input devices like a switch, a webcam or an eye-tracker. The list of supported devices can be found under "),t("RouterLink",{attrs:{to:"/plugins/"}},[e._v("Plugins/Sensors")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[e._v("#")]),e._v(" Action")]),e._v(" "),t("p",[e._v("The actions that are executed by a model are implemented using actuator plugins, which can be found under "),t("RouterLink",{attrs:{to:"/plugins/"}},[e._v("Plugins/Actuators")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"asterics-grid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asterics-grid"}},[e._v("#")]),e._v(" AsTeRICS Grid")]),e._v(" "),t("p",[e._v("The AsTeRICS Grid is a web-based user interface which can be used for Augmentative and Alternative Communication (AAC). It is available on "),t("a",{attrs:{href:"https://grid.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://grid.asterics.eu"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Grids can be defined in a flexible layout of cells acting as buttons. The cells show text and images/symbols and if one of them is selected a defined phrase can be spoken (text-to-speech). A grid can also be connected to a model and be used to trigger actions like switching lights on/off.")]),e._v(" "),t("p",[t("img",{attrs:{src:"/assets/img/AsTeRICS-Ergo_Grid_en-1-768x592.jpg",alt:"Grid with symbols for Alternative and Augmentative Communication"}})]),e._v(" "),t("p",[e._v("For more information about how to use the AsTeRICS Grid, please read the "),t("RouterLink",{attrs:{to:"/manuals/asterics-grid/"}},[e._v("user manual")]),e._v(".")],1),e._v(" "),t("h3",{attrs:{id:"at-solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#at-solution"}},[e._v("#")]),e._v(" AT Solution")]),e._v(" "),t("p",[e._v("An AT solution is a more complex Assistive Technology and may be comprised of several models, grids, images or web user interfaces. An AT solution can be seen as a standalone SW application, that allows easier customization and configuration for the end user.")]),e._v(" "),t("h2",{attrs:{id:"programs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#programs"}},[e._v("#")]),e._v(" Programs")]),e._v(" "),t("p",[e._v("AsTeRICS consists of several executable programs.")]),e._v(" "),t("p",[t("img",{attrs:{src:s(440),alt:"Diagram showing ACS and ARE interaction."}})]),e._v(" "),t("h3",{attrs:{id:"acs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acs"}},[e._v("#")]),e._v(" ACS")]),e._v(" "),t("p",[e._v("The AsTeRICS Configuration Suite (ACS) is a graphical editor for easy designing and testing model files. A model file can be saved to a file or uploaded to the "),t("a",{attrs:{href:"#are"}},[e._v("ARE")]),e._v(" to execute it. Likewise, a model can be downloaded from the ARE to be changed or customized. Furthermore, the ACS allows to remote control the ARE program and to start and stop a model. For more information about how to use the ACS, please read the "),t("RouterLink",{attrs:{to:"/manuals/ACS/"}},[e._v("ACS user manual")]),e._v(".")],1),e._v(" "),t("p",[t("img",{attrs:{src:s(288),alt:"Screenshot of ACS program with a simple model."}})]),e._v(" "),t("h3",{attrs:{id:"webacs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webacs"}},[e._v("#")]),e._v(" WebACS")]),e._v(" "),t("p",[e._v("The WebACS is a new web-based version of the "),t("a",{attrs:{href:"#acs"}},[e._v("ACS")]),e._v(" program for designing and testing model files. For more information about how to use the WebACS, please read the "),t("RouterLink",{attrs:{to:"/manuals/WebACS/"}},[e._v("WebACS user manual")]),e._v(".")],1),e._v(" "),t("p",[t("img",{attrs:{src:s(441),alt:"Screenshot of ACS program with a simple model."}})]),e._v(" "),t("h3",{attrs:{id:"are"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#are"}},[e._v("#")]),e._v(" ARE")]),e._v(" "),t("p",[e._v("The AsTeRICS Runtime Environment (ARE) executes a given model. The screenshot below shows the autostart model running after starting the ARE. You can click the "),t("code",[e._v("Play")]),e._v(", "),t("code",[e._v("Pause")]),e._v(" or "),t("code",[e._v("Stop")]),e._v(" button of the control panel to start, pause or stop a model. Alternatively, you can use the respective shortcuts "),t("code",[e._v("F5")]),e._v(","),t("code",[e._v("F6")]),e._v(","),t("code",[e._v("F7")]),e._v(". Furthermore, you can open a new model file by clicking on the "),t("code",[e._v("Open")]),e._v(" button. Additionally, a model can be uploaded, if opened in the ACS/WebACS programs or directly from the "),t("RouterLink",{attrs:{to:"/solutions/"}},[e._v("solutions")]),e._v(" page. The ARE also provides a remote interface. For more information about how to use the ARE, please read the "),t("RouterLink",{attrs:{to:"/manuals/ARE/"}},[e._v("ARE user manual")]),e._v(".")],1),e._v(" "),t("p",[t("img",{attrs:{src:s(442),alt:"Screenshot of AsTeRICS Runtime Environment"}})]),e._v(" "),t("h2",{attrs:{id:"user-interfaces"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-interfaces"}},[e._v("#")]),e._v(" User Interfaces")]),e._v(" "),t("p",[e._v("AsTeRICS provides two different types of user interfaces, which can be used for a model.")]),e._v(" "),t("h3",{attrs:{id:"are-gui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#are-gui"}},[e._v("#")]),e._v(" ARE GUI")]),e._v(" "),t("p",[e._v("The ARE provides a Graphical User Interface (GUI) desktop (see "),t("a",{attrs:{href:"#are"}},[e._v("ARE screenshot")]),e._v("). When designing a model with the ACS or WebACS you can use plugins which provide user interface elements like a slider or a button. You can then define where the element should be shown on the ARE desktop. Furthermore you can define actions depending on user input.")]),e._v(" "),t("h3",{attrs:{id:"asterics-grid-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asterics-grid-2"}},[e._v("#")]),e._v(" AsTeRICS Grid")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"#asterics-grid"}},[e._v("AsTeRICS Grid")]),e._v(" is a new way of defining a user interface for AsTeRICS.")])])}),[],!1,null,null,null);t.default=r.exports}}]);