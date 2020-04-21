(window.webpackJsonp=window.webpackJsonp||[]).push([[1458],{315:function(e,t,a){"use strict";a.r(t);var r=a(22),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"tobii4cheadtracker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tobii4cheadtracker"}},[e._v("#")]),e._v(" Tobii4CHeadTracker")]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),r("p",[e._v("OS: Windows")]),e._v(" "),r("p",[e._v("This component provides access to the raw head tracking data of the "),r("a",{attrs:{href:"https://tobiigaming.com/eye-tracker-4c/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii Tracker 4C"),r("OutboundLink")],1),e._v(" eye tracking device. The data includes the head position (x/y/z) in mm and the head rotation (x/y/z) in Euler angles. The Tobii4CHeadTracker plugin can be combined with the "),r("a",{attrs:{href:"http://asterics.github.io/AsTeRICS/AsTeRICS-Help/master/Plugins/sensors/EyeX.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("EyeX"),r("OutboundLink")],1),e._v(" plugin to also get the eye gaze data.")]),e._v(" "),r("p",[e._v("The plugin connects to the device via the "),r("a",{attrs:{href:"https://tobiigaming.com/getstarted/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii Eye Tracking Core Software"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("ul",[r("li",[e._v("OS: Windows")]),e._v(" "),r("li",[e._v("USB port: The Tracker 4C needs at least a USB 2.0 port. Preferably don’t use a USB hub, or only use a "),r("a",{attrs:{href:"https://help.tobii.com/hc/en-us/articles/212907389-Recommended-USB-2-0-hubs",target:"_blank",rel:"noopener noreferrer"}},[e._v("recommended hub from Tobii"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://tobiigaming.com/getstarted/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tobii Eye Tracking Core Software"),r("OutboundLink")],1),e._v(" must be installed and running.")])]),e._v(" "),r("p",[r("img",{attrs:{src:a(3779),alt:"Screenshot: Tobii Tracker 4C plugin",title:"Screenshot: Tobii Tracker 4C plugin"}})]),e._v(" "),r("p",[e._v("Tobii Tracker 4C")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[e._v("**headRotX [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head rotation x angle (Euler).")]),e._v(" "),r("li",[e._v("**headRotY [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head rotation y angle (Euler).")]),e._v(" "),r("li",[e._v("**headRotZ [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head rotation z angle (Euler).")]),e._v(" "),r("li",[e._v("**headPosX [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head position x coordinate (mm).")]),e._v(" "),r("li",[e._v("**headPosY [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head position y coordinate (mm).")]),e._v(" "),r("li",[e._v("**headPosZ [double]"),r("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Head position y coordinate (mm).")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("activate:")]),e._v(" Activates (Turns on) the eye tracker device.")]),e._v(" "),r("li",[r("strong",[e._v("deactivate")]),e._v(" Deactivates (Pauses) the eye tracker device.")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("userPresenceStatusAway:")]),e._v(" Indicates that no user is sitting in front of the tracker.")]),e._v(" "),r("li",[r("strong",[e._v("userPresenceStatusPresent:")]),e._v(" Indicates that a user is sitting in front of the tracker.")]),e._v(" "),r("li",[r("strong",[e._v("calibrationStarted:")]),e._v(" Indicates that the tracker calibration has been started.")]),e._v(" "),r("li",[r("strong",[e._v("calibrationFinished:")]),e._v(" Indicates that the tracker calibration has been finished.")]),e._v(" "),r("li",[r("strong",[e._v("displayAreaChanged:")]),e._v(" Indicates that the assigned display has been changed.")]),e._v(" "),r("li",[r("strong",[e._v("powerSaveStateTrue:")]),e._v(" Indicates that the tracker is in power save mode.")]),e._v(" "),r("li",[r("strong",[e._v("powerSaveStateFalse:")]),e._v(" Indicates that the tracker is not in power save mode.")]),e._v(" "),r("li",[r("strong",[e._v("deviceOff:")]),e._v(" Indicates that the tracker is currently paused.")]),e._v(" "),r("li",[r("strong",[e._v("deviceOn:")]),e._v(" Indicates that the tracker is currently enabled.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("enabled [boolean]:")]),e._v(" Selects if the tracker is enabled at startup.")])])])}),[],!1,null,null,null);t.default=i.exports},3779:function(e,t,a){e.exports=a.p+"assets/img/tobiigaming_product_4c.a006cad9.png"}}]);