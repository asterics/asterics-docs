(window.webpackJsonp=window.webpackJsonp||[]).push([[956],{1576:function(e,t,n){"use strict";n.r(t);var i=n(1),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"eventstatemachine"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eventstatemachine"}},[e._v("#")]),e._v(" EventStateMachine")]),e._v(" "),i("p",[e._v("This component allows definition of a sequence of events (up to 9 different incoming events are supported). If the sequence appears at the event listener ports in the given order, an event is fired by the EventStateMachine plugin. Optionally, a timing can be specified for a valid event sequence.")]),e._v(" "),i("h3",{attrs:{id:"component-type-processor-subcategory-event-and-signal-processing"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-event-and-signal-processing"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Event and Signal Processing)")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3011),alt:"Screenshot: EventStateMachine",title:"Screenshot: Event State Machine plugin"}}),i("br"),e._v("\nEvent State Machine plugin")]),e._v(" "),i("h2",{attrs:{id:"eventstatemachine-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#eventstatemachine-description"}},[e._v("#")]),e._v(" EventStateMachine Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("in1-in9:")]),e._v(" Incoming events")]),e._v(" "),i("li",[i("strong",[e._v("reset:")]),e._v(" Resets the current state detection to the first element of the sequence")])]),e._v(" "),i("h2",{attrs:{id:"event-trigger-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("finalStateReached:")]),e._v(" fired if the last element of the sequence is reached.")]),e._v(" "),i("li",[i("strong",[e._v("stateError:")]),e._v(" fired if an incoming event does not fit the sequence.")]),e._v(" "),i("li",[i("strong",[e._v("stateChanged:")]),e._v(" fired if a new state of the sequence is reached.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("stateSequence [string]:")]),e._v(" A sequence of digits separated by commas, representing the order of incoming events, for example: “1,5,2,3,1”.")]),e._v(" "),i("li",[i("strong",[e._v("stateTiming [string]:")]),e._v(" An (optional) sequence of timings for the above events, specified in min/max milliseconds for a state transition. One timing information consists of a numeric value for the maximum time or two numeric values separated by a forward slash (/) for minimum and maximum time. For example the timing “1000/2000,500/1000,x,3000” defines that the transition from first to second state my take a minimum of 1000 milliseconds and a maximum of 3000 milliseconds; The transition to the next state may trake 500-1000 milliseconds, the next transition has no timing contraints, the next transition may take up to 3000 milliseconds. If this property is left empty, no timing constraints are active for the event state transitions.")]),e._v(" "),i("li",[i("strong",[e._v("resetOnIncorrectEvent [boolean]:")]),e._v(" if checked, an incoming event which does not fit the current element of the sequence will reset the state detection to the first element of the sequence.")])])])}),[],!1,null,null,null);t.default=s.exports},3011:function(e,t,n){e.exports=n.p+"assets/img/EventStateMachine.5875716f.jpg"}}]);