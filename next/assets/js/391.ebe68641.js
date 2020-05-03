(window.webpackJsonp=window.webpackJsonp||[]).push([[391],{3727:function(t,e,i){t.exports=i.p+"assets/img/philipshue.66692d2e.png"},3728:function(t,e,i){t.exports=i.p+"assets/img/philipshue_properties.aab9dfb0.png"},840:function(t,e,i){"use strict";i.r(e);var r=i(1),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"philipshue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#philipshue"}},[t._v("#")]),t._v(" PhilipsHue")]),t._v(" "),r("h2",{attrs:{id:"component-type-actuator-subcategory-home-control"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-home-control"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: Home Control)")]),t._v(" "),r("p",[t._v("The PhilipsHue component provides an interface to the\n"),r("a",{attrs:{href:"https://www2.meethue.com/en-us",target:"_blank",rel:"noopener noreferrer"}},[t._v("Philips Hue smart lighting system"),r("OutboundLink")],1),t._v(".\nYou can also use "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=z9ayFNhmoBo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ikea Tradfri bulbs"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("One instance of this plugin can be used to control one specific Philips Hue light\nor all lights connected to the Philips Hue bridge at the same time.")]),t._v(" "),r("p",[r("img",{attrs:{src:i(3727),alt:"Screenshot: PhilipsHue plugin",title:"Screenshot: PhilipsHue plugin"}})]),t._v(" "),r("p",[t._v("Philips Hue plugin")]),t._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("ul",[r("li",[t._v("A Philips Hue hardware Bridge")]),t._v(" "),r("li",[t._v("A Philips Hue Light (such as a fixture, a light bulb or an LED strip)")])]),t._v(" "),r("h2",{attrs:{id:"initial-setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#initial-setup"}},[t._v("#")]),t._v(" Initial Setup")]),t._v(" "),r("h3",{attrs:{id:"hardware"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hardware"}},[t._v("#")]),t._v(" Hardware")]),t._v(" "),r("p",[t._v("The bridge has to be connected to the ethernet port of the router. The light has to be paired with the bridge.")]),t._v(" "),r("p",[t._v("Any device that ships with the bridge is already paired and ready to be used.")]),t._v(" "),r("p",[t._v("If they have been acquired separately you can "),r("strong",[t._v("pair")]),t._v(" them like so:")]),t._v(" "),r("ol",[r("li",[t._v("Connect the new light to an outlet or fixture "),r("strong",[t._v("close to the bridge")]),t._v(". If the bridge is not in the same room the pairing might not work. In case of Ikea Tradfri bulbs you must switch on/off it 6 times first, to unpair it from any Ikea gateway and make it findable for a Hue bridge.")]),t._v(" "),r("li",[t._v("Open the Philips Hue app on your phone")]),t._v(" "),r("li",[t._v("Go to "),r("em",[t._v("Settings")]),t._v(", select "),r("em",[t._v("Light Setup")]),t._v(" and press the "),r("em",[t._v("plus")]),t._v(" icon")]),t._v(" "),r("li",[t._v("Tap on "),r("em",[t._v("search")]),t._v(" to search for the new light")])]),t._v(" "),r("p",[t._v("If the light is not found you can enter the serial number (printed on the light)\nand tap search again.")]),t._v(" "),r("h3",{attrs:{id:"bridge-ip-address-and-api-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#bridge-ip-address-and-api-key"}},[t._v("#")]),t._v(" Bridge IP address and API key")]),t._v(" "),r("p",[t._v("The plugin requires the IP address of the bridge and an API key.")]),t._v(" "),r("p",[t._v("First let’s find out the IP address:")]),t._v(" "),r("ol",[r("li",[t._v("Open the "),r("a",{attrs:{href:"https://www2.meethue.com/de-at/philips-hue-app",target:"_blank",rel:"noopener noreferrer"}},[t._v("Philips Hue app"),r("OutboundLink")],1),t._v(" on your phone. If this does not work, try "),r("a",{attrs:{href:"https://www.hueessentials.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hue Essentials App"),r("OutboundLink")],1),t._v(".")]),t._v(" "),r("li",[t._v("Go to "),r("em",[t._v("Settings")]),t._v(", select "),r("em",[t._v("Hue Bridges")]),t._v(" and press the "),r("em",[t._v("i")]),t._v(" icon")]),t._v(" "),r("li",[t._v("Look for the line that says "),r("em",[t._v("IP address")])])]),t._v(" "),r("p",[t._v("Now let’s create a new API key using the CLIP API debugger.")]),t._v(" "),r("ol",[r("li",[t._v("Open "),r("code",[t._v("http://<bridge_ip>/debug/clip.html")]),t._v(" in your browser")]),t._v(" "),r("li",[t._v("Enter "),r("code",[t._v("/api")]),t._v(" in the "),r("em",[t._v("URL")]),t._v(" text field")]),t._v(" "),r("li",[t._v("Enter "),r("code",[t._v('{"devicetype": "<new_username>"}')]),t._v(" in the "),r("em",[t._v("Message Body")]),t._v(" text field")]),t._v(" "),r("li",[t._v("Press the round link button on the Hue bridge")]),t._v(" "),r("li",[t._v("Click on the "),r("em",[t._v("POST")]),t._v(" button")]),t._v(" "),r("li",[t._v("The string in the double quotes to the right of "),r("code",[t._v("username")]),t._v(" is your API key")])]),t._v(" "),r("p",[t._v("After adding the PhilipsHue plugin in the Model Designer you can fill out those properties.")]),t._v(" "),r("p",[r("img",{attrs:{src:i(3728),alt:"Screenshot: PhilipsHue plugin",title:"Screenshot: PhilipsHue plugin"}})]),t._v(" "),r("p",[t._v("Philips Hue properties")]),t._v(" "),r("p",[t._v("The target light ids are assigned from the bridge to the lights in order, starting with 1.")]),t._v(" "),r("p",[t._v("You can also send a "),r("em",[t._v("GET")]),t._v(" request to the URL "),r("code",[t._v("http://<bridge_ip>/api/<API_key>/lights")]),t._v("\nwith the CLIP API debugger.\nThis return a JSON dictionary. The keys of that dictionaries are the light ids,\nand the values can be used to identify the lights (by name, model or serial number).")]),t._v(" "),r("h2",{attrs:{id:"input-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("cmd [string]:")]),t._v(" This port expects JSON (see "),r("a",{attrs:{href:"https://developers.meethue.com/develop/hue-api/lights-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hue Lights API"),r("OutboundLink")],1),t._v(") and sends the command to the specified light.\n"),r("ul",[r("li",[t._v("Example 1: turn light off: "),r("code",[t._v('{"on": false}')])]),t._v(" "),r("li",[t._v("Example 2: set light to red with full saturation: "),r("code",[t._v('{"hue": 0, "sat": 254}')])]),t._v(" "),r("li",[t._v("Example 3: turn light on and enable color loop effect: "),r("code",[t._v('{"on": true, "effect": "colorloop"}')])])])])]),t._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("cmdResponse [string]:")]),t._v(" This port returns the reply from the bridge (in JSON).")]),t._v(" "),r("li",[r("strong",[t._v("currentState [string]:")]),t._v(" This port periodically returns the state the target light. The polling rate can be set via the updateRate property (in milliseconds).")])]),t._v(" "),r("h2",{attrs:{id:"event-listener-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("lightOn:")]),t._v(" turn target light on")]),t._v(" "),r("li",[r("strong",[t._v("lightOff:")]),t._v(" turn target light off")]),t._v(" "),r("li",[r("strong",[t._v("lightWhite:")]),t._v(" turn target light white (neutral color, 100% brightness)")]),t._v(" "),r("li",[r("strong",[t._v("lightRed:")]),t._v(" turn target light red")]),t._v(" "),r("li",[r("strong",[t._v("lightGreen:")]),t._v(" turn target light green")]),t._v(" "),r("li",[r("strong",[t._v("lightBlue:")]),t._v(" turn target light blue")]),t._v(" "),r("li",[r("strong",[t._v("lightBriLow:")]),t._v(" set brightness of target light to 10%")]),t._v(" "),r("li",[r("strong",[t._v("lightBriHalf:")]),t._v(" set brightness of target light to 50%")]),t._v(" "),r("li",[r("strong",[t._v("lightBriFull:")]),t._v(" set brightness of target light to 100%")]),t._v(" "),r("li",[r("strong",[t._v("lightSaturate:")]),t._v(" set saturation of target light to 100%")]),t._v(" "),r("li",[r("strong",[t._v("lightDesaturate:")]),t._v(" set saturation of target light to 0%")]),t._v(" "),r("li",[r("strong",[t._v("allLightsOn:")]),t._v(" turn all lights on")]),t._v(" "),r("li",[r("strong",[t._v("allLightsOff:")]),t._v(" turn all lights off")]),t._v(" "),r("li",[r("strong",[t._v("allLightsWhite:")]),t._v(" reset all lights (neutral color, 100% brightness)")]),t._v(" "),r("li",[r("strong",[t._v("allLightsRed:")]),t._v(" turn all lights red")]),t._v(" "),r("li",[r("strong",[t._v("allLightsGreen:")]),t._v(" turn all lights green")]),t._v(" "),r("li",[r("strong",[t._v("allLightsBlue:")]),t._v(" turn all lights blue")]),t._v(" "),r("li",[r("strong",[t._v("allLightsColorloop:")]),t._v(" activate the colorloop effect for all lights")]),t._v(" "),r("li",[r("strong",[t._v("allLightsBriLow:")]),t._v(" set brightness for all lights to 10%")]),t._v(" "),r("li",[r("strong",[t._v("allLightsBriHalf:")]),t._v(" set brightness for all lights to 50%")]),t._v(" "),r("li",[r("strong",[t._v("allLightsBriFull:")]),t._v(" set brightness for all lights to 100%")]),t._v(" "),r("li",[r("strong",[t._v("allLightsSaturate:")]),t._v(" set saturation for all lights to 100%")]),t._v(" "),r("li",[r("strong",[t._v("allLightsDesaturate:")]),t._v(" set saturation for all lights to 0%")])]),t._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("statusChanged:")]),t._v(" fires when any light changes its status")]),t._v(" "),r("li",[r("strong",[t._v("tick:")]),t._v(" fires for each tick (depends on updateRate property)")]),t._v(" "),r("li",[r("strong",[t._v("turnedOn:")]),t._v(" fires if the light is turned on")]),t._v(" "),r("li",[r("strong",[t._v("turnedOff:")]),t._v(" fires if the light is turned off")])]),t._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("apiKey [string]:")]),t._v(" API key for the REST API of the bridge")]),t._v(" "),r("li",[r("strong",[t._v("ip [string]:")]),t._v(" IP address of the bridge")]),t._v(" "),r("li",[r("strong",[t._v("target [string]:")]),t._v(" light to be controlled in the form "),r("code",[t._v("/light/<id>")])]),t._v(" "),r("li",[r("strong",[t._v("updateRate [integer]:")]),t._v(" polling rate for "),r("strong",[t._v("currentState")]),t._v(" and the event triggers\n"),r("ul",[r("li",[t._v("value in milliseconds")]),t._v(" "),r("li",[t._v("the lower this value is, the faster you will be notified of changes")]),t._v(" "),r("li",[t._v("don’t set this too low or the bridge might slow down (500 milliseconds is a good compromise)")])])])]),t._v(" "),r("h2",{attrs:{id:"notes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[t._v("#")]),t._v(" Notes")]),t._v(" "),r("ul",[r("li",[t._v("There is an example file ("),r("code",[t._v("philipshue.acs")]),t._v(") that demonstrates the full capabilities of the plugin.\nit can be found in the folder: "),r("code",[t._v("bin/ARE/models/useCaseDemos/environmentControl/")]),t._v(".")]),t._v(" "),r("li",[t._v("The CLIP API debugger will not work if your browser has strict XSS (cross-site scripting) protection enabled.\nIn that case you can use another REST API debugger (like "),r("a",{attrs:{href:"https://www.getpostman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),r("OutboundLink")],1),t._v("). You can also\ninstall a "),r("a",{attrs:{href:"https://github.com/PhilGrayson/chrome-csp-disable",target:"_blank",rel:"noopener noreferrer"}},[t._v("Chrome extension"),r("OutboundLink")],1),t._v(" that disables strict XSS checking\nfor specific sites.")]),t._v(" "),r("li",[t._v("If you have any other issue or need help you can drop the author a line: bmedicke@gmail.com")])])])}),[],!1,null,null,null);e.default=s.exports}}]);