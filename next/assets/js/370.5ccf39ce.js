(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1126:function(t,e,r){"use strict";r.r(e);var s=r(2),i=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"stringextractor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stringextractor"}},[t._v("#")]),t._v(" StringExtractor")]),t._v(" "),e("h2",{attrs:{id:"component-type-processor-subcategory-easy-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#component-type-processor-subcategory-easy-reading"}},[t._v("#")]),t._v(" Component Type: Processor (Subcategory: Easy Reading)")]),t._v(" "),e("p",[t._v("Extracts a subtext from a given input text and forwards it to the output port as soon as extraction was done based on start and end delimiter strings.")]),t._v(" "),e("p",[t._v("Delimiters must be in the correct order and non-overlapping.\nIn case of several occurrences, always the first occurrence of the start and the end delimiter are used.\nThe event trigger also fires during successful extraction, which is also the case for an empty extracted text (also handed to the output port).")]),t._v(" "),e("h2",{attrs:{id:"input-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[t._v("#")]),t._v(" Input Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("inText [string]")]),t._v(": Provides the input text, from which a subtext shall be extracted and sent to the output port, based on start and end delimiter specifications.")])]),t._v(" "),e("h2",{attrs:{id:"output-port-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[t._v("#")]),t._v(" Output Port Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("extractedText [string]")]),t._v(": Represents the subtext extracted from the input text based on delimiter specifications, i.e. the text between start and end delimiter (can also be an empty string).")])]),t._v(" "),e("h2",{attrs:{id:"event-listener-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[t._v("#")]),t._v(" Event Listener Description")]),t._v(" "),e("p",[t._v("None. (Each new "),e("code",[t._v("inText")]),t._v(" is checked for the existence of start and end delimiter.)")]),t._v(" "),e("h2",{attrs:{id:"event-trigger-description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[t._v("#")]),t._v(" Event Trigger Description")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("textExtracted")]),t._v(": Triggers when the end delimiter was detected after the start delimiter (not, if the order is wrong or one is missing or overlapping, i.e. within the other) and thus a subtext was extracted and sent to the output port.\n(An empty string is a valid output that also triggers!)")])]),t._v(" "),e("h2",{attrs:{id:"properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("startDelimiter [string, default: START]")]),t._v(": Defines the start string between which and the end string the text is extracted (no regular expression!)")]),t._v(" "),e("li",[e("strong",[t._v("endDelimiter [string, default: END]")]),t._v(": Defines the end string between which and the start string the text is extracted (no regular expression!)")])])])}),[],!1,null,null,null);e.default=i.exports}}]);