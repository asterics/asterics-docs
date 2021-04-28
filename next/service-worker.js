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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f24786b9f4fe79449486918057c8305d"
  },
  {
    "url": "assets/css/0.styles.f6ecddf6.css",
    "revision": "b4a6226a049a3340bb7b7f68a4838dca"
  },
  {
    "url": "assets/fonts/fa-brands-400.099a9556.woff",
    "revision": "099a9556e1a63ece24f8a99859c94c7d"
  },
  {
    "url": "assets/fonts/fa-brands-400.30cc681d.eot",
    "revision": "30cc681d4487d2f561035ba24a68c629"
  },
  {
    "url": "assets/fonts/fa-brands-400.3b89dd10.ttf",
    "revision": "3b89dd103490708d19a95adcae52210e"
  },
  {
    "url": "assets/fonts/fa-brands-400.f7307680.woff2",
    "revision": "f7307680c7fe85959f3ecf122493ea7d"
  },
  {
    "url": "assets/fonts/fa-regular-400.1f77739c.ttf",
    "revision": "1f77739ca9ff2188b539c36f30ffa2be"
  },
  {
    "url": "assets/fonts/fa-regular-400.7124eb50.woff",
    "revision": "7124eb50fc8227c78269f2d995637ff5"
  },
  {
    "url": "assets/fonts/fa-regular-400.7630483d.eot",
    "revision": "7630483dd4b0c48639d2ac54a894b450"
  },
  {
    "url": "assets/fonts/fa-regular-400.f0f82301.woff2",
    "revision": "f0f8230116992e521526097a28f54066"
  },
  {
    "url": "assets/fonts/fa-solid-900.1042e8ca.eot",
    "revision": "1042e8ca1ce821518a2d3e7055410839"
  },
  {
    "url": "assets/fonts/fa-solid-900.605ed792.ttf",
    "revision": "605ed7926cf39a2ad5ec2d1f9d391d3d"
  },
  {
    "url": "assets/fonts/fa-solid-900.9fe5a17c.woff",
    "revision": "9fe5a17c8ab036d20e6c5ba3fd2ac511"
  },
  {
    "url": "assets/fonts/fa-solid-900.e8a427e1.woff2",
    "revision": "e8a427e15cc502bef99cfd722b37ea98"
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
    "url": "assets/img/action_asterics_en.d893206a.jpg",
    "revision": "d893206a7aecc83b1b5fe5c9e4627c51"
  },
  {
    "url": "assets/img/action_collectelement_en.7077e8a1.jpg",
    "revision": "7077e8a129737f4e2d3f6ccf7a722f79"
  },
  {
    "url": "assets/img/action_fillprediction_en.b994d042.jpg",
    "revision": "b994d042e8e8e6316b9dc2641930927c"
  },
  {
    "url": "assets/img/action_navigate_en.ad33c37c.jpg",
    "revision": "ad33c37c1ab8b599eb3a353f771963db"
  },
  {
    "url": "assets/img/action_speak_custom_en.d4cc8311.jpg",
    "revision": "d4cc8311de5abaa8700b1c057edd9b61"
  },
  {
    "url": "assets/img/action_speak_label_en.aa02d84b.jpg",
    "revision": "aa02d84b99e65ffb1c276258554772f4"
  },
  {
    "url": "assets/img/action_webradio_en.7231dd3b.jpg",
    "revision": "7231dd3b6ea55d1878c938666e1c3037"
  },
  {
    "url": "assets/img/add_offline_en.3ac438a3.jpg",
    "revision": "3ac438a3441d4373dd26968cc7f43116"
  },
  {
    "url": "assets/img/add_row.d44acf2c.gif",
    "revision": "d44acf2c456eddf3e470236082cc49bc"
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
    "url": "assets/img/amazonechocontrol-addthing-amazonaccount.071ee87a.png",
    "revision": "071ee87acc55c7b6ce1be3d96a90f50f"
  },
  {
    "url": "assets/img/amazonechocontrol-linkchannels.0c69eef9.png",
    "revision": "0c69eef937c088403dd8d88aca61e27b"
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
    "url": "assets/img/asterics-action-are_en.663cadf0.png",
    "revision": "663cadf0b372442d41d430a621970b47"
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
    "url": "assets/img/collect_delete_c.a3d47cfc.gif",
    "revision": "a3d47cfc098c679368d82d27dfcd3674"
  },
  {
    "url": "assets/img/collect_delete.3acb3ae6.gif",
    "revision": "3acb3ae6ba5f8e0ed1b7de3629f482b4"
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
    "url": "assets/img/Computer-Vision-BuildPath.ccb70d21.jpg",
    "revision": "ccb70d21ca1ab5ff8b95bdf84b389f60"
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
    "url": "assets/img/data_storage_layers_en.f40ca1cb.png",
    "revision": "f40ca1cb0e031ed967a12a788f4303d7"
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
    "url": "assets/img/dictionary_edit_en.9b61f116.jpg",
    "revision": "9b61f116e3ae8012a841b23b5f4963fb"
  },
  {
    "url": "assets/img/dictionary_import_en.ab91d739.jpg",
    "revision": "ab91d7395cc7a6e4f100ac8667593cb9"
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
    "url": "assets/img/drag_metacom.feb6ef75.gif",
    "revision": "feb6ef75034a0d2d4acc523afa6e597a"
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
    "url": "assets/img/edit_actions_en.cfa34a8c.jpg",
    "revision": "cfa34a8c5ee70d1e547e7f6ada1f0c89"
  },
  {
    "url": "assets/img/edit_element_menu_en.1b80ddce.jpg",
    "revision": "1b80ddceb43c558dc3f5119579184d3a"
  },
  {
    "url": "assets/img/edit_en.270d682f.jpg",
    "revision": "270d682f5eafcdbba4a6e280d98d9cea"
  },
  {
    "url": "assets/img/edit_grid_element_en.169154d1.jpg",
    "revision": "169154d1a8c073f6c8bc730fb3cb347d"
  },
  {
    "url": "assets/img/edit_moremenu_en.cf6d88f2.jpg",
    "revision": "cf6d88f29bf0e78399ec0c400dab00cc"
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
    "url": "assets/img/fa-brands-400.ba7ed552.svg",
    "revision": "ba7ed552362f64d30f6d844974d89114"
  },
  {
    "url": "assets/img/fa-regular-400.0bb42845.svg",
    "revision": "0bb428459c8ecfa61b22a03def1706e6"
  },
  {
    "url": "assets/img/fa-solid-900.376c1f97.svg",
    "revision": "376c1f97f6553dea1ca9b3f9081889bd"
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
    "url": "assets/img/fhtw-logo.svg",
    "revision": "df12fe4e70e7e86bdd139d5ab6aeee6a"
  },
  {
    "url": "assets/img/filewriter.747c3825.jpg",
    "revision": "747c38255271f7edce0f0f51347651b7"
  },
  {
    "url": "assets/img/fill_gaps.cc2b28c6.gif",
    "revision": "cc2b28c63dac73d6ab98c2180b1fd694"
  },
  {
    "url": "assets/img/fill_predictions.b9cbc05d.gif",
    "revision": "b9cbc05d04463044ac179aff8f89faf0"
  },
  {
    "url": "assets/img/fill_predictions2.22eb1354.gif",
    "revision": "22eb1354542bcd5b20fdec966065cecc"
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
    "url": "assets/img/global-grid-communikate20.8730820c.png",
    "revision": "8730820c35bb76f0342ce0ccd5ee89ea"
  },
  {
    "url": "assets/img/gmailshortcuts.23822e29.jpg",
    "revision": "23822e294bb54d44b8a37a6ac4ed3b61"
  },
  {
    "url": "assets/img/grid_default_en.e1d52b18.jpg",
    "revision": "e1d52b1836c495e96fc6d7e31cbc86fd"
  },
  {
    "url": "assets/img/grid-create-add-cells-02.33f7733b.png",
    "revision": "33f7733b6e33860df21ad47c703bc750"
  },
  {
    "url": "assets/img/grid-create-add-cells-03.848222d7.png",
    "revision": "848222d73000f25d01bc5da365632183"
  },
  {
    "url": "assets/img/grid-customize-01.c458bb02.png",
    "revision": "c458bb027dc01548d9f5b1a291003563"
  },
  {
    "url": "assets/img/grid-customize-edit-cell-01.91cf0c1f.png",
    "revision": "91cf0c1fb1c9f15d75d9cec688122060"
  },
  {
    "url": "assets/img/grid-customize-edit-cell-02b.953a85e4.png",
    "revision": "953a85e44bbc266ba8f02924de345bf6"
  },
  {
    "url": "assets/img/grid-customize-edit-cell-03.ac0a8311.png",
    "revision": "ac0a83112782fbc84fb19b713f6629ed"
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
    "url": "assets/img/input_channel_are_en.43aab746.jpg",
    "revision": "43aab746796ab4f9ed4b3c4c23d4dd0e"
  },
  {
    "url": "assets/img/input_channel_keyboard_en.fed8daf5.jpg",
    "revision": "fed8daf52c19646129b71a5716bb1ca7"
  },
  {
    "url": "assets/img/input_options_general_en.264c9e4c.jpg",
    "revision": "264c9e4cc7d1bed9d5522950eb7a73db"
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
    "url": "assets/img/ki-i-logo.png",
    "revision": "0d10964dbc2675c2ec353452f3904c28"
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
    "url": "assets/img/lipmouse.ac98bdc4.jpg",
    "revision": "ac98bdc4af8fcf7db093e1d2f2339ca0"
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
    "url": "assets/img/login_en.ea0b3060.jpg",
    "revision": "ea0b3060eb9693371639bb4a2defc762"
  },
  {
    "url": "assets/img/ma23-logo.compact.svg",
    "revision": "12f211b434af9d0b7a265a89294dc04b"
  },
  {
    "url": "assets/img/ma23-logo.svg",
    "revision": "a1c457e83eb5228a503b56803bd334e6"
  },
  {
    "url": "assets/img/main_en.174e09fa.jpg",
    "revision": "174e09fa620ec9c6be16f7bb64a644ac"
  },
  {
    "url": "assets/img/main.a269c26b.png",
    "revision": "a269c26b06b0429a9b2c71601e2467e2"
  },
  {
    "url": "assets/img/manage_dict_en.03fca844.jpg",
    "revision": "03fca844938d229ffc2b96ce588bf767"
  },
  {
    "url": "assets/img/manage_grids_en.0f150f37.jpg",
    "revision": "0f150f3798d197aeaa8857fda1ff36a2"
  },
  {
    "url": "assets/img/manage_grids_more_en.51d5343e.jpg",
    "revision": "51d5343e07246e6241a3ca6f6dd7d1d5"
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
    "url": "assets/img/openhab_overview.c07c28f2.png",
    "revision": "c07c28f2b550612acea9590c9300372c"
  },
  {
    "url": "assets/img/openhab-show-synced-control.2ac0761e.gif",
    "revision": "2ac0761ec64e96b6a43623098a7febde"
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
    "url": "assets/img/philipshue_properties.aab9dfb0.png",
    "revision": "aab9dfb01378b753f325ecb8437b0923"
  },
  {
    "url": "assets/img/philipshue.66692d2e.png",
    "revision": "66692d2e7d381d96059b1a99764a9aeb"
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
    "url": "assets/img/register_online_en.1f0b88fe.jpg",
    "revision": "1f0b88fe69a612edf0a1312379e5071e"
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
    "url": "assets/img/remove_row.993c916a.gif",
    "revision": "993c916a0643c2fff4bf09f327a0976b"
  },
  {
    "url": "assets/img/Resource-Handling-BuildPath.c215c1df.jpg",
    "revision": "c215c1df7d8e0a085e4605556c07c19c"
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
    "url": "assets/img/scanning_horizontal.b306105b.gif",
    "revision": "b306105b9687ed3f2c17951abdb1b4fd"
  },
  {
    "url": "assets/img/scanning_non_binary.f5d202a9.gif",
    "revision": "f5d202a94991aae5c7ca118bd6101322"
  },
  {
    "url": "assets/img/scanning_vertical.9edd8062.gif",
    "revision": "9edd80622a70494d54eca1a2066b5782"
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
    "url": "assets/img/StudyATHome-logo.svg",
    "revision": "9a3eb46cca02bbdbbbc0f9d685fc639c"
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
    "url": "assets/img/torades-logo.png",
    "revision": "23f4d33fed25123e51903cd5f2f071e7"
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
    "url": "assets/img/Websocket-echo-connection.441c16d0.jpg",
    "revision": "441c16d0d2d153a08269087ce66eb0c7"
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
    "url": "assets/js/1.fbf61981.js",
    "revision": "3f55fd132af8d067747b136ae44515d9"
  },
  {
    "url": "assets/js/10.f3c95c38.js",
    "revision": "00aaf626a617f5ce5fcf0fe3ca3b6375"
  },
  {
    "url": "assets/js/100.93d82726.js",
    "revision": "c2b8ea93e37384a3fecb28e0f896bdf0"
  },
  {
    "url": "assets/js/101.a0621eab.js",
    "revision": "750ba8a912596384d38884dcf6aa640a"
  },
  {
    "url": "assets/js/102.9a07bb14.js",
    "revision": "80815b5248fbcb5196a74ed9d4e731f2"
  },
  {
    "url": "assets/js/103.0672c691.js",
    "revision": "33b8f8aec778171ff31854cbf6a07401"
  },
  {
    "url": "assets/js/104.f1b61dda.js",
    "revision": "7e565ce0ed8d1aedd3c9deae217359c3"
  },
  {
    "url": "assets/js/105.ae40819b.js",
    "revision": "c040e3bc753bf9073166daf5c09f65ae"
  },
  {
    "url": "assets/js/106.8223f09f.js",
    "revision": "059395e417e0e0e72cdb34fde2b53fb8"
  },
  {
    "url": "assets/js/107.e6e2cf19.js",
    "revision": "8e6aed33d167e7a059e163af5faaccb4"
  },
  {
    "url": "assets/js/108.2295a38f.js",
    "revision": "13dea9738e1d35272cd1399659d18d21"
  },
  {
    "url": "assets/js/109.fb0c06e4.js",
    "revision": "3e6d84f297f8b9f65c9aff3f2af49e84"
  },
  {
    "url": "assets/js/11.bacff9d5.js",
    "revision": "fac491e5bec6a62e55ad43061f9814c7"
  },
  {
    "url": "assets/js/110.1d4f3c51.js",
    "revision": "9f1aae73aeac919941869bd8d960b423"
  },
  {
    "url": "assets/js/111.2b51d06a.js",
    "revision": "05dfbe5c5380fb4bc5a8c90dd6fe1a5c"
  },
  {
    "url": "assets/js/112.e78b91f8.js",
    "revision": "1101013746a66b5639a9e4f956f30dd0"
  },
  {
    "url": "assets/js/113.7999ae3e.js",
    "revision": "7389169ed1cb955e977f055b102cb961"
  },
  {
    "url": "assets/js/114.3ed5ffae.js",
    "revision": "89fa84b3cc0d0fe7675cb3ee92e01dcb"
  },
  {
    "url": "assets/js/115.d185cc74.js",
    "revision": "775bed31328dbc52d26a12023445cbf0"
  },
  {
    "url": "assets/js/116.87f8d783.js",
    "revision": "a7761d53647a62ab4a52b898541a99e3"
  },
  {
    "url": "assets/js/117.a96c1503.js",
    "revision": "ea2cab5bde31185733fb008ed4fac63f"
  },
  {
    "url": "assets/js/118.ab3e34f9.js",
    "revision": "30d2a9f87e4417a9f5069c0ebf63ba58"
  },
  {
    "url": "assets/js/119.7250bad7.js",
    "revision": "e895af3c301c8aaf87870dbdc9f81c64"
  },
  {
    "url": "assets/js/12.6ecf0051.js",
    "revision": "d5ab609afeb49a0a771775ae6d6262fb"
  },
  {
    "url": "assets/js/120.aa9606d5.js",
    "revision": "6e503aecde4ecd19710aa1493251f2bd"
  },
  {
    "url": "assets/js/121.ebeb3c68.js",
    "revision": "b95e6e8a98545998aac671e9610ed690"
  },
  {
    "url": "assets/js/122.ce26150b.js",
    "revision": "77460a5ffaf23d45a7f3b54025711987"
  },
  {
    "url": "assets/js/123.31432ed6.js",
    "revision": "192157e6601a241511d7015e6380e63d"
  },
  {
    "url": "assets/js/124.b8b60efa.js",
    "revision": "ac2c8c2e02350161b0ae4c2271770b46"
  },
  {
    "url": "assets/js/125.dd917db4.js",
    "revision": "a1c7cbfe92c949e9a9a42acda1b01e20"
  },
  {
    "url": "assets/js/126.38f7cf4a.js",
    "revision": "8a2a67bb3e704d6721ba4a3018c097a2"
  },
  {
    "url": "assets/js/127.48b4242a.js",
    "revision": "72ee0f3ca7ce874c0ebc3ac0f6b5e226"
  },
  {
    "url": "assets/js/128.62292f74.js",
    "revision": "13417b293eaf0bd0e456b925b4fcebf8"
  },
  {
    "url": "assets/js/129.0724a67b.js",
    "revision": "5c9052a3dedc5c110ad05b9c7ac3994f"
  },
  {
    "url": "assets/js/13.56203678.js",
    "revision": "f9a79c2675c8f2b0abadcbc2536cb128"
  },
  {
    "url": "assets/js/130.a61425ea.js",
    "revision": "e95c9682699b75e03ccb6ec019ba1b04"
  },
  {
    "url": "assets/js/131.211e0b59.js",
    "revision": "a9469e8f1a12591df6263b6e88fb04e0"
  },
  {
    "url": "assets/js/132.dd8158ea.js",
    "revision": "54949e23b688184fcace3ef7edeac92a"
  },
  {
    "url": "assets/js/133.2fd49d0a.js",
    "revision": "1925cbf2609d6ff5b3c201fff9af21f8"
  },
  {
    "url": "assets/js/134.c8ecad47.js",
    "revision": "83f54253ef3f9e80f11570aaab065406"
  },
  {
    "url": "assets/js/135.7100b1fa.js",
    "revision": "6ed3df481017e00d869d0b14be9c9bcc"
  },
  {
    "url": "assets/js/136.c975a2ac.js",
    "revision": "609f279eface5dd8c602fc5d73d9fe6e"
  },
  {
    "url": "assets/js/137.5b2c3f7a.js",
    "revision": "f454e82510ffb4d1b9e740b4af4ca5ef"
  },
  {
    "url": "assets/js/138.a16c8c41.js",
    "revision": "14e140d563c8db0a928d9064fc11db36"
  },
  {
    "url": "assets/js/139.0350adf7.js",
    "revision": "1bde0e2f9c79789220b5e0c1dc90c1d9"
  },
  {
    "url": "assets/js/14.d23bcff7.js",
    "revision": "ad0ab8a100c3cb1ef6cfb8045b68d6e1"
  },
  {
    "url": "assets/js/140.3d32de0c.js",
    "revision": "4b865da8f238fdd5ca9324f0adb0d73c"
  },
  {
    "url": "assets/js/141.2c64904e.js",
    "revision": "0ca0107e5133f74b9398d73e6fd9b761"
  },
  {
    "url": "assets/js/142.4b4ccadf.js",
    "revision": "e077561a652c9f12ae525e40cb4586ba"
  },
  {
    "url": "assets/js/143.7b27c815.js",
    "revision": "ef182f8668e688133e177bf4ed556633"
  },
  {
    "url": "assets/js/144.a7cc509e.js",
    "revision": "00fc2adbb1bf8c50f277d156eba4efa0"
  },
  {
    "url": "assets/js/145.d20f7e7c.js",
    "revision": "1576b28ed643dad2b4f63b44dc9088c1"
  },
  {
    "url": "assets/js/146.7e8899b5.js",
    "revision": "e8341ae175f07450ee9aa3a41f7569e9"
  },
  {
    "url": "assets/js/147.1f514a7e.js",
    "revision": "500c0da16985662bd50d891526b6be37"
  },
  {
    "url": "assets/js/148.30fc0ff0.js",
    "revision": "b8cf25dfc541032744543367c3d01271"
  },
  {
    "url": "assets/js/149.6425d7f3.js",
    "revision": "841282af9bc2f92b4bec3c57f5555228"
  },
  {
    "url": "assets/js/15.fc90f049.js",
    "revision": "cf576650aa08ee79091c8c64345dae6f"
  },
  {
    "url": "assets/js/150.3033f6db.js",
    "revision": "b0f899551f55b6111df82a0fc1f980c0"
  },
  {
    "url": "assets/js/151.a94f92e3.js",
    "revision": "a9fe550e1148ea6fd8f55429990aa353"
  },
  {
    "url": "assets/js/152.013458da.js",
    "revision": "845e3d1a5efe0b8dce6c07bb3b0c219e"
  },
  {
    "url": "assets/js/153.33179979.js",
    "revision": "2e8f33916898a1a8aa5d27b36bb7019c"
  },
  {
    "url": "assets/js/154.62d3439b.js",
    "revision": "03177b79b959c67ee63ad51537dcade3"
  },
  {
    "url": "assets/js/155.dcd43516.js",
    "revision": "85683023e8b671e616ce4bf23a992777"
  },
  {
    "url": "assets/js/156.018ca80a.js",
    "revision": "9f83bb07444c0bd122351591d313c82d"
  },
  {
    "url": "assets/js/157.62c518e2.js",
    "revision": "ab5e7cf851cb3d4b4fbc3ea34ca0ca79"
  },
  {
    "url": "assets/js/158.bf848d4a.js",
    "revision": "80d926aeac3450179f90b7019df71864"
  },
  {
    "url": "assets/js/159.c51febfd.js",
    "revision": "dd839e4cc2c392ed40e9e6482d96bf69"
  },
  {
    "url": "assets/js/16.cf63b4ed.js",
    "revision": "ff3d018ce55a4cd2978cc526a4820097"
  },
  {
    "url": "assets/js/160.836ed110.js",
    "revision": "b32b6041cc7357cc553be1112d8172d8"
  },
  {
    "url": "assets/js/161.10035632.js",
    "revision": "157791907cdc2e469199330c1359b4ca"
  },
  {
    "url": "assets/js/162.2fe07fd2.js",
    "revision": "7845e457052228e523240ca1169b22de"
  },
  {
    "url": "assets/js/163.8fb81297.js",
    "revision": "a2dfa2459ae3b6775e22cd263b3dd3c9"
  },
  {
    "url": "assets/js/164.d0b3da38.js",
    "revision": "ba6fc390910a0a054de43c8ad1ee6383"
  },
  {
    "url": "assets/js/165.4d86944b.js",
    "revision": "7e3f227e77bbb8b74668269d4c7d8e5b"
  },
  {
    "url": "assets/js/166.b2d95621.js",
    "revision": "2fdce926e84e85216c5373a594b77c0a"
  },
  {
    "url": "assets/js/167.ce46fe4f.js",
    "revision": "ec2129a4d67254844c1844f9f896ece6"
  },
  {
    "url": "assets/js/168.6c23af7d.js",
    "revision": "58cc6cba70b97ef04406e1078097d039"
  },
  {
    "url": "assets/js/169.81352334.js",
    "revision": "99c9704afc9fc0f1bdb4d319f1045155"
  },
  {
    "url": "assets/js/17.228184c4.js",
    "revision": "1e2554152f214830fbff29d77fbae395"
  },
  {
    "url": "assets/js/170.3c40476e.js",
    "revision": "f0fa4941ce87725b3e358c1b6dde497b"
  },
  {
    "url": "assets/js/171.a0dc9fee.js",
    "revision": "c9ba116a7ec208da24ee175ae95c63ee"
  },
  {
    "url": "assets/js/172.87af9bad.js",
    "revision": "d8dccc3887fcd65b8e5bedfd74789d7a"
  },
  {
    "url": "assets/js/173.3e5186f4.js",
    "revision": "6282f0f5953f0e3b44adc37513d1b188"
  },
  {
    "url": "assets/js/174.5f7ff979.js",
    "revision": "9b9af14e2358932bec40210be9fdd683"
  },
  {
    "url": "assets/js/175.f0acf5b7.js",
    "revision": "06b34dd1db8d756c33a726aba5883ad9"
  },
  {
    "url": "assets/js/176.569659b9.js",
    "revision": "8a34e5aa2f763246b43de96351b672fd"
  },
  {
    "url": "assets/js/177.fd962b99.js",
    "revision": "0ed15894a54775210f7fb53f87a0025e"
  },
  {
    "url": "assets/js/178.4954b050.js",
    "revision": "b052b31dd95e64450d2ce7ad11394259"
  },
  {
    "url": "assets/js/179.225afc8f.js",
    "revision": "ccbb9c488fb82437df5429883e037907"
  },
  {
    "url": "assets/js/18.c98ff92c.js",
    "revision": "59715c0546008a879b7c92ca826fc493"
  },
  {
    "url": "assets/js/180.2b2595cb.js",
    "revision": "d2af7360c0943e23fc893e3cc54ca38b"
  },
  {
    "url": "assets/js/181.e9b63b63.js",
    "revision": "0b6f5dfbe264566eb00df85814d7ee30"
  },
  {
    "url": "assets/js/182.6acb405f.js",
    "revision": "6c8a21ab8102a10011622c4634d82bf5"
  },
  {
    "url": "assets/js/183.56f748eb.js",
    "revision": "83319dfb36ae344eecd97f0bc590590e"
  },
  {
    "url": "assets/js/184.81c2ea92.js",
    "revision": "7b6085da385d370692a121fc8d551c2b"
  },
  {
    "url": "assets/js/185.a2c46688.js",
    "revision": "ddc49073324c0ac05b56945b9afa1e52"
  },
  {
    "url": "assets/js/186.6e5f8e03.js",
    "revision": "b916f7f1ab451edbb8597bd84e11132e"
  },
  {
    "url": "assets/js/187.12948337.js",
    "revision": "2f1310b13f8c53b7230b7e443f5829a8"
  },
  {
    "url": "assets/js/188.3b47b74f.js",
    "revision": "8ec4495a395aea3c095af055b174802c"
  },
  {
    "url": "assets/js/189.2168f947.js",
    "revision": "c3847f5ff2bfcf65f6d37ec1747cb852"
  },
  {
    "url": "assets/js/19.a056e76f.js",
    "revision": "3b6dd4c288a264c79fcd1d96cc70eba6"
  },
  {
    "url": "assets/js/190.935d613a.js",
    "revision": "b4b101e4eda05eb16d08857f0b5b739c"
  },
  {
    "url": "assets/js/191.809fa152.js",
    "revision": "9718e9bb6d4d16e649de3f397a615e1e"
  },
  {
    "url": "assets/js/192.f2b482a6.js",
    "revision": "0e2ee37896b4a5a9ee955c22f25f892a"
  },
  {
    "url": "assets/js/193.3472609a.js",
    "revision": "bc0588c1bd111129269ec07011a723a6"
  },
  {
    "url": "assets/js/194.e599ce87.js",
    "revision": "c6a49adc9fb9748e7354baa037eae102"
  },
  {
    "url": "assets/js/195.ff7862f1.js",
    "revision": "37dbe6f516e28af584915d2da120e980"
  },
  {
    "url": "assets/js/196.f1758b84.js",
    "revision": "df87a4a4ede41f3b96bfc8adce1a8cd4"
  },
  {
    "url": "assets/js/197.e8a18432.js",
    "revision": "c080b5671a51d390a23bcf382bd57a29"
  },
  {
    "url": "assets/js/198.63e06bb2.js",
    "revision": "b56d1de01dac0f8039ffba8a882765a0"
  },
  {
    "url": "assets/js/199.bfb546e5.js",
    "revision": "ea4fc6939c24f1fd79d4c98c477788c5"
  },
  {
    "url": "assets/js/2.9b53e42a.js",
    "revision": "5ab8e6b045c3fca9fde7cc6c2fbd3f23"
  },
  {
    "url": "assets/js/20.427bc565.js",
    "revision": "d82c69bc9e8f3c4f198f1148fa8a3d6a"
  },
  {
    "url": "assets/js/200.44906783.js",
    "revision": "fd854c715d103525e29f18613d472d92"
  },
  {
    "url": "assets/js/201.c9038170.js",
    "revision": "c29f5de79e7528043e1b5a50263d3c9f"
  },
  {
    "url": "assets/js/202.c7f7799d.js",
    "revision": "0119b5ec540716f9c09d021fbb2ea72a"
  },
  {
    "url": "assets/js/203.5d8f0281.js",
    "revision": "274d4ea3cd08f62792d93efdff906166"
  },
  {
    "url": "assets/js/204.e75488d2.js",
    "revision": "554546817881b66b7847774131f9e8e7"
  },
  {
    "url": "assets/js/205.277baae4.js",
    "revision": "7b5b28ce013a24a6e564f785e03afcc3"
  },
  {
    "url": "assets/js/206.3d3b2ba4.js",
    "revision": "3c89a5c533052a93496fd139c95e4109"
  },
  {
    "url": "assets/js/207.d701efe5.js",
    "revision": "79403a8c5245d9a0bc13257d57887e14"
  },
  {
    "url": "assets/js/208.e1e0a21c.js",
    "revision": "1bbd3d6bf747fa246c42562f126591dd"
  },
  {
    "url": "assets/js/209.9355262d.js",
    "revision": "784a58cdc734d506c7f4c51483b644ca"
  },
  {
    "url": "assets/js/21.6503cf07.js",
    "revision": "9dae11da70da1c8916be8282b58d291a"
  },
  {
    "url": "assets/js/210.c46aac44.js",
    "revision": "c4961258bd5201e20844fdbbb112cc96"
  },
  {
    "url": "assets/js/211.a6105d2c.js",
    "revision": "c4487870b5476614166d58a6387ec707"
  },
  {
    "url": "assets/js/212.9196b766.js",
    "revision": "5cf5946518721b48a99d1cef8d2a58b5"
  },
  {
    "url": "assets/js/213.277b627b.js",
    "revision": "f9d6a2e3d1b94b027659147581230fb0"
  },
  {
    "url": "assets/js/214.b56c580b.js",
    "revision": "31ac52ffe5094ceb31a93f77658bd72c"
  },
  {
    "url": "assets/js/215.770fdc10.js",
    "revision": "192e6898c3a062a8a255df022045328a"
  },
  {
    "url": "assets/js/216.f8a34d3c.js",
    "revision": "45c8f0211aae085d263a535c2821b560"
  },
  {
    "url": "assets/js/217.858c3462.js",
    "revision": "3cf96f281c4d02d7143915c66cdbf88d"
  },
  {
    "url": "assets/js/218.17d165b0.js",
    "revision": "990175e469745030b9f444097c6de0e7"
  },
  {
    "url": "assets/js/219.ccaa80ff.js",
    "revision": "734598b8844f145329403ebc6d0b34b6"
  },
  {
    "url": "assets/js/22.b657cdc8.js",
    "revision": "d8ad6023cdeeb8f3a56454401028595e"
  },
  {
    "url": "assets/js/220.d2cbb4f0.js",
    "revision": "59c5afa7d85871784188fc37cc34bafc"
  },
  {
    "url": "assets/js/221.ffc22f06.js",
    "revision": "07158dd3130a099abc85d91710e407ae"
  },
  {
    "url": "assets/js/222.4331fa4c.js",
    "revision": "45532e7e2a7dcc1eb121c014608ea2b3"
  },
  {
    "url": "assets/js/223.8ced3414.js",
    "revision": "b9bf83c776470e749fd2cb2811333d34"
  },
  {
    "url": "assets/js/224.70c4bd17.js",
    "revision": "882659506edea8e275a23ae44759b023"
  },
  {
    "url": "assets/js/225.229ae066.js",
    "revision": "40ee929c98f64b1ca57867460e0ae2d1"
  },
  {
    "url": "assets/js/226.a93c6995.js",
    "revision": "f1b29a06e563a92f3ab3f1a9bb896f30"
  },
  {
    "url": "assets/js/227.18a64cc1.js",
    "revision": "9a51a48eaf58338ef261e45b41738b4b"
  },
  {
    "url": "assets/js/228.61808159.js",
    "revision": "28cff32597df259d339725de9eece15c"
  },
  {
    "url": "assets/js/229.ee442c3e.js",
    "revision": "7be4b9b017a3898c9b499762696c047a"
  },
  {
    "url": "assets/js/23.4006ad00.js",
    "revision": "29502cf6f1247aa19bc213c004c49549"
  },
  {
    "url": "assets/js/230.4657fd67.js",
    "revision": "d847a797337fa1e5bccaca844cbea226"
  },
  {
    "url": "assets/js/231.020df120.js",
    "revision": "2346e13284ffd5748e3fe7180b512984"
  },
  {
    "url": "assets/js/232.c3f345ad.js",
    "revision": "66b8c260801841f5bb4f24d30e0ab3c8"
  },
  {
    "url": "assets/js/233.c286b0a5.js",
    "revision": "cb299ff80ac5e7e36b9a390673539eb3"
  },
  {
    "url": "assets/js/234.e6009ef4.js",
    "revision": "4c9e3292b31ad7967932ed9126f2c41a"
  },
  {
    "url": "assets/js/235.11be1f93.js",
    "revision": "efeafe2f6923a69da5a137f73abff016"
  },
  {
    "url": "assets/js/236.28808ec9.js",
    "revision": "fd1d560a072564f49a2cb9d5266a3b1f"
  },
  {
    "url": "assets/js/237.126ed829.js",
    "revision": "c94a64eb180161aa525598e8010f7458"
  },
  {
    "url": "assets/js/238.5834ea6d.js",
    "revision": "a72ea3b58e1c3318258d3fa69fee7fe4"
  },
  {
    "url": "assets/js/239.bc9f7b4c.js",
    "revision": "133b8b4c8791450233f97faefd3bf7fe"
  },
  {
    "url": "assets/js/24.13e52ecc.js",
    "revision": "11f6725aceacc9ff657dc87d0f83d8da"
  },
  {
    "url": "assets/js/240.74ae9333.js",
    "revision": "08cc669806b848705f9653c1517096cb"
  },
  {
    "url": "assets/js/241.6234b78f.js",
    "revision": "ff83588996b37c49ffaea1b76906ba80"
  },
  {
    "url": "assets/js/242.00128eae.js",
    "revision": "e46708c6aacfd743fde903612a891cdd"
  },
  {
    "url": "assets/js/243.94249246.js",
    "revision": "2ba85ff42a49aa352acce097c96847d3"
  },
  {
    "url": "assets/js/244.cb325775.js",
    "revision": "5d6d86e10177985730a32eba4bc42ea7"
  },
  {
    "url": "assets/js/245.f7811b8d.js",
    "revision": "d8642f07f2b58ecd557cffd83f476561"
  },
  {
    "url": "assets/js/246.0bf222bf.js",
    "revision": "7c89994979130c114fd917f58b9383bc"
  },
  {
    "url": "assets/js/247.0e882773.js",
    "revision": "727cf0696d862afdf793d9cb65bc5487"
  },
  {
    "url": "assets/js/248.c0414755.js",
    "revision": "ef544d5fb0d5b010354327f6d10d06c3"
  },
  {
    "url": "assets/js/249.4d9eba5c.js",
    "revision": "ee60eeb9e804404282d300474f0d4db5"
  },
  {
    "url": "assets/js/25.930932f3.js",
    "revision": "f3dffe851851dd6f837c4054001113a4"
  },
  {
    "url": "assets/js/250.5091dc87.js",
    "revision": "d2f062ec9ed91c9287872dfda8cad4c3"
  },
  {
    "url": "assets/js/251.f49fd712.js",
    "revision": "d943f2e35ee61cfee12593578e0c1098"
  },
  {
    "url": "assets/js/252.4f70bc4f.js",
    "revision": "65729574ae76e2a66a429341046d53f4"
  },
  {
    "url": "assets/js/253.519ac78c.js",
    "revision": "5457df5e3b4e37802827b8a75043596a"
  },
  {
    "url": "assets/js/254.34b3baf2.js",
    "revision": "436fb13e08ca4db757a91ddf3d6136ee"
  },
  {
    "url": "assets/js/255.47749c8c.js",
    "revision": "3263c61f6b628a019b9e5c67044ca8a4"
  },
  {
    "url": "assets/js/256.84f82c32.js",
    "revision": "23c5cfcfcc8b5d371e4ad2a670d5dcea"
  },
  {
    "url": "assets/js/257.4a833d54.js",
    "revision": "e6192decfb7310c08ff542de29d2dc21"
  },
  {
    "url": "assets/js/258.a5e2c84d.js",
    "revision": "b7918b6c95dc6e6db1b30bc1afc596cc"
  },
  {
    "url": "assets/js/259.154ccd09.js",
    "revision": "26a0be5891f9545cd4e666e17a8566b4"
  },
  {
    "url": "assets/js/26.e43fdea5.js",
    "revision": "564afbf1704a8cecc917cb6afa25b9e0"
  },
  {
    "url": "assets/js/260.bf32a75e.js",
    "revision": "d119856a4bc2381cbd55eec80fb25b5d"
  },
  {
    "url": "assets/js/261.30c7f9fe.js",
    "revision": "ce9a30e6f92b8f288c12395dba056ca6"
  },
  {
    "url": "assets/js/262.0b2fae80.js",
    "revision": "2b0943fb18b8d9b6d82ae2fa5b487330"
  },
  {
    "url": "assets/js/263.8051c437.js",
    "revision": "a3f0fed93ff21e2106dc56f6124b1f7c"
  },
  {
    "url": "assets/js/264.3a02f1c6.js",
    "revision": "ef00fdf58f5f5778ed5ff6314b1afe5d"
  },
  {
    "url": "assets/js/265.fc78fcf8.js",
    "revision": "64134b8e3da7f38dea663c20782bb10c"
  },
  {
    "url": "assets/js/266.32079557.js",
    "revision": "22a13bda1bbb9a2def3c1d5b27e9e9ce"
  },
  {
    "url": "assets/js/267.a293446c.js",
    "revision": "92abb50b9551e18d103c4cdcc8b143f4"
  },
  {
    "url": "assets/js/268.3cdb842a.js",
    "revision": "518b50ee936fcde1388b9fedfcf39853"
  },
  {
    "url": "assets/js/269.96d365b4.js",
    "revision": "1bb439a0f5f62847f6977305e3ebc337"
  },
  {
    "url": "assets/js/27.eeb73d0f.js",
    "revision": "fcf1f71abc76662c6217168c6180655d"
  },
  {
    "url": "assets/js/270.c5498754.js",
    "revision": "5a58582d32f14427b4f88b27d3c5936f"
  },
  {
    "url": "assets/js/271.89492f47.js",
    "revision": "37f9ec4298d22f6760e8ee4c77237396"
  },
  {
    "url": "assets/js/272.b45f8a0e.js",
    "revision": "94e9fb22027c01a4f6a14da7e7a96845"
  },
  {
    "url": "assets/js/273.5ac97c53.js",
    "revision": "41280c7930240a16a1b02d13e913f715"
  },
  {
    "url": "assets/js/274.f21fa75e.js",
    "revision": "14b443df568f5c76402d9d483eefb4b2"
  },
  {
    "url": "assets/js/275.274e260c.js",
    "revision": "688a42f09d8d4050e395ebc75f51843f"
  },
  {
    "url": "assets/js/276.8fdf72c0.js",
    "revision": "00661018f393c91262e1a768502013b7"
  },
  {
    "url": "assets/js/277.70937604.js",
    "revision": "f603e34a002e34a170aec14b8e65695c"
  },
  {
    "url": "assets/js/278.0cc83323.js",
    "revision": "9e6011510d43cd9789e94106770147b4"
  },
  {
    "url": "assets/js/279.47bd2c94.js",
    "revision": "3e9b55e4f9e333d75d5a29b3aef68404"
  },
  {
    "url": "assets/js/28.130b9d65.js",
    "revision": "fcfc871f3f7777c3364d5f263d778ff9"
  },
  {
    "url": "assets/js/280.3aac41b4.js",
    "revision": "00e878ffc8312d30c0d842524dca2f9e"
  },
  {
    "url": "assets/js/281.7a6ccd1c.js",
    "revision": "dc97446fb30dd0d31e8572b1717263cb"
  },
  {
    "url": "assets/js/282.3c5656ad.js",
    "revision": "70a79ee92a00c938807f4bb5ef26ba7e"
  },
  {
    "url": "assets/js/283.0e885296.js",
    "revision": "cf3f49f91bbf2c1cc92750b763b71428"
  },
  {
    "url": "assets/js/284.d49f89f5.js",
    "revision": "f91b7ae55e144b53e5928d6132a111b0"
  },
  {
    "url": "assets/js/285.1eba7a8e.js",
    "revision": "4184f36f3661a59b2f4062e4ce66df13"
  },
  {
    "url": "assets/js/286.86075186.js",
    "revision": "53a5aa011406f6ec6f9d67e2501f313f"
  },
  {
    "url": "assets/js/287.8e1004dc.js",
    "revision": "d5840d313e1458ecd028a87ca21e1d39"
  },
  {
    "url": "assets/js/288.9dedebbd.js",
    "revision": "8f72969a4ec4ea6f66911c75d62222b2"
  },
  {
    "url": "assets/js/289.f4a9a829.js",
    "revision": "220451a8403bc33204c46eb51b9cb2b8"
  },
  {
    "url": "assets/js/29.57903c1a.js",
    "revision": "03a616373b9c8721480f3d0882258762"
  },
  {
    "url": "assets/js/290.db6bc0b2.js",
    "revision": "77f2353bee05603442103557e120aa6a"
  },
  {
    "url": "assets/js/291.5d3a0588.js",
    "revision": "e2f708325d537deeef456a357ea7d59f"
  },
  {
    "url": "assets/js/292.9964d83a.js",
    "revision": "828e90915382d9d9c74f18c6c6b23185"
  },
  {
    "url": "assets/js/293.677381b4.js",
    "revision": "7772ddc4a7d827794a6e84afcabc1e99"
  },
  {
    "url": "assets/js/294.16c0d1d3.js",
    "revision": "dddc2edecddc4cbef87f6b68785fd4e4"
  },
  {
    "url": "assets/js/295.85bb017a.js",
    "revision": "d7d661efe5bb33b3098d5bf70a64acd7"
  },
  {
    "url": "assets/js/296.32e44a9a.js",
    "revision": "8f66a2a781aa108d4eb38a12d129e844"
  },
  {
    "url": "assets/js/297.fbe6cb99.js",
    "revision": "190b16b90f8a934ed6cbe40cb7e668a8"
  },
  {
    "url": "assets/js/298.61129610.js",
    "revision": "bf4e7426e12ffaf6be0f9409c3ee0068"
  },
  {
    "url": "assets/js/299.228557dc.js",
    "revision": "26bbd275dac63d98bee07f7dbb7ca725"
  },
  {
    "url": "assets/js/30.061ac8b2.js",
    "revision": "fc3ed950c07d2dc343484a20bdb3ee89"
  },
  {
    "url": "assets/js/300.7a689319.js",
    "revision": "637e8d2dc656b122e249c2ecfa45d8fa"
  },
  {
    "url": "assets/js/301.3bc786ae.js",
    "revision": "8fd51f248db29bb8b871940764201f67"
  },
  {
    "url": "assets/js/302.b87274d3.js",
    "revision": "4bac625f8ef6bba6eced88da318c3678"
  },
  {
    "url": "assets/js/303.5dca1626.js",
    "revision": "d920ee1ed10f219821e92ad00d91ba27"
  },
  {
    "url": "assets/js/304.c3ca3d98.js",
    "revision": "48f870c5a4504ba15055da7f3f7204d5"
  },
  {
    "url": "assets/js/305.d9f3ac09.js",
    "revision": "7a73c7dc7e5fd05596977a014c666676"
  },
  {
    "url": "assets/js/306.1162806f.js",
    "revision": "fbe4c4ed23bad48ce99aafd446ff0e9f"
  },
  {
    "url": "assets/js/307.2084bd22.js",
    "revision": "ba3b9d4502f151fcb7bd5a1ee62bbb50"
  },
  {
    "url": "assets/js/308.22de0a1b.js",
    "revision": "c4c9f3fe8f13785f0f26a09a54c65c50"
  },
  {
    "url": "assets/js/309.622b5889.js",
    "revision": "0f9812358feebdafbd2eb9d5e4d6056e"
  },
  {
    "url": "assets/js/31.25f0a7fe.js",
    "revision": "5781a27f9a5ecf5971af0dee97135e99"
  },
  {
    "url": "assets/js/310.5205d3c6.js",
    "revision": "f126127de970d657dd06ec7bfddc971f"
  },
  {
    "url": "assets/js/311.316f62bb.js",
    "revision": "e3f68c39de4cca231491496e9260962e"
  },
  {
    "url": "assets/js/312.6da84e4c.js",
    "revision": "9fc95434052d76b17f1c508cf677d409"
  },
  {
    "url": "assets/js/313.c7fceb52.js",
    "revision": "021ac1d3b5907a50e3552223eb9395e4"
  },
  {
    "url": "assets/js/314.164f165e.js",
    "revision": "718c646a4a699048813e61f4ccee84a6"
  },
  {
    "url": "assets/js/315.3e3e0744.js",
    "revision": "8cd145c88d8a926fbb01365e1d53c88d"
  },
  {
    "url": "assets/js/316.17cc9e46.js",
    "revision": "9220ee828a9d043cefd9f6e308867034"
  },
  {
    "url": "assets/js/317.3e283538.js",
    "revision": "354d6a66e56eeb0ccca9f89ddc005187"
  },
  {
    "url": "assets/js/318.198d94b1.js",
    "revision": "4d5861e8269fb55e1efc063d5f005fd1"
  },
  {
    "url": "assets/js/319.cee96f7e.js",
    "revision": "403730c25f4575857824f255093f7702"
  },
  {
    "url": "assets/js/32.4126f59a.js",
    "revision": "8548298b446a44867885ed45722b650e"
  },
  {
    "url": "assets/js/320.dc30ef85.js",
    "revision": "5aaf9452f1a6984ee2642cb684f4fdec"
  },
  {
    "url": "assets/js/321.0e028790.js",
    "revision": "6a73aa51f87b5cdf532c4332ffa4b0a5"
  },
  {
    "url": "assets/js/322.732d19c7.js",
    "revision": "b13ddad106e6b9b98eb16ab97376ca6f"
  },
  {
    "url": "assets/js/323.a465f266.js",
    "revision": "9809b13df93b0a1605d98ab1a664fbe6"
  },
  {
    "url": "assets/js/324.f8f3dbe7.js",
    "revision": "6a7ba1671a0261c4a1f53c8255802ccd"
  },
  {
    "url": "assets/js/325.92bc28ad.js",
    "revision": "57eafbdb7263630155fd825682050807"
  },
  {
    "url": "assets/js/326.ac223489.js",
    "revision": "ff29f1c43798149bd6298bf624e4faca"
  },
  {
    "url": "assets/js/327.5fb44bf3.js",
    "revision": "b6256490bf25a5e338c315364a5ec04b"
  },
  {
    "url": "assets/js/328.038884bf.js",
    "revision": "2142c6e702c77e36ff44dc9aa534599e"
  },
  {
    "url": "assets/js/329.a9f6d23f.js",
    "revision": "4686c89401b9f383c43b9e0d0f4b7a9b"
  },
  {
    "url": "assets/js/33.28274a6d.js",
    "revision": "0b2963196d69639b7122b9f7741019f1"
  },
  {
    "url": "assets/js/330.5d687a9e.js",
    "revision": "20af4856f98c52d3953396d4668dcc7e"
  },
  {
    "url": "assets/js/331.4ce06d30.js",
    "revision": "de84b2d70a8643d45254f091fa3d44bd"
  },
  {
    "url": "assets/js/332.993cb949.js",
    "revision": "45274ed037434fea81d32ba6d82479e9"
  },
  {
    "url": "assets/js/333.5036da05.js",
    "revision": "2a2c67103d661f2bf266eca790d7c797"
  },
  {
    "url": "assets/js/334.d03c4a9e.js",
    "revision": "b16ebc9662f4689d19005182edd9a6a7"
  },
  {
    "url": "assets/js/335.7e79c358.js",
    "revision": "43f01f6dd2a1e24de22f7736c5fbff19"
  },
  {
    "url": "assets/js/336.0beae48c.js",
    "revision": "9b37a9803055e8a7f0ef9015d2f24f54"
  },
  {
    "url": "assets/js/337.1ddc4a6b.js",
    "revision": "86262ab11bb29e0518a8a23cb7938b3f"
  },
  {
    "url": "assets/js/338.f16832be.js",
    "revision": "71587ac3eb35e1436cec99938a178c01"
  },
  {
    "url": "assets/js/339.dd8490b4.js",
    "revision": "97579cfb18d5b022bd19e503236fd490"
  },
  {
    "url": "assets/js/34.41ba9c9e.js",
    "revision": "d1f4f1285e8a301bf8502b5b5e834c17"
  },
  {
    "url": "assets/js/340.f7ec9031.js",
    "revision": "7200c67a82203db0f3b8d06ba2dd7aaf"
  },
  {
    "url": "assets/js/341.07c6f757.js",
    "revision": "dded6ec1d4d34d66e60d31afe21aafc8"
  },
  {
    "url": "assets/js/342.024e2d42.js",
    "revision": "14a7fec542be9be249316009a3acabe5"
  },
  {
    "url": "assets/js/343.050fcf3a.js",
    "revision": "bad0d36f8934c2671e2b235431fca982"
  },
  {
    "url": "assets/js/344.90ccc801.js",
    "revision": "9a8274d93be12141cd5cb660865ec89a"
  },
  {
    "url": "assets/js/345.265d174f.js",
    "revision": "215b6dac7c765abc6a127d87fc6bf3cf"
  },
  {
    "url": "assets/js/346.f3057438.js",
    "revision": "5d097e7167d695a1a600712e899543fc"
  },
  {
    "url": "assets/js/347.ff0d911f.js",
    "revision": "3697da964983f7d2e6f52eae3c29211c"
  },
  {
    "url": "assets/js/348.761a4ebb.js",
    "revision": "fdaa98a0d0af7ebeb18530bd14e74afe"
  },
  {
    "url": "assets/js/349.0a782763.js",
    "revision": "63d705a3c07260008f457252b1d3874d"
  },
  {
    "url": "assets/js/35.a8d765a5.js",
    "revision": "6a2d64ba8eff04632516be9eb7d891f2"
  },
  {
    "url": "assets/js/350.2405fbd2.js",
    "revision": "29294072aabb330507eee618ec3fe26a"
  },
  {
    "url": "assets/js/351.e420692f.js",
    "revision": "f4c15cace078bfe924ee958b68485b74"
  },
  {
    "url": "assets/js/352.4d8ce8f9.js",
    "revision": "8c43a2d29a719fac8b6e3c85397f63e1"
  },
  {
    "url": "assets/js/353.1cdef35a.js",
    "revision": "794c67d64102d59cf73c9b8de67ba9ec"
  },
  {
    "url": "assets/js/354.7173c341.js",
    "revision": "2bc164ff8d906b805e7b6aa4ef20ec60"
  },
  {
    "url": "assets/js/355.3a3c8374.js",
    "revision": "897e30cb23466b1050ef87b53c840f87"
  },
  {
    "url": "assets/js/356.ff410c2a.js",
    "revision": "7878d280e3b0a109b356a5ae7bf38a05"
  },
  {
    "url": "assets/js/357.fd42f070.js",
    "revision": "a25eabd720555806332519abe487b34c"
  },
  {
    "url": "assets/js/358.8feaeb95.js",
    "revision": "6f91eedd75c6b75bb26ca7a4cf9b62bb"
  },
  {
    "url": "assets/js/359.a0c4d4b9.js",
    "revision": "5d5f1df67f519b0fb9db0ecbe7350b78"
  },
  {
    "url": "assets/js/36.8fff91d1.js",
    "revision": "60daa9a0550d916a8b57ce53e827ad0a"
  },
  {
    "url": "assets/js/360.20a16dfb.js",
    "revision": "5130b4bde4a8d1aee663f4da08db4969"
  },
  {
    "url": "assets/js/361.1aa38c44.js",
    "revision": "1b2f54a5a9c1996bb5da99bf9a0fde2d"
  },
  {
    "url": "assets/js/362.2ba23f6a.js",
    "revision": "7287c3008b4610e59aab51bb8c98a928"
  },
  {
    "url": "assets/js/363.6256ce5d.js",
    "revision": "771115a80f43b18426da4477262f5f9b"
  },
  {
    "url": "assets/js/364.aff1ae63.js",
    "revision": "663928e155e82c04851f9bc1c23dd001"
  },
  {
    "url": "assets/js/365.2d39eb5f.js",
    "revision": "dadebbc17ad246215f5f12c2de28298b"
  },
  {
    "url": "assets/js/366.f1640c14.js",
    "revision": "55060321bd45db00683ba1416099f324"
  },
  {
    "url": "assets/js/367.7f3b30ff.js",
    "revision": "d8b921f4e37790143a610b236f661b31"
  },
  {
    "url": "assets/js/368.3f7a06ac.js",
    "revision": "97dfb74a9d2c999f2106a4fd0658c83d"
  },
  {
    "url": "assets/js/369.53ca898b.js",
    "revision": "d556ca186bd6d271d98d42f9075915d1"
  },
  {
    "url": "assets/js/37.15a3d1bf.js",
    "revision": "362fa3184ea07c2d17ffac82d3c7408b"
  },
  {
    "url": "assets/js/370.326ac180.js",
    "revision": "1e7b897b6508def7ec1f2cedfd0ed723"
  },
  {
    "url": "assets/js/371.39372046.js",
    "revision": "502df18cad69fce728be6b8fae3572c2"
  },
  {
    "url": "assets/js/372.e61b0949.js",
    "revision": "3e8e85d801bcfac4999c60d45722c246"
  },
  {
    "url": "assets/js/373.a1e1c13a.js",
    "revision": "0fe95c3dbbf96e7b746c27acbd27dad8"
  },
  {
    "url": "assets/js/374.6129f670.js",
    "revision": "00370dd8171c4fec373b53381cb341b1"
  },
  {
    "url": "assets/js/375.2e78ee9c.js",
    "revision": "fbb57df4350e602ebc5958f90c52ee4d"
  },
  {
    "url": "assets/js/376.c62cf631.js",
    "revision": "f2c23dc0611296c9e992463aae0403e0"
  },
  {
    "url": "assets/js/377.d897c6d3.js",
    "revision": "36d223a0175e0192e4fac89796a51eb8"
  },
  {
    "url": "assets/js/378.cd60bc35.js",
    "revision": "0fdceb70cb2d52afc58ef506ff347cc0"
  },
  {
    "url": "assets/js/38.1618dd7d.js",
    "revision": "2aebb47ba34efa6966e3216bc192615a"
  },
  {
    "url": "assets/js/39.6b7eac1b.js",
    "revision": "1c0c77f91c97c823ad8ad0f7767d38f2"
  },
  {
    "url": "assets/js/4.9e82fc31.js",
    "revision": "d663a01fb38ee6a49b7043940b17e26f"
  },
  {
    "url": "assets/js/40.c1b1c062.js",
    "revision": "01db7d0ebaecd06d180e526272aeacb7"
  },
  {
    "url": "assets/js/41.a61c342c.js",
    "revision": "80c45858893f5351199cecc0437faccc"
  },
  {
    "url": "assets/js/42.7f4aee94.js",
    "revision": "ff23eed6a06869de52b9d0acd17acf45"
  },
  {
    "url": "assets/js/43.afd0a5f6.js",
    "revision": "0f0590d830537b6e3010c23e438a1556"
  },
  {
    "url": "assets/js/44.ce776326.js",
    "revision": "4213e2ffaa2a98b45c14438860f86f05"
  },
  {
    "url": "assets/js/45.90f68e61.js",
    "revision": "852890dc90a967359423908bcd63d67e"
  },
  {
    "url": "assets/js/46.a6aa2eb7.js",
    "revision": "4e8b973973434239fe15912cce3aafb3"
  },
  {
    "url": "assets/js/47.4edeb99d.js",
    "revision": "2e9f89b1bb7dd858ea58451e14a5a9ab"
  },
  {
    "url": "assets/js/48.4bd5e81e.js",
    "revision": "6b1909ef7e73e8fb0c015139878dc596"
  },
  {
    "url": "assets/js/49.04cd28e8.js",
    "revision": "03c8b409bce5c2df3dee7431ad4e1899"
  },
  {
    "url": "assets/js/5.6cddf736.js",
    "revision": "71377c731da3f97ea96fee6f73894b91"
  },
  {
    "url": "assets/js/50.7c728b25.js",
    "revision": "e46d4b035f91f0c0a09e3fd2308aed7b"
  },
  {
    "url": "assets/js/51.4f4daa0c.js",
    "revision": "9ae01a4b7cc796e7a6d3f73f83115a20"
  },
  {
    "url": "assets/js/52.d5e6f512.js",
    "revision": "782116a818610ac03e7b9ab089c8f39a"
  },
  {
    "url": "assets/js/53.a0225996.js",
    "revision": "f327de4c12ed48ea41184652b0e4fd91"
  },
  {
    "url": "assets/js/54.91b413c3.js",
    "revision": "623f097bf620909cb62f27e6c8def791"
  },
  {
    "url": "assets/js/55.67181c87.js",
    "revision": "79b4193f6d5de539e8956676ccc1f006"
  },
  {
    "url": "assets/js/56.811c1ef6.js",
    "revision": "f5046dedf589d3ab14ba117b33e4a618"
  },
  {
    "url": "assets/js/57.7cd50930.js",
    "revision": "ecf53b7b14d7a2b884350777c7e3844d"
  },
  {
    "url": "assets/js/58.368d7b23.js",
    "revision": "e3e944f4ae37c9b9d1f97133dc95711d"
  },
  {
    "url": "assets/js/59.e58a2110.js",
    "revision": "80b7f82d45e36fae5d5fc2ed707639bc"
  },
  {
    "url": "assets/js/6.181db413.js",
    "revision": "07abc5d2e19d4a195f2229cac1a65238"
  },
  {
    "url": "assets/js/60.dfe85315.js",
    "revision": "00907b85d17c454bdc4eb11d0afff8ab"
  },
  {
    "url": "assets/js/61.ced98a3f.js",
    "revision": "c55cd22bec81b633d517e43bfec459ad"
  },
  {
    "url": "assets/js/62.baa6fe10.js",
    "revision": "b053dcace3d8184cd23fd9d505680896"
  },
  {
    "url": "assets/js/63.f3570234.js",
    "revision": "351ca61ae6754a3c370e575f28a1a51e"
  },
  {
    "url": "assets/js/64.f979aba2.js",
    "revision": "8543addfa64bfd0950fcaa414795ef4c"
  },
  {
    "url": "assets/js/65.b2c8257a.js",
    "revision": "1b72179fd257ae553dd52bda6db8b5ea"
  },
  {
    "url": "assets/js/66.760faad4.js",
    "revision": "946cc9ec7c8098e7e37ad67a8f8207d2"
  },
  {
    "url": "assets/js/67.cb7ee7df.js",
    "revision": "53c1ba05a491efb5ee9c46414ffddcf6"
  },
  {
    "url": "assets/js/68.c4105bbc.js",
    "revision": "52733517016fedd25ba3ca8bbb4ceec6"
  },
  {
    "url": "assets/js/69.13fce15d.js",
    "revision": "3129207df92708be5776def4a660532d"
  },
  {
    "url": "assets/js/7.04e05717.js",
    "revision": "f6088a9b61caf6ddb0c12794696461a6"
  },
  {
    "url": "assets/js/70.af0e35aa.js",
    "revision": "4a3a3b6213a2de7abebd0e8fb998c49f"
  },
  {
    "url": "assets/js/71.bcc978af.js",
    "revision": "44d86208e70ffb32041472a47ffc1c90"
  },
  {
    "url": "assets/js/72.01be522e.js",
    "revision": "54d453c16553a6ca0a53333262354007"
  },
  {
    "url": "assets/js/73.df6582be.js",
    "revision": "76e819d9659c7332e745f6990d8fe155"
  },
  {
    "url": "assets/js/74.14ce772b.js",
    "revision": "e9ffeff0d5a0aacac8d7e975a1206f09"
  },
  {
    "url": "assets/js/75.3e766feb.js",
    "revision": "753a4efe0513d3da1d325c64f0db806a"
  },
  {
    "url": "assets/js/76.e10fa612.js",
    "revision": "2c67d64159c1b06add515668c6671546"
  },
  {
    "url": "assets/js/77.b8bf75d4.js",
    "revision": "9832b314737b7476dce23bbedcbbf74f"
  },
  {
    "url": "assets/js/78.658c7f20.js",
    "revision": "c4b3689344f42561b50baabb8fe11519"
  },
  {
    "url": "assets/js/79.1eabdaea.js",
    "revision": "2ccdca2ee416ff55b26764884a6b380e"
  },
  {
    "url": "assets/js/8.36276f52.js",
    "revision": "7afc091559bbd2bf107ad580204890e2"
  },
  {
    "url": "assets/js/80.48da4cce.js",
    "revision": "8ad382abc0b3ba8acf033d1f32e77e8b"
  },
  {
    "url": "assets/js/81.4ef0cb81.js",
    "revision": "455b6602b9cb5b4b180c6b94be0e97ac"
  },
  {
    "url": "assets/js/82.584c313a.js",
    "revision": "51b489c460f366d4464164e0b842dc1c"
  },
  {
    "url": "assets/js/83.c1922fd8.js",
    "revision": "182daa2b3adf8d77538c147c59606f8f"
  },
  {
    "url": "assets/js/84.8558aebf.js",
    "revision": "4b32573ee386fb19a825261f23e134a1"
  },
  {
    "url": "assets/js/85.47d0b533.js",
    "revision": "0e140004525e23deab573cf021745bd1"
  },
  {
    "url": "assets/js/86.b2d32fa9.js",
    "revision": "eae9693350844da0f22cc5937ede2016"
  },
  {
    "url": "assets/js/87.46f4474c.js",
    "revision": "c15569d30897065177a7444bb9a3868c"
  },
  {
    "url": "assets/js/88.be35210a.js",
    "revision": "fb8d012707ee1340beb02676b1e91bbf"
  },
  {
    "url": "assets/js/89.025f13fc.js",
    "revision": "b6ea6570522fb2b57aac42766a1f422d"
  },
  {
    "url": "assets/js/9.c1815f25.js",
    "revision": "73bfc743098d6dc9c76bb83f536f5698"
  },
  {
    "url": "assets/js/90.00c7d4aa.js",
    "revision": "851f90e5ec412dc9d53349423a508377"
  },
  {
    "url": "assets/js/91.cd9d024a.js",
    "revision": "3fcb063368cd1ce35ac45c49951978c6"
  },
  {
    "url": "assets/js/92.71cf2445.js",
    "revision": "1b897a06e4b4cca0993933310e1438f1"
  },
  {
    "url": "assets/js/93.a7656c48.js",
    "revision": "4cb055714efe3b321d434deba506682e"
  },
  {
    "url": "assets/js/94.13840956.js",
    "revision": "4af21b3b981b2c5f27e064f8c93c4668"
  },
  {
    "url": "assets/js/95.386a1432.js",
    "revision": "745d786b00598d98dfe08b869de1cbfa"
  },
  {
    "url": "assets/js/96.a488be0d.js",
    "revision": "f70477cf4a9a16f5e37ca575e9090222"
  },
  {
    "url": "assets/js/97.2d572b38.js",
    "revision": "850beca6211b72982bade89e610c7a36"
  },
  {
    "url": "assets/js/98.89ca9c62.js",
    "revision": "1d674cec1f388ace47b796d980961524"
  },
  {
    "url": "assets/js/99.e5964716.js",
    "revision": "0722e943028fbfaf18f691c9afd36bfe"
  },
  {
    "url": "assets/js/app.bc028b19.js",
    "revision": "22960210f203bc9dab3bed0082f3f6d5"
  },
  {
    "url": "customize/bioelectrical-input/index.html",
    "revision": "33f5151090765ac4b09f02e131ab0ec1"
  },
  {
    "url": "customize/environmental-control/index.html",
    "revision": "b6cffaae022883b4e5cc61974cf30150"
  },
  {
    "url": "customize/gaming-toys-music/index.html",
    "revision": "461e3c141fb177f3526cdbcf03f6301d"
  },
  {
    "url": "customize/grid/Grid-Creation.html",
    "revision": "ec0b783c683fe393ae598d9b750b5620"
  },
  {
    "url": "customize/grid/Grid-Customization.html",
    "revision": "31cab137a7591bf4e4da52dcdd2828e8"
  },
  {
    "url": "customize/grid/index.html",
    "revision": "a844dd3bfdafbbf0a3f01ba5bba18139"
  },
  {
    "url": "customize/index.html",
    "revision": "7d9d87fd7c809b6b56a7437bb7489a68"
  },
  {
    "url": "customize/model/index.html",
    "revision": "b2808dac9c74938c02e78cdc06636f4f"
  },
  {
    "url": "customize/model/Model-Creation.html",
    "revision": "6845563b19ecdc2788a1cc6e6727303e"
  },
  {
    "url": "customize/model/Model-Customization.html",
    "revision": "50b3d56d202c0a6b9e4875c6e2960ec5"
  },
  {
    "url": "customize/other/index.html",
    "revision": "2cd08f9c8f34cc30bbadccce36193918"
  },
  {
    "url": "develop/APE.html",
    "revision": "4e3764432ac5d5d54571157f4e517b11"
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
    "revision": "4b1d1559dc822da5bacf4f753267eb04"
  },
  {
    "url": "develop/ARE-HW-Interfacing-CIM.html",
    "revision": "83b44034d9114be97db62c13c4f15eda"
  },
  {
    "url": "develop/ARE-Keyboard-Mouse-Services.html",
    "revision": "fc45b7cca9db25849f9f1c0264e11c1a"
  },
  {
    "url": "develop/are-remote-apis/index.html",
    "revision": "dcf9167625984ab96db4048227a38611"
  },
  {
    "url": "develop/are-remote-apis/REST-API.html",
    "revision": "9555c96419856f2f6032ec23728ae1cf"
  },
  {
    "url": "develop/are-remote-apis/REST-demos.html",
    "revision": "1149da269ad6e4320d57382835f41786"
  },
  {
    "url": "develop/are-remote-apis/Webserver.html",
    "revision": "aa7a3ce8a74b48d45619342584c37c53"
  },
  {
    "url": "develop/are-remote-apis/Websocket.html",
    "revision": "f62b82f5e3a7f4e5e24b44ed7b403b97"
  },
  {
    "url": "develop/ARE-Webserver.html",
    "revision": "e4a7d5a623454452332d4790c4b512cf"
  },
  {
    "url": "develop/ARE.html",
    "revision": "5431ffab7b63f43ab7d737390e33d979"
  },
  {
    "url": "develop/ARE/ARE-Development-Manual.html",
    "revision": "abc10a4c55c150218c8e9e967cac1cd3"
  },
  {
    "url": "develop/ARE/index.html",
    "revision": "e966f4a7dae54f2ba786568a6e5965b3"
  },
  {
    "url": "develop/asterics-grid/01_structure.html",
    "revision": "d2a2d56be90d92fdb29bf838f3b1f802"
  },
  {
    "url": "develop/asterics-grid/02_tools.html",
    "revision": "9476bf65086a051b38e353bb160b97a9"
  },
  {
    "url": "develop/asterics-grid/03_grid.html",
    "revision": "03784232726f940c210757d6b43bfe26"
  },
  {
    "url": "develop/asterics-grid/04_vuejs.html",
    "revision": "77dd32a56d8f5136c5ccc4d9f2222620"
  },
  {
    "url": "develop/asterics-grid/05_datamodel.html",
    "revision": "277bee5731104902336735dbbe2ed9c7"
  },
  {
    "url": "develop/asterics-grid/06_data_storage.html",
    "revision": "98942e43eba21f678b9feab3f97d1ce6"
  },
  {
    "url": "develop/asterics-grid/07_i18n.html",
    "revision": "9b0fbbb923ad70bda6db5708b8feae0e"
  },
  {
    "url": "develop/asterics-grid/index.html",
    "revision": "17886e63d7f8d67a0d036d2e0f09ba59"
  },
  {
    "url": "develop/asterics-wiki/api/AsTeRICS Websocket.html",
    "revision": "e77d620ee2182f1065a4500af8613d24"
  },
  {
    "url": "develop/asterics-wiki/api/Resource Handling.html",
    "revision": "5d0793b6f2bebdc4ceaf444691220ea0"
  },
  {
    "url": "develop/asterics-wiki/api/REST-API.html",
    "revision": "a50784a20d463af35bf09f9c6cee05c5"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Solutions.html",
    "revision": "7f612fa75ad1fef63f78cd54c5f3dfab"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Webserver Document Root.html",
    "revision": "7b53d98eb64c5fdd1d4779d5198383d3"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/JavaCV.html",
    "revision": "364e137cf4c9dbc0d0d1fea030c8f744"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/Unit Tests.html",
    "revision": "754fc3ad95565c1e3d3cd1d8f1853fbf"
  },
  {
    "url": "develop/asterics-wiki/components/AsTeRICS Plugins.html",
    "revision": "df63f3884b0f5bd9d52a8378b717a878"
  },
  {
    "url": "develop/AT_solution_development.html",
    "revision": "2588d28b5897db353f364713198f277c"
  },
  {
    "url": "develop/AT-solution-demos.html",
    "revision": "ecb37903f3eda15237bfef2789e5c58d"
  },
  {
    "url": "develop/at-solution/APE.html",
    "revision": "08f715e0d731677c6e135e2757ea0200"
  },
  {
    "url": "develop/at-solution/AT-solution-tutorial.html",
    "revision": "2e1145c0280f9cf7cfd763b9c986d96b"
  },
  {
    "url": "develop/at-solution/index.html",
    "revision": "661b4339a62b323ed1c743114aabf772"
  },
  {
    "url": "develop/Coding-Guidelines.html",
    "revision": "a7334e78a8191ecbb9fcef4c956d92af"
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
    "revision": "6ca1c6bbb909ba32d64b2ff44cfbe8ee"
  },
  {
    "url": "develop/get-started/Coding-Guidelines.html",
    "revision": "eb24ba4eb596e8b4ac97f0e71c066e06"
  },
  {
    "url": "develop/get-started/Development-Environment.html",
    "revision": "ed3b77eb5741a132927e6c9a67259884"
  },
  {
    "url": "develop/get-started/index.html",
    "revision": "c674cd8c1ead4379fa1fad732db49b60"
  },
  {
    "url": "develop/index.html",
    "revision": "6b0197e1816a3536af2e73d1f8ec6146"
  },
  {
    "url": "develop/Plugin-Advanced.html",
    "revision": "ad214035ca5e7164d9950605bc9d6154"
  },
  {
    "url": "develop/Plugin-Introduction.html",
    "revision": "549f854ebd8562f70a1b99eb18bc33c1"
  },
  {
    "url": "develop/Plugin-Tutorial.html",
    "revision": "265b084520a33c1962fbf67d6101e4fe"
  },
  {
    "url": "develop/plugin/Computer-Vision.html",
    "revision": "c711b5e53b82156439ba0ee3ec1ca6b5"
  },
  {
    "url": "develop/plugin/index.html",
    "revision": "fda36be99730437f204eecfb29f59bc4"
  },
  {
    "url": "develop/plugin/Plugin-Advanced.html",
    "revision": "5a08164a51beab173d2fb3e2a2d06a77"
  },
  {
    "url": "develop/plugin/Plugin-Averager.html",
    "revision": "1d1232e8c47458bc063584275c59503f"
  },
  {
    "url": "develop/plugin/Resource-Handling.html",
    "revision": "82e46a7e8e9de223a777e8e43597379e"
  },
  {
    "url": "develop/REST-API-java-client.html",
    "revision": "7c722041edc5fb3a56ee71f466d6953a"
  },
  {
    "url": "develop/REST-API-js-areCommunicator.html",
    "revision": "61109e4b27e7ce01f281383c5688d65e"
  },
  {
    "url": "develop/REST-API-js-wrapper-ext.html",
    "revision": "cbd3ff2c884a2bef93916799e7f61276"
  },
  {
    "url": "develop/REST-API.html",
    "revision": "18126f698f51ac77353c114a369a307c"
  },
  {
    "url": "develop/REST-demos.html",
    "revision": "a1d62a948341057b315098f5bca3c0ff"
  },
  {
    "url": "develop/Unit-Testing.html",
    "revision": "d74ed28d31431dc9a7d5e65625aa2178"
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
    "revision": "d775f8f97792c2766421bfb5d7277508"
  },
  {
    "url": "get-involved/Contact.html",
    "revision": "f2c45fe9478e2af191379d904f4df58d"
  },
  {
    "url": "get-involved/Contribute.html",
    "revision": "2aa8ed56ba90a71bcb4c641f5dd3807a"
  },
  {
    "url": "get-involved/index.html",
    "revision": "980f3b9d217485ac1ab9f6061b26f019"
  },
  {
    "url": "get-involved/Legal-Notice.html",
    "revision": "64a0d2930e782ae28e6860a6e563af21"
  },
  {
    "url": "get-started/Demos.html",
    "revision": "839eda7ba70528993021c6d4494dc5b6"
  },
  {
    "url": "get-started/index.html",
    "revision": "cb265f27caff108544622bc3942fa83a"
  },
  {
    "url": "get-started/Installation.html",
    "revision": "cc2f63406cc3225d1d8c215187270b1a"
  },
  {
    "url": "get-started/Overview.html",
    "revision": "b30166af8cba52ffb0428ce89aae1195"
  },
  {
    "url": "guide/docs.html",
    "revision": "8c09b3198769774d7edb96294a98157f"
  },
  {
    "url": "guide/editor.html",
    "revision": "2702d9f0dabc3891a135779cac95e32a"
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
    "revision": "b8b1856fcf36364549f870461a9c7bf6"
  },
  {
    "url": "index.php.html",
    "revision": "c0bc6e8bf2b1b800e44277531d2720d4"
  },
  {
    "url": "manuals/ACS/Actuators.html",
    "revision": "6d125d7eca32868cc59c18b4735c3b54"
  },
  {
    "url": "manuals/ACS/Channels.html",
    "revision": "e444fd5ec1ea31446033f3a67d4b6624"
  },
  {
    "url": "manuals/ACS/Colours_settings.html",
    "revision": "978fe23756f7f3029613cc2089dbb348"
  },
  {
    "url": "manuals/ACS/Component_Collection_Manager.html",
    "revision": "a50a1b1d7ffff9a80c6bb7a889905045"
  },
  {
    "url": "manuals/ACS/Component_Context_Menu.html",
    "revision": "e39a07f82edbf582be2a1c527443a5f7"
  },
  {
    "url": "manuals/ACS/Connected.html",
    "revision": "7799fa737fcede8eef8ec42917e240d7"
  },
  {
    "url": "manuals/ACS/Control_the_ARE.html",
    "revision": "ef5269a627388d8d7377e5a3b7806a10"
  },
  {
    "url": "manuals/ACS/Create_and_Edit_a_Model.html",
    "revision": "ee08287c7da6b2eddfbc5f6f932ed760"
  },
  {
    "url": "manuals/ACS/Dialogs_settings.html",
    "revision": "f68f31068942d26b051a204d55f32167"
  },
  {
    "url": "manuals/ACS/Disconnected.html",
    "revision": "e4f70b74023e750be3d63ed80d2505ee"
  },
  {
    "url": "manuals/ACS/Events.html",
    "revision": "ebe43e6d9b7a28c638cfde599a9ef3d2"
  },
  {
    "url": "manuals/ACS/External_Tools_Options.html",
    "revision": "7b62868594d64f493ac492ca08e00034"
  },
  {
    "url": "manuals/ACS/External_Tools.html",
    "revision": "02ea370717ef64255513123637b1efd7"
  },
  {
    "url": "manuals/ACS/General_settings.html",
    "revision": "a778ef233c18f6270530de8d005810d8"
  },
  {
    "url": "manuals/ACS/GUI_Designer.html",
    "revision": "fb81ec2c17f00bc20863016e44d537fb"
  },
  {
    "url": "manuals/ACS/index.html",
    "revision": "13c489b781937394ecf932cae3bf8c9e"
  },
  {
    "url": "manuals/ACS/Keyboard_control.html",
    "revision": "912d357eaacbc6a2d1173df5991e9d7d"
  },
  {
    "url": "manuals/ACS/Load_and_Save_Models.html",
    "revision": "e91c3c1a960a98b493696bf580d8e132"
  },
  {
    "url": "manuals/ACS/Miscellaneous.html",
    "revision": "fe23c8d7c73b86c1da7d9ef675929757"
  },
  {
    "url": "manuals/ACS/Modes.html",
    "revision": "b26ffd940c462666260717495ff684f3"
  },
  {
    "url": "manuals/ACS/Options.html",
    "revision": "0b0d18463a7873010f52b83ff1131421"
  },
  {
    "url": "manuals/ACS/Pause.html",
    "revision": "97db36df08ae533ef5774d9574c2f229"
  },
  {
    "url": "manuals/ACS/Print.html",
    "revision": "0db0d42c0edf52e431626aa8815368bc"
  },
  {
    "url": "manuals/ACS/Processors.html",
    "revision": "807fe996b4d72281f896a48d570f540a"
  },
  {
    "url": "manuals/ACS/Running.html",
    "revision": "737d6feddac041b4a0ffc7758d37c189"
  },
  {
    "url": "manuals/ACS/Sensors.html",
    "revision": "8df315f010c4f3c4964dfc463cbcd546"
  },
  {
    "url": "manuals/ACS/Setting_the_Properties.html",
    "revision": "ff23464f8d4c77777a76a6e0a4aa5858"
  },
  {
    "url": "manuals/ACS/Status_Reporting_and_Error_Logging.html",
    "revision": "db56427cf8636bfb5bcd4f9fbd3bce36"
  },
  {
    "url": "manuals/ACS/Synchronized.html",
    "revision": "9fb451668ebceb7256be5682ee0e5ec7"
  },
  {
    "url": "manuals/ACS/The_Edit_Tab.html",
    "revision": "2bdfe94b1cda715b99a69f3005e15797"
  },
  {
    "url": "manuals/ACS/Tooltips.html",
    "revision": "002b909512b341975baa4c6205d6d951"
  },
  {
    "url": "manuals/ARE/index.html",
    "revision": "a2ae7d6bf5d08be00f931270029f3e9a"
  },
  {
    "url": "manuals/asterics-grid/01_terms.html",
    "revision": "33f2dfffcf5d7c7c2b4f1270bebc821f"
  },
  {
    "url": "manuals/asterics-grid/02_navigation.html",
    "revision": "c8fcb675f1d1073369ebf6347787c07e"
  },
  {
    "url": "manuals/asterics-grid/03_appearance_layout.html",
    "revision": "64dca257ac1f6ea992b5e65cf9371b86"
  },
  {
    "url": "manuals/asterics-grid/04_input_options.html",
    "revision": "fb06d4ada9493d3313f0cf5ef964e879"
  },
  {
    "url": "manuals/asterics-grid/05_actions.html",
    "revision": "d008feaf72e5dce1e084096377ed3c78"
  },
  {
    "url": "manuals/asterics-grid/06_users.html",
    "revision": "f5df6af05c1246247ee026d5d2c3365d"
  },
  {
    "url": "manuals/asterics-grid/07_dictionaries.html",
    "revision": "5e3245f6c75119f8eba03a9309f7698f"
  },
  {
    "url": "manuals/asterics-grid/index.html",
    "revision": "0460b1bc2d00ebda64afe0c3d3640f6a"
  },
  {
    "url": "manuals/index.html",
    "revision": "f2a501128e59ca13e860a3758a66a85a"
  },
  {
    "url": "manuals/WebACS/AREStatus.html",
    "revision": "65cec7555324edfc281fc9906e2bd7fa"
  },
  {
    "url": "manuals/WebACS/Channels.html",
    "revision": "c877592bf25334655325b3a957b04d16"
  },
  {
    "url": "manuals/WebACS/Control_the_ARE.html",
    "revision": "d3a26137d6273a5191cc1e0c5f4ebcea"
  },
  {
    "url": "manuals/WebACS/Create_and_Edit_a_Model.html",
    "revision": "3137c790ac1c7b139407d668940edad2"
  },
  {
    "url": "manuals/WebACS/Events.html",
    "revision": "fa81a84606fa4a89a3a914f52b4c0bad"
  },
  {
    "url": "manuals/WebACS/GUI_Designer.html",
    "revision": "cff032b0dad98321ee0a9d2bbac3e61c"
  },
  {
    "url": "manuals/WebACS/index.html",
    "revision": "f927500239a03803839c23680e613630"
  },
  {
    "url": "manuals/WebACS/Keyboard_control.html",
    "revision": "5d141aff36008a1d1dc59d1f42da84e7"
  },
  {
    "url": "manuals/WebACS/List_View.html",
    "revision": "617c97bd40088893699d64b76459043b"
  },
  {
    "url": "manuals/WebACS/Miscellaneous.html",
    "revision": "0b4bbe7806258562bc066ba97b46e39e"
  },
  {
    "url": "manuals/WebACS/Open_and_Save_Models.html",
    "revision": "b6b5f7dabb9e6f2e833518d5d363f8c1"
  },
  {
    "url": "manuals/WebACS/Setting_the_Properties.html",
    "revision": "2160e86954e9b3d452ba4d1a0fd7c10c"
  },
  {
    "url": "manuals/WebACS/The_Edit_Tab.html",
    "revision": "49ffa9253e570b6da64e890be757bf2c"
  },
  {
    "url": "plugins/actuators/AnalogOut.html",
    "revision": "6c6bc525bfa55946a827b93018b8865a"
  },
  {
    "url": "plugins/actuators/Android_connection.html",
    "revision": "3de558a43aed15472f80e10a34e21c75"
  },
  {
    "url": "plugins/actuators/android.svg",
    "revision": "e7790cd019054daf4e484e41e8991b13"
  },
  {
    "url": "plugins/actuators/AndroidPhoneControl.html",
    "revision": "ae1d9101a6c11d3132249956f20687b4"
  },
  {
    "url": "plugins/actuators/AngularCursorControl.html",
    "revision": "7ad67f1db7a5e21773b9625393b2aa18"
  },
  {
    "url": "plugins/actuators/ApplicationLauncher.html",
    "revision": "7831d42f96d47b5f322e52126045ac18"
  },
  {
    "url": "plugins/actuators/AREWindow.html",
    "revision": "7102e60e3679a0c8678983cd4c81ea75"
  },
  {
    "url": "plugins/actuators/BarDisplay.html",
    "revision": "eb0f69a174a9275828befb3a1c8fd764"
  },
  {
    "url": "plugins/actuators/CrosshairCursorControl.html",
    "revision": "d69b591ca04fad5eaa03b83449097421"
  },
  {
    "url": "plugins/actuators/DialogBox.html",
    "revision": "1538134b33c37d661fcb886f4e6edbf0"
  },
  {
    "url": "plugins/actuators/DigitalOut.html",
    "revision": "1ce3c1a8bcb69fe163c4f4f38db221c3"
  },
  {
    "url": "plugins/actuators/DotMeter.html",
    "revision": "744b883ec62b801eb97029ecd3a1ac7d"
  },
  {
    "url": "plugins/actuators/EasyHomeControl.html",
    "revision": "10468d8a35f5da644071c57599064c48"
  },
  {
    "url": "plugins/actuators/EmulateFaultyPlugin.html",
    "revision": "8c9db1db6feaffe082f58b8f05653872"
  },
  {
    "url": "plugins/actuators/EnobioDisplay.html",
    "revision": "90afc8295b12538c651283e3d43325c4"
  },
  {
    "url": "plugins/actuators/Enocean.html",
    "revision": "cc6f5da7eb111e400c837c74ddde0197"
  },
  {
    "url": "plugins/actuators/enocean.svg",
    "revision": "9cd40371d9d4e70f641266cdf21752f1"
  },
  {
    "url": "plugins/actuators/EventVisualizer.html",
    "revision": "b2739c0e73253efdaeaee6c58a8b9d80"
  },
  {
    "url": "plugins/actuators/FileWriter.html",
    "revision": "7672c6cc70084a984356f3035ba509c8"
  },
  {
    "url": "plugins/actuators/FlickeringLightStimulator.html",
    "revision": "b16e1378cf5f85adf4da1103ab5cf166"
  },
  {
    "url": "plugins/actuators/FS20Sender.html",
    "revision": "d9797068b2a79819332a011c70eac47e"
  },
  {
    "url": "plugins/actuators/gmail.svg",
    "revision": "1e7b4033d0f972a16d22609a8f6d9a38"
  },
  {
    "url": "plugins/actuators/GMailShortcuts.html",
    "revision": "4deed64c8dbca19fc10cf73b80342146"
  },
  {
    "url": "plugins/actuators/GSMModem.html",
    "revision": "8513e5b4fc7c3d524ec134feda6c4c46"
  },
  {
    "url": "plugins/actuators/ImageBox.html",
    "revision": "a455b10d33984dca7f8fbd2980f8ac42"
  },
  {
    "url": "plugins/actuators/infrared.svg",
    "revision": "f5236162c5bb8c950ca90cd3f1b27cca"
  },
  {
    "url": "plugins/actuators/IRTrans.html",
    "revision": "054f9ac2dacdaf6c7bd1ee6e8fed3d71"
  },
  {
    "url": "plugins/actuators/Keyboard.html",
    "revision": "ff2d4273dc7b4574b03343f71c19e743"
  },
  {
    "url": "plugins/actuators/Knx.html",
    "revision": "40b9e88bc5a7ab4b1d0206508a704a0e"
  },
  {
    "url": "plugins/actuators/knx.svg",
    "revision": "98a1cf7f3945ab6b8fd88a559429336b"
  },
  {
    "url": "plugins/actuators/LegacyDigitalOut.html",
    "revision": "301b803498c65b299662d53cd23cf797"
  },
  {
    "url": "plugins/actuators/LineWriter.html",
    "revision": "444a7e030512e560d26f60013678e33a"
  },
  {
    "url": "plugins/actuators/MediaPlayer.html",
    "revision": "2485a0891b60337302695a6d15b92f56"
  },
  {
    "url": "plugins/actuators/MidiPlayer.html",
    "revision": "defa578b18dd4f8ad12cfc9e42b1fcbe"
  },
  {
    "url": "plugins/actuators/ModelSwitcher.html",
    "revision": "363b1dae199d9119b4cb9a0ba3be271e"
  },
  {
    "url": "plugins/actuators/Mouse.html",
    "revision": "12abd86ddaf1956c541b2013e2ea8967"
  },
  {
    "url": "plugins/actuators/MousecursorIcon.html",
    "revision": "b13576ba1fb1a3308e804df9c6d8a6b2"
  },
  {
    "url": "plugins/actuators/NetConnection.html",
    "revision": "1ead6de4775abdd89539691351715081"
  },
  {
    "url": "plugins/actuators/osci.svg",
    "revision": "99e5b6196909314c773c113ef5556d93"
  },
  {
    "url": "plugins/actuators/Oscilloscope.html",
    "revision": "d069e00e1fdf73dd3faadbab5f1d0e36"
  },
  {
    "url": "plugins/actuators/OscOutClient.html",
    "revision": "715636b95c143f410438d8cf520eb531"
  },
  {
    "url": "plugins/actuators/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/actuators/PhilipsHue.html",
    "revision": "5aad96b72d5685f69229b379f0b8385e"
  },
  {
    "url": "plugins/actuators/PhoneControl.html",
    "revision": "8c8acac9d88e4b2f406ba09c486a97bb"
  },
  {
    "url": "plugins/actuators/PicoTTS.html",
    "revision": "b3db63276f39d0c4a75fee241bde6862"
  },
  {
    "url": "plugins/actuators/PlatformDigitalOut.html",
    "revision": "7fbc81c3bdf07766f0e2e1ccb1e8b2cb"
  },
  {
    "url": "plugins/actuators/PlatformLCD.html",
    "revision": "fc5faaff25ef466f7783118473bf4b44"
  },
  {
    "url": "plugins/actuators/pong.svg",
    "revision": "3c4f85d7ace78bd88351cd14346546ca"
  },
  {
    "url": "plugins/actuators/PongGame.html",
    "revision": "450879c3868f6f3284e0ba4111222600"
  },
  {
    "url": "plugins/actuators/RemoteJoystick.html",
    "revision": "e712e976c7b5122fd7b5ff1cef758120"
  },
  {
    "url": "plugins/actuators/RemoteKeyboard.html",
    "revision": "cdb6887136bee58b9f3ce2a17269165c"
  },
  {
    "url": "plugins/actuators/RemoteMouse.html",
    "revision": "2c4ec91a60a853c3085a96811633e337"
  },
  {
    "url": "plugins/actuators/RemoteTablet.html",
    "revision": "60b18017db91ec197cdb8946b5fc92b2"
  },
  {
    "url": "plugins/actuators/RemoteWindow.html",
    "revision": "756ca31cc9546d0b099bf9533b6ce701"
  },
  {
    "url": "plugins/actuators/SerialSender.html",
    "revision": "938f5dc3abf30040a9af010f2581db71"
  },
  {
    "url": "plugins/actuators/SkyWatcherMount.html",
    "revision": "cd578e65ca6d1c3bcb79b0c6aeb74d9a"
  },
  {
    "url": "plugins/actuators/SSVEPFileWriter.html",
    "revision": "26325c91e97f7e5f2aeb5199421c7aee"
  },
  {
    "url": "plugins/actuators/SSVEPStimulator.html",
    "revision": "d60392a00c3e0d8fad02955261f6b213"
  },
  {
    "url": "plugins/actuators/SyntheticVoice.html",
    "revision": "eff23f51df05cbdb78cf9bf0954b2734"
  },
  {
    "url": "plugins/actuators/TeensyRCPrototype.html",
    "revision": "d694cd2d869fe163a966fe9bbcc9645f"
  },
  {
    "url": "plugins/actuators/TextArea.html",
    "revision": "9cd8f59f8f0dbfdf599a7339085ed8e2"
  },
  {
    "url": "plugins/actuators/TextDisplay.html",
    "revision": "39901748134ac25811afc4eb58b5b90a"
  },
  {
    "url": "plugins/actuators/ToneGenerator.html",
    "revision": "ecf90ffe09d3d1a998096d3a76fa958d"
  },
  {
    "url": "plugins/actuators/Tooltip.html",
    "revision": "ce5485f292dfdca6ee2e3d8900882ea2"
  },
  {
    "url": "plugins/actuators/WavefilePlayer.html",
    "revision": "92db9991db1845eeef2820d4e167ab6f"
  },
  {
    "url": "plugins/actuators/WriteCSV.html",
    "revision": "52bfb1f5ff6defbcebd29878fc52748d"
  },
  {
    "url": "plugins/actuators/WriteEDF.html",
    "revision": "520c446862afeb25775b208924173a4f"
  },
  {
    "url": "plugins/index.html",
    "revision": "0e6849df9f79a907ad7bacf51d684a6e"
  },
  {
    "url": "plugins/processors/AcousticScanning.html",
    "revision": "909d4c5ad414cc9588a5bf3ed4be10fd"
  },
  {
    "url": "plugins/processors/AdjustmentCurve.html",
    "revision": "ae0dc4bde6a1205190598ce0efb7bf4b"
  },
  {
    "url": "plugins/processors/AmazonEchoControl.html",
    "revision": "8986682a01b6396be1643779d5772ce9"
  },
  {
    "url": "plugins/processors/Amplifier.html",
    "revision": "8c3daa061e8bbf18aad702bd9f744b99"
  },
  {
    "url": "plugins/processors/arduino-uno.svg",
    "revision": "c2a5829c840320e79e15074f54a18b3b"
  },
  {
    "url": "plugins/processors/Arduino.html",
    "revision": "fc728a4defc0b7348d353746c242a11f"
  },
  {
    "url": "plugins/processors/arduino.svg",
    "revision": "1df7842ac6355efe0d6d5e4dcdcc5c3e"
  },
  {
    "url": "plugins/processors/AudioSelector.html",
    "revision": "215ad03b95b2da18fd6a9a981ceaf822"
  },
  {
    "url": "plugins/processors/Averager.html",
    "revision": "3e2d656d449536d3b8b6e72722b1ca14"
  },
  {
    "url": "plugins/processors/BasicTRalgorithms.html",
    "revision": "6d5cbf758b9536d31b2dc7cbaef58a7c"
  },
  {
    "url": "plugins/processors/Benchmark.html",
    "revision": "98bf48fe79d69bbde7b9ecdbf0cee8bb"
  },
  {
    "url": "plugins/processors/BlinkChangeDetector.html",
    "revision": "d3d20fee9b006b00f080b775a69c718a"
  },
  {
    "url": "plugins/processors/BlinkDetection.html",
    "revision": "b496086cf22fa10c7cfad19821908ba7"
  },
  {
    "url": "plugins/processors/BlinkDetector.html",
    "revision": "3b67591d978ef79931c2d84e619f76df"
  },
  {
    "url": "plugins/processors/BlinkDetectorTrainer.html",
    "revision": "9fab837dc26c05fe11e6df32bf2d7936"
  },
  {
    "url": "plugins/processors/Comparator.html",
    "revision": "4ba46bde96bb30b66f434e16bec7dae7"
  },
  {
    "url": "plugins/processors/ComPort.html",
    "revision": "739da13ed665abd0d94b25b2b5bcab60"
  },
  {
    "url": "plugins/processors/ComputeBandpower.html",
    "revision": "fdb7f053b12dabb84a14a0aa3fc3c402"
  },
  {
    "url": "plugins/processors/ConstantDispatcher.html",
    "revision": "545d07be9e24692530281e2f3cb4b406"
  },
  {
    "url": "plugins/processors/DataType.html",
    "revision": "4e3685b657bbc11939dc9ead1fdbd4b1"
  },
  {
    "url": "plugins/processors/DateToDouble.html",
    "revision": "40afb0de65290c781114de029b7f58e1"
  },
  {
    "url": "plugins/processors/Deadzone.html",
    "revision": "dfb618fe62925d8069fd7c490bf07569"
  },
  {
    "url": "plugins/processors/Decimation.html",
    "revision": "5834712bbe6887894453ef189877fc46"
  },
  {
    "url": "plugins/processors/Delay.html",
    "revision": "9dda2b5cff3145b372f24c2d90412c6e"
  },
  {
    "url": "plugins/processors/Derivative.html",
    "revision": "b7133df75cc8681b9eca26dd78da0bee"
  },
  {
    "url": "plugins/processors/Differentiate.html",
    "revision": "ef5e1a0c267eadcb5e816a4e29d954b1"
  },
  {
    "url": "plugins/processors/Dissimilarity.html",
    "revision": "35924f7ea61778975df1e3a202c71ca2"
  },
  {
    "url": "plugins/processors/DoubleToString.html",
    "revision": "98c1abab1a086c91dda6b58f4a722097"
  },
  {
    "url": "plugins/processors/ECMAScriptInterpreter.html",
    "revision": "14e756e268c9800d8aa63a9723a4c9a1"
  },
  {
    "url": "plugins/processors/eg_example.html",
    "revision": "6589be6dd51f38375760e558cf1213d4"
  },
  {
    "url": "plugins/processors/EventBlock.html",
    "revision": "5ed2aa7acbb1e2eac7b04358b93b68c0"
  },
  {
    "url": "plugins/processors/EventCascade.html",
    "revision": "214a8d0619da233e67d7718aa996050f"
  },
  {
    "url": "plugins/processors/EventCounter.html",
    "revision": "84ad36783cf6bd764d540f40b41cf426"
  },
  {
    "url": "plugins/processors/EventDelay.html",
    "revision": "70b425a30a98dbb90dfee056538f6044"
  },
  {
    "url": "plugins/processors/EventDispatcher.html",
    "revision": "132ef02d8f20ad5411a11e03e5aaaefc"
  },
  {
    "url": "plugins/processors/EventFlipFlop.html",
    "revision": "a3d6a6b0e80552432024ff9a7413491d"
  },
  {
    "url": "plugins/processors/EventRouter.html",
    "revision": "3bec5a487545e1d1f5153d8c3da59cd8"
  },
  {
    "url": "plugins/processors/EventStateMachine.html",
    "revision": "ccda978de8690e0829d2a34a633761c9"
  },
  {
    "url": "plugins/processors/FABI.html",
    "revision": "d8c6ba2479102641d5d815bccc7d95a1"
  },
  {
    "url": "plugins/processors/FabiCronusMax.html",
    "revision": "7e5709f30e84cd471b4834d6197aff94"
  },
  {
    "url": "plugins/processors/Filter.html",
    "revision": "987e6ce71c9656a446029e978b654170"
  },
  {
    "url": "plugins/processors/FS20CommandInterpreter.html",
    "revision": "f30e38bcd2d2925fa15e260f7d2e824e"
  },
  {
    "url": "plugins/processors/HRVAnalysis.html",
    "revision": "6a9ad1faee434fd2cde530b2d40e76d3"
  },
  {
    "url": "plugins/processors/HRVRmssdFromRR.html",
    "revision": "e03ea58462480e8c296d290bf6dfd7ea"
  },
  {
    "url": "plugins/processors/IIRFilter.html",
    "revision": "a885cc91c49c7efd9533eb63fbf98661"
  },
  {
    "url": "plugins/processors/Integrate.html",
    "revision": "f10d1b9d091ef51111b0b2aafa38dafd"
  },
  {
    "url": "plugins/processors/IntToString.html",
    "revision": "fa49871df626ff41c0556296b20f5bb5"
  },
  {
    "url": "plugins/processors/IrMicro.html",
    "revision": "ded1313e5bbb932d02dddf5026cf35dd"
  },
  {
    "url": "plugins/processors/javascript.svg",
    "revision": "4ce031b5b57c4b726762dc700e7e0eb7"
  },
  {
    "url": "plugins/processors/JsonParser.html",
    "revision": "85a761fd097139137e2a29cff7813aac"
  },
  {
    "url": "plugins/processors/MathEvaluator.html",
    "revision": "8883374bcf576939bfd2fd18071262cb"
  },
  {
    "url": "plugins/processors/MinMax.html",
    "revision": "9aa5e37b97c0dab14861a6037274265e"
  },
  {
    "url": "plugins/processors/MotionAnalysis.html",
    "revision": "deaa1ac44b0de9501ca3d8ad663a8997"
  },
  {
    "url": "plugins/processors/MultiSource.html",
    "revision": "f188703b1afc9d55b8c268a19976663c"
  },
  {
    "url": "plugins/processors/MultiSourceString.html",
    "revision": "cbd21afc972bacd3d329b20c5048fd2a"
  },
  {
    "url": "plugins/processors/NeuralNetworkLoader.html",
    "revision": "be962343a9bf373ca548cdb30affade8"
  },
  {
    "url": "plugins/processors/NexusConnector.html",
    "revision": "f72a3c27dc4f8eb2b15f7ddd3b0a1718"
  },
  {
    "url": "plugins/processors/OneEventManyActions.html",
    "revision": "e91c12ef2d6df958e5cb8fe57a5136ca"
  },
  {
    "url": "plugins/processors/OpenHAB.html",
    "revision": "b7aa7c6b95645e927c72b16b4cc91444"
  },
  {
    "url": "plugins/processors/openhab.svg",
    "revision": "c6021fcfb65ae0fffecaeb7594e6a83c"
  },
  {
    "url": "plugins/processors/OscGestureFollower.html",
    "revision": "6a5150c0a5d8a150c032fa57f6b26a45"
  },
  {
    "url": "plugins/processors/OskaExternalScanning1D.html",
    "revision": "bc710a3d7c9e3009e01e1c96b0fe5eef"
  },
  {
    "url": "plugins/processors/OskaExternalScanning2D.html",
    "revision": "88187ce46ea240a9764674a71186b6ef"
  },
  {
    "url": "plugins/processors/OskaInternalScanning.html",
    "revision": "eeac2b935e20f0a95dbbecf54e242252"
  },
  {
    "url": "plugins/processors/PathMultiplexer.html",
    "revision": "abb5701bc8fa11cff820dce721205265"
  },
  {
    "url": "plugins/processors/Pathselector.html",
    "revision": "951d1c87da92b1fee8bea38734d6225c"
  },
  {
    "url": "plugins/processors/PeakDetector.html",
    "revision": "a8b5355e0969d8c8cda8dbe4490ea21c"
  },
  {
    "url": "plugins/processors/ProtocolSSVEPTrain.html",
    "revision": "db10e2f62e28524d2c1b9908d93457b5"
  },
  {
    "url": "plugins/processors/Quantizer.html",
    "revision": "ace407bbc00b7ca571598912b6ad6f02"
  },
  {
    "url": "plugins/processors/RegularExpression.html",
    "revision": "f470e83bb116c661e5ef4443015c6a40"
  },
  {
    "url": "plugins/processors/RelativeMoveSampler.html",
    "revision": "1f2d36e41359482592fd32324c6c2b65"
  },
  {
    "url": "plugins/processors/SampleAndHold.html",
    "revision": "b668937549726cbdcae2a5a79dd465df"
  },
  {
    "url": "plugins/processors/Sampler.html",
    "revision": "8eb0902c390001d27f9f4d39525eeed5"
  },
  {
    "url": "plugins/processors/SerialPort.html",
    "revision": "ee9cca2c054458f23971d86190d5969c"
  },
  {
    "url": "plugins/processors/SerialSender.html",
    "revision": "3444e29de1d3bc2d26d4e00060e49de2"
  },
  {
    "url": "plugins/processors/SignalTranslation.html",
    "revision": "4fc1d14971ea0aced2854da08a5429dd"
  },
  {
    "url": "plugins/processors/SpeechProcessor.html",
    "revision": "770dd66d3d9bc0758b8ad5c32257e027"
  },
  {
    "url": "plugins/processors/SSVEPDetect.html",
    "revision": "9e37b3ae688cf3c904f2cbfcce5383c4"
  },
  {
    "url": "plugins/processors/StringAppend.html",
    "revision": "92ccd39bd27008cafaf16d7cf7dadf7c"
  },
  {
    "url": "plugins/processors/StringDelay.html",
    "revision": "bbe5d7f4d07007b28369bbcc52d290cc"
  },
  {
    "url": "plugins/processors/StringDispatcher.html",
    "revision": "611ba9bafeba8d30af93d3422b86bace"
  },
  {
    "url": "plugins/processors/StringExpander.html",
    "revision": "0e88422b9237f5383235cf6ed1e4e128"
  },
  {
    "url": "plugins/processors/StringExtractor.html",
    "revision": "066c53ff1f6b8a55e69fedb81a1f6738"
  },
  {
    "url": "plugins/processors/StringFilter.html",
    "revision": "c1b1f8cc267310c13647fd77ee3b0a0f"
  },
  {
    "url": "plugins/processors/StringFormatter.html",
    "revision": "4ac079c5fc0e47d999794867a6388d12"
  },
  {
    "url": "plugins/processors/StringPathMultiplexer.html",
    "revision": "177a439e527672bef5432e78641cda72"
  },
  {
    "url": "plugins/processors/StringPathSelector.html",
    "revision": "3258fa2d5101589e35fce06f3e447960"
  },
  {
    "url": "plugins/processors/StringSplitter.html",
    "revision": "3edae65ad40cbd8e07c2a9e894f2bcec"
  },
  {
    "url": "plugins/processors/StringToDouble.html",
    "revision": "a6d61408786e2c739e3a642a5dc7545b"
  },
  {
    "url": "plugins/processors/StringToInt.html",
    "revision": "436d8b9938b6a075f192e89917cb43ac"
  },
  {
    "url": "plugins/processors/TextSender.html",
    "revision": "7fd23053e034b7a1bd1ca2888c50245d"
  },
  {
    "url": "plugins/processors/Threshold.html",
    "revision": "c3608424070a6a6b48e28ca511921a00"
  },
  {
    "url": "plugins/processors/TimestampWriter.html",
    "revision": "6577b485271e022cc49867b39c88ba08"
  },
  {
    "url": "plugins/processors/UniversalRemoteControl.html",
    "revision": "95351bde77a8cf3fd554bf0743dca018"
  },
  {
    "url": "plugins/processors/WebSocket.html",
    "revision": "499206cced695047c476e68b2ac8be82"
  },
  {
    "url": "plugins/processors/Yaak.html",
    "revision": "2e79cddad1c0aa4ba52cb0de5ec60382"
  },
  {
    "url": "plugins/sensors/Acceleration.html",
    "revision": "81385276e0b8801b392d317ad233a491"
  },
  {
    "url": "plugins/sensors/AnalogIn.html",
    "revision": "ab63d5c96379f30a15aca7fe291139f2"
  },
  {
    "url": "plugins/sensors/AutostartEvent.html",
    "revision": "178b88a4378480b789a6ab0a7734b53f"
  },
  {
    "url": "plugins/sensors/ButtonGrid.html",
    "revision": "10bec5f78d944232f12feb2eef9d6dbe"
  },
  {
    "url": "plugins/sensors/CellBoard.html",
    "revision": "58f377bd51d35a3870c10bf512264360"
  },
  {
    "url": "plugins/sensors/DigitalIn.html",
    "revision": "4b0813187abdb569f21d33a36922cfa9"
  },
  {
    "url": "plugins/sensors/EditBox.html",
    "revision": "f4de1f53f52c2ea930c8da3516c4abdd"
  },
  {
    "url": "plugins/sensors/Enobio.html",
    "revision": "90777ab9c11517240b406ac03d410052"
  },
  {
    "url": "plugins/sensors/EOG.html",
    "revision": "857e23aefbf0def0fcee2d2d1a528a23"
  },
  {
    "url": "plugins/sensors/EShoe.html",
    "revision": "6ddb3b474de49076f30fad0b2726c2f2"
  },
  {
    "url": "plugins/sensors/EventGenerator.html",
    "revision": "d2639546041c80ef8c713faf60b3350a"
  },
  {
    "url": "plugins/sensors/Eyetracker.html",
    "revision": "2f398606a2c24a49fcf83549021a9403"
  },
  {
    "url": "plugins/sensors/EyeTribe.html",
    "revision": "5557a932f8ab315a604414f27194e3f1"
  },
  {
    "url": "plugins/sensors/EyeX.html",
    "revision": "a3c5676ab3ddfb2cb2463173d65f6db3"
  },
  {
    "url": "plugins/sensors/FacetrackerCLM.html",
    "revision": "f920ddfb7c911312a47529d22681497e"
  },
  {
    "url": "plugins/sensors/FacetrackerLK.html",
    "revision": "0d8b74608a476f8725e8061a9a8e3e13"
  },
  {
    "url": "plugins/sensors/FolderBrowser.html",
    "revision": "dc4396fbf2e3e5cdb6290a922fb9917b"
  },
  {
    "url": "plugins/sensors/FS20Receiver.html",
    "revision": "65c4dd1ee6396e9d7555b0f0d7994a2d"
  },
  {
    "url": "plugins/sensors/HeadPositionHC.html",
    "revision": "7d5554e8bf1dfa50d3f36ee2a411ddb7"
  },
  {
    "url": "plugins/sensors/HoverPanel.html",
    "revision": "1493bf4d9c0d5d7c60e15617a067083b"
  },
  {
    "url": "plugins/sensors/IntelRealSense.html",
    "revision": "f9e33e624e831de499f4a3ced34fb895"
  },
  {
    "url": "plugins/sensors/JoystickCapture.html",
    "revision": "f1dd065172eba0b30184bc9467bc347e"
  },
  {
    "url": "plugins/sensors/KeyboardCapture.html",
    "revision": "eb2bbd393739a3862101a447d4656422"
  },
  {
    "url": "plugins/sensors/KeyCapture.html",
    "revision": "bd46205f2fd885f0321258d82b18f254"
  },
  {
    "url": "plugins/sensors/Kinect.html",
    "revision": "bcc861c68b8b78e4d8698837cfab6e30"
  },
  {
    "url": "plugins/sensors/kinect.png",
    "revision": "34f240cb60e07972fa97031c5bd21964"
  },
  {
    "url": "plugins/sensors/KinectJ4K.html",
    "revision": "0122b20e79abd2681fcafe1f8ff6c0dd"
  },
  {
    "url": "plugins/sensors/kinectj4k.png",
    "revision": "25e7e6fd6803b37e4dfdeef31c1074af"
  },
  {
    "url": "plugins/sensors/LegacyAnalogIn.html",
    "revision": "1e90e43a758e3015a2270d6709e6d493"
  },
  {
    "url": "plugins/sensors/LegacyDigitalIn.html",
    "revision": "a601c16f859d40e96fd2c974057431c2"
  },
  {
    "url": "plugins/sensors/Lightscore.html",
    "revision": "467edba2c867fb86d6aab21df6db3895"
  },
  {
    "url": "plugins/sensors/LineReader.html",
    "revision": "21809146a1d8085d8b7932f6070b5c11"
  },
  {
    "url": "plugins/sensors/lipmouse-ir.svg",
    "revision": "34bb4aa7203f2eb11488121d91d25b6a"
  },
  {
    "url": "plugins/sensors/Lipmouse.html",
    "revision": "29d83a63a27b75d9ecdaceb6cd38031f"
  },
  {
    "url": "plugins/sensors/lipmouse.png",
    "revision": "d59692a5eeadfdaa05bd33d1ae38814b"
  },
  {
    "url": "plugins/sensors/LipmouseIR.html",
    "revision": "c6445d40bbbaa72fd53f08ef1cef8bb8"
  },
  {
    "url": "plugins/sensors/MicGPI.html",
    "revision": "8f475db4efd76add72045bd3d837323f"
  },
  {
    "url": "plugins/sensors/MouseCapture.html",
    "revision": "ee044b33537d261ed48263d86208e721"
  },
  {
    "url": "plugins/sensors/OpenBCI.html",
    "revision": "a36b01ea91629b701ab1f381a1e77e0a"
  },
  {
    "url": "plugins/sensors/OpenVibe.html",
    "revision": "d614b9b77268385c4f183cde50583763"
  },
  {
    "url": "plugins/sensors/OscServer.html",
    "revision": "57c9c25ad4d39d3e6eb0c0496f4e4333"
  },
  {
    "url": "plugins/sensors/P2_Parser.html",
    "revision": "b21636cfa4eb269c49131d5bf44e76c1"
  },
  {
    "url": "plugins/sensors/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/sensors/PhilipsHueSensor.html",
    "revision": "8bfe77bc95fdd56e955fe22f306f8fbd"
  },
  {
    "url": "plugins/sensors/PlatformAnalogIn.html",
    "revision": "28088faf3c37ffc2700f6ef2d698004f"
  },
  {
    "url": "plugins/sensors/PlatformDigitalIn.html",
    "revision": "9f27131aec02dacd0d0e14319d182057"
  },
  {
    "url": "plugins/sensors/Proximity.html",
    "revision": "ef752ce545c975307713626511d6d883"
  },
  {
    "url": "plugins/sensors/RandomNumber.html",
    "revision": "2d7cbe437e4b7b7d9da884be1d401f40"
  },
  {
    "url": "plugins/sensors/RazorIMU.html",
    "revision": "dc90abe5b9fe66f72ce0aa72f41c7af8"
  },
  {
    "url": "plugins/sensors/ReadCSV.html",
    "revision": "54ed252294985982c703308b8b4894e3"
  },
  {
    "url": "plugins/sensors/ReadEDF.html",
    "revision": "8b8397d0f4d590f4775568ff5423734f"
  },
  {
    "url": "plugins/sensors/RFIDReader.html",
    "revision": "30d5aab96a8a833ec15e02bb34e47f54"
  },
  {
    "url": "plugins/sensors/Sensorboard.html",
    "revision": "48a6379c34663c77a136cf5ccaee28e8"
  },
  {
    "url": "plugins/sensors/SignalGenerator.html",
    "revision": "23205febaa37914baa8ad0a2006ef901"
  },
  {
    "url": "plugins/sensors/SignalShaper.html",
    "revision": "babee3eb0f53cc21f6b3118245ea6443"
  },
  {
    "url": "plugins/sensors/Slider.html",
    "revision": "1d3fa1f268fb4b37858510c8c3fa0647"
  },
  {
    "url": "plugins/sensors/SpaceNavigator3DMouse.html",
    "revision": "fb0447e9126ce4caccad92d3e713732a"
  },
  {
    "url": "plugins/sensors/TextfieldReader.html",
    "revision": "e69b3d8f7a10cee7184c3a695c93bf51"
  },
  {
    "url": "plugins/sensors/Timer.html",
    "revision": "1e91c4ad1774f1f7ef1310929ebce28b"
  },
  {
    "url": "plugins/sensors/tobi4c.png",
    "revision": "6777234a1aed6499d450cdf7ab19762a"
  },
  {
    "url": "plugins/sensors/Tobii4CHeadTracker.html",
    "revision": "084632f424fd86c6971aa7d250693ddb"
  },
  {
    "url": "plugins/sensors/TobiTic.html",
    "revision": "56b39ab622833d61373410d185a53a37"
  },
  {
    "url": "plugins/sensors/TuioReactivision.html",
    "revision": "4ba71b482ab354e812404326bc1862ec"
  },
  {
    "url": "plugins/sensors/WiiMote.html",
    "revision": "3b20c19ea17f5225bc90183cf10635e2"
  },
  {
    "url": "plugins/sensors/wiimote.png",
    "revision": "8a5c2c5a7a221add26dead3904975fda"
  },
  {
    "url": "plugins/sensors/XFacetrackerLK.html",
    "revision": "f578058d8571a032fc05432a5b218c36"
  },
  {
    "url": "solutions/AAC-Basic.html",
    "revision": "71c33f8df83f82616890c046a3a49537"
  },
  {
    "url": "solutions/Camera-Mouse.html",
    "revision": "ac8da9228d435e971f6321f6c5b357b8"
  },
  {
    "url": "solutions/Eye-Tracking-Mouse.html",
    "revision": "29092fb39a3b2f1246bbb99c4c3a06ae"
  },
  {
    "url": "solutions/Head-Sound.html",
    "revision": "c44792461ca327721f0801efac0a6980"
  },
  {
    "url": "solutions/index.html",
    "revision": "7ef81c5fc6246e4da0f6f70d8cea30e3"
  },
  {
    "url": "solutions/Switch-Mouse.html",
    "revision": "75eb72526b8862e709802e8f2b57570d"
  },
  {
    "url": "webapps/asterics-camerainput-cameramouse/img/facetrackerLK-videoframe.png",
    "revision": "5e64e4665821406c59fcf982c586ca34"
  },
  {
    "url": "webapps/asterics-camerainput-cameramouse/index.html",
    "revision": "361ca6fe670dcbd7e8dfaebab9a95830"
  },
  {
    "url": "webapps/asterics-camerainput-eyecontrol/img/facetrackerLK-videoframe.png",
    "revision": "5e64e4665821406c59fcf982c586ca34"
  },
  {
    "url": "webapps/asterics-camerainput-eyecontrol/index.html",
    "revision": "6a783c8b21727c1edd3f6369b5da42f0"
  },
  {
    "url": "webapps/AT-solution-IDE.html",
    "revision": "93c4d7c5005f6e424f728790b489aec1"
  },
  {
    "url": "webapps/Plugin-IDE.html",
    "revision": "01cac7a032832375a00e3a08f5a3d4f5"
  },
  {
    "url": "webapps/startpage/clientExample/are_repository.html",
    "revision": "9db5d9789df21e8fdd0aefd31b4c0168"
  },
  {
    "url": "webapps/startpage/clientExample/are_runtime.html",
    "revision": "60878211f6f344bf73d0aa0b79093caf"
  },
  {
    "url": "webapps/startpage/clientExample/client_template.html",
    "revision": "f526462b7f37196e869badfb6508fe3c"
  },
  {
    "url": "webapps/startpage/clientExample/client.html",
    "revision": "32bb5eca516788fd1701893890de17fa"
  },
  {
    "url": "webapps/startpage/clientExample/img/logo.png",
    "revision": "326ac66ffbe44d9c22e0e55471bc2c1d"
  },
  {
    "url": "webapps/startpage/clientExample/javascript/areCommunicator.js",
    "revision": "530214e144d4fe87d0c74fe0729ab682"
  },
  {
    "url": "webapps/startpage/clientExample/javascript/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "webapps/startpage/clientExample/javascript/JSmap.js",
    "revision": "272858dc7166fa8dad29e55323cbb540"
  },
  {
    "url": "webapps/startpage/clientExample/runtime_model_channels.html",
    "revision": "4509cca439c8687f5b17faec11fd6d23"
  },
  {
    "url": "webapps/startpage/clientExample/runtime_model_components.html",
    "revision": "adc709bb03bd35a60a0575f552998b5b"
  },
  {
    "url": "webapps/startpage/clientExample/runtime_model_deployment.html",
    "revision": "841c953810ce69da5624465fdf554c07"
  },
  {
    "url": "webapps/startpage/clientExample/runtime_model_state.html",
    "revision": "5b955b21b11e9a24623156902ddf0d88"
  },
  {
    "url": "webapps/startpage/clientExample/sse.html",
    "revision": "7c0aae2cf51560631c56a2cead31913c"
  },
  {
    "url": "webapps/startpage/clientExample/style.css",
    "revision": "dfe2ec79fcc44ffa6c0e8f0f1a07e0a7"
  },
  {
    "url": "webapps/startpage/lib/areCommunicator.js",
    "revision": "530214e144d4fe87d0c74fe0729ab682"
  },
  {
    "url": "webapps/startpage/lib/jquery-3.2.1.min.js",
    "revision": "c9f5aeeca3ad37bf2aa006139b935f0a"
  },
  {
    "url": "webapps/startpage/lib/JSmap.js",
    "revision": "272858dc7166fa8dad29e55323cbb540"
  },
  {
    "url": "webapps/startpage/lib/modelManipulation.js",
    "revision": "1880d1f5225ff8cd7751f1b5c8244cd1"
  },
  {
    "url": "webapps/startpage/lib/webAppUtils.js",
    "revision": "39a2713ad05ac3943fe6b6c00274891e"
  },
  {
    "url": "webapps/startpage/start.html",
    "revision": "8dd457e771c16179dab0712a3e6e0655"
  }
].concat(self.__precacheManifest || []);
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
