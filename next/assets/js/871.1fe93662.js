(window.webpackJsonp=window.webpackJsonp||[]).push([[871],{1327:function(e,t,i){"use strict";i.r(t);var r=i(21),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"timer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#timer"}},[e._v("#")]),e._v(" Timer")]),e._v(" "),r("h3",{attrs:{id:"component-type-sensor-subcategory-simulation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-simulation"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Simulation)")]),e._v(" "),r("p",[e._v("The timer component can measure time in milliseconds, provide current time on an output port and trigger events when a specified time period has passed. It can be used to influence other features (e.g. to provide acceleration) or to enable dwell selection, for example clicking when a certain time has passed.")]),e._v(" "),r("p",[r("img",{attrs:{src:i(2732),alt:"Screenshot: Timer plugin",title:"Screenshot: Timer plugin"}}),r("br"),e._v("\nTimer plugin")]),e._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("period [integer]:")]),e._v(" The number of milliseconds the timer period property is set to.")])]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("time [integer]:")]),e._v(" The number of milliseconds which have passed since the timer has been started.")])]),e._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("start:")]),e._v(" An incoming event starts the timer.")]),e._v(" "),r("li",[r("strong",[e._v("stop:")]),e._v(" An incoming event stops the timer (pause, the current time value is not reset to 0).")]),e._v(" "),r("li",[r("strong",[e._v("reset:")]),e._v(" An incoming event resets the time value to 0 (but does not stop the timer).")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("periodFinished:")]),e._v(" This event is triggered when the given time has passed.")])]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("mode [integer]:")]),e._v(" This property selects one of several possible modes of operation of the timer:\n"),r("ul",[r("li",[r("em",[e._v("“one shot”:")]),e._v(" The timer runs once from 0 to the specified time, and then stops.")]),e._v(" "),r("li",[r("em",[e._v("“repeat n times”:")]),e._v(" The timer completes the time period several times (the number is selected with the repeat counter property).")]),e._v(" "),r("li",[r("em",[e._v("“endless loop”:")]),e._v(" the timer completes the time period until it is stopped by an event at the stop listener port.")]),e._v(" "),r("li",[r("em",[e._v("“once and continue time output”:")]),e._v(" The time period is completed once, the timer is not stopped but continues to send the last time value (this is useful to generate increasing values with persisting maximum value, e.g. for utilization as accelerated speed value).")]),e._v(" "),r("li",[r("em",[e._v("“measure time between start and stop”:")]),e._v(" The timer sends the time passed from start to stop events to the output port (when stop was received).")])])]),e._v(" "),r("li",[r("strong",[e._v("repeatCounter [integer]:")]),e._v(' The number of periods to finish for the "repeat n times " mode.')]),e._v(" "),r("li",[r("strong",[e._v("timePeriod (ms) [integer]:")]),e._v(" The time period covered by this counter in milliseconds.")]),e._v(" "),r("li",[r("strong",[e._v("resolution (ms) [integer]:")]),e._v(" The update rate of the timer in milliseconds. This value defines how often the current time value is updated and sent to the output port. It thereby defines the accuracy for the timer.")]),e._v(" "),r("li",[r("strong",[e._v("waitPeriod (ms) [integer]:")]),e._v(" This value specifies how long the timer is bypassed before it actually starts (after receiving a start event).")]),e._v(" "),r("li",[r("strong",[e._v("autostart [boolean]:")]),e._v(" This property defines if the timer will be started automatically together with the model (true) or if it will be started by an event (false).")])])])}),[],!1,null,null,null);t.default=s.exports},2732:function(e,t,i){e.exports=i.p+"assets/img/Timer.1ce9db2c.jpg"}}]);