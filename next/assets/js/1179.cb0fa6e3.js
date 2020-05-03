(window.webpackJsonp=window.webpackJsonp||[]).push([[1179],{1762:function(e,t,A){"use strict";A.r(t);var a=A(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"fs20-sender"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fs20-sender"}},[e._v("#")]),e._v(" FS20 Sender")]),e._v(" "),a("h2",{attrs:{id:"component-type-actuator-subcategory-home-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#component-type-actuator-subcategory-home-control"}},[e._v("#")]),e._v(" Component Type: Actuator (Subcategory: Home Control)")]),e._v(" "),a("p",[e._v("With the FS20 Sender commands for the FS20 house automation system can be sent over the PCS device sold by ELV electronics. See "),a("a",{attrs:{href:"http://www.elv.de/output/controller.aspx?cid=74&detail=10&detail2=29530&flv=1&bereich=&:marke=",target:"_blank",rel:"noopener noreferrer"}},[e._v("the ELV FS20 homepage"),a("OutboundLink")],1),e._v(" for details.")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("p",[e._v("The PCS sender must be attached to the system!")]),e._v(" "),a("p",[a("img",{attrs:{src:A(3378),alt:"Picture of the PCS FS20 sender",title:"Picture of the PCS FS20 sender"}})]),e._v(" "),a("p",[e._v("Picture of the PCS FS20 sender")]),e._v(" "),a("h2",{attrs:{id:"supported-oses"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-oses"}},[e._v("#")]),e._v(" Supported OSes")]),e._v(" "),a("p",[e._v("Windows (x86,x64), Linux (x86, x64, arm(Raspberry Pi)), Mac OSX(x86, x64)")]),e._v(" "),a("h2",{attrs:{id:"notes-on-linux-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-linux-platform"}},[e._v("#")]),e._v(" Notes on Linux platform")]),e._v(" "),a("p",[e._v("If you installed AsTeRICS as package, all necessary permission already set. If you built AsTeRICS on your own, please type following command on a terminal window:")]),e._v(" "),a("p",[a("em",[e._v("sudo echo ‘ATTRS{idProduct}==“e015”, ATTRS{idVendor}==“18ef”, MODE=“0660”, GROUP=“plugdev”’ > /etc/udev/rules.d/50-asterics-fs20.rules")])]),e._v(" "),a("p",[e._v("Onw additional command is necessary if you work on ARM based platforms (RaspberryPi, BananaPi,…):")]),e._v(" "),a("p",[a("em",[e._v("sudo ln -sf /lib/arm-linux-gnueabihf/libudev.so.1 /lib/arm-linux-gnueabihf/libudev.so.0")])]),e._v(" "),a("p",[e._v("Afterwards, unplug and plug in the FS20 device and restart AsTeRICS.")]),e._v(" "),a("h2",{attrs:{id:"input-port-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("houseCode [int]:")]),e._v(" The houseCode to which the command should be sent. Overrides the houseCode set in the properties")]),e._v(" "),a("li",[a("strong",[e._v("address [int]:")]),e._v(" The address of the target device. Overrides the houseCode set in the properties.")]),e._v(" "),a("li",[a("strong",[e._v("action [string]:")]),e._v(" Action input to send commands from other components which output a variable string, for example OSKA. The string format is as follows: @FS20:houseCode,address,command; e.g.@FS20:11111111,1234,18 to send the toggle command to the device with housecode 11111111 and address 1234. The delimiters ‘,’, ‘_’ and ’ ’ are allowed. For the indices of the commands see the table below.")])]),e._v(" "),a("h2",{attrs:{id:"event-listener-description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),a("p",[e._v("See table below for a list of all commands that can be triggered")]),e._v(" "),a("p",[e._v("Command Mapping")]),e._v(" "),a("p",[e._v("Command")]),e._v(" "),a("p",[e._v("ID")]),e._v(" "),a("p",[e._v("Off")]),e._v(" "),a("p",[e._v("0")]),e._v(" "),a("p",[e._v("Level1")]),e._v(" "),a("p",[e._v("1")]),e._v(" "),a("p",[e._v("Leve2")]),e._v(" "),a("p",[e._v("2")]),e._v(" "),a("p",[e._v("Leve3")]),e._v(" "),a("p",[e._v("3")]),e._v(" "),a("p",[e._v("Leve4")]),e._v(" "),a("p",[e._v("4")]),e._v(" "),a("p",[e._v("Leve5")]),e._v(" "),a("p",[e._v("5")]),e._v(" "),a("p",[e._v("Leve6")]),e._v(" "),a("p",[e._v("6")]),e._v(" "),a("p",[e._v("Leve7")]),e._v(" "),a("p",[e._v("7")]),e._v(" "),a("p",[e._v("Leve8")]),e._v(" "),a("p",[e._v("8")]),e._v(" "),a("p",[e._v("Leve9")]),e._v(" "),a("p",[e._v("9")]),e._v(" "),a("p",[e._v("Level10")]),e._v(" "),a("p",[e._v("10")]),e._v(" "),a("p",[e._v("Level11")]),e._v(" "),a("p",[e._v("11")]),e._v(" "),a("p",[e._v("Level12")]),e._v(" "),a("p",[e._v("12")]),e._v(" "),a("p",[e._v("Level13")]),e._v(" "),a("p",[e._v("13")]),e._v(" "),a("p",[e._v("Level14")]),e._v(" "),a("p",[e._v("14")]),e._v(" "),a("p",[e._v("Level15")]),e._v(" "),a("p",[e._v("15")]),e._v(" "),a("p",[e._v("Level16")]),e._v(" "),a("p",[e._v("16")]),e._v(" "),a("p",[e._v("OnOldLevel")]),e._v(" "),a("p",[e._v("17")]),e._v(" "),a("p",[e._v("Toggle")]),e._v(" "),a("p",[e._v("18")]),e._v(" "),a("p",[e._v("Dim Up")]),e._v(" "),a("p",[e._v("19")]),e._v(" "),a("p",[e._v("Dim Down")]),e._v(" "),a("p",[e._v("20")]),e._v(" "),a("p",[e._v("Dim Up and Down")]),e._v(" "),a("p",[e._v("21")]),e._v(" "),a("p",[e._v("Program internal timer")]),e._v(" "),a("p",[e._v("22")]),e._v(" "),a("p",[e._v("Off for timer then old brightness level")]),e._v(" "),a("p",[e._v("24")]),e._v(" "),a("p",[e._v("On for timer then off")]),e._v(" "),a("p",[e._v("25")]),e._v(" "),a("p",[e._v("On old brightness level for timer then off")]),e._v(" "),a("p",[e._v("26")]),e._v(" "),a("p",[e._v("On for timer then old brightness level")]),e._v(" "),a("p",[e._v("30")]),e._v(" "),a("p",[e._v("On for old level then previous state")]),e._v(" "),a("p",[e._v("31")]),e._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("houseCode [integer]:")]),e._v(" The default housecode for the component if there is no on the input port.")]),e._v(" "),a("li",[a("strong",[e._v("address [integer]:")]),e._v(" The default address for the component if there is no on the input port.")])])])}),[],!1,null,null,null);t.default=r.exports},3378:function(e,t){e.exports="data:image/jpeg;base64,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"}}]);