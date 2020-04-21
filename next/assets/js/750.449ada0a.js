(window.webpackJsonp=window.webpackJsonp||[]).push([[750],{1068:function(t,e,a){"use strict";a.r(e);var n=a(22),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"applicationlauncher"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#applicationlauncher"}},[t._v("#")]),t._v(" ApplicationLauncher")]),t._v(" "),n("h3",{attrs:{id:"component-type-actuator-subcategory-file-system"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-file-system"}},[t._v("#")]),t._v(" Component Type: Actuator (Subcategory: File System)")]),t._v(" "),n("p",[t._v("The ApplicationLauncher component can be used to run an external executable application.\nThe application name is given to the plugin via an input port.\nA default application can be started via an incoming event.\nTogehter with the Keyboard- or RemoteKeyboard components, the ApplicationLauncher plugin can perform complex automation tasks, for example open Skype, choose a contact and make a call.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2525),alt:"Screenshot: ApplicationLauncher plugin",title:"Screenshot: ApplicationLauncher plugin"}}),n("br"),t._v("\nApplicationLauncher plugin")]),t._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("filename [integer]:")]),t._v(" The filename of the application to be started (including path).")])]),t._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("launchNow:")]),t._v(" An incoming event on this port will start the (default or lastest received) application")]),t._v(" "),n("li",[n("strong",[t._v("closeNow:")]),t._v(" An incoming event on this port will close the current application")])]),t._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("defaultApplication [string]:")]),t._v(" Full path and filename of the default application")]),t._v(" "),n("li",[n("strong",[t._v("arguments [string]:")]),t._v(" the commandline arguments for the application")]),t._v(" "),n("li",[n("strong",[t._v("workingDirectory [string]:")]),t._v(" the working directory for the application ("),n("code",[t._v(".")]),t._v(" is used for home directory of the application)")]),t._v(" "),n("li",[n("strong",[t._v("closeCmd [string]:")]),t._v(" Optional close cmd, e.g. if started cmd has forked processes (e.g. OSKA) use: taskkill.exe /IM “OSKA Keyboard.exe” /T")]),t._v(" "),n("li",[n("strong",[t._v("autoLaunch [boolean]:")]),t._v(" Defines if the default application is automatically launched at startup")]),t._v(" "),n("li",[n("strong",[t._v("autoClose [boolean]:")]),t._v(" Defines if the current application is closed when the model is stopped")]),t._v(" "),n("li",[n("strong",[t._v("onlyByEvent [boolean]:")]),t._v(" If this property is set to true, incoming application files names will not be started immediately (only the launchNow event will start the application)")])])])}),[],!1,null,null,null);e.default=i.exports},2525:function(t,e,a){t.exports=a.p+"assets/img/ApplicationLauncher.c33bbe35.jpg"}}]);