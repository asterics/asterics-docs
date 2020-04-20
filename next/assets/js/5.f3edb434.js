(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1009:function(e,t,n){"use strict";n.r(t);var i=n(21),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"plugin-development"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plugin-development"}},[e._v("#")]),e._v(" Plugin Development")]),e._v(" "),i("h2",{attrs:{id:"a-quick-guide-to-asterics-plugin-development"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-guide-to-asterics-plugin-development"}},[e._v("#")]),e._v(" A Quick Guide to AsTeRICS Plugin Development")]),e._v(" "),i("p",[e._v("This section describes the AsTeRICS Plugin-Creation tool and the plugin-activation process. These tools make it easy to create new plugins and make them available in ACS and ARE. They can be started manually from their location in the "),i("strong",[e._v("AsTeRICS_runtime.zip")]),e._v(" package (folder: “ACS/tools”) – or they can be launched from the “Misc.” – Tab in the main menu of the ACS:")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3459),alt:""}})]),e._v(" "),i("p",[e._v("The creation of a new AsTeRICS plugin for the runtime environment involves several steps:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("creating the folder structure to store the plugin files")])]),e._v(" "),i("li",[i("p",[e._v("creating the ANT build script file")])]),e._v(" "),i("li",[i("p",[e._v("creating the manifest file")])]),e._v(" "),i("li",[i("p",[e._v("creating the bundle-descriptor, which specifies the ports and properties of the plugin")])]),e._v(" "),i("li",[i("p",[e._v("creating the source code file of the JavaInstance")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("defining the ports and properties and implementing the get- and set-methods for input-, output-, eventListener- and evenTrigger ports")])]),e._v(" "),i("li",[i("p",[e._v("implementing the get- and set- methods for property values and the input ports receive handlers")])])])]),e._v(" "),i("li",[i("p",[e._v("creating the license files for the plugin and third-party libraries in the "),i("strong",[e._v("LICENSE")]),e._v(" subfolder")])])]),e._v(" "),i("p",[e._v("This process is similar for each plugin, and involves much work and sources of errors, especially for people who work with the AsTeRICS framework for the first time.")]),e._v(" "),i("p",[e._v("Usually, you look for a plugin with similar specifications, copy its folder structure and then rename and change the files as desired. But also this process needs some effort and errors/typos can be introduced very easily.")]),e._v(" "),i("p",[e._v("The purpose of the AsTeRICS Plugin Creation Tools is to make it easy to create new plugins, by providing the necessary folder structure, the bundle descriptor and a template for the JAVA source code.")]),e._v(" "),i("h2",{attrs:{id:"the-plugin-creation-wizard"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#the-plugin-creation-wizard"}},[e._v("#")]),e._v(" The Plugin Creation Wizard")]),e._v(" "),i("p",[e._v("The plugin Creation wizard allows definition of characteristics of a new plugin and creates the needed folders and files for the Eclipse build flow, including the JAVA source code skeleton and the plugin’s bundle descriptor.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3460),alt:""}})]),e._v(" "),i("p",[e._v("As can be seen in the above figure, desired input- and output ports, data types, properties and plugin-features are simply selected and added to list boxes on the screen.")]),e._v(" "),i("p",[e._v("Important Notes:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("the path to the target folder has to exist in the local file system, and must point to the ARE/components directory where all plugin source files are located, e.g.: “C:\\asterics\\bin\\components\\”.")])]),e._v(" "),i("li",[i("p",[e._v("The plugin name must be specified in CamelCase letters (capital first letter), e.g. “MyPlugin”. Type and Subcategory have to be specified - they define the location where the plugin will appear in the ACS Components menu.")])]),e._v(" "),i("li",[i("p",[e._v("It is possible to create a list of possible text-selections in a combo-box in the ACS property editor. The data type for this property must be integer, the property gets the number of the selected item. Text-captions for the combo-box entries must be separated with double slash, e.g: “Mode 1//Mode 2//Mode 3”.")])])]),e._v(" "),i("h2",{attrs:{id:"created-files-and-folders"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#created-files-and-folders"}},[e._v("#")]),e._v(" Created files and folders")]),e._v(" "),i("p",[e._v("After “Create Plugin!” has been pressed and the plugin creation was completed successfully, following sub-folders and files are begin created:")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3461),alt:""}})]),e._v(" "),i("p",[e._v("The root folder contains the build script, which can be executed inside Eclipse to compile and build the plugin (.jar) file:")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3462),alt:""}})]),e._v(" "),i("p",[e._v("The META-INF folder contains the manifest file")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3463),alt:""}})]),e._v(" "),i("p",[e._v("The “resources” folder contains the bundle descriptor (bundle_descriptor.xml):")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3464),alt:""}})]),e._v(" "),i("p",[e._v("The source code folder "),i("code",[e._v("src/main/java/eu/asterics/component/<pluginType>/<pluginName>")]),e._v(" contains a template for the plugin source code in JAVA, including the definitions of the selected ports and properties and the needed get- and set- methods for ports and property values. The code skeleton complies to the AsTeRICS coding guidelines and contains the AsTeRICS source file header (only a small portion is shown in the following screenshot).")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3465),alt:""}})]),e._v(" "),i("p",[e._v("After the Eclipse IDE has been opened, Eclipse must be pushed to refresh the folder structure by pushing F5. Furthermore, the path "),i("code",[e._v("src/main/java")]),e._v(" must be configured as source folder.")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3466),alt:""}})]),e._v(" "),i("p",[e._v("The plugin code can be built using the provided build script (right-click build.xml -> RunAs -> Ant Build in the plugin’s folder)")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3467),alt:""}})]),e._v(" "),i("p",[e._v("To see the plugin in the ACS editor window and/or start it inside the runtime environment, the Plugin Activation Tool can be used (see section 3).")]),e._v(" "),i("h2",{attrs:{id:"plugin-activation-in-acs-and-are"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plugin-activation-in-acs-and-are"}},[e._v("#")]),e._v(" Plugin Activation in ACS and ARE")]),e._v(" "),i("p",[e._v("To use a new AsTeRICS plugin which has been built using the Eclipse build flow and exists as executable .jar file/OSGI bundle, one step is necessary:")]),e._v(" "),i("ol",[i("li",[e._v("The Plugin has to be "),i("strong",[e._v("announced to the ACS")]),e._v(" – so that it gets visible in the graphical editor and can be used for the creation of deployment models. This is done by adding the bundle descriptor of the new plugin to a component-collection file (extension “.abd”) in the ACS-folder. These component collections contain all bundle-descriptors of components which can be used in the ACS. The new plugin section can be added either manually or can be downloaded from the running ARE via the ACS’ Component-Collection Manager (recommended, see 3.2.1). Using the Component Collection Manger, the downloaded collection can be stored as “default Component Collection” for the ACS, so that all components will be available when the ACS is started next time.")])]),e._v(" "),i("p",[e._v("Subsequently, the plugin can be selected in the “components” menu of the ACS, and the ARE will activate the plugin at startup.")]),e._v(" "),i("h2",{attrs:{id:"component-collection-management-in-the-acs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#component-collection-management-in-the-acs"}},[e._v("#")]),e._v(" Component-Collection Management in the ACS")]),e._v(" "),i("p",[e._v("The ACS provides a function for downloading the bundle descriptions of all active plugins directly from a running ARE and creating a component collection file from this information. (“System”- tab, Button “Download Component Collection”):")]),e._v(" "),i("p",[i("img",{attrs:{src:n(3468),alt:""}})]),e._v(" "),i("p",[e._v("The component collection will be stored as “.abd” – file in the ACS folder, subfolder “componentcollections”. The new component collection can be used right after download, but will not be available after an ACS restart.")]),e._v(" "),i("p",[e._v("Within the ACS Component-Collection Manager (in the “Miscellaneous” tab), component collections can be selected or set as default collection for the ACS startup. For details see the User Manual, ACS section.")]),e._v(" "),i("p",[e._v("Please note that the “loader.ini” – file has to be updated manually in the ARE’s “profile” subfolder, by addition of the new .jar filename. After restart of the ARE and connection to the ACS, the component collection can be downloaded.")]),e._v(" "),i("h2",{attrs:{id:"plugin-license-declaration"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#plugin-license-declaration"}},[e._v("#")]),e._v(" Plugin License Declaration")]),e._v(" "),i("p",[e._v("Since AsTeRICS version 2.8 the licenses (including licenses of third-party libraries) of a plugin must be provided as .txt files in the LICENSE subfolder. The filenames must follow a defined naming convention, which is:")]),e._v(" "),i("p",[e._v("A contributor must add the respective license file for the component (either "),i("strong",[e._v("LICENSE_MITOrGPLv3WithException.txt")]),e._v(" or one of the two dual license options) to the component/LICENSE folder. Furthermore, for each thirdparty library used, the license file must be added with the following naming convention (Please use CamelCase notation for the library and license names):")]),e._v(" "),i("p",[i("strong",[e._v("THIRDPARTY_NameOfLibrary_LicenseNameInclVersionInfo.txt")])])])}),[],!1,null,null,null);t.default=o.exports},3459:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_c2213f881cbf5182.abc6a2f0.png"},3460:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_ae369b509ff2c0e5.bc1cbc88.png"},3461:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_dd4b70e6240040e3.6272921f.png"},3462:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_a82259165c76b9df.da0379b4.png"},3463:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_3d4398abcb45cc73.1ff3242b.png"},3464:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_fbbda5b6e8f42820.b9487507.png"},3465:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_a0117682e4ae2ecc.f3f88992.png"},3466:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_4304f99776fb485f.9217fb55.png"},3467:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_f35fad4db20b5c1.cc89c5a3.png"},3468:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_2672e47f28834257.fa86415c.png"}}]);