(window.webpackJsonp=window.webpackJsonp||[]).push([[339],{442:function(e,t,s){"use strict";s.r(t);var a=s(2),i=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"editor-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#editor-guide"}},[e._v("#")]),e._v(" Editor Guide")]),e._v(" "),s("p",[e._v("This guide describes how to edit or update content of the website "),s("a",{attrs:{href:"https://www.asterics.eu",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.asterics.eu"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("Editors can improve, correct and adapt the contents of this website in two ways:")]),e._v(" "),s("ul",[s("li",[e._v("offline, or")]),e._v(" "),s("li",[e._v("online")])]),e._v(" "),s("h2",{attrs:{id:"offline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#offline"}},[e._v("#")]),e._v(" Offline")]),e._v(" "),s("p",[e._v("To edit the contents of this website offline, or "),s("em",[e._v("locally")]),e._v(", you need to download the "),s("a",{attrs:{href:"https://github.com/asterics/asterics-docs.git",target:"_blank",rel:"noopener noreferrer"}},[e._v("source repository"),s("OutboundLink")],1),e._v(".\nAll required steps are described in the "),s("RouterLink",{attrs:{to:"/guide/docs.html"}},[e._v("developer guide")]),e._v(".")],1),e._v(" "),s("p",[e._v("After cloning the source repository and installing all required tools, run following commands.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs init    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Initialize git submodules")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" docs setup   "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Create folder docs/ containing all files")]),e._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" dev          "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Build website and host files with the development server")]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Detailed Instructions")]),e._v(" "),s("p",[e._v("For details, please refer to the "),s("RouterLink",{attrs:{to:"/guide/docs.html"}},[e._v("developer guide")]),e._v(".")],1)]),e._v(" "),s("p",[e._v("With the last command, a development server is started hosting the files locally.\nYou should see a similar output:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("success "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("13")]),e._v(":13:42"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Build 6b0cef finished "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("400")]),e._v(" ms"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" http://localhost:8080/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("Afterwards you need to perform the desired changes within the files inside "),s("code",[e._v("docs/")]),e._v(".\nWhen saving changes inside those files, a new build is triggered and the content displayed in the browser is updated, automatically.")]),e._v(" "),s("p",[e._v("After finishing editing the files, you need to create a pull request or commit and push your changes to the source repository.")]),e._v(" "),s("h2",{attrs:{id:"online"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#online"}},[e._v("#")]),e._v(" Online")]),e._v(" "),s("p",[e._v("Alternatively, you can edit the files used for this website online, or "),s("em",[e._v("remotely")]),e._v(".")]),e._v(" "),s("p",[e._v("The easiest way to locate the files in their source repository, is by clicking the link "),s("code",[e._v("Edit this page on GitHub")]),e._v(" provided within every page of this website.\nAfter clicking the link, a website at GitHub is opened, displaying the relevant file and allowing to perform the required changes and committing immediately.")]),e._v(" "),s("p",[e._v("The changes are merged in the source repositories and incorporated in the hosted website at a later point.\nTesting the changes is not possible when editing the files remotely.")]),e._v(" "),s("h3",{attrs:{id:"pictures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pictures"}},[e._v("#")]),e._v(" Pictures")]),e._v(" "),s("p",[e._v("To add or upload new pictures to the relevant repositories, you don’t need to upload/add these image separately before using them in the markdown file.\nYou can simply paste a copied image from the clipboard in the opened file.\nGitHub uploads these pictures to a separate domain (https://user-images.githubusercontent.com/) and pastes a link to them inside the file, instead.\nYou can keep (and reuse) this link, without the need to add the image to the source repository.")]),e._v(" "),s("p",[e._v("Pictures uploaded to "),s("code",[e._v("githubusercontent.com")]),e._v(" are included in the source repository, at a later point, when merging the changes to the main branch, by the developers of this website.")]),e._v(" "),s("h3",{attrs:{id:"web-based-editor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#web-based-editor"}},[e._v("#")]),e._v(" Web-based editor")]),e._v(" "),s("p",[e._v("GitHub provides a "),s("a",{attrs:{href:"https://docs.github.com/en/codespaces/developing-in-codespaces/web-based-editor",target:"_blank",rel:"noopener noreferrer"}},[e._v("web-based editor"),s("OutboundLink")],1),e._v(" that allows editing files remotely, but with a similar experience to working locally.")]),e._v(" "),s("p",[e._v("To edit the files of a GitHub repository online, you can press "),s("code",[e._v(".")]),e._v(" on the main page of the repository.\nGitHub displays the files inside the "),s("em",[e._v("web-based editor")]),e._v(", allowing you to edit several files at once, remotely.")])])}),[],!1,null,null,null);t.default=i.exports}}]);