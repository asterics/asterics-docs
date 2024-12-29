(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{998:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"website-developer-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#website-developer-guide"}},[s._v("#")]),s._v(" Website Developer Guide")]),s._v(" "),t("p",[s._v("This guide describes all steps required to build the website at "),t("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),t("p",[s._v("Following tools need to be setup on your machine:")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[s._v("git"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("node"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install/#debian-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),t("OutboundLink")],1)])]),s._v(" "),t("h2",{attrs:{id:"get-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[s._v("#")]),s._v(" Get Started")]),s._v(" "),t("p",[s._v("To build the website, execute following steps:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("~ $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/asterics/asterics-docs.git\n~ $ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" asterics-docs\n~/asterics-docs $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/asterics/asterics-docs",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("asterics-docs")]),t("OutboundLink")],1),s._v(" contains three branches with predefined roles:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("master")]),s._v(": branch used to build release at "),t("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("li",[t("code",[s._v("next")]),s._v(": branch used to build releast at "),t("a",{attrs:{href:"https://www.asterics.eu/next/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu/next/"),t("OutboundLink")],1),s._v(".")]),s._v(" "),t("li",[t("code",[s._v("gh-pages")]),s._v(": branch containing both releases.")])])]),s._v(" "),t("p",[s._v("After executing these steps, the main repository is cloned and all required packages are installed.")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Consider cloning "),t("a",{attrs:{href:"https://github.com/asterics/asterics-docs",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("asterics-docs")]),t("OutboundLink")],1),s._v(" inside a folder, that contains other AsTeRICS repostories for faster cloning of submodules (cf. parameter "),t("a",{attrs:{href:"#configuration"}},[s._v("reference")]),s._v(").")])]),s._v(" "),t("p",[s._v("For the next steps, we have to use commands provided by "),t("a",{attrs:{href:"#asterics-docs-tool"}},[t("code",[s._v("@asterics-docs/tool")])]),s._v(", which includes cloning all repositories containing documentation for "),t("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),t("OutboundLink")],1),s._v(".\nThe configuration for "),t("code",[s._v("@asterics-docs/tool")]),s._v(" is stored in "),t("code",[s._v("docs.config.js")]),s._v(" (see "),t("a",{attrs:{href:"#configuration"}},[s._v("Configuration")]),s._v(" for details).")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("~/asterics-docs $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool docs init")]),s._v("\n~/asterics-docs $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool docs setup")]),s._v("\n")])])]),t("p",[s._v("These steps will clone all repositories and copy specified files in a single folder, which is used to build the website.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("~/asterics-docs $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start the development server")]),s._v("\n~/asterics-docs $ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build for deployment")]),s._v("\n")])])]),t("p",[s._v("After executing the last step, you can locate the finished build in folder "),t("code",[s._v("dist/")]),s._v(".")]),s._v(" "),t("h2",{attrs:{id:"asterics-docs-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#asterics-docs-tool"}},[s._v("#")]),s._v(" @asterics-docs/tool")]),s._v(" "),t("p",[s._v("To install "),t("code",[s._v("@asterics-docs/tool")]),s._v(" inside a project, run following command.")]),s._v(" "),t("p",[s._v("For "),t("strong",[s._v("npm")]),s._v(" run:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @asterics-docs/tool    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),s._v(" @asterics-docs/tool "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),t("p",[s._v("For "),t("strong",[s._v("yarn")]),s._v(" run:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @asterics-docs/tool       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" global @asterics-docs/tool "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),t("p",[s._v("Aftwards you can run "),t("code",[s._v("@asterics-docs/tool")]),s._v(":")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ npx asterics-docs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ asterics-docs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),t("h3",{attrs:{id:"commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[s._v("#")]),s._v(" Commands")]),s._v(" "),t("p",[t("code",[s._v("asterics-docs/tool")]),s._v(" and supported commands provide a detailed help on parameters and options.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ npx asterics-docs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool help instruction")]),s._v("\n$ npx asterics-docs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool command help instruction")]),s._v("\n")])])]),t("p",[s._v("The "),t("a",{attrs:{href:"https://github.com/asterics/asterics-docs/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("package.json")]),t("OutboundLink")],1),s._v(" of "),t("code",[s._v("asterics-docs")]),s._v(" contains a script to run "),t("code",[s._v("@asterics-docs/tool")]),s._v(".\nThus, the above commands can be expressed as follows (inside "),t("a",{attrs:{href:"https://github.com/asterics/asterics-docs.git",target:"_blank",rel:"noopener noreferrer"}},[t("code",[s._v("asterics-docs")]),t("OutboundLink")],1),s._v("):")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool help instruction")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool command help instruction")]),s._v("\n")])])]),t("h4",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" init")]),s._v(" "),t("p",[s._v("Clone all submodules of "),t("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs init                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs init\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--reference")]),s._v("   Pull "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodules from remote "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use --no-reference"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])])]),t("h4",{attrs:{id:"clean"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[s._v("#")]),s._v(" clean")]),s._v(" "),t("p",[s._v("Delete all submodules of "),t("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs clean                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs clean                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs clean "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs clean\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n")])])]),t("h4",{attrs:{id:"setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[s._v("#")]),s._v(" setup")]),s._v(" "),t("p",[s._v("Copy all files according to the configuration (see configuration parameter "),t("a",{attrs:{href:"#source"}},[t("code",[s._v("source")])]),s._v(" and "),t("a",{attrs:{href:"#sources"}},[t("code",[s._v("sources")])]),s._v(").")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs setup                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup                    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs setup\n\nOptions:\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("      Show version number.\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("     Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("   Path to configuration file.\n  -v, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verbose")]),s._v("  Print all entries.\n")])])]),t("h4",{attrs:{id:"index"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[s._v("#")]),s._v(" index")]),s._v(" "),t("p",[s._v("Show information on entry inside the source directory of "),t("code",[s._v("asterics-docs")]),s._v(" (e.g., configuration, conflicts).")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs index                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs index README.md          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs index "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs index "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPositionals:\n  path  a path of the index\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--conflicts")]),s._v("   Show conflicting entries.\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--silent")]),s._v("      Do not print indexed paths.\n")])])]),t("h4",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[s._v("#")]),s._v(" status")]),s._v(" "),t("p",[s._v("Show status of source directory of "),t("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs status               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs status                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs status "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\nasterics-docs status\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n")])])]),t("h4",{attrs:{id:"add"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" add")]),s._v(" "),t("p",[s._v("Stage changes inside the source directory of "),t("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPositionals:\n  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("  File/folder to add.\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n")])])]),t("div",{staticClass:"custom-block danger"},[t("p",{staticClass:"custom-block-title"},[s._v("DANGER")]),s._v(" "),t("p",[s._v("Commiting can only be done per repository.")]),s._v(" "),t("p",[s._v("Creating new files inside "),t("code",[s._v("asterics-docs")]),s._v(" is currently not supported.\nIf you need to create new files, you have to copy those files manually or create them before running "),t("code",[s._v("yarn docs setup")]),s._v(".")]),s._v(" "),t("p",[s._v("Please don’t stage changes of different repositories at the same time or new files.")])]),s._v(" "),t("h4",{attrs:{id:"commit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[s._v("#")]),s._v(" commit")]),s._v(" "),t("p",[s._v("Commit changes inside the source directory of "),t("code",[s._v("asterics-docs")]),s._v(" and source repository.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\nasterics-docs commit "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPositionals:\n  submodule  Submodule selected "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit.\n  message    Commit message.\n\nOptions:\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n")])])]),t("h4",{attrs:{id:"push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[s._v("#")]),s._v(" push")]),s._v(" "),t("p",[s._v("Push submodule changes to remote repository.")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ asterics-docs push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("asterics-docs push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPositionals:\n  submodule  Submodule selected "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" update.\n  branch     Branch of submodule to be updated "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("with rebase"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nOptions:\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--version")]),s._v("     Show version number.\n  -h, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("    Show this help.\n  -c, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config")]),s._v("  Path to configuration file.\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("Specifying no submodule, results in all branches of all submodules beeing updated.")]),s._v(" "),t("p",[s._v("Specifying both submodule and branch, results in a pull (with rebase) followed by a push of specified branch.")])]),s._v(" "),t("h3",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[s._v("#")]),s._v(" Configuration")]),s._v(" "),t("h4",{attrs:{id:"base"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[s._v("#")]),s._v(" base")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("string")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v("/")])])]),s._v(" "),t("p",[s._v("The base URL the site will be deployed at.\nYou will need to change this if you plan to deploy your site under a sub path.\nIf you plan to deploy your site to "),t("code",[s._v("https://www.asterics.eu/next/")]),s._v(", then you should set "),t("code",[s._v("base")]),s._v(" to "),t("code",[s._v('"/next/"')]),s._v(".")]),s._v(" "),t("h4",{attrs:{id:"port"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[s._v("#")]),s._v(" port")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("number")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v("8080")])])]),s._v(" "),t("p",[s._v("Specify the port to use fot the dev server.")]),s._v(" "),t("h4",{attrs:{id:"source"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[s._v("#")]),s._v(" source")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("string")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v("docs")])])]),s._v(" "),t("p",[s._v("Specify the output directory of "),t("code",[s._v("@asterics-docs/tool")]),s._v(" or input directory for "),t("code",[s._v("vuepress")]),s._v(".\nRelative paths are resolved based on the result of "),t("code",[s._v("process.cwd()")]),s._v(".")]),s._v(" "),t("h4",{attrs:{id:"dest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[s._v("#")]),s._v(" dest")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("string")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v("dist")])])]),s._v(" "),t("p",[s._v("Specify the output directory for "),t("code",[s._v("vuepress build")]),s._v(".\nRelative paths are resolved based on the result of "),t("code",[s._v("process.cwd()")]),s._v(".")]),s._v(" "),t("h4",{attrs:{id:"host"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[s._v("#")]),s._v(" host")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("string")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v("https://www.asterics.eu")])])]),s._v(" "),t("p",[s._v("Specify the host were page it deployed to.")]),s._v(" "),t("h4",{attrs:{id:"versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#versions"}},[s._v("#")]),s._v(" versions")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("array")])]),s._v(" "),t("li",[s._v("Default: "),t("code",[s._v("null")])]),s._v(" "),t("li",[s._v("Example: "),t("code",[s._v('["4.0", "3.0.1", "3.0", "2.8", "2.7", "2.6", "2.5", "2.3"]')])])]),s._v(" "),t("p",[s._v("Specify the version you want to build.\nFirst entry is always the current version and is not sub-pathed as others.")]),s._v(" "),t("h4",{attrs:{id:"sources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[s._v("#")]),s._v(" sources")]),s._v(" "),t("ul",[t("li",[s._v("Type: "),t("code",[s._v("array")])])]),s._v(" "),t("p",[s._v("The definition of "),t("code",[s._v("sourcesConfig")]),s._v(" is as follows:")]),s._v(" "),t("div",{staticClass:"language-ts extra-class"},[t("pre",{pre:!0,attrs:{class:"language-ts"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("normalSourcesConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  repository"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name of repository in .gitmodules")]),s._v("\n  reference"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// reference location of git repository")]),s._v("\n  files"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filesConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file dependencies of submodule (for asterics-docs)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("filesConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  source"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// source location (folder/file)")]),s._v("\n  destination"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// target destination (asterics-docs)")]),s._v("\n  filter"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" regexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// regular expression for paths to include")]),s._v("\n  exclude"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" regexp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// regular expression for paths to exclude")]),s._v("\n  branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// branch containing the required files, or")]),s._v("\n  versions"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// version map, specifying branches for each version ([version, branch])")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("sourceConfig")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" normalSourcesConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);