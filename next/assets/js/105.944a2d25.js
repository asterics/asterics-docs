(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{374:function(e,t,n){"use strict";n.r(t);var o=n(3),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"environmental-control"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#environmental-control"}},[e._v("#")]),e._v(" Environmental Control")]),e._v(" "),o("p",[e._v("AsTeRICS has many plugins for environmental control like "),o("strong",[e._v("KNX")]),e._v(", "),o("strong",[e._v("EnOcean")]),e._v(", "),o("strong",[e._v("IrTrans")]),e._v(", "),o("strong",[e._v("Phillips Hue")]),e._v(" or "),o("strong",[e._v("OpenHAB")]),e._v(". Check the "),o("RouterLink",{attrs:{to:"/plugins/"}},[e._v("Plugins")]),e._v(" page and filter by "),o("code",[e._v("Home Control")]),e._v(".")],1),e._v(" "),o("p",[e._v("On this page you will find some tutorials of how to use such plugins to control your environment and how to create and accessible user interface for it.")]),e._v(" "),o("h2",{attrs:{id:"openhab"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#openhab"}},[e._v("#")]),e._v(" OpenHAB")]),e._v(" "),o("p",[e._v("OpenHAB is an Open Source Home Automation SW that let’s you control light, heating and other appliances of your Smart Home. Such appliances or devices are called "),o("strong",[e._v("things")]),e._v(" which are represented as "),o("strong",[e._v("items")]),e._v(" in a user interface. OpenHAB provides several user interfaces and means of voice control.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("Accessible User Interface")]),e._v(" "),o("p",[e._v("This tutorial explains how to control an OpenHAB instance and it’s configured items by an AsTeRICS model and how to create an "),o("strong",[e._v("accessible user interface")]),e._v(" for it using AsTeRICS Grid.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("This tutorial is based on OpenHAB v3.x but should also work with OpenHAB v2.x")])]),e._v(" "),o("ol",[o("li",[e._v("Read the "),o("a",{attrs:{href:"https://www.openhab.org/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenHAB concept page"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://www.openhab.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install OpenHAB"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Download the "),o("a",{attrs:{href:"https://github.com/asterics/AsTeRICS/releases/download/v4.1.0/demo-conf-openhab2.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("openhab2 demo configuration zip file"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Restore the demo configuration using openhab-cli (Linux) by entering "),o("code",[e._v("sudo openhab-cli restore demo-conf-openhab2.zip")]),e._v(" in the command line. On other systems extract the .zip file and copy the "),o("code",[e._v("conf/items")]),e._v(" and the "),o("code",[e._v("conf/sitemaps")]),e._v(" folder to your OpenHAB config folder.")]),e._v(" "),o("li",[e._v("Start OpenHAB")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://raw.githubusercontent.com/asterics/AsTeRICS/master/bin/ARE/models/componentTests/processors/openHAB_simple_test.acs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download OpenHAB model"),o("OutboundLink")],1),e._v(" or "),o("a",{attrs:{href:"http://webacs.asterics.eu/?areBaseURI=http://127.0.0.1:8081&openFile=https://raw.githubusercontent.com/asterics/AsTeRICS/master/bin/ARE/models/componentTests/processors/openHAB_simple_test.acs",target:"_blank",rel:"noopener noreferrer"}},[e._v("Open OpenHAB model in WebACS"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("Start the ARE ("),o("code",[e._v("ARE.exe")]),e._v(" or "),o("code",[e._v("start.bat")]),e._v(" or "),o("code",[e._v("start.sh")]),e._v(")")]),e._v(" "),o("li",[e._v("Open model in ARE or Upload model from ACS")]),e._v(" "),o("li",[e._v("Start model in ARE")]),e._v(" "),o("li",[e._v("Open the "),o("a",{attrs:{href:"http://localhost:8080/basicui/app?w=GF_Kitchen&sitemap=demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenHAB Basic UI of the Kitchen"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("In the ARE GUI: Click on "),o("code",[e._v("Item Light_GF_Kitchen_Ceiling ON")]),e._v(" or "),o("code",[e._v("Item Light_GF_Kitchen_Ceiling OFF")]),e._v(". You should see the switching of the item in the basic UI accordingly.\n"),o("img",{attrs:{src:n(860),alt:"Screenshot: OpenHAB Basic UI of Kitchen and ARE GUI with buttons to control OpenHAB items. Animation showing light and roller shutter items switched on and off and the temperature slider changing the temperature"}})]),e._v(" "),o("li",[e._v("Change a value in the basic UI, you should get an event in the event visualizer of the ARE GUI.")])]),e._v(" "),o("h3",{attrs:{id:"accessible-ui"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#accessible-ui"}},[e._v("#")]),e._v(" Accessible UI")]),e._v(" "),o("p",[e._v("You can use AsTeRICS Grid to create an accessible UI for controlling your Smart Home using OpenHAB.")]),e._v(" "),o("ol",[o("li",[e._v("Open "),o("a",{attrs:{href:"https://grid.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[e._v("AsTeRICS Grid"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("See "),o("RouterLink",{attrs:{to:"/manuals/asterics-grid/05_actions.html#asterics-action"}},[e._v("AsTeRICS Action")]),e._v(": To know how to execute an action of an AsTeRICS model in a running ARE instance.")],1),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("Download from ARE")])]),e._v(" "),o("li",[e._v("In "),o("code",[e._v("Component")]),e._v(", select "),o("code",[e._v("openHAB.1_c")])]),e._v(" "),o("li",[e._v("In "),o("code",[e._v("Send data")]),e._v(" "),o("ol",[o("li",[e._v("Select "),o("code",[e._v("actionString")])]),e._v(" "),o("li",[e._v("Set item name and state value, e.g. "),o("code",[e._v("@OPENHAB:Light_GF_Kitchen_Ceiling,ON")]),e._v(" or "),o("code",[e._v("Light_GF_Kitchen_Ceiling,ON")]),e._v(" ("),o("RouterLink",{attrs:{to:"/plugins/processors/OpenHAB.html#input-port-description"}},[e._v("See plugin documentation")]),e._v(")")],1)])]),e._v(" "),o("li",[e._v("Test action by clicking on "),o("code",[e._v("Test Action")])]),e._v(" "),o("li",[e._v("Click "),o("code",[e._v("OK")]),e._v(" to save the action.")])])])}),[],!1,null,null,null);t.default=r.exports},860:function(e,t,n){e.exports=n.p+"assets/img/openhab-show-synced-control.2ac0761e.gif"}}]);