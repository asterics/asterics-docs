(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{575:function(e,t,s){"use strict";s.r(t);var r=s(2),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"hrvrmssdfromrr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hrvrmssdfromrr"}},[e._v("#")]),e._v(" HRVRmssdFromRR")]),e._v(" "),s("h2",{attrs:{id:"component-type-processor-subcategory-easy-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-easy-reading"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Easy Reading)")]),e._v(" "),s("p",[e._v("Calculates and outputs the "),s("abbr",{attrs:{title:"Heart Rate Variability"}},[e._v("HRV")]),e._v(" in terms of "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" in milliseconds (ms) based on incoming R-R intervals (also in ms).")]),e._v(" "),s("p",[e._v("A sliding window of the x most recent R-R intervals, x being the property "),s("code",[e._v("rmssdWindowSize")]),e._v(", is used for the calculation, which is first started as soon as there have been x samples since the last reset (or model start).")]),e._v(" "),s("p",[e._v("Calculation and collection of samples can be paused and continued via event listener ports.\nThe output port rmssd only delivers a value, if there is an actual calculation (i.e. currently no pause and enough samples).")]),e._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("rrInterval [double]")]),e._v(": This port must deliver the R-R interval in ms, i.e. the time interval between the most significant, the highest, peaks (the R-peaks) of two consecutive QRS’ of an "),s("abbr",{attrs:{title:"Electrocardiogram"}},[e._v("ECG")]),e._v(".")])]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("rmssd [double]")]),e._v(": Provides the calculated "),s("abbr",{attrs:{title:"Root Mean Square"}},[e._v("RMS")]),e._v(" of successive differences in ms, calculated from the collected input port "),s("code",[e._v("rrInterval’s")]),e._v(" signals.")])]),e._v(" "),s("h2",{attrs:{id:"event-listener-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("resetCalculation")]),e._v(": When the event is detected, the plugin discards previous R-R intervals and resets the counter of intervals used for the calculation.\nThis does not influence running or paused states, i.e. if the plugin is currently paused, it will stay paused, otherwise there is a recalculation as soon as there are (again) enough samples.")]),e._v(" "),s("li",[s("strong",[e._v("pauseCalculation")]),e._v(": When the event is detected, from now on "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" is no longer recalculated and no value is sent to the output port, but R-R values from the input port continue to be stored (more recent ones overwrite existing ones due to the sliding window).\nThis can be used in order to wait for more meaningful R-R samples before the next calculation, respectively further outputs.")]),e._v(" "),s("li",[s("strong",[e._v("continueCalculation")]),e._v(": The event must be fired after each "),s("code",[e._v("pauseCalculation")]),e._v(" in order to continue "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation and sending the result to the output port again.")]),e._v(" "),s("li",[s("strong",[e._v("pauseComponent")]),e._v(": Completely pauses the component’s activity, i.e. from now on no "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" is recalculated and sent to the output port.\nIn addition to a "),s("code",[e._v("pauseCalculation")]),e._v(", no more R-R values from the input port are collected, either.")]),e._v(" "),s("li",[s("strong",[e._v("continueComponent")]),e._v(": To be used after "),s("code",[e._v("pauseComponent")]),e._v(" in order to collect R-R values from the input port again (values aren’t reset but progressively overwritten due to the sliding window) and to continue "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation and sending the result to the output port.")])]),e._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("rmssdRecalculated")]),e._v(": Triggers whenever an "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation has been finished and the current "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" value is available at the output port, i.e. if "),s("code",[e._v("rmssdWindowSize")]),e._v(" (property) is 100, it will trigger first when 100 intervals were received and calculation has finished, then after each further interval and calculation completion.")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("rmssdWindowSize [integer, default: 100]")]),e._v(": The number of R-R intervals that are used for each "),s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation, thus the sliding window size.\nExample: If this is set to 100, the 100 most recent R-R intervals are taken into consideration and calculation is not started before at least 100 values have been received at the input port (since the start or a possible reset).\nA valid value must be > 1, otherwise it is replaced by the default value.")])]),e._v(" "),s("h2",{attrs:{id:"prospective-use-in-easy-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prospective-use-in-easy-reading"}},[e._v("#")]),e._v(" Prospective use in Easy Reading")]),e._v(" "),s("p",[s("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" was found to be a suitable indicator for a user being stressed, in terms of heart rate measurement and its analysis in the time domain.\nThus this is one of the plugins that shall provide pre-processed input and clues for the reasoner implemented with AsTeRICS.")])])}),[],!1,null,null,null);t.default=a.exports}}]);