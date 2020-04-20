(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1832:function(e,t,s){"use strict";s.r(t);var o=s(21),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"model-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-creation"}},[e._v("#")]),e._v(" Model Creation")]),e._v(" "),o("h2",{attrs:{id:"camera-mouse-simple"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#camera-mouse-simple"}},[e._v("#")]),e._v(" Camera Mouse Simple")]),e._v(" "),o("p",[e._v("A model is a collection of 1 to n components, where a component represents a plugin\nof the ARE. These components are connected via cannels (for data connections) and\nevent channels (representing events). The following example will illustrate the\ncreation of a simple webcam mouse, using the position of the nose to control the\ncursor and opening the mouth to trigger a mouse click. This model requires a\nconnected and installed webcam.")]),e._v(" "),o("h3",{attrs:{id:"add-facetracking"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-facetracking"}},[e._v("#")]),e._v(" Add Facetracking")]),e._v(" "),o("p",[e._v("In a first step, start the ACS and the ARE using the ACS.exe and ARE.exe short cuts.\nIn the ACS window select the tab "),o("strong",[e._v("Components")]),e._v(", then "),o("strong",[e._v("Sensors")]),e._v(" and within the\nsensors the menu item "),o("strong",[e._v("Computer Vision")]),e._v(". There select the component\nFacetrackerLK. The component is now on the drawing area and, if the component is\nselected, properties can be set (or changed) in the rightmost part of the ACS window.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3438),alt:"ACS - A first example (1/8)"}})]),e._v(" "),o("h3",{attrs:{id:"add-mouse"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-mouse"}},[e._v("#")]),e._v(" Add Mouse")]),e._v(" "),o("p",[e._v("The next needed component is the "),o("strong",[e._v("Mouse")]),e._v(", it can be found by selecting "),o("strong",[e._v("Actuators")]),e._v(" -\n"),o("strong",[e._v("Input Device Emulation")]),e._v(". After the insert, select the Mouse component and adapt\nthe properties. Deactivate absolutePosition and set the "),o("code",[e._v("xMax")]),e._v(" and "),o("code",[e._v("yMax")]),e._v(" to your\nscreen resolution.")]),e._v(" "),o("p",[e._v("In the next step, connect the noseX and the noseY outputs of the "),o("strong",[e._v("XFacetrackerLK")]),e._v("\nwith the mouseX and mouseY inputs of the Mouse. Finally, it should look like the\nscreenshot below.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(1901),alt:"ACS - A first example (2/8)"}})]),e._v(" "),o("h3",{attrs:{id:"add-mouse-click"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-mouse-click"}},[e._v("#")]),e._v(" Add Mouse Click")]),e._v(" "),o("p",[e._v("The model now would be able to use the coordinates of the nose to control the\nmouse cursor, but the mouse click is still missing.\nFor the mouse clicking functionality, we first need the "),o("strong",[e._v("MathEvaluator")]),e._v(" ("),o("strong",[e._v("Processors")]),e._v(" -\n"),o("strong",[e._v("Basic Math")]),e._v(") plugin. We connect the noseY output of the "),o("strong",[e._v("XFacetrackerLK")]),e._v(" the with\nthe inA input of the "),o("strong",[e._v("MathEvaluator")]),e._v(" and likewise the chinY with inB. In the properties\nof the "),o("strong",[e._v("MathEvaluator")]),e._v(", we set the property expression to "),o("strong",[e._v("b-a")]),e._v(".")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3439),alt:"ACS - A first example (3/8)"}})]),e._v(" "),o("p",[e._v("We will "),o("strong",[e._v("Differentiate")]),e._v(" ("),o("strong",[e._v("Processors")]),e._v(" -> "),o("strong",[e._v("Basic Math")]),e._v(") the out value to react on a fast\nchange of the nose to chin distance.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3440),alt:"ACS - A first example (4/8)"}})]),e._v(" "),o("p",[e._v("This processed value will then be forwarded to a "),o("strong",[e._v("Threshold")]),e._v(" ("),o("strong",[e._v("Processors")]),e._v(" -> "),o("strong",[e._v("Basic\nMath")]),e._v(") component. Set the thresholdLow and thresholdHigh values to 30.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3441),alt:"ACS - A first example (5/8)"}})]),e._v(" "),o("p",[e._v("As a final step, connect the event trigger output of the "),o("strong",[e._v("Threshold")]),e._v(" with the event\nlistener input of the "),o("strong",[e._v("Mouse")]),e._v(" – the event triggers and listeners are at the bottom of the\ncomponents. After the connection has been made, set the leftClick to eventPosEdge\nin the property editor at the right. If everything was done right, it should look like the\nfollowing screenshot:")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3442),alt:"ACS - A first example (6/8)"}})]),e._v(" "),o("h3",{attrs:{id:"test-model"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-model"}},[e._v("#")]),e._v(" Test Model")]),e._v(" "),o("p",[e._v("Now, upload the model to the ARE and press the "),o("strong",[e._v("Start Model")]),e._v(" button. A window with\nthe camera screen will appear, marking with a green and yellow circle - the position\nof nose and chin. Press the "),o("strong",[e._v("Stop Model")]),e._v(" button or press F7 to stop the model and\nget the control of the mouse back. Below is a screenshot of the system, when\nrunning.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3443),alt:"ACS - A first example (7/8)"}})]),e._v(" "),o("p",[e._v("Congratulations, your first AsTeRICS model is running!")]),e._v(" "),o("h3",{attrs:{id:"reducing-tremor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#reducing-tremor"}},[e._v("#")]),e._v(" Reducing Tremor")]),e._v(" "),o("p",[e._v("You might have noticed that the mouse pointer has a tremor, because the head is\nalways in movement to a certain extent. To reduce this tremor, an "),o("strong",[e._v("Averager")]),e._v("\n("),o("strong",[e._v("Processors")]),e._v(" -> "),o("strong",[e._v("Basic Math")]),e._v(") will be used to smoothen the X coordinates and\nanother "),o("strong",[e._v("Averager")]),e._v(" for the Y coordinates between the "),o("strong",[e._v("XFacetrackerLK")]),e._v(" and the\n"),o("strong",[e._v("Mouse")]),e._v(". The bufferSize in the properties will be set to 5.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3444),alt:"ACS - A first example (8/8)"}})]),e._v(" "),o("p",[e._v("That’s all, just upload the model and start it now.")]),e._v(" "),o("h3",{attrs:{id:"adjusting-the-webcam"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adjusting-the-webcam"}},[e._v("#")]),e._v(" Adjusting the Webcam")]),e._v(" "),o("p",[e._v("If you don’t like the position of the webcam after starting the model, you can set a\ndifferent start position. Select the "),o("strong",[e._v("GUI Designer")]),e._v(" tab above the drawing area and\nmove the webcam window to an area, which is comfortable to you. Also the size of\nthe window can be adjusted.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3445),alt:"GUI Designer"}})]),e._v(" "),o("p",[e._v("Upload and start the model to work with the changes.")]),e._v(" "),o("h2",{attrs:{id:"camera-mouse-advanced"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#camera-mouse-advanced"}},[e._v("#")]),e._v(" Camera Mouse Advanced")]),e._v(" "),o("p",[e._v("If your first model works, try this more "),o("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/blob/master/Documentation/AsTeRICS_CameraMouseCreation_StepbyStep_Tutorial.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("advanced step-by-step tutorial"),o("OutboundLink")],1),e._v(" based on slides.")])])}),[],!1,null,null,null);t.default=n.exports},1901:function(e,t,s){e.exports=s.p+"assets/img/quickstart11.c2ae8b7e.png"},3438:function(e,t,s){e.exports=s.p+"assets/img/quickstart10.a588225d.png"},3439:function(e,t,s){e.exports=s.p+"assets/img/quickstart12.c7981783.png"},3440:function(e,t,s){e.exports=s.p+"assets/img/quickstart13.68c18f17.png"},3441:function(e,t,s){e.exports=s.p+"assets/img/quickstart14.3781e998.png"},3442:function(e,t,s){e.exports=s.p+"assets/img/quickstart15.2c0687da.png"},3443:function(e,t,s){e.exports=s.p+"assets/img/quickstart16.4b39a603.png"},3444:function(e,t,s){e.exports=s.p+"assets/img/quickstart17.a2ecc137.png"},3445:function(e,t,s){e.exports=s.p+"assets/img/quickstart18.a949722d.png"}}]);