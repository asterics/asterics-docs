(window.webpackJsonp=window.webpackJsonp||[]).push([[442],{2145:function(e,t,o){e.exports=o.p+"assets/img/Mouse.e500aaf3.jpg"},497:function(e,t,o){"use strict";o.r(t);var i=o(1),s=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"mouse"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#mouse"}},[e._v("#")]),e._v(" Mouse")]),e._v(" "),i("h3",{attrs:{id:"component-type-actuator-subcategory-input-device-emulation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-input-device-emulation"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Input Device Emulation)")]),e._v(" "),i("p",[e._v("The Mouse component allows mouse cursor positioning and clicking on the computer the ARE is running on (by software emulation).\nThe mouse x-position, y-position, press/release actions of three mouse buttons and mouse-wheel movements can be controlled via desired input values and event triggers.")]),e._v(" "),i("p",[i("img",{attrs:{src:o(2145),alt:"Screenshot: Mouse plugin",title:"Screenshot: Mouse plugin"}}),i("br"),e._v("\nMouse plugin")]),e._v(" "),i("h2",{attrs:{id:"input-port-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("mouseX [double]:")]),e._v(" The desired X-Position of the mouse.\n"),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("mouseY [double]:")]),e._v(" The desired Y-Position of the mouse.\n"),i("strong",[e._v("This input port supports synchronization")])]),e._v(" "),i("li",[i("strong",[e._v("action [string]:")]),e._v(" Input port for a command string.\nThis command string allows to modify the action of the next left mouse click - it can be set to trigger other types of mouse clicks.\nFollowing command strings are accepted:\n"),i("ul",[i("li",[i("em",[e._v("“@MOUSE: nextclick, right”:")]),e._v(" next left click event will create a right mouse button click.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, double”:")]),e._v(" next left click event will create a double click.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, middle”:")]),e._v(" next left click event will create a middle button click")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, drag”:")]),e._v(" next left click event will hold the left mouse button.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: nextclick, release”:")]),e._v(" next left click event will release the left mouse button.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: action, enable”:")]),e._v(" enables all mouse actions.")]),e._v(" "),i("li",[i("em",[e._v("“@MOUSE: action, disable”:")]),e._v(" disables all mouse actions.")]),e._v(" "),i("li",[i("em",[e._v('"@MOUSE: action, toggle:')]),e._v(" enables / disables all mouse actions.")])])])]),e._v(" "),i("h2",{attrs:{id:"event-listener-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("leftClick:")]),e._v(" An incoming event at this port creates a mouse button click.\nA left mouse button click will be generated, unless a valid “nextclick…” command has been received at the cmd input which changed the click type (see above).")]),e._v(" "),i("li",[i("strong",[e._v("middleClick:")]),e._v(" A click with the middle mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("rightClick:")]),e._v(" A click with the right mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("doubleClick:")]),e._v(" A double click with the left mouse button is generated.")]),e._v(" "),i("li",[i("strong",[e._v("dragPress:")]),e._v(" The left mouse button is pressed (but not released again).")]),e._v(" "),i("li",[i("strong",[e._v("dragRelease:")]),e._v(" The left mouse button is released.")]),e._v(" "),i("li",[i("strong",[e._v("wheelUp:")]),e._v(" The mouse wheel is turned one position from the user.")]),e._v(" "),i("li",[i("strong",[e._v("wheelDown:")]),e._v(" The mouse wheel is turned one position to the user.")]),e._v(" "),i("li",[i("strong",[e._v("activate:")]),e._v(" enables all mouse actions.")]),e._v(" "),i("li",[i("strong",[e._v("deactivate:")]),e._v(" disables all mouse actions.")]),e._v(" "),i("li",[i("strong",[e._v("toggle:")]),e._v(" enables / disables all mouse actions.")])]),e._v(" "),i("h2",{attrs:{id:"properties"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),i("ul",[i("li",[i("strong",[e._v("enableMouse [boolean]:")]),e._v(" The value of this property specifies if all mouse actions are bypassed (false) or enabled (true).")]),e._v(" "),i("li",[i("strong",[e._v("absolutePosition [boolean]:")]),e._v(" If this property value is set to false, incoming values at the mouseX and mouseY input ports are interpreted as relative movement information. The values are summed up (integrated) to calculate the absolute position.\nIf the property value is set to true, the values of the input ports are treated as absolute x/y positions.")]),e._v(" "),i("li",[i("strong",[e._v("xMin [integer]:")]),e._v(" The minimum value for the X-coordinate (the mouse will not move farther to the left).")]),e._v(" "),i("li",[i("strong",[e._v("xMax [integer]:")]),e._v(" The maximum value for the X-coordinate (the mouse will not move farther to the right).\n"),i("strong",[e._v("If the xMax property is set to 0, the horizontal screen resoltion will be assumed as maximum x-position for the mouse cursor.")])]),e._v(" "),i("li",[i("strong",[e._v("yMin [integer]:")]),e._v(" The minimum value for the Y-coordinate (the mouse will not move farther up).")]),e._v(" "),i("li",[i("strong",[e._v("yMax [integer]:")]),e._v(" The maximum value for the Y-coordinate (the mouse will not move farther down) "),i("strong",[e._v("If the yMax property is set to 0, the vertical screen resoltion will be assumed as maximum y-position for the mouse cursor.")]),e._v(".")])])])}),[],!1,null,null,null);t.default=s.exports}}]);