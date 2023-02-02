(window.webpackJsonp=window.webpackJsonp||[]).push([[172],{1054:function(e,t,i){"use strict";i.r(t);var s=i(2),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),t("p",[e._v("Component Type: Actuator (Subcategory: File System)")]),e._v(" "),t("p",[e._v("This plugin writes the incoming data into an .edf file (http://www.edfplus.info/specs/edf.html)")]),e._v(" "),t("p",[e._v("The data gets live recorded, so it can be viewed simulaneously in the EDF-Browser ( http://www.teuniz.net/edfbrowser/ )")]),e._v(" "),t("p",[t("img",{attrs:{src:i(624),alt:"Screenshot: WriteEDF plugin",title:"Screenshot: WriteEDF plugin"}})]),e._v(" "),t("p",[e._v("WriteEDF")]),e._v(" "),t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("CH1 - CH8[double]:")]),e._v(" these ports get the data, which will be recorded.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("PatientID[string]:")]),e._v(" specifies the name of the subject. Maximum number of characters: 80")]),e._v(" "),t("li",[t("strong",[e._v("FileName[string]:")]),e._v(" specifies the name of the file (without extension ), in which the data will be recorded")]),e._v(" "),t("li",[t("strong",[e._v("reSampling[boolean]:")]),e._v(" If this box is checked, the incoming data will be resampled with the chosen frequency of the properties samplingRateCH1 - CH8. This could be neccessary, if the incoming data frequency is not known")]),e._v(" "),t("li",[t("strong",[e._v("SamplingRateCH1 - CH8[integer]:")]),e._v(" specifies the frequency of the incoming data. Values smaller than 1 will deactivate the corresponding channel")]),e._v(" "),t("li",[t("strong",[e._v("PhysicalMinimum CH1 - CH8 [integer]:")]),e._v(" specifies the minimum values of the incoming data")]),e._v(" "),t("li",[t("strong",[e._v("PhysicalMaximum CH1 - CH8 [integer]:")]),e._v(" specifies the maximum values of the incoming data")]),e._v(" "),t("li",[t("strong",[e._v("DigitalMinimum CH1 - CH8 [integer]:")]),e._v(" specifies the minimum values of the stored data")]),e._v(" "),t("li",[t("strong",[e._v("DigitalMaximum CH1 - CH8 [integer]:")]),e._v(" specifies the maximum values of the stored data")])])])}),[],!1,null,null,null);t.default=n.exports},624:function(e,t,i){e.exports=i.p+"assets/img/writeedf.ebcf5ca6.png"}}]);