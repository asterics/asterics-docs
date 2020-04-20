(window.webpackJsonp=window.webpackJsonp||[]).push([[1407],{3683:function(t,e,r){t.exports=r.p+"assets/img/regularexpression.6f50f3a3.jpg"},484:function(t,e,r){"use strict";r.r(e);var s=r(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("p",[t._v("Component Type: Processor (Subcategory: Event and String Processing)")]),t._v(" "),s("p",[t._v("This component processes strings with regular expressions. It can work in two modes: match strings with the pattern or replace string parts with another string. The regular expression syntax is defined in the "),s("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java class Pattern"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:r(3683),alt:"Screenshot: RegularExpression plugin",title:"Screenshot: RegularExpression plugin"}})]),t._v(" "),s("p",[t._v("RegularExpression plugin")]),t._v(" "),s("h2",{attrs:{id:"input-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("input [string]:")]),t._v(" String to match against the regular expression.")])]),t._v(" "),s("h2",{attrs:{id:"output-port-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("output [string]:")]),t._v(" If property replace=false, sends out input string in case of a match. if property replace=true, sends out replaced string.")])]),t._v(" "),s("h2",{attrs:{id:"event-trigger-description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("match")]),t._v(" "),s("strong",[t._v(":")]),t._v(" This event is sent if the string matches the pattern.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("notMatch")]),t._v(" "),s("strong",[t._v(":")]),t._v(" This event is sent if the string doesn't match the pattern.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("replace")]),t._v(" "),s("strong",[t._v(":")]),t._v(" This event is sent if parts of the string where replaced by the replaceString.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("notReplace")]),t._v(" "),s("strong",[t._v(":")]),t._v(" This event is sent if no replacement occurred.")])])]),t._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("pattern [string]:")]),t._v(" Regular expression pattern, see "),s("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java class Pattern"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("replace [boolean]:")]),t._v(" If the property is set to true, the component will search parts of the string which match the pattern and replace these parts with the replaceString, otherwise the component will match the whole string with the pattern.")]),t._v(" "),s("li",[s("strong",[t._v("replaceString [string]:")]),t._v(" The string which replaces expressions which matching the pattern.")])])])}),[],!1,null,null,null);e.default=n.exports}}]);