(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{2098:function(e,t,s){e.exports=s.p+"assets/img/MouseCapture.9a78212a.jpg"},546:function(e,t,s){"use strict";s.r(t);var o=s(22),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"mouse-capture"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#mouse-capture"}},[e._v("#")]),e._v(" Mouse Capture")]),e._v(" "),o("h3",{attrs:{id:"component-type-sensor-subcategory-standard-input-devices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-standard-input-devices"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Standard Input Devices)")]),e._v(" "),o("p",[e._v("This component provides access to mouse input activities of connected a standard mouse, like mouse x/y movement or button press/release activities. Mouse wheel and third mouse button are supported.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(2098),alt:"Screenshot: MouseCapture plugin",title:"Screenshot: MouseCapture plugin"}}),o("br"),e._v("\nMouseCapture plugin")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("A mouse or mouse-equivalent must be connected to the computer/personal platform.")]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("mouseX [integer]:")]),e._v(" This port provides current absolute mouse X-position or relative mouse X-movement as integer value (depending on the mode of operation).")]),e._v(" "),o("li",[o("strong",[e._v("mouseY [integer]:")]),e._v(" This port provides current absolute mouse Y-position or relative mouse Y-movement as integer value (depending on the mode of operation).")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("leftButtonPressed:")]),e._v(" This port fires an event as the left mouse button is pressed.")]),e._v(" "),o("li",[o("strong",[e._v("leftButtonReleased:")]),e._v(" This port fires an event as the left mouse button is released.")]),e._v(" "),o("li",[o("strong",[e._v("rightButtonPressed:")]),e._v(" This port fires an event as the right mouse button is pressed.")]),e._v(" "),o("li",[o("strong",[e._v("rightButtonReleased:")]),e._v(" This port fires an event as the right mouse button is released.")]),e._v(" "),o("li",[o("strong",[e._v("middleButtonPressed:")]),e._v(" This port fires an event as the middle mouse button is pressed.")]),e._v(" "),o("li",[o("strong",[e._v("middleButtonReleased:")]),e._v(" This port fires an event as the middle mouse button is released.")]),e._v(" "),o("li",[o("strong",[e._v("wheelUp:")]),e._v(" This port fires an event as the mouse wheel is turned one step away from the user.")]),e._v(" "),o("li",[o("strong",[e._v("wheelDown:")]),e._v(" This port fires an event as the mouse wheel is turned one step towards the user.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("blockEvents [boolean]:")]),e._v(" This property defines the mode of operation of the mousehook component. If this property is set to true, no mouse activities will be routed to the operating system - they will not be processed by other applications, the mouse cursor will not move and no clicks will be actually performed by the operation system. This can be useful if the mouse activity shall be transferred e.g. from the AsTeRICS personal platform to another system (via the HID actuator) or the mouse should be trapped to control a particular GUI or menu structure. In this case, the mouse component outputs only relative mouse movements in X and Y axis at the corresponding output ports. If the property value is set to false, mouse activities will be passed back to the operating system and will be processed as usual. In this case, the mousehook component provides the absolute mouse positions at the component?s output ports.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);