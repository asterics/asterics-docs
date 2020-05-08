(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{553:function(e,t,i){"use strict";i.r(t);var a=i(2),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"dictionaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dictionaries"}},[e._v("#")]),e._v(" Dictionaries")]),e._v(" "),a("p",[a("strong",[e._v("Video on YouTube:")]),e._v(" "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=DS9om8MDEDY&list=PL0UXHkT03dGrIHldlEKR0ZWfNMkShuTNz&index=19&t=0s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Manage dictionaries"),a("OutboundLink")],1),e._v(" (German, but auto-translated subtitles available)")]),e._v(" "),a("p",[e._v("This chapter is about dictionaries and how to manage and use them within AsTeRICS Grid.")]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/"}},[e._v("Back to Overview")])],1),e._v(" "),a("p",[e._v("A dictionary is a collection of words and their relations that is saved within AsTeRICS Grid in order to fill "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/01_terms.html#grid-element"}},[e._v("prediction elements")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"edit-dictionaries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-dictionaries"}},[e._v("#")]),e._v(" Edit dictionaries")]),e._v(" "),a("p",[e._v("The basic functionality of the manage dictionaries view was already described in chapter "),a("RouterLink",{attrs:{to:"/manuals/asterics-grid/02_navigation.html"}},[e._v("navigation and basic functionality")]),e._v(".")],1),e._v(" "),a("p",[e._v("In the manage dictionaries view clicking on “Edit” in the list of dictionaries allows to see the details of a dictionary and editing it:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(921),alt:"edit a dictionary"}}),e._v(" "),a("em",[e._v("Figure 1: Edit a dictionary")])]),e._v(" "),a("p",[e._v("Typing a word or a part of it in the search field filters the list of shown words. Clicking on the recycle bin symbol next to a word deletes it from the dictionary.")]),e._v(" "),a("h2",{attrs:{id:"add-words"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-words"}},[e._v("#")]),e._v(" Add words")]),e._v(" "),a("p",[e._v("Clicking on the “Import words” in Figure 1 button opens a modal:")]),e._v(" "),a("p",[a("img",{attrs:{src:i(922),alt:"import words to dictionary"}}),e._v(" "),a("em",[e._v("Figure 2: Import words modal")])]),e._v(" "),a("p",[e._v("These are the elements of the “import words” modal:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Advanced options")]),e._v(": click to toggle visibility of advanced import options (Fig. 2, advanced options are shown on the left, hidden on the right)")]),e._v(" "),a("li",[a("strong",[e._v("Input field")]),e._v(": field to input or paste words that should be imported to the dictionary")]),e._v(" "),a("li",[a("strong",[e._v("Recognized words")]),e._v(": live-updated list of recognized words based on the input options and words typed into the textfield")]),e._v(" "),a("li",[a("strong",[e._v("Cancel")]),e._v(": discard changes and close the modal")]),e._v(" "),a("li",[a("strong",[e._v("Insert words")]),e._v(": import the recognized words to the dictionary and close the modal")]),e._v(" "),a("li",[a("strong",[e._v("Element separator")]),e._v(": separator between words to recognize, can be either a single character or "),a("a",{attrs:{href:"https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank"}},[e._v("Javascript RegExp syntax")]),e._v(". Default value is the Javascript RegExp "),a("code",[e._v("[\\n; ]")]),e._v(" meaning that line breaks, semicolons and spaces can be used to divide words.")]),e._v(" "),a("li",[a("strong",[e._v("In-element separator")]),e._v(" (optional): single character or Javascript RegExp expression that re-splits elements that are recognized by “element separator”. This is needed if the imported data consists of words and and a rank specifying the position of the word based on it’s frequency.")]),e._v(" "),a("li",[a("strong",[e._v("Word index")]),e._v(": if “in-element separator” is set this property specifies the position of the word")]),e._v(" "),a("li",[a("strong",[e._v("Rank index")]),e._v(": if “in-element separator” is set this property specifies the position of the rank")])]),e._v(" "),a("h3",{attrs:{id:"example-import-a-big-word-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-import-a-big-word-list"}},[e._v("#")]),e._v(" Example: import a big word list")]),e._v(" "),a("p",[e._v("This example shows how to import a big list of words, for instance a list of the "),a("a",{attrs:{href:"http://corpus.leeds.ac.uk/frqc/internet-en-forms.num",target:"_blank"}},[e._v("most frequent 25000 words")]),e._v(" from from "),a("a",{attrs:{href:"http://corpus.leeds.ac.uk/",target:"_blank"}},[e._v("Corpus leeds")]),e._v(".")]),e._v(" "),a("p",[e._v("The format of the list looks like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("1 43116.72 the\n2 25428.07 of\n3 22833.85 to\n...\n")])])]),a("p",[e._v("Each data record has the format "),a("code",[e._v("<rank> <frequency> <word>")]),e._v(" and is separated by a line separator "),a("code",[e._v("\\n")]),e._v(". In order to import this list to AsTeRICS Grid the whole list has to be copied, inserted into the text field of the import modal (Fig. 2, number 2) and the following advanced options have to be set:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Element separator")]),e._v(": "),a("code",[e._v("\\n")]),e._v(" - since the data records are separated by line breaks")]),e._v(" "),a("li",[a("strong",[e._v("In-element separator")]),e._v(": "),a("code",[e._v("[ ]")]),e._v(" (space) - since the data inside the lines is separated by spaces")]),e._v(" "),a("li",[a("strong",[e._v("Word index")]),e._v(": "),a("code",[e._v("2")]),e._v(" - since the word is the third element within a data record (zero-based index)")]),e._v(" "),a("li",[a("strong",[e._v("Rank index")]),e._v(": "),a("code",[e._v("0")]),e._v(" - since the rank is the first element within a data record (zero-based index)")])]),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/06_users.html"}},[e._v("← Previous Chapter")])],1),e._v(" "),a("p",[a("RouterLink",{attrs:{to:"/manuals/asterics-grid/"}},[e._v("Back to Overview")])],1)])}),[],!1,null,null,null);t.default=r.exports},921:function(e,t,i){e.exports=i.p+"assets/img/dictionary_edit_en.9b61f116.jpg"},922:function(e,t,i){e.exports=i.p+"assets/img/dictionary_import_en.ab91d739.jpg"}}]);