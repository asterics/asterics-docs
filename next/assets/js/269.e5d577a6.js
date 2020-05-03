(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1518:function(e,t,s){"use strict";s.r(t);var o=s(2),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"motionanalysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#motionanalysis"}},[e._v("#")]),e._v(" MotionAnalysis")]),e._v(" "),o("h3",{attrs:{id:"component-type-processor-subcategory-dsp-and-feature-detection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-dsp-and-feature-detection"}},[e._v("#")]),e._v(" Component Type: Processor (Subcategory: DSP and Feature Detection)")]),e._v(" "),o("p",[e._v("The MotionAnalysis Plugin procides a visual feedback for one or more channels. With this Plugin it is able to save a movement and compare it to later movements. To test this plugin MotionAnalysis_Example.acs can be used.")]),e._v(" "),o("h4",{attrs:{id:"save"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#save"}},[e._v("#")]),e._v(" Save")]),e._v(" "),o("p",[e._v("To save an exercise the save button has to be pressed. A new file with the name of the filename properity is created. To start the start button has to be pressed. The save funktion can be paused when the stop button is pressed. To restart the start button has to be pressed. To stop the save funktion the stopsave button has to be pressed.")]),e._v(" "),o("h4",{attrs:{id:"load"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[e._v("#")]),e._v(" Load")]),e._v(" "),o("p",[e._v("To load a file the load button has to be pressed. Then the explorer is opened an a file can be choosen. If a file is selected it is atomatically loaded in the graph. To start an exercise the start button has to be pressed. The exercies stops automatically when it is finished and a result is sent to the result output port.")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3015),alt:"MotionAnalysis plugin",title:"MotionAnalysis plugin"}}),o("br"),e._v("\nMotionAnalysis plugin")]),e._v(" "),o("p",[o("img",{attrs:{src:s(3016),alt:"Screenshot: MotionAnalysis plugin",title:"Screenshot: MotionAnalysis plugin"}}),o("br"),e._v("\nScreenshot: MotionAnalysis plugin")]),e._v(" "),o("h2",{attrs:{id:"input-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("channel1 [double]:")]),e._v(" The input signal for channel one.")]),e._v(" "),o("li",[o("strong",[e._v("channel2 [double]:")]),e._v(" The input signal for channel two.")]),e._v(" "),o("li",[o("strong",[e._v("channel2 [double]:")]),e._v(" The input signal for channel three.")]),e._v(" "),o("li",[o("strong",[e._v("channel2 [double]:")]),e._v(" The input signal for channel four.")])]),e._v(" "),o("h2",{attrs:{id:"output-port-description"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("result [string]:")]),e._v(" Sends the match between the loaded movement and the aktual movement.")]),e._v(" "),o("li",[o("strong",[e._v("percent [double]:")]),e._v(" Sends the actual position in percent of time.")])]),e._v(" "),o("h2",{attrs:{id:"properties"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("displayBuffer [integer]:")]),e._v(" This property value specifies how often the oscilloscope window is drawn. For example if the display buffer size is 0, the oscilloscope traces are redrawn at every incoming value. If the display buffer size is set to 10, 10 values are stored in a buffer and drawn at once as the tenth value is received. This significantly reduces the computational resources spent for drawing the oscilloscope, which is useful especially at high update rates.")]),e._v(" "),o("li",[o("strong",[e._v("drawingMode [integer]:")]),e._v(" Declares whether the y axis is adapting to mininum and maximum values automatically or to stay in preset bounds. This only affects the drawchannel not the loadchannel or the save option.")]),e._v(" "),o("li",[o("strong",[e._v("displayMode [integer]:")]),e._v(" Affects the time when oscilloscope is redrawn. Can be set to the values “redraw on incoming samples” or “redraw periodically”.")]),e._v(" "),o("li",[o("strong",[e._v("drawInterval [integer]:")]),e._v(" Redraw interval in milliseconds (if periodic drawing is used).")]),e._v(" "),o("li",[o("strong",[e._v("min [integer]:")]),e._v(" Preset minimum value for y axis of oscilloscope.")]),e._v(" "),o("li",[o("strong",[e._v("max [integer]:")]),e._v(" Preset maximum value for y axis of oscilloscope.")]),e._v(" "),o("li",[o("strong",[e._v("gridColor [integer]:")]),e._v(" The colour of the value-grid.")]),e._v(" "),o("li",[o("strong",[e._v("loadchannelColor [integer]:")]),e._v(" The colour of the signal trace for the loaded value.")]),e._v(" "),o("li",[o("strong",[e._v("drawchannelColor [integer]:")]),e._v(" The colour of the signal trace for the actual value.")]),e._v(" "),o("li",[o("strong",[e._v("backgroundColor [integer]:")]),e._v(" The colour of the background of the oscilloscope window.")]),e._v(" "),o("li",[o("strong",[e._v("fontSize [integer]:")]),e._v(" The size of the oscilloscope’s caption.")]),e._v(" "),o("li",[o("strong",[e._v("caption [string]:")]),e._v(" The caption to be displayed on the oscilloscope.")]),e._v(" "),o("li",[o("strong",[e._v("filename [string]:")]),e._v(" The name of the saved file. There is added a time and date to not overwrite a file.")]),e._v(" "),o("li",[o("strong",[e._v("filepath [string]:")]),e._v(" The path in wich the files are saved.")]),e._v(" "),o("li",[o("strong",[e._v("diviation [integer]:")]),e._v(" The allowed diviation of the loaded value and the actual value in one point of time.")]),e._v(" "),o("li",[o("strong",[e._v("limitation [integer]:")]),e._v(" The limitation of how much percent of match must be reached to raise an event.")])]),e._v(" "),o("h2",{attrs:{id:"eventlistener"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eventlistener"}},[e._v("#")]),e._v(" EventListener")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Start:")]),e._v(" Starts a movement.")]),e._v(" "),o("li",[o("strong",[e._v("Stop:")]),e._v(" Stops a movement.")]),e._v(" "),o("li",[o("strong",[e._v("Save:")]),e._v(" Starts to save a movement.")]),e._v(" "),o("li",[o("strong",[e._v("Stopsave:")]),e._v(" Stops to save a movement.")]),e._v(" "),o("li",[o("strong",[e._v("Load:")]),e._v(" Loads a movement.")])]),e._v(" "),o("h2",{attrs:{id:"eventtrigger"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#eventtrigger"}},[e._v("#")]),e._v(" EventTrigger")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Inrange:")]),e._v(" Raises a event when the result is higher than the limitation.")])])])}),[],!1,null,null,null);t.default=a.exports},3015:function(e,t,s){e.exports=s.p+"assets/img/MotionAnalysis_Plugin.53fc867f.jpg"},3016:function(e,t,s){e.exports=s.p+"assets/img/MotioinAnalysis_result.732edd21.jpg"}}]);