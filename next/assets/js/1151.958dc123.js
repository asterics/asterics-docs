(window.webpackJsonp=window.webpackJsonp||[]).push([[1151],{1901:function(e,r,t){"use strict";t.r(r);var s=t(2),o=Object(s.a)({},(function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"intelrealsense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#intelrealsense"}},[e._v("#")]),e._v(" IntelRealSense")]),e._v(" "),s("p",[e._v("Component Type: Sensor (Subcategory: Computer Vision)")]),e._v(" "),s("p",[e._v("OS: >= Windows 8.1, 64 bit")]),e._v(" "),s("p",[e._v("This component interfaces the Intel Real Sense F200 (SR300) 3D camera and provides head tracking and facial gesture recognition functionality. The head tracking could be used for camera mouse applications and provides 3D absolute coordinates. The facial gestures could be used for simple actions like mouse click or key emulation. Each facial gesture has a recognition score. The user can define the threshold that triggers an event when the score exceeds the threshold.")]),e._v(" "),s("h2",{attrs:{id:"requirements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),s("p",[e._v("You need an "),s("a",{attrs:{href:"https://software.intel.com/de-de/realsense/sr300camera",target:"_blank",rel:"noopener noreferrer"}},[e._v("Intel Real Sense F200 (SR300)"),s("OutboundLink")],1),e._v(" camera plugged in and the SDK installed and running. The camera only supports Windows (>= 8.1, 64 Bit).")]),e._v(" "),s("p",[s("img",{attrs:{src:t(3314),alt:"Intel Real Sense 3D camera",title:"Intel Real Sense F200 (SR300) camera"}})]),e._v(" "),s("p",[e._v("Intel Real Sense F200 (SR300) camera")]),e._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("h [integer]:")]),e._v(" The face rectangle height in pixels.")]),e._v(" "),s("li",[s("strong",[e._v("w [integer]:")]),e._v(" The face rectangle width in pixels.")]),e._v(" "),s("li",[s("strong",[e._v("x [integer]:")]),e._v(" The x coordinate of the top left corner of the face rectangle.")]),e._v(" "),s("li",[s("strong",[e._v("y [integer]:")]),e._v(" The y coordinate of the top left corner of the face rectangle.")]),e._v(" "),s("li",[s("strong",[e._v("roll [integer]:")]),e._v(" Degree of head roll.")]),e._v(" "),s("li",[s("strong",[e._v("yaw [integer]:")]),e._v(" Degree of head yaw (left - right).")]),e._v(" "),s("li",[s("strong",[e._v("pitch [integer]:")]),e._v(" Degree of head pitch (up - down).")])]),e._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("browRaiserLeft:")]),e._v(" browRaiserLeft expression happened")]),e._v(" "),s("li",[s("strong",[e._v("browRaiserRight:")]),e._v(" browRaiserRight expression happened")]),e._v(" "),s("li",[s("strong",[e._v("browLowererLeft:")]),e._v(" browLowererLeft expression happened")]),e._v(" "),s("li",[s("strong",[e._v("browLowererRight:")]),e._v(" browLowererRight expression happened")]),e._v(" "),s("li",[s("strong",[e._v("smile:")]),e._v(" smile expression happened")]),e._v(" "),s("li",[s("strong",[e._v("kiss:")]),e._v(" kiss expression happened")]),e._v(" "),s("li",[s("strong",[e._v("mouthOpen:")]),e._v(" mouthOpen expression happened")]),e._v(" "),s("li",[s("strong",[e._v("tongueOut:")]),e._v(" tongueOut expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesClosedLeft:")]),e._v(" eyesClosedLeft expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesClosedRight:")]),e._v(" eyesClosedRight expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesTurnLeft:")]),e._v(" eyesTurnLeft expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesTurnRight:")]),e._v(" eyesTurnRight expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesUp:")]),e._v(" eyesUp expression happened")]),e._v(" "),s("li",[s("strong",[e._v("eyesDown:")]),e._v(" eyesDown expression happened")]),e._v(" "),s("li",[s("strong",[e._v("puffLeft:")]),e._v(" puffLeft expression happened")]),e._v(" "),s("li",[s("strong",[e._v("puffRight:")]),e._v(" puffRight expression happened")])]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("deviceModel [combobox selection]:")]),e._v(" Camera model, one of: F200, R200, R200_Enhanced, SR300")]),e._v(" "),s("li",[s("strong",[e._v("enableExpressions:")]),e._v(" Enable,Disable facial expressions")]),e._v(" "),s("li",[s("strong",[e._v("displayGUI:")]),e._v(" Enable, Disable camera gui.")]),e._v(" "),s("li",[s("strong",[e._v("scoreBrowRaiserLeft:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreBrowRaiserRight:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreBrowLowererLeft:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreBrowLowererRight:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreSmile:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreKiss:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreMouthOpen:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreThongueOut:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesClosedLeft:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesClosedRight:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesTurnLeft:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesTurnRight:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesUp:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scoreEyesDown:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scorePuffLeft:")]),e._v(" Set score threshold value of expression to trigger event.")]),e._v(" "),s("li",[s("strong",[e._v("scorePuffRight:")]),e._v(" Set score threshold value of expression to trigger event.")])])])}),[],!1,null,null,null);r.default=o.exports},3314:function(e,r,t){e.exports=t.p+"assets/img/realsense_f200_camera.1ced686a.jpg"}}]);