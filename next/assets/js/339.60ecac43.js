(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{1224:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"eyetribe"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eyetribe"}},[e._v("#")]),e._v(" Eyetribe")]),e._v(" "),o("p",[e._v("Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),o("p",[e._v("This component provides access to the raw gaze tracking data from the "),o("a",{attrs:{href:"https://theeyetribe.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("EyeTribe"),o("OutboundLink")],1),e._v(" eye tracking device. The data includes the estimated gazepoint (x/y), the eye location (x/y), fixation time and eye close time. The plugin connects to a running EyeTribe server.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(3362),alt:"Screenshot: Eyetribe plugin",title:"Screenshot: Eyetribe plugin"}})]),e._v(" "),o("p",[e._v("Eyetribe plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The Eyetribe tracker must be connected to an USB3.0 port and the Eyetribe server software must be running.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(3363),alt:"Screenshot: Eyetribe hardware",title:"Screenshot: Eyetribe hardware"}})]),e._v(" "),o("p",[e._v("Eyetribe hardware")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("gazex [integer]:")]),e._v(" The x-coordinate of the estimated gazepoint on the computer screen (in pixels)")]),e._v(" "),o("li",[o("strong",[e._v("gazey [integer]:")]),e._v(" The y-coordinate of the estimated gazepoint on the computer screen (in pixels)")]),e._v(" "),o("li",[o("strong",[e._v("posx [integer]:")]),e._v(" The x-coordinate of the eye pupil(s) - left / right / both pupils can be selected via property")]),e._v(" "),o("li",[o("strong",[e._v("posy [integer]:")]),e._v(" The y-coordinate of the eye pupil(s) - left / right / both pupils can be selected via property")]),e._v(" "),o("li",[o("strong",[e._v("fixationTime [integer]:")]),e._v(" The time period for fixation of a particular spot on the screen")]),e._v(" "),o("li",[o("strong",[e._v("closeTime [integer]:")]),e._v(" The time period for closing both eyes (or eye tracking signal lost)")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("startCalibration:")]),e._v(" if this event is triggered, calibration procedure for the Eyetracker is started.")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrection:")]),e._v(" this event is useful when a drift of the cursor position has occured. When the event is triggered, the plugin stops the output of x/y coordinates for several seconds, where the user has time to fix the exact cursor position with the eyes. (see description below).")]),e._v(" "),o("li",[o("strong",[e._v("removeLastOffsetCorrection")]),e._v(" when this event is triggered, the last offset correction point will be removed - useful if the offset correction did not work as intended.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("blink:")]),e._v(" triggered if the eye detection is lost for a timespan bigger than minBlinkTime and lower than midBlinkTime. This can be used for a single eye-blink detection.")]),e._v(" "),o("li",[o("strong",[e._v("longBlink:")]),e._v(" triggered if the blob detection is lost for a timespan bigger than midBlinkTime and lower than maxBlinkTime. This can be used for a long eye-blink detection.")]),e._v(" "),o("li",[o("strong",[e._v("fixation:")]),e._v(" triggered if the user looks at a particular location on the screen for longer than defined in via the fixationTime property.")]),e._v(" "),o("li",[o("strong",[e._v("fixationEnd:")]),e._v(" triggered if the user looks stops looking at a particular location (which triggered a fixation event).")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("minBlinkTime [integer]:")]),e._v(" the minimum time for a short blink to be detected (a short blink is detected if the blink time is bigger than minBlinkTime and lower than midBlinkTime.)")]),e._v(" "),o("li",[o("strong",[e._v("midBlinkTime [integer]:")]),e._v(" the time for seperating short blinks from long blinks.")]),e._v(" "),o("li",[o("strong",[e._v("maxBlinkTime [integer]:")]),e._v(" the maximum time for a short blink to be detected (a long blink is detected if the blink time is bigger than midBlinkTime and lower than maxBlinkTime…")]),e._v(" "),o("li",[o("strong",[e._v("fixationTime [integer]:")]),e._v(" the minimum time for triggereing a fixation event when the user looks at a particular spot on the screen")]),e._v(" "),o("li",[o("strong",[e._v("pupilPositionMode [combobox]:")]),e._v(" selects the mode for calculation of the eye position output port values. (left eye / right eye or an average of both eyes)")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrectionRadius [integer]:")]),e._v(" defines the distance to an offset correction point where this offset correction points starts to influece the eye coordinates (see description below)")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrectionMode [combobox]:")]),e._v(" selects the mode for the offset correction measurement. (manual or automatic mode, see above description)")])]),e._v(" "),o("h3",{attrs:{id:"calibration-and-offset-correction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#calibration-and-offset-correction"}},[e._v("#")]),e._v(" Calibration and Offset Correction")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("A sucessful gaze estimation needs prior calibration. This should be done using the application/GUI provided by the EyeTribe software. However, a calibration can also be initiated using the provided "),o("strong",[e._v("startCalibration")]),e._v(" EventListener port (see below). When starting the calibration process using this event, the mouse cursor is positioned to 9 screen locations, starting at the left upper corner and iterating via middle and right position through 3 rows until the right bottom corner is reached. During calibration, follow the cursor with the eyes (reducing head movements to a minimum). For each calibration position, an acoustic signal indicates the time when the samples are taken. When the calibration process is finished, the plugin continues sending the measurement data from it’s output ports.")])]),e._v(" "),o("li",[o("p",[e._v("The "),o("strong",[e._v("offset correction")]),e._v(" event listener port allows setting so called “offset correction points” at desired screen locations. This is possible during the normal operation of the eye tracking. This is useful when certain locations on the screen cannot be reached because of a calibration problem but a new calibraiton is either not desired or not successful / precise enough. The goal of the offset correction is to reduce the error between the real gaze point and the estimated (weak) gaze point where usually the cursor is positioned, by adding a small offset value. After starting the offset correction (which is indicated by an acoustic signal) look at the intended spot on the screen. After 1 second, another acoustic signal indicates that the coordinates have been saved. Now look at the mouse cursor (the weak gaze point which shall be corrected). The next step differs according to the selected offset correction mode (which can be chosen via the "),o("strong",[e._v("offsetCorrectionMode")]),e._v(" property:")]),e._v(" "),o("ul",[o("li",[e._v("manual offset correction: try to follow the cursor with the eyes. It should move slowly towards the original gaze point, correcting the error. This manual calibration phase takes about 4 seconds.")]),e._v(" "),o("li",[e._v("automatic offset correction: look at the cursor. After 1 second, the offest is measured.")])]),e._v(" "),o("p",[e._v("After the offset correction has been performed, the given offset value is stored into an internal list. As soon as the estimated gaze point enters an area around the offset correction point (the area size is defined via the property offsetCorrectionRadius), an appropriate fraction of the offset value is added to the estimated gaze point coordinates."),o("br"),e._v("\nHere, linear approximation is used, so that looking at the original (weak) gaze estimation point will add the full offest value, resulting the corrected gaze estimation point.")])])])])}),[],!1,null,null,null);t.default=r.exports},3362:function(e,t,i){e.exports=i.p+"assets/img/Eyetribe.97cfbb7f.jpg"},3363:function(e,t,i){e.exports=i.p+"assets/img/Eyetribe_hw.46447525.png"}}]);