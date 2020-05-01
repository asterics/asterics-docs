(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{3876:function(e,t,i){e.exports=i.p+"assets/img/Eyetracker.a4e515ac.jpg"},3877:function(e,t,i){e.exports=i.p+"assets/img/Eyetracker_headmount.ea75c7af.jpg"},390:function(e,t,i){"use strict";i.r(t);var o=i(2),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"eyetracker"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eyetracker"}},[e._v("#")]),e._v(" Eyetracker")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-computer-vision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-computer-vision"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),o("p",[e._v("This component provides different computer vision tracking algorithms which can be selected via the “trackingMode” property. The available modes include “blob-tracking”, “calibrated eye-tracking” and “calibrated eye-tracking with head pose estimation”. The two eye-tracking modes deliver estimations of the x/y-positions where the user is looking on the computer screen which can be used for cursor control (gaze estimation).")]),e._v(" "),o("h3",{attrs:{id:"plugin-modes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#plugin-modes"}},[e._v("#")]),e._v(" Plugin modes")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("only blob tracking")]),e._v(" In this mode, the plugin just outputs the x/y coordinates of a round surface detected in the live camera images. No calibration procedure is needed. The plugins starts immediately with the coordinate output at the ports “x” and “y”. A possible application for this mode is tracking of a round marker which could be placed anywhere on the body.")]),e._v(" "),o("li",[o("strong",[e._v("calibrated eye tracking")]),e._v(" In this mode, the plugin expects close-up images of an eye, recorded by a head-mounted setup. The suggested hardware configuration is the AsTeRICS headmounted SVM system (see image below). The eye-pupil location is determined and mapped to an estimated position at the computer screen where the person is looking at. For this mode, the plugins needs to be calibrated. First, a rectangular region of interest (ROI) has to be selected by clicking into the live camera image while holding the CTRL/STRG key. The ROI should cover the area where the eyeball is moving when the user is looking in different directions. Then, the calibration sequence can be started by sending an event to the “calibrate” event listener port. During calibration, the cursor is moved to several locations on the screen and the user is supposed to look at these positions without moving the head. The changing of the cursor position is indicated with an acoustic signal. Calibration succeeds if all calibration location can be recorded without excessively distorted values. If the calibration cannot be accomplished successfully, an acoustic signal is emitted and the Eyetracker plugin does not start to put out x/y data. In this case the calibration procedure has to be repeated. The coordinate-output of the eye tracking is only working correctly if no head movements occur. Any head movement will compromise the correctness of the x/y estimation for the cursor position…")]),e._v(" "),o("li",[o("strong",[e._v("calibrated eye tracking with head pose estimation")]),e._v(" This mode is an extension of the “calibrated eye tracking” mode. The calibration has to be performed as above. Additionally to the head-mounted camera, an external LED-frame mounted on the computer monitor is used to minimize the negative effects of head movements to the tracking accuracy. Please note that this mode needs the head-mounted SVM device plus the external Led-Frame.")])]),e._v(" "),o("p",[o("img",{attrs:{src:i(3876),alt:"Screenshot: Eyetracker in operation",title:"Screenshot: Eyetracker in operation"}}),o("br"),e._v("\nEyetracker in operation (calibrated eyetracking mode)")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("A camera has to be available in the operating system, to detect round blobs or the eye-pupil position. Depending on the mode (if head pose estimation is selected), a head mounted camera which films a close-up of the eye and an external LED-mount are needed.")]),e._v(" "),o("p",[o("img",{attrs:{src:i(3877),alt:"Screenshot: head mounted SVM device",title:"Screenshot: head mounted SVM device"}}),o("br"),e._v("\nhead mounted SVM device")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("pt1x - pt4x [integer]:")])]),e._v(" "),o("li",[o("strong",[e._v("pt1y - pt4y [integer]:")]),e._v(" These 8 input ports can be connected to the corresponding output ports of the Sensorboard plugin. The Sensorboard delivers the location of 4 IR-led tracking points in the field-of-view of the IR-object-tracking camera of the headmounted SVM. This information can be used to compensate the head movement to increase gaze estimation stability. The 8 input ports have to be synchronized (turn the synchronized-property on for every input port). "),o("strong",[e._v("These 8 input ports support synchronization")])])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("x [integer]:")]),e._v(" The x-coordinate delivered by the tracking algorithm. The meaning of this value depends on the selected mode.")]),e._v(" "),o("li",[o("strong",[e._v("y [integer]:")]),e._v(" The y-coordinate delivered by the tracking algorithm. The meaning of this value depends on the selected mode.")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("calibrate:")]),e._v(" if this event is triggered, calibration procedure for the Eyetracker is started (this is not relevant for the mode “only blob tracking”).")]),e._v(" "),o("li",[o("strong",[e._v("offsetCorrection:")]),e._v(" this event is useful for eyetracking mode, when a drift of the cursor position has occured. When the event is triggered, the plugin stops the output of x/y coordinates for two seconds, where the user has time to fix the exact cursor position with the eyes. A new offset will be calculated to match the cursor position after the 2 seconds pause.")]),e._v(" "),o("li",[o("strong",[e._v("showCameraSettings")]),e._v(" an incoming event displays the settings window for the camera device, where parameters like image brightness or contrast can be adjusted.")]),e._v(" "),o("li",[o("strong",[e._v("togglePoseInfoWindow")]),e._v(" an incoming event displays the pose info window, where the current location of the 4 IR tracking points for head-pose compensation can be seen. For a normal head orientation these 4 points should be centered in the middle of the window (change the angle of the frontal camera to adjust the position of the yellow dots).")]),e._v(" "),o("li",[o("strong",[e._v("startEvaluation")]),e._v(" an incoming event displays the accuracy evaluation window and starts evaluation. When the user follows the cross to 9 positions in the window, the x/y coordinates of the cursor are stored to a file in the ARE folder which can then be used to calculate and compare the gaze accuracy.")]),e._v(" "),o("li",[o("strong",[e._v("saveProfile")]),e._v(" an incoming event saves the camera settings to a file of the given name (property cameraProfile). Use with caution - a saved settings-profile does only work with the same camera which was used to save the settings.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("blinkDetected:")]),e._v(" triggered if the blob detection is lost for a timespan bigger than minBlinkDuration and lower than maxBlinkDuration. This can be used for a single eye-blink detection.")]),e._v(" "),o("li",[o("strong",[e._v("longBlinkDetected:")]),e._v(" triggered if the blob detection is lost for a timespan bigger than maxBlinkDuration. This can be used for a long eye-blink detection.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("cameraSelection [string, combobox selection]:")]),e._v(" using this property, the utilized camera can be chosen. Possible values range from �first camera� to �fith camera�. If only one camera is available in the system, �first camera� shall be chosen.")]),e._v(" "),o("li",[o("strong",[e._v("cameraResolution [string, combobox selection]:")]),e._v(" This selection box provides several standard camera resolutions. Changing the resolution affects accuracy and performance (CPU load of the runtime system). Provided selections include �160x120�, �320x240�, �640x480�, �800x600�, �1024x768� and �1600x1200�. If the selectied resolution cannot be delivered by the image acquisition device, the next matching resolution is chosen by the plugin.")]),e._v(" "),o("li",[o("strong",[e._v("cameraProfile [string]")]),e._v(" a filename for the camera settings profile to be saved (property cameraProfile). Use with caution - a saved settings-profile does only work with the same camera which was used to save the settings.")]),e._v(" "),o("li",[o("strong",[e._v("cameraDisplayUpdate [integer]:")]),e._v(" This property allows to select the update rate for the camera display in milliseconds. If �0� milliseconds is chosen, no window for the live-video will be displayed. If �100� is chosen, the live image window will be updated 10 times a second. This property does not influence the frame rate of the camera nor the processing interval for new camera frames, only the display in the GUI is adjusted.")]),e._v(" "),o("li",[o("strong",[e._v("tracking mode [string, combobox selection]:")]),e._v(" The selection of the plugin’s mode of operation (“only blob tracking”, “calibrated eye tracking”, or “calibrated eye tracking with head pose estimation”)")]),e._v(" "),o("li",[o("strong",[e._v("xMin [integer]:")]),e._v(" the minimum value for the x-coordinate output")]),e._v(" "),o("li",[o("strong",[e._v("xMax [integer]:")]),e._v(" the maximum value for the x-coordinate output. If “0” is selected, the plugins auto-detects the screen resolution and uses the X-Size of the computer screen.")]),e._v(" "),o("li",[o("strong",[e._v("yMin [integer]:")]),e._v(" the minimum value for the y-coordinate output")]),e._v(" "),o("li",[o("strong",[e._v("yMax [integer]:")]),e._v(" the maximum value for the y-coordinate output. If “0” is selected, the plugins auto-detects the screen resolution and uses the Y-Size of the computer screen.")]),e._v(" "),o("li",[o("strong",[e._v("calibrationStepsX [integer]:")]),e._v(" the number of rows for generating calibration positions")]),e._v(" "),o("li",[o("strong",[e._v("calibrationStepsY [integer]:")]),e._v(" the number of columns for generating calibration positions. For example: if 4 x-steps and 3 y-steps are chosen, the user has to look at 12 cursor positions during the calibration phase. More positions increase the gaze-tracking accuracy but result in a longer calibration phase.")]),e._v(" "),o("li",[o("strong",[e._v("averaging [integer]:")]),e._v(" the length of the averaging window for smoothening the ouput values.")]),e._v(" "),o("li",[o("strong",[e._v("screenSize [double]:")]),e._v(" the diameter of the computer screen (important if head pose correction is used)")]),e._v(" "),o("li",[o("strong",[e._v("minBlinkDuration [integer]:")]),e._v(" the minimum time for a short blink to be detected (a short blink is detected if the blink time is bigger than minBlinkDuration and lower than maxBlinkDuration.")]),e._v(" "),o("li",[o("strong",[e._v("maxBlinkDuration [integer]:")]),e._v(" the maximum time for a short blink to be detected (a long blink is detected if the blink time is bigger than maxBlinkDuration).")])])])}),[],!1,null,null,null);t.default=n.exports}}]);