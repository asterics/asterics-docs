(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{1879:function(e,t,l){"use strict";l.r(t);var n=l(2),i=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"cellboard"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cellboard"}},[e._v("#")]),e._v(" CellBoard")]),e._v(" "),n("p",[e._v("Component Type: Sensor (Subcategory: Graphical User Interface)")]),e._v(" "),n("p",[e._v("The CellBoard plugin is a GUI plugin which can display a panel with multiple cells. It can be used as a simple on-screen keyboard. Each cell can contain text and a picture, and it can provide acoustic feedback on selection. Cells can emit command strings and sounds or switch to other cellboards (which can be stored as .xml files). The CellBoard plugin provides basic scanning options (to select a cell via a stepwise process). It also provides a small editor for designing the cells and saving the whole cellboard grid as an .xml file.")]),e._v(" "),n("p",[n("img",{attrs:{src:l(3925),alt:"Screenshot: CellBoard plugin",title:"Screenshot: CellBoard plugin"}})]),e._v(" "),n("p",[e._v("CellBoard plugin")]),e._v(" "),n("h2",{attrs:{id:"using-the-cell-editor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cell-editor"}},[e._v("#")]),e._v(" Using the cell editor")]),e._v(" "),n("p",[e._v("The cell editor can be opened by right-clicking a cell. (This option can be enabled/disabled by using the property “enableEdit”). The cell editor allows to define the content of a cell (cell caption, action string, cell image and sounds for cell-selection or acoustic preview during cell scanning). “Switch to Cellboard” allows to specify a cellboard grid which will be loaded when this cell is selected. When “back” is entered here, the previously loded cellboard will be restored. Thus, complex communication/selection grids can be layered. The whole current cellboard is saved as an .xml file when “Save Cellboard” is clicked. Existing .xml files can be selected to be loaded on startup via the “keyboardFile”-property of the cellboard plugin in the ACS property editor.")]),e._v(" "),n("p",[n("img",{attrs:{src:l(3926),alt:"Screenshot: CellBoard editor",title:"Screenshot: CellBoard editor"}})]),e._v(" "),n("p",[e._v("CellBoard editor")]),e._v(" "),n("h2",{attrs:{id:"input-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("row [integer]:")]),e._v(" This port can be used in “directed scanning” mode to set the row of the highlighted cell.")]),e._v(" "),n("li",[n("strong",[e._v("column [integer]:")]),e._v(" This port can be used in “directed scanning” mode to set the column of the highlighted cell.")]),e._v(" "),n("li",[n("strong",[e._v("cellNumber [integer]:")]),e._v(" This port can be used in “directed scanning” mode to set the number of the highlighted cell.")]),e._v(" "),n("li",[n("strong",[e._v("xmlFile [string]:")]),e._v(" Name of a keyboard file (default location in data/cellBoardKeyboards) which can be loaded or saved. A load operating can be triggered via the dedicated event listener port.")])]),e._v(" "),n("h2",{attrs:{id:"output-port-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("actCell [integer]:")]),e._v(" Sends the number of the currently scanned cell.")]),e._v(" "),n("li",[n("strong",[e._v("actCellCaption [string]:")]),e._v(" Sends the cell caption of the currently scanned cell.")]),e._v(" "),n("li",[n("strong",[e._v("actCellText [string]:")]),e._v(" Sends the action string of the currently scanned cell")]),e._v(" "),n("li",[n("strong",[e._v("selectedCell [integer]:")]),e._v(" Sends the number of the selected cell.")]),e._v(" "),n("li",[n("strong",[e._v("selectedCellCaption [string]:")]),e._v(" Sends the cell caption of the selected cell.")]),e._v(" "),n("li",[n("strong",[e._v("selectedCellText [string]:")]),e._v(" Sends the action string of the currently active cell")]),e._v(" "),n("li",[n("strong",[e._v("scanRow [integer]:")]),e._v(" Sends the number of the currently scanned row (in row/column scanning mode)")]),e._v(" "),n("li",[n("strong",[e._v("scanColumn [integer]:")]),e._v(" Sends the number of the currently scanned column (in row/column scanning mode)")])]),e._v(" "),n("h2",{attrs:{id:"event-listener-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("scanMove:")]),e._v(" Moves the scanning highlight frame in the row-column and column-row scanning modes.")]),e._v(" "),n("li",[n("strong",[e._v("scanSelect:")]),e._v(" Selects the highlighted cell in the row-column, column-row and directed scanning modes.")]),e._v(" "),n("li",[n("strong",[e._v("moveUp:")]),e._v(" Moves the scanning highlight up in the directed scanning mode (wrap around is possible).")]),e._v(" "),n("li",[n("strong",[e._v("moveRight:")]),e._v(" Moves the scanning highlight to the right in the directed scanning mode (wrap around is possible).")]),e._v(" "),n("li",[n("strong",[e._v("moveLeft:")]),e._v(" Moves the scanning highlight to the left in the directed scanning mode (wrap around is possible).")]),e._v(" "),n("li",[n("strong",[e._v("moveDown:")]),e._v(" Moves the scanning highlight down in the directed scanning mode (wrap around is possible).")]),e._v(" "),n("li",[n("strong",[e._v("load:")]),e._v(" loads a keyboard from the given xml-filename (property “keyboardFile”).")])]),e._v(" "),n("h2",{attrs:{id:"event-trigger-description"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#event-trigger-description"}},[e._v("#")]),e._v(" Event Trigger Description")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("cellClicked:")]),e._v(" This event is triggered when one of the cells is clicked.")]),e._v(" "),n("li",[n("strong",[e._v("scanCancel:")]),e._v(" This event is triggered when the row/column scanning process is cancelled because the maximum number of scan cycles has been reached.")]),e._v(" "),n("li",[n("strong",[e._v("cell1…cell36:")]),e._v(" This event is triggered when the given cell is selected.")])]),e._v(" "),n("h2",{attrs:{id:"properties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("caption [string]:")]),e._v(" The component caption.")]),e._v(" "),n("li",[n("strong",[e._v("rows [integer]:")]),e._v(" The number of the cell rows (1-36, rows x cols <= 100).")]),e._v(" "),n("li",[n("strong",[e._v("columns [integer]:")]),e._v(" The number of the cell columns (1-36, rows x cols <= 100).")]),e._v(" "),n("li",[n("strong",[e._v("textColor [integer]:")]),e._v(" The color of the cell text.")]),e._v(" "),n("li",[n("strong",[e._v("backgroundColor [integer]:")]),e._v(" The color of the cell background.")]),e._v(" "),n("li",[n("strong",[e._v("scanColor [integer]:")]),e._v(" The color of the scanning highlighting.")]),e._v(" "),n("li",[n("strong",[e._v("scanMode [integer]:")]),e._v(" This property defines the scanning mode:\n"),n("ul",[n("li",[n("em",[e._v("“none”:")]),e._v(" The board is not scanned. Users can select the cell by clicking on it.")]),e._v(" "),n("li",[n("em",[e._v("“row-column”:")]),e._v(" In this mode, rows of the cells are scanned. When the user selects the row, cells in the row are scanned. The scanning frame can be moved using the scanMove event port. The row and the cell itself can be selected using the scanSelect event port.")]),e._v(" "),n("li",[n("em",[e._v("“column-row”:")]),e._v(" In this mode, columns of the cells are scanned. When the user selects the column, cells in the column are scanned. The scanning frame can be moved using the scanMove event port. The column and the cell itself can be selected using the scanSelect event port.")]),e._v(" "),n("li",[n("em",[e._v("“directed”:")]),e._v(" In this mode only one cell is highlighted. The user can move the scan highlighting via the moveUp, moveRight, moveLeft or moveDown event ports or the row, cellNumber and column input ports. The cell can be selected using the scanSelect event port.")]),e._v(" "),n("li",[n("em",[e._v("“hover selection”:")]),e._v(" In this mode the user can select the cell by hovering the mouse pointer above the cell.")])])]),e._v(" "),n("li",[n("strong",[e._v("scanCycles [integer]:")]),e._v(" This parameter is used in “row/column scanning” mode. After the number of scan cycles is reached, the scanning switches back to the highest level.")]),e._v(" "),n("li",[n("strong",[e._v("hoverTime [integer]:")]),e._v(" This parameter is used in “hover selection” mode. It defines the time of hovering needed to select the cell (in milliseconds).")]),e._v(" "),n("li",[n("strong",[e._v("hoverTimeIndicator [integer]:")]),e._v(" This parameter adjusts the way a hover selection prgress is indicated to the user:\n"),n("ul",[n("li",[n("em",[e._v("“fixed frame”:")]),e._v(" No graphical indication - the frame of the currently active cell is shown but does not change.")]),e._v(" "),n("li",[n("em",[e._v("“growing frame”:")]),e._v(" The frame of the active cell is growing until the value of property “hoverSelectionThickness” is reached - then the cell is selected.")]),e._v(" "),n("li",[n("em",[e._v("“backgorund color”:")]),e._v(" The background color of the cell changes slowly from the selected “backgroundColor” to the selected “scanColor” - then the cell is selected.")])])]),e._v(" "),n("li",[n("strong",[e._v("hoverFrameThickness [integer]:")]),e._v(" Maximum thickness of the cell frame (only valid for the hover selection mode with indicator “growing frame”).")]),e._v(" "),n("li",[n("strong",[e._v("enableEdit [boolean]:")]),e._v(" If selected, the cells can be right-clicked to display the cell editor, which also allows to save the xml-keyboard file.")]),e._v(" "),n("li",[e._v("**enableClickSelection [boolean]"),n("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*If selected, all cells can be selected via a left click, regardless of the scanning process")]),e._v(" "),n("li",[e._v("**commandSeparator [string]"),n("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v('*If a character (or characters) are specified here, they will be used to tokenize the cell text which is sent to the “selectedCellText” output port when teh cell is selected. This can be used to send multiple strings (seperately) to this output port. In the example screenshot above, a semicolon (";") is used to send two different action string to the output port when the cell is selected. A “StringFilter” plugin can then be used to route these commands to different plugins.')]),e._v(" "),n("li",[n("strong",[e._v("keyboardFile [string]:")]),e._v(" Name of a cellboard .xml file (the sugeested files are located in folder data/cellBoardKeyboards or in folder “models”). This file will be loaded at startup of the model. If no file is specified, only the cell contents defined via the ACS editor will be available."),n("strong",[e._v("Supports value suggestions for existing xml-files from the ARE (dynamic property)")])]),e._v(" "),n("li",[n("strong",[e._v("ignoreKeyboardFileProperties [boolean]:")]),e._v(" If selected, the general cellboard parameters (rows/columns/colors/scan mode etc.) will be kept as defined via the ACS editor when a cellboard .xml file is loaded. If not selected, these parameters will be loaded from the .xml file, thereby overriding the values defined in the ACS editor.")]),e._v(" "),n("li",[n("strong",[e._v("dispayGUI [boolean]:")]),e._v(" If selected, the component will be displayed in the ARE GUI. Otherwise the componentent will be hidden !")])]),e._v(" "),n("p",[e._v("The following properties will be overwritten if cellboard .xml files are loaded:")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("cellText1…cellText36 [string]:")]),e._v(" The text displayed on the cell.")]),e._v(" "),n("li",[n("strong",[e._v("cellImage1…cellImage36 [string]:")]),e._v(" The path of the image displayed on the cell.")]),e._v(" "),n("li",[n("strong",[e._v("actionText1…actionText36 [string]:")]),e._v(" The text sent through the selectedCellText output port, when the cell is selected.")])])])}),[],!1,null,null,null);t.default=i.exports},3925:function(e,t,l){e.exports=l.p+"assets/img/cellboard.e243b4cd.jpg"},3926:function(e,t,l){e.exports=l.p+"assets/img/cellboardeditor.9b662792.jpg"}}]);