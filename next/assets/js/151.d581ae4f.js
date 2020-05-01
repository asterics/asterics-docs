(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1882:function(e,A,v){"use strict";v.r(A);var t=v(2),g=Object(t.a)({},(function(){var e=this,A=e.$createElement,t=e._self._c||A;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fs20-receiver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fs20-receiver"}},[e._v("#")]),e._v(" FS20 Receiver")]),e._v(" "),t("h3",{attrs:{id:"component-type-sensor-subcategory-home-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-type-sensor-subcategory-home-control"}},[e._v("#")]),e._v(" Component Type: Sensor (Subcategory: Home Control)")]),e._v(" "),t("p",[e._v("The FS20Receiver receives commands of the home automation system FS20 for ELV Electronics. Depending on the received commands, events will be fired.")]),e._v(" "),t("p",[t("img",{attrs:{src:v(2350),alt:"FS20 Receiver Plugin",title:"FS20 Receiver Plugin"}}),t("br"),e._v("\nFS20 Receiver Plugin")]),e._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),t("p",[e._v("This component requires the FS20 PCE (see "),t("a",{attrs:{href:"http://www.elv.de/FS20-PC-Empfauml;nger-FS20-PCE/x.aspx/cid_74/detail_10/detail2_31219",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.elv.de/FS20-PC-Empfauml;nger-FS20-PCE/x.aspx/cid_74/detail_10/detail2_31219"),t("OutboundLink")],1),e._v(") connected to an USB port.")]),e._v(" "),t("p",[t("img",{attrs:{src:v(2351),alt:"FS20 PCE Receiver",title:"FS20 PCE Receiver"}}),t("br"),e._v("\nFS20 PCE Receiver")]),e._v(" "),t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("fs20command [string]:")]),e._v(" The received FS20 command will be send out of the plugin. The data has the following format: housecode_sendaddress_command, e.g. 11111111_3343_17")])]),e._v(" "),t("h2",{attrs:{id:"event-trigger-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),t("p",[e._v("Each received command triggers an event, being mapped to this command. The following table will describe this events:")]),e._v(" "),t("p",[e._v("Command Mapping")]),e._v(" "),t("p",[e._v("Event")]),e._v(" "),t("p",[e._v("Command")]),e._v(" "),t("p",[e._v("Off")]),e._v(" "),t("p",[e._v("0")]),e._v(" "),t("p",[e._v("Level1")]),e._v(" "),t("p",[e._v("1")]),e._v(" "),t("p",[e._v("Level2")]),e._v(" "),t("p",[e._v("2")]),e._v(" "),t("p",[e._v("Level3")]),e._v(" "),t("p",[e._v("3")]),e._v(" "),t("p",[e._v("Level4")]),e._v(" "),t("p",[e._v("4")]),e._v(" "),t("p",[e._v("Level5")]),e._v(" "),t("p",[e._v("5")]),e._v(" "),t("p",[e._v("Level6")]),e._v(" "),t("p",[e._v("6")]),e._v(" "),t("p",[e._v("Level7")]),e._v(" "),t("p",[e._v("7")]),e._v(" "),t("p",[e._v("Level8")]),e._v(" "),t("p",[e._v("8")]),e._v(" "),t("p",[e._v("Level9")]),e._v(" "),t("p",[e._v("9")]),e._v(" "),t("p",[e._v("Level10")]),e._v(" "),t("p",[e._v("10")]),e._v(" "),t("p",[e._v("Level11")]),e._v(" "),t("p",[e._v("11")]),e._v(" "),t("p",[e._v("Level12")]),e._v(" "),t("p",[e._v("12")]),e._v(" "),t("p",[e._v("Level13")]),e._v(" "),t("p",[e._v("13")]),e._v(" "),t("p",[e._v("Level14")]),e._v(" "),t("p",[e._v("14")]),e._v(" "),t("p",[e._v("Level15")]),e._v(" "),t("p",[e._v("15")]),e._v(" "),t("p",[e._v("Level16")]),e._v(" "),t("p",[e._v("16")]),e._v(" "),t("p",[e._v("OnOldLevel")]),e._v(" "),t("p",[e._v("17")]),e._v(" "),t("p",[e._v("Toggle")]),e._v(" "),t("p",[e._v("18")]),e._v(" "),t("p",[e._v("Dim Up")]),e._v(" "),t("p",[e._v("19")]),e._v(" "),t("p",[e._v("Dim Down")]),e._v(" "),t("p",[e._v("20")]),e._v(" "),t("p",[e._v("Dim Up and Down")]),e._v(" "),t("p",[e._v("21")]),e._v(" "),t("p",[e._v("Program internal timer")]),e._v(" "),t("p",[e._v("22")]),e._v(" "),t("p",[e._v("Off for timer then old brightness level")]),e._v(" "),t("p",[e._v("24")]),e._v(" "),t("p",[e._v("On for timer then off")]),e._v(" "),t("p",[e._v("25")]),e._v(" "),t("p",[e._v("On old brightness level for timer then off")]),e._v(" "),t("p",[e._v("26")]),e._v(" "),t("p",[e._v("On for timer then old brightness level")]),e._v(" "),t("p",[e._v("30")]),e._v(" "),t("p",[e._v("On for old level then previous state")]),e._v(" "),t("p",[e._v("31")]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("housecode [integer]")]),e._v(" The housecode, the system should react on. The housecode has 8 digits, each from 1 to 4. This property influences the event triggers, but not the "),t("em",[e._v("fs20command")]),e._v(" output port.")]),e._v(" "),t("li",[t("strong",[e._v("sendaddress [integer]")]),e._v(" The sendaddress, the system should react on. The sendaddress has 4 digits, each from 1 to 4. This property influences the event triggers, but not the "),t("em",[e._v("fs20command")]),e._v(" output port.")])])])}),[],!1,null,null,null);A.default=g.exports},2350:function(e,A,v){e.exports=v.p+"assets/img/FS20Receiver.0644e792.jpg"},2351:function(e,A){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAPAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQABgQEBAUEBgUFBgkGBQYJCwgGBggLDAoKCwoKDBAMDAwMDAwQDA4PEA8ODBMTFBQTExwbGxscHx8fHx8fHx8fHwEHBwcNDA0YEBAYGhURFRofHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8f/8AAEQgA7gDuAwERAAIRAQMRAf/EAK8AAQACAgMBAQAAAAAAAAAAAAABAgMHBAUGCQgBAQEBAAMBAAAAAAAAAAAAAAABAgMEBgUQAAEDAgQDBAUHBwkGBwEAAAEAEQIhAzESBAVBUQZhIhMHcYEyFAiRobFC0iMVwdFiciQXGPDhUoKiwjM0JfGy04RVFpOjRFQ1RSYnEQEAAgEDBAAEBAUFAAAAAAAAARECITEDQVESBPBhIgWRsTITgaHRYhTB4fFCBv/aAAwDAQACEQMRAD8A/VKAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIPy/wBf/EJ1R/31vmzbXq5bXtWyaj3K2dPZtXb1+7bJF2UpXgREZgcoCxrKzo6A+fHWUcd93KQDuRZ0Yw9MeSapbGfP3q4TMZ77uQIDlrejq3LupUnkg+ffV7Afje5ykeAhox/cSpPIHnz1aznfNzZ2bLpH/wBxKk8lv369Wyc/jm6ZXbDS05O0MEqTyZI+dnV5y/65ugzO1NKcD+olSWkednVzP+N7px/9rw/qJUlkvOvq8Yb3unp/ZuT17iVJbF++zq8kg73uwlyzab6ciVJaYedfVxBzb1ugbgZ6cN2n7tKktH77OqxIR/G90Jq/fscOXcSpLT++nqsSAO+b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MhF4hg+FaDsQWjEuBxcDF2fkUVIjF5ZYuxNDzCC0BGcjUgN+RBlyxjExEat3eIbt5KDBciwJFXbAqjDKJwcviRxB9CIvG2MWYEDu8iOSCwtiLh8zBh/OghiLZiGMXZsa40ZBJzYPgz1QQAIxES7SlQetAizkEgzdj2sUFMs5kwjXHhWv5kCxUBuXAY/OqOw26DHczmodriGo/wDnLCzPRqOr9/rkQQEBAQEH4B61tf8A9M62iwzQ3nVFiQKeLPgViNjLd1EIUeMjmq8hFnPD1qoC3EjuW5BwwicPmQWEa4AceOJxEkF2uvVjIVweoowP5VBUwBDvlIrHk/0oIiLdygfKAzMWJ7AgtleWbCB9l6CnA+hBaIJFaF8ORKCxtyEmqTI97i/o9CC8gQ4kaM4xwGBBRVhMgACp+s/0IJM3Ye1GRYcqVQYz3omrAhy9Gc/kQRG2c8WIOYZXwFeDoLWoMXJI4Zh8gqiMsod4yOIDiBo5H0orFmkAedSacDiiJjGdZgsxArx5U5ILeCcxrklEe0QXogv4cZVNRHj28GRWOVkZTljVqSOJHpxRERsHxHymMjTNgMK0PFUdjt1gm5ukPDAbbIxyOa/tdjjisz0ajq/fC5EEBAQEBBofzA+Gi5vfV249RbJuFjTHdpi9rNNqYzYXgGlKEoPSTZmIxWZiV0eXPwq9Xg93cNu9Ur4HyZFKkqFf4WOszjrdvL4vcvf8NKkqE/ws9ZO5123vge/ew/8ADSpNFx8LvWAp73oK4/eXf+GlSaH8LvV1P2rb+77Pfu0/8tKk0R/C31eAR73t9ce/dY/2FKk0Qfha6uOOq2/tad0f3EqTRb+Frq0s+s28f1732Fak0SPhb6tH/q9vfD2732EqTRP8LnVrAe+bcwwGe99hSpNEj4XergAPfduYfpXvsJUmgPhc6sAP7Zt/ex712v8AYSpNAfC71dQe+7cGwOa8W/sJUmiR8LfVgjlGv24R5Pe+wrUmiR8LnVTN79tzcnvNT+olSaE/he6tOOt26XrvfYSpNEfwwdYuSNdtzkua3cefsJUmif4Xer2D7jt1MP8AG+wlSaJPwv8AWJDHc9vI5Pebn/QSpND+F3q//qW3/Le+wlSaB+F3rDhum3+n777CVJotH4XerqPuu305+Mf7iVJo9Btvw3avS9P7vZvbjp7u9a+za02luCExYtW4ai3emSfblKQtNhRPGVuG9ltkQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEH/2Q=="}}]);