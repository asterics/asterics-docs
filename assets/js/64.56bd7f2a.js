(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{1060:function(e,t,o){"use strict";o.r(t);var r=o(2),a=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"word-forms-in-asterics-grid"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#word-forms-in-asterics-grid"}},[e._v("#")]),e._v(" Word forms in AsTeRICS Grid")]),e._v(" "),t("p",[e._v("For simple communication boards it’s sufficient to use static labels (in different languages) for grid elements. However, for more advanced communicators “word forms” can be used in order to allow grammatically correct communication.")]),e._v(" "),t("h2",{attrs:{id:"general"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[e._v("#")]),e._v(" General")]),e._v(" "),t("p",[e._v("Word forms can be defined for each element in the "),t("RouterLink",{attrs:{to:"/manuals/asterics-grid/03_appearance_layout.html#editing-grid-elements"}},[e._v("dialog for editing grid elements")]),e._v(". The tab "),t("code",[e._v("Word forms")]),e._v(" allows to define and edit word forms (see Fig.1).")],1),e._v(" "),t("p",[t("img",{attrs:{src:o(557),alt:"edit view"}}),e._v(" "),t("em",[e._v("Fig.1: Dialog for defining and editing word forms")])]),e._v(" "),t("p",[e._v("The dialog in Figure 1 shows the following options:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Language")]),e._v(": (optional) language of the new word form")]),e._v(" "),t("li",[t("strong",[e._v("Tags")]),e._v(": (optional) tags assigned to the new word form (e.g. "),t("code",[e._v("1.PERS")]),e._v(" or "),t("code",[e._v("PLURAL")]),e._v(")")]),e._v(" "),t("li",[t("strong",[e._v("Word form")]),e._v(": the value of the new word form")]),e._v(" "),t("li",[t("strong",[e._v("Pronunciation")]),e._v(": (optional) alternative pronunciation for the new word form")]),e._v(" "),t("li",[t("strong",[e._v("Add word form")]),e._v(": adds the newly defined word form to the list")]),e._v(" "),t("li",[t("strong",[e._v("Import/export data to/from all grids")]),e._v(": if activated, word forms are not only imported/exported for the current element, but for all elements within all grids. This options helps to quickly edit all word forms (e.g. managed in an external spreadsheet). Note that data can only be imported to all grids (globally) if the data to import contains the fourth column "),t("code",[e._v("ID")]),e._v(" (see below) and the target elements contain a word form with tag "),t("code",[e._v("BASE")]),e._v(" (which is used for mapping the word forms correctly).")]),e._v(" "),t("li",[t("strong",[e._v("Override existing word forms")]),e._v(": if activated, all existing word forms are overwritten at import. Always activated if importing globally.")]),e._v(" "),t("li",[t("strong",[e._v("Import from clipboard")]),e._v(": imports word forms from the clipboard, copied from an external spreadsheet. The columns that can be imported are: "),t("code",[e._v("WORD FORM")]),e._v(", "),t("code",[e._v("LANG (2 digits)")]),e._v(", "),t("code",[e._v("TAGS (comma separated)")]),e._v(", "),t("code",[e._v("ID")]),e._v(", "),t("code",[e._v("PRONUNCIATION")]),e._v(". The order of columns is important, but not all have to be existing, so it’s also possible to copy only the first ones. The value "),t("code",[e._v("ID")]),e._v(" is only relevant for importing elements to all grids (globally) and it’s automatically generated at exporting from all grids globally.")]),e._v(" "),t("li",[t("strong",[e._v("Copy to clipboard")]),e._v(": copies word forms to the clipboard in a format that can be pasted to a spreadsheet.")]),e._v(" "),t("li",[t("strong",[e._v("Language filter")]),e._v(": dropdown for selecting a language for filtering the list of word forms")]),e._v(" "),t("li",[t("strong",[e._v("Delete all")]),e._v(": deletes all word forms of the current element")]),e._v(" "),t("li",[t("strong",[e._v("Edit button")]),e._v(": enable/disable edit mode for a specific word form in the list")]),e._v(" "),t("li",[t("strong",[e._v("Trash button")]),e._v(": delete a specific word form")]),e._v(" "),t("li",[t("strong",[e._v("Up button")]),e._v(": moves the word form up within the list")]),e._v(" "),t("li",[t("strong",[e._v("Down button")]),e._v(": moves the word form down within the list")])]),e._v(" "),t("h2",{attrs:{id:"word-form-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#word-form-actions"}},[e._v("#")]),e._v(" Word form actions")]),e._v(" "),t("p",[e._v("Once word forms are defined for different elements, they can be used and selected using the action type "),t("code",[e._v("change word forms")]),e._v(" in tab "),t("code",[e._v("Actions")]),e._v(" of the modal for editing a grid element (see Fig. 1). Figure 2 shows the possibilities for configuring this action.")]),e._v(" "),t("p",[t("img",{attrs:{src:o(558),alt:"edit view"}}),e._v(" "),t("em",[e._v("Fig.2: Configuring an action of type “Change word forms”.")])]),e._v(" "),t("h3",{attrs:{id:"general-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#general-function"}},[e._v("#")]),e._v(" General function")]),e._v(" "),t("p",[e._v("In general most action types for "),t("code",[e._v("change word forms")]),e._v(" allow it to define tags (Figure 2.2) which are added to an internal (hidden) list of current tags, if the action is performed.")]),e._v(" "),t("p",[t("strong",[e._v("Example 1")]),e._v(": for example there could be the following elements within a grid:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Element “You”")]),e._v(": has action "),t("code",[e._v("change word forms")]),e._v(" with tag "),t("code",[e._v("2.PERS")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("Element “Past”")]),e._v(": has action "),t("code",[e._v("change word forms")]),e._v(" with tag "),t("code",[e._v("PAST")]),e._v(".")]),e._v(" "),t("li",[t("strong",[e._v("Element “to be”")]),e._v(": has defined various word forms with tags like "),t("code",[e._v("am [1.PERS, PRESENT]")]),e._v(", "),t("code",[e._v("are [2.PERS, PRESENT]")]),e._v(", "),t("code",[e._v("were [2.PERS, PAST]")]),e._v(".")])]),e._v(" "),t("p",[e._v("Now using these elements would work as follows:")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("Select element “You”")]),e._v(": tag "),t("code",[e._v("2.PERS")]),e._v(" is added to internal list, word forms are changed in order to match this tag -> element “to be” is changed to "),t("code",[e._v("are")]),e._v(" because it’s the first word form including the tag "),t("code",[e._v("2.PERS")])]),e._v(" "),t("li",[t("strong",[e._v("Select element “Past”")]),e._v(": tag "),t("code",[e._v("PAST")]),e._v(" is added to internal list, which now includes "),t("code",[e._v("2.PERS, PAST")]),e._v(". Word forms are changed to match these tags -> element “to be” is changed to "),t("code",[e._v("were")]),e._v(" because it’s the first word form including the tags "),t("code",[e._v("2.PERS")]),e._v(" and "),t("code",[e._v("PAST")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"action-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#action-types"}},[e._v("#")]),e._v(" Action types")]),e._v(" "),t("p",[e._v("These are the action types for "),t("code",[e._v("change word forms")]),e._v(" (Fig. 2.1):")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Change word form in grid elements")]),e._v(": changes the labels of grid elements to the word form that best matches the current internal list of tags.")]),e._v(" "),t("li",[t("strong",[e._v("Change word form in collection element")]),e._v(": changes the last element in the collection element to the word form that best matches the current internal list of tags.")]),e._v(" "),t("li",[t("strong",[e._v("Change word form everywhere")]),e._v(": changes word forms both within grid elements and within the last word of the collect element.")]),e._v(" "),t("li",[t("strong",[e._v("Change this element to next word form")]),e._v(": doesn’t use tags for selecting word forms, but simply iterates through the list of word forms defined within this element. "),t("em",[e._v("Example usage:")]),e._v(" word forms contain a list of names, clicking on the element several times allows to select one of the names.")]),e._v(" "),t("li",[t("strong",[e._v("Reset currently displayed word forms")]),e._v(": resets the word forms, clears the tags currently stored within the internal list. This is done automatically each time an element is selected which doesn’t include any "),t("code",[e._v("change word form")]),e._v(" action.")])]),e._v(" "),t("p",[e._v("Figure 2.3 shows an additional option "),t("code",[e._v("Toggle tags on selecting it multiple times")]),e._v(". If this option is activated, selecting this element several times in a row, toggles the tags of this action in the internal list. So in example 1 (see above) selecting the element “Past” multiple times would add and remove the tag "),t("code",[e._v("PAST")]),e._v(" from the internal list, causing to toggle between the words "),t("code",[e._v("are")]),e._v(" and "),t("code",[e._v("were")]),e._v(".")]),e._v(" "),t("p",[e._v("The action type "),t("code",[e._v("change this element to next word form")]),e._v(" also has an option "),t("code",[e._v("secondary action type")]),e._v(". If selected, the tags of the current word form are used for a secondary action. "),t("em",[e._v("Example usage:")]),e._v(" an element has 2 word forms "),t("code",[e._v("I [1.PERS]")]),e._v(" and "),t("code",[e._v("You [2.PERS]")]),e._v(". Iterating through these values using "),t("code",[e._v("change this element to next word form")]),e._v(" with "),t("code",[e._v("secondary action type")]),e._v(" = "),t("code",[e._v("change word form in grid elements")]),e._v(" will cause changing all other grid elements to "),t("code",[e._v("1.PERS")]),e._v(" after selecting "),t("code",[e._v("I")]),e._v(" and to "),t("code",[e._v("2.PERS")]),e._v(" after selecting "),t("code",[e._v("You")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"example-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration"}},[e._v("#")]),e._v(" Example configuration")]),e._v(" "),t("p",[e._v("A grid configuration including examples for all word form features can be downloaded here:\n"),t("a",{attrs:{download:"",href:"https://raw.githubusercontent.com/asterics/AsTeRICS-Grid/master/docs/documentation_user/files/demo-grammar_2024-03-18_15-07_asterics-grid-full-backup.grd"}},[e._v("Grid configuration with word form examples")]),e._v(" (use right click and “save target as”). It contains examples for all different action types of "),t("code",[e._v("change word forms")]),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports},557:function(e,t,o){e.exports=o.p+"assets/img/word-forms-modal.2999b06d.png"},558:function(e,t,o){e.exports=o.p+"assets/img/action-word-forms.189a1c7a.png"}}]);