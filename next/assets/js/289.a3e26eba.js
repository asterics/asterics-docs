(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{861:function(e,t,a){"use strict";a.r(t);var o=a(2),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"gaming-toys-music"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gaming-toys-music"}},[e._v("#")]),e._v(" Gaming, Toys & Music")]),e._v(" "),t("p",[e._v("AsTeRICS can be used to control computer games, music programs or infrared-controlled lights and toys. The keyboard input of a game or a music program can be substituted by another input modality (e.g. head movement, eye gaze, switch press,…) which emulates a key press. Similarily, a toy can be controlled by adapting an input modality to an RC or infrared command.")]),e._v(" "),t("h2",{attrs:{id:"head-movement-to-smiley-tutorial"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#head-movement-to-smiley-tutorial"}},[e._v("#")]),e._v(" Head Movement to Smiley Tutorial")]),e._v(" "),t("p",[e._v("In a first tutorial, you will learn how to map up/down head movements to a discrete number between 1 and 4. The number will than be mapped to one of 4 image paths and the selected image will be shown in the ImageBox widget depending on the head movement.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/4621810/137794267-4b207741-a95c-40ed-9237-cdd9473f159c.gif",alt:"Demo showing selected smiley image (from angry to happy) depending on head movement"}})]),e._v(" "),t("p",[e._v("Later this tutorial can be used as a basis for other use cases as well, simply by exchanging the input signal (e.g. Use an air pressure or sip/puff value instead of head movements) or by exchanging the action (e.g. Send cursor keys "),t("kbd",[e._v("UP")]),e._v("/"),t("kbd",[e._v("DOWN")]),e._v(" or send a certain Infrared command instead of showing an image).")]),e._v(" "),t("h3",{attrs:{id:"model-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#model-description"}},[e._v("#")]),e._v(" Model Description")]),e._v(" "),t("p",[e._v("Below you can see the model used for this tutorial. You can "),t("a",{attrs:{href:"https://raw.githubusercontent.com/asterics/AsTeRICS/master/bin/ARE/models/tutorial/B_HeadMovement_MappedTo_SmileyImage.acs",target:"_blank",rel:"noopener noreferrer"}},[e._v("download"),t("OutboundLink")],1),e._v(" and open it in the "),t("strong",[e._v("ACS program")]),e._v(" or directly "),t("a",{attrs:{href:"http://webacs.asterics.eu/?areBaseURI=http://127.0.0.1:8081&openFile=https://raw.githubusercontent.com/asterics/AsTeRICS/master/bin/ARE/models/tutorial/B_HeadMovement_MappedTo_SmileyImage.acs",target:"_blank",rel:"noopener noreferrer"}},[e._v("open it in the "),t("strong",[e._v("WebACS")]),t("OutboundLink")],1),e._v(" web application.")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/4621810/149799674-39c65c41-7873-4fe2-ab23-e369548ed78b.png",alt:"Head-Smiley-Control-Model"}})]),e._v(" "),t("ol",[t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/sensors/XFacetrackerLK.html"}},[e._v("XFacetrackerLK")]),e._v(" plugin opens the first camera device with a resolution of 320x240 pixels, tracks the head movements and sends the relative movement in y-direction to the Integrate plugin.")],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/processors/Integrate.html"}},[e._v("Integrate")]),e._v(" plugin integrates the relative movements with minimum and maximum values set to "),t("strong",[e._v("0 and 240")]),e._v(" respectively (same as camera resolution). "),t("img",{attrs:{src:"https://user-images.githubusercontent.com/4621810/137796282-a2a080aa-d32a-4693-bfe8-af4a75dfadec.png",alt:"Head-Smiley-Control-Integrate-Properties"}})],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/processors/SignalTranslation.html"}},[e._v("SignalTranslation")]),e._v(" plugin translates the values between "),t("strong",[e._v("0 and 240")]),e._v(" to values between "),t("strong",[e._v("1.00 and 4.00")]),e._v(". "),t("img",{attrs:{src:"https://user-images.githubusercontent.com/4621810/137796551-1629aea6-a031-4143-9502-7d2c2862ccbd.png",alt:"Head-Smiley-Control-SignalTranslator-Properties"}})],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/processors/Quantizer.html"}},[e._v("Quantizer")]),e._v(" plugin creates a quantized (integer) number by rounding to the nearest integer number.")],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/processors/StringDispatcher.html"}},[e._v("StringDispatcher")]),e._v(" plugin has predefined Strings (paths to image files) which are sent to the output port depending on the input number (1-4). "),t("img",{attrs:{src:"https://user-images.githubusercontent.com/4621810/137797248-d663214b-8529-4493-858e-2bac85f129ae.png",alt:"Head-Smiley-Control-StringDispatcher-Properties"}})],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/actuators/TextDisplay.html"}},[e._v("TextDisplay")]),e._v(" widget shows the quantized number in a text box for debugging purposes only.")],1),e._v(" "),t("li",[e._v("The "),t("RouterLink",{attrs:{to:"/plugins/actuators/ImageBox.html"}},[e._v("ImageBox")]),e._v(" widget shows the image which path was received at the input port.")],1)]),e._v(" "),t("h2",{attrs:{id:"gaming"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gaming"}},[e._v("#")]),e._v(" Gaming")]),e._v(" "),t("p",[e._v("Many games can be controlled by keyboard shortcuts e.g. "),t("kbd",[e._v("a")]),e._v(","),t("kbd",[e._v("s")]),e._v(","),t("kbd",[e._v("d")]),e._v(","),t("kbd",[e._v("f")]),e._v(" or "),t("kbd",[e._v("left")]),e._v(","),t("kbd",[e._v("right")]),e._v(","),t("kbd",[e._v("up")]),e._v(","),t("kbd",[e._v("down")]),e._v(".\nYou can now use the "),t("a",{attrs:{href:"#head-movement-to-smiley-tutorial"}},[e._v("Head Movement to Smiley Tutorial")]),e._v(" and simply map the head up/down movement to a keyboard key by using they "),t("RouterLink",{attrs:{to:"/plugins/actuators/Keyboard.html"}},[e._v("Keyboard")]),e._v(" plugin.")],1),e._v(" "),t("p",[e._v("Simply exchange the slot Strings in the StringDispatcher plugin by the key strings or special key code strings (e.g. "),t("code",[e._v("{UP}")]),e._v(" for a cursor up key press emulation).")]),e._v(" "),t("h2",{attrs:{id:"sound-and-voice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sound-and-voice"}},[e._v("#")]),e._v(" Sound and Voice")]),e._v(" "),t("p",[e._v("Instead of showing smiley images you can use the "),t("RouterLink",{attrs:{to:"/plugins/actuators/MidiPlayer.html"}},[e._v("MidiPlayer")]),e._v(" to create midi tones. In this case directly send the output value of the Quantizer plugin to the input port "),t("code",[e._v("pitch")]),e._v(".")],1),e._v(" "),t("p",[e._v("If you want to generate voice, set the slot strings of the StringDispatcher plugin to the words and sentences you would like to synthesize. You must then connect one of the voice generation plugins (e.g. "),t("RouterLink",{attrs:{to:"/plugins/processors/SpeechProcessor.html"}},[e._v("SpeechProcessor")]),e._v(", "),t("RouterLink",{attrs:{to:"/plugins/actuators/SyntheticVoice.html"}},[e._v("SyntheticVoice")]),e._v(", "),t("RouterLink",{attrs:{to:"/plugins/actuators/PicoTTS.html"}},[e._v("PicoTTS")]),e._v(" to it.")],1),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"#blood-pressure-cuff-sound-and-toy-control"}},[e._v("project kissenklang")]),e._v(" uses a blood pressure cuff to create sounds using the "),t("RouterLink",{attrs:{to:"/plugins/actuators/MidiPlayer.html"}},[e._v("MidiPlayer")]),e._v(" plugin.")],1),e._v(" "),t("h2",{attrs:{id:"light"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#light"}},[e._v("#")]),e._v(" Light")]),e._v(" "),t("p",[e._v("If you would like to control an infrared-controlled light bulb, you can use the "),t("RouterLink",{attrs:{to:"/plugins/actuators/IRTrans.html"}},[e._v("IRTrans")]),e._v(" plugin and set the slot strings of the StringDispatcher plugin to the action strings of the respective infrared commands (e.g. "),t("code",[e._v("@IRTRANS: snd luminea-bulb,red")]),e._v(").")],1),e._v(" "),t("p",[e._v("Likewise you could use the "),t("RouterLink",{attrs:{to:"/plugins/actuators/PhilipsHue.html"}},[e._v("PhilipsHue")]),e._v(" plugin to control a Hue bulb depending on the head movement by setting the respective action string (e.g. "),t("code",[e._v('{"hue": 0, "sat": 254}')]),e._v(").")],1),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"#blood-pressure-cuff-sound-and-toy-control"}},[e._v("project kissenklang")]),e._v(" uses a blood pressure cuff to control a light bulb via infrared commands sent by the "),t("RouterLink",{attrs:{to:"/plugins/actuators/IRTrans.html"}},[e._v("IRTrans")]),e._v(" plugin.")],1),e._v(" "),t("h2",{attrs:{id:"toys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#toys"}},[e._v("#")]),e._v(" Toys")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"#blood-pressure-cuff-sound-and-toy-control"}},[e._v("project kissenklang")]),e._v(" uses a blood pressure cuff to control a toy robot via infrared commands sent by the "),t("RouterLink",{attrs:{to:"/plugins/actuators/IRTrans.html"}},[e._v("IRTrans")]),e._v(" plugin.")],1),e._v(" "),t("p",[e._v("The following tutorial documents a "),t("a",{attrs:{href:"https://www.ki-i.at/helicopter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("toy helicopter controlled with muscle signals"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"example-projects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-projects"}},[e._v("#")]),e._v(" Example Projects")]),e._v(" "),t("h3",{attrs:{id:"blood-pressure-cuff-sound-and-toy-control"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#blood-pressure-cuff-sound-and-toy-control"}},[e._v("#")]),e._v(" Blood Pressure Cuff Sound and Toy Control")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://github.com/asterics/unikate-kissenschalter",target:"_blank",rel:"noopener noreferrer"}},[e._v("project Kissenklang"),t("OutboundLink")],1),e._v(" used a consumer blood pressure cuff and the "),t("a",{attrs:{href:"https://www.asterics-foundation.org/projects/fabi/",target:"_blank",rel:"noopener noreferrer"}},[e._v("button interface FABI"),t("OutboundLink")],1),e._v(" to create sounds according to the pressure value of the cuff or to control various items like toy robots, soap bubble machine or infrared lights.")]),e._v(" "),t("h4",{attrs:{id:"demovideo-kissenklang"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demovideo-kissenklang"}},[e._v("#")]),e._v(" Demovideo Kissenklang")]),e._v(" "),t("UseCase",{attrs:{title:"Kissenklang Demovideo",media:"https://youtu.be/5d4WYjJhgug"}},[e._v("Demo of Kissenklang generating sounds according to the pressure value of the blood pressure cuff.")])],1)}),[],!1,null,null,null);t.default=s.exports}}]);