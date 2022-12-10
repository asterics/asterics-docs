(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1087:function(t,e,v){"use strict";v.r(e);var _=v(2),r=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"fs20commandinterpreter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fs20commandinterpreter"}},[t._v("#")]),t._v(" FS20CommandInterpreter")]),t._v(" "),e("p",[t._v("Component Type: Processor (Subcategory: Home Control)")]),t._v(" "),e("p",[t._v("The FS20CommandInterpreter receives strings containing commands of the home automation system FS20 for ELV Electronics. Depending on the received commands, events will be fired.")]),t._v(" "),e("p",[e("img",{attrs:{src:v(662),alt:"FS20 Command Interpreter Plugin",title:"FS20 Command Interpreter Plugin"}})]),t._v(" "),e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("command [string]:")]),t._v(" The command string containing the FS20 Command. The data must have the following format: housecode_sendaddress_command, e.g. 11111111_3343_17")])]),t._v(" "),e("h2",{attrs:{id:"event-trigger-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),e("p",[t._v("Each received command triggers an event, being mapped to this command. The following table will describe this events:")]),t._v(" "),e("p",[t._v("Command Mapping")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Event")]),t._v(" "),e("th",[t._v("Command")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Off")]),t._v(" "),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("Level1")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("Level2")]),t._v(" "),e("td",[t._v("2")])]),t._v(" "),e("tr",[e("td",[t._v("Level3")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("Level4")]),t._v(" "),e("td",[t._v("4")])]),t._v(" "),e("tr",[e("td",[t._v("Level5")]),t._v(" "),e("td",[t._v("5")])]),t._v(" "),e("tr",[e("td",[t._v("Level6")]),t._v(" "),e("td",[t._v("6")])]),t._v(" "),e("tr",[e("td",[t._v("Level7")]),t._v(" "),e("td",[t._v("7")])]),t._v(" "),e("tr",[e("td",[t._v("Level8")]),t._v(" "),e("td",[t._v("8")])]),t._v(" "),e("tr",[e("td",[t._v("Level9")]),t._v(" "),e("td",[t._v("9")])]),t._v(" "),e("tr",[e("td",[t._v("Level10")]),t._v(" "),e("td",[t._v("10")])]),t._v(" "),e("tr",[e("td",[t._v("Level11")]),t._v(" "),e("td",[t._v("11")])]),t._v(" "),e("tr",[e("td",[t._v("Level12")]),t._v(" "),e("td",[t._v("12")])]),t._v(" "),e("tr",[e("td",[t._v("Level13")]),t._v(" "),e("td",[t._v("13")])]),t._v(" "),e("tr",[e("td",[t._v("Level14")]),t._v(" "),e("td",[t._v("14")])]),t._v(" "),e("tr",[e("td",[t._v("Level15")]),t._v(" "),e("td",[t._v("15")])]),t._v(" "),e("tr",[e("td",[t._v("Level16")]),t._v(" "),e("td",[t._v("16")])]),t._v(" "),e("tr",[e("td",[t._v("OnOldLevel")]),t._v(" "),e("td",[t._v("17")])]),t._v(" "),e("tr",[e("td",[t._v("Toggle")]),t._v(" "),e("td",[t._v("18")])]),t._v(" "),e("tr",[e("td",[t._v("Dim Up")]),t._v(" "),e("td",[t._v("19")])]),t._v(" "),e("tr",[e("td",[t._v("Dim Down")]),t._v(" "),e("td",[t._v("20")])]),t._v(" "),e("tr",[e("td",[t._v("Dim Up and Down")]),t._v(" "),e("td",[t._v("21")])]),t._v(" "),e("tr",[e("td",[t._v("Program internal timer")]),t._v(" "),e("td",[t._v("22")])]),t._v(" "),e("tr",[e("td",[t._v("Off for timer then old brightness level")]),t._v(" "),e("td",[t._v("24")])]),t._v(" "),e("tr",[e("td",[t._v("On for timer then off")]),t._v(" "),e("td",[t._v("25")])]),t._v(" "),e("tr",[e("td",[t._v("On old brightness level for timer then off")]),t._v(" "),e("td",[t._v("26")])]),t._v(" "),e("tr",[e("td",[t._v("On for timer then old brightness level")]),t._v(" "),e("td",[t._v("30")])]),t._v(" "),e("tr",[e("td",[t._v("On for old level then previous state")]),t._v(" "),e("td",[t._v("31")])])])]),t._v(" "),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("housecode [integer]")]),t._v(" The housecode, the plugin should react on. The housecode has 8 digits, each from 1 to 4.")]),t._v(" "),e("li",[e("strong",[t._v("sendaddress [integer]")]),t._v(" The sendaddress, the plugin should react on. The sendaddress has 4 digits, each from 1 to 4.")])])])}),[],!1,null,null,null);e.default=r.exports},662:function(t,e,v){t.exports=v.p+"assets/img/fs20command.da8b3973.jpg"}}]);