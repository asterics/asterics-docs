(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{1304:function(e,t,r){"use strict";r.r(t);var o=r(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"fabicronusmax"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#fabicronusmax"}},[e._v("#")]),e._v(" FabiCronusMax")]),e._v(" "),o("h3",{attrs:{id:"component-type-processor-subcategory-microcontroller-interface"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-microcontroller-interface"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: Microcontroller Interface)")]),e._v(" "),o("p",[e._v("This component provides an interface for the FABI controller and the CronsuMax USB stick. It enables the programming process of the FABI as well as the configuration for all supported gaming consoles. It is possible to configure the buttons which are connected to the FABI controller and store the set to the built-in EEPROM. Via the plugin the CronusMax stick controls the selected gaming device through the external buttons connected to the FABI. The set of buttons can be defined in a configuration file and modified for each game and console.")]),e._v(" "),o("p",[o("img",{attrs:{src:r(2793),alt:"Screenshot: FabiCronusMax plugin",title:"Screenshot: FabiCronusMax plugin"}}),o("br"),e._v("\nFabiCronusMax plugin")]),e._v(" "),o("p",[o("img",{attrs:{src:r(2794),alt:"Screenshot: CronusMax plugin",title:"Screenshot: CronusMax plugin"}}),o("br"),e._v("\nCronusMax USB Stick")]),e._v(" "),o("h2",{attrs:{id:"requirements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),o("p",[e._v("The Plugin requires a FABI2.0 compatible Version as well as the right COM Port. The Baudrate for the FABI controller is predefined at 9600 Baud. Additionally a CronusMax device is necessary as well as the software GTuner ("),o("a",{attrs:{href:"http://controllermax.com/downloads/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GTuner download"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("InConsole [string]:")]),e._v(" Input of the selected Console (e.g. PS3)")]),e._v(" "),o("li",[o("strong",[e._v("InGame [string]:")]),e._v(" Input of the selected Game (e.g. Need For Speed)")]),e._v(" "),o("li",[o("strong",[e._v("InMode [Integer]:")]),e._v(" Input of the selected Mode (e.g. 1)")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("OutConsole [string]:")]),e._v(" Output of the selected Console (e.g. PS3)")]),e._v(" "),o("li",[o("strong",[e._v("OutGame [string]:")]),e._v(" Output of the selected Game (e.g. Need For Speed)")]),e._v(" "),o("li",[o("strong",[e._v("OutMode [Integer]:")]),e._v(" Output of the selected Mode (e.g. 1)")]),e._v(" "),o("li",[o("strong",[e._v("OutModel [string]:")]),e._v(" Output for the next model to be started")]),e._v(" "),o("li",[o("strong",[e._v("OutButtons [string]:")]),e._v(" Output for the buttons in current mode, separated through a comma ‘,’")])]),e._v(" "),o("h2",{attrs:{id:"event-listener-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("ModeSwitcher:")]),e._v(" Switch between the modes.")]),e._v(" "),o("li",[o("strong",[e._v("GameSwitcher:")]),e._v(" Switch between the Games.")]),e._v(" "),o("li",[o("strong",[e._v("ConsoleSwitcher:")]),e._v(" Switch between the consoles.")])]),e._v(" "),o("h2",{attrs:{id:"event-trigger-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Busy:")]),e._v(" Triggered if Fabi is busy.")]),e._v(" "),o("li",[o("strong",[e._v("Ready:")]),e._v(" Triggered if Fabi is ready.")]),e._v(" "),o("li",[o("strong",[e._v("loadModel:")]),e._v(" Triggered to load new model.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("ComPort [integer]:")]),e._v(" COM Port of FABI.")]),e._v(" "),o("li",[o("strong",[e._v("ModeFilePath [string]:")]),e._v(" Path to the file with the configuration.")])]),e._v(" "),o("h2",{attrs:{id:"configuration-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[e._v("#")]),e._v(" Configuration file")]),e._v(" "),o("p",[e._v("The configuration file has to be a *.CSV file and the data has to be separated with ‘,’. The following two lines show the structure of a configuration file:")]),e._v(" "),o("p",[e._v("XBOXONE, BattleField, Mode, KEY_A, KEY_B, Mode, KEY_1, KEY_2"),o("br"),e._v("\nXBOX360, Formel1, Mode, KEY_A, KEY_B, KEY_C, KEY_D, KEY_E")]),e._v(" "),o("p",[e._v("The first field defines the console and the second one defines the game. “Mode” signals that the following fields are the keycodes which are connected to the buttons in the right order. There can be up to 10 modes per game and up to 6 buttons per mode.")])])}),[],!1,null,null,null);t.default=n.exports},2793:function(e,t,r){e.exports=r.p+"assets/img/FabiCronusMax.5b571bee.png"},2794:function(e,t,r){e.exports=r.p+"assets/img/CronusMax.f922334b.jpg"}}]);