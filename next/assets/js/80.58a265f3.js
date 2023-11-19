(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1168:function(e,t,n){"use strict";n.r(t);var i=n(2),r=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"openhab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openhab"}},[e._v("#")]),e._v(" openHAB")]),e._v(" "),t("p",[e._v("Component Type: Processors (Subcategory: Home Control)")]),e._v(" "),t("p",[e._v("The openHAB component interfaces to an openHAB instance, which is used to configure and use a home control environment.\nUsually, openHAB is stand-alone.\nTherefore it has its own GUI, many many possible interfacing solutions (called bindings) and a configuration tool (based on Eclipse).\nMore information is available here: "),t("a",{attrs:{href:"https://www.openhab.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("This component uses the provided "),t("a",{attrs:{href:"https://www.openhab.org/docs/configuration/restdocs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("REST API of openHAB"),t("OutboundLink")],1),e._v(" to read and write the state of different nodes (called items) within the openHAB system.")]),e._v(" "),t("p",[t("img",{attrs:{src:n(738),alt:"Screenshot: openHAB demo with different options (./light, heating, temperature, ...)",title:"Screenshot: openHAB demo with different options (light, heating, temperature, ...)"}})]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("The plugin expects")]),e._v(" "),t("ul",[t("li",[e._v("a functional "),t("a",{attrs:{href:"https://www.openhab.org/docs/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB installation"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"start-openhab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-openhab"}},[e._v("#")]),e._v(" Start OpenHAB")]),e._v(" "),t("p",[e._v("To run openHAB without password authentication, start openHAB with this command:")]),e._v(" "),t("h4",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),t("p",[e._v("On a debian-based system this should be:")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" openhab-cli start\n")])])]),t("h4",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[e._v("#")]),e._v(" Windows")]),e._v(" "),t("p",[e._v("in the openHAB folder, double click on "),t("code",[e._v("start_debug.sh")])]),e._v(" "),t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://www.openhab.org/docs/installation/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install openHAB"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Start openHab")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.openhab.org/docs/configuration/packages.html#demo-package-sample-setup",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create demo package"),t("OutboundLink")],1),e._v(" at first time startup")]),e._v(" "),t("li",[e._v("Open the model "),t("a",{attrs:{href:"http://webacs.asterics.eu/?areBaseURI=https://127.0.0.1:8083&openFile=https://raw.githubusercontent.com/asterics/AsTeRICS/master/bin/ARE/models/componentTests/processors/openHAB_simple_test.acs",target:"_blank",rel:"noopener noreferrer"}},[e._v("ARE/models/componentTests/processors/openHAB_simple_test.acs"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Upload/Start model")]),e._v(" "),t("li",[e._v("Open "),t("a",{attrs:{href:"http://localhost:8080/basicui/app?w=GF_Kitchen&sitemap=demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("Basic UI of the Kitchen"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("In ARE GUI: Click on "),t("code",[e._v("Item Light_GF_Kitchen_Ceiling ON")]),e._v(" or "),t("code",[e._v("Item Light_GF_Kitchen_Ceiling OFF")]),e._v(". You should see the switching of the item in the basic UI accordingly.")]),e._v(" "),t("li",[e._v("Change a value in the basic UI, you should get an event in the event visualizer of the ARE GUI.")])]),e._v(" "),t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("item1in [string]:")]),e._v(" New state for item1 (the corresponding name is set in the property item1in). For example: set the property item1in to Light_GF_Bed_Ceiling and send “ON” to the input port to switch on the light which is connected to this item.")]),e._v(" "),t("li",[t("strong",[e._v("item2in [string]:")]),e._v(" New state for item2 (the corresponding name is set in the property item2in). Example: see input port item1in")]),e._v(" "),t("li",[t("strong",[e._v("item3in [string]:")]),e._v(" New state for item3 (the corresponding name is set in the property item3in). Example: see input port item1in")]),e._v(" "),t("li",[t("strong",[e._v("item4in [string]:")]),e._v(" New state for item4 (the corresponding name is set in the property item4in). Example: see input port item1in")]),e._v(" "),t("li",[t("strong",[e._v("item5in [string]:")]),e._v(" New state for item5 (the corresponding name is set in the property item5in). Example: see input port item1in")]),e._v(" "),t("li",[t("strong",[e._v("item6in [string]:")]),e._v(" New state for item6 (the corresponding name is set in the property item6in). Example: see input port item1in")]),e._v(" "),t("li",[t("strong",[e._v("actionString [string]:")]),e._v(" Action String syntax is as follows: "),t("code",[e._v("@OPENHAB:<itemName>,<itemValue>")]),e._v(" or "),t("code",[e._v("<itemName>,<itemValue>")]),e._v(".\nExample: "),t("code",[e._v("@OPENHAB:Light_GF_Kitchen_Ceiling,ON")]),e._v(" or "),t("code",[e._v("Light_GF_Kitchen_Ceiling,ON")]),e._v(". For allowed item values, check the "),t("a",{attrs:{href:"https://www.openhab.org/docs/configuration/items.html#type",target:"_blank",rel:"noopener noreferrer"}},[e._v("Item Type Description"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("item1 [string] - item6 [string]:")]),e._v(" The current state of the items1 to items6, corresponding to the item names of properties item1out to item6out")])]),e._v(" "),t("h2",{attrs:{id:"event-trigger-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("item1change - item6change:")]),e._v(" This event is triggered if the corresponding item (set by the properties item1event to item6event) changes its state. The initial value is NOT raising an event.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("updaterate [integer]:")]),e._v(" Time in milliseconds, which will ellapse between each status update. Default: 1s (1000ms)")]),e._v(" "),t("li",[t("strong",[e._v("hostname [string]:")]),e._v(" Hostname to connect to. It is possible to use a hostname, an IP adress or a FQDN")]),e._v(" "),t("li",[t("strong",[e._v("port [string]:")]),e._v(" Port of the openHAB installation. Defaults: 8080 for HTTP, 8443 for HTTPS. Please take care of any blocking firewall.")]),e._v(" "),t("li",[t("strong",[e._v("protocol [string]:")]),e._v(" Protocol to connect to openHAB. Either http or https may be used (recommended: https).")]),e._v(" "),t("li",[t("strong",[e._v("lazyCertificates [boolean]:")]),e._v(" If this property is set, any SSL related certificate check will be removed for the given hostname. This affects the hole ARE.")]),e._v(" "),t("li",[t("strong",[e._v("username [string]:")]),e._v(" This property is used, if the HTTP basic authentication of openHAB is used. Provide the username here.")]),e._v(" "),t("li",[t("strong",[e._v("password [string]:")]),e._v(" This property is used, if the HTTP basic authentication of openHAB is used. Provide the password here.")]),e._v(" "),t("li",[t("strong",[e._v("item1in [string]:")]),e._v(" Item name, which is used for the input port 1 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item2in [string]:")]),e._v(" Item name, which is used for the input port 2 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item3in [string]:")]),e._v(" Item name, which is used for the input port 3 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item4in [string]:")]),e._v(" Item name, which is used for the input port 4 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item5in [string]:")]),e._v(" Item name, which is used for the input port 5 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item6in [string]:")]),e._v(" Item name, which is used for the input port 6 (set an openHAB item)")]),e._v(" "),t("li",[t("strong",[e._v("item1out [string]:")]),e._v(" Item name, which is used for the output port 1 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item2out [string]:")]),e._v(" Item name, which is used for the output port 2 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item3out [string]:")]),e._v(" Item name, which is used for the output port 3 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item4out [string]:")]),e._v(" Item name, which is used for the output port 4 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item5out [string]:")]),e._v(" Item name, which is used for the output port 5 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item6out [string]:")]),e._v(" Item name, which is used for the output port 6 (fetch an openHAB item with the given updaterate)")]),e._v(" "),t("li",[t("strong",[e._v("item1event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item1change)")]),e._v(" "),t("li",[t("strong",[e._v("item2event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item2change)")]),e._v(" "),t("li",[t("strong",[e._v("item3event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item3change)")]),e._v(" "),t("li",[t("strong",[e._v("item4event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item4change)")]),e._v(" "),t("li",[t("strong",[e._v("item5event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item5change)")]),e._v(" "),t("li",[t("strong",[e._v("item6event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item6change)")])]),e._v(" "),t("h2",{attrs:{id:"additional-hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#additional-hints"}},[e._v("#")]),e._v(" Additional hints")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.openhab.org/docs/configuration/restdocs.html#rest-api-documentation",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interactive openHAB REST documentation"),t("OutboundLink")],1),e._v(": Install the add-on "),t("code",[e._v("REST Documentation")]),e._v(". On the welcome screen of openHAB, you will now see a new interface called “REST API” where you can easily see the documentation of the REST API and test it!")]),e._v(" "),t("li",[e._v("To find and copy an item name you can click on the copy icon "),t("img",{attrs:{src:n(739),alt:"Screenshot of Paper UI item configurations"}}),e._v(" of an item in the "),t("a",{attrs:{href:"http://localhost:8080/paperui/index.html#/configuration/items",target:"_blank",rel:"noopener noreferrer"}},[e._v("Paper UI"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("The model will stop with an error message, if one of the item names in the properties is not found.")]),e._v(" "),t("li",[e._v("There is no feedback for checking a successful state change. E.g.: if your write to a read-only item (temperature sensor), nothing will happen")]),e._v(" "),t("li",[e._v("Use the "),t("em",[e._v("lazyCertificates")]),e._v(" property with care, it will disable a major part of the SSL handshaking for the whole Java session. It should be limited to the given hostname only, but without warranty.")]),e._v(" "),t("li",[e._v("The username/password combination from the properties is saved in PLAINTEXT in the model file, so handle it with care.")])])])}),[],!1,null,null,null);t.default=r.exports},738:function(e,t,n){e.exports=n.p+"assets/img/openhab_overview.c07c28f2.png"},739:function(e,t){e.exports="data:image/png;base64,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"}}]);