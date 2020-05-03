(window.webpackJsonp=window.webpackJsonp||[]).push([[409],{3864:function(e,t,v){e.exports=v.p+"assets/img/fs20receiver.0644e792.jpg"},3865:function(e,t,v){e.exports=v.p+"assets/img/fs20pce.71fd5453.jpg"},477:function(e,t,v){"use strict";v.r(t);var r=v(1),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"frontmatter-title"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),r("p",[e._v("Component Type: Sensor (Subcategory: Home Control)")]),e._v(" "),r("p",[e._v("The FS20Receiver receives commands of the home automation system FS20 for ELV Electronics. Depending on the received commands, events will be fired.")]),e._v(" "),r("p",[r("img",{attrs:{src:v(3864),alt:"FS20 Receiver Plugin",title:"FS20 Receiver Plugin"}})]),e._v(" "),r("p",[e._v("FS20 Receiver Plugin")]),e._v(" "),r("h2",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),r("p",[e._v("This component requires the "),r("a",{attrs:{href:"http://www.elv.de/empfaenger-fs20-funkschaltsystem.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("FS20 PCE Receiver"),r("OutboundLink")],1),e._v(" connected to a USB port.")]),e._v(" "),r("p",[r("img",{attrs:{src:v(3865),alt:"FS20 PCE Receiver",title:"FS20 PCE Receiver"}})]),e._v(" "),r("p",[e._v("FS20 PCE Receiver")]),e._v(" "),r("h2",{attrs:{id:"supported-oses"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-oses"}},[e._v("#")]),e._v(" Supported OSes")]),e._v(" "),r("p",[e._v("Windows (x86,x64), Linux (x86, x64, arm(Raspberry Pi)), Mac OSX(x86, x64)")]),e._v(" "),r("h2",{attrs:{id:"notes-on-linux-platform"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#notes-on-linux-platform"}},[e._v("#")]),e._v(" Notes on Linux platform")]),e._v(" "),r("p",[e._v("If you installed AsTeRICS as package, all necessary permission already set. If you built AsTeRICS on your own, please type following command on a terminal window:")]),e._v(" "),r("p",[r("em",[e._v("sudo echo ‘ATTRS{idProduct}==“e015”, ATTRS{idVendor}==“18ef”, MODE=“0660”, GROUP=“plugdev”’ > /etc/udev/rules.d/50-asterics-fs20.rules")])]),e._v(" "),r("p",[e._v("Onw additional command is necessary if you work on ARM based platforms (RaspberryPi, BananaPi,…):")]),e._v(" "),r("p",[r("em",[e._v("sudo ln -sf /lib/arm-linux-gnueabihf/libudev.so.1 /lib/arm-linux-gnueabihf/libudev.so.0")])]),e._v(" "),r("p",[e._v("Afterwards, unplug and plug in the FS20 device and restart AsTeRICS.")]),e._v(" "),r("h2",{attrs:{id:"output-port-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("fs20command [string]:")]),e._v(" The received FS20 command will be send out of the plugin. The data has the following format: housecode_sendaddress_command, e.g. 11111111_3343_17")])]),e._v(" "),r("h2",{attrs:{id:"event-trigger-description"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),r("p",[e._v("Each received command triggers an event, being mapped to this command. The following table will describe this events:")]),e._v(" "),r("p",[e._v("Command Mapping")]),e._v(" "),r("p",[e._v("Event")]),e._v(" "),r("p",[e._v("Command")]),e._v(" "),r("p",[e._v("Off")]),e._v(" "),r("p",[e._v("0")]),e._v(" "),r("p",[e._v("Level1")]),e._v(" "),r("p",[e._v("1")]),e._v(" "),r("p",[e._v("Level2")]),e._v(" "),r("p",[e._v("2")]),e._v(" "),r("p",[e._v("Level3")]),e._v(" "),r("p",[e._v("3")]),e._v(" "),r("p",[e._v("Level4")]),e._v(" "),r("p",[e._v("4")]),e._v(" "),r("p",[e._v("Level5")]),e._v(" "),r("p",[e._v("5")]),e._v(" "),r("p",[e._v("Level6")]),e._v(" "),r("p",[e._v("6")]),e._v(" "),r("p",[e._v("Level7")]),e._v(" "),r("p",[e._v("7")]),e._v(" "),r("p",[e._v("Level8")]),e._v(" "),r("p",[e._v("8")]),e._v(" "),r("p",[e._v("Level9")]),e._v(" "),r("p",[e._v("9")]),e._v(" "),r("p",[e._v("Level10")]),e._v(" "),r("p",[e._v("10")]),e._v(" "),r("p",[e._v("Level11")]),e._v(" "),r("p",[e._v("11")]),e._v(" "),r("p",[e._v("Level12")]),e._v(" "),r("p",[e._v("12")]),e._v(" "),r("p",[e._v("Level13")]),e._v(" "),r("p",[e._v("13")]),e._v(" "),r("p",[e._v("Level14")]),e._v(" "),r("p",[e._v("14")]),e._v(" "),r("p",[e._v("Level15")]),e._v(" "),r("p",[e._v("15")]),e._v(" "),r("p",[e._v("Level16")]),e._v(" "),r("p",[e._v("16")]),e._v(" "),r("p",[e._v("OnOldLevel")]),e._v(" "),r("p",[e._v("17")]),e._v(" "),r("p",[e._v("Toggle")]),e._v(" "),r("p",[e._v("18")]),e._v(" "),r("p",[e._v("Dim Up")]),e._v(" "),r("p",[e._v("19")]),e._v(" "),r("p",[e._v("Dim Down")]),e._v(" "),r("p",[e._v("20")]),e._v(" "),r("p",[e._v("Dim Up and Down")]),e._v(" "),r("p",[e._v("21")]),e._v(" "),r("p",[e._v("Program internal timer")]),e._v(" "),r("p",[e._v("22")]),e._v(" "),r("p",[e._v("Off for timer then old brightness level")]),e._v(" "),r("p",[e._v("24")]),e._v(" "),r("p",[e._v("On for timer then off")]),e._v(" "),r("p",[e._v("25")]),e._v(" "),r("p",[e._v("On old brightness level for timer then off")]),e._v(" "),r("p",[e._v("26")]),e._v(" "),r("p",[e._v("On for timer then old brightness level")]),e._v(" "),r("p",[e._v("30")]),e._v(" "),r("p",[e._v("On for old level then previous state")]),e._v(" "),r("p",[e._v("31")]),e._v(" "),r("h2",{attrs:{id:"properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("housecode [integer]")]),e._v(" The housecode, the system should react on. The housecode has 8 digits, each from 1 to 4. This property influences the event triggers, but not the "),r("em",[e._v("fs20command")]),e._v(" output port.")]),e._v(" "),r("li",[r("strong",[e._v("sendaddress [integer]")]),e._v(" The sendaddress, the system should react on. The sendaddress has 4 digits, each from 1 to 4. This property influences the event triggers, but not the "),r("em",[e._v("fs20command")]),e._v(" output port.")])])])}),[],!1,null,null,null);t.default=_.exports}}]);