(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{1113:function(t,e,r){"use strict";r.r(e);var s=r(2),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("h2",{attrs:{id:"component-type-processor-subcategory-event-and-string-processing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-event-and-string-processing"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: Event and String Processing)")]),t._v(" "),e("p",[t._v("This component processes strings with regular expressions. It can work in two modes: match strings with the pattern or replace string parts with another string. The regular expression syntax is defined in the "),e("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java class Pattern"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[e("img",{attrs:{src:r(688),alt:"Screenshot: RegularExpression plugin",title:"Screenshot: RegularExpression plugin"}})]),t._v(" "),e("p",[t._v("RegularExpression plugin")]),t._v(" "),e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("input [string]:")]),t._v(" String to match against the regular expression.")])]),t._v(" "),e("h2",{attrs:{id:"output-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("output [string]:")]),t._v(" If property replace=false, sends out input string in case of a match. if property replace=true, sends out replaced string.")])]),t._v(" "),e("h2",{attrs:{id:"event-trigger-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),e("ul",[e("li",[e("p",[e("strong",[t._v("match")]),t._v(" "),e("strong",[t._v(":")]),t._v(" This event is sent if the string matches the pattern.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("notMatch")]),t._v(" "),e("strong",[t._v(":")]),t._v(" This event is sent if the string doesn’t match the pattern.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("replace")]),t._v(" "),e("strong",[t._v(":")]),t._v(" This event is sent if parts of the string where replaced by the replaceString.")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("notReplace")]),t._v(" "),e("strong",[t._v(":")]),t._v(" This event is sent if no replacement occurred.")])])]),t._v(" "),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("pattern [string]:")]),t._v(" Regular expression pattern, see "),e("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java class Pattern"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("strong",[t._v("replace [boolean]:")]),t._v(" If the property is set to true, the component will search parts of the string which match the pattern and replace these parts with the replaceString, otherwise the component will match the whole string with the pattern.")]),t._v(" "),e("li",[e("strong",[t._v("replaceString [string]:")]),t._v(" The string which replaces expressions which matching the pattern.")])])])}),[],!1,null,null,null);e.default=n.exports},688:function(t,e,r){t.exports=r.p+"assets/img/regularexpression.6f50f3a3.jpg"}}]);