(window.webpackJsonp=window.webpackJsonp||[]).push([[1125],{1800:function(e,t,o){"use strict";o.r(t);var r=o(21),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"facetracker-clm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#facetracker-clm"}},[e._v("#")]),e._v(" Facetracker CLM")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),r("p",[e._v("The FacetrackerCLM component is one of the vision based plugin. At this stage of development it offers the same functionalities for mouse emulation as the other sensor plugin named "),r("strong",[r("a",{attrs:{href:"FacetrackerLK.htm"}},[e._v("facetrackerLK")])]),e._v(" .")]),e._v(" "),r("p",[e._v("The underlying mechanism is based on the tracking of facial features detected in a first initialization stage by fitting a deformable face model on the image as soon as the region of interest is identified thanks to the OpenCV implementation of the Viola-Jones classifier.")]),e._v(" "),r("p",[e._v("The plugin outputs at each frame the relative offsets of a series of measures based on the tracked points with respect to the previous frame. These offsets may be integrated or used directly as inputs for the mouse emulator actuators. Usually it is a good idea to use the relative displacement of the centre of the face (PosX and PosY) to guide the mouse movements and reserve the other measurements or events to implement other optional functionalities (the head roll, pitch and yaw angles and relative scale of the face).")]),e._v(" "),r("p",[e._v("The FacetrackerCLM also introduces the detection of facial gestures that can be then exploited in the ACS models to directly perform actions or trigger events. In this version an event is sent for the detection of the raising of both eyebrows.")]),e._v(" "),r("p",[e._v("For a closer explaination of the EyeTrackerCLM functions and the training algorithm for eye states please refer to the document FacetrackerCLM.pdf in the folder /documentation.")]),e._v(" "),r("p",[r("img",{attrs:{src:o(3138),alt:"Screenshot: FacetrackerCLM plugin",title:"Screenshot: FacetrackerCLM plugin"}})]),e._v(" "),r("p",[e._v("FacetrackerCLM plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("A camera has to be available in the operating system (preferably a consumer USB camera).")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("p",[e._v("There are no input ports for this plugin.")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("Roll[double]:")]),e._v(" The output port Roll outputs the relative change of the roll angle of the head pose (degrees).")]),e._v(" "),r("li",[r("strong",[e._v("Pitch[double]:")]),e._v(" The output port Pitch outputs the relative change of the pitch angle of the head pose (degrees).")]),e._v(" "),r("li",[r("strong",[e._v("Yaw[double]:")]),e._v(" The output port Yaw outputs the relative change of the yaw angle of the head pose (degrees).")]),e._v(" "),r("li",[r("strong",[e._v("PosX[double]:")]),e._v(" The output port PosX outputs the relative displacement of the x coordinate (image coordinates) of the tracked point (approximatively located around the nose).")]),e._v(" "),r("li",[r("strong",[e._v("PosY[double]:")]),e._v(" The output port PosX outputs the relative displacement of the y coordinate (image coordinates) of the tracked point (approximatively located around the nose).")]),e._v(" "),r("li",[r("strong",[e._v("Scale[double]:")]),e._v(" The output port Scale outputs the relative change in scale of the apparent size of the fitted face model in the current image.")]),e._v(" "),r("li",[r("strong",[e._v("EyeLeft[int]:")]),e._v(" The output port EyeLeft outputs 0 if the left eye is opened, 1 if closed in the current image.")]),e._v(" "),r("li",[r("strong",[e._v("EyeRight[int]:")]),e._v(" The output port EyeRight outputs 0 if the right eye is opened, 1 if closed in the current image.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("reset:")]),e._v(" Forces reinit of the fitting of deformable model for the face in order to reset the tracking points.")]),e._v(" "),r("li",[r("strong",[e._v("showCameraSettings:")]),e._v(" Displays the camera settings dialog on screen")]),e._v(" "),r("li",[r("strong",[e._v("setReferencePose:")]),e._v(" sets the reference pose")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("EyebrowsRaised:")]),e._v(" this event gets raised everytime the plugin detects a specific configuration of the facial landmarks corresponding to a "),r("em",[e._v("surprise")]),e._v(" expression.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("cameraSelection [string, combobox selection]:")]),e._v(' this property determines the index of the input camera. Possible values range from "first camera" to "fifth camera". If only one camera is available in the system, "first camera" is the correct choice.')]),e._v(" "),r("li",[r("strong",[e._v("cameraResolution [string, combobox selection]:")]),e._v(' this selection box provides several standard camera resolutions. Changing the resolution affects accuracy and performance (CPU load of the runtime system). Provided selections include "160x120", "320x240", "640x480" and "800x600". If the selected resolution cannot be delivered by the image acquisition device, the closest matching resolution is chosen automatically by the plugin.')]),e._v(" "),r("li",[r("strong",[e._v("cameraDisplayUpdate [integer]:")]),e._v(' this property allows to select the update rate for the camera display in milliseconds. If "0" milliseconds is chosen, no window for the live-video will be displayed. If "100" is chosen, the live image window will be updated 10 times a second. Please note that this property does not influence the frame rate of the camera nor the processing interval for new camera frames, only the display in the GUI is adjusted.')]),e._v(" "),r("li",[r("strong",[e._v("modelName [string]:")]),e._v(' this property informs the plugin about which is the trained model to load. The file is searched in the the FacetrackerCLM/EyeStateModels folder inside the plugin "data" folder. Specify the name without .yml extension.')])])])}),[],!1,null,null,null);t.default=i.exports},3138:function(e,t,o){e.exports=o.p+"assets/img/FacetrackerCLM.45de8d83.jpg"}}]);