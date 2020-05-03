(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{1258:function(e,t,n){"use strict";n.r(t);var o=n(1),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"arduino"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#arduino"}},[e._v("#")]),e._v(" Arduino")]),e._v(" "),o("h3",{attrs:{id:"component-type-processors-subcategory-microcontroller-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processors-subcategory-microcontroller-interface"}},[e._v("#")]),e._v(" Component Type: Processors (Subcategory: Microcontroller Interface)")]),e._v(" "),o("p",[e._v("The Arduino component provides an interface to the Arduino Uno microcontroller and makes available analog inputs and digital inputs and outputs.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(2759),alt:"Screenshot: Arduino plugin",title:"Screenshot: Arduino plugin"}}),o("br"),e._v("\nArduino plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("An Arduino UNO microcontroller board has to be connected to an USB port. The Arduino CIM firmware must have been downloaded into the Arduino to communicate via the CIM protocol with the Arduino component.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(2760),alt:"Arduino UNO board",title:"Arduino UNO board"}}),o("br"),e._v("\nArduino UNO board")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("pwm3 [integer]:")]),e._v(" PWM channel 3, output value (range: 0-255). The output signal depends on the mode (PWM or servo PWM)")]),e._v(" "),o("li",[o("strong",[e._v("pwm5 [integer]:")]),e._v(" PWM channel 5, output value (range: 0-255). The output signal depends on the mode (PWM or servo PWM)"),o("br"),e._v("\n**Warning:**Due to hardware limitations, either PWM or IO mode is available for pin 5 AND 6. It is not possible to use these pins individually!")]),e._v(" "),o("li",[o("strong",[e._v("pwm6 [integer]:")]),e._v(" PWM channel 6, output value (range: 0-255). The output signal depends on the mode (PWM or servo PWM)"),o("br"),e._v("\n**Warning:**Due to hardware limitations, either PWM or IO mode is available for pin 5 AND 6. It is not possible to use these pins individually!")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("A0 - A5 [integer]:")]),e._v(" The readings of the 6 analog channels of the Arduino (0-1023)")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("setPin2 - setPin13:")]),e._v(" An incoming event will set the corresponding digital output pin on the Arduino to high level (5V)")]),e._v(" "),o("li",[o("strong",[e._v("clearPin2 - clearPin13:")]),e._v(" An incoming event will set the corresponding digital output pin on the Arduino to low level (0V)")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("pin2ChangedToLow - pin13ChangedToLow:")]),e._v(" This event is triggered if the corresponding input pin on the Arduino switches from high to low level (connected to 0V)")]),e._v(" "),o("li",[o("strong",[e._v("pin2ChangedToHigh - pin13ChangedToHigh:")]),e._v(" This event is triggered if the corresponding input pin on the Arduino switches from low to high level (connected to 5V)")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("uniqueID [integer]:")]),e._v(" If more than one Arduino CIM is used, this property allows the identification of the module. (dynamic property)")]),e._v(" "),o("li",[o("strong",[e._v("periodicADCUpdate [integer]:")]),e._v(" This property defines how often the ADC values are measured and put out on the ports A0-A5 (0=disable ADC)")]),e._v(" "),o("li",[o("strong",[e._v("pin2Mode - pin13Mode [integer]:")]),e._v(" This property defines the mode of the Arduino Pins. The value can be selected via a ComboBox. Possible selections are:\n"),o("ul",[o("li",[e._v("not used")]),e._v(" "),o("li",[e._v("Input without pullup resistor")]),e._v(" "),o("li",[e._v("Input with pullup resistor")]),e._v(" "),o("li",[e._v("output, default low")]),e._v(" "),o("li",[e._v("output, default high")]),e._v(" "),o("li",[e._v("PWM servo (PWM for servo driving, 1-2ms pulse), available only on pin 3,5 and 6")]),e._v(" "),o("li",[e._v("500Hz PWM (normal 0-100% PWM), available only on pin 3,5 and 6")])])])])])}),[],!1,null,null,null);t.default=i.exports},2759:function(e,t,n){e.exports=n.p+"assets/img/Arduino.14daa46f.jpg"},2760:function(e,t,n){e.exports=n.p+"assets/img/Arduino_picture.1f3fe4f7.jpg"}}]);