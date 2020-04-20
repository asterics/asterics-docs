(window.webpackJsonp=window.webpackJsonp||[]).push([[1517],{295:function(e,t,o){"use strict";o.r(t);var a=o(21),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"asterics-packaging-environment-ape"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#asterics-packaging-environment-ape"}},[e._v("#")]),e._v(" AsTeRICS Packaging Environment (APE)")]),e._v(" "),o("p",[e._v("The APE let's you select a set of AsTeRICS model files and create a downstripped (minimum size) version of the ARE including plugins, configuration files and data files to execute the models. Optionally, the APE allows the creation of native installers for Windows, Linux incl. Raspberry Pi and Mac OSX using "),o("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/technotes/guides/deploy/self-contained-packaging.html#BCGIBBCI",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaFX packaging technology"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"ape-consists-of-two-major-elements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ape-consists-of-two-major-elements"}},[e._v("#")]),e._v(" APE consists of two major elements")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#ape-copy-commandline-tool"}},[o("strong",[e._v("APE-copy command line tool")])]),e._v(": a commandine tool to create a downstripped version of the ARE based on provided model files")]),e._v(" "),o("li",[o("a",{attrs:{href:"#build-infrastructure-and-native-installer-creation"}},[o("strong",[e._v("Build infrastructure")])]),e._v(": a "),o("a",{attrs:{href:"template"}},[e._v("template")]),e._v(" project directory including an "),o("a",{attrs:{href:"https://ant.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ant"),o("OutboundLink")],1),e._v(" build file and a property file "),o("a",{attrs:{href:"template/APE.properties"}},[o("code",[e._v("APE.properties")])]),e._v(". The build file contains the target "),o("code",[e._v("ant APE-copy")]),e._v(" which provides the functionality of the APE-copy commandline tool and the target "),o("code",[e._v("APE deploy")]),e._v(" to trigger the creation of "),o("strong",[e._v("native installer")]),e._v(" and  "),o("strong",[e._v("native launcher")]),e._v(" for a dedicated target platform.")])]),e._v(" "),o("h2",{attrs:{id:"important-terms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#important-terms"}},[e._v("#")]),e._v(" Important Terms")]),e._v(" "),o("p",[e._v("The term "),o("code",[e._v("APE.baseURI")]),e._v(" refers to the location of "),o("code",[e._v("APE.jar")]),e._v(" and the "),o("code",[e._v("APE-copy")]),e._v(" command, which is in the folder "),o("code",[e._v("APE")]),e._v(" parallel to the "),o("code",[e._v("ARE")]),e._v(" folder of an AsTeRICS installation. The "),o("code",[e._v("APE.baseURI")]),e._v(" folder also contains the build infrastructure to create the native installers and contains the default project directory ("),o("code",[e._v("APE.projectDir=<APE.baseURI>/defProjectDir")]),e._v(") and the default build directory ("),o("code",[e._v("APE.buildDir=<APE.baseURI>/defProjectDir/build")]),e._v("). "),o("code",[e._v("APE.models")]),e._v(" refers to file and directory paths containing model files to use. Finally, "),o("code",[e._v("ARE.baseURI")]),e._v(" refers to the location of the ARE that is used as the source for the extracted ARE versions.")]),e._v(" "),o("h2",{attrs:{id:"dependencies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),o("p",[e._v("The commandline tool APE-copy only needs a Java Runtime Environment. In order to use the ant build targets and create native installers you also need "),o("strong",[e._v("ant")]),e._v(" and a "),o("strong",[e._v("Java Development Kit 8")]),e._v(".")]),e._v(" "),o("ul",[o("li",[e._v("Install the ["),o("strong",[e._v("Java Development Kit 8 (32-bit)")]),e._v("] (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)\n"),o("ul",[o("li",[e._v("Verify the java installation by opening a command shell and entering "),o("code",[e._v("javac -version")]),e._v(". In case of trouble, ensure to set “JAVA_HOME” to the folder where you installed the Java JDK and add the JDK bin path to the Environment Variable “Path”")])])]),e._v(" "),o("li",[e._v("Install the ["),o("strong",[e._v("apache ant build framework (version >= 1.9.1)")]),e._v("] (http://ant.apache.org/bindownload.cgi)\n"),o("ul",[o("li",[e._v("Ensure to set “ANT_HOME” to the folder where you installed ant and add the ant bin path to the Environment Variable “Path”")])])]),e._v(" "),o("li",[o("strong",[e._v("Only for native installer creation")]),e._v(": Install installer-specific toolkits like [InnoSetup >= 5] (http://www.jrsoftware.org/isdl.php) (.exe), "),o("a",{attrs:{href:"http://wixtoolset.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("WiX toolset >= 3.0"),o("OutboundLink")],1),e._v(" (.msi) or [debian packaging tools] (https://wiki.debian.org/PackageManagement) (.deb) depending on the required target platform. You must run the installer build process on the target platform of the installer. For more details, read the [JavaFX packaging tutorial] (https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/self-contained-packaging.html#A1324980)")])]),e._v(" "),o("h2",{attrs:{id:"ape-copy-commandline-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ape-copy-commandline-tool"}},[e._v("#")]),e._v(" APE-copy commandline tool")]),e._v(" "),o("p",[e._v("Check the "),o("a",{attrs:{href:"#dependencies"}},[e._v("dependencies")]),e._v(" before you start.")]),e._v(" "),o("p",[e._v("To start APE-copy, call")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("APE-copy[.bat|.sh] -DAPE.models=<paths to model files or folder (seperated by ;)> [[-DAPE.buildDir=<Path to build folder>] [-DARE.baseURI=<Path to ARE installation>] [-DAPE.projectDir=<Path of project folder to use] [-DAPE.logLevel=[FINE|INFO|WARNING|SEVERE]]\n")])])]),o("p",[e._v("Relative paths are resolved against the APE directory..")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("APE.models")]),e._v(": Provide a semicolon (😉 seperated list of model files or folder. Relative and absolute paths can be mixed where relative paths are resolved against the APE directory. By default, the directroy "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE/models")]),e._v(" is automatically added to the parameter.")]),e._v(" "),o("li",[o("strong",[e._v("APE.buildDir")]),e._v(": The path to the build (output) folder. The downsized ARE is copied to that folder. The path can be relative or absolute where a relative path is resolved against the APE directory. By default, the "),o("code",[e._v("build")]),e._v(" subfolder of the project directory ("),o("code",[e._v("APE.projectDir")]),e._v(") is used.")]),e._v(" "),o("li",[o("strong",[e._v("ARE.baseURI")]),e._v(": The path to the ARE installation. This can be the path to the "),o("code",[e._v("bin/ARE")]),e._v(" folder of a development version (cloned git repository) or the "),o("code",[e._v("ARE")]),e._v(" path of an installed AsTeRICS release (>= 2.8). The path can be relative or absolute where a relative path is resolved against the APE directory. By default, the parallel ```ARE`` folder is used.")]),e._v(" "),o("li",[o("strong",[e._v("APE.projectDir")]),e._v(": The path of the project directory to use. If the directory does not exist it is automatically created by copying the "),o("a",{attrs:{href:"#simplified-folder-structure"}},[o("code",[e._v("template")])]),e._v(" directory to the project directory. The given project directory must contain the "),o("code",[e._v("APE.properties")]),e._v(" file, which contains default project-specific property values that can be overridden by the commandline switches of APE-copy. Additionally, the files and resources in the subfolder "),o("code",[e._v("custom")]),e._v(" are finally copied to the target build directory ("),o("code",[e._v("APE.buildDir")]),e._v("). Read more about [customization of the ARE] here. By default, the project directory "),o("code",[e._v("APE.projectDir=<APE.baseURI>/defProjectDir")]),e._v(" is used.")]),e._v(" "),o("li",[o("strong",[e._v("APE.logLevel")]),e._v(": You can specify the verbosity of the console output of the APE-copy command. Additionally, the log messages of the command execution are logged to the "),o("code",[e._v("<APE.projectDir>/tmp")])])]),e._v(" "),o("h3",{attrs:{id:"example-usages-of-the-ape-copy-commandline-tool"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usages-of-the-ape-copy-commandline-tool"}},[e._v("#")]),e._v(" Example usages of the APE-copy commandline tool")]),e._v(" "),o("p",[e._v("You should be able to copy/paste the example commands below as long as you replace the placeholder with real values. The examples use windows path notations.")]),e._v(" "),o("p",[o("strong",[e._v("Note for Linux, Mac OSX")]),e._v(": On Linux and Mac OSX you must use "),o("code",[e._v("APE-copy.sh")]),e._v(" and slashify ('/' instead of '') the paths.")]),e._v(" "),o("h4",{attrs:{id:"one-model-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file"}},[e._v("#")]),e._v(" One model file")]),e._v(" "),o("p",[e._v("Create a downstripped ARE package of the model file "),o("code",[e._v("ImageDemo.acs")]),e._v(" located in the "),o("code",[e._v("ARE/models")]),e._v(" folder.\nBy default, the result is written to the folder "),o("code",[e._v("<APE.buildDir>/merged")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.baseURI>\nAPE-copy -DAPE.models=../ARE/models/ImageDemo.acs\n")])])]),o("h4",{attrs:{id:"several-model-files-folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#several-model-files-folder"}},[e._v("#")]),e._v(" Several model files/folder")]),e._v(" "),o("p",[e._v("When specifying a folder, all contained model files (recursively) will be used. Several file or folder URIs can be seperated by a '"),o("strong",[e._v(";")]),e._v("'. Relative and absolute URIs can be mixed. By default, the result is written to the folder "),o("code",[e._v("<APE.buildDir>/merged")]),e._v(".")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.baseURI>\nAPE-copy -DAPE.models=../ARE/models/ImageDemo.acs;../ARE/models/eyetracking;D:/MyModelFiles/\n")])])]),o("h4",{attrs:{id:"one-model-file-custom-build-folder"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file-custom-build-folder"}},[e._v("#")]),e._v(" One model file, custom build folder")]),e._v(" "),o("p",[e._v("You can specify a custom build folder with the property "),o("code",[e._v("APE.buildDir")])]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.baseURI>\nAPE-copy -DAPE.models=../ARE/models/ImageDemo.acs -DAPE.buildDir=C:\\ImageDemo\n")])])]),o("h2",{attrs:{id:"build-infrastructure-and-native-installer-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#build-infrastructure-and-native-installer-creation"}},[e._v("#")]),e._v(" Build infrastructure and native installer creation")]),e._v(" "),o("p",[e._v("The tool APE-copy is only used to copy the required resources for a given model file to a certain location, but APE also provides a full build infrastructure ("),o("code",[e._v("APE.projectDir=<APE.baseURI>/defProjectDir")]),e._v(") that let's you")]),e._v(" "),o("ul",[o("li",[e._v("configure the properties for APE-copy and the creation of native installers in a single file ("),o("code",[e._v("<APE.projectDir>/APE.properties")]),e._v(")")]),e._v(" "),o("li",[e._v("replace single files/resources (images, model files, component and services jars and the respective configurations,...) of the ARE installation with custom files of the folder "),o("code",[e._v("<APE.projectDir>/custom")])]),e._v(" "),o("li",[e._v("customize the installer creation by providing drop-in resources and installer-specific files in the folder "),o("code",[e._v("<APE.projectDir>/package/linux")]),e._v(", "),o("code",[e._v("<APE.projectDir>/package/windows")]),e._v(" or "),o("code",[e._v("<APE.projectDir>/package/macosx")])]),e._v(" "),o("li",[e._v("trigger the creation of a native installer by using the provided ant build file at "),o("code",[e._v("<APE.projectDir>/build.xml")])])]),e._v(" "),o("h3",{attrs:{id:"simplified-folder-structure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#simplified-folder-structure"}},[e._v("#")]),e._v(" Simplified folder structure")]),e._v(" "),o("p",[e._v("Subsequently you can see the simplified folder structure of an APE-based project, which contains an ant build file ("),o("strong",[o("code",[e._v("build.xml")])]),e._v("), a property-based configuration file ("),o("strong",[o("code",[e._v("APE.properties")])]),e._v("), the "),o("strong",[o("code",[e._v("custom/bin/ARE")])]),e._v(" folder to store the solution-specific files (e.g. model files), a "),o("strong",[o("code",[e._v("build")])]),e._v(" folder and a "),o("strong",[o("code",[e._v("package")])]),e._v(" folder for native installer customization.")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("build\n  |- merged\n  |- deploy\ncustom\n  |- bin/ARE\n    |- data\n    |- images\n    |- LICENSE\n    |- models\n      |- <custom model file>.acs\n      |- ...\n    |-profile\npackage\n  |- linux\n  |- windows\n  |- macosx\nAPE.properties\nbuild.xml\n")])])]),o("h3",{attrs:{id:"general-workflow-for-using-the-build-infrastructure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general-workflow-for-using-the-build-infrastructure"}},[e._v("#")]),e._v(" General workflow for using the build infrastructure")]),e._v(" "),o("p",[e._v("If you want to start a new project based on AsTeRICS functionality, you would normally")]),e._v(" "),o("ol",[o("li",[e._v("Use the subfolder "),o("code",[e._v("defProjectDir")]),e._v(" directly or copy the "),o("a",{attrs:{href:"template"}},[e._v("template")]),e._v(" project directory to your project repository location.")]),e._v(" "),o("li",[e._v("Edit "),o("a",{attrs:{href:"template/APE.properties"}},[o("code",[e._v("APE.properties")])]),e._v(" and set the location of the AsTeRICS ARE ("),o("code",[e._v("ARE.baseURI")]),e._v(") to use for APE-copy. You only have to set "),o("code",[e._v("ARE.baseURI")]),e._v(" if you use a project directory not within the AsTeRICS APE directory.")]),e._v(" "),o("li",[e._v("Create your AsTeRICS solution and save all needed resources (model files, images, configuration files,...) to the "),o("code",[e._v("custom/bin/ARE")]),e._v(" folder.")]),e._v(" "),o("li",[e._v("Call "),o("code",[e._v("ant APE-copy")]),e._v(" to create the extracted ARE solution or "),o("code",[e._v("ant deploy")]),e._v(" to create a native installer for a certain target platform")])]),e._v(" "),o("p",[e._v("Many Integrated Development Environments (IDE) like Eclipse support the ant build system. So you can use your favourite IDE to edit and build the project.")]),e._v(" "),o("h3",{attrs:{id:"example-usages-of-the-build-infrastructure"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#example-usages-of-the-build-infrastructure"}},[e._v("#")]),e._v(" Example usages of the build infrastructure")]),e._v(" "),o("p",[e._v("Check the "),o("a",{attrs:{href:"#dependencies"}},[e._v("dependencies")]),e._v(" before you start.")]),e._v(" "),o("h4",{attrs:{id:"one-model-file-ant-ape-copy"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file-ant-ape-copy"}},[e._v("#")]),e._v(" One model file, ant APE-copy")]),e._v(" "),o("p",[e._v("Copy the model file "),o("code",[e._v("<ARE.baseURI>/models/ImageDemo.acs")]),e._v(" to the location "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE/models")]),e._v(" or edit the "),o("code",[e._v("APE.models")]),e._v(" property in the file "),o("code",[e._v("<APE.projectDir>/APE.properties")]),e._v(". Then execute the following commands:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.projectDir>\nant APE-copy\n")])])]),o("p",[e._v("The extracted ARE version can be found at "),o("code",[e._v("<APE.buildDir>/build/merged/")]),e._v(", to test it, execute")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd build/merged/bin/ARE\nstart.bat\n")])])]),o("h4",{attrs:{id:"one-model-file-windows-exe-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file-windows-exe-installer"}},[e._v("#")]),e._v(" One model file, windows .exe installer")]),e._v(" "),o("p",[e._v("To create a native .exe installer [InnoSetup >= 5] (http://www.jrsoftware.org/isdl.php) must be installed and the build process must be run on a Windows system.")]),e._v(" "),o("p",[e._v("Copy the model file "),o("code",[e._v("<ARE.baseURI>/models/ImageDemo.acs")]),e._v(" to the location "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE/models")]),e._v(" or edit the "),o("code",[e._v("APE.models")]),e._v(" property in the file "),o("code",[e._v("<APE.projectDir>/APE.properties")]),e._v(". Then execute the following commands:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.projectDir>\nant deploy\n")])])]),o("p",[e._v("By default, all supported installer types for the currently running platform are created and stored at "),o("code",[e._v("<APE.buildDir>/deploy/bundles")]),e._v("\nThis can be changed by setting the property "),o("code",[e._v("fx.deploy.nativeBundles")]),e._v(" to another value like "),o("code",[e._v("msi")])]),e._v(" "),o("h4",{attrs:{id:"one-model-file-linux-debian-package"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file-linux-debian-package"}},[e._v("#")]),e._v(" One model file, Linux debian package")]),e._v(" "),o("p",[e._v("To create a debian installer the [debian packaging tools] (https://wiki.debian.org/PackageManagement) must be installed and the build process must be run on a debian-based Linux.")]),e._v(" "),o("p",[e._v("Copy the model file "),o("code",[e._v("<ARE.baseURI>/models/ImageDemo.acs")]),e._v(" to the location "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE/models")]),e._v(" or edit the "),o("code",[e._v("APE.models")]),e._v(" property in the file "),o("code",[e._v("<APE.projectDir>/APE.properties")]),e._v(". Then execute the following commands:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("cd <APE.projectDir>\nant deploy\n")])])]),o("p",[e._v("By default, all supported installer types for the currently running platform are created and stored at "),o("code",[e._v("<APE.buildDir>/deploy/bundles")]),e._v("\nThis can be changed by setting the property "),o("code",[e._v("fx.deploy.nativeBundles")]),e._v(" to another value like "),o("code",[e._v("deb")]),e._v(". On Linux, although also a .rpm package could be created by JavaFX packaging technology, APE only supports debian packages because the ARE needs some postinstall and prerm operations in order to run on Linux.")]),e._v(" "),o("h4",{attrs:{id:"one-model-file-mac-osx-dmg-installer"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#one-model-file-mac-osx-dmg-installer"}},[e._v("#")]),e._v(" One model file, Mac OSX dmg installer")]),e._v(" "),o("p",[e._v("Run one of the above examples on Mac OSX to create a .dmg installer. The .dmg packaging dependencies should already be contained in your Mac OSX version.")]),e._v(" "),o("h3",{attrs:{id:"properties-for-copying-extraction-behaviour-of-ape"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties-for-copying-extraction-behaviour-of-ape"}},[e._v("#")]),e._v(" Properties for copying/extraction behaviour of APE")]),e._v(" "),o("p",[e._v("To change the behaviour of the ARE extraction with APE-copy, edit the following properties of "),o("a",{attrs:{href:"template/APE.properties"}},[e._v("APE.properties")])]),e._v(" "),o("ul",[o("li",[e._v("``APE.models```: Defines model files and folder containing model files to use")]),e._v(" "),o("li",[o("code",[e._v("APE.dataCopyMode")]),e._v(": Define if all the data files of the "),o("code",[e._v("<ARE.baseURI>/data")]),e._v(" folder should be copied or just some.")]),e._v(" "),o("li",[o("code",[e._v("APE.servicesFiles")]),e._v(": Define if optional service configuration files should be used.")])]),e._v(" "),o("h3",{attrs:{id:"properties-for-installer-creation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#properties-for-installer-creation"}},[e._v("#")]),e._v(" Properties for installer creation")]),e._v(" "),o("p",[e._v("The provided build files only support a subset of the whole functionality of "),o("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/javafx_ant_task_reference.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("JavaFX packaging"),o("OutboundLink")],1),e._v(".\nTo change the behaviour of the installer creation, consider the following properties in "),o("a",{attrs:{href:"template/APE.properties"}},[e._v("APE.properties")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("fx.deploy.nativeBundles")]),e._v(": To define installer type to create")]),e._v(" "),o("li",[o("code",[e._v("fx.application.*")]),e._v(" and "),o("code",[e._v("fx.info.*")]),e._v(": To describe meta information of your application")]),e._v(" "),o("li",[o("code",[e._v("fx.preferences.*")]),e._v(": To define the desktop integration of the application")]),e._v(" "),o("li",[o("code",[e._v("APE.embedJava")]),e._v(" and "),o("code",[e._v("fx.platform.basedir")]),e._v(": To embed a Java Runtime Environment into your native installer. The embedded java is linked to the native application launcher. If it is not embedded the default system java is used (only on Windows and Mac OSX).")])]),e._v(" "),o("h3",{attrs:{id:"are-customization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#are-customization"}},[e._v("#")]),e._v(" ARE customization")]),e._v(" "),o("p",[e._v("The ARE can be customized by replacing single files/resources (images, model files, component and services jars and the respective configurations,...) of the ARE installation with custom files of the folder "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE")]),e._v(". You only must ensure to use the same relative file paths.")]),e._v(" "),o("h4",{attrs:{id:"skipping-non-used-are-services"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#skipping-non-used-are-services"}},[e._v("#")]),e._v(" Skipping non-used ARE services")]),e._v(" "),o("p",[e._v("If you want to exclude some of the ARE services (e.g. "),o("code",[e._v("javacv-*.jar")]),e._v(" or "),o("code",[e._v("cimcommunication*")]),e._v(".jar), simply copy the services configuration files of "),o("code",[e._v("<ARE.baseURI>/profile/*.ini")]),e._v(" to the "),o("code",[e._v("<APE.projectDir>/custom/bin/ARE/profile")]),e._v(" folder and edit them. You can exclude a service by commenting it out (prepending #) in the respective .ini file.")]),e._v(" "),o("h3",{attrs:{id:"installer-customization"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installer-customization"}},[e._v("#")]),e._v(" Installer customization")]),e._v(" "),o("p",[e._v("If you want to customize installer-specific configuration files (.e.g .iss for .exe installer) or add your own application icon. Use the respective platform-specific subfolder in the "),o("a",{attrs:{href:"template/package"}},[e._v("package")]),e._v(" folder. There you can place replacement files for the default ones. To find out the supported files, that can be replaced, enable verbosity by setting "),o("code",[e._v("fx.deploy.verbose=true")]),e._v(" in the "),o("a",{attrs:{href:"template/APE.properties"}},[o("code",[e._v("APE.properties")])]),e._v(" file.")]),e._v(" "),o("p",[e._v("Summurized, the following steps are necessary:")]),e._v(" "),o("ol",[o("li",[e._v("Enable verbose mode in "),o("a",{attrs:{href:"template/APE.properties"}},[o("code",[e._v("APE.properties")])]),e._v(": "),o("code",[e._v("fx.deploy.verbose=true")])]),e._v(" "),o("li",[e._v("Run "),o("code",[e._v("ant deploy")])]),e._v(" "),o("li",[e._v("Copy the resources (e.g. .iss or icon files) from the temp folder of the installer creation to the "),o("a",{attrs:{href:"template/package"}},[e._v("package/<os>")]),e._v(" folder")]),e._v(" "),o("li",[e._v("Edit the custom files")]),e._v(" "),o("li",[e._v("Rerun "),o("code",[e._v("ant deploy")])])]),e._v(" "),o("p",[e._v("If you want to know more, read "),o("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/deploy/self-contained-packaging.html#BCGICFDB",target:"_blank",rel:"noopener noreferrer"}},[e._v("Customizing the Package Using Drop-In Resources"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h3",{attrs:{id:"ant-build-files"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#ant-build-files"}},[e._v("#")]),e._v(" ant build files")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("template")]),e._v(" directory contains two ant build files: "),o("a",{attrs:{href:"template/build.xml"}},[e._v("build.xml")]),e._v(" and "),o("a",{attrs:{href:"template/imported.xml"}},[e._v("imported.xml")]),e._v(". The file "),o("code",[e._v("build.xml")]),e._v(" contains some targets left for customization of the deployment build process. The targets "),o("code",[e._v("before-deploy, before-deploy-windows, before-deploy-linux and before-deploy-macosx")]),e._v(" are called after the "),o("code",[e._v("APE-copy")]),e._v(" target and before the "),o("code",[e._v("deploy")]),e._v(" target. This way generic and platform-specific task can be added before the installer creation is triggered. You can use it to delete files which are not needed for a certain target platform (e.g. ARE.exe on Linux or javacv-*-macosx on Windows).\nThe second build-file "),o("code",[e._v("imported.xml")]),e._v(" contains the internal targets and should not be modified except you really know, what you do.")])])}),[],!1,null,null,null);t.default=r.exports}}]);