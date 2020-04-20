(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1812:function(e,t,i){"use strict";i.r(t);var o=i(21),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"eyex"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eyex"}},[e._v("#")]),e._v(" EyeX")]),e._v(" "),o("p",[e._v("Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),o("p",[e._v("OS: Windows")]),e._v(" "),o("p",[e._v("This component provides access to the raw gaze tracking data from "),o("a",{attrs:{href:"https://tobiigaming.com/products/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii eye tracking devices"),o("OutboundLink")],1),e._v(". The data includes the estimated gazepoint (x/y), the eye location (x/y), fixation time and eye close time. The plugin connects to the device via the Tobii SDK.")]),e._v(" "),o("p",[e._v("Currently the following devices should work:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://tobiigaming.com/product/tobii-eyex/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii EyeX"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://tobiigaming.com/eye-tracker-4c/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii Tracker 4C"),o("OutboundLink")],1),e._v(": Also supports head tracking and can be combined with the "),o("a",{attrs:{href:"http://asterics.github.io/AsTeRICS/AsTeRICS-Help/master/Plugins/sensors/Tobii4CHeadTracker.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii4CHeadTracker"),o("OutboundLink")],1),e._v(" plugin to get eye gaze and head pose data.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://de.steelseries.com/gaming-controllers/sentry",target:"_blank",rel:"noopener noreferrer"}},[e._v("Steel Series Sentry"),o("OutboundLink")],1),e._v(" (not tested)")])]),e._v(" "),o("p",[o("img",{attrs:{src:i(3131),alt:"Screenshot: Tobii EyeX plugin",title:"Screenshot: Tobii EyeX plugin"}})]),e._v(" "),o("p",[e._v("Tobii EyeX plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("ul",[o("li",[e._v("OS: Windows")]),e._v(" "),o("li",[e._v("USB port: The Tobii EyeX device needs a USB3.0 port, the Tracker 4C needs at least a USB 2.0 port. Preferably don’t use a USB hub, or only use a "),o("a",{attrs:{href:"https://help.tobii.com/hc/en-us/articles/212907389-Recommended-USB-2-0-hubs",target:"_blank",rel:"noopener noreferrer"}},[e._v("recommended hub from Tobii"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://tobiigaming.com/getstarted/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii Eye Tracking Core Software"),o("OutboundLink")],1),e._v(" must be installed and running.")])]),e._v(" "),o("p",[o("img",{attrs:{src:i(3132),alt:"Screenshot: Tobii EyeX hardware",title:"Screenshot: Tobii EyeX hardware"}})]),e._v(" "),o("p",[e._v("Tobii EyeX hardware")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("gazeX [integer]:")]),e._v(" The x-coordinate of the estimated gazepoint on the computer screen (in pixels)")]),e._v(" "),o("li",[o("strong",[e._v("gazeY [integer]:")]),e._v(" The y-coordinate of the estimated gazepoint on the computer screen (in pixels)")]),e._v(" "),o("li",[o("strong",[e._v("posX [integer]:")]),e._v(" The x-coordinate of the eye pupil(s) - left / right / both pupils can be selected via property")]),e._v(" "),o("li",[o("strong",[e._v("posY [integer]:")]),e._v(" The y-coordinate of the eye pupil(s) - left / right / both pupils can be selected via property")]),e._v(" "),o("li",[o("strong",[e._v("fixationTime [integer]:")]),e._v(" The time period for fixation of a particular spot on the screen")]),e._v(" "),o("li",[o("strong",[e._v("closeTime [integer]:")]),e._v(" The time period for closing both eyes (or eye tracking signal lost)")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("offsetCorrection:")]),e._v(" when offset correction mode “CorrectionSpots” is selecte, an new correction spot can be added via this event. When the event is triggered, the plugin stops the output of x/y coordinates for several seconds, where the user has time to fix the exact cursor position with the eyes, thereby defining the x/y correction offset.")]),e._v(" "),o("li",[o("strong",[e._v("removeLastOffsetCorrection")]),e._v(" when this event is triggered, the last offset correction spot will be removed - useful if the offset correction did not work as intended.")]),e._v(" "),o("li",[o("strong",[e._v("stopOffsetCorrection")]),e._v(" when this event is triggered, any offset correction mode is stopped.")]),e._v(" "),o("li",[o("strong",[e._v("createAndCalibrateGuestProfile")]),e._v(" creates a new guest profiles and initiates calibration.")]),e._v(" "),o("li",[o("strong",[e._v("calibrateCurrentProfile")]),e._v(" initiates calibration of the currently active profile.")]),e._v(" "),o("li",[o("strong",[e._v("switchToOffsetCorrectionSpots")]),e._v(" selects uses multiple correction spot which can be added via envet “offsetCorrection”.")]),e._v(" "),o("li",[o("strong",[e._v("switchToPermanentOffsetCorrection")]),e._v(" permanently adds the input port values of xOffset and yOffset to the gazepoint.")]),e._v(" "),o("li",[o("strong",[e._v("switchToCombinedOffsetCorrection")]),e._v(" uses the xOffset / yOffset input port values to fine-tune the gazePoint (this switches off gaze-updates until a certain gaze offset is detected.)")]),e._v(" "),o("li",[o("strong",[e._v("activate")]),e._v(" activates the eye tracker.")]),e._v(" "),o("li",[o("strong",[e._v("deactivate")]),e._v(" deactivates the eye tracker.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("blink:")]),e._v(" triggered if the eye detection is lost for a timespan bigger than minBlinkTime and lower than midBlinkTime. This can be used for a single eye-blink detection.")]),e._v(" "),o("li",[o("strong",[e._v("longBlink:")]),e._v(" triggered if the blob detection is lost for a timespan bigger than midBlinkTime and lower than maxBlinkTime. This can be used for a long eye-blink detection.")]),e._v(" "),o("li",[o("strong",[e._v("fixation:")]),e._v(" triggered if the user looks at a particular location on the screen for longer than defined in via the fixationTime property.")]),e._v(" "),o("li",[o("strong",[e._v("fixationEnd:")]),e._v(" triggered if the user looks stops looking at a particular location (which triggered a fixation event).")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("enabled [boolean]:")]),e._v(" selects if the eyetracker is enabled on startup of the model.")]),e._v(" "),o("li",[o("strong",[e._v("averaging [integer]:")]),e._v(" selects the size of an internal averager for the gaze point x/y values.")]),e._v(" "),o("li",[o("strong",[e._v("minBlinkTime [integer]:")]),e._v(" the minimum time for a short blink to be detected (a short blink is detected if the blink time is bigger than minBlinkTime and lower than midBlinkTime.)")]),e._v(" "),o("li",[o("strong",[e._v("midBlinkTime [integer]:")]),e._v(" the time for seperating short blinks from long blinks.")]),e._v(" "),o("li",[o("strong",[e._v("maxBlinkTime [integer]:")]),e._v(" the maximum time for a short blink to be detected (a long blink is detected if the blink time is bigger than midBlinkTime and lower than maxBlinkTime…")]),e._v(" "),o("li",[o("strong",[e._v("fixationTime [integer]:")]),e._v(" the minimum time for triggereing a fixation event when the user looks at a particular spot on the screen")]),e._v(" "),o("li",[o("strong",[e._v("pupilPositionMode [combobox]:")]),e._v(" selects the mode for calculation of the eye position output port values. (left eye / right eye or an average of both eyes)")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrectionRadius [integer]:")]),e._v(" defines the distance to an offset correction point where this offset correction points starts to influece the eye coordinates (see description below)")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrectionMode [combobox]:")]),e._v(" selects the mode for the offset correction. (correction spots, permanent offset correction or combined correction)")])]),e._v(" "),o("h3",{attrs:{id:"calibration-and-offset-correction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#calibration-and-offset-correction"}},[e._v("#")]),e._v(" Calibration and Offset Correction")]),e._v(" "),o("ul",[o("li",[e._v("A sucessful gaze estimation needs prior calibration. This should be done using the application/GUI provided by the Tobii EyeX software, but can also be accomplished by the provided event listeners.")]),e._v(" "),o("li",[e._v("The "),o("strong",[e._v("offset correction")]),e._v(" modes allow application of drift correction during normal operation of the eye tracking. This is useful when certain locations on the screen cannot be reached because of a calibration problem but a new calibraiton is either not desired or not successful / precise enough. The goal of the offset correction is to reduce the error between the real gaze point and the estimated (weak) gaze point where usually the cursor is positioned, by adding small offset values.")])]),e._v(" "),o("p",[e._v("There are three offset correction modes provided, which can be chosen via the "),o("strong",[e._v("offsetCorrectionMode")]),e._v(" property or the respective events:")]),e._v(" "),o("ul",[o("li",[e._v("offset correction spots\nwhen a new spot is set via the provided event listener, eye tracking is stopped for several seconds. Look at the cursor. After 1 second, the offest is measured. When the tracking starts again, the measured offset is applied in the area of the selected offsetCorrectionRadius. Here, linear approximation is used, so that looking at the original (weak) gaze estimation point will add the full offest value, resulting the corrected gaze estimation point. Multiple spots can be added at different screen loactions._ permanent offset correction:\nthe correction values for x and y which are provided via the input ports xOffset and yOffset are permanenty added to the gazepoint location. A joystick, mouthmouse or similar input device can be used to provide these values._ combined offset correction:\nif the correction values for x and y which provided via the input ports xOffset and yOffset are not zero, the eyetracking stops and the correction values are applied to the last gazepoint. Eye-tracking starts again when the measured gazepoint differs from the corrected gazepoint by more than the selected offsetCorrectionRadius.")])])])}),[],!1,null,null,null);t.default=r.exports},3131:function(e,t,i){e.exports=i.p+"assets/img/EyeX.f70899f9.jpg"},3132:function(e,t,i){e.exports=i.p+"assets/img/EyeX_hw.a3ae220c.png"}}]);