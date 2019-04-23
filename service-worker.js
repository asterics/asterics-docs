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
    "revision": "dcbae69f5fbc3ec026d75e76223bafb1"
  },
  {
    "url": "assets/css/0.styles.d5a74f52.css",
    "revision": "beac574a62589bc1380c316ea4c0225d"
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
    "url": "assets/img/adjustmentcurve.de1a0708.jpg",
    "revision": "de1a0708f98757f173ad32d592c9dc07"
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
    "url": "assets/img/AsTeRICS-Ergo_Grid_en-1-768x592.jpg",
    "revision": "3c39089daa1ae48dbc97ac15ee55ea28"
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
    "url": "assets/img/averager.e86f771d.jpg",
    "revision": "e86f771dd1b2702c5233ec8ac2d07cbd"
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
    "url": "assets/img/camera-mouse-tracked-face.5e64e466.png",
    "revision": "5e64e4665821406c59fcf982c586ca34"
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
    "url": "assets/img/comport.81304d08.jpg",
    "revision": "81304d08f17822d1bfaadbeacfd1fa64"
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
    "url": "assets/img/eye-tracking-shutterstock_195898592.jpg",
    "revision": "cad0407ff5b5110376c890c6751c33e4"
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
    "url": "assets/img/face-shutterstock_717365779.jpg",
    "revision": "e4a318e61aa871e6104b27e5b88847a7"
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
    "url": "assets/img/harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
  },
  {
    "url": "assets/img/headpositionhc.38072afc.png",
    "revision": "38072afc6cf36e14c23e8e6968aa75e6"
  },
  {
    "url": "assets/img/headsound.9bcac6dc.png",
    "revision": "9bcac6dc9857929b677ffb2c2753de1a"
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
    "url": "assets/img/signaltranslation.77320c23.jpg",
    "revision": "77320c23963f2840fe2b0465bb55fcc8"
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
    "url": "assets/img/smart-home-shutterstock_304964420.jpg",
    "revision": "1e268f1afbee80b56527108300780767"
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
    "url": "assets/img/sound-shutterstock_761313844.jpg",
    "revision": "8d10c240a51fbf1f82ea0c44cebb0a9a"
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
    "url": "assets/js/1.8a33b755.js",
    "revision": "f7f1bfbbccee8582b36ead75f828beee"
  },
  {
    "url": "assets/js/10.2978a5bd.js",
    "revision": "15094686ffdcc6a2a140b7a546519e58"
  },
  {
    "url": "assets/js/100.d74ebd1e.js",
    "revision": "40198dd7fe2959dbcb8d1547794ec9fa"
  },
  {
    "url": "assets/js/101.195732b2.js",
    "revision": "39dc275faea474d30961df24c33e8cd9"
  },
  {
    "url": "assets/js/102.e2838fcd.js",
    "revision": "2ba08747ce3c254b444acc6467a98980"
  },
  {
    "url": "assets/js/103.bb0b87a2.js",
    "revision": "79ee73da51ea0436074def2df86a2392"
  },
  {
    "url": "assets/js/104.690e299f.js",
    "revision": "049938b47dd5928c194d13776dce75bd"
  },
  {
    "url": "assets/js/105.bd3e6c19.js",
    "revision": "1aabdc847d06c75464b53bce43ff0ca3"
  },
  {
    "url": "assets/js/106.3f60217a.js",
    "revision": "4eaa42b26f3fd3c72b65e51f4ca21f79"
  },
  {
    "url": "assets/js/107.27c6ea7f.js",
    "revision": "dc9a2c3954db077c7c8e2b0d436d598f"
  },
  {
    "url": "assets/js/108.b4dadb0d.js",
    "revision": "ed99d01568292de6ed0edc185d20645a"
  },
  {
    "url": "assets/js/109.124eb3b8.js",
    "revision": "2d39efa7ad7e2c3b52b6dbc843b07402"
  },
  {
    "url": "assets/js/11.f4e2c08f.js",
    "revision": "381c52d191c598dac86f587032a9e7ad"
  },
  {
    "url": "assets/js/110.eaa747b4.js",
    "revision": "8d727865e8c2a51d483a41126af0c53e"
  },
  {
    "url": "assets/js/111.6e6db7aa.js",
    "revision": "c20fa38125d3fbc8d84a2276154a8182"
  },
  {
    "url": "assets/js/112.d8acc3d3.js",
    "revision": "114ee71db493cb0b89a611664d9e7fa9"
  },
  {
    "url": "assets/js/113.fa452cec.js",
    "revision": "297a55f96615259abc214e48590e1349"
  },
  {
    "url": "assets/js/114.39ba16fe.js",
    "revision": "03809fdbca57c81d84472df0941952fb"
  },
  {
    "url": "assets/js/115.76a089aa.js",
    "revision": "bc16d693dc7ce636d7d78b88b8c5c3e7"
  },
  {
    "url": "assets/js/116.15aad33c.js",
    "revision": "f0d6f27a59f197a4e8423ad6b912fe22"
  },
  {
    "url": "assets/js/117.c1823d52.js",
    "revision": "99873a759176dfd298971f1e296ac220"
  },
  {
    "url": "assets/js/118.2e4ecabf.js",
    "revision": "ea2771cb6fe9c7d4947a49cb358df584"
  },
  {
    "url": "assets/js/119.3d4ef569.js",
    "revision": "add7f406e087d889591782ad3fb11285"
  },
  {
    "url": "assets/js/12.e1c15b04.js",
    "revision": "f53cb10415b17fd599e25f18025c5b19"
  },
  {
    "url": "assets/js/120.dc79eb92.js",
    "revision": "18a6dfd636a5a79c083fe30566263c54"
  },
  {
    "url": "assets/js/121.ecb64352.js",
    "revision": "bafbfa75812421599116cbfa139d78f6"
  },
  {
    "url": "assets/js/122.27b52a50.js",
    "revision": "6dbd8d979985ad0c69888c15da64377d"
  },
  {
    "url": "assets/js/123.5ebf17f2.js",
    "revision": "1ecc724ec20c3b80736004c8d4d5fdb5"
  },
  {
    "url": "assets/js/124.0dcedd3c.js",
    "revision": "dc719ef40ccd7036734158b5399d7c16"
  },
  {
    "url": "assets/js/125.e5061c72.js",
    "revision": "4b14eef4ac98a82238df9dfcaf4fb86a"
  },
  {
    "url": "assets/js/126.0fc25d71.js",
    "revision": "19ccbd9189bdec7a9136b89382137090"
  },
  {
    "url": "assets/js/127.0ffd107e.js",
    "revision": "f2ba3bd594e6a30c8fe4cccd99806bdd"
  },
  {
    "url": "assets/js/128.8f40590e.js",
    "revision": "17496e0265781959c407b2587e90e7ff"
  },
  {
    "url": "assets/js/129.1a5de4c7.js",
    "revision": "19123f7da66463606195a4f8ea7c1129"
  },
  {
    "url": "assets/js/13.c2dc91b0.js",
    "revision": "3ea16cd0faadc4c9a6823ccc3655c7ac"
  },
  {
    "url": "assets/js/130.993a5cd4.js",
    "revision": "90cb00d95d9bf2747c4e0da12fe32d71"
  },
  {
    "url": "assets/js/131.b5d2b8a2.js",
    "revision": "cdce2ee4a31a136cf567406b462589eb"
  },
  {
    "url": "assets/js/132.a5ec755a.js",
    "revision": "7ba7a444081224df5b25d6cd2d48afe0"
  },
  {
    "url": "assets/js/133.eb9975da.js",
    "revision": "43533bae5925fb25dab52b728f2857b8"
  },
  {
    "url": "assets/js/134.be4b37e8.js",
    "revision": "c0b244e7500edc6dad1d8582587c8ae4"
  },
  {
    "url": "assets/js/135.92ac7d80.js",
    "revision": "0a8e62048833a215d607b7d83c5da47a"
  },
  {
    "url": "assets/js/136.6e68a0e5.js",
    "revision": "955a20031a83dadb5e7470c174591029"
  },
  {
    "url": "assets/js/137.245ffa4b.js",
    "revision": "a11e3a90c7366722c628fcf7e0505b11"
  },
  {
    "url": "assets/js/138.240fd467.js",
    "revision": "fab249ba67e6a3f47b66163d28faa927"
  },
  {
    "url": "assets/js/139.082b89ed.js",
    "revision": "e9d68aa369e7073c6311730d844b7e70"
  },
  {
    "url": "assets/js/14.97fb152c.js",
    "revision": "c59a34194977f823a0fb69d3ac3342fb"
  },
  {
    "url": "assets/js/140.7d89aa4c.js",
    "revision": "0b9e053387ceeb53c4f4d4fd824830e7"
  },
  {
    "url": "assets/js/141.9d0865b6.js",
    "revision": "eba182285cdc0b5b65f228c69f0e9927"
  },
  {
    "url": "assets/js/142.d094d0f8.js",
    "revision": "84d53c2a9e57f36970fca88a1c236ee2"
  },
  {
    "url": "assets/js/143.461af350.js",
    "revision": "f31bacac429ab7e1e1131a4354072a26"
  },
  {
    "url": "assets/js/144.64dfd7b3.js",
    "revision": "ed7408250882be6f44a8234ba518e5a2"
  },
  {
    "url": "assets/js/145.8d8500a9.js",
    "revision": "cf9918e27e185a3d7626778453debf0e"
  },
  {
    "url": "assets/js/146.0e620b84.js",
    "revision": "93b5c4305229113cdc6e550031aa57e3"
  },
  {
    "url": "assets/js/147.8a9d31ef.js",
    "revision": "410e1ae5d4bcc55a6b552a7652f08ace"
  },
  {
    "url": "assets/js/148.f20369f8.js",
    "revision": "c3b23a3a1890f10059bf6c0df112603f"
  },
  {
    "url": "assets/js/149.647340d5.js",
    "revision": "5b54f2410d414bb83522feb4d0ecc0fe"
  },
  {
    "url": "assets/js/15.34cc61ed.js",
    "revision": "0362ec030926d9dfa118eb42898d7edf"
  },
  {
    "url": "assets/js/150.3e710122.js",
    "revision": "cb09befc19c1322273bb2c922ec19a98"
  },
  {
    "url": "assets/js/151.bd9fc438.js",
    "revision": "96a5f33fa18bc52c56e06f1d2fa570d7"
  },
  {
    "url": "assets/js/152.73b1311c.js",
    "revision": "ed3f1690bf1008d28eb2fa6d502f6a02"
  },
  {
    "url": "assets/js/153.92234373.js",
    "revision": "25144fded964c215a1d34fefeb755889"
  },
  {
    "url": "assets/js/154.fdfb061c.js",
    "revision": "36c8472b4fda279568a225637f5b677b"
  },
  {
    "url": "assets/js/155.0d3bcab4.js",
    "revision": "2276ec763d53ce45fde297f7f749e6d4"
  },
  {
    "url": "assets/js/156.81cbb105.js",
    "revision": "5cbcb10dc3c1d0a56462734a7f0b4315"
  },
  {
    "url": "assets/js/157.58202452.js",
    "revision": "90b1e3c24bfed8a05926e33493ebe9b1"
  },
  {
    "url": "assets/js/158.8b2e537a.js",
    "revision": "46006ec60462d7980d1845773bf3899c"
  },
  {
    "url": "assets/js/159.290c8c2b.js",
    "revision": "a1015fd176c9fdac41369414461bf920"
  },
  {
    "url": "assets/js/16.2c1305d8.js",
    "revision": "a2eb364d752a1e510621959d9b5d8d90"
  },
  {
    "url": "assets/js/160.a8b8400d.js",
    "revision": "b808934489b7f34dfa06018a1caab087"
  },
  {
    "url": "assets/js/161.ffbc282d.js",
    "revision": "93f48002618d5da4f1b82cb7a26c5c2b"
  },
  {
    "url": "assets/js/162.a07c6f61.js",
    "revision": "cca6eab2980d9d1667c62f2ee9381bfc"
  },
  {
    "url": "assets/js/163.9ed45755.js",
    "revision": "c24663d713022ce78503c0c1783a0d79"
  },
  {
    "url": "assets/js/164.702abcca.js",
    "revision": "390393074ab1db2df13c9ea247671868"
  },
  {
    "url": "assets/js/165.a6396bb8.js",
    "revision": "ed98e5277c163b1bf13fdb3601110149"
  },
  {
    "url": "assets/js/166.92a80e90.js",
    "revision": "1acaf9cd2cd0aa761a0bc64541676617"
  },
  {
    "url": "assets/js/167.f69f8e42.js",
    "revision": "3bfcf03cd7643e415ab38d6aabc84305"
  },
  {
    "url": "assets/js/168.35751ada.js",
    "revision": "3eacf0578e299020e67dbc03776c4438"
  },
  {
    "url": "assets/js/169.5ee67e7b.js",
    "revision": "c87bfc941cc8931d1bb985b810f2bb54"
  },
  {
    "url": "assets/js/17.fbd5cbca.js",
    "revision": "66b522db22df1663ffca17160dec2fea"
  },
  {
    "url": "assets/js/170.33229836.js",
    "revision": "04bad6de318a9b634c5693e7da41568c"
  },
  {
    "url": "assets/js/171.679e550c.js",
    "revision": "ab89cee48886b95a8292401c7205cff9"
  },
  {
    "url": "assets/js/172.f3feeb2c.js",
    "revision": "dd9f7be12b46db9536a7634ec15265e3"
  },
  {
    "url": "assets/js/173.ea30199d.js",
    "revision": "ef901c553d872be192f94966df857982"
  },
  {
    "url": "assets/js/174.9f50440e.js",
    "revision": "706522839e5000b4125321cc8eacbe52"
  },
  {
    "url": "assets/js/175.4e18850b.js",
    "revision": "c125b06a9b0cfdde286a9d8feaed03d8"
  },
  {
    "url": "assets/js/176.7d007d5b.js",
    "revision": "2a011481de40ec8c8fa3b6af2100221e"
  },
  {
    "url": "assets/js/177.f5133cf7.js",
    "revision": "d809a8d05f6f888fdc0deb67309401fa"
  },
  {
    "url": "assets/js/178.12dcde63.js",
    "revision": "44fad79c6fbb196cf3975318a8f9cdae"
  },
  {
    "url": "assets/js/179.95c38f20.js",
    "revision": "816801cdda4fda98754cd8b1bb21f178"
  },
  {
    "url": "assets/js/18.c798e22b.js",
    "revision": "c5d4f3ea3f95fc1286fca0341026f29d"
  },
  {
    "url": "assets/js/180.524e20cb.js",
    "revision": "2bd7d05a40c558514086461e8790d5c8"
  },
  {
    "url": "assets/js/181.f2f0d21d.js",
    "revision": "b133043f40cdd47f4428230b954c53ac"
  },
  {
    "url": "assets/js/182.71f7d9df.js",
    "revision": "361518b73ed18823c526c38129a68ec6"
  },
  {
    "url": "assets/js/183.f7651bce.js",
    "revision": "fb8b98952d2e07cf3ae5aef4509ba0b4"
  },
  {
    "url": "assets/js/184.35712064.js",
    "revision": "63433f2b5ebdd520c6c79b7a62a63079"
  },
  {
    "url": "assets/js/185.92277415.js",
    "revision": "36a21dab18ee13e616f8edcf8f17f284"
  },
  {
    "url": "assets/js/186.c7930e0e.js",
    "revision": "428543d87271501b1564f42d68323589"
  },
  {
    "url": "assets/js/187.b2d9b24c.js",
    "revision": "83c860b03f64e68a936a21074ecdac97"
  },
  {
    "url": "assets/js/188.7b54461b.js",
    "revision": "a3ca5ecf733108e08f563e56ecdec9a6"
  },
  {
    "url": "assets/js/189.e862e18f.js",
    "revision": "619641fe7559f2739360cf0155309dfb"
  },
  {
    "url": "assets/js/19.dab45d20.js",
    "revision": "a72584751e6ca50a5c0507531be10be8"
  },
  {
    "url": "assets/js/190.1f3baab8.js",
    "revision": "1f8ef95462fb6ddca2a0e6c58558dc66"
  },
  {
    "url": "assets/js/191.118b3d71.js",
    "revision": "d68e49da18b43c3db551b62e2ce995e2"
  },
  {
    "url": "assets/js/192.baae6e18.js",
    "revision": "e921c6490e1052cd594a693803693910"
  },
  {
    "url": "assets/js/193.85ed2e14.js",
    "revision": "965abdd3c85423bc9b32e8441b4f1c30"
  },
  {
    "url": "assets/js/194.db32820e.js",
    "revision": "8d212c025776a9c4e50497544ec46057"
  },
  {
    "url": "assets/js/195.98bf939e.js",
    "revision": "f98056c94a637020e2e737d1b707b409"
  },
  {
    "url": "assets/js/196.1a91d531.js",
    "revision": "b0a6406a4977110d0f099f3daebd67f4"
  },
  {
    "url": "assets/js/197.222f5808.js",
    "revision": "d7a9681280c31eac38fe7df7fbdbbbc7"
  },
  {
    "url": "assets/js/198.b7086dc9.js",
    "revision": "0c04c9d9e47903a4d505b0523314eed9"
  },
  {
    "url": "assets/js/199.7a51c780.js",
    "revision": "4c7168825a0a2d9d3c07cafbc5df0b7e"
  },
  {
    "url": "assets/js/20.814bd3fa.js",
    "revision": "12d78829ca0594c1a84ea6918a537c1a"
  },
  {
    "url": "assets/js/200.e5f5aaf8.js",
    "revision": "2854e1538bff5092b308f64c09bbc256"
  },
  {
    "url": "assets/js/201.601578d6.js",
    "revision": "cc0a363afb7c8a724091698252f0c13e"
  },
  {
    "url": "assets/js/202.31fb9c54.js",
    "revision": "12e134d38becc9e11b184cbbc0d217eb"
  },
  {
    "url": "assets/js/203.665a2a3f.js",
    "revision": "0e8dd9100b2ddac3becea08324e94bff"
  },
  {
    "url": "assets/js/204.a1f852de.js",
    "revision": "b24854abd632a6f79cda4f500c622619"
  },
  {
    "url": "assets/js/205.77043bf8.js",
    "revision": "a3496798419ec84badf735f0e1a8098e"
  },
  {
    "url": "assets/js/206.19d53721.js",
    "revision": "a484f265172aae03769c0790653a4509"
  },
  {
    "url": "assets/js/207.2b6be066.js",
    "revision": "4340d61c0edb8ddb65d4a77b6718334a"
  },
  {
    "url": "assets/js/208.f310330f.js",
    "revision": "4af95a1f9308e9f46763fd6bfcdc1ec6"
  },
  {
    "url": "assets/js/209.e0c7c6a0.js",
    "revision": "c6010374909253a958ecbec985104295"
  },
  {
    "url": "assets/js/21.7ffcc43a.js",
    "revision": "6f3d17b5af4ce17d0b6ce1bc6e60e5c5"
  },
  {
    "url": "assets/js/210.4b84f5e0.js",
    "revision": "f9a7e1ec9c65457e6e4a7fc860ce9373"
  },
  {
    "url": "assets/js/211.cdbdde62.js",
    "revision": "e168f405da2bf3f01b5f18656748d53d"
  },
  {
    "url": "assets/js/212.200d9aaf.js",
    "revision": "6aeb14f857d4da0422493ad662e4bc55"
  },
  {
    "url": "assets/js/213.959e6a49.js",
    "revision": "1c6d31e0223138b2cb0adc976c5d4814"
  },
  {
    "url": "assets/js/214.30268d7f.js",
    "revision": "31a2243436989e6ebbf60c1d3973726f"
  },
  {
    "url": "assets/js/215.e066c297.js",
    "revision": "60adc760e7f56f6d245c363de3a58e31"
  },
  {
    "url": "assets/js/216.70aa491d.js",
    "revision": "a525dbe77d29571c6a0756fc2a937af8"
  },
  {
    "url": "assets/js/217.532a1785.js",
    "revision": "5ff8b1f6959b49e18ad40510db3418a5"
  },
  {
    "url": "assets/js/218.9c6acc71.js",
    "revision": "354469107b6030a1b3b7fe60c4e9bdc9"
  },
  {
    "url": "assets/js/219.acb7d678.js",
    "revision": "19ef00c61d39884bfbc0f216221263b0"
  },
  {
    "url": "assets/js/22.a32ed4e3.js",
    "revision": "82cb3c7c197d4d67b98458cf5035810d"
  },
  {
    "url": "assets/js/220.ac240df6.js",
    "revision": "f6d365db7b4269588e24de5499d54ba6"
  },
  {
    "url": "assets/js/221.e742de85.js",
    "revision": "5308ba448ff7d671967e6e3f18c45d6c"
  },
  {
    "url": "assets/js/222.b8ab9921.js",
    "revision": "f917a640388d625fcb8fbac45edce8a3"
  },
  {
    "url": "assets/js/223.b1e35706.js",
    "revision": "9b2c0b5f322956ae1bf0be02593519fd"
  },
  {
    "url": "assets/js/224.a53bd10e.js",
    "revision": "8377e4910f4a0695bb50f1eec8240035"
  },
  {
    "url": "assets/js/225.c8ca8ea9.js",
    "revision": "1f8016ffc69c42a963dc02af2ca8ebc2"
  },
  {
    "url": "assets/js/226.b877acf6.js",
    "revision": "2d071fef69d511a25ada7c16620c9a15"
  },
  {
    "url": "assets/js/227.9595d7ee.js",
    "revision": "a956651de8d197c5256182c3b3a4ad53"
  },
  {
    "url": "assets/js/228.661e89ca.js",
    "revision": "1e25b5a79deab72a61f0eef87a8ca56d"
  },
  {
    "url": "assets/js/229.2a02b7d8.js",
    "revision": "972d9d7464d55a532003d5a78708761c"
  },
  {
    "url": "assets/js/23.6608dec6.js",
    "revision": "b3a054c2d8bb26cadac3059fe65d9768"
  },
  {
    "url": "assets/js/230.86b15f6e.js",
    "revision": "df270255a51e2d5e905015020e9a7760"
  },
  {
    "url": "assets/js/231.8bdc5d16.js",
    "revision": "5543a63a7e4f95aa45e97a3a7ddc49fc"
  },
  {
    "url": "assets/js/232.1bf7df06.js",
    "revision": "8e68b335a01b05de44068389d262663b"
  },
  {
    "url": "assets/js/233.30f60a89.js",
    "revision": "495d6fe58efd9e26a461bd4e37120d9c"
  },
  {
    "url": "assets/js/234.8f6ecd73.js",
    "revision": "9d9d66523d7bd459ffd6875474752e15"
  },
  {
    "url": "assets/js/235.5ae79d3e.js",
    "revision": "7fd3f3f64b7e56a23ecf70c6abe695a1"
  },
  {
    "url": "assets/js/236.b3bf2ed8.js",
    "revision": "fc48917e2031a9d5bebcc033a215e9d2"
  },
  {
    "url": "assets/js/237.bd16d5b5.js",
    "revision": "693f896f577b4583f88c61638fd105c7"
  },
  {
    "url": "assets/js/238.c6b2db52.js",
    "revision": "ae96e31328a58e2eb9cac23b0f2738a0"
  },
  {
    "url": "assets/js/239.a983148c.js",
    "revision": "c3f7487a9f12bca81fad8c6c02711661"
  },
  {
    "url": "assets/js/24.8ad467f1.js",
    "revision": "80345947167dbccc9b4b3be8c50a99e8"
  },
  {
    "url": "assets/js/240.96b8bc87.js",
    "revision": "18b7e76c3a3b9e41dc26767a3e70d88b"
  },
  {
    "url": "assets/js/241.fdc25b58.js",
    "revision": "83ff5291fdee3f4571044f438649cebc"
  },
  {
    "url": "assets/js/242.5a767f66.js",
    "revision": "3fd6fdcf1a495aa99d0d96b05d997214"
  },
  {
    "url": "assets/js/243.35bef5f4.js",
    "revision": "f586b713dbf1cbb6774d2ab89b82002d"
  },
  {
    "url": "assets/js/244.435b9501.js",
    "revision": "cb1b4fd4ca024a91798de11864f32b1d"
  },
  {
    "url": "assets/js/245.218d1457.js",
    "revision": "8dab76b427a2e4e95356687a80c5d9ac"
  },
  {
    "url": "assets/js/246.51e3d037.js",
    "revision": "2176c8f70d1c1ebfb3e943e642f3c0a8"
  },
  {
    "url": "assets/js/247.a3e43d2e.js",
    "revision": "29a74280651f0f7b76865532734731ce"
  },
  {
    "url": "assets/js/248.5e145685.js",
    "revision": "faa22730cbb729585e6056dcb4f0c04c"
  },
  {
    "url": "assets/js/249.89eb2bc6.js",
    "revision": "360ea39904fa08db8f6230d4b0758b90"
  },
  {
    "url": "assets/js/25.afabc965.js",
    "revision": "c098dba0c2706a58b8c4aef612dfc07b"
  },
  {
    "url": "assets/js/250.23b39d30.js",
    "revision": "3de5892008c7727c46b91f5bf7beb1d7"
  },
  {
    "url": "assets/js/251.9ecd1ef2.js",
    "revision": "714192eaac3d9ba6bea7faa0162b24d6"
  },
  {
    "url": "assets/js/252.45b7223e.js",
    "revision": "2641a79de22749fdea3e1e21ac4899c2"
  },
  {
    "url": "assets/js/253.51bd77cd.js",
    "revision": "6cfb9c0ba4e9d543ed06a7f9412e63f5"
  },
  {
    "url": "assets/js/254.aec52dc1.js",
    "revision": "ca4ecc5183fafcdd1724d061eec5a6c6"
  },
  {
    "url": "assets/js/255.9a9a230b.js",
    "revision": "0cf66b9152dbc906389b48bcd9d93677"
  },
  {
    "url": "assets/js/256.32f2dea8.js",
    "revision": "89a141b474859088edb56f85418eca47"
  },
  {
    "url": "assets/js/257.972a4162.js",
    "revision": "4c842fe8c7c7bbec3cd9ca832f43dcbd"
  },
  {
    "url": "assets/js/258.f893487b.js",
    "revision": "2104966b3f1eaa0b3ad27218ee20350b"
  },
  {
    "url": "assets/js/259.5770651f.js",
    "revision": "9a367ceaafe2cbcc90b8ddf662fbdd7a"
  },
  {
    "url": "assets/js/26.c1ddcd6b.js",
    "revision": "6aa245f9b784a96a42d4d9b8c73b5d7d"
  },
  {
    "url": "assets/js/260.c8ba46b8.js",
    "revision": "fd8baafb679c216225d5fe3c9a3a0865"
  },
  {
    "url": "assets/js/261.ad8aae11.js",
    "revision": "3d09224e4507547b4e6cf58c8675cf5b"
  },
  {
    "url": "assets/js/262.e283c207.js",
    "revision": "8c7d8e92adeb648949e3511126860bff"
  },
  {
    "url": "assets/js/263.df8b7c9b.js",
    "revision": "f54ef6eb8d7fe376f01186ce0fd38cac"
  },
  {
    "url": "assets/js/264.126619b3.js",
    "revision": "34d449fe685605d15cc2ad9004814173"
  },
  {
    "url": "assets/js/265.e7ca3e95.js",
    "revision": "43395bd3ad6fbbadf8b24760c1f2c471"
  },
  {
    "url": "assets/js/266.ed91768d.js",
    "revision": "a69b8d4c925d2cac1f00ccf28e76cbea"
  },
  {
    "url": "assets/js/267.a2b04235.js",
    "revision": "7d02151688a2d788e0bb804ecdd25e05"
  },
  {
    "url": "assets/js/268.c1416127.js",
    "revision": "79c3ec7c58d8b428af60d3ac4e060d87"
  },
  {
    "url": "assets/js/269.05468576.js",
    "revision": "24eb609201e5be802916472f5829aff7"
  },
  {
    "url": "assets/js/27.f6f38146.js",
    "revision": "ad6c7a436a24e3b406115c7e9152e91d"
  },
  {
    "url": "assets/js/270.7776b221.js",
    "revision": "14323e0de95ce03ef15d4f3b5ae95f26"
  },
  {
    "url": "assets/js/271.c66d7ea4.js",
    "revision": "0f859094c209cfd639e949427a3e4c76"
  },
  {
    "url": "assets/js/272.4f98cb59.js",
    "revision": "75fae06efc81c17ee7f3c9f0d734d1a6"
  },
  {
    "url": "assets/js/273.52dad552.js",
    "revision": "cd35f4a7bda519dba488876a20380f89"
  },
  {
    "url": "assets/js/274.47d9c403.js",
    "revision": "c0e504a7f831c07ca182bb2414d9ed01"
  },
  {
    "url": "assets/js/275.d5a888d7.js",
    "revision": "19c3c3f189587be30ca158bde56cf61e"
  },
  {
    "url": "assets/js/276.5ae80542.js",
    "revision": "b4620aed4b11782dd22a3f733f170361"
  },
  {
    "url": "assets/js/277.a11b9294.js",
    "revision": "ab89b32aa883eacd52840c52bbd67dba"
  },
  {
    "url": "assets/js/278.02e82565.js",
    "revision": "038d8154f5c5e5870a495fdb13fb4061"
  },
  {
    "url": "assets/js/279.6ec15a42.js",
    "revision": "205b434a91d1d70a42cc9bc1b46913f4"
  },
  {
    "url": "assets/js/28.ad1c252a.js",
    "revision": "516ba0f9495bec071ecbf8007226b0f3"
  },
  {
    "url": "assets/js/280.c7cde810.js",
    "revision": "dd1f3596ffeb4ae37a79f5956474f610"
  },
  {
    "url": "assets/js/281.fa4eb541.js",
    "revision": "4a3a8abb076fb93e7992afab0920015a"
  },
  {
    "url": "assets/js/282.48890c75.js",
    "revision": "b9de9a839444b35bec1d26771627fb3a"
  },
  {
    "url": "assets/js/283.c74f4e81.js",
    "revision": "a2b21009b851b207952492461c5cc237"
  },
  {
    "url": "assets/js/284.1faa620e.js",
    "revision": "455249246c49a1fa9d7791f743a89942"
  },
  {
    "url": "assets/js/285.c9fc0af1.js",
    "revision": "bb95d80aad13ca4933693ee2deb33cdf"
  },
  {
    "url": "assets/js/286.1be40685.js",
    "revision": "5a81b9192da9c92f4a74988e418affaf"
  },
  {
    "url": "assets/js/287.06a9c588.js",
    "revision": "767eb96be1b0d368e58bc95777968457"
  },
  {
    "url": "assets/js/288.29e86e6d.js",
    "revision": "610183edaa5dc560aa02353577fe6f19"
  },
  {
    "url": "assets/js/289.9642b9ad.js",
    "revision": "cfee7bb6be47567fcec6eb59b9865f43"
  },
  {
    "url": "assets/js/29.47b26736.js",
    "revision": "845b322bb72f793303d7a5a8731c6af1"
  },
  {
    "url": "assets/js/290.c710ab17.js",
    "revision": "3738eb92e87714fe4f5bae3972930d3a"
  },
  {
    "url": "assets/js/291.0e3a0f34.js",
    "revision": "e4cf741919b8d9a00c8302ceefd7548c"
  },
  {
    "url": "assets/js/292.6e4cbb4e.js",
    "revision": "0b693a1247ee6da7cb7bedfccf4c58a5"
  },
  {
    "url": "assets/js/293.b52d09f1.js",
    "revision": "cb7cf509e8d28fa00aff504c968dd593"
  },
  {
    "url": "assets/js/294.09d177ca.js",
    "revision": "76b94e0b1f6d86663501a86baeee59c2"
  },
  {
    "url": "assets/js/295.1626d2c8.js",
    "revision": "9047d6234f0f4e74f3ddfb44adc917ad"
  },
  {
    "url": "assets/js/296.fbabd094.js",
    "revision": "de9391fe433d6a8091ca5d653cc86342"
  },
  {
    "url": "assets/js/297.a9aaa9b3.js",
    "revision": "c2ae2b6859ef0f3ab943cae2a7542026"
  },
  {
    "url": "assets/js/298.966f16df.js",
    "revision": "ac18a1ca4abed49ace6efa1e8371c8bb"
  },
  {
    "url": "assets/js/299.c4d56086.js",
    "revision": "293bceb61a7987531f64bd147a0fd3b2"
  },
  {
    "url": "assets/js/3.2e782250.js",
    "revision": "b69f615731b1cbfee0045a912a88201a"
  },
  {
    "url": "assets/js/30.553151f0.js",
    "revision": "fabe45e833666b374b07f66539ad5f16"
  },
  {
    "url": "assets/js/300.b1ad6f19.js",
    "revision": "79293cc1fcb7dfc3f150e8a25665f8b3"
  },
  {
    "url": "assets/js/301.4b8ed564.js",
    "revision": "b3c845a3972b6195edf4bd307ede3c7f"
  },
  {
    "url": "assets/js/302.030606af.js",
    "revision": "5a001ae6e7f7855241bc5684a5b4f9f1"
  },
  {
    "url": "assets/js/303.19266782.js",
    "revision": "d26cdd8e0cd709b16992ad410e8a0c3e"
  },
  {
    "url": "assets/js/304.a447dc8a.js",
    "revision": "384f001b130d8b65275c0e171dc60324"
  },
  {
    "url": "assets/js/305.f24f676a.js",
    "revision": "121c69ee6a12273e38f36e17601fe082"
  },
  {
    "url": "assets/js/306.6c3e1ddf.js",
    "revision": "331207a5e8301422a234650be99a75e6"
  },
  {
    "url": "assets/js/307.3dae1236.js",
    "revision": "25ed1d4d3e95f32b7a43508ad4419d2c"
  },
  {
    "url": "assets/js/308.6098a12a.js",
    "revision": "e672b34c83fc5523402e72e044f286ef"
  },
  {
    "url": "assets/js/309.6dbaadf4.js",
    "revision": "6f70f441b245074b4e0b0f9aa3aad2cf"
  },
  {
    "url": "assets/js/31.6493d0b9.js",
    "revision": "b38e799e31623ba964909ac51a5fac10"
  },
  {
    "url": "assets/js/310.d480e197.js",
    "revision": "5176cab095a031d18732816bf87152b7"
  },
  {
    "url": "assets/js/311.ba7deb5f.js",
    "revision": "5d482baf28ecc6c9f6eaf7c2485ff3f8"
  },
  {
    "url": "assets/js/312.40ed377e.js",
    "revision": "5cb103f9b103d1ff86220853f8a28465"
  },
  {
    "url": "assets/js/313.097944c8.js",
    "revision": "ed441a21bbd4a83977db35589dc1f4d6"
  },
  {
    "url": "assets/js/314.25dabf44.js",
    "revision": "0578a43219eb027be1073dbeb9752c78"
  },
  {
    "url": "assets/js/315.506b13a5.js",
    "revision": "c34d674b6101a8962adbbf2e8bb11167"
  },
  {
    "url": "assets/js/316.5bd0626f.js",
    "revision": "0cf2bb019ed5b6310f7c6b68dc353d44"
  },
  {
    "url": "assets/js/317.bc98622c.js",
    "revision": "366bec7bf9dd8af3f6c576714e0a3cfd"
  },
  {
    "url": "assets/js/318.1e4745e1.js",
    "revision": "3bab2efaae749ab4c489b10ab7de7ecf"
  },
  {
    "url": "assets/js/319.f5e47189.js",
    "revision": "6fb01e922de49e062338d17314ba61ff"
  },
  {
    "url": "assets/js/32.bfd49d83.js",
    "revision": "f822433e4d2c80fade5bc377f9f55e6b"
  },
  {
    "url": "assets/js/33.56b690fb.js",
    "revision": "66db297ac5bbf61520b91e659300210a"
  },
  {
    "url": "assets/js/34.ea7e96a5.js",
    "revision": "dcd468ea973007a35dae0d8af4debb7e"
  },
  {
    "url": "assets/js/35.c1eb8254.js",
    "revision": "c1fc17ec6a6c6faba7c4c937710caa18"
  },
  {
    "url": "assets/js/36.f08ddb6f.js",
    "revision": "7a2891c43545b6e56b0684794b43f0d7"
  },
  {
    "url": "assets/js/37.7e48beda.js",
    "revision": "590c72044ef4f65ab54c053310f934c4"
  },
  {
    "url": "assets/js/38.96fbdf9d.js",
    "revision": "2084ad4756707245744935e411cae897"
  },
  {
    "url": "assets/js/39.f81c7081.js",
    "revision": "7597fa60cdd1585e3b910fcfee505663"
  },
  {
    "url": "assets/js/4.14f3626b.js",
    "revision": "e6aeee9c528be5e8bc9dfc50260b7921"
  },
  {
    "url": "assets/js/40.dc976df0.js",
    "revision": "04f61803a7f2b908b495f90f7d0fef76"
  },
  {
    "url": "assets/js/41.253fd916.js",
    "revision": "d1203bb2e05c630c3d64c2db916ca9f0"
  },
  {
    "url": "assets/js/42.5e48702a.js",
    "revision": "ed712feb25b4f76187d27610784843cf"
  },
  {
    "url": "assets/js/43.71880168.js",
    "revision": "3b97789355bd795febdedab658720520"
  },
  {
    "url": "assets/js/44.834bc341.js",
    "revision": "dd2d3afd4f304c1be641f6d2aea1ff05"
  },
  {
    "url": "assets/js/45.60af1ba9.js",
    "revision": "40231984b7155f1a01b90b2e19654f6e"
  },
  {
    "url": "assets/js/46.81dd56df.js",
    "revision": "8b74c45ef75373e3eb0cf3adde502de1"
  },
  {
    "url": "assets/js/47.32dc7bac.js",
    "revision": "80296d6abecdbc42df8c4fc98713e635"
  },
  {
    "url": "assets/js/48.879ba9fa.js",
    "revision": "5fc47d47582217bdada8d17496404b2f"
  },
  {
    "url": "assets/js/49.d385461c.js",
    "revision": "5643fc1da36f37619827f6e8e5579e37"
  },
  {
    "url": "assets/js/5.442fd275.js",
    "revision": "0986ceff4942e06c56cdd4930a077e26"
  },
  {
    "url": "assets/js/50.9aed1700.js",
    "revision": "f4001cbb9c7b78da73d3188ce5bd44b7"
  },
  {
    "url": "assets/js/51.974fc14d.js",
    "revision": "d06431ee893340527e5fc48414f24593"
  },
  {
    "url": "assets/js/52.d1bfe086.js",
    "revision": "51b3c3371838b463b3c6b3d5d7c5784c"
  },
  {
    "url": "assets/js/53.15e7efa1.js",
    "revision": "190ddc370ee3461fe49ff1e16e4ec055"
  },
  {
    "url": "assets/js/54.207371e9.js",
    "revision": "d19bf3293ec9f1696c1f296d9497d87b"
  },
  {
    "url": "assets/js/55.4b86be8a.js",
    "revision": "c39884ce3c46a8de31590519911011a3"
  },
  {
    "url": "assets/js/56.eeaa6f8c.js",
    "revision": "742c6708070882b752b2db1c4e8cec64"
  },
  {
    "url": "assets/js/57.effd00f4.js",
    "revision": "d355195e2b06870a85ff0a1cd19093df"
  },
  {
    "url": "assets/js/58.63736b57.js",
    "revision": "079998bc36bc94ecddaf0dab14a606a2"
  },
  {
    "url": "assets/js/59.50ec38a4.js",
    "revision": "ebe613284d11122d0c94cfd1110fa331"
  },
  {
    "url": "assets/js/6.78fdd18e.js",
    "revision": "6d2c42a0877567b7b9198e1badd310ca"
  },
  {
    "url": "assets/js/60.d47f1caf.js",
    "revision": "6d5e6f0d786f2c159d3e40e1641f0233"
  },
  {
    "url": "assets/js/61.f89642e5.js",
    "revision": "73ee132f4a3d6adeec7033b9420ded3b"
  },
  {
    "url": "assets/js/62.995ac1cc.js",
    "revision": "3acc4a4e927a442384d202309ada71be"
  },
  {
    "url": "assets/js/63.84d4dd2c.js",
    "revision": "6f056d8c2a30a0eb13832748bf2efc2e"
  },
  {
    "url": "assets/js/64.62f1cefc.js",
    "revision": "6c08ddc23ee916eab65535da148ef06a"
  },
  {
    "url": "assets/js/65.d71fb3b2.js",
    "revision": "dfdc25099adda1a6337d73c72107e30b"
  },
  {
    "url": "assets/js/66.fa855fa2.js",
    "revision": "adb6e3775d09c32b6a5fdfcad4afab6d"
  },
  {
    "url": "assets/js/67.37365ea1.js",
    "revision": "6a187b9712670575e0b353aea4a36b3e"
  },
  {
    "url": "assets/js/68.3290cc70.js",
    "revision": "04fa47b3682bc7c35187e651ebbcc962"
  },
  {
    "url": "assets/js/69.492bb34e.js",
    "revision": "934183102f7882cfaca2a4cc0b881083"
  },
  {
    "url": "assets/js/7.dae18291.js",
    "revision": "c9b9972bd2fc7548002d10ac748665a0"
  },
  {
    "url": "assets/js/70.6e928b38.js",
    "revision": "23dba6409adfa008d9e3cf7e3c69f784"
  },
  {
    "url": "assets/js/71.9b1dedc7.js",
    "revision": "20dd97480c39f76fbc5019381e9d708d"
  },
  {
    "url": "assets/js/72.cfa527b6.js",
    "revision": "f2392a5d2eeae211286d33c014396ed8"
  },
  {
    "url": "assets/js/73.2b57b93a.js",
    "revision": "8fa0d51fa88f6629023d41d3657f4d26"
  },
  {
    "url": "assets/js/74.e660197c.js",
    "revision": "6f98531382fb808fa1ee8aebc1ff5402"
  },
  {
    "url": "assets/js/75.cf5c4908.js",
    "revision": "383a58d8728bd219416cf4b19c5526d4"
  },
  {
    "url": "assets/js/76.001d4a3c.js",
    "revision": "d28b6459a7a39adddee1ec9c6fa9212a"
  },
  {
    "url": "assets/js/77.91e618e1.js",
    "revision": "34012c980f92d3f2fbbc62dd0b04f860"
  },
  {
    "url": "assets/js/78.3cde7ce6.js",
    "revision": "3d408e7db2c1fb9f77a0f2ac59e1e6e0"
  },
  {
    "url": "assets/js/79.f9b870de.js",
    "revision": "2ef78a8df814ab55d029367640c6b515"
  },
  {
    "url": "assets/js/8.61e0c664.js",
    "revision": "88dbb7515230cb6e7ad614d22ee40c5a"
  },
  {
    "url": "assets/js/80.b6d4bcac.js",
    "revision": "ef3f7a6a4a6d5250972757febba8dc10"
  },
  {
    "url": "assets/js/81.9d93d7ec.js",
    "revision": "30bd94aa8e069644867dc80d95252370"
  },
  {
    "url": "assets/js/82.9c1e2979.js",
    "revision": "09a16812e3b7e50758ca5fc878eaac14"
  },
  {
    "url": "assets/js/83.98e6b344.js",
    "revision": "ff121b891a49c7e878f5411fe3498250"
  },
  {
    "url": "assets/js/84.8009dc35.js",
    "revision": "d1e6e3b9c85f96fda4aa08abded9af0b"
  },
  {
    "url": "assets/js/85.ffa8a932.js",
    "revision": "4d3b85a84ae9417ea22fbc7447cdff7f"
  },
  {
    "url": "assets/js/86.7a30d032.js",
    "revision": "d8cd15e19286559597a6ef5961a2f33e"
  },
  {
    "url": "assets/js/87.c6e596d8.js",
    "revision": "f33f39df780750f2a16e469090dfcd98"
  },
  {
    "url": "assets/js/88.294296a2.js",
    "revision": "0a42c750a9d1c85f802bbe7f9df8e7c7"
  },
  {
    "url": "assets/js/89.d3d4387c.js",
    "revision": "7afc0ac5a67cd4a26af8affb623cb61e"
  },
  {
    "url": "assets/js/9.e837461f.js",
    "revision": "ad1c427eca9b68a3f4aaf4195d4a8540"
  },
  {
    "url": "assets/js/90.c1235599.js",
    "revision": "0d728609ae359b5853be448a83fbd35c"
  },
  {
    "url": "assets/js/91.cef097f5.js",
    "revision": "b09160710aa082151fb9c3e077bc5f4b"
  },
  {
    "url": "assets/js/92.a6550399.js",
    "revision": "ebfe9f0ef97044d4c82d708a40a4573e"
  },
  {
    "url": "assets/js/93.0794c0bc.js",
    "revision": "6427ef0b2c111baeee23fb14629a5715"
  },
  {
    "url": "assets/js/94.7c4777fb.js",
    "revision": "3e36701db288fc317b2b96451b7d89c4"
  },
  {
    "url": "assets/js/95.da8e6f3d.js",
    "revision": "b5304a4fee99c207b7971268f0752132"
  },
  {
    "url": "assets/js/96.8bc636ae.js",
    "revision": "7bac9b23ec2445e5effcbb98398e24ee"
  },
  {
    "url": "assets/js/97.ca188043.js",
    "revision": "9ee46ac460ed75269f63e162256a9245"
  },
  {
    "url": "assets/js/98.fc01270d.js",
    "revision": "cb732b3ac26fe9dc25b174a68b07d201"
  },
  {
    "url": "assets/js/99.a8dfa6ec.js",
    "revision": "feb9649489bc077199f23cfa29855c1b"
  },
  {
    "url": "assets/js/app.5f833400.js",
    "revision": "3d1eb06fede04ebcd631115703e0f87f"
  },
  {
    "url": "customize/index.html",
    "revision": "22ffb3a47594391e9e7ca1e479c19340"
  },
  {
    "url": "customize/Model-Creation.html",
    "revision": "cbcb25b596f7353224c2e773529663c8"
  },
  {
    "url": "customize/Model-Customization.html",
    "revision": "f6f5040112aabfa6c4815adea14f63db"
  },
  {
    "url": "develop/APE.html",
    "revision": "3ea38a56e4491a6372144c2c6e78dd0b"
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
    "revision": "d1b399b5e37f6c4851f4f2479e186656"
  },
  {
    "url": "develop/ARE-HW-Interfacing-CIM.html",
    "revision": "c4fd5e6efe8f0d76ece01e9cac685b7f"
  },
  {
    "url": "develop/ARE-Keyboard-Mouse-Services.html",
    "revision": "59924afd645160d2806ae3078a07d1f6"
  },
  {
    "url": "develop/ARE-Webserver.html",
    "revision": "2439e2f460f4f6804b826ad4bfd636dc"
  },
  {
    "url": "develop/ARE.html",
    "revision": "cd58dc9b8c8237b16453430c32926335"
  },
  {
    "url": "develop/asterics-wiki/api/AsTeRICS Websocket.html",
    "revision": "751b7885dfa2054909e41c5f1f605455"
  },
  {
    "url": "develop/asterics-wiki/api/Resource Handling.html",
    "revision": "73dfc6098d5b3c113cb4f6d58d10963e"
  },
  {
    "url": "develop/asterics-wiki/api/REST-API.html",
    "revision": "a347b81fb296f9ba7b4236784087416c"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Solutions.html",
    "revision": "25f40358d02320f5d3269678bf561e8c"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Webserver Document Root.html",
    "revision": "b2ea6ab6c81e3de8ce5dbd563011a6bd"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/JavaCV.html",
    "revision": "8f72140293e15b0bb01a4d5a94f67e83"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/Unit Tests.html",
    "revision": "3e17180c16704743562be4d6b7a6edb1"
  },
  {
    "url": "develop/asterics-wiki/components/AsTeRICS Plugins.html",
    "revision": "8fa7419dde94f2795ee51483f96a495f"
  },
  {
    "url": "develop/AT_solution_development.html",
    "revision": "9155f1b014bfca7bffaae4be47d3323d"
  },
  {
    "url": "develop/AT-solution-demos.html",
    "revision": "00495fef95534a2044d6f7c1736dedc7"
  },
  {
    "url": "develop/Coding-Guidelines.html",
    "revision": "ccfcbf675cdb1d1034ffa66bcd06c4b9"
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
    "revision": "4ba448a7ffd14d75f5665ec892e218f2"
  },
  {
    "url": "develop/index.html",
    "revision": "a2247d01601eaedaf4757848afe8e569"
  },
  {
    "url": "develop/Plugin-Advanced.html",
    "revision": "e5f0815a93e72490a157f1d0bfbf50a5"
  },
  {
    "url": "develop/Plugin-Introduction.html",
    "revision": "ec11550790a6c8d1aeba9053f80cb74c"
  },
  {
    "url": "develop/Plugin-Tutorial.html",
    "revision": "b6bc5afdbf6adb0993c026fc4b7a7c52"
  },
  {
    "url": "develop/REST-API-java-client.html",
    "revision": "49bb5fbe2f9c45da4dea211c028bfc16"
  },
  {
    "url": "develop/REST-API-js-areCommunicator.html",
    "revision": "b3ad659feaf3be0a28cab617dcf47f07"
  },
  {
    "url": "develop/REST-API-js-wrapper-ext.html",
    "revision": "0f3eaab86de9447dc9e0d879ca6010bc"
  },
  {
    "url": "develop/REST-API.html",
    "revision": "741559a6753c9f58cb4eceb8a53a46ae"
  },
  {
    "url": "develop/REST-demos.html",
    "revision": "b23f321c8a897d85cdf361ebb341489c"
  },
  {
    "url": "develop/Unit-Testing.html",
    "revision": "61356badfa73fd6c099df966245346d4"
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
    "revision": "7693dfef7f9f568d7f2eebe152d71594"
  },
  {
    "url": "get-involved/Contact.html",
    "revision": "1693b39e49ecbaaefdde33add70e9d46"
  },
  {
    "url": "get-involved/Contribute.html",
    "revision": "7d57ecd73e0315c54e9bdea424f05600"
  },
  {
    "url": "get-involved/index.html",
    "revision": "149e0c20de5145f616f993f60c43d036"
  },
  {
    "url": "get-involved/Legal-Notice.html",
    "revision": "7c077de56802f79d5f4d918d3d97ab94"
  },
  {
    "url": "get-started/Demos.html",
    "revision": "9ac7f4945affe4e2f26a58f529964991"
  },
  {
    "url": "get-started/index.html",
    "revision": "0ca7d1e98c7d6a82eceabfdffd1bbb65"
  },
  {
    "url": "get-started/Installation.html",
    "revision": "618616ebffacd8896e996cd77c05bb71"
  },
  {
    "url": "get-started/Overview.html",
    "revision": "47ec444130aa5c2d1f187e50202bbbc2"
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
    "url": "img/Harry-shutterstock_213119035.jpg",
    "revision": "9908c43b782c4cb701eccfe15fbe7cf7"
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
    "revision": "37e8fa98910f6ada0e829edf6c0c8706"
  },
  {
    "url": "manuals/ACS/Actuators.html",
    "revision": "3cbc2f5dc549d6b85925fe9c57e0cefc"
  },
  {
    "url": "manuals/ACS/Channels.html",
    "revision": "70a2f74589ad51c2d125e401b302846e"
  },
  {
    "url": "manuals/ACS/Colours_settings.html",
    "revision": "4551750f38194653e1f6f091648a3bf2"
  },
  {
    "url": "manuals/ACS/Component_Collection_Manager.html",
    "revision": "37137b36b9f14eb19950566400ad46fb"
  },
  {
    "url": "manuals/ACS/Component_Context_Menu.html",
    "revision": "f2cf7fca8d983341dc347fd44c014928"
  },
  {
    "url": "manuals/ACS/Connected.html",
    "revision": "548226d9c34bb360775c0d799b2378a4"
  },
  {
    "url": "manuals/ACS/Control_the_ARE.html",
    "revision": "1cb36556a2a589787af4bb7e438002c6"
  },
  {
    "url": "manuals/ACS/Create_and_Edit_a_Model.html",
    "revision": "b14b15e19c67b8f3131fa78472c6839a"
  },
  {
    "url": "manuals/ACS/Dialogs_settings.html",
    "revision": "a2c0342d6588fe23393da7e926f93d39"
  },
  {
    "url": "manuals/ACS/Disconnected.html",
    "revision": "68a63db880b9d9930a9f57fbfc7bc813"
  },
  {
    "url": "manuals/ACS/Events.html",
    "revision": "7210da330c961c676e62044dfe36b04b"
  },
  {
    "url": "manuals/ACS/External_Tools_Options.html",
    "revision": "244097c13d0b34d4dcd024a59b137288"
  },
  {
    "url": "manuals/ACS/External_Tools.html",
    "revision": "3a8a0741afe232e6a57628ac6d7b1633"
  },
  {
    "url": "manuals/ACS/General_settings.html",
    "revision": "2b54dc23daec02f6c8e33fae9aa41e7c"
  },
  {
    "url": "manuals/ACS/GUI_Designer.html",
    "revision": "406da76d5923aec3ee3da2b739514f37"
  },
  {
    "url": "manuals/ACS/index.html",
    "revision": "b76ca689dd40777b954bb183f82c9003"
  },
  {
    "url": "manuals/ACS/Keyboard_control.html",
    "revision": "075e2e5e0b478a32118bc27588fc0b08"
  },
  {
    "url": "manuals/ACS/Load_and_Save_Models.html",
    "revision": "27357266a445ffdb60b847a22ded983e"
  },
  {
    "url": "manuals/ACS/Miscellaneous.html",
    "revision": "6801824acca759dc46ca16afcbb6e750"
  },
  {
    "url": "manuals/ACS/Modes.html",
    "revision": "66357b0bb9a76765f9d38964f3de9c7c"
  },
  {
    "url": "manuals/ACS/Options.html",
    "revision": "722fcdb50ca4f1e14cbf2bddb23a4946"
  },
  {
    "url": "manuals/ACS/Pause.html",
    "revision": "bba687870869b6463ba9972f40310a9a"
  },
  {
    "url": "manuals/ACS/Print.html",
    "revision": "8aae02c253e3b998b97903bab42f817c"
  },
  {
    "url": "manuals/ACS/Processors.html",
    "revision": "8d9bd2fe72df1a3e9cec71d404dc0ef9"
  },
  {
    "url": "manuals/ACS/Running.html",
    "revision": "930bbd6c96465b31034a70f5251f903f"
  },
  {
    "url": "manuals/ACS/Sensors.html",
    "revision": "0ba1af57c0247c5db0c1da039e6d0e4d"
  },
  {
    "url": "manuals/ACS/Setting_the_Properties.html",
    "revision": "d4ff0c82f6bcfb80c222420b3a01c235"
  },
  {
    "url": "manuals/ACS/Status_Reporting_and_Error_Logging.html",
    "revision": "9b39e75551926280dc2c3ae891818fd2"
  },
  {
    "url": "manuals/ACS/Synchronized.html",
    "revision": "293913e1b3e8294044a1e7d45292a66c"
  },
  {
    "url": "manuals/ACS/The_Edit_Tab.html",
    "revision": "32db5a8a118105e9b8f061d7cdff3d01"
  },
  {
    "url": "manuals/ACS/Tooltips.html",
    "revision": "1767c84048fd38bf0362f190e611f48a"
  },
  {
    "url": "manuals/ARE/index.html",
    "revision": "cd2cb081ecfa898c57e55eea9f7514cd"
  },
  {
    "url": "manuals/index.html",
    "revision": "2e13bce405e608fecf92172a5e8c1df4"
  },
  {
    "url": "manuals/WebACS/AREStatus.html",
    "revision": "c85c5725580a30afb89ff5da8fac6527"
  },
  {
    "url": "manuals/WebACS/Channels.html",
    "revision": "c1aded9b34208eda1b97923bcce38767"
  },
  {
    "url": "manuals/WebACS/Control_the_ARE.html",
    "revision": "1178454cfb168b080aa9e27bec73153f"
  },
  {
    "url": "manuals/WebACS/Create_and_Edit_a_Model.html",
    "revision": "0cf884ff0bf02e47d6764714f3192a27"
  },
  {
    "url": "manuals/WebACS/Events.html",
    "revision": "65691dff830caaeaf35e0b1691806421"
  },
  {
    "url": "manuals/WebACS/GUI_Designer.html",
    "revision": "ba5bb61091e216b617379c1ea2fe37f3"
  },
  {
    "url": "manuals/WebACS/index.html",
    "revision": "820d05e9367cc72669676d0f0ab3b9c7"
  },
  {
    "url": "manuals/WebACS/Keyboard_control.html",
    "revision": "2461aec1ca229460bdf58ec3dee7b387"
  },
  {
    "url": "manuals/WebACS/List_View.html",
    "revision": "690c972f7551f479e20e9af95faa347c"
  },
  {
    "url": "manuals/WebACS/Miscellaneous.html",
    "revision": "ef75164659d5a80eb0ed969741fa796c"
  },
  {
    "url": "manuals/WebACS/Open_and_Save_Models.html",
    "revision": "a4d860435d62bc1f5386530b00da2efe"
  },
  {
    "url": "manuals/WebACS/Setting_the_Properties.html",
    "revision": "4edc44e7a52b77053098401cf990e16c"
  },
  {
    "url": "manuals/WebACS/The_Edit_Tab.html",
    "revision": "6cbe09c58cc751befe46d75fc67e38af"
  },
  {
    "url": "plugins/actuators/AnalogOut.html",
    "revision": "5900dee537c0dea1700c67e637a2402c"
  },
  {
    "url": "plugins/actuators/Android_connection.html",
    "revision": "ad8c1ecdc57f84bae066c2ecee9a7f3b"
  },
  {
    "url": "plugins/actuators/AndroidPhoneControl.html",
    "revision": "ee03517a80f759df2d5622da88b856f6"
  },
  {
    "url": "plugins/actuators/AngularCursorControl.html",
    "revision": "bd8c2c46c83e9e4f9d51baf1b83f8661"
  },
  {
    "url": "plugins/actuators/ApplicationLauncher.html",
    "revision": "d63f0d02379816959b76232ebdec3d0c"
  },
  {
    "url": "plugins/actuators/AREWindow.html",
    "revision": "78568ee4e537c3e4b1776589ab5825a1"
  },
  {
    "url": "plugins/actuators/BarDisplay.html",
    "revision": "4a6abba9c280ce9d7069236076fcb4a3"
  },
  {
    "url": "plugins/actuators/CrosshairCursorControl.html",
    "revision": "144b0fa19b391356fbd81deab1907ecc"
  },
  {
    "url": "plugins/actuators/DialogBox.html",
    "revision": "4d8f4396b13c46d2a258e66dde5143dd"
  },
  {
    "url": "plugins/actuators/DigitalOut.html",
    "revision": "d2757bb06cd532c7800cada7e7b41802"
  },
  {
    "url": "plugins/actuators/DotMeter.html",
    "revision": "2f0354548801d281176ce6b0b818a0cd"
  },
  {
    "url": "plugins/actuators/EasyHomeControl.html",
    "revision": "66cd6e2ff5bddee32f1f4bb1072dd4c2"
  },
  {
    "url": "plugins/actuators/EmulateFaultyPlugin.html",
    "revision": "6b31ce72babd8e79d83c2d9e2a87b8eb"
  },
  {
    "url": "plugins/actuators/EnobioDisplay.html",
    "revision": "a1f0c9880399cf8dd87ba7e4aacd816d"
  },
  {
    "url": "plugins/actuators/Enocean.html",
    "revision": "d967952b7bed84ef2eae89ea8aca346e"
  },
  {
    "url": "plugins/actuators/EventVisualizer.html",
    "revision": "a28e36849eccd9fa1ff36f2edeb07fa8"
  },
  {
    "url": "plugins/actuators/FileWriter.html",
    "revision": "ef6948dbe0591e87c8413a94281808de"
  },
  {
    "url": "plugins/actuators/FlickeringLightStimulator.html",
    "revision": "520e4b7475f645713e73bba0ba2ac723"
  },
  {
    "url": "plugins/actuators/FS20Sender.html",
    "revision": "4013e647c32f83ac3c61dad94732613f"
  },
  {
    "url": "plugins/actuators/GMailShortcuts.html",
    "revision": "2a24e7dbf660f8c679fbea8f1c8b70eb"
  },
  {
    "url": "plugins/actuators/GSMModem.html",
    "revision": "8acf1963435eedc7bbbefc51c824b9d0"
  },
  {
    "url": "plugins/actuators/ImageBox.html",
    "revision": "01fdf7f224fc136ffd7d59e8f30b3ca2"
  },
  {
    "url": "plugins/actuators/IRTrans.html",
    "revision": "d381c81e3ec70361570a96192e2ff482"
  },
  {
    "url": "plugins/actuators/Keyboard.html",
    "revision": "456c9fc8f31a3bb0d086c65c5e6d92d1"
  },
  {
    "url": "plugins/actuators/Knx.html",
    "revision": "63e97375d5e9ea83ccb25beb084cc51c"
  },
  {
    "url": "plugins/actuators/LegacyDigitalOut.html",
    "revision": "c8bf0d9dabd23a2f3fd1eead9b024d3a"
  },
  {
    "url": "plugins/actuators/LineWriter.html",
    "revision": "69edf008291f17d830454fff6326e8cc"
  },
  {
    "url": "plugins/actuators/MediaPlayer.html",
    "revision": "a476831c9ab580eab3151d4426b1c036"
  },
  {
    "url": "plugins/actuators/MidiPlayer.html",
    "revision": "bbc8bb29c80af9a85f084238b1fbfc7a"
  },
  {
    "url": "plugins/actuators/ModelSwitcher.html",
    "revision": "7d8db7f602052ec56e7c6db46b81aeb1"
  },
  {
    "url": "plugins/actuators/Mouse.html",
    "revision": "6cef425dc069c9a00dd391d6ac12cb6e"
  },
  {
    "url": "plugins/actuators/MousecursorIcon.html",
    "revision": "fcc01fcd60b3a08a68f6256e6265237c"
  },
  {
    "url": "plugins/actuators/NetConnection.html",
    "revision": "6435e16942fbc54665b24fa6432314ec"
  },
  {
    "url": "plugins/actuators/Oscilloscope.html",
    "revision": "d278fba0b89ce33762de885b753dd5f6"
  },
  {
    "url": "plugins/actuators/OscOutClient.html",
    "revision": "dc84da270395c82cfef4843fdadd5a1a"
  },
  {
    "url": "plugins/actuators/PhoneControl.html",
    "revision": "3dcf15837a84dfe60da691253b790323"
  },
  {
    "url": "plugins/actuators/PicoTTS.html",
    "revision": "64176d3ec9d022eae3ad947be7eab506"
  },
  {
    "url": "plugins/actuators/PlatformDigitalOut.html",
    "revision": "54e8816b0c36ac3ebe69bb9d615fcc1f"
  },
  {
    "url": "plugins/actuators/PlatformLCD.html",
    "revision": "ad5d589d63ae8d8bc6ddb295fd51444d"
  },
  {
    "url": "plugins/actuators/PongGame.html",
    "revision": "9475a807cbf16c3a64f491ae5c4435aa"
  },
  {
    "url": "plugins/actuators/RemoteJoystick.html",
    "revision": "e9cdac2b238bc44c8555b62d45c271b3"
  },
  {
    "url": "plugins/actuators/RemoteKeyboard.html",
    "revision": "9b85a1bdea7ad272b796f121014a7f60"
  },
  {
    "url": "plugins/actuators/RemoteMouse.html",
    "revision": "9006e2377b1a6dc2ea26bb85f0517ab7"
  },
  {
    "url": "plugins/actuators/RemoteTablet.html",
    "revision": "03e48e65aafbe1ceb30146d658ac4f4c"
  },
  {
    "url": "plugins/actuators/RemoteWindow.html",
    "revision": "03b03a83e314640ba69904d12039c654"
  },
  {
    "url": "plugins/actuators/SerialSender.html",
    "revision": "51cfd622091e6a28c9da5fc8f988b22b"
  },
  {
    "url": "plugins/actuators/SkyWatcherMount.html",
    "revision": "4deebfd0a85f7695fa861f3461dd6ecc"
  },
  {
    "url": "plugins/actuators/SSVEPFileWriter.html",
    "revision": "ae91e91ce9610efc36deec15b081a2b0"
  },
  {
    "url": "plugins/actuators/SSVEPStimulator.html",
    "revision": "fd0b0ee05c79122553a5608a7a338c79"
  },
  {
    "url": "plugins/actuators/SyntheticVoice.html",
    "revision": "958cc1cdcfe3e77001c098d742d93e56"
  },
  {
    "url": "plugins/actuators/TeensyRCPrototype.html",
    "revision": "4c9f337403669ea747fa3d796b0c6092"
  },
  {
    "url": "plugins/actuators/TextArea.html",
    "revision": "63d02c8af9f4d693db925fab0e016468"
  },
  {
    "url": "plugins/actuators/TextDisplay.html",
    "revision": "2beeab9a083d590f0e700900368d76b1"
  },
  {
    "url": "plugins/actuators/ToneGenerator.html",
    "revision": "8b1116fc8355fd24000c030c82af9046"
  },
  {
    "url": "plugins/actuators/Tooltip.html",
    "revision": "500900477e0de69624ae94ecadd0a0a5"
  },
  {
    "url": "plugins/actuators/WavefilePlayer.html",
    "revision": "d4a04a7ee15d3f088cee089197a624de"
  },
  {
    "url": "plugins/actuators/WriteCSV.html",
    "revision": "6e6943d58707e81a0457fc657fb7670b"
  },
  {
    "url": "plugins/actuators/WriteEDF.html",
    "revision": "e18d244c983d0dd904b5b0af1a53deed"
  },
  {
    "url": "plugins/index.html",
    "revision": "0d8c89c223888df1a467bc0e914e1dd2"
  },
  {
    "url": "plugins/processors/AcousticScanning.html",
    "revision": "5b02ad35787c22c42539d8abad40ee71"
  },
  {
    "url": "plugins/processors/AdjustmentCurve.html",
    "revision": "c0f49ca522f9b0417e1fa88a7f2db4ba"
  },
  {
    "url": "plugins/processors/Amplifier.html",
    "revision": "be41333bd365b8a00fe1f51efdb62d8f"
  },
  {
    "url": "plugins/processors/Arduino.html",
    "revision": "75df282cbf18aa11886983e4ba39dc22"
  },
  {
    "url": "plugins/processors/AudioSelector.html",
    "revision": "e428e728ce0110f8d8199df0afc186c8"
  },
  {
    "url": "plugins/processors/Averager.html",
    "revision": "87fa1f313a99d0597b82a2db1fbd2ef9"
  },
  {
    "url": "plugins/processors/BasicTRalgorithms.html",
    "revision": "78a2fa7ca5ecf5d27d4062de985c4d9c"
  },
  {
    "url": "plugins/processors/Benchmark.html",
    "revision": "714e53c3d72316cb69497d4aa37cb33f"
  },
  {
    "url": "plugins/processors/BlinkDetection.html",
    "revision": "3462037ceba214e40a16ff90e5b8716c"
  },
  {
    "url": "plugins/processors/BlinkDetector.html",
    "revision": "5fed814b6d609b79b7ab8d29453c3491"
  },
  {
    "url": "plugins/processors/BlinkDetectorTrainer.html",
    "revision": "21c215db910e889965baa6ca3602ddcf"
  },
  {
    "url": "plugins/processors/Comparator.html",
    "revision": "c63ce2fbf08903408d032d7b7df74003"
  },
  {
    "url": "plugins/processors/ComPort.html",
    "revision": "6dbaea9d05df0d43aefde02ca59c2d0f"
  },
  {
    "url": "plugins/processors/ComputeBandpower.html",
    "revision": "4e66fab1d6954de697e4db39127f1d14"
  },
  {
    "url": "plugins/processors/ConstantDispatcher.html",
    "revision": "253f5d7c12a6b77261482593e5b0a093"
  },
  {
    "url": "plugins/processors/DataType.html",
    "revision": "cee0ea73cd72ac8300ae3e452c38b92d"
  },
  {
    "url": "plugins/processors/Deadzone.html",
    "revision": "bbf69c8230bba221886b817d1aa6d829"
  },
  {
    "url": "plugins/processors/Decimation.html",
    "revision": "fd247d7a9b2b76e418a11f674ae0dc92"
  },
  {
    "url": "plugins/processors/Delay.html",
    "revision": "5b3045dd3ea1c46026cd2e0073d6a5bc"
  },
  {
    "url": "plugins/processors/Derivative.html",
    "revision": "de58e4a4151c390da9ebb513da61e766"
  },
  {
    "url": "plugins/processors/Differentiate.html",
    "revision": "be645360c611289d74370c774aa1926e"
  },
  {
    "url": "plugins/processors/Dissimilarity.html",
    "revision": "44c000fd20dd9e4e6588bb6cdc2e0b99"
  },
  {
    "url": "plugins/processors/DoubleToString.html",
    "revision": "2f579e18d6fbbfea8cded0c0353fdf17"
  },
  {
    "url": "plugins/processors/ECMAScriptInterpreter.html",
    "revision": "8bb91d1983bdbbce07b2e56929ca15f1"
  },
  {
    "url": "plugins/processors/eg_example.html",
    "revision": "7fbf5825391f7e491b44867e230ab5fd"
  },
  {
    "url": "plugins/processors/EventBlock.html",
    "revision": "aacd2fe2207ac78fbf12d93fcbf42a47"
  },
  {
    "url": "plugins/processors/EventCascade.html",
    "revision": "40499e77b0a6139ce67d8a4286236eff"
  },
  {
    "url": "plugins/processors/EventCounter.html",
    "revision": "8dc985d3a218c00ff1f1f40421d98d08"
  },
  {
    "url": "plugins/processors/EventDelay.html",
    "revision": "0adb4e5f633be31b875895e3962b3665"
  },
  {
    "url": "plugins/processors/EventDispatcher.html",
    "revision": "c44873ccd25ea44d82112924db9ebcea"
  },
  {
    "url": "plugins/processors/EventFlipFlop.html",
    "revision": "0da5bf7997811eeb857b594256f7a30a"
  },
  {
    "url": "plugins/processors/EventRouter.html",
    "revision": "315946cfe204902c01490ec3d5351d94"
  },
  {
    "url": "plugins/processors/EventStateMachine.html",
    "revision": "452d58d677571f1379e0a8222e249e39"
  },
  {
    "url": "plugins/processors/FABI.html",
    "revision": "aee7844f06c337c0f80583f338fefe05"
  },
  {
    "url": "plugins/processors/FabiCronusMax.html",
    "revision": "ec835cda114332af916c7400968b4ebe"
  },
  {
    "url": "plugins/processors/Filter.html",
    "revision": "65e5de18b39df8ce2bda154371df13fd"
  },
  {
    "url": "plugins/processors/FS20CommandInterpreter.html",
    "revision": "78138c088ea9552965ba251b0176514f"
  },
  {
    "url": "plugins/processors/HRVAnalysis.html",
    "revision": "29d1d150a43ba4445f2ddcf9bbc90ab9"
  },
  {
    "url": "plugins/processors/IIRFilter.html",
    "revision": "b5206e1c0f8594b2770b9fa9391903e9"
  },
  {
    "url": "plugins/processors/Integrate.html",
    "revision": "6278ee69d3e500490b31d80b2141f48d"
  },
  {
    "url": "plugins/processors/IntToString.html",
    "revision": "1238850961025ee7d09ee81029f49dc0"
  },
  {
    "url": "plugins/processors/IrMicro.html",
    "revision": "b50c0df95f41b8461c1c676f261d7994"
  },
  {
    "url": "plugins/processors/MathEvaluator.html",
    "revision": "3ee17d5c8af175c99c185cbcb8d332e2"
  },
  {
    "url": "plugins/processors/MinMax.html",
    "revision": "088f52d9df81d5194ed7cf0e19fdab99"
  },
  {
    "url": "plugins/processors/MotionAnalysis.html",
    "revision": "642dd1461ebd3d107dab1ca25287ed46"
  },
  {
    "url": "plugins/processors/MultiSource.html",
    "revision": "a9a7af3fa2190bab713edfa1ad35afec"
  },
  {
    "url": "plugins/processors/MultiSourceString.html",
    "revision": "1133129a38fec332742e91e386fc4312"
  },
  {
    "url": "plugins/processors/NeuralNetworkLoader.html",
    "revision": "c381071917363eb145f3ffa5231439f5"
  },
  {
    "url": "plugins/processors/NexusConnector.html",
    "revision": "c69df180fcf7fc799279261c1e19840d"
  },
  {
    "url": "plugins/processors/OneEventManyActions.html",
    "revision": "78d50bb5d2f302610a133ae3538515ee"
  },
  {
    "url": "plugins/processors/OpenHAB.html",
    "revision": "56a5bf6c61b8324b7fb2920d0e8bba4a"
  },
  {
    "url": "plugins/processors/OscGestureFollower.html",
    "revision": "3e59d5ecc2562c45712c0c43c18e2709"
  },
  {
    "url": "plugins/processors/OskaExternalScanning1D.html",
    "revision": "bec57d07c3817b60cd0cf6852acd94de"
  },
  {
    "url": "plugins/processors/OskaExternalScanning2D.html",
    "revision": "60af60a531c0f98821e0ac52a1a1b3fc"
  },
  {
    "url": "plugins/processors/OskaInternalScanning.html",
    "revision": "6abbf3237a1622d1a92bdd871a5facc5"
  },
  {
    "url": "plugins/processors/PathMultiplexer.html",
    "revision": "d55e3188a1b0e7f529b742925ba61f99"
  },
  {
    "url": "plugins/processors/Pathselector.html",
    "revision": "81701630f1c10f9bd1dd06649190572c"
  },
  {
    "url": "plugins/processors/PeakDetector.html",
    "revision": "dbe7a0fecf863a9fa61bd2059674a805"
  },
  {
    "url": "plugins/processors/ProtocolSSVEPTrain.html",
    "revision": "7f1a52fa54dd8b3182454d087a504f37"
  },
  {
    "url": "plugins/processors/Quantizer.html",
    "revision": "edcacb95251e9824bbafd4167d705a3b"
  },
  {
    "url": "plugins/processors/RegularExpression.html",
    "revision": "12892acbac0587b77e2cf660c21a32f5"
  },
  {
    "url": "plugins/processors/RelativeMoveSampler.html",
    "revision": "ca94c8e339517ed74224e6c1e81efa55"
  },
  {
    "url": "plugins/processors/SampleAndHold.html",
    "revision": "e6980ad98f1427f2bfee4e6601145850"
  },
  {
    "url": "plugins/processors/Sampler.html",
    "revision": "0d64ba6d10c7153efe0901eb9e28863f"
  },
  {
    "url": "plugins/processors/SerialPort.html",
    "revision": "fcf7d8573e4fecb88bbd5aa5758a9860"
  },
  {
    "url": "plugins/processors/SerialSender.html",
    "revision": "f05d06f1285288f24ee81f65a8cf6b74"
  },
  {
    "url": "plugins/processors/SignalTranslation.html",
    "revision": "52ddfe57bbd672f6a59f22181f19b0d2"
  },
  {
    "url": "plugins/processors/SpeechProcessor.html",
    "revision": "844c69862d772c872be5d5bde5f2b3fc"
  },
  {
    "url": "plugins/processors/SSVEPDetect.html",
    "revision": "b8bdca83352cbbcc5c50814aed1ce866"
  },
  {
    "url": "plugins/processors/StringAppend.html",
    "revision": "f46a6247436015e46c64471f58e86f90"
  },
  {
    "url": "plugins/processors/StringDelay.html",
    "revision": "b7e3e191c1f02bf5fd9369f287497d82"
  },
  {
    "url": "plugins/processors/StringDispatcher.html",
    "revision": "8ab2780e026a6a8e6046d34c3e8e40a6"
  },
  {
    "url": "plugins/processors/StringExpander.html",
    "revision": "40daa36971b49420e56675664b106324"
  },
  {
    "url": "plugins/processors/StringFilter.html",
    "revision": "40bb7a328a4831bbfe03d508406cc59b"
  },
  {
    "url": "plugins/processors/StringFormatter.html",
    "revision": "9d2f164d96e011c03348f68e83f49556"
  },
  {
    "url": "plugins/processors/StringPathMultiplexer.html",
    "revision": "171e35ae5e7099014906e23a038d6881"
  },
  {
    "url": "plugins/processors/StringPathSelector.html",
    "revision": "4f891ce13189d57f69429e38563c63fe"
  },
  {
    "url": "plugins/processors/StringSplitter.html",
    "revision": "8e16143bf6113a39f821b33c038e1219"
  },
  {
    "url": "plugins/processors/StringToDouble.html",
    "revision": "75690d38c18fbbcd7ea964ce705ed2a1"
  },
  {
    "url": "plugins/processors/StringToInt.html",
    "revision": "d2be6f955640d1184ba655356facdd47"
  },
  {
    "url": "plugins/processors/TextSender.html",
    "revision": "97c9572c6a677db2293bbcb911d41104"
  },
  {
    "url": "plugins/processors/Threshold.html",
    "revision": "cb8561b1918c6012d530ec3328c64e10"
  },
  {
    "url": "plugins/processors/UniversalRemoteControl.html",
    "revision": "935b248a9adf3cbbd6f63a5f1b863d23"
  },
  {
    "url": "plugins/processors/WebSocket.html",
    "revision": "4ba1e1e5b285b2db65a9a177495afc5a"
  },
  {
    "url": "plugins/processors/Yaak.html",
    "revision": "8508984b2f1aeb040bf71f72832cee09"
  },
  {
    "url": "plugins/sensors/Acceleration.html",
    "revision": "ddaff04f49bb67f80ab93429d7dbcb06"
  },
  {
    "url": "plugins/sensors/AnalogIn.html",
    "revision": "8a3df702309062ff9615e6d3fb36a8da"
  },
  {
    "url": "plugins/sensors/AutostartEvent.html",
    "revision": "a8703d10e9aa9cc1f8e0bd9a7ec1e108"
  },
  {
    "url": "plugins/sensors/ButtonGrid.html",
    "revision": "b71136ea9e7f41aa16a7568b95276643"
  },
  {
    "url": "plugins/sensors/CellBoard.html",
    "revision": "cc2e005c67626825291434a3ea67b17f"
  },
  {
    "url": "plugins/sensors/DigitalIn.html",
    "revision": "e9797388a33284ec41dee5af64624d04"
  },
  {
    "url": "plugins/sensors/EditBox.html",
    "revision": "23ff8431702d7d80490ec5dc8fc6851e"
  },
  {
    "url": "plugins/sensors/Enobio.html",
    "revision": "74da3cb83ebafeba6b6b2f3628a0c2e5"
  },
  {
    "url": "plugins/sensors/EOG.html",
    "revision": "3d5963791877a6498840e8305854b786"
  },
  {
    "url": "plugins/sensors/EShoe.html",
    "revision": "bff7bff0a7c2c25d8e77b8f1074bd6ee"
  },
  {
    "url": "plugins/sensors/EventGenerator.html",
    "revision": "bae65bfa5eee8a61956704f95e0349dd"
  },
  {
    "url": "plugins/sensors/Eyetracker.html",
    "revision": "3f2286a12f9b9567d60a298bc1a6403b"
  },
  {
    "url": "plugins/sensors/EyeTribe.html",
    "revision": "3ee4b919994d7b46f7345ceb9c6c22f5"
  },
  {
    "url": "plugins/sensors/EyeX.html",
    "revision": "88391d1a58c0473807fdeff1687fd97b"
  },
  {
    "url": "plugins/sensors/FacetrackerCLM.html",
    "revision": "00d2af94f083c09a13218f0e2f043a89"
  },
  {
    "url": "plugins/sensors/FacetrackerLK.html",
    "revision": "c96a429ee1a722e20672a113b4a9c246"
  },
  {
    "url": "plugins/sensors/FolderBrowser.html",
    "revision": "e23fc5e92a513a311658f90cddeb9e1d"
  },
  {
    "url": "plugins/sensors/FS20Receiver.html",
    "revision": "ae6647cec89d1fa667cb8fee771e1f7d"
  },
  {
    "url": "plugins/sensors/HeadPositionHC.html",
    "revision": "d68c434b657093b0620faf6023be140c"
  },
  {
    "url": "plugins/sensors/HoverPanel.html",
    "revision": "d3fb055c0d52565e1da4afa571d2c5b6"
  },
  {
    "url": "plugins/sensors/IntelRealSense.html",
    "revision": "67726d1507a1599fc44301230dee721b"
  },
  {
    "url": "plugins/sensors/JoystickCapture.html",
    "revision": "806d063c3f1d74424adac66bc0cc165f"
  },
  {
    "url": "plugins/sensors/KeyboardCapture.html",
    "revision": "7a3d0616f8b408701fda5be6c64c2ef9"
  },
  {
    "url": "plugins/sensors/KeyCapture.html",
    "revision": "c5859fdaed0b8d0db1edc798c3db2c02"
  },
  {
    "url": "plugins/sensors/Kinect.html",
    "revision": "178b7e8140b42fe9b6327e2ec5807bc0"
  },
  {
    "url": "plugins/sensors/KinectJ4K.html",
    "revision": "e71d57842b7b76420f552b2ab88fb995"
  },
  {
    "url": "plugins/sensors/LegacyAnalogIn.html",
    "revision": "84044d4534207d4aabb33b4450cee399"
  },
  {
    "url": "plugins/sensors/LegacyDigitalIn.html",
    "revision": "aadaed790f9f073b5502486bbbf01e90"
  },
  {
    "url": "plugins/sensors/Lightscore.html",
    "revision": "9adb533d53b5de49becc413a850f7a94"
  },
  {
    "url": "plugins/sensors/LineReader.html",
    "revision": "00c65b19eceaa6dd20a9446a2cfdbdc9"
  },
  {
    "url": "plugins/sensors/Lipmouse.html",
    "revision": "2ee31f78463ee2399d4a15e488be73fd"
  },
  {
    "url": "plugins/sensors/LipmouseIR.html",
    "revision": "ddb95d09d0a4f1904b3bcaecf2a7859f"
  },
  {
    "url": "plugins/sensors/MicGPI.html",
    "revision": "74f627aae4d754d2294dc00d98e7b6d7"
  },
  {
    "url": "plugins/sensors/MouseCapture.html",
    "revision": "360793a15bfb24c667e57d92a2b25694"
  },
  {
    "url": "plugins/sensors/OpenBCI.html",
    "revision": "b90577cdcd29428f46d6493a8b288755"
  },
  {
    "url": "plugins/sensors/OpenVibe.html",
    "revision": "b1f0b81e249a0c2e2e5db591306e03d8"
  },
  {
    "url": "plugins/sensors/OscServer.html",
    "revision": "bb1e81b98cc0fe471983164f4b256877"
  },
  {
    "url": "plugins/sensors/P2_Parser.html",
    "revision": "983b8c3880eb849ae26f4b0606bac4b3"
  },
  {
    "url": "plugins/sensors/PlatformAnalogIn.html",
    "revision": "3343d998f1c27aa86550d459e46ae2f2"
  },
  {
    "url": "plugins/sensors/PlatformDigitalIn.html",
    "revision": "b29da89a228ecd34c5e99146b7f1b5db"
  },
  {
    "url": "plugins/sensors/Proximity.html",
    "revision": "7d45953189aace7292e3f3ebf2e257eb"
  },
  {
    "url": "plugins/sensors/RandomNumber.html",
    "revision": "4c03803ebb715923eea15145f2605884"
  },
  {
    "url": "plugins/sensors/RazorIMU.html",
    "revision": "413abc3a3d235ed8dc16e8c0620b6ceb"
  },
  {
    "url": "plugins/sensors/ReadCSV.html",
    "revision": "35e0f5251a32cc8ec0369ae1342f0a3d"
  },
  {
    "url": "plugins/sensors/ReadEDF.html",
    "revision": "4d42f98d7706884d71f2ff2f24767415"
  },
  {
    "url": "plugins/sensors/RFIDReader.html",
    "revision": "2ca115edf9931b1e2bf946990925bef1"
  },
  {
    "url": "plugins/sensors/Sensorboard.html",
    "revision": "549cf651036f83f3ad440d1e6a2992f4"
  },
  {
    "url": "plugins/sensors/SignalGenerator.html",
    "revision": "8b5c42639e4ba29b101343ae3def8728"
  },
  {
    "url": "plugins/sensors/SignalShaper.html",
    "revision": "8385428e90bf5b55b87c75be03a25ebe"
  },
  {
    "url": "plugins/sensors/Slider.html",
    "revision": "414003ac2b4dfad162e10ea0c39339c9"
  },
  {
    "url": "plugins/sensors/SpaceNavigator3DMouse.html",
    "revision": "f8746f79fe79b12de24c428d5f430469"
  },
  {
    "url": "plugins/sensors/TextfieldReader.html",
    "revision": "0cefd993a290991ac037cbe276ca8b30"
  },
  {
    "url": "plugins/sensors/Timer.html",
    "revision": "10f4dd7e985c2c8d50d286ca8f0e1e68"
  },
  {
    "url": "plugins/sensors/Tobii4CHeadTracker.html",
    "revision": "05a5105379797247bab628e7e26972c7"
  },
  {
    "url": "plugins/sensors/TobiTic.html",
    "revision": "f021df534369a10e5f46ebdc883e2715"
  },
  {
    "url": "plugins/sensors/TuioReactivision.html",
    "revision": "88b159676f8b311e03b99d435bbbade3"
  },
  {
    "url": "plugins/sensors/WiiMote.html",
    "revision": "ed381f3a1e9cd3679a020e5ee58f85cf"
  },
  {
    "url": "plugins/sensors/XFacetrackerLK.html",
    "revision": "02e4b456336e116fb12f4ba12887e1a5"
  },
  {
    "url": "solutions/AAC-Basic.html",
    "revision": "20611bc7044aef5504e7ae5d5f13e046"
  },
  {
    "url": "solutions/Camera-Mouse.html",
    "revision": "85c2933f35c3bf963cb0ec7f49d31bff"
  },
  {
    "url": "solutions/Eye-Tracking-Mouse.html",
    "revision": "c62e86c0443f5b8376d34495eca0a07c"
  },
  {
    "url": "solutions/Head-Sound.html",
    "revision": "9699ed52adda9514cc9dd166c96db7d2"
  },
  {
    "url": "solutions/index.html",
    "revision": "2597add35bc67139405bc54cf573d3b3"
  },
  {
    "url": "solutions/Switch-Mouse.html",
    "revision": "a3b8e019de80dbe3a72a67174c3a6f28"
  },
  {
    "url": "webapps/AT-solution-IDE.html",
    "revision": "ef29e943eb902cd1c854afb9db892b4a"
  },
  {
    "url": "webapps/Plugin-IDE.html",
    "revision": "89e6ed13c0ef6d017f8142c92c6575e7"
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
