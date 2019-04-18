/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "097a839ff7096136f07272952d9b4c81"
  },
  {
    "url": "assets/css/0.styles.d02ca974.css",
    "revision": "c1f6f2559dd77399221420fddb0a43d7"
  },
  {
    "url": "assets/img/a_components_properties_in_property_tab.01031940.jpg",
    "revision": "010319409e297e4d02303bdfc766b7bb"
  },
  {
    "url": "assets/img/a_components_properties_in_property_tab.3a55cb01.png",
    "revision": "3a55cb01066395fdc441d259539f3251"
  },
  {
    "url": "assets/img/acceleration_cim.53419b46.jpg",
    "revision": "53419b46ec89b77e13c775ad6bcadd21"
  },
  {
    "url": "assets/img/acceleration.179e5bfd.jpg",
    "revision": "179e5bfd8d09a498a4ffed495da90fcc"
  },
  {
    "url": "assets/img/acousticscanning.edcc95ce.jpg",
    "revision": "edcc95ceadcd7bf76144467491dc166f"
  },
  {
    "url": "assets/img/acs_after_startup.754041b6.png",
    "revision": "754041b62851b18a770736734cd3804e"
  },
  {
    "url": "assets/img/acs_after_startup.fa7c3813.png",
    "revision": "fa7c3813e949aeb13398087f9e9b0cd4"
  },
  {
    "url": "assets/img/acs_with_active_events_tab.ae677a1b.png",
    "revision": "ae677a1bbbc6b0a4a79357a00ffc7808"
  },
  {
    "url": "assets/img/acs_with_active_events_tab.efea5701.png",
    "revision": "efea5701e9b51350c0a52960a5f29566"
  },
  {
    "url": "assets/img/adjustmentcurve.f9b5bfd5.jpg",
    "revision": "f9b5bfd51ab61169bd760e89b7271633"
  },
  {
    "url": "assets/img/adjustmentcurve1.ffe23a80.jpg",
    "revision": "ffe23a803070794407b147b5646be9f6"
  },
  {
    "url": "assets/img/amplifier.244b30ab.jpg",
    "revision": "244b30ab0614945b3eb3cb6f31d43ab4"
  },
  {
    "url": "assets/img/analogin_cim.c0b8e23d.jpg",
    "revision": "c0b8e23dc3c8e0c75c41653a651e6ad7"
  },
  {
    "url": "assets/img/analogin.1a43205a.jpg",
    "revision": "1a43205ab6cc8cb429173ad0f161adc2"
  },
  {
    "url": "assets/img/analogout_cim.c0b8e23d.jpg",
    "revision": "c0b8e23dc3c8e0c75c41653a651e6ad7"
  },
  {
    "url": "assets/img/analogout.502d9254.jpg",
    "revision": "502d92546ac53167906ac9ab3e06a9c2"
  },
  {
    "url": "assets/img/androidphonecontrol.c66f2379.jpg",
    "revision": "c66f2379a8f2687e1ed5e3284199326a"
  },
  {
    "url": "assets/img/androidserverapp.95049001.jpg",
    "revision": "95049001129686da613b8bd65db1f7f1"
  },
  {
    "url": "assets/img/angularcursorcontrol.ed1d7c12.jpg",
    "revision": "ed1d7c12d0d9f7b95d5fd66ae173d0a2"
  },
  {
    "url": "assets/img/applicationlauncher.9f17bcc1.jpg",
    "revision": "9f17bcc126c8c4ba652bbecf624cb96a"
  },
  {
    "url": "assets/img/arduino_picture.1f3fe4f7.jpg",
    "revision": "1f3fe4f74a9a70eeda943299fd802686"
  },
  {
    "url": "assets/img/arduino.14daa46f.jpg",
    "revision": "14daa46fb4683f5cb59d84f95670c45d"
  },
  {
    "url": "assets/img/are_and_are_storage_group.3e1c2570.png",
    "revision": "3e1c2570ed21505992ca89070994d40e"
  },
  {
    "url": "assets/img/are_and_are_storage_group.fa86415c.png",
    "revision": "fa86415c2ae498970ca883f1c0baa55e"
  },
  {
    "url": "assets/img/are_connection_dialog.3ab44010.jpg",
    "revision": "3ab44010e690f0e6e4b5a1b8c0012dba"
  },
  {
    "url": "assets/img/are_logging_window.f227db8f.jpg",
    "revision": "f227db8f785c1de2b759dceb6c5d968c"
  },
  {
    "url": "assets/img/are_status_window.78ef247b.jpg",
    "revision": "78ef247bd8e3761bab609aa882e4f37c"
  },
  {
    "url": "assets/img/ARE-startscreen.c800dec4.png",
    "revision": "c800dec4701eac5698bbc494e6a2d218"
  },
  {
    "url": "assets/img/arewindow.e4d5dc4b.jpg",
    "revision": "e4d5dc4be411757a5a832502fa30eccb"
  },
  {
    "url": "assets/img/asterics-logo.svg",
    "revision": "6199997b5a415764b65b72421d417256"
  },
  {
    "url": "assets/img/asterics-program-overview.e1002930.svg",
    "revision": "e100293065ef4040cca37bdbd6607d3d"
  },
  {
    "url": "assets/img/audioselector.7fa0cbca.jpg",
    "revision": "7fa0cbca04061be27d2f7e22bc68fa19"
  },
  {
    "url": "assets/img/autostartevent.7ca8c939.jpg",
    "revision": "7ca8c9392338fd464239d789744bbc22"
  },
  {
    "url": "assets/img/averager.f00651db.jpg",
    "revision": "f00651db22449a17e657320fcacaf040"
  },
  {
    "url": "assets/img/bardisplay.824890df.jpg",
    "revision": "824890df597240513685347990a60dca"
  },
  {
    "url": "assets/img/basictralgorithms.e1416158.jpg",
    "revision": "e1416158043aa7717aed8b2ad5ee835b"
  },
  {
    "url": "assets/img/benchmark.86b6eaf0.jpg",
    "revision": "86b6eaf0573707f499332c20f11f23e2"
  },
  {
    "url": "assets/img/blinkdetection.5593407c.jpg",
    "revision": "5593407cb21909def7a269e072ce0273"
  },
  {
    "url": "assets/img/blinkdetector.0ba0e07d.jpg",
    "revision": "0ba0e07daf7d8299b1cb51f313c4945e"
  },
  {
    "url": "assets/img/blinkdetectortrainer.c93653c5.jpg",
    "revision": "c93653c530dbb0add78a0ffc8b2ee464"
  },
  {
    "url": "assets/img/bundle-manager.a6a8eed1.png",
    "revision": "a6a8eed13d0c6c6e5d1ec9a56182180d"
  },
  {
    "url": "assets/img/buttongrid.5b8ad03c.jpg",
    "revision": "5b8ad03c30d58b7e39c73f1707157d0f"
  },
  {
    "url": "assets/img/cellboard.e243b4cd.jpg",
    "revision": "e243b4cd323878c64e6ffdfeddba7e66"
  },
  {
    "url": "assets/img/cellboardeditor.9b662792.jpg",
    "revision": "9b662792a99a0460936e2d855b734e46"
  },
  {
    "url": "assets/img/colour_settings.b6a0614a.png",
    "revision": "b6a0614a0ebbf8861960cd1561fb7e64"
  },
  {
    "url": "assets/img/comparator.2dfefc2b.jpg",
    "revision": "2dfefc2bfd5fc7a02069c91de359062d"
  },
  {
    "url": "assets/img/component_with_opened_context_menu.e5f75f1a.jpg",
    "revision": "e5f75f1a8e3b43af3856b912ec5ef912"
  },
  {
    "url": "assets/img/components_tab.66390462.png",
    "revision": "66390462b19d637514d40a9b2746f514"
  },
  {
    "url": "assets/img/components_tab.b6fbf8d9.png",
    "revision": "b6fbf8d9837c863afd1ccc9c06da0412"
  },
  {
    "url": "assets/img/comport.f3a7dcd2.jpg",
    "revision": "f3a7dcd2803961b9aa0e184177c0ecdd"
  },
  {
    "url": "assets/img/computebandpower.9a67636f.jpg",
    "revision": "9a67636f68cedda2d9111d59fc60935e"
  },
  {
    "url": "assets/img/constantdispatcher.bda97c1f.jpg",
    "revision": "bda97c1fa3d9a7d187f6ff002158a3b4"
  },
  {
    "url": "assets/img/cronusmax.f922334b.jpg",
    "revision": "f922334b8e9ea79938b5b73d1ed3f68c"
  },
  {
    "url": "assets/img/crosshaircursorcontrol.070c5965.jpg",
    "revision": "070c5965dc20510cb73deec2433644fb"
  },
  {
    "url": "assets/img/deadzone.fa4ae800.jpg",
    "revision": "fa4ae8001fba5592c1597a53e44813de"
  },
  {
    "url": "assets/img/decimation.9b7875bb.jpg",
    "revision": "9b7875bb799138180aaf362ddc29f367"
  },
  {
    "url": "assets/img/delay.04385069.jpg",
    "revision": "04385069669f2f1a7101bd040b419799"
  },
  {
    "url": "assets/img/derivative.b98138ff.jpg",
    "revision": "b98138ff25c23c7b7359b6bc6b091482"
  },
  {
    "url": "assets/img/DeveloperManual_html_17298a48a6d250c5.fbefb96e.png",
    "revision": "fbefb96e648f4c0d72a187f4e7471b56"
  },
  {
    "url": "assets/img/DeveloperManual_html_2672e47f28834257.fa86415c.png",
    "revision": "fa86415c2ae498970ca883f1c0baa55e"
  },
  {
    "url": "assets/img/DeveloperManual_html_33ee9963708d1fff.70ac87d7.png",
    "revision": "70ac87d757a9899ae60e2032461a48b6"
  },
  {
    "url": "assets/img/DeveloperManual_html_3d4398abcb45cc73.1ff3242b.png",
    "revision": "1ff3242b60b5b975f63676919bbd6f35"
  },
  {
    "url": "assets/img/DeveloperManual_html_3e993efbc73f2910.c6357005.png",
    "revision": "c63570051381ebdebe51a1bff1abdc1f"
  },
  {
    "url": "assets/img/DeveloperManual_html_4304f99776fb485f.9217fb55.png",
    "revision": "9217fb557f3aeeb94006641cb2382c6e"
  },
  {
    "url": "assets/img/DeveloperManual_html_4dfe72317ab9f571.6b0975c3.jpg",
    "revision": "6b0975c3c5d9a3404a0806ab474b779c"
  },
  {
    "url": "assets/img/DeveloperManual_html_74b8c615b8455605.d7a70de8.png",
    "revision": "d7a70de8a210dc4555a65913e963d37a"
  },
  {
    "url": "assets/img/DeveloperManual_html_a0117682e4ae2ecc.f3f88992.png",
    "revision": "f3f889928e988f0c635217cbe045e373"
  },
  {
    "url": "assets/img/DeveloperManual_html_a82259165c76b9df.da0379b4.png",
    "revision": "da0379b4b3986a34763afdb5498fb068"
  },
  {
    "url": "assets/img/DeveloperManual_html_ae369b509ff2c0e5.bc1cbc88.png",
    "revision": "bc1cbc883bfa7d9647b284d1c1eb31c7"
  },
  {
    "url": "assets/img/DeveloperManual_html_b6693a1cbcd9178a.03fc763d.png",
    "revision": "03fc763dcedebeb28203356c420cef93"
  },
  {
    "url": "assets/img/DeveloperManual_html_c0991ef32ae9b458.424ba3f3.png",
    "revision": "424ba3f34c2b446fdc8f1bf5ef9e1fcb"
  },
  {
    "url": "assets/img/DeveloperManual_html_c2213f881cbf5182.abc6a2f0.png",
    "revision": "abc6a2f00678e6e60c3e687a9172f20e"
  },
  {
    "url": "assets/img/DeveloperManual_html_d5be58f6ea0f5f1.b4ff3013.png",
    "revision": "b4ff3013a135d8683fc82c5dd1156d88"
  },
  {
    "url": "assets/img/DeveloperManual_html_dd4b70e6240040e3.6272921f.png",
    "revision": "6272921f57d926e3afa40e0f15a9d6b6"
  },
  {
    "url": "assets/img/DeveloperManual_html_f1a0b4f36dd370ba.c1a39a2a.jpg",
    "revision": "c1a39a2afa8afa739299f2e59e70a3ae"
  },
  {
    "url": "assets/img/DeveloperManual_html_f35fad4db20b5c1.cc89c5a3.png",
    "revision": "cc89c5a3b14bc077ab28caec02d968a2"
  },
  {
    "url": "assets/img/DeveloperManual_html_f830b9b181946728.4be74a14.png",
    "revision": "4be74a1487ef1a70e066d36a445c4ce2"
  },
  {
    "url": "assets/img/DeveloperManual_html_fb7627584ba9d5d7.45a2067d.png",
    "revision": "45a2067d32257a12dbfc7e8c3e3ce48e"
  },
  {
    "url": "assets/img/DeveloperManual_html_fbbda5b6e8f42820.b9487507.png",
    "revision": "b94875077fe29a5d34e925d5cd034ed0"
  },
  {
    "url": "assets/img/dialogs_settings.ec77262c.png",
    "revision": "ec77262c92cc6ca1e773ff670c9210d1"
  },
  {
    "url": "assets/img/differentiate.7fe386c5.jpg",
    "revision": "7fe386c56a0b0c5ed62dc96785d83471"
  },
  {
    "url": "assets/img/digitalin_cim.32abc9c9.jpg",
    "revision": "32abc9c9a9a31228b753dde4d2137131"
  },
  {
    "url": "assets/img/digitalin.83464356.jpg",
    "revision": "8346435643746205e2c90fa59c3aae48"
  },
  {
    "url": "assets/img/digitalout_cim.32abc9c9.jpg",
    "revision": "32abc9c9a9a31228b753dde4d2137131"
  },
  {
    "url": "assets/img/digitalout.1a89ad2e.jpg",
    "revision": "1a89ad2e7608497bc6fbb264b276b9b2"
  },
  {
    "url": "assets/img/dissimilarity.a5839466.jpg",
    "revision": "a5839466cfb58a6a04f09756d2909cde"
  },
  {
    "url": "assets/img/dotmeter_example.6039baa6.jpg",
    "revision": "6039baa66ad4ca45da8cbc551c190d61"
  },
  {
    "url": "assets/img/dotmeter.f1cc0200.jpg",
    "revision": "f1cc0200b34c41d15c9f9a3627aef3f2"
  },
  {
    "url": "assets/img/double_derivative.02027388.jpg",
    "revision": "02027388b8d280bee633737657726a95"
  },
  {
    "url": "assets/img/double_original.44573796.jpg",
    "revision": "44573796f61a1ed62f3c6cb635d87cad"
  },
  {
    "url": "assets/img/doubletostring.1cadca65.jpg",
    "revision": "1cadca650e40feb961f57db7cbfbe4cf"
  },
  {
    "url": "assets/img/dynproperty.5006543c.png",
    "revision": "5006543c8778aa4f4507ed0a38ba29df"
  },
  {
    "url": "assets/img/eclipse-ant-buildtarget.a52616ed.png",
    "revision": "a52616ed970909f889339cc86d5b74d3"
  },
  {
    "url": "assets/img/ecmascriptinterpreter.dc7ee5f0.jpg",
    "revision": "dc7ee5f03110f1996577c1a1b8d81151"
  },
  {
    "url": "assets/img/edit_selection.8002bf7a.png",
    "revision": "8002bf7afd971ba4bd57021dbb645a08"
  },
  {
    "url": "assets/img/edit_selection.df95ba2e.png",
    "revision": "df95ba2ef23378e83e78ea798afbf2da"
  },
  {
    "url": "assets/img/edit_tab.366308ad.png",
    "revision": "366308ad8bd9be4b604a28846e74f11c"
  },
  {
    "url": "assets/img/edit_tab.a583c192.png",
    "revision": "a583c192c1c6051b4a51d04f2ba0ff4b"
  },
  {
    "url": "assets/img/editbox.54fb1779.jpg",
    "revision": "54fb1779e0e119491297b56dce7ab283"
  },
  {
    "url": "assets/img/enobio_picture.1eacd44c.jpg",
    "revision": "1eacd44c0ba19ae7281e221c6e5e4833"
  },
  {
    "url": "assets/img/enobio.4b813b2b.jpg",
    "revision": "4b813b2b0f661020ffc837b4401a4211"
  },
  {
    "url": "assets/img/enobiodisplay.e7e383b2.jpg",
    "revision": "e7e383b23228444fff412573015f73a6"
  },
  {
    "url": "assets/img/enocean.b119bfe0.png",
    "revision": "b119bfe0babfd48ef899885c90ac67f9"
  },
  {
    "url": "assets/img/eog.a0af8141.jpg",
    "revision": "a0af8141bc066d32adc9927475673485"
  },
  {
    "url": "assets/img/eogapplication.6f8d3159.jpg",
    "revision": "6f8d31593d9e18a3f4f1ac6fa43f5ae8"
  },
  {
    "url": "assets/img/error_state_opened_status_window.e3c3ef92.jpg",
    "revision": "e3c3ef92992008498ba28a951f1fa947"
  },
  {
    "url": "assets/img/eshoe_schematic.55bb2db4.jpg",
    "revision": "55bb2db4531735beb640b3484f378ce5"
  },
  {
    "url": "assets/img/eshoe.5a9af4da.jpg",
    "revision": "5a9af4da086a26a0cf756f0a20cb40fa"
  },
  {
    "url": "assets/img/eventblock.a52607a8.jpg",
    "revision": "a52607a8a110774a79627dd3fb6f0460"
  },
  {
    "url": "assets/img/eventcascade.b78f3d67.jpg",
    "revision": "b78f3d67c5b9fe5bc852a5551f89e1ad"
  },
  {
    "url": "assets/img/eventcounter.2b933163.jpg",
    "revision": "2b9331633959a66fc08d83a1473678ed"
  },
  {
    "url": "assets/img/eventdelay.6862b2c8.jpg",
    "revision": "6862b2c82aeef6f398fe423fc3e18802"
  },
  {
    "url": "assets/img/eventdispatcher.4aaea330.jpg",
    "revision": "4aaea330d61f4b1c6af6acb2922f5199"
  },
  {
    "url": "assets/img/eventflipflop.4be67c4a.png",
    "revision": "4be67c4a6bc674c4b264bcba72ee3792"
  },
  {
    "url": "assets/img/eventrouter.a4b5b104.jpg",
    "revision": "a4b5b104566e9206e859f78c8e09ddf2"
  },
  {
    "url": "assets/img/eventstatemachine.5875716f.jpg",
    "revision": "5875716f1734e6235f07a6030a73cada"
  },
  {
    "url": "assets/img/eventvisualizer.22b2dfa9.jpg",
    "revision": "22b2dfa98f6cbacf7561fc69c74bddcb"
  },
  {
    "url": "assets/img/external_tools_settings.ca6ac2eb.png",
    "revision": "ca6ac2eba2718a46498e8568d5b76303"
  },
  {
    "url": "assets/img/eyetracker_headmount.ea75c7af.jpg",
    "revision": "ea75c7af0b46c4398f4afce5535649d6"
  },
  {
    "url": "assets/img/eyetracker.a4e515ac.jpg",
    "revision": "a4e515ac24d03049edfb4230f8f7f985"
  },
  {
    "url": "assets/img/eyetribe_hw.46447525.png",
    "revision": "4644752568bddcd645e39c93587989df"
  },
  {
    "url": "assets/img/eyetribe.97cfbb7f.jpg",
    "revision": "97cfbb7fc8b7d847b9a47e6d9d3c4fd0"
  },
  {
    "url": "assets/img/eyex_hw.a3ae220c.png",
    "revision": "a3ae220ca64afe5b505231cb866ee056"
  },
  {
    "url": "assets/img/eyex.f70899f9.jpg",
    "revision": "f70899f99e47481035b275877659c732"
  },
  {
    "url": "assets/img/fabi.d2820cd0.png",
    "revision": "d2820cd00ec4ce9bb17ff592cd4bd160"
  },
  {
    "url": "assets/img/fabicronusmax.5b571bee.png",
    "revision": "5b571bee644d5879de138273612ee17e"
  },
  {
    "url": "assets/img/facetrackerclm.45de8d83.jpg",
    "revision": "45de8d831601f3c04a11f5cf8d8fb053"
  },
  {
    "url": "assets/img/facetrackerlk.758a3180.jpg",
    "revision": "758a3180390c705c7f266211759e31b5"
  },
  {
    "url": "assets/img/filewriter.747c3825.jpg",
    "revision": "747c38255271f7edce0f0f51347651b7"
  },
  {
    "url": "assets/img/filter.9099ebe7.jpg",
    "revision": "9099ebe7ff09a7cfb60560ba5f3e2d10"
  },
  {
    "url": "assets/img/flickeringlightstimulator.f486f940.jpg",
    "revision": "f486f940da85766eeb5b5439fdaaf196"
  },
  {
    "url": "assets/img/flickeringpanels.8094335e.jpg",
    "revision": "8094335eb4169016bca31a5c51a176ca"
  },
  {
    "url": "assets/img/folderbrowser.b4608102.jpg",
    "revision": "b4608102d876834c916eda1c0f40d00a"
  },
  {
    "url": "assets/img/fs20command.da8b3973.jpg",
    "revision": "da8b3973405540314d19a94c4d2baf1b"
  },
  {
    "url": "assets/img/fs20pce.71fd5453.jpg",
    "revision": "71fd54539fac7e561a0ee898c732653f"
  },
  {
    "url": "assets/img/fs20receiver.0644e792.jpg",
    "revision": "0644e792e0cca880d80e1af1230fc0e2"
  },
  {
    "url": "assets/img/gamepad.28993a3e.jpg",
    "revision": "28993a3e402d7a8780065b46144e5bc2"
  },
  {
    "url": "assets/img/general_settings.0c251b2d.png",
    "revision": "0c251b2d8ebcae15ea3aa0f1c0cb42ea"
  },
  {
    "url": "assets/img/gmailshortcuts.23822e29.jpg",
    "revision": "23822e294bb54d44b8a37a6ac4ed3b61"
  },
  {
    "url": "assets/img/group1.29b275e2.png",
    "revision": "29b275e2a145378e9434ab2a375873ae"
  },
  {
    "url": "assets/img/gsmmodem.5519c224.jpg",
    "revision": "5519c224716da5d95f84f41e3c4650c3"
  },
  {
    "url": "assets/img/gui_designer_in_keyboard_mode.9e46d348.png",
    "revision": "9e46d3487cbd035337b516410d19186e"
  },
  {
    "url": "assets/img/gui_designer.039c882e.png",
    "revision": "039c882e9230650965acd7f8798f1676"
  },
  {
    "url": "assets/img/gui_designer.eb48eff2.png",
    "revision": "eb48eff250dfc0a9fc57381f375d2b06"
  },
  {
    "url": "assets/img/headpositionhc.38072afc.png",
    "revision": "38072afc6cf36e14c23e8e6968aa75e6"
  },
  {
    "url": "assets/img/hid_cim.7d2b7157.jpg",
    "revision": "7d2b7157c033c24e8d73366aeb69e997"
  },
  {
    "url": "assets/img/hoverpanel.14f2bcde.jpg",
    "revision": "14f2bcde6c30247e50e1b6a7a97126d3"
  },
  {
    "url": "assets/img/hoverpanelscreen.250f61ea.jpg",
    "revision": "250f61eabb3684366cbb8cc84bc2773e"
  },
  {
    "url": "assets/img/hrvanalysis.4919a786.jpg",
    "revision": "4919a786fce54b2527f677c2a8b89afa"
  },
  {
    "url": "assets/img/iirfilter.4bf8743f.jpg",
    "revision": "4bf8743f64d8a8b1a7c69bd5b2365ac5"
  },
  {
    "url": "assets/img/imagebox.29b0dbbb.jpg",
    "revision": "29b0dbbb5d7a9657988fc31c9525f983"
  },
  {
    "url": "assets/img/integrate.dfb8529f.jpg",
    "revision": "dfb8529fa338878beb7ce7bd80b0524c"
  },
  {
    "url": "assets/img/inttostring.426a5209.jpg",
    "revision": "426a52095766ddee05aeee3cecfc8b48"
  },
  {
    "url": "assets/img/irmicro.b79a2e80.jpg",
    "revision": "b79a2e80a89ea02e9d77e7c4ad3f8d08"
  },
  {
    "url": "assets/img/irtrans.7b56a6e8.jpg",
    "revision": "7b56a6e8884fd43f4860b2f5fa2ad456"
  },
  {
    "url": "assets/img/joystickcapture.8a4b85ff.jpg",
    "revision": "8a4b85ff4c631cd559f036a785df3686"
  },
  {
    "url": "assets/img/keyboard-contextmenu.36dfb622.png",
    "revision": "36dfb622ba1bcddde4f4d41a4cf1d79a"
  },
  {
    "url": "assets/img/keyboard-menu1.038c9a85.png",
    "revision": "038c9a8556c0f894a283869cf62ad99e"
  },
  {
    "url": "assets/img/keyboard-menu2.e58dda53.png",
    "revision": "e58dda53ad5f54720a6457a24049694f"
  },
  {
    "url": "assets/img/keyboard-output_ports.d1399fb9.png",
    "revision": "d1399fb93eaf568b82f8dc8cfc3b051c"
  },
  {
    "url": "assets/img/keyboard.7420e4ca.jpg",
    "revision": "7420e4ca64b486b86b29b22fd7459181"
  },
  {
    "url": "assets/img/keyboardcapture.483dae78.jpg",
    "revision": "483dae787a056b86b0e90fff5d1caab5"
  },
  {
    "url": "assets/img/keycapture.23ab76be.jpg",
    "revision": "23ab76bee4f3d5cdb8229d277d4d4f5f"
  },
  {
    "url": "assets/img/kinect.b78672d6.jpg",
    "revision": "b78672d6fd064299fbadc0c890b7ae6f"
  },
  {
    "url": "assets/img/kinectj4k.519d9582.png",
    "revision": "519d958247c8f16254658ef9fa798440"
  },
  {
    "url": "assets/img/knx.98c3039f.jpg",
    "revision": "98c3039f61f028376357db1df83e3254"
  },
  {
    "url": "assets/img/languagefilecreator.f9cc7299.png",
    "revision": "f9cc729929cd0b4a8d062158aa4384b7"
  },
  {
    "url": "assets/img/legacyanalogin.fe010a5f.jpg",
    "revision": "fe010a5f4f68b7975047f832d28b024d"
  },
  {
    "url": "assets/img/legacydigitalin.4f0bc82a.jpg",
    "revision": "4f0bc82aa57354e1e164b82be7c7970c"
  },
  {
    "url": "assets/img/legacydigitalout.b9ce1088.jpg",
    "revision": "b9ce1088095dbba1f7e13186cb986d9d"
  },
  {
    "url": "assets/img/lightscore.c0b77e36.jpg",
    "revision": "c0b77e36a7815bb546ee81d54c57ba1b"
  },
  {
    "url": "assets/img/linereader.11a07801.jpg",
    "revision": "11a078014ebded9b68cdbb747357579d"
  },
  {
    "url": "assets/img/linewriter.a62b3dc8.jpg",
    "revision": "a62b3dc89b75724a8157405b9a7cdf75"
  },
  {
    "url": "assets/img/lipmouse.57247ec7.jpg",
    "revision": "57247ec7264015e6fe7301ca1684e832"
  },
  {
    "url": "assets/img/lipmouseapplication.da7bc790.jpg",
    "revision": "da7bc7909a1671248fae9ab3e5091e62"
  },
  {
    "url": "assets/img/lipmouseir.135b0f05.png",
    "revision": "135b0f05b2db4bbb7cd518e5a4286731"
  },
  {
    "url": "assets/img/list_view_in_channel_mode.3427773e.png",
    "revision": "3427773e896ac35e150438c0a8d92651"
  },
  {
    "url": "assets/img/list_view.ddd12587.png",
    "revision": "ddd125873072d94e0d1e56809e16f274"
  },
  {
    "url": "assets/img/listeint.884b2ee1.jpg",
    "revision": "884b2ee14452436fd7deec8c8fede9db"
  },
  {
    "url": "assets/img/local_operations_group.b36f5cfe.png",
    "revision": "b36f5cfeff38c94fa7942264d56ad744"
  },
  {
    "url": "assets/img/mathevaluator.adcd03a1.jpg",
    "revision": "adcd03a1635d5daaa822d2c02f381b07"
  },
  {
    "url": "assets/img/mediaplayer.356cc94f.jpg",
    "revision": "356cc94f92e00f8188ca99d4425866a7"
  },
  {
    "url": "assets/img/menu_open_components.7be82a1c.png",
    "revision": "7be82a1c234c799a18e83426adfdd87e"
  },
  {
    "url": "assets/img/menubar_open_main_window.8056bf67.png",
    "revision": "8056bf67dbb73de13062b91131eaeb0e"
  },
  {
    "url": "assets/img/micgpi.c3fe15a9.png",
    "revision": "c3fe15a9006b0db1693d99b3c4dc7a7a"
  },
  {
    "url": "assets/img/midipanel.3dc01ab6.jpg",
    "revision": "3dc01ab6df58dcb6a56f6c96fe29f29c"
  },
  {
    "url": "assets/img/midiplayer.6599e758.jpg",
    "revision": "6599e758a2bf134bc02a90b042806ad7"
  },
  {
    "url": "assets/img/minmax.cca23fa8.jpg",
    "revision": "cca23fa8cfdfbc0ca10dc86cef6a1215"
  },
  {
    "url": "assets/img/miscellaneous_tab.50018162.png",
    "revision": "50018162a212cb52dc8d640e5b90a39e"
  },
  {
    "url": "assets/img/miscellaneous_tab.d09bda1c.png",
    "revision": "d09bda1c52f389f37dfac5be4a7d8fed"
  },
  {
    "url": "assets/img/model_designer_in_port_mode.b0d664ff.png",
    "revision": "b0d664ff882852d29f4d1ed334ff3865"
  },
  {
    "url": "assets/img/model-property-change.4bb9f80f.png",
    "revision": "4bb9f80ff7ac906853f41c5e26897af7"
  },
  {
    "url": "assets/img/modelswitcher.9f5158c5.jpg",
    "revision": "9f5158c5b57ca71dec871592e25ff961"
  },
  {
    "url": "assets/img/motioinanalysis_result.732edd21.jpg",
    "revision": "732edd212c69c4df4f7a4f1c91ca79ef"
  },
  {
    "url": "assets/img/motionanalysis_plugin.53fc867f.jpg",
    "revision": "53fc867f3b2a24b8d426a581f1d262f0"
  },
  {
    "url": "assets/img/mouse.253fc282.jpg",
    "revision": "253fc282def8100768ee1b0c04e0dcb0"
  },
  {
    "url": "assets/img/mousecapture.9a78212a.jpg",
    "revision": "9a78212ae359066ed66f1465bfd377d4"
  },
  {
    "url": "assets/img/mousecursoricon.8633b482.jpg",
    "revision": "8633b4823864d883a8e4c1ec8d16463e"
  },
  {
    "url": "assets/img/multisource.cf759460.jpg",
    "revision": "cf759460f2d10a301769fc1ada36f3a0"
  },
  {
    "url": "assets/img/multisourcestring.ec5057b7.jpg",
    "revision": "ec5057b72a05443728518dbd81c1a09a"
  },
  {
    "url": "assets/img/netconnection.4b305846.jpg",
    "revision": "4b305846ad4a8407038f506124755b6d"
  },
  {
    "url": "assets/img/neuralnetwork.42205768.jpg",
    "revision": "422057689dc228a9bb09df0bf4a5c932"
  },
  {
    "url": "assets/img/neuralnetworkloader.ce3e707d.jpg",
    "revision": "ce3e707d40b2919efe98051992016f7d"
  },
  {
    "url": "assets/img/nexusconnector.2616bf6b.png",
    "revision": "2616bf6bf8df65687776b983bc876d6a"
  },
  {
    "url": "assets/img/oneeventmanyactions.132f9730.jpg",
    "revision": "132f9730f614817d5c77a49b3e62f23d"
  },
  {
    "url": "assets/img/openbci.36c1b739.jpg",
    "revision": "36c1b7397535a9ee101b94629f2c6d63"
  },
  {
    "url": "assets/img/openhab_overview.581d9688.png",
    "revision": "581d96885def186357e099921f5efd7a"
  },
  {
    "url": "assets/img/openvibe_flow.4c88d4f6.jpg",
    "revision": "4c88d4f6042ba5cd737dce4e53b7bb1e"
  },
  {
    "url": "assets/img/openvibe.5fca2f7b.jpg",
    "revision": "5fca2f7b102d0251b01cd03df7d808b7"
  },
  {
    "url": "assets/img/oscgesturefollower.2b835bc5.jpg",
    "revision": "2b835bc54b3011ea159f10932f746bc9"
  },
  {
    "url": "assets/img/oscilloscope.1a3665f5.jpg",
    "revision": "1a3665f5fcef243ac8510b28665390b0"
  },
  {
    "url": "assets/img/oscmsg.2cebaa20.jpg",
    "revision": "2cebaa205375929508015e3a3e8afc96"
  },
  {
    "url": "assets/img/oscoutclient.dae373d7.jpg",
    "revision": "dae373d7d49103da00f63e95275266df"
  },
  {
    "url": "assets/img/oscserver.1e05d9e8.jpg",
    "revision": "1e05d9e8ab23e47d46ebca196ebf216e"
  },
  {
    "url": "assets/img/oskaexternalscanning1d.cfe422d9.jpg",
    "revision": "cfe422d9a9a3a0f9808f6dd8dee22337"
  },
  {
    "url": "assets/img/oskaexternalscanning2d.ffabad8e.jpg",
    "revision": "ffabad8e4c95d05ff5ebb8073302a43a"
  },
  {
    "url": "assets/img/oskainternalscanning.bfba2e29.jpg",
    "revision": "bfba2e29326067ad9b21945863bfad84"
  },
  {
    "url": "assets/img/p2parser.8b47904f.jpg",
    "revision": "8b47904fe53ea53eaa5a6224907b8ed1"
  },
  {
    "url": "assets/img/pathmultiplexer.22710744.jpg",
    "revision": "22710744ca387b7ea8fb8bbd8cc9cb87"
  },
  {
    "url": "assets/img/pathselector.972367d5.jpg",
    "revision": "972367d5c1dd5014b990dbe7a5cb6acb"
  },
  {
    "url": "assets/img/peakdetector.696ec72f.png",
    "revision": "696ec72f7acd5594058371cb5b239940"
  },
  {
    "url": "assets/img/personalplatform.a241125e.jpg",
    "revision": "a241125e8752b9c5d9be1e91c7d8d2ea"
  },
  {
    "url": "assets/img/phonecontrol.738f8590.jpg",
    "revision": "738f85902e877473d50158b5aefbe9bb"
  },
  {
    "url": "assets/img/picotts.5a9c73c4.png",
    "revision": "5a9c73c42bd1e8f0ec6877d2821e9199"
  },
  {
    "url": "assets/img/platformanalogin.b5aea034.jpg",
    "revision": "b5aea0345b5ddff2b747ad019e6341ac"
  },
  {
    "url": "assets/img/platformdigitalin.f8f31a4b.jpg",
    "revision": "f8f31a4b02066f386fc0ba5f87a8da5a"
  },
  {
    "url": "assets/img/platformdigitalout.eb94b6a5.jpg",
    "revision": "eb94b6a53043fbfd057ce9a6e1b8a499"
  },
  {
    "url": "assets/img/platformlcd.86b9e06e.jpg",
    "revision": "86b9e06e3735aee88e4206dc2b6bf356"
  },
  {
    "url": "assets/img/plugin_activation.d4b28470.png",
    "revision": "d4b28470082899e60e3ba9c8e6db45f4"
  },
  {
    "url": "assets/img/plugin_creator.c6a9fc73.png",
    "revision": "c6a9fc73ea719b35c9bd964090eff0a8"
  },
  {
    "url": "assets/img/pong.d947bb75.jpg",
    "revision": "d947bb75839087c3635447dc29a14380"
  },
  {
    "url": "assets/img/pongapplication.a6b7aa94.jpg",
    "revision": "a6b7aa9441f3af969d863ef8dc7a4d21"
  },
  {
    "url": "assets/img/pongscreen.e515f649.jpg",
    "revision": "e515f6496f8e70e697c3179cb0f46147"
  },
  {
    "url": "assets/img/property_editor_with_open_dropdown.ce0c4b62.png",
    "revision": "ce0c4b623492f238d763323c6b963c85"
  },
  {
    "url": "assets/img/protocolssveptrain.0fb67610.jpg",
    "revision": "0fb676103fae52bbb59bf776e7f63dfe"
  },
  {
    "url": "assets/img/proximity.7f3837fb.jpg",
    "revision": "7f3837fbe4a27011c13eb91513d6165e"
  },
  {
    "url": "assets/img/proximityapplication.63217eeb.jpg",
    "revision": "63217eeb879bf231fb74f0e492dcc85e"
  },
  {
    "url": "assets/img/quantizer.e59f2f05.jpg",
    "revision": "e59f2f05aa0743f663001c5eb3d1006d"
  },
  {
    "url": "assets/img/quickstart01.183b9214.png",
    "revision": "183b9214cc8302ee51b78c5a548e8397"
  },
  {
    "url": "assets/img/quickstart02.3686057d.png",
    "revision": "3686057ddfa299f9812c163dce257601"
  },
  {
    "url": "assets/img/quickstart03.62d82759.png",
    "revision": "62d827592b0ebd5d02800df763a95c83"
  },
  {
    "url": "assets/img/quickstart04.cb41d5a3.png",
    "revision": "cb41d5a3732d82609b1c8ff9f589acf8"
  },
  {
    "url": "assets/img/quickstart05.80fdad04.png",
    "revision": "80fdad0441185a3ea9cc06c8c20a20fd"
  },
  {
    "url": "assets/img/quickstart06.3ceb45c3.png",
    "revision": "3ceb45c3bc13a238be2d35a5e7f37573"
  },
  {
    "url": "assets/img/quickstart07.4c3bb97f.png",
    "revision": "4c3bb97fc2ac0741eaf6b315e6d4174b"
  },
  {
    "url": "assets/img/quickstart09.12c7bc90.png",
    "revision": "12c7bc9020c899541a7ef2bf879af187"
  },
  {
    "url": "assets/img/quickstart10.a588225d.png",
    "revision": "a588225d06ec8b3596347b937886419a"
  },
  {
    "url": "assets/img/quickstart11.c2ae8b7e.png",
    "revision": "c2ae8b7e88231b656ec766018edf7dbd"
  },
  {
    "url": "assets/img/quickstart12.c7981783.png",
    "revision": "c7981783d6ea219d89f71e1f73a227fe"
  },
  {
    "url": "assets/img/quickstart13.68c18f17.png",
    "revision": "68c18f179789744b97c073615a5cb081"
  },
  {
    "url": "assets/img/quickstart14.3781e998.png",
    "revision": "3781e998b6e76e5ab3d3d79cc7d6371e"
  },
  {
    "url": "assets/img/quickstart15.2c0687da.png",
    "revision": "2c0687da678a1c6b78caa6b2137504ac"
  },
  {
    "url": "assets/img/quickstart16.4b39a603.png",
    "revision": "4b39a603e563d40ad4c608a14b31d87e"
  },
  {
    "url": "assets/img/quickstart17.a2ecc137.png",
    "revision": "a2ecc1375c94a87aadbda175dd4f34c9"
  },
  {
    "url": "assets/img/quickstart18.a949722d.png",
    "revision": "a949722dab28be459f0c13a305ac4d63"
  },
  {
    "url": "assets/img/razorimu_picture.a4cedfe8.jpg",
    "revision": "a4cedfe8f7d08078bcf311977dfc73ed"
  },
  {
    "url": "assets/img/razorimu.870eca5a.jpg",
    "revision": "870eca5a3f29f84818854ab066d7857b"
  },
  {
    "url": "assets/img/reactivision.093c1cee.jpg",
    "revision": "093c1cee61504232166fbb2c737a29a8"
  },
  {
    "url": "assets/img/readcsv.fc76a472.png",
    "revision": "fc76a472634db230e36f75721b00f79a"
  },
  {
    "url": "assets/img/readedf.a50c4602.png",
    "revision": "a50c4602794ec3f6a6795e08c8333109"
  },
  {
    "url": "assets/img/realsense_f200_camera.1ced686a.jpg",
    "revision": "1ced686a44dcf3981490e8a46a224e14"
  },
  {
    "url": "assets/img/regularexpression.6f50f3a3.jpg",
    "revision": "6f50f3a31e6f997a55fcde399d977ddb"
  },
  {
    "url": "assets/img/relativemovesampler.314a4078.jpg",
    "revision": "314a4078d6e0c76ffc2a32f8fc6dfaa9"
  },
  {
    "url": "assets/img/remotejoystick.6fa6bfd8.jpg",
    "revision": "6fa6bfd8ed2a8766b8ab81dc8af06368"
  },
  {
    "url": "assets/img/remotekeyboard.a97bc5eb.jpg",
    "revision": "a97bc5ebf644fa5cdd5652248a38d2da"
  },
  {
    "url": "assets/img/remotemouse.b79f6ca9.jpg",
    "revision": "b79f6ca9cd823d45ade3c610e38c520c"
  },
  {
    "url": "assets/img/remotetablet.1d33ce95.jpg",
    "revision": "1d33ce95e55eb5bb10ebd9492714bf62"
  },
  {
    "url": "assets/img/remotewindow.4f4d5172.jpg",
    "revision": "4f4d5172b4695d2862b6ab8c3fc37547"
  },
  {
    "url": "assets/img/rfidreader_kit.967bb765.jpg",
    "revision": "967bb765bdb723b948c32366916aff26"
  },
  {
    "url": "assets/img/rfidreader.808198ba.jpg",
    "revision": "808198ba47c9f695ae1072f01b775f84"
  },
  {
    "url": "assets/img/running_modus.b1736e0d.png",
    "revision": "b1736e0dda58f86c94925906f58b8510"
  },
  {
    "url": "assets/img/sampleandhold.5e355178.jpg",
    "revision": "5e3551782bb63a03796aada3988f9207"
  },
  {
    "url": "assets/img/sampler.03599c8c.jpg",
    "revision": "03599c8caba6fa8ef7fb9fa3c3fe3481"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/selection.99f33040.png",
    "revision": "99f3304093936e23a3ddc5cc2238d560"
  },
  {
    "url": "assets/img/selection.fccb4ffc.png",
    "revision": "fccb4ffc3427c80f8808de3637a79aa1"
  },
  {
    "url": "assets/img/sensorboard_plugin.38fd7418.jpg",
    "revision": "38fd7418e04b60318939942353689d40"
  },
  {
    "url": "assets/img/sensorboard.0f3cc561.jpg",
    "revision": "0f3cc561fb620bd262e89a8cceb79f7c"
  },
  {
    "url": "assets/img/serialsender.58f95c8a.png",
    "revision": "58f95c8a8883426480270e922d9b18f9"
  },
  {
    "url": "assets/img/signalgenerator.3806148b.jpg",
    "revision": "3806148bc98b31b23cc328a2a99049ba"
  },
  {
    "url": "assets/img/signalshaper.0a42d503.png",
    "revision": "0a42d503960565009e327214c2a4b5dd"
  },
  {
    "url": "assets/img/signalshaper.cb5abd80.jpg",
    "revision": "cb5abd801ad1c57cb7e18aa01758020f"
  },
  {
    "url": "assets/img/signaltranslation.4164f8f3.jpg",
    "revision": "4164f8f364bc83d070ed8407379baa30"
  },
  {
    "url": "assets/img/simple-model-labelled.8f5c2c7f.png",
    "revision": "8f5c2c7ffff4f19bbad8e68c51cb8cd0"
  },
  {
    "url": "assets/img/skywatcher.b394a10b.png",
    "revision": "b394a10ba1fbd3545c75ff58ee3500b6"
  },
  {
    "url": "assets/img/slider.5dd042d2.jpg",
    "revision": "5dd042d20bc1bb4f21ae353ba3c3753c"
  },
  {
    "url": "assets/img/solutions/camera-mouse.1.jpg",
    "revision": "f5dbf6ca0e6577f7f60eb8ee8446e6ef"
  },
  {
    "url": "assets/img/solutions/camera-mouse.2.jpg",
    "revision": "11041f254ecfdc27b7e82b45ed8d69f2"
  },
  {
    "url": "assets/img/solutions/eye-tracking-mouse.1.jpg",
    "revision": "f568e23f05e6f7929c5c8e0987636eff"
  },
  {
    "url": "assets/img/solutions/eye-tracking-mouse.2.jpg",
    "revision": "4402eb3aa6765a9d6294129dab262441"
  },
  {
    "url": "assets/img/solutions/head-sound.1.jpg",
    "revision": "facdaca2cf24d787ee59ab66b3d09463"
  },
  {
    "url": "assets/img/solutions/switch-mouse.1.png",
    "revision": "9ccd2c29dfe900e7d7b26195fd96303e"
  },
  {
    "url": "assets/img/spacenavigator3dmouse.7ec48af0.jpg",
    "revision": "7ec48af012283c2b7ecce6e444e845af"
  },
  {
    "url": "assets/img/speechprocessor.69f52c9f.jpg",
    "revision": "69f52c9f2aedcd99a7e01e313176c4f5"
  },
  {
    "url": "assets/img/ssvepdetect.a71b1d1d.jpg",
    "revision": "a71b1d1d823692987c04ef7644554229"
  },
  {
    "url": "assets/img/ssvepfilewriter.8aaaba2b.jpg",
    "revision": "8aaaba2bf66a5e824b32b4125317ec51"
  },
  {
    "url": "assets/img/ssvepstimulator.3255d351.jpg",
    "revision": "3255d351d7fa2664d2b95b7940542d2b"
  },
  {
    "url": "assets/img/stringappend.ffa6ba12.jpg",
    "revision": "ffa6ba1214b58b9df8727878795db8a0"
  },
  {
    "url": "assets/img/stringdelay.f660f62d.jpg",
    "revision": "f660f62d6e0c23e4ff9b1fb2d69a154d"
  },
  {
    "url": "assets/img/stringdispatcher.9540c871.jpg",
    "revision": "9540c8715f2b0cf2f30e133feedd9c98"
  },
  {
    "url": "assets/img/stringexpander.35b2aef0.jpg",
    "revision": "35b2aef0d1f9741bb5c948ba209fadcc"
  },
  {
    "url": "assets/img/stringfilter.e949de40.jpg",
    "revision": "e949de402892f416959455025e0979c8"
  },
  {
    "url": "assets/img/stringpathmultiplexer.cefdc2b2.jpg",
    "revision": "cefdc2b2eb3eed622403fcfb4f32bd43"
  },
  {
    "url": "assets/img/stringpathselector.ab8e1a6f.jpg",
    "revision": "ab8e1a6f7f303ebfd6bdd6035a0d627d"
  },
  {
    "url": "assets/img/stringsplitter.c64848ba.png",
    "revision": "c64848baf83cca61d0761f7dd5f5f668"
  },
  {
    "url": "assets/img/stringtodouble.9dd0d127.jpg",
    "revision": "9dd0d127b9b05408c39718f146b4a2c9"
  },
  {
    "url": "assets/img/stringtoint.3fa07379.jpg",
    "revision": "3fa073796fd273d59678c6ae0543666c"
  },
  {
    "url": "assets/img/syntheticvoice.87548358.jpg",
    "revision": "875483584edd7a790b3d1907dc97f100"
  },
  {
    "url": "assets/img/teensyrc.3c5cee21.jpg",
    "revision": "3c5cee21f0e4e2481e102b98d7c7bad1"
  },
  {
    "url": "assets/img/teensyrcapplication.3fb9faed.jpg",
    "revision": "3fb9faed2ebd55acc3ee54189c93e45e"
  },
  {
    "url": "assets/img/teensyrcremote.9557271e.jpg",
    "revision": "9557271e0e43ef385f3f25f0e8520471"
  },
  {
    "url": "assets/img/textarea.b8330bde.jpg",
    "revision": "b8330bdeb3f49cb3f0c12c6a3d017c07"
  },
  {
    "url": "assets/img/textdisplay.08959461.jpg",
    "revision": "08959461aa0e3b63552462275e00a9da"
  },
  {
    "url": "assets/img/textfieldreader.3a481d00.jpg",
    "revision": "3a481d008fe38a10fb9f9a304bdc0e2c"
  },
  {
    "url": "assets/img/textsender.7fb85a38.jpg",
    "revision": "7fb85a3827a708b5e60af9849c1467ce"
  },
  {
    "url": "assets/img/threshold.5ccba1f1.jpg",
    "revision": "5ccba1f1e2dace5edeecb84df5548629"
  },
  {
    "url": "assets/img/timer.1ce9db2c.jpg",
    "revision": "1ce9db2c48ae8d38cf828d580f047853"
  },
  {
    "url": "assets/img/tobi_example_ic.5e0290b1.jpg",
    "revision": "5e0290b1c1e98e35597848ba58c7133f"
  },
  {
    "url": "assets/img/tobi_ic_message.063d3114.jpg",
    "revision": "063d311491c5ebb0ded54c3d730ed851"
  },
  {
    "url": "assets/img/tobi_tic.39c74c4e.jpg",
    "revision": "39c74c4e5fda2f1c5fe8cf8ac0a2c73d"
  },
  {
    "url": "assets/img/tobiigaming_product_4c.a006cad9.png",
    "revision": "a006cad977d74128a650c1c06e1aba4b"
  },
  {
    "url": "assets/img/tonegenerator.0a8e2909.png",
    "revision": "0a8e2909f38fee888564b1d9dea38f41"
  },
  {
    "url": "assets/img/tooltip_default_iconset.9a39fb44.jpg",
    "revision": "9a39fb443c97f6d088a72e99660e6aca"
  },
  {
    "url": "assets/img/tooltip.d0d624d9.jpg",
    "revision": "d0d624d936cb202150aa205b1140de98"
  },
  {
    "url": "assets/img/trainingset.7427e719.jpg",
    "revision": "7427e71952da9383d510c461ec3efeca"
  },
  {
    "url": "assets/img/universalremotecontrol.c9a71d59.png",
    "revision": "c9a71d599c514f5f46a2b20bd279c2ee"
  },
  {
    "url": "assets/img/wavefileplayer.19bad6a5.jpg",
    "revision": "19bad6a5b432d0b7eaea5c4db842bf76"
  },
  {
    "url": "assets/img/web-acs-empty.276c001e.png",
    "revision": "276c001edcaa398198d556dbad966627"
  },
  {
    "url": "assets/img/wiimote_picture.0684eac1.jpg",
    "revision": "0684eac17ec884c90d179404a8f2a941"
  },
  {
    "url": "assets/img/wiimote.7e82ebda.jpg",
    "revision": "7e82ebdac9fdf2ae2c32bc2e6765090e"
  },
  {
    "url": "assets/img/writecsv.b915e031.png",
    "revision": "b915e0311ff32ef4a5ccc8bd9a35ce48"
  },
  {
    "url": "assets/img/writeedf.ebcf5ca6.png",
    "revision": "ebcf5ca6d4d430e271399ba386e1eb32"
  },
  {
    "url": "assets/img/yaak.228d9dc7.png",
    "revision": "228d9dc7ad8afac177e7799a12685d91"
  },
  {
    "url": "assets/js/1.2a372754.js",
    "revision": "b3cb175739ebcf3365f95ef789af52c9"
  },
  {
    "url": "assets/js/10.ca5709b3.js",
    "revision": "ed3e4d4062c5a78ad2cee8383c306312"
  },
  {
    "url": "assets/js/100.f754e48a.js",
    "revision": "d11d31cb8ab404ec1e7a13535a681d69"
  },
  {
    "url": "assets/js/101.6f6fcf90.js",
    "revision": "0c94470557ebc79ac252366b109068e3"
  },
  {
    "url": "assets/js/102.a9a6658c.js",
    "revision": "aa7d87b84752d3fe99af24059b5087c2"
  },
  {
    "url": "assets/js/103.04adcdb2.js",
    "revision": "3e24e38afee86baf7e299dcb9a7160b2"
  },
  {
    "url": "assets/js/104.bd077db5.js",
    "revision": "2ab0463d3852be95d2bf7473fc7f6061"
  },
  {
    "url": "assets/js/105.22bc7dc7.js",
    "revision": "8b3fd81e3f2304b2236369e3f32801e6"
  },
  {
    "url": "assets/js/106.44a29f3e.js",
    "revision": "23569453b089c1a65bf8fa415c5cd1bd"
  },
  {
    "url": "assets/js/107.9e8a03b2.js",
    "revision": "11052b8f11bc046feb2ffaa47504e67b"
  },
  {
    "url": "assets/js/108.903c5813.js",
    "revision": "43f9bf2693ab0aba319f831b8e893979"
  },
  {
    "url": "assets/js/109.530daac9.js",
    "revision": "e0375bda57e0ed4cfdfba3579f608235"
  },
  {
    "url": "assets/js/11.e88ba834.js",
    "revision": "d60ec1ade2f7ca1190b762ca5be0fc85"
  },
  {
    "url": "assets/js/110.a79c6991.js",
    "revision": "6230608ad13f260028e6443dcf511634"
  },
  {
    "url": "assets/js/111.1679d6d4.js",
    "revision": "120d018f8fa6111ba6b348e0a710a7f4"
  },
  {
    "url": "assets/js/112.5f26f499.js",
    "revision": "e9177dc7c123d816539407963dc35459"
  },
  {
    "url": "assets/js/113.c333f780.js",
    "revision": "43d38b9da933f20d86b1165175e8b6b8"
  },
  {
    "url": "assets/js/114.3c7d7cea.js",
    "revision": "2649ab0a5dea3af60d077e608490ce64"
  },
  {
    "url": "assets/js/115.fab1129c.js",
    "revision": "0fadf6729038edac4902d27ef677a979"
  },
  {
    "url": "assets/js/116.93e11a03.js",
    "revision": "3941c0ad0797ae9fa2e558cd45f46204"
  },
  {
    "url": "assets/js/117.74ec2e5b.js",
    "revision": "149513433c8d10aba2ddf98d6a4f1e29"
  },
  {
    "url": "assets/js/118.27038b67.js",
    "revision": "aea51698bed16cdceb48e7e0dc7bf443"
  },
  {
    "url": "assets/js/119.c30fadca.js",
    "revision": "43dd12ff90830d3632d60eef3d8e0aef"
  },
  {
    "url": "assets/js/12.63f3c252.js",
    "revision": "961963eb5f69d0e7ff2bd2caeaba6c1d"
  },
  {
    "url": "assets/js/120.630be3c7.js",
    "revision": "f829e93755c305d4f76349012e241b56"
  },
  {
    "url": "assets/js/121.308e1320.js",
    "revision": "af846a97cd6ee4c7dc103d4c3463dffa"
  },
  {
    "url": "assets/js/122.631c3301.js",
    "revision": "95d4e5cabced38fb0746affb696a1935"
  },
  {
    "url": "assets/js/123.665861de.js",
    "revision": "fd2093662289671a6bb2f71fa7d076c2"
  },
  {
    "url": "assets/js/124.836e48dd.js",
    "revision": "6582d52d70f2660b6c4ca1fc47bf7fbe"
  },
  {
    "url": "assets/js/125.4d414240.js",
    "revision": "63acb664b67aebf61433d9b02a9d3803"
  },
  {
    "url": "assets/js/126.1dc1fed3.js",
    "revision": "e60b0f3b81680a6907402cf42d11700b"
  },
  {
    "url": "assets/js/127.99eaced3.js",
    "revision": "526aaf75cd753b99a17b05fb5e03b4fa"
  },
  {
    "url": "assets/js/128.ca0de607.js",
    "revision": "3082e76668b058e96854fbd8447cad0b"
  },
  {
    "url": "assets/js/129.187f2b83.js",
    "revision": "fcefeb3bed96656deee65565bc0fc2fc"
  },
  {
    "url": "assets/js/13.3c4e5f32.js",
    "revision": "0e159271986815d4ab7de953fcdc2c22"
  },
  {
    "url": "assets/js/130.2f6842c6.js",
    "revision": "742f3f4115e65b8373bd17f94e6fb7b9"
  },
  {
    "url": "assets/js/131.3744cb43.js",
    "revision": "23c6e26a5ac0c8aac0ad64141d90873b"
  },
  {
    "url": "assets/js/132.55fa91d6.js",
    "revision": "1b990e6dc545f9034091d56ba4d2f31c"
  },
  {
    "url": "assets/js/133.b57ea9d5.js",
    "revision": "8bc63e7ae0ba91de979459569c6f6800"
  },
  {
    "url": "assets/js/134.4986d262.js",
    "revision": "30b7ba162fb669c76386f9fa84b06370"
  },
  {
    "url": "assets/js/135.8fc2a4f4.js",
    "revision": "acc0f24fac1ff87ca1d0cc205ea2d555"
  },
  {
    "url": "assets/js/136.219e8745.js",
    "revision": "5bac70bbd8b8c543693320a357b96dc5"
  },
  {
    "url": "assets/js/137.aa206b09.js",
    "revision": "d8a9727c5e5a9685961f55be236694ba"
  },
  {
    "url": "assets/js/138.acd51226.js",
    "revision": "edd88c38ba9e680d0f7b316d9235795c"
  },
  {
    "url": "assets/js/139.c94773b2.js",
    "revision": "890dfecbebe4a41a10b87c61e52e6ad1"
  },
  {
    "url": "assets/js/14.42645f6d.js",
    "revision": "956a11e8631e979fc48778d8d1bc4ca6"
  },
  {
    "url": "assets/js/140.3416fa5a.js",
    "revision": "5847333d4d323070ffc22b6a1c3ac531"
  },
  {
    "url": "assets/js/141.11a12253.js",
    "revision": "7176ab1ceb5ff97f0e62c3e506fee429"
  },
  {
    "url": "assets/js/142.7af148eb.js",
    "revision": "b80f1180184377027554abfc623cb154"
  },
  {
    "url": "assets/js/143.e60bb277.js",
    "revision": "afeeb18033db871c4971f61726d5a266"
  },
  {
    "url": "assets/js/144.346dcd7a.js",
    "revision": "ab03151cd23914f53810b81e46e54c7d"
  },
  {
    "url": "assets/js/145.8c908173.js",
    "revision": "91072476bc7bdbc9dd4eb4b56935dc19"
  },
  {
    "url": "assets/js/146.a85463b4.js",
    "revision": "34d3051f7c66026ed33df882544802c8"
  },
  {
    "url": "assets/js/147.a1e27d69.js",
    "revision": "77ff6b2d0f0665cf968cc60d71691a82"
  },
  {
    "url": "assets/js/148.7790f416.js",
    "revision": "6279828413153bc654150f8c94c61d37"
  },
  {
    "url": "assets/js/149.4f6535da.js",
    "revision": "ddd63a485efcb587666cf970da2f67d1"
  },
  {
    "url": "assets/js/15.4de22a3a.js",
    "revision": "5ba61dbfbc00f22aff9087e4cbb56557"
  },
  {
    "url": "assets/js/150.7717ce3c.js",
    "revision": "da6af01d81365c4a98b9fdd3adcb27ae"
  },
  {
    "url": "assets/js/151.63923362.js",
    "revision": "6b58c8f1001d44d04f53e54170a34316"
  },
  {
    "url": "assets/js/152.f37e8c58.js",
    "revision": "c0b40a1fe630186102b7390c24aa4b46"
  },
  {
    "url": "assets/js/153.011c11f1.js",
    "revision": "96862280c6ac26253832aaf3835e8db4"
  },
  {
    "url": "assets/js/154.3a265c17.js",
    "revision": "88155d681f1fe23e18b3697999fd9aa8"
  },
  {
    "url": "assets/js/155.913a616c.js",
    "revision": "e519a17fc8c174b4dcf034bb2be308ed"
  },
  {
    "url": "assets/js/156.f48b785a.js",
    "revision": "79db34b7adbdfa8c8bb71bf0bd3e2ae3"
  },
  {
    "url": "assets/js/157.f382ad40.js",
    "revision": "3e6947e5c1534dc50bcb9c46e088beb6"
  },
  {
    "url": "assets/js/158.d0e88583.js",
    "revision": "b20f208e3efbd3ba334532cab110fb41"
  },
  {
    "url": "assets/js/159.26dc81de.js",
    "revision": "857bda366fa57b890f8f4f7e85cf987a"
  },
  {
    "url": "assets/js/16.f752978e.js",
    "revision": "2a7f02b9faa17f1773e89d481e37d188"
  },
  {
    "url": "assets/js/160.41348f57.js",
    "revision": "0c9a8629eca1bac40aa32966b5f593f9"
  },
  {
    "url": "assets/js/161.40eff4cc.js",
    "revision": "09f6129cb1fb5f50d578e8fac8fae641"
  },
  {
    "url": "assets/js/162.715eb7bf.js",
    "revision": "d1dec01d8f03ea1e28fbd46cec091a6a"
  },
  {
    "url": "assets/js/163.38dd793e.js",
    "revision": "91131525d7107a2d512b8efd6b5f4440"
  },
  {
    "url": "assets/js/164.3b8aea7c.js",
    "revision": "6c5f62aa3fa52b7ae775e57c97c89588"
  },
  {
    "url": "assets/js/165.cfadad89.js",
    "revision": "6f6a3891e5c4987ca4ecba7845ad9b0a"
  },
  {
    "url": "assets/js/166.d15eef65.js",
    "revision": "c92e062278b8eb0a75fe6939842cefe3"
  },
  {
    "url": "assets/js/167.99c5b352.js",
    "revision": "73fdd818f66658bb704eea9bd51a0126"
  },
  {
    "url": "assets/js/168.1077b7e4.js",
    "revision": "d4c2a95319807860609b70f59425acda"
  },
  {
    "url": "assets/js/169.78441937.js",
    "revision": "9034dccc3e443cfbd37466483035877e"
  },
  {
    "url": "assets/js/17.bedd9677.js",
    "revision": "38a877c5251ed2d6f5b261222242d6c3"
  },
  {
    "url": "assets/js/170.8cf77621.js",
    "revision": "8f5a771601bd30e7a336783523155b1a"
  },
  {
    "url": "assets/js/171.f131b1a9.js",
    "revision": "f7f40b56a62490b301c93c9afeddbb67"
  },
  {
    "url": "assets/js/172.138cd776.js",
    "revision": "0c20f5c0ef8145edbe4d8f30c733dbd4"
  },
  {
    "url": "assets/js/173.04ea4438.js",
    "revision": "17334ef5ad043593663f05777314700c"
  },
  {
    "url": "assets/js/174.9c60d584.js",
    "revision": "720bd9ddd222ae5780e948a3a8082f8d"
  },
  {
    "url": "assets/js/175.3b178650.js",
    "revision": "bfaac23d9b2ba77834ad7da61b11c330"
  },
  {
    "url": "assets/js/176.3db7dade.js",
    "revision": "de8296755d465252ed9e6211badb8380"
  },
  {
    "url": "assets/js/177.d4d2d2bd.js",
    "revision": "bd81127fc166ee49a86dff7a91d8a6b6"
  },
  {
    "url": "assets/js/178.b39f74cb.js",
    "revision": "f17154741d44f5e239683b2a0487fe33"
  },
  {
    "url": "assets/js/179.a75643b0.js",
    "revision": "b83ec48d909b69d8ca4ff0decf9dc7d3"
  },
  {
    "url": "assets/js/18.a502057c.js",
    "revision": "24020f7d1e419013c08e3e7ce61ad5d4"
  },
  {
    "url": "assets/js/180.31f7a6e8.js",
    "revision": "5695d6df06852b80c68204611e2a6fee"
  },
  {
    "url": "assets/js/181.8a06431a.js",
    "revision": "8a3db65647489b7a872087d97e4b28f7"
  },
  {
    "url": "assets/js/182.2cb9d53f.js",
    "revision": "5c257cab05bf7135170ef04810304a11"
  },
  {
    "url": "assets/js/183.5dab05da.js",
    "revision": "bcc4b1e082a62e0f8e54ea34d9665e69"
  },
  {
    "url": "assets/js/184.7b7e35e6.js",
    "revision": "4b7a6fa4b2ca62a515d26d820f40549a"
  },
  {
    "url": "assets/js/185.47a195b8.js",
    "revision": "732d6a94e5a1b2d612532e7a38a61171"
  },
  {
    "url": "assets/js/186.8fb91a26.js",
    "revision": "14885d5aead34ec51ee33703939e1943"
  },
  {
    "url": "assets/js/187.5f61a12f.js",
    "revision": "29c873d010ab80b6c797367a1b4d5019"
  },
  {
    "url": "assets/js/188.7d83cddf.js",
    "revision": "483c1198aa54155c4244b1c92c2d3159"
  },
  {
    "url": "assets/js/189.74fc2d24.js",
    "revision": "79a6af0d7f946501462e8d95c5f1f32a"
  },
  {
    "url": "assets/js/19.4d5930ff.js",
    "revision": "262c39447be92c6eb46c5abe802947d3"
  },
  {
    "url": "assets/js/190.5fe666b2.js",
    "revision": "1ef9847301af7024c7ac2cf0be944b29"
  },
  {
    "url": "assets/js/191.1520363e.js",
    "revision": "af08b26c4633edcafff508827a636e1f"
  },
  {
    "url": "assets/js/192.b109cc4a.js",
    "revision": "84b5f5343d3472017717e22349b1a998"
  },
  {
    "url": "assets/js/193.30250954.js",
    "revision": "03d40b3be33f3c518010468474669a8f"
  },
  {
    "url": "assets/js/194.c0320088.js",
    "revision": "81805174b830a179e890a6f19d9ca412"
  },
  {
    "url": "assets/js/195.bab03096.js",
    "revision": "e511453ccff232cdd840be23ee8cfce1"
  },
  {
    "url": "assets/js/196.341b1fd7.js",
    "revision": "3f233a785991475f1b359f0064f783f3"
  },
  {
    "url": "assets/js/197.eb52ae40.js",
    "revision": "3a607a7d9a0d0055dc7f2dd91efddf66"
  },
  {
    "url": "assets/js/198.9c0cb27e.js",
    "revision": "c70a60411c9f3376fe037cf83c72846c"
  },
  {
    "url": "assets/js/199.504f09cc.js",
    "revision": "ee9d96ce69611aececf4c61655fb0c39"
  },
  {
    "url": "assets/js/20.c3bb612d.js",
    "revision": "30d9937dd53770cfe4ce4c1bc2c1b187"
  },
  {
    "url": "assets/js/200.8f0a16cd.js",
    "revision": "d01a54ef20f085512637f9528a1d859c"
  },
  {
    "url": "assets/js/201.02adf955.js",
    "revision": "79112a37598670fbcd6312f489356dc0"
  },
  {
    "url": "assets/js/202.42e02769.js",
    "revision": "2c112e920613b7034a9fb5fae659e17a"
  },
  {
    "url": "assets/js/203.abe17a43.js",
    "revision": "97c7b4e7dd6b59e7420e6b9fcf92a1a3"
  },
  {
    "url": "assets/js/204.69019021.js",
    "revision": "f36a347df1fb1a7e98b697e5599bd816"
  },
  {
    "url": "assets/js/205.ecb35748.js",
    "revision": "2b3255617c4dc758b6b01acde9433f70"
  },
  {
    "url": "assets/js/206.e31b3932.js",
    "revision": "dd1dc952af243ee25da1237edf9ae07d"
  },
  {
    "url": "assets/js/207.4d471b55.js",
    "revision": "edcd6fe9eaf4bef7b334b81f7b7d5cb2"
  },
  {
    "url": "assets/js/208.2504fc94.js",
    "revision": "48fa9d64ad142caa572fe6f17e6e2667"
  },
  {
    "url": "assets/js/209.3b80b0fa.js",
    "revision": "293e3e826277d194eb5b3db29a9a6eea"
  },
  {
    "url": "assets/js/21.afe9f714.js",
    "revision": "ea93b84e6f4d94f87b4079d9eb8d99f4"
  },
  {
    "url": "assets/js/210.9135502a.js",
    "revision": "cc33097614f6b22f3d97638603b6d2fe"
  },
  {
    "url": "assets/js/211.83ed2997.js",
    "revision": "08291254c734d598129f29a7e7d14c26"
  },
  {
    "url": "assets/js/212.dfe72113.js",
    "revision": "f76708697162537f21330c43f32b428f"
  },
  {
    "url": "assets/js/213.8f0fb9ed.js",
    "revision": "e95da075de670036973d18ef73a11954"
  },
  {
    "url": "assets/js/214.6e50a310.js",
    "revision": "31f1b1d23d1693e1bdb711147163d5a6"
  },
  {
    "url": "assets/js/215.8a142e52.js",
    "revision": "02b818e9cc9abb7a5add50de81752b4e"
  },
  {
    "url": "assets/js/216.db09ad87.js",
    "revision": "f4fd62a04e22b5dfbdb25638765de5b9"
  },
  {
    "url": "assets/js/217.61034a63.js",
    "revision": "d070f6ee701a38e9de5227e5b72dc9da"
  },
  {
    "url": "assets/js/218.4b359bc0.js",
    "revision": "cfec1ba6cf80b8e46f4fcb57367b1872"
  },
  {
    "url": "assets/js/219.7eafe156.js",
    "revision": "26224a77e0b22ce468b863350bdb04ce"
  },
  {
    "url": "assets/js/22.1580ce6a.js",
    "revision": "4051cd9ef83de68845e7dfe28e6e55ec"
  },
  {
    "url": "assets/js/220.dd033aeb.js",
    "revision": "c395d1583751e5c2fd377ed841526c62"
  },
  {
    "url": "assets/js/221.e3ac2426.js",
    "revision": "eca7e81fe03fab62a76d61be6b522d70"
  },
  {
    "url": "assets/js/222.318c9634.js",
    "revision": "365a44515116f7bb5a74ba55a8069c64"
  },
  {
    "url": "assets/js/223.7622bbe9.js",
    "revision": "dd86796dd7ca5d37cb1a26a6ae18c13e"
  },
  {
    "url": "assets/js/224.0d847c84.js",
    "revision": "b5e82eb93d1023bc17eaa39635787c05"
  },
  {
    "url": "assets/js/225.7ef3e6b4.js",
    "revision": "6e9b73dc5e6a3adfe11a02700ff67d68"
  },
  {
    "url": "assets/js/226.7daeed1a.js",
    "revision": "aefe402d4d66a4818c25f9ba12570937"
  },
  {
    "url": "assets/js/227.8353aa1e.js",
    "revision": "0c34cfbf22a135b1bcfecd28ec314218"
  },
  {
    "url": "assets/js/228.257025fc.js",
    "revision": "0baa72425a3a2a6bec3f0df57c53c260"
  },
  {
    "url": "assets/js/229.59541b23.js",
    "revision": "b770286d0baca25a404c869fe10fdd94"
  },
  {
    "url": "assets/js/23.f9f278f5.js",
    "revision": "af820bcc83d81887e741795d9ef5c1c3"
  },
  {
    "url": "assets/js/230.7e44c49b.js",
    "revision": "8cffbe4125a0bb06d08097e088261fb2"
  },
  {
    "url": "assets/js/231.3c7dcd90.js",
    "revision": "b083ceb1d626122375db587c14b315d5"
  },
  {
    "url": "assets/js/232.357c2041.js",
    "revision": "47404d4bfe6cf8fd1a90b4307185e363"
  },
  {
    "url": "assets/js/233.cac12050.js",
    "revision": "831e1f3357c97ec8c794e267385b82f6"
  },
  {
    "url": "assets/js/234.9f239989.js",
    "revision": "086fbba12a3e4959bb4dd440c924246e"
  },
  {
    "url": "assets/js/235.197bd09a.js",
    "revision": "1d8f014e1ceaa3377c0a45e7e899d1a3"
  },
  {
    "url": "assets/js/236.e334958f.js",
    "revision": "26c2db83ce1bbe4043e2c22d52d56a42"
  },
  {
    "url": "assets/js/237.5269a4da.js",
    "revision": "9d7f82c0f8daf2759eeed93a37c339e0"
  },
  {
    "url": "assets/js/238.38af63a7.js",
    "revision": "89eb585aeb86e5b27a3ab5ceb0b0e88a"
  },
  {
    "url": "assets/js/239.7f5a143a.js",
    "revision": "b7df93085e852ae163c344b77528a8a5"
  },
  {
    "url": "assets/js/24.67f618f7.js",
    "revision": "beea58867c56327998770bc1002162a0"
  },
  {
    "url": "assets/js/240.0f2a3e66.js",
    "revision": "0b5aa9141facfc629cd925a7e34ef262"
  },
  {
    "url": "assets/js/241.0cf33f56.js",
    "revision": "2aa78dadb5b899938b68fd417340fa5b"
  },
  {
    "url": "assets/js/242.883a969a.js",
    "revision": "faf80b26daa78a2a0dc6d90a8466ddd1"
  },
  {
    "url": "assets/js/243.d3ad4e14.js",
    "revision": "44501db0563b4b68ba26a155df01bb90"
  },
  {
    "url": "assets/js/244.da98cfe0.js",
    "revision": "6e5ebca7cbc5e1bc9e6dc89c69108716"
  },
  {
    "url": "assets/js/245.738bb946.js",
    "revision": "24536156137d0b59b92bcb536e5f76af"
  },
  {
    "url": "assets/js/246.d078c1a6.js",
    "revision": "b4652b0e2a44de5697ddb2bd7c6b8da7"
  },
  {
    "url": "assets/js/247.68bcc22f.js",
    "revision": "df6c14dcb21b89adc7e449b8a9cb512b"
  },
  {
    "url": "assets/js/248.81e0fba9.js",
    "revision": "82b249da82196ec923df6542cfd22076"
  },
  {
    "url": "assets/js/249.19bb1130.js",
    "revision": "1a555fb60e638e343adcc6fda98ceccd"
  },
  {
    "url": "assets/js/25.40c58e39.js",
    "revision": "8198c55a3d847bbe0da32d96afd38d0b"
  },
  {
    "url": "assets/js/250.7bad49a7.js",
    "revision": "fa42dadab1bb7ce9dbcb0a6c75d9f08c"
  },
  {
    "url": "assets/js/251.f674d2dd.js",
    "revision": "80b80876374df22a004c822385051b37"
  },
  {
    "url": "assets/js/252.1f94498d.js",
    "revision": "abf6a04e525913f173e76179ce7d18b5"
  },
  {
    "url": "assets/js/253.237a4f46.js",
    "revision": "dee2a7aab397ba5cbf2ad6e68bec30d0"
  },
  {
    "url": "assets/js/254.1f069555.js",
    "revision": "9d919e037c59f2d1fe4c400e0c7cb9b3"
  },
  {
    "url": "assets/js/255.a5723ad7.js",
    "revision": "e44e0bb73bc2747d55767a8c721ad9ed"
  },
  {
    "url": "assets/js/256.ba4cb117.js",
    "revision": "3ae101e291d95a3a5f1d8764c3957182"
  },
  {
    "url": "assets/js/257.49e22759.js",
    "revision": "9c117e45478caa74728304957a31ccf9"
  },
  {
    "url": "assets/js/258.3c55b7c6.js",
    "revision": "6a08ad99e4a1bc0341717dcb4ac58158"
  },
  {
    "url": "assets/js/259.91282c7a.js",
    "revision": "225d85c3c42c9cb59134597340f0fd7a"
  },
  {
    "url": "assets/js/26.5a12df58.js",
    "revision": "9fcb96c52ba89c11c5dfba1d9a02246d"
  },
  {
    "url": "assets/js/260.7c7449a6.js",
    "revision": "3384287af68398f870cc1ac09b1cd354"
  },
  {
    "url": "assets/js/261.95a2a833.js",
    "revision": "71f322962486a26799c3af318c3cc7a3"
  },
  {
    "url": "assets/js/262.098759aa.js",
    "revision": "fd2078346d554a88f1078ed60215b538"
  },
  {
    "url": "assets/js/263.2694b466.js",
    "revision": "8b40de6f3e20fa6c6e5af9aae9d8d04a"
  },
  {
    "url": "assets/js/264.182c137c.js",
    "revision": "fd544ff28251a90807773cd7f790505a"
  },
  {
    "url": "assets/js/265.edfb8dff.js",
    "revision": "1a4bd48f76e4b4fc9f433aaa47b8e76d"
  },
  {
    "url": "assets/js/266.4dbdb8ba.js",
    "revision": "24c7a19444fbdaad95f5d30997ddd6e9"
  },
  {
    "url": "assets/js/267.0bba948c.js",
    "revision": "40818559333b1d77396ecebc794625ff"
  },
  {
    "url": "assets/js/268.c7748283.js",
    "revision": "66cd4c0587727ec64916379d38e81dac"
  },
  {
    "url": "assets/js/269.19a439c7.js",
    "revision": "5bc7d389c6e578e81e2dd67c3e3fc302"
  },
  {
    "url": "assets/js/27.7b4a523b.js",
    "revision": "5ae760c08e56a966dd8a9c4ae22144b3"
  },
  {
    "url": "assets/js/270.eac4aae7.js",
    "revision": "18e2870bfa505d45b1aeb3b8ddd264c9"
  },
  {
    "url": "assets/js/271.3720df0f.js",
    "revision": "986d72d82b86235dacaf792204f4305c"
  },
  {
    "url": "assets/js/272.57bdedde.js",
    "revision": "82b06a1670cc3f756928656c8fed4be5"
  },
  {
    "url": "assets/js/273.96ac9c7b.js",
    "revision": "abf0c9a166a530ea5a86bf8f368f4cc6"
  },
  {
    "url": "assets/js/274.47ecfc7d.js",
    "revision": "529f4a698126cbdff209d158ddc172cc"
  },
  {
    "url": "assets/js/275.009bebc6.js",
    "revision": "0c1ff1d6f3511329544e565f49892de7"
  },
  {
    "url": "assets/js/276.9bd8c721.js",
    "revision": "2e1477194df8bc28345aa4e173c30039"
  },
  {
    "url": "assets/js/277.837b3a22.js",
    "revision": "240e25d1f98e13f7eb09bbe3d602e07b"
  },
  {
    "url": "assets/js/278.e41db5c2.js",
    "revision": "46ce04f544773ed11519e6c2b8383c87"
  },
  {
    "url": "assets/js/279.58334e22.js",
    "revision": "bd0174c3b0c18e4e7e3a5d20879c25ae"
  },
  {
    "url": "assets/js/28.e2aa28ff.js",
    "revision": "551c84e57ae5fb17943d1825f5e4f855"
  },
  {
    "url": "assets/js/280.68e3f42a.js",
    "revision": "4cf76a7ed7e981baaaa7b8f080cf91c0"
  },
  {
    "url": "assets/js/281.13c1f60e.js",
    "revision": "ca246797ac0322f32015f579fe1b423f"
  },
  {
    "url": "assets/js/282.cbb35a18.js",
    "revision": "ff5ec0c673dd4b76e1bfac99b0121169"
  },
  {
    "url": "assets/js/283.e0c1a617.js",
    "revision": "3ed94e06dd488214a2ecb67d2f16d489"
  },
  {
    "url": "assets/js/284.c5bcbb4b.js",
    "revision": "7d6705b2159eafc29ba8b955ef943d02"
  },
  {
    "url": "assets/js/285.ccf055df.js",
    "revision": "ce7f6287bea316b4bc29a3f4cff72708"
  },
  {
    "url": "assets/js/286.3834cece.js",
    "revision": "a9a83d43ee6da490f9ff147f4f396c8b"
  },
  {
    "url": "assets/js/287.8e29b6ac.js",
    "revision": "02d617bb0c5efaf92b1f1294c61fe90d"
  },
  {
    "url": "assets/js/288.1297d03a.js",
    "revision": "3ac5634c61fe172ab30c074e8dbf982d"
  },
  {
    "url": "assets/js/289.dbddb672.js",
    "revision": "9210e01b9ab045b41e42eaefb69f1898"
  },
  {
    "url": "assets/js/29.4825f5aa.js",
    "revision": "03403a8f9fd97c8e4a69b039138c6431"
  },
  {
    "url": "assets/js/290.07c28b88.js",
    "revision": "b9f3821f283dfe59962aef532c0828f7"
  },
  {
    "url": "assets/js/291.6bd8cb72.js",
    "revision": "453c8f3759c09ded192db9c56a3bb442"
  },
  {
    "url": "assets/js/292.9c7d6f84.js",
    "revision": "0def45672a8efb13b785c3c4842bf854"
  },
  {
    "url": "assets/js/293.e201b3f6.js",
    "revision": "b616c29ad6746373d693810979982bc4"
  },
  {
    "url": "assets/js/294.70f22f7c.js",
    "revision": "990e4890f66062558953b7ac3b8e0b4b"
  },
  {
    "url": "assets/js/295.e035992c.js",
    "revision": "c6cf8c81e7caff60979052efd7f35247"
  },
  {
    "url": "assets/js/296.67277f2a.js",
    "revision": "f669e37a95e458509731276c0b3c49ce"
  },
  {
    "url": "assets/js/297.2048a52b.js",
    "revision": "33dc17cea891257c7fb6f22daa3474ab"
  },
  {
    "url": "assets/js/298.b5f6d196.js",
    "revision": "ee6e8136eecadaeecaf254749cec2f20"
  },
  {
    "url": "assets/js/299.4e8327e8.js",
    "revision": "4b3f0d2a6c0191b11375481cf490c8c7"
  },
  {
    "url": "assets/js/3.7faabfa7.js",
    "revision": "a95b57cd452525c8d254a1f492915991"
  },
  {
    "url": "assets/js/30.60db433f.js",
    "revision": "143933222bc3d7b8eabde768acf95c55"
  },
  {
    "url": "assets/js/300.e8eaeb48.js",
    "revision": "860fce72eb9de69ce76891f6d6ed8b3c"
  },
  {
    "url": "assets/js/301.77c66f90.js",
    "revision": "45b3134be951867cd82acd91f46defed"
  },
  {
    "url": "assets/js/302.7d87f225.js",
    "revision": "79728cda410c9fd69666f52f3e699ab9"
  },
  {
    "url": "assets/js/303.ab268311.js",
    "revision": "62a02bf6a2e7af921a59a7ce757d3e2b"
  },
  {
    "url": "assets/js/304.d9b75afd.js",
    "revision": "c2c6d13a2057630bbdf4e2748b31073f"
  },
  {
    "url": "assets/js/305.16e7555e.js",
    "revision": "963560047a2bdce043671df971584465"
  },
  {
    "url": "assets/js/306.0cedcef1.js",
    "revision": "2d3ebd019ea39322bb67bece7bf55212"
  },
  {
    "url": "assets/js/307.cf192ef9.js",
    "revision": "3e1d155aa134eaf3643b7fa5756950d0"
  },
  {
    "url": "assets/js/308.09367777.js",
    "revision": "dd15cfde6756a733f323f20f86619139"
  },
  {
    "url": "assets/js/309.065640d8.js",
    "revision": "bf43f23a5397f138549f76dfd904a02c"
  },
  {
    "url": "assets/js/31.ee2d3cef.js",
    "revision": "a2213331771eda665f1b108760944c59"
  },
  {
    "url": "assets/js/310.23cdcf27.js",
    "revision": "0c0c99873d97d7af06dababee60675eb"
  },
  {
    "url": "assets/js/311.3d609cf5.js",
    "revision": "dfe0dd3eae09e113107852f51260f41a"
  },
  {
    "url": "assets/js/312.40c260e3.js",
    "revision": "b1ff17989ca096ca034abed4a33324ed"
  },
  {
    "url": "assets/js/32.45438a39.js",
    "revision": "689166447bea54d5aea576632ad10e37"
  },
  {
    "url": "assets/js/33.67216d16.js",
    "revision": "6dc42284ec054d2aa63d0b3df996de0e"
  },
  {
    "url": "assets/js/34.347a4211.js",
    "revision": "88ca2c4a439ab7f7d7f394f51e5da5a1"
  },
  {
    "url": "assets/js/35.883fea54.js",
    "revision": "d4b2210a28d5f3c883cc60d37e2945a8"
  },
  {
    "url": "assets/js/36.38b58f1b.js",
    "revision": "ce5c403f2b255c2a33f9f41fe47504fe"
  },
  {
    "url": "assets/js/37.731bcf69.js",
    "revision": "7fd1441b550ab826f420ec1822908293"
  },
  {
    "url": "assets/js/38.ed2e739f.js",
    "revision": "9b202a6ac7679bca2f0fb6d189e6b4b9"
  },
  {
    "url": "assets/js/39.8cfc8c7b.js",
    "revision": "5c2ffb053cadabe5b9efd22e11a9ccc7"
  },
  {
    "url": "assets/js/4.0f87385b.js",
    "revision": "0f6efafc48fff94f60268860ab7daf3d"
  },
  {
    "url": "assets/js/40.d3efeb75.js",
    "revision": "c7efe3e0a32494024b3386de024189dc"
  },
  {
    "url": "assets/js/41.09ef38ef.js",
    "revision": "eeea1fd8de5fb6969d3f1541f9622147"
  },
  {
    "url": "assets/js/42.3dc6705c.js",
    "revision": "6b9c8b0caf07eac30e5eea44a4cf84ba"
  },
  {
    "url": "assets/js/43.58ad013d.js",
    "revision": "2e80dd3302b2c886b2a78432476e52dd"
  },
  {
    "url": "assets/js/44.8190c6f4.js",
    "revision": "9a5dd3b42efff4118d5b47e2d44c5b76"
  },
  {
    "url": "assets/js/45.56af0a80.js",
    "revision": "5d4b4619dcf98fca6698df1076f6ea86"
  },
  {
    "url": "assets/js/46.adab09d2.js",
    "revision": "d85c9c9f3f6e2edd9c8bc822602f0134"
  },
  {
    "url": "assets/js/47.69727a74.js",
    "revision": "5c58a3c8ce5a14a490c56b32545daec3"
  },
  {
    "url": "assets/js/48.9468b59e.js",
    "revision": "a6d51aa5356c5becbf07cbb9c9b6a58c"
  },
  {
    "url": "assets/js/49.df8dccdd.js",
    "revision": "ad43c950a73b85c1c740eb620782053d"
  },
  {
    "url": "assets/js/5.a1efc3eb.js",
    "revision": "ca2b5de06936ace7504b14b6a58fd257"
  },
  {
    "url": "assets/js/50.9f73ddfb.js",
    "revision": "62bdc1b705443884fe371b2ac77384b8"
  },
  {
    "url": "assets/js/51.af82c8b7.js",
    "revision": "c70f36e491a3b62222d3a1bb24536aea"
  },
  {
    "url": "assets/js/52.f35225de.js",
    "revision": "2b15cc5f8405925e5c11cd7f3f574f35"
  },
  {
    "url": "assets/js/53.7306a46b.js",
    "revision": "48dc70ed4012a1b638bdb1b20e5b8f18"
  },
  {
    "url": "assets/js/54.984e0df4.js",
    "revision": "548287815719e1b15df78167204e9022"
  },
  {
    "url": "assets/js/55.b7b619bf.js",
    "revision": "b4ab8c00c7c500e0c702828c443d860b"
  },
  {
    "url": "assets/js/56.53bd51f1.js",
    "revision": "d0063cd1991b06af593e9b3ac5fc475c"
  },
  {
    "url": "assets/js/57.66a7cda5.js",
    "revision": "aaf1de8622e760bcb83b66c0c5447dee"
  },
  {
    "url": "assets/js/58.817183d0.js",
    "revision": "08e72f754ae9d5eeef27613e3451ff00"
  },
  {
    "url": "assets/js/59.29d362c7.js",
    "revision": "e6d8f292c9279a19d670b4c34f040c48"
  },
  {
    "url": "assets/js/6.5128f797.js",
    "revision": "e275a166071b49b68b53980e9e2ea260"
  },
  {
    "url": "assets/js/60.c5ee2184.js",
    "revision": "4c2aee2b4bc8d22901c696c49710dcfd"
  },
  {
    "url": "assets/js/61.242ea083.js",
    "revision": "6d84aa3d325e6be2998c732ce5346220"
  },
  {
    "url": "assets/js/62.f7d1b112.js",
    "revision": "b1855930e0ff9b54789c5fbf10ae4fe4"
  },
  {
    "url": "assets/js/63.aba2ad09.js",
    "revision": "13adf4cf107093f263290b02d98d8276"
  },
  {
    "url": "assets/js/64.25b01c02.js",
    "revision": "21979a33012090c6f5b8a38538c2bf2d"
  },
  {
    "url": "assets/js/65.43a676d3.js",
    "revision": "8a631c2526e78493b84dd007e55867a8"
  },
  {
    "url": "assets/js/66.373c3331.js",
    "revision": "418a97006d2933ef11219ae898b5fd13"
  },
  {
    "url": "assets/js/67.0304ff0c.js",
    "revision": "887ab10e4e2bb9b6252b13822938fe03"
  },
  {
    "url": "assets/js/68.01d6b471.js",
    "revision": "ad874e2c03c430208f0798bb9d8f239c"
  },
  {
    "url": "assets/js/69.4649be6a.js",
    "revision": "53c98d7181500f239ee24fd7bfcdc853"
  },
  {
    "url": "assets/js/7.688b2ba5.js",
    "revision": "7c2433ae3f0ca2b8cbf991db0b538d60"
  },
  {
    "url": "assets/js/70.33a758cf.js",
    "revision": "f5a391fbc8aa7a821d83da4631513f94"
  },
  {
    "url": "assets/js/71.d2380ccc.js",
    "revision": "13ec153ace8c06b7fb81fc4eb85d5a49"
  },
  {
    "url": "assets/js/72.65d101ac.js",
    "revision": "86d7d5c496bf0fbc94c4504e2f3d8144"
  },
  {
    "url": "assets/js/73.2f5f24ec.js",
    "revision": "bf847b50e54fc8f82404ff56a1703b4b"
  },
  {
    "url": "assets/js/74.496086e3.js",
    "revision": "4163da46ff8d5b752114fa4146a27674"
  },
  {
    "url": "assets/js/75.d5334035.js",
    "revision": "cc87287021e9ed1f92bf5b2289590e80"
  },
  {
    "url": "assets/js/76.d43ceb57.js",
    "revision": "0eedc76cf57d69b7fcad5801c6323803"
  },
  {
    "url": "assets/js/77.a08c7a52.js",
    "revision": "7b74c1ff167ad46f8d0e17e5f476103f"
  },
  {
    "url": "assets/js/78.bf41d4e5.js",
    "revision": "605d1e444a0ac23edf696937143904b0"
  },
  {
    "url": "assets/js/79.1667e015.js",
    "revision": "cddcacd848d0e3fff1a8c66b0694f61c"
  },
  {
    "url": "assets/js/8.b0629d11.js",
    "revision": "5337c79d5ccc3fda98eea77b63234172"
  },
  {
    "url": "assets/js/80.4ea28121.js",
    "revision": "f0dabfbab73076e9e742353d3ca3ed62"
  },
  {
    "url": "assets/js/81.c9942f6c.js",
    "revision": "a3c3b4d30284e04510701c26bae9ad8c"
  },
  {
    "url": "assets/js/82.e47d28f8.js",
    "revision": "99405a1785bf26e9286add06a43e3253"
  },
  {
    "url": "assets/js/83.75a2e8e9.js",
    "revision": "9e1d6b4ddde955660a81265e1c612e5c"
  },
  {
    "url": "assets/js/84.0245c579.js",
    "revision": "bf42d8f3fbfacc4d28e35a54c32526c2"
  },
  {
    "url": "assets/js/85.1e015b0f.js",
    "revision": "1426066a8263b6e21d1d43aa3b0d46e1"
  },
  {
    "url": "assets/js/86.55cab10c.js",
    "revision": "f36b1bdfb1b853966b5ad932be22a7dc"
  },
  {
    "url": "assets/js/87.a3ae9920.js",
    "revision": "87b85d75b4d35337428ef0851bf75dcb"
  },
  {
    "url": "assets/js/88.5d15c41d.js",
    "revision": "2e39fe1d07215506b269298e66ea66fa"
  },
  {
    "url": "assets/js/89.b18fe7a9.js",
    "revision": "1ec9c3656c2209faa87ce61011abb8cb"
  },
  {
    "url": "assets/js/9.4c688d58.js",
    "revision": "71a3a7cc64bdf3778b2c3067505fbacf"
  },
  {
    "url": "assets/js/90.88c7d49f.js",
    "revision": "b34ef05cdd53f5a83f748781a0b911fe"
  },
  {
    "url": "assets/js/91.64477793.js",
    "revision": "ff896096f8fff0299cbcfecc869c5dd9"
  },
  {
    "url": "assets/js/92.204abb11.js",
    "revision": "fc5afed81a5d1b305881045ecdef84fb"
  },
  {
    "url": "assets/js/93.16c5da4d.js",
    "revision": "294a1c4c59978c352c57489255a45bb8"
  },
  {
    "url": "assets/js/94.fe2dabb0.js",
    "revision": "50b730ffc9757193bd0f0ff20688f7c2"
  },
  {
    "url": "assets/js/95.e2e46351.js",
    "revision": "be2d6b088429f32457fd756dfe0b43d1"
  },
  {
    "url": "assets/js/96.d4dae675.js",
    "revision": "672a3c6ebf5d8d2e738850c09f3818ed"
  },
  {
    "url": "assets/js/97.e5ac7040.js",
    "revision": "dfd026990c0a7a0c33d87b365c8b422d"
  },
  {
    "url": "assets/js/98.96b86057.js",
    "revision": "a0d28dd2d3784555074ae5b762271314"
  },
  {
    "url": "assets/js/99.d10e097a.js",
    "revision": "f6160f61cbaf785e2fc28a0dd405494f"
  },
  {
    "url": "assets/js/app.863aef42.js",
    "revision": "290ef232e2d62793eeb63355b3745656"
  },
  {
    "url": "customize/index.html",
    "revision": "554c76f51a12ebd98c07d0ef7bfe2ad8"
  },
  {
    "url": "customize/Model-Creation.html",
    "revision": "91ebc6d7725ae832d911ee9f5e54380d"
  },
  {
    "url": "customize/Model-Customization.html",
    "revision": "4809e401dc9bcfb7daf60e38a0a133a2"
  },
  {
    "url": "develop/APE.html",
    "revision": "0e322579e0ad5e2ff8f3ff8eab43f2ca"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Bold-webfont.eot",
    "revision": "1d9c7945c7bc7dd0909105119bfbc191"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Bold-webfont.svg",
    "revision": "93349923b5274a36ac93cb3168d09123"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Bold-webfont.woff",
    "revision": "2e90d5152ce92858b62ba053c7b9d2cb"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-BoldItalic-webfont.eot",
    "revision": "6218c213bb8cf22b25710da6f3a90e48"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-BoldItalic-webfont.svg",
    "revision": "2b4eeeaef53b3496a5cdf82803666ed7"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-BoldItalic-webfont.woff",
    "revision": "7657144ec477cd61ac4a5d1af3fa2d28"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Italic-webfont.eot",
    "revision": "43d5342998f3607bd61a8239e98b1160"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Italic-webfont.svg",
    "revision": "5b774c25787e0a52c013463c9e3c4219"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Italic-webfont.woff",
    "revision": "f42641eed834f7b97a9499362c6c8855"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Light-webfont.eot",
    "revision": "09e00aa7622ece30a0f1e06b55f66c2a"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Light-webfont.svg",
    "revision": "8f04ed9aeb2185499068d84842b95aa1"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Light-webfont.woff",
    "revision": "45b47f3e9c7d74b80f5c6e0a3c513b23"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-LightItalic-webfont.eot",
    "revision": "550b5fda4a27cfedb7131b1a6e85e748"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-LightItalic-webfont.svg",
    "revision": "fd6dd5fa10c5a74f0a767eeb695342f1"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-LightItalic-webfont.woff",
    "revision": "b553da506077488bc65289e10841d527"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Regular-webfont.eot",
    "revision": "c4d82460ef260eb1589e73528cbfb257"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Regular-webfont.svg",
    "revision": "8185eb3059c46e4169ce107dfcf85950"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/fonts/OpenSans-Regular-webfont.woff",
    "revision": "79515ad0788973c533405f7012dfeccd"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/global.html",
    "revision": "59545f80a76897d8d1b2d145448bd161"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/index.html",
    "revision": "7389b96303b81c46d0a922a61b751881"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/modelManipulation.js.html",
    "revision": "ffa97884a35700030d704ad64628b604"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/scripts/linenumber.js",
    "revision": "8520038fe7381ba8119956a342d21580"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/scripts/prettify/lang-css.js",
    "revision": "914365fa44cd3c094afc7c0de229e29e"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/scripts/prettify/prettify.js",
    "revision": "709bfcc456c694bfe8ee86d184a1c360"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/styles/jsdoc-default.css",
    "revision": "bb94fc7c4b2d6a82b140f8d13088bcf1"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/styles/prettify-jsdoc.css",
    "revision": "afd865ae34729b84684bec7c142552b1"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/styles/prettify-tomorrow.css",
    "revision": "3559834dc32d2cad6adeb2d2fed40e18"
  },
  {
    "url": "develop/APIs/js-modelManipulation_webAppUtils/webAppUtils.js.html",
    "revision": "b647ce5e805a2b0520a160effa5c3967"
  },
  {
    "url": "develop/ARE API.html",
    "revision": "3d5f2a366c850e944f260d188a2c5285"
  },
  {
    "url": "develop/ARE-HW-Interfacing-CIM.html",
    "revision": "03d20bcd0e5d121cfab2559097dde98c"
  },
  {
    "url": "develop/ARE-Keyboard-Mouse-Services.html",
    "revision": "62208bfbd77620136f980f2227e06566"
  },
  {
    "url": "develop/ARE-Webserver.html",
    "revision": "ce4d1181c857fa42d37fb35eff2a9406"
  },
  {
    "url": "develop/ARE.html",
    "revision": "ba7dab5dbce04e29ea6b9a04497c8701"
  },
  {
    "url": "develop/asterics-wiki/api/AsTeRICS Websocket.html",
    "revision": "25bbbeb497b315ac223111fbe226160d"
  },
  {
    "url": "develop/asterics-wiki/api/Resource Handling.html",
    "revision": "5395a4ea878ab49bb54cf9441eb95c19"
  },
  {
    "url": "develop/asterics-wiki/api/REST-API.html",
    "revision": "10f5a1fc337b0c1f5ba76544838d9081"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Solutions.html",
    "revision": "e4e0061dec3475a9d0dfd44004ea9da2"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Webserver Document Root.html",
    "revision": "3ccbcfdb8ad16f2c6937483aabdb556c"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/JavaCV.html",
    "revision": "5686d819d6517465181a890ba655e95a"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/Unit Tests.html",
    "revision": "c61a35f71182b43751052e0ca267d562"
  },
  {
    "url": "develop/asterics-wiki/components/AsTeRICS Plugins.html",
    "revision": "e4f611e944ddab7297b34b4891c049e3"
  },
  {
    "url": "develop/AT_solution_development.html",
    "revision": "9e15ba808653181943788b0a82a9f694"
  },
  {
    "url": "develop/AT-solution-demos.html",
    "revision": "883c6d970bebca780bc5a2ed517408a3"
  },
  {
    "url": "develop/Coding-Guidelines.html",
    "revision": "6adc6cead225f4bf13e73c810984825e"
  },
  {
    "url": "develop/demos/clientExample/are_repository.html",
    "revision": "a9ebc70e9285c419e8f72e9cd7bd2b05"
  },
  {
    "url": "develop/demos/clientExample/are_runtime.html",
    "revision": "60878211f6f344bf73d0aa0b79093caf"
  },
  {
    "url": "develop/demos/clientExample/client_template.html",
    "revision": "f526462b7f37196e869badfb6508fe3c"
  },
  {
    "url": "develop/demos/clientExample/client.html",
    "revision": "32bb5eca516788fd1701893890de17fa"
  },
  {
    "url": "develop/demos/clientExample/img/logo.png",
    "revision": "326ac66ffbe44d9c22e0e55471bc2c1d"
  },
  {
    "url": "develop/demos/clientExample/javascript/areCommunicator.js",
    "revision": "a3ccb5bdfd6c5c1736f9e3fe0084a14b"
  },
  {
    "url": "develop/demos/clientExample/javascript/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "develop/demos/clientExample/javascript/JSmap.js",
    "revision": "272858dc7166fa8dad29e55323cbb540"
  },
  {
    "url": "develop/demos/clientExample/runtime_model_channels.html",
    "revision": "4509cca439c8687f5b17faec11fd6d23"
  },
  {
    "url": "develop/demos/clientExample/runtime_model_components.html",
    "revision": "fcaa1448571c7a5a570cf5eed27229e1"
  },
  {
    "url": "develop/demos/clientExample/runtime_model_deployment.html",
    "revision": "841c953810ce69da5624465fdf554c07"
  },
  {
    "url": "develop/demos/clientExample/runtime_model_state.html",
    "revision": "5b955b21b11e9a24623156902ddf0d88"
  },
  {
    "url": "develop/demos/clientExample/sse.html",
    "revision": "7c0aae2cf51560631c56a2cead31913c"
  },
  {
    "url": "develop/demos/clientExample/style.css",
    "revision": "dfe2ec79fcc44ffa6c0e8f0f1a07e0a7"
  },
  {
    "url": "develop/Development-Environment.html",
    "revision": "6f310b0b7f22d278da32a151b1b8ca4b"
  },
  {
    "url": "develop/index.html",
    "revision": "6068498fee9ee07fa1b3a30e45e6b48c"
  },
  {
    "url": "develop/Plugin-Advanced.html",
    "revision": "81202859be78c4c7176973c557761bd2"
  },
  {
    "url": "develop/Plugin-Introduction.html",
    "revision": "989d4926d2cfc3ecec6e58d77516db0c"
  },
  {
    "url": "develop/Plugin-Tutorial.html",
    "revision": "4e2bc53783c3cd59a4d6e7ae38dd50b2"
  },
  {
    "url": "develop/REST-API-java-client.html",
    "revision": "72f358cf2cbe547050f1e2fb5b986793"
  },
  {
    "url": "develop/REST-API-js-areCommunicator.html",
    "revision": "f14df872a3387c2ceaffc627470028fb"
  },
  {
    "url": "develop/REST-API-js-wrapper-ext.html",
    "revision": "cd6f00fe7824ee004b84af30748ab089"
  },
  {
    "url": "develop/REST-API.html",
    "revision": "fa0ab014ce5cd2ac6d7d55a502ea12e5"
  },
  {
    "url": "develop/REST-demos.html",
    "revision": "940a30c3ad841837aa0b181077c8c4d8"
  },
  {
    "url": "develop/Unit-Testing.html",
    "revision": "287468b4dd00f8d70f242db888765a67"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "4528393e9a051ed624640c388f1866ec"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "90bd54138337b2d9df98e0401eb972fb"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "84120e171cb74d6a1f5f1159be86c017"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "59460932030f7828239f7978b9b1ef28"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "4a5ed952ac4ddddad230a64c74403342"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "4ac0cacfbacc3551924fa1130387e831"
  },
  {
    "url": "favicon/mstile-310x150.png",
    "revision": "e4fc0effc14e0f238d0437b6b67cae8e"
  },
  {
    "url": "favicon/mstile-310x310.png",
    "revision": "6b1e50120b05d1823f91c46082217ac5"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "daaa236f74cd16078f4038881b4699b4"
  },
  {
    "url": "get-involved/About-us.html",
    "revision": "0bf5fdc18d3cd772fafc78acef70d981"
  },
  {
    "url": "get-involved/Contact.html",
    "revision": "f8331c0c31411c674ceb34890c4fed2c"
  },
  {
    "url": "get-involved/Contribute.html",
    "revision": "d45a8e0678b5f5df5e3a4bfc84aefe2f"
  },
  {
    "url": "get-involved/index.html",
    "revision": "24959edd8fdeee8942636e11d83afd60"
  },
  {
    "url": "get-started/Demos.html",
    "revision": "75f64dda17703e9348cbcb030b5482b9"
  },
  {
    "url": "get-started/index.html",
    "revision": "9a46b8380f2510a3be23ec27c864ce31"
  },
  {
    "url": "get-started/Installation.html",
    "revision": "59eba1ee6d4457726d3ec2fbf1cf1dd9"
  },
  {
    "url": "get-started/Overview.html",
    "revision": "344cd299deddc47605baffb97ef81a27"
  },
  {
    "url": "img/AsTeRICS-Ergo_Grid_en-1-768x592.jpg",
    "revision": "3c39089daa1ae48dbc97ac15ee55ea28"
  },
  {
    "url": "img/asterics-logo.svg",
    "revision": "6199997b5a415764b65b72421d417256"
  },
  {
    "url": "img/close the door_1.png",
    "revision": "0f82809d50fc7a48e8d078497997ef19"
  },
  {
    "url": "img/ecg.png",
    "revision": "8d357de8e8febef976c9725ec877e868"
  },
  {
    "url": "img/ecgl.svg",
    "revision": "1ccf4e273b7fe89dc360e7d38a81c985"
  },
  {
    "url": "img/environmental control.png",
    "revision": "bb1d5b77a576e58dce92fa7330a941e8"
  },
  {
    "url": "img/I wheelchairs.png",
    "revision": "c25e5caed8357f8529e367cfe276955a"
  },
  {
    "url": "img/keyboard press key.png",
    "revision": "32a1ab9f8dcb4a56011f088b2f4e6660"
  },
  {
    "url": "img/ki-i_logo.png",
    "revision": "aa4cada75fe016307503203af5e6ccbf"
  },
  {
    "url": "img/leave the door open_1.png",
    "revision": "574134e463763e284e08b320cc785c01"
  },
  {
    "url": "img/light on.png",
    "revision": "c18baaa154f3daaf7ff4e1abe71b7eac"
  },
  {
    "url": "img/loudspeaker music_2.png",
    "revision": "95027e7b022dc3b297b48c964ea89be9"
  },
  {
    "url": "img/ma23_logo.jpg",
    "revision": "f6728e0ed9bdaccc58e19c83b9bb7a77"
  },
  {
    "url": "img/stock-photo--d-illustration-of-musical-notes-and-musical-signs-of-abstract-music-sheet-songs-and-melody-concept-761313844.jpg",
    "revision": "48831e5a544a4b39dcbfb682254f821a"
  },
  {
    "url": "img/stock-photo-biometric-verification-woman-face-recognition-security-613853963.jpg",
    "revision": "a2cc0415da9cd4f29c04787f936aaf68"
  },
  {
    "url": "img/stock-photo-eye-monitoring-virtual-reality-700122865.jpg",
    "revision": "9787649d17be7df87e5d522fcd54bc26"
  },
  {
    "url": "img/stock-photo-hand-holding-white-mobile-smart-phone-with-smart-home-application-on-the-screen-over-blurred-house-304964420.jpg",
    "revision": "5669683be98d6e063cd1dcecc3bf23d1"
  },
  {
    "url": "img/studyAThome_noir.svg",
    "revision": "77ed6032d77908816c0eca692b3e2cf5"
  },
  {
    "url": "img/torades_logo_mini-300x120.png",
    "revision": "23f4d33fed25123e51903cd5f2f071e7"
  },
  {
    "url": "img/uas-technikum-wien-logo-300x160.png",
    "revision": "03d71d5fa3b0c8617137c5b9118ab050"
  },
  {
    "url": "img/XFaceTrackerMouse(WLM).png",
    "revision": "fb9a0aeea6a396afeadba040020d51b9"
  },
  {
    "url": "index.html",
    "revision": "c03496c336525af9e1b5a6fc6fa65d23"
  },
  {
    "url": "manuals/ACS/ACS_Basic_Functions.html",
    "revision": "88db5a9bd4d7a79335fd8be03dfd1093"
  },
  {
    "url": "manuals/ACS/Actuators.html",
    "revision": "cfaa30010a7652272d52e7201d2225f7"
  },
  {
    "url": "manuals/ACS/Channels.html",
    "revision": "aa0cc87bb66aaa34f8c9348542f40242"
  },
  {
    "url": "manuals/ACS/Colours_settings.html",
    "revision": "0e466a78273c18321e53efe014a6b643"
  },
  {
    "url": "manuals/ACS/Component_Collection_Manager.html",
    "revision": "abb058aa9d065a8a3e70ab23d9d78dc2"
  },
  {
    "url": "manuals/ACS/Component_Context_Menu.html",
    "revision": "7e263834ba3a79f473ae898e5cdb23f8"
  },
  {
    "url": "manuals/ACS/Connected.html",
    "revision": "50fa0b80527582137103e24909585087"
  },
  {
    "url": "manuals/ACS/Control_the_ARE.html",
    "revision": "7dd1ad3ed35d6e24220f7e801275bb18"
  },
  {
    "url": "manuals/ACS/Create_and_Edit_a_Model.html",
    "revision": "7a643b0b2463258579e0d5554140b73c"
  },
  {
    "url": "manuals/ACS/Dialogs_settings.html",
    "revision": "c905855afba0baf9f3c2d9cc4d321d50"
  },
  {
    "url": "manuals/ACS/Disconnected.html",
    "revision": "5f8f965570a4567df1233d6712ab6205"
  },
  {
    "url": "manuals/ACS/Events.html",
    "revision": "af49233a23647950c8bcb3d74e04ef4d"
  },
  {
    "url": "manuals/ACS/External_Tools_Options.html",
    "revision": "c950770f9738fdef41bdc4a7614945c4"
  },
  {
    "url": "manuals/ACS/External_Tools.html",
    "revision": "cf74a1df2297bb8d814f2ee674cd3a37"
  },
  {
    "url": "manuals/ACS/General_settings.html",
    "revision": "f999d7c013a8418c0792a901fa69b9c0"
  },
  {
    "url": "manuals/ACS/GUI_Designer.html",
    "revision": "3e192862038cf7190dfb49df5f537dd6"
  },
  {
    "url": "manuals/ACS/intro.html",
    "revision": "5c13148f7ffa0e92fd169b3ec7f8db6d"
  },
  {
    "url": "manuals/ACS/Keyboard_control.html",
    "revision": "cea3d6453f1abdc8f9c59a75752d6ef0"
  },
  {
    "url": "manuals/ACS/Load_and_Save_Models.html",
    "revision": "8f55ea1fdff78152ccbe34f30983c4d3"
  },
  {
    "url": "manuals/ACS/Miscellaneous.html",
    "revision": "528ca27cee6b3db8b1212b503d032ebc"
  },
  {
    "url": "manuals/ACS/Modes.html",
    "revision": "2f6c215ae3154bb351c49e6f205bde0f"
  },
  {
    "url": "manuals/ACS/Options.html",
    "revision": "80205686adccddec2e1366160d908457"
  },
  {
    "url": "manuals/ACS/Pause.html",
    "revision": "2441a582488b12e0c1c78949733aa4c0"
  },
  {
    "url": "manuals/ACS/Print.html",
    "revision": "ecdd3291b0a9c0a613abf0fd319402cc"
  },
  {
    "url": "manuals/ACS/Processors.html",
    "revision": "869910e3b7dae1a4f2807987d848f093"
  },
  {
    "url": "manuals/ACS/Running.html",
    "revision": "11fd1db6f6c84cb293bcb388a40179a6"
  },
  {
    "url": "manuals/ACS/Sensors.html",
    "revision": "7dd65dfddf31865c1794ae95b1f04c98"
  },
  {
    "url": "manuals/ACS/Setting_the_Properties.html",
    "revision": "5bc5c7bed804c20fec92d7dad3d1817a"
  },
  {
    "url": "manuals/ACS/Status_Reporting_and_Error_Logging.html",
    "revision": "79600373a60aff7cb9ac82d19b23c71c"
  },
  {
    "url": "manuals/ACS/Synchronized.html",
    "revision": "ac9f98e27e5d08f919fb5e998d589df3"
  },
  {
    "url": "manuals/ACS/The_Edit_Tab.html",
    "revision": "3980b7bda37efb2f1291146f45f8a7da"
  },
  {
    "url": "manuals/ACS/Tooltips.html",
    "revision": "2d4a95f3ab1a2c0feeebf5196138aaf6"
  },
  {
    "url": "manuals/ARE/ARE_Introduction.html",
    "revision": "deafb76d39b1cb44735cc8fa6a37344e"
  },
  {
    "url": "manuals/index.html",
    "revision": "104a6f7fcc988074be49c25bb0cb5842"
  },
  {
    "url": "manuals/WebACS/ACS_Basic_Functions.html",
    "revision": "54b0db91dc3412ae61a36247838cec2c"
  },
  {
    "url": "manuals/WebACS/AREStatus.html",
    "revision": "516aad4515067f95f087edf1495c7e65"
  },
  {
    "url": "manuals/WebACS/Channels.html",
    "revision": "68bf5c35976a8a2ced1b253fcefe1217"
  },
  {
    "url": "manuals/WebACS/Control_the_ARE.html",
    "revision": "13d04c9bcb8e27e1d3843f29e8f2068f"
  },
  {
    "url": "manuals/WebACS/Create_and_Edit_a_Model.html",
    "revision": "12695ee78cc7ae851e85b5253491a6c6"
  },
  {
    "url": "manuals/WebACS/Events.html",
    "revision": "313c2bcacfef300ef0eed8099681c7a1"
  },
  {
    "url": "manuals/WebACS/GUI_Designer.html",
    "revision": "d211ec76bf1bd621ab3fa72a587c1b43"
  },
  {
    "url": "manuals/WebACS/Keyboard_control.html",
    "revision": "70162bdf57f3f04ade68847ce3d6459d"
  },
  {
    "url": "manuals/WebACS/List_View.html",
    "revision": "256492add88df3ef1eb7ad820f9ea4b2"
  },
  {
    "url": "manuals/WebACS/Miscellaneous.html",
    "revision": "efd3791ddc648c35965bf06abc13544a"
  },
  {
    "url": "manuals/WebACS/Open_and_Save_Models.html",
    "revision": "bb213a38e8e122a52323ddba658faf70"
  },
  {
    "url": "manuals/WebACS/Setting_the_Properties.html",
    "revision": "4e22818cc6144d0ebd83b09d420b1434"
  },
  {
    "url": "manuals/WebACS/The_Edit_Tab.html",
    "revision": "a56135ed473e5f548e79a26dfe265630"
  },
  {
    "url": "plugins/actuators/AnalogOut.html",
    "revision": "b9abeb6d9295f87c667aac5fe82df69a"
  },
  {
    "url": "plugins/actuators/Android_connection.html",
    "revision": "cdeff01efb17aed053327779dfa1098e"
  },
  {
    "url": "plugins/actuators/AndroidPhoneControl.html",
    "revision": "031b59fe5ab4b9235540fdcba0e1ec8b"
  },
  {
    "url": "plugins/actuators/AngularCursorControl.html",
    "revision": "1cf6f857bef4d333cf872137bf12285e"
  },
  {
    "url": "plugins/actuators/ApplicationLauncher.html",
    "revision": "c0c153030cc45d9d83a70abf9fd5b324"
  },
  {
    "url": "plugins/actuators/AREWindow.html",
    "revision": "7ac111acc3da12ac5e19af6a1f53141b"
  },
  {
    "url": "plugins/actuators/BarDisplay.html",
    "revision": "e5492d7bb62f490040d53ae81a8ea449"
  },
  {
    "url": "plugins/actuators/CrosshairCursorControl.html",
    "revision": "2cd28c4640b6b19270df479ad38b4fb6"
  },
  {
    "url": "plugins/actuators/DialogBox.html",
    "revision": "45ca35c1938e205ea0d6e5712bbe92c3"
  },
  {
    "url": "plugins/actuators/DigitalOut.html",
    "revision": "978107e0442cb7c7e83518baf7f26bc2"
  },
  {
    "url": "plugins/actuators/DotMeter.html",
    "revision": "062bc1ec972085d4bcf51dfee7f3f859"
  },
  {
    "url": "plugins/actuators/EasyHomeControl.html",
    "revision": "692a720e0af026d73167766699a2fe2e"
  },
  {
    "url": "plugins/actuators/EmulateFaultyPlugin.html",
    "revision": "6c0dc08abd331db67536b7352a1da1ad"
  },
  {
    "url": "plugins/actuators/EnobioDisplay.html",
    "revision": "5d2d26ad06f3ffc7393a11cd028d4cbe"
  },
  {
    "url": "plugins/actuators/Enocean.html",
    "revision": "0038eb591a73d5720900f2ce4a1df1a9"
  },
  {
    "url": "plugins/actuators/EventVisualizer.html",
    "revision": "a35b2b7c8d532871c53f1ec36865454d"
  },
  {
    "url": "plugins/actuators/FileWriter.html",
    "revision": "78ece438bfc9964925ced6ff13cb0391"
  },
  {
    "url": "plugins/actuators/FlickeringLightStimulator.html",
    "revision": "fea73acb14fae47bb9fa173edc795d6c"
  },
  {
    "url": "plugins/actuators/FS20Sender.html",
    "revision": "9725ad43bc2d54508920da5b81e04566"
  },
  {
    "url": "plugins/actuators/GMailShortcuts.html",
    "revision": "58e64ae817cc5fbf0b4f0173d93174c5"
  },
  {
    "url": "plugins/actuators/GSMModem.html",
    "revision": "0739ad4b5d42a0fbe335278d95cabbf8"
  },
  {
    "url": "plugins/actuators/ImageBox.html",
    "revision": "a20a2c21905c0e02cffefbfa0fcbd91b"
  },
  {
    "url": "plugins/actuators/IRTrans.html",
    "revision": "580f3d8910d56b6cf1a2f27d2dddc8c4"
  },
  {
    "url": "plugins/actuators/Keyboard.html",
    "revision": "248614058ca14047f95c65346b867cfc"
  },
  {
    "url": "plugins/actuators/Knx.html",
    "revision": "6614f91f0bd86a4d1704995435159ea2"
  },
  {
    "url": "plugins/actuators/LegacyDigitalOut.html",
    "revision": "d39c77240649cf8b515d54904b5f50cb"
  },
  {
    "url": "plugins/actuators/LineWriter.html",
    "revision": "e470baa0bb4c1c3353449142a3e9f5d8"
  },
  {
    "url": "plugins/actuators/MediaPlayer.html",
    "revision": "4dc985314b6e4db8b29a1a29a29a2c2a"
  },
  {
    "url": "plugins/actuators/MidiPlayer.html",
    "revision": "01c1253d55175899593029f288d135e3"
  },
  {
    "url": "plugins/actuators/ModelSwitcher.html",
    "revision": "742d3242168bea078b3c0dc0e303e7b3"
  },
  {
    "url": "plugins/actuators/Mouse.html",
    "revision": "818f6a8ba214f5f5d57b50f0bd21b6b8"
  },
  {
    "url": "plugins/actuators/MousecursorIcon.html",
    "revision": "c906f333960e54c638d498f6cb4b6d51"
  },
  {
    "url": "plugins/actuators/NetConnection.html",
    "revision": "5bdfbe00e713a726b2a7f59ba563eadc"
  },
  {
    "url": "plugins/actuators/Oscilloscope.html",
    "revision": "aec3a1de3cced4274a490f066cf1fbac"
  },
  {
    "url": "plugins/actuators/OscOutClient.html",
    "revision": "43f67af0212e2a16d029da18434f7ad3"
  },
  {
    "url": "plugins/actuators/PhoneControl.html",
    "revision": "a0e84bc5093fd61727b7d7d567d19c99"
  },
  {
    "url": "plugins/actuators/PicoTTS.html",
    "revision": "7b3cb107f7337b816b405e589f51d012"
  },
  {
    "url": "plugins/actuators/PlatformDigitalOut.html",
    "revision": "4d6c771e38547b2966648ad3e8fd8d1f"
  },
  {
    "url": "plugins/actuators/PlatformLCD.html",
    "revision": "b6294195ed95867d7f39908bb9aca413"
  },
  {
    "url": "plugins/actuators/PongGame.html",
    "revision": "58d17998c44af56c43ac8cb3b1fbac03"
  },
  {
    "url": "plugins/actuators/RemoteJoystick.html",
    "revision": "afc05e6effdf95367f7f857c466bcf24"
  },
  {
    "url": "plugins/actuators/RemoteKeyboard.html",
    "revision": "96b02db981708d6fb4e737e7469047cf"
  },
  {
    "url": "plugins/actuators/RemoteMouse.html",
    "revision": "5289055137dc8bfa9c3963d4b80b03d4"
  },
  {
    "url": "plugins/actuators/RemoteTablet.html",
    "revision": "aae41149ef1f0f675bebf4db2300f509"
  },
  {
    "url": "plugins/actuators/RemoteWindow.html",
    "revision": "4b2bddb8e5ce4408a3bb49e7e50f5d3c"
  },
  {
    "url": "plugins/actuators/SerialSender.html",
    "revision": "34328f766e441c538b1fc52c0988d397"
  },
  {
    "url": "plugins/actuators/SkyWatcherMount.html",
    "revision": "bd5ca81bef4299afb0f9bd5c0d5ffc52"
  },
  {
    "url": "plugins/actuators/SSVEPFileWriter.html",
    "revision": "dd11e62bc21e32b74850f0f8c6d92dee"
  },
  {
    "url": "plugins/actuators/SSVEPStimulator.html",
    "revision": "1307b8b02759ba5a682bbdc8a1c2a14f"
  },
  {
    "url": "plugins/actuators/SyntheticVoice.html",
    "revision": "f20710f3dbe2c9b79cd79e31def4cc0f"
  },
  {
    "url": "plugins/actuators/TeensyRCPrototype.html",
    "revision": "d3e04008655d96a5fabd388483879f8d"
  },
  {
    "url": "plugins/actuators/TextArea.html",
    "revision": "117dc3b4cc6323e79f945efd80de112e"
  },
  {
    "url": "plugins/actuators/TextDisplay.html",
    "revision": "e968b74af30a29376f67d6c8a1fd273c"
  },
  {
    "url": "plugins/actuators/ToneGenerator.html",
    "revision": "48a43dd01f216d3eb7584eee8944eda0"
  },
  {
    "url": "plugins/actuators/Tooltip.html",
    "revision": "200124ab33336733fef4b4dede141bec"
  },
  {
    "url": "plugins/actuators/WavefilePlayer.html",
    "revision": "98843e0deb9d7f80c18758f87affb759"
  },
  {
    "url": "plugins/actuators/WriteCSV.html",
    "revision": "64fd0555e687ffeaa62e4b577d4c4223"
  },
  {
    "url": "plugins/actuators/WriteEDF.html",
    "revision": "a2c2406666408fa80901f50e69360ff2"
  },
  {
    "url": "plugins/Introduction.html",
    "revision": "72634e2c82956cb1c6fc107a1a106a00"
  },
  {
    "url": "plugins/processors/AcousticScanning.html",
    "revision": "6948b385dddbb8f35df70887fdf5ddb5"
  },
  {
    "url": "plugins/processors/AdjustmentCurve.html",
    "revision": "61bec6e30b32c835d839e191c3338fd9"
  },
  {
    "url": "plugins/processors/Amplifier.html",
    "revision": "9b13b0fb80612d1083c398fe92593e36"
  },
  {
    "url": "plugins/processors/Arduino.html",
    "revision": "890f7851d70136b1b8dba305a3665525"
  },
  {
    "url": "plugins/processors/AudioSelector.html",
    "revision": "0524b7b8f42a0038460074e2fae87ee1"
  },
  {
    "url": "plugins/processors/Averager.html",
    "revision": "21272759186c1bacc5f26994967c6c85"
  },
  {
    "url": "plugins/processors/BasicTRalgorithms.html",
    "revision": "6770b9e83e5d89e84d6f92a9ea97ea9c"
  },
  {
    "url": "plugins/processors/Benchmark.html",
    "revision": "e9525cbe9c9f6075dac0c64fe311923b"
  },
  {
    "url": "plugins/processors/BlinkDetection.html",
    "revision": "1a649c47815374580a76d5a1c22e06c5"
  },
  {
    "url": "plugins/processors/BlinkDetector.html",
    "revision": "c45803d02dfd6023ff33f0d8bdc0abd6"
  },
  {
    "url": "plugins/processors/BlinkDetectorTrainer.html",
    "revision": "a3117034f9f995227cdff61dc550498f"
  },
  {
    "url": "plugins/processors/Comparator.html",
    "revision": "8b5da089e1b54611d2e40bb4336fc124"
  },
  {
    "url": "plugins/processors/ComPort.html",
    "revision": "62e9095334abba4fdb69ccec97f91db6"
  },
  {
    "url": "plugins/processors/ComputeBandpower.html",
    "revision": "e0ef18cc413f5608de574370e50302d3"
  },
  {
    "url": "plugins/processors/ConstantDispatcher.html",
    "revision": "bb37bb74c982fbb66bd957fe49b7efd1"
  },
  {
    "url": "plugins/processors/DataType.html",
    "revision": "cec5ecd531fc60fc873b57cd96789416"
  },
  {
    "url": "plugins/processors/Deadzone.html",
    "revision": "456c8f72e5cd016b4ccb85e83d824153"
  },
  {
    "url": "plugins/processors/Decimation.html",
    "revision": "e1e300a870b2e19617e7c4b987326d3a"
  },
  {
    "url": "plugins/processors/Delay.html",
    "revision": "3ce3ace1d9bb947e513e2e5680b06990"
  },
  {
    "url": "plugins/processors/Derivative.html",
    "revision": "ebe7068fb2816294016d082a10429bc9"
  },
  {
    "url": "plugins/processors/Differentiate.html",
    "revision": "f8665a24ce8bba83d1a0eeb1150c66dc"
  },
  {
    "url": "plugins/processors/Dissimilarity.html",
    "revision": "e59b658d396da0e03b0c330fd8afe23b"
  },
  {
    "url": "plugins/processors/DoubleToString.html",
    "revision": "eafe5bb8c8ebabd00200210e2e24f06b"
  },
  {
    "url": "plugins/processors/ECMAScriptInterpreter.html",
    "revision": "1fc5931dcdcf1abebdd0c79fc2aeb2b8"
  },
  {
    "url": "plugins/processors/eg_example.html",
    "revision": "2b221461f036a924e64116f5806f8dec"
  },
  {
    "url": "plugins/processors/EventBlock.html",
    "revision": "a7afee8b48c7dc4129a81cb16482d61c"
  },
  {
    "url": "plugins/processors/EventCascade.html",
    "revision": "3470d3f4461b4358dc983ff7c9affba2"
  },
  {
    "url": "plugins/processors/EventCounter.html",
    "revision": "0df438079ae8075786cd844866a0e318"
  },
  {
    "url": "plugins/processors/EventDelay.html",
    "revision": "a41ba801e63aa7a7e8becb2833c51734"
  },
  {
    "url": "plugins/processors/EventDispatcher.html",
    "revision": "7dd7f90675668201fdd678a4c5773f96"
  },
  {
    "url": "plugins/processors/EventFlipFlop.html",
    "revision": "91ebc7512c3bb57de683a4ac3f0c95e4"
  },
  {
    "url": "plugins/processors/EventRouter.html",
    "revision": "a023d5aa23d3385ee02f1e063b5e0cc6"
  },
  {
    "url": "plugins/processors/EventStateMachine.html",
    "revision": "12bba20911c534c9fded52b7d80ca92a"
  },
  {
    "url": "plugins/processors/FABI.html",
    "revision": "a788a1e4e6b8075526dc38dbd6c830f9"
  },
  {
    "url": "plugins/processors/FabiCronusMax.html",
    "revision": "e9c1659212cb99b56b66108923ea1818"
  },
  {
    "url": "plugins/processors/Filter.html",
    "revision": "24cd6be868e4afc3fe68eda71016fe74"
  },
  {
    "url": "plugins/processors/FS20CommandInterpreter.html",
    "revision": "0c014a66d5c2ba3afeaf99f2c2bb3a64"
  },
  {
    "url": "plugins/processors/HRVAnalysis.html",
    "revision": "e070a1eb96fa52385c5e20e7cd429097"
  },
  {
    "url": "plugins/processors/IIRFilter.html",
    "revision": "4215176fd3d0606dccd6912b3fcb215a"
  },
  {
    "url": "plugins/processors/Integrate.html",
    "revision": "ab50df6a755afc6fc000497abd2e17ec"
  },
  {
    "url": "plugins/processors/IntToString.html",
    "revision": "c39bb0789d1dc20f29eddf8555263c79"
  },
  {
    "url": "plugins/processors/IrMicro.html",
    "revision": "637787c0291a7219c033c6cc66bac969"
  },
  {
    "url": "plugins/processors/MathEvaluator.html",
    "revision": "f5fce567458b8b665cbe44a4c03e83c2"
  },
  {
    "url": "plugins/processors/MinMax.html",
    "revision": "4c54c2b36774f5fe4bd1185c2b7c0a4c"
  },
  {
    "url": "plugins/processors/MotionAnalysis.html",
    "revision": "f11428d2d96495ddabe860fd8c96f357"
  },
  {
    "url": "plugins/processors/MultiSource.html",
    "revision": "2d94fb036efe07999b1c72ebafdcf33b"
  },
  {
    "url": "plugins/processors/MultiSourceString.html",
    "revision": "b32d71e18dc450eb53911879a510f9fe"
  },
  {
    "url": "plugins/processors/NeuralNetworkLoader.html",
    "revision": "e4d96fca69c0da3de9e38e112c7335e0"
  },
  {
    "url": "plugins/processors/NexusConnector.html",
    "revision": "01029f6faba8dd703112ecab48422c67"
  },
  {
    "url": "plugins/processors/OneEventManyActions.html",
    "revision": "79b3bd3b4f6cb60da1db784cf10516e0"
  },
  {
    "url": "plugins/processors/OpenHAB.html",
    "revision": "5d06435d62e9266c60af6f8664ba84dd"
  },
  {
    "url": "plugins/processors/OscGestureFollower.html",
    "revision": "9dde911613782dbdbb0764c36afd08ff"
  },
  {
    "url": "plugins/processors/OskaExternalScanning1D.html",
    "revision": "1d9427dc00ac3240d15414d43d87bdc9"
  },
  {
    "url": "plugins/processors/OskaExternalScanning2D.html",
    "revision": "b99c7272c58565c537bcf7e90482cd99"
  },
  {
    "url": "plugins/processors/OskaInternalScanning.html",
    "revision": "1ad4c5a632dd278abb430b78cb78cbbf"
  },
  {
    "url": "plugins/processors/PathMultiplexer.html",
    "revision": "e8e226dc9650e26145969ee7ef13af06"
  },
  {
    "url": "plugins/processors/Pathselector.html",
    "revision": "5db9b6d1838f51bb30f1dd9bccdeddc0"
  },
  {
    "url": "plugins/processors/PeakDetector.html",
    "revision": "f67765f0d3d6d8654251be70c451e351"
  },
  {
    "url": "plugins/processors/ProtocolSSVEPTrain.html",
    "revision": "f2d0082bea32d45e8e02773bb9b3e6c3"
  },
  {
    "url": "plugins/processors/Quantizer.html",
    "revision": "71cdeb4858ad1e75149e18bde660820b"
  },
  {
    "url": "plugins/processors/RegularExpression.html",
    "revision": "56c2d35a2abaf20397b77ee3f1a29b11"
  },
  {
    "url": "plugins/processors/RelativeMoveSampler.html",
    "revision": "73fbc573b97ddb76dcaeb78a6b08e583"
  },
  {
    "url": "plugins/processors/SampleAndHold.html",
    "revision": "33aa1fd3fb6f334ebad136270b870b5e"
  },
  {
    "url": "plugins/processors/Sampler.html",
    "revision": "998fc5e2e32c720e897d290eca512160"
  },
  {
    "url": "plugins/processors/SerialPort.html",
    "revision": "25c6674d2e564ca2da1fa6588b1316db"
  },
  {
    "url": "plugins/processors/SerialSender.html",
    "revision": "96eb514d9f4d4e82dd03a890056ed82b"
  },
  {
    "url": "plugins/processors/SignalTranslation.html",
    "revision": "b0fc38b63d851ee105c2ae635fc526d1"
  },
  {
    "url": "plugins/processors/SpeechProcessor.html",
    "revision": "0ceedda665252304e63bca52fbabd294"
  },
  {
    "url": "plugins/processors/SSVEPDetect.html",
    "revision": "d1c3544f103aba5441e78e1d2b27c191"
  },
  {
    "url": "plugins/processors/StringAppend.html",
    "revision": "fec9b522bf6920d7e42cfbfaf15a581b"
  },
  {
    "url": "plugins/processors/StringDelay.html",
    "revision": "ab1c902f0337d8547cb55c2c86e34f40"
  },
  {
    "url": "plugins/processors/StringDispatcher.html",
    "revision": "b3715ef4d15da6039322c837dfd69413"
  },
  {
    "url": "plugins/processors/StringExpander.html",
    "revision": "77e03afb19a7c8462af0247cf6dd1a84"
  },
  {
    "url": "plugins/processors/StringFilter.html",
    "revision": "a1a9e40d2d7fedd045ae0f4ca0d5dfe2"
  },
  {
    "url": "plugins/processors/StringFormatter.html",
    "revision": "a8f05164e5f3710f44c1747ce7b5096a"
  },
  {
    "url": "plugins/processors/StringPathMultiplexer.html",
    "revision": "a5b7c37b53e41d86ed67cb9b5071e4f2"
  },
  {
    "url": "plugins/processors/StringPathSelector.html",
    "revision": "768e2c03ffad81e0307372178ceb86e5"
  },
  {
    "url": "plugins/processors/StringSplitter.html",
    "revision": "294c5e0b57b7e7a71e0a628415e10ab8"
  },
  {
    "url": "plugins/processors/StringToDouble.html",
    "revision": "d235b717c16d1321ef7636206f0c557e"
  },
  {
    "url": "plugins/processors/StringToInt.html",
    "revision": "61355ecb2415c2cdbc27ad7f1bf084ef"
  },
  {
    "url": "plugins/processors/TextSender.html",
    "revision": "9fd077f330d16cdf53383611b69f61fd"
  },
  {
    "url": "plugins/processors/Threshold.html",
    "revision": "ead888d2a8f48a96223fd3d08219e322"
  },
  {
    "url": "plugins/processors/UniversalRemoteControl.html",
    "revision": "b4c9fb0a75f9bb3a47d41bf7f7c0a0ae"
  },
  {
    "url": "plugins/processors/WebSocket.html",
    "revision": "27888aa0917211904fb7dc1a0b04976c"
  },
  {
    "url": "plugins/processors/Yaak.html",
    "revision": "3bf19019f76681b32a2c745414144cbe"
  },
  {
    "url": "plugins/sensors/Acceleration.html",
    "revision": "a1d74d3f5ae573ea277e6e8928ad39d2"
  },
  {
    "url": "plugins/sensors/AnalogIn.html",
    "revision": "7e37351ff50ee2b9833f71e7abb5c1ae"
  },
  {
    "url": "plugins/sensors/AutostartEvent.html",
    "revision": "012c8e7f0adb069445247c6217fe1eca"
  },
  {
    "url": "plugins/sensors/ButtonGrid.html",
    "revision": "d3ca6713824357b4ed1ba980feeec6f3"
  },
  {
    "url": "plugins/sensors/CellBoard.html",
    "revision": "dbb0a552f1a181dba9da5f03ac29f3a9"
  },
  {
    "url": "plugins/sensors/DigitalIn.html",
    "revision": "2c5fd358157875949ffe88c27b948461"
  },
  {
    "url": "plugins/sensors/EditBox.html",
    "revision": "4dd585db61a634b1b37d171bbe2be82f"
  },
  {
    "url": "plugins/sensors/Enobio.html",
    "revision": "0b8ce9515c50d0fe6b451de30566ff71"
  },
  {
    "url": "plugins/sensors/EOG.html",
    "revision": "32a91cae1a9f1c2621b766554383c99b"
  },
  {
    "url": "plugins/sensors/EShoe.html",
    "revision": "02c0d0e24c4c43453647596ee514f446"
  },
  {
    "url": "plugins/sensors/EventGenerator.html",
    "revision": "c7301d2d403af9758f6b1a648a8b7c36"
  },
  {
    "url": "plugins/sensors/Eyetracker.html",
    "revision": "2b4ca809976a7089f8e40d68e8811abb"
  },
  {
    "url": "plugins/sensors/EyeTribe.html",
    "revision": "eadc4e789656d558b992b8f8abc8e4dc"
  },
  {
    "url": "plugins/sensors/EyeX.html",
    "revision": "f834d57cbe99537ed96668266856b2cf"
  },
  {
    "url": "plugins/sensors/FacetrackerCLM.html",
    "revision": "510253fcfab6a0853596af51b66c7ee5"
  },
  {
    "url": "plugins/sensors/FacetrackerLK.html",
    "revision": "7f9c29923cd2d36af917520d6b31786a"
  },
  {
    "url": "plugins/sensors/FolderBrowser.html",
    "revision": "316aab64c208ce20e5f96fe9829e729a"
  },
  {
    "url": "plugins/sensors/FS20Receiver.html",
    "revision": "fe029888b0ee6691699d2b69d53195e7"
  },
  {
    "url": "plugins/sensors/HeadPositionHC.html",
    "revision": "4d01548c37a28fc01049b4a456c1405e"
  },
  {
    "url": "plugins/sensors/HoverPanel.html",
    "revision": "e6c033670fa5992f861918924ba85704"
  },
  {
    "url": "plugins/sensors/IntelRealSense.html",
    "revision": "49cd827148c4b6ba6cd6be7c1d0d8da5"
  },
  {
    "url": "plugins/sensors/JoystickCapture.html",
    "revision": "41c3fa93f236105220b531886fdde2f8"
  },
  {
    "url": "plugins/sensors/KeyboardCapture.html",
    "revision": "663bf82c123862e76554161c248e2fa8"
  },
  {
    "url": "plugins/sensors/KeyCapture.html",
    "revision": "da863a9e3c3679f4d50b268ec1119217"
  },
  {
    "url": "plugins/sensors/Kinect.html",
    "revision": "32d3389097ac61b453623b3be44a52e4"
  },
  {
    "url": "plugins/sensors/KinectJ4K.html",
    "revision": "38d9bd31ace4fe680240201a9ee65043"
  },
  {
    "url": "plugins/sensors/LegacyAnalogIn.html",
    "revision": "70d4a35e05aafd2e614f97fc3bd1f0de"
  },
  {
    "url": "plugins/sensors/LegacyDigitalIn.html",
    "revision": "3dafabd3f91bd8ea02bfa489d5397b21"
  },
  {
    "url": "plugins/sensors/Lightscore.html",
    "revision": "bba358092bc280b838c0ba3d06cb37dc"
  },
  {
    "url": "plugins/sensors/LineReader.html",
    "revision": "4c853f387b0cc621ffc631460d49b8be"
  },
  {
    "url": "plugins/sensors/Lipmouse.html",
    "revision": "9c98ec0e7a511c7f9b7bf40b3f307c86"
  },
  {
    "url": "plugins/sensors/LipmouseIR.html",
    "revision": "1c7eeb344cdc3e31fb166f400157b36d"
  },
  {
    "url": "plugins/sensors/MicGPI.html",
    "revision": "72fa563736edb233f70db2ffee49aa23"
  },
  {
    "url": "plugins/sensors/MouseCapture.html",
    "revision": "35e38d0f4433f3d08afea7da2adb306e"
  },
  {
    "url": "plugins/sensors/OpenBCI.html",
    "revision": "b104f74bfbff576480282a973d481ee4"
  },
  {
    "url": "plugins/sensors/OpenVibe.html",
    "revision": "f33e1f495bc2481463d8d967db849f8d"
  },
  {
    "url": "plugins/sensors/OscServer.html",
    "revision": "43cfe68fb8388b3dcebebbbed5ec9614"
  },
  {
    "url": "plugins/sensors/P2_Parser.html",
    "revision": "bc4dcc8a547d48ec9cb7acd4791980a5"
  },
  {
    "url": "plugins/sensors/PlatformAnalogIn.html",
    "revision": "770a378690d735d2b07c4ccb44f24305"
  },
  {
    "url": "plugins/sensors/PlatformDigitalIn.html",
    "revision": "9f0fcf4cb4a64835cde6f2a420c921b0"
  },
  {
    "url": "plugins/sensors/Proximity.html",
    "revision": "5dee63c62e269025db15f6d31a72b3d6"
  },
  {
    "url": "plugins/sensors/RandomNumber.html",
    "revision": "f389f806c079e5c8676cea2ac52acbe7"
  },
  {
    "url": "plugins/sensors/RazorIMU.html",
    "revision": "469d6c3b41564a0cbcbeba8d8d17c52e"
  },
  {
    "url": "plugins/sensors/ReadCSV.html",
    "revision": "98a66a21df7b44dfaaf46bda09c1170b"
  },
  {
    "url": "plugins/sensors/ReadEDF.html",
    "revision": "a0f4c7424f8fc715c8595479c52fe5e4"
  },
  {
    "url": "plugins/sensors/RFIDReader.html",
    "revision": "3f3e896373fca7b5b654351ab9750809"
  },
  {
    "url": "plugins/sensors/Sensorboard.html",
    "revision": "48e96fcc72fc45476a5601bbd03f90b1"
  },
  {
    "url": "plugins/sensors/SignalGenerator.html",
    "revision": "15db24f4d1fe38da651826f592fc1366"
  },
  {
    "url": "plugins/sensors/SignalShaper.html",
    "revision": "4f732c3de7b76b8832c250e7fcef6154"
  },
  {
    "url": "plugins/sensors/Slider.html",
    "revision": "027367684079f155f0d7c5a4ca8e4024"
  },
  {
    "url": "plugins/sensors/SpaceNavigator3DMouse.html",
    "revision": "e149a179f9efd2e2617a77496feea001"
  },
  {
    "url": "plugins/sensors/TextfieldReader.html",
    "revision": "9600b1642735e2939d14c713b4d359ef"
  },
  {
    "url": "plugins/sensors/Timer.html",
    "revision": "94e6e7928771dc6782645cf6797b1303"
  },
  {
    "url": "plugins/sensors/Tobii4CHeadTracker.html",
    "revision": "33bfa3a6af65ec764b004c345c63c4ba"
  },
  {
    "url": "plugins/sensors/TobiTic.html",
    "revision": "0d0258fe69b27e65de33bed72b9dfb58"
  },
  {
    "url": "plugins/sensors/TuioReactivision.html",
    "revision": "9c903b14227c9b8199f3a0e450bac373"
  },
  {
    "url": "plugins/sensors/WiiMote.html",
    "revision": "7b215ba59d181777f9502074e5558820"
  },
  {
    "url": "plugins/sensors/XFacetrackerLK.html",
    "revision": "365a900f389b32f4b61300219320da28"
  },
  {
    "url": "solutions/AAC-Basic.html",
    "revision": "2e0e958a4be3e375b1f1a8ab5241dc9a"
  },
  {
    "url": "solutions/Camera-Mouse.html",
    "revision": "75c39c37bf4100841f2c6e31a29600d1"
  },
  {
    "url": "solutions/Eye-Tracking-Mouse.html",
    "revision": "ab44bb51d1f6198794a60c36e02abb28"
  },
  {
    "url": "solutions/Head-Sound.html",
    "revision": "40e64cbaf9de969e9ff2a37c5db8ff66"
  },
  {
    "url": "solutions/index.html",
    "revision": "4df2299fbcd415b2d0780172c9d2d9c1"
  },
  {
    "url": "solutions/Switch-Mouse.html",
    "revision": "288b0984fa390a3a1e3eccf7931fa33d"
  },
  {
    "url": "webapps/AT-solution-IDE.html",
    "revision": "0876d35f4424557af3943e7c363d0ce4"
  },
  {
    "url": "webapps/Plugin-IDE.html",
    "revision": "31faea351f934a74b26a3f37aeee709a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
