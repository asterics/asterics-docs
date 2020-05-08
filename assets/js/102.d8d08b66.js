(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{417:function(e,t,n){"use strict";n.r(t);var o=n(2),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"are-development-overview"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#are-development-overview"}},[e._v("#")]),e._v(" ARE Development Overview")]),e._v(" "),o("h2",{attrs:{id:"the-asterics-runtime-environment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#the-asterics-runtime-environment"}},[e._v("#")]),e._v(" The AsTeRICS Runtime Environment")]),e._v(" "),o("p",[e._v("The AsTeRICS Runtime environment (ARE) is an OSGi-based middleware [3] which allows software plugins to run in parallel. The plugins usually represent a sensor or an actuator and are implemented as independent OSGi bundles. The runtime environment identifies AsTeRICS plugins from other OSGi bundles based on metadata defined inside the plugins.")]),e._v(" "),o("p",[e._v("The ARE expects from plugin-developers to define the structure of their plugins (properties, inputs, outputs and event ports) in XML files. Based on these XMLs, the middleware constructs a runtime representation of each installed AsTeRICS plugin.")]),e._v(" "),o("p",[e._v("Furthermore, the ARE expects a runtime model (system model) which usually comes from the AsTeRICS Configuration Suite (ACS). The ACS is running on a Windows Personal Computer (.net 4.0 required) and mainly used to graphically design the layout of the system as a network of interconnected components. The system model is another XML file that defines the components participating in a specific application, connections between them, events and other properties. Based on this file, ARE knows which plugins to activate and how to define the data flow between them. Since the system model represents the main communication means between the ACS and the ARE, it is expected to be a serialisable object, easy to transfer and translate. ARE and ACS communicate through an appropriate TCP/IP-based communication protocol named ASAPI.")]),e._v(" "),o("p",[o("img",{attrs:{src:n(710),alt:""}})]),e._v(" "),o("p",[e._v("The ARE also provides “services” to plugin developers (for example communication support for COM ports) and it allows reporting errors on the runtime environment, registering event listeners and interacting with its graphical user interface (ARE GUI).")]),e._v(" "),o("p",[e._v("The ARE GUI is a simple graphical environment developed to allow end-users to interact directly with the runtime environment. It may be used to modify runtime parameters of a model via buttons or sliders, and to monitor live signals and events of the running model.")]),e._v(" "),o("h2",{attrs:{id:"are-components"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#are-components"}},[e._v("#")]),e._v(" ARE Components")]),e._v(" "),o("p",[e._v("The ARE consist of the following main parts:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The ARE middleware")])]),e._v(" "),o("li",[o("p",[e._v("ARE plugins (also referred to as “components”) – sensor, processor and actuator modules which provide functional building blocks for assistive functionalities")])]),e._v(" "),o("li",[o("p",[e._v("A service layer which provides infrastructure to the ARE components,"),o("br"),e._v("\nfor example COM port and communication management for connection of the Communication Interface Modules (CIMs)")])])]),e._v(" "),o("p",[e._v("The ARE is commonly deployed on an embedded device, running an appropriate operating system (OS), typically an embedded variant of Windows. On top of the OS, an appropriate Java Virtual Machine (JVM) is used to host the OSGi component framework which provides support for modularity and dynamic loading/unloading of components.")]),e._v(" "),o("p",[e._v("All the core components of the framework (described in detail later) are defined as OSGi modules. Certain components that need to access legacy code (e.g., written in C or C++) are also deployed on top of OSGi, and are interfaced to the native code using Java Native Interface (JNI) as needed. In this regard, and with the exception of the pluggable components that use native code interfaces with platform-specific JNI bindings, the ARE middleware is expected to be "),o("em",[e._v("platform independent")]),e._v(".")]),e._v(" "),o("p",[e._v("The implementation requires basically JAVA 1.7 (JDK/JRE 7) and an OSGi framework (which is part of the source code downloads).")]),e._v(" "),o("h2",{attrs:{id:"about-osgi"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#about-osgi"}},[e._v("#")]),e._v(" About OSGi")]),e._v(" "),o("p",[e._v("The Open Service Gateway initiative (OSGi) is an open specification that enables the modular assembly of software built with the Java technology [3]. The OSGi Service Platform facilitates the componentization of software modules and applications and assures interoperability of applications and services over a variety of networked devices.")]),e._v(" "),o("p",[e._v("OSGi technology is the dynamic module system for Java™. Java provides the portability that is required to support products on many different platforms. The OSGi technology provides the standardized primitives that allow applications to be constructed from small, reusable and collaborative components. These components can be composed into an application and deployed; The OSGi Service Platform provides a service-oriented architecture that enables these components to dynamically discover each other for collaboration, and thereby forms the optimal basis for the AsTeRICS middleware.")])])}),[],!1,null,null,null);t.default=a.exports},710:function(e,t,n){e.exports=n.p+"assets/img/DeveloperManual_html_74b8c615b8455605.d7a70de8.png"}}]);