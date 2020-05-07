(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{386:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"developer-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#developer-guide"}},[s._v("#")]),s._v(" Developer Guide")]),s._v(" "),a("p",[s._v("This guide describes all steps required to build the website at "),a("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[s._v("#")]),s._v(" Requirements")]),s._v(" "),a("p",[s._v("Following tools need to be setup on you machine:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git",target:"_blank",rel:"noopener noreferrer"}},[s._v("git"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("node"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://classic.yarnpkg.com/en/docs/install/#debian-stable",target:"_blank",rel:"noopener noreferrer"}},[s._v("yarn"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"get-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-started"}},[s._v("#")]),s._v(" Get Started")]),s._v(" "),a("p",[s._v("To build the website, execute following steps:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("~ $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/asterics/asterics-docs.git\n~ $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" asterics-docs\n~/asterics-docs $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/asterics/asterics-docs",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("asterics-docs")]),a("OutboundLink")],1),s._v(" contains three branches with predefined roles:")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("master")]),s._v(": branch used to build release at "),a("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("next")]),s._v(": branch used to build releast at "),a("a",{attrs:{href:"https://www.asterics.eu/next/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu/next/"),a("OutboundLink")],1),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("gh-pages")]),s._v(": branch containing both releases.")])])]),s._v(" "),a("p",[s._v("After executing these steps, the main repository is cloned and all required packages are installed.")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Consider cloning "),a("a",{attrs:{href:"https://github.com/asterics/asterics-docs",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("asterics-docs")]),a("OutboundLink")],1),s._v(" inside a folder, that contains other AsTeRICS repostories for faster cloning of submodules (cf. parameter "),a("a",{attrs:{href:"#configuration"}},[s._v("reference")]),s._v(").")])]),s._v(" "),a("p",[s._v("For the next steps, we have to use commands provided by "),a("a",{attrs:{href:"#asterics-docs-tool"}},[a("code",[s._v("@asterics-docs/tool")])]),s._v(", which includes cloning all repositories containing documentation for "),a("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.asterics.eu"),a("OutboundLink")],1),s._v(".\nThe configuration for "),a("code",[s._v("@asterics-docs/tool")]),s._v(" is stored in "),a("code",[s._v("docs.config.js")]),s._v(" (see "),a("a",{attrs:{href:"#configuration"}},[s._v("Configuration")]),s._v(" for details).")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("~/asterics-docs $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool docs init")]),s._v("\n~/asterics-docs $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool docs setup")]),s._v("\n")])])]),a("p",[s._v("These steps will clone all repositories and copy specified files in a single folder, which is used to build the website.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("~/asterics-docs $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" dev           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Start the development server")]),s._v("\n~/asterics-docs $ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Build for deployment")]),s._v("\n")])])]),a("p",[s._v("After executing the last step, you can locate the finished build in folder "),a("code",[s._v("dist/")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"asterics-docs-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#asterics-docs-tool"}},[s._v("#")]),s._v(" @asterics-docs/tool")]),s._v(" "),a("p",[s._v("To install "),a("code",[s._v("@asterics-docs/tool")]),s._v(" inside a project, run following command.")]),s._v(" "),a("p",[s._v("For "),a("strong",[s._v("npm")]),s._v(" run:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @asterics-docs/tool    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -g @asterics-docs/tool "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),a("p",[s._v("For "),a("strong",[s._v("yarn")]),s._v(" run:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" @asterics-docs/tool       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" global @asterics-docs/tool "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),a("p",[s._v("Aftwards you can run "),a("code",[s._v("@asterics-docs/tool")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ npx asterics-docs --help           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# local installation")]),s._v("\n$ asterics-docs --help               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n")])])]),a("h3",{attrs:{id:"commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commands"}},[s._v("#")]),s._v(" Commands")]),s._v(" "),a("p",[a("code",[s._v("asterics-docs/tool")]),s._v(" and supported commands provide a detailed help on parameters and options.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ npx asterics-docs -h               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool help instruction")]),s._v("\n$ npx asterics-docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -h     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool command help instruction")]),s._v("\n")])])]),a("p",[s._v("The "),a("a",{attrs:{href:"https://github.com/asterics/asterics-docs/blob/master/package.json",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("package.json")]),a("OutboundLink")],1),s._v(" of "),a("code",[s._v("asterics-docs")]),s._v(" contains a script to run "),a("code",[s._v("@asterics-docs/tool")]),s._v(".\nThus, the above commands can be expressed as follows (inside "),a("a",{attrs:{href:"https://github.com/asterics/asterics-docs.git",target:"_blank",rel:"noopener noreferrer"}},[a("code",[s._v("asterics-docs")]),a("OutboundLink")],1),s._v("):")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs -h                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool help instruction")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -h             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# @asterics-docs/tool command help instruction")]),s._v("\n")])])]),a("h4",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[s._v("#")]),s._v(" init")]),s._v(" "),a("p",[s._v("Clone all submodules of "),a("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs init                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs init --help\nasterics-docs init\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n  --reference   Pull "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" submodules from remote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("use --no-reference"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])])]),a("h4",{attrs:{id:"clean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean"}},[s._v("#")]),s._v(" clean")]),s._v(" "),a("p",[s._v("Delete all submodules of "),a("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs clean                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs clean                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs clean --help\nasterics-docs clean\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n")])])]),a("h4",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[s._v("#")]),s._v(" setup")]),s._v(" "),a("p",[s._v("Copy all files according to the configuration (see configuration parameter "),a("a",{attrs:{href:"#source"}},[a("code",[s._v("source")])]),s._v(" and "),a("a",{attrs:{href:"#sources"}},[a("code",[s._v("sources")])]),s._v(").")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs setup                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs setup --help\nasterics-docs setup\n\nOptions:\n  --version      Show version number.\n  -h, --help     Show this help.\n  -c, --config   Path to configuration file.\n  -v, --verbose  Print all entries.\n")])])]),a("h4",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[s._v("#")]),s._v(" index")]),s._v(" "),a("p",[s._v("Show information on entry inside the source directory of "),a("code",[s._v("asterics-docs")]),s._v(" (e.g., configuration, conflicts).")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs index                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs index README.md          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs index --help\nasterics-docs index "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPositionals:\n  path  a path of the index\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n  --conflicts   Show conflicting entries.\n  --silent      Do not print indexed paths.\n")])])]),a("h4",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[s._v("#")]),s._v(" status")]),s._v(" "),a("p",[s._v("Show status of source directory of "),a("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs status               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs status                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs status -h\nasterics-docs status\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n")])])]),a("h4",{attrs:{id:"add"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[s._v("#")]),s._v(" add")]),s._v(" "),a("p",[s._v("Stage changes inside the source directory of "),a("code",[s._v("asterics-docs")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" --help\nasterics-docs "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPositionals:\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("  File/folder to add.\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("WARNING")]),s._v(" "),a("p",[s._v("Commiting can only be done per repository.")]),s._v(" "),a("p",[s._v("Creating new files inside "),a("code",[s._v("asterics-docs")]),s._v(" is currently not supported.\nIf you need to create new files, you have to copy those files manually or create them before running "),a("code",[s._v("yarn docs setup")]),s._v(".")]),s._v(" "),a("p",[s._v("Please don’t stage changes of different repositories at the same time or new files.")])]),s._v(" "),a("h4",{attrs:{id:"commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commit"}},[s._v("#")]),s._v(" commit")]),s._v(" "),a("p",[s._v("Commit changes inside the source directory of "),a("code",[s._v("asterics-docs")]),s._v(" and source repository.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs commit --help\nasterics-docs commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("message"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nPositionals:\n  submodule  Submodule selected "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" commit.\n  message    Commit message.\n\nOptions:\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n")])])]),a("h4",{attrs:{id:"push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[s._v("#")]),s._v(" push")]),s._v(" "),a("p",[s._v("Push submodule changes to remote repository.")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ asterics-docs push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# global installation")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside asterics-docs")]),s._v("\n")])])]),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("asterics-docs push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("submodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("branch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nPositionals:\n  submodule  Submodule selected "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" update.\n  branch     Branch of submodule to be updated "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("with rebase"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nOptions:\n  --version     Show version number.\n  -h, --help    Show this help.\n  -c, --config  Path to configuration file.\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("Specifying no submodule, results in all branches of all submodules beeing updated.")]),s._v(" "),a("p",[s._v("Specifying both submodule and branch, results in a pull (with rebase) followed by a push of specified branch.")])]),s._v(" "),a("h3",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[s._v("#")]),s._v(" Configuration")]),s._v(" "),a("h4",{attrs:{id:"base"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base"}},[s._v("#")]),s._v(" base")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v("/")])])]),s._v(" "),a("p",[s._v("The base URL the site will be deployed at.\nYou will need to change this if you plan to deploy your site under a sub path.\nIf you plan to deploy your site to "),a("code",[s._v("https://www.asterics.eu/next/")]),s._v(", then you should set "),a("code",[s._v("base")]),s._v(" to "),a("code",[s._v('"/next/"')]),s._v(".")]),s._v(" "),a("h4",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[s._v("#")]),s._v(" port")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("number")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v("8080")])])]),s._v(" "),a("p",[s._v("Specify the port to use fot the dev server.")]),s._v(" "),a("h4",{attrs:{id:"source"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source"}},[s._v("#")]),s._v(" source")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v("docs")])])]),s._v(" "),a("p",[s._v("Specify the output directory of "),a("code",[s._v("@asterics-docs/tool")]),s._v(" or input directory for "),a("code",[s._v("vuepress")]),s._v(".\nRelative paths are resolved based on the result of "),a("code",[s._v("process.cwd()")]),s._v(".")]),s._v(" "),a("h4",{attrs:{id:"dest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dest"}},[s._v("#")]),s._v(" dest")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v("dist")])])]),s._v(" "),a("p",[s._v("Specify the output directory for "),a("code",[s._v("vuepress build")]),s._v(".\nRelative paths are resolved based on the result of "),a("code",[s._v("process.cwd()")]),s._v(".")]),s._v(" "),a("h4",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[s._v("#")]),s._v(" host")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("string")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v("https://www.asterics.eu")])])]),s._v(" "),a("p",[s._v("Specify the host were page it deployed to.")]),s._v(" "),a("h4",{attrs:{id:"versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#versions"}},[s._v("#")]),s._v(" versions")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("array")])]),s._v(" "),a("li",[s._v("Default: "),a("code",[s._v("null")])]),s._v(" "),a("li",[s._v("Example: "),a("code",[s._v('["4.0", "3.0.1", "3.0", "2.8", "2.7", "2.6", "2.5", "2.3"]')])])]),s._v(" "),a("p",[s._v("Specify the version you want to build.\nFirst entry is always the current version and is not sub-pathed as others.")]),s._v(" "),a("h4",{attrs:{id:"sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sources"}},[s._v("#")]),s._v(" sources")]),s._v(" "),a("ul",[a("li",[s._v("Type: "),a("code",[s._v("array")])])]),s._v(" "),a("p",[s._v("The definition of "),a("code",[s._v("sourcesConfig")]),s._v(" is as follows:")]),s._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("normalSourcesConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  repository"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// name of repository in .gitmodules")]),s._v("\n  reference"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// reference location of git repository")]),s._v("\n  files"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("filesConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// file dependencies of submodule (for asterics-docs)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("filesConfig")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  source"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// source location (folder/file)")]),s._v("\n  destination"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// target destination (asterics-docs)")]),s._v("\n  filter"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" regexp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// regular expression for paths to include")]),s._v("\n  exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" regexp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// regular expression for paths to exclude")]),s._v("\n  branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// branch containing the required files, or")]),s._v("\n  versions"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// version map, specifying branches for each version ([version, branch])")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("type")]),s._v(" sourceConfig "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" normalSourcesConfig"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);