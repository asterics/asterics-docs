(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{1002:function(e,t,r){"use strict";r.r(t);var a=r(2),o=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"applicationlauncher"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applicationlauncher"}},[e._v("#")]),e._v(" ApplicationLauncher")]),e._v(" "),t("p",[e._v("Component Type: Actuator (Subcategory: File System)")]),e._v(" "),t("p",[e._v("The ApplicationLauncher component can be used to run an external executable application or to open a URL in the platform default browser. The command and arguments values can either be set as property or dynamically configured through the respective input ports. The launch of the application or the opening of the URL can also be triggered by an incoming event (launchNow). The property executeOnPlatform selects the platforms on which the configured application or URL will be launched.")]),e._v(" "),t("p",[e._v("Together with the Keyboard- or RemoteKeyboard components, the ApplicationLauncher plugin can perform complex automation tasks, for example open Skype, choose a contact and make a call.")]),e._v(" "),t("p",[t("img",{attrs:{src:r(559),alt:"Screenshot: ApplicationLauncher plugin",title:"Screenshot: ApplicationLauncher plugin"}})]),e._v(" "),t("h2",{attrs:{id:"input-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#input-port-description"}},[e._v("#")]),e._v(" Input Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("filename [string]:")]),e._v(" File name of executable file which shall be started without arguments. The application is started automatically, if onlyByEvent is false. See "),t("em",[e._v("Properties -> defaultApplication")]),e._v(" description for details.")]),e._v(" "),t("li",[t("strong",[e._v("arguments [string]:")]),e._v(" Sets the arguments of the command. The application is started automatically, if onlyByEvent is false. See "),t("em",[e._v("Properties -> arguments")]),e._v(" description for details.")]),e._v(" "),t("li",[t("strong",[e._v("stdIn [string]:")]),e._v(" Sends the incoming string to the standard input stream of the started process.")])]),e._v(" "),t("h2",{attrs:{id:"output-port-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output-port-description"}},[e._v("#")]),e._v(" Output Port Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("stdOut [string]:")]),e._v(" The standard output stream of the started process.")]),e._v(" "),t("li",[t("strong",[e._v("stdErr [string]:")]),e._v(" The standard error stream of the started process.")]),e._v(" "),t("li",[t("strong",[e._v("exitValue [integer]:")]),e._v(" The exit value of the started process.")])]),e._v(" "),t("h2",{attrs:{id:"event-listener-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-listener-description"}},[e._v("#")]),e._v(" Event Listener Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("launchNow:")]),e._v(" An incoming event on this port will start the (default or lastest received) application")]),e._v(" "),t("li",[t("strong",[e._v("closeNow:")]),e._v(" An incoming event on this port will close the current application")])]),e._v(" "),t("h2",{attrs:{id:"event-triggerer-description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#event-triggerer-description"}},[e._v("#")]),e._v(" Event Triggerer Description")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("startedSuccessfully:")]),e._v(" The process started successfully.")]),e._v(" "),t("li",[t("strong",[e._v("startedWithError:")]),e._v(" The process started with error.")])]),e._v(" "),t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("executeOnPlatform [combobox (ALL, WINDOWS, LINUX, MACOSX)]:")]),e._v(" If != ALL, the application will only be launched if the ARE runs on the defined platform.")]),e._v(" "),t("li",[t("strong",[e._v("executionMode [combobox (START_APPLICATION, OPEN_URL)]:")]),e._v(" If START_APPLICATION, the command defined in defaultApplication will be launched with the given arguments. If OPEN_URL, the URL defined in arguments will be launched with the platform default browser. The platform-specific browser launch commands are configurable in the file areProperties. For general information about platform-specific launch commands, see "),t("a",{attrs:{href:"https://dwheeler.com/essays/open-files-urls.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("open files and URLs"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("defaultApplication [string]:")]),e._v(" Full path and filename of the default application"),t("br"),e._v("\nThe full path can be provided with quotes, but quotes are not mandatory. So "),t("em",[e._v("C:\\Program Files\\internet explorer\\iexplore.exe")]),e._v(" and "),t("em",[e._v("“C:\\Program Files\\internet explorer\\iexplore.exe”")]),e._v(" are equal and both working.")]),e._v(" "),t("li",[t("strong",[e._v("arguments [string]:")]),e._v(" the commandline arguments for the application (in mode START_APPLICATION) or the URL to open (in mode OPEN_URL)."),t("br"),e._v("\nFor Mode START_APPLICATION: Given arguments are split considering whitespaces and quotes. So e.g. the arguments property "),t("em",[e._v("xterm -e “sudo sh test.sh”")]),e._v(" will be split in 3 components "),t("em",[e._v("xterm")]),e._v(", "),t("em",[e._v("-e")]),e._v(" and "),t("em",[e._v("“sudo sh test.sh”")]),e._v(". However quotes are removed at runtime, so "),t("em",[e._v("sudo sh test.sh")]),e._v(" without quotes will be passed to the ProcessBuilder used at Java level to start the program."),t("br"),e._v("\nHint for Windows: for cmd.exe “&” is a special character and cannot be used in an argument. If the “&” is needed, mask it with an “^”, therefore using “^&” instead of “&” in the argument."),t("br"),e._v("\nFor Mode OPEN_URL: URLs can be passed as-is on any platform, no masking of “&” characters is needed.")]),e._v(" "),t("li",[t("strong",[e._v("workingDirectory [string]:")]),e._v(" the working directory for the application (. is used for home directory of the application)")]),e._v(" "),t("li",[e._v("**closeCmd [string]"),t("img",{staticClass:"emoji",attrs:{draggable:"false",alt:"😗",src:"https://twemoji.maxcdn.com/2/svg/1f617.svg"}}),e._v("*Optional close cmd, e.g. if started cmd has forked processes (e.g. OSKA) use: taskkill.exe /IM “OSKA Keyboard.exe” /T")]),e._v(" "),t("li",[t("strong",[e._v("autoLaunch [boolean]:")]),e._v(" Defines if the default application is automatically launched at startup")]),e._v(" "),t("li",[t("strong",[e._v("autoClose [boolean]:")]),e._v(" Defines if the current application is closed when the model is stopped")]),e._v(" "),t("li",[t("strong",[e._v("onlyByEvent [boolean]:")]),e._v(" If this property is set to true, incoming application files names will not be started immediately (only the launchNow event will start the application)")])])])}),[],!1,null,null,null);t.default=o.exports},559:function(e,t,r){e.exports=r.p+"assets/img/applicationlauncher.9f17bcc1.jpg"}}]);