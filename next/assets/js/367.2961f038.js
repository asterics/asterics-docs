(window.webpackJsonp=window.webpackJsonp||[]).push([[367],{1088:function(e,t,r){"use strict";r.r(t);var s=r(2),a=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"hrvrmssdfromrr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hrvrmssdfromrr"}},[e._v("#")]),e._v(" HRVRmssdFromRR")]),e._v(" "),t("h2",{attrs:{id:"component-type-processor-subcategory-easy-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-easy-reading"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Easy Reading)")]),e._v(" "),t("p",[e._v("Calculates and outputs the "),t("abbr",{attrs:{title:"Heart Rate Variability"}},[e._v("HRV")]),e._v(" in terms of "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" in milliseconds (ms) based on incoming R-R intervals (also in ms).")]),e._v(" "),t("p",[e._v("A sliding window of the x most recent R-R intervals, x being the property "),t("code",[e._v("rmssdWindowSize")]),e._v(", is used for the calculation, which is first started as soon as there have been x samples since the last reset (or model start).")]),e._v(" "),t("p",[e._v("Calculation and collection of samples can be paused and continued via event listener ports.\nThe output port rmssd only delivers a value, if there is an actual calculation (i.e. currently no pause and enough samples).")]),e._v(" "),t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("rrInterval [double]")]),e._v(": This port must deliver the R-R interval in ms, i.e. the time interval between the most significant, the highest, peaks (the R-peaks) of two consecutive QRS’ of an "),t("abbr",{attrs:{title:"Electrocardiogram"}},[e._v("ECG")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("rmssd [double]")]),e._v(": Provides the calculated "),t("abbr",{attrs:{title:"Root Mean Square"}},[e._v("RMS")]),e._v(" of successive differences in ms, calculated from the collected input port "),t("code",[e._v("rrInterval’s")]),e._v(" signals.")])]),e._v(" "),t("h2",{attrs:{id:"event-listener-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("resetCalculation")]),e._v(": When the event is detected, the plugin discards previous R-R intervals and resets the counter of intervals used for the calculation.\nThis does not influence running or paused states, i.e. if the plugin is currently paused, it will stay paused, otherwise there is a recalculation as soon as there are (again) enough samples.")]),e._v(" "),t("li",[t("strong",[e._v("pauseCalculation")]),e._v(": When the event is detected, from now on "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" is no longer recalculated and no value is sent to the output port, but R-R values from the input port continue to be stored (more recent ones overwrite existing ones due to the sliding window).\nThis can be used in order to wait for more meaningful R-R samples before the next calculation, respectively further outputs.")]),e._v(" "),t("li",[t("strong",[e._v("continueCalculation")]),e._v(": The event must be fired after each "),t("code",[e._v("pauseCalculation")]),e._v(" in order to continue "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation and sending the result to the output port again.")]),e._v(" "),t("li",[t("strong",[e._v("pauseComponent")]),e._v(": Completely pauses the component’s activity, i.e. from now on no "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" is recalculated and sent to the output port.\nIn addition to a "),t("code",[e._v("pauseCalculation")]),e._v(", no more R-R values from the input port are collected, either.")]),e._v(" "),t("li",[t("strong",[e._v("continueComponent")]),e._v(": To be used after "),t("code",[e._v("pauseComponent")]),e._v(" in order to collect R-R values from the input port again (values aren’t reset but progressively overwritten due to the sliding window) and to continue "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation and sending the result to the output port.")])]),e._v(" "),t("h2",{attrs:{id:"event-trigger-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("rmssdRecalculated")]),e._v(": Triggers whenever an "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation has been finished and the current "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" value is available at the output port, i.e. if "),t("code",[e._v("rmssdWindowSize")]),e._v(" (property) is 100, it will trigger first when 100 intervals were received and calculation has finished, then after each further interval and calculation completion.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("rmssdWindowSize [integer, default: 100]")]),e._v(": The number of R-R intervals that are used for each "),t("abbr",{attrs:{title:"Root Mean Square of Successive Differences"}},[e._v("RMSSD")]),e._v(" calculation, thus the sliding window size.\nExample: If this is set to 100, the 100 most recent R-R intervals are taken into consideration and calculation is not started before at least 100 values have been received at the input port (since the start or a possible reset).\nA valid value must be > 1, otherwise it is replaced by the default value.")])])])}),[],!1,null,null,null);t.default=a.exports}}]);