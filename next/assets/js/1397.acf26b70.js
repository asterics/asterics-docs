(window.webpackJsonp=window.webpackJsonp||[]).push([[1397],{3674:function(e,t,i){e.exports=i.p+"assets/img/openhab_overview.581d9688.png"},511:function(e,t,i){"use strict";i.r(t);var n=i(21),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"openhab"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#openhab"}},[e._v("#")]),e._v(" openHAB")]),e._v(" "),n("p",[e._v("Component Type: Processors (Subcategory: Home Control)")]),e._v(" "),n("p",[e._v("The openHAB component interfaces to an openHAB instance, which is used to configure and use a home control environment. Usually, openHAB is stand-alone. Therefore it has its own GUI, many many possible interfacing solutions (called bindings) and a configuration tool (based on Eclipse). More information is available here: "),n("a",{attrs:{href:"https://github.com/openhab/openhab/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB wiki"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("This component uses the provided REST API of openHAB to read and write the state of different nodes (called items) within the openHAB system.")]),e._v(" "),n("p",[n("img",{attrs:{src:i(3674),alt:"Screenshot: openHAB demo with different options (./light, heating, temperature, ...)",title:"Screenshot: openHAB demo with different options (light, heating, temperature, ...)"}})]),e._v(" "),n("p",[e._v("openHAB demo with different options (light, heating, temperature, ...)")]),e._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),n("p",[e._v("A functional openHAB installation, which is accessible via the web interface (the plugin connects via HTTP REST API). You can run either HTTP or HTTPS, in order to fulfill any security requirements. In addition, it is also possible to provide HTTP basic authentication with username/password. Please note, that any saved password in the AsTeRICS model is stored in the model file in PLAINTEXT!"),n("br"),e._v("\nTo run openHAB without password authentication, start openHAB with this command:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("./start_debug.sh\n")])])]),n("p",[e._v("To start with password authentication, use following command:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" ./start_debug.sh -Djava.security.auth.login.config"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("./etc/login.conf\n")])])]),n("p",[e._v("The user configuration is handled via this file:")]),e._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[e._v("openHAB_runtime/configurations/users.cfg\n")])])]),n("p",[e._v("Please note, that the first line is necessary, so do not remove it!"),n("br"),e._v("\nFurther information on configuration and usage of openHAB is available on the openHAB GitHub page ("),n("a",{attrs:{href:"https://github.com/openhab/openhab/wiki",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB wiki"),n("OutboundLink")],1),e._v(").")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("item1in [string]:")]),e._v(' New state for item1 (the corresponding name is set in the property item1in). For example: set the property item1in to Light_GF_Bed_Ceiling and send "ON" to the input port to switch on the light which is connected to this item.')]),e._v(" "),n("li",[n("strong",[e._v("item2in [string]:")]),e._v(" New state for item2 (the corresponding name is set in the property item2in). Example: see input port item1in")]),e._v(" "),n("li",[n("strong",[e._v("item3in [string]:")]),e._v(" New state for item3 (the corresponding name is set in the property item3in). Example: see input port item1in")]),e._v(" "),n("li",[n("strong",[e._v("item4in [string]:")]),e._v(" New state for item4 (the corresponding name is set in the property item4in). Example: see input port item1in")]),e._v(" "),n("li",[n("strong",[e._v("item5in [string]:")]),e._v(" New state for item5 (the corresponding name is set in the property item5in). Example: see input port item1in")]),e._v(" "),n("li",[n("strong",[e._v("item6in [string]:")]),e._v(" New state for item6 (the corresponding name is set in the property item6in). Example: see input port item1in")]),e._v(" "),n("li",[n("strong",[e._v("actionString [string]:")]),e._v(" NOT IMPLEMENTED YET: more flexible input, where a random item (referenced by the name) can be set.")])]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("item1 [string] - item6 [string]:")]),e._v(" The current state of the items1 to items6, corresponding to the item names of properties item1out to item6out")])]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("item1change - item6change:")]),e._v(" This event is triggered if the corresponding item (set by the properties item1event to item6event) changes its state. The initial value is NOT raising an event.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("updaterate [integer]:")]),e._v(" Time in milliseconds, which will ellapse between each status update. Default: 1s (1000ms)")]),e._v(" "),n("li",[n("strong",[e._v("hostname [string]:")]),e._v(" Hostname to connect to. It is possible to use a hostname, an IP adress or a FQDN")]),e._v(" "),n("li",[n("strong",[e._v("port [string]:")]),e._v(" Port of the openHAB installation. Defaults: 8080 for HTTP, 8443 for HTTPS. Please take care of any blocking firewall.")]),e._v(" "),n("li",[n("strong",[e._v("protocol [string]:")]),e._v(" Protocol to connect to openHAB. Either http or https may be used (recommended: https).")]),e._v(" "),n("li",[n("strong",[e._v("lazyCertificates [boolean]:")]),e._v(" If this property is set, any SSL related certificate check will be removed for the given hostname. This affects the hole ARE.")]),e._v(" "),n("li",[n("strong",[e._v("username [string]:")]),e._v(" This property is used, if the HTTP basic authentication of openHAB is used. Provide the username here.")]),e._v(" "),n("li",[n("strong",[e._v("password [string]:")]),e._v(" This property is used, if the HTTP basic authentication of openHAB is used. Provide the password here.")]),e._v(" "),n("li",[n("strong",[e._v("item1in [string]:")]),e._v(" Item name, which is used for the input port 1 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item2in [string]:")]),e._v(" Item name, which is used for the input port 2 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item3in [string]:")]),e._v(" Item name, which is used for the input port 3 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item4in [string]:")]),e._v(" Item name, which is used for the input port 4 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item5in [string]:")]),e._v(" Item name, which is used for the input port 5 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item6in [string]:")]),e._v(" Item name, which is used for the input port 6 (set an openHAB item)")]),e._v(" "),n("li",[n("strong",[e._v("item1out [string]:")]),e._v(" Item name, which is used for the output port 1 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item2out [string]:")]),e._v(" Item name, which is used for the output port 2 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item3out [string]:")]),e._v(" Item name, which is used for the output port 3 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item4out [string]:")]),e._v(" Item name, which is used for the output port 4 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item5out [string]:")]),e._v(" Item name, which is used for the output port 5 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item6out [string]:")]),e._v(" Item name, which is used for the output port 6 (fetch an openHAB item with the given updaterate)")]),e._v(" "),n("li",[n("strong",[e._v("item1event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item1change)")]),e._v(" "),n("li",[n("strong",[e._v("item2event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item2change)")]),e._v(" "),n("li",[n("strong",[e._v("item3event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item3change)")]),e._v(" "),n("li",[n("strong",[e._v("item4event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item4change)")]),e._v(" "),n("li",[n("strong",[e._v("item5event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item5change)")]),e._v(" "),n("li",[n("strong",[e._v("item6event [string]:")]),e._v(" Item name, which is used to raise an event if the state is changed (item6change)")])]),e._v(" "),n("h2",{attrs:{id:"additional-hints"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#additional-hints"}},[e._v("#")]),e._v(" Additional hints")]),e._v(" "),n("ul",[n("li",[e._v("The model will stop with an error message, if one of the item names in the properties is not found.")]),e._v(" "),n("li",[e._v("There is no feedback for checking a successful state change. E.g.: if your write to a read-only item (temperature sensor), nothing will happen")]),e._v(" "),n("li",[e._v("Use the "),n("em",[e._v("lazyCertificates")]),e._v(" property with care, it will disable a major part of the SSL handshaking for the whole Java session. It should be limited to the given hostname only, but without warranty.")]),e._v(" "),n("li",[e._v("The username/password combination from the properties is saved in PLAINTEXT in the model file, so handle it with care.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);