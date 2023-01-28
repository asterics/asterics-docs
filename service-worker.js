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
    "revision": "d401d2063a9681d0fefb0454ac1ac3eb"
  },
  {
    "url": "assets/css/0.styles.368da9fd.css",
    "revision": "4d2e448edaa62a270ad28499f7636ad3"
  },
  {
    "url": "assets/fonts/fa-brands-400.0ef11ce0.ttf",
    "revision": "0ef11ce096706bcafc520aee12162ae4"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2f5b365.woff2",
    "revision": "e2f5b365c7d3d4497da73148ddfae997"
  },
  {
    "url": "assets/fonts/fa-regular-400.40e6df55.ttf",
    "revision": "40e6df55734232692408d76ad5f9c34a"
  },
  {
    "url": "assets/fonts/fa-regular-400.4b162098.woff2",
    "revision": "4b162098158528431aeb5636116777f0"
  },
  {
    "url": "assets/fonts/fa-solid-900.328a9d0f.woff2",
    "revision": "328a9d0f59f0ebb55cddac6f39995bea"
  },
  {
    "url": "assets/fonts/fa-solid-900.c0bf087a.ttf",
    "revision": "c0bf087a238488d351270a35c8f0cca0"
  },
  {
    "url": "assets/fonts/fa-v4compatibility.36818ecc.ttf",
    "revision": "36818ecc50af8ea6c4cbef88d0b2baad"
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
    "url": "assets/img/action_asterics_en.54d3853f.jpg",
    "revision": "54d3853f85b56e5f48b1306e29ad3c5e"
  },
  {
    "url": "assets/img/action_collectelement_en.952cdee0.jpg",
    "revision": "952cdee020cf946b33302be6f7224fad"
  },
  {
    "url": "assets/img/action_fillprediction_en.56c3896c.jpg",
    "revision": "56c3896c24c7a429417cfd6e0c52794b"
  },
  {
    "url": "assets/img/action_navigate_en.93385269.jpg",
    "revision": "93385269dc5d72cfe09fa7956e6cad03"
  },
  {
    "url": "assets/img/action_play_recorded_audio.ef999c80.png",
    "revision": "ef999c80937a149e9bd36f856f6e4e30"
  },
  {
    "url": "assets/img/action_speak_custom_en.d0ea64af.jpg",
    "revision": "d0ea64af53f40e909bb3f809a54dadfd"
  },
  {
    "url": "assets/img/action_speak_label_en.fa6d559c.jpg",
    "revision": "fa6d559cb75b8ce3528ac13ceeb2b999"
  },
  {
    "url": "assets/img/action_webradio_en.bdd8c3be.jpg",
    "revision": "bdd8c3bef7098dcb3cf5fc123b3218a5"
  },
  {
    "url": "assets/img/add_offline_en.3ac438a3.jpg",
    "revision": "3ac438a3441d4373dd26968cc7f43116"
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
    "url": "assets/img/dictionary_edit_en.03a0c3d0.jpg",
    "revision": "03a0c3d099040d9e6cc7785e1bad35f4"
  },
  {
    "url": "assets/img/dictionary_import_en.9c40fcb3.jpg",
    "revision": "9c40fcb324645c6f2850c11466413467"
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
    "url": "assets/img/edit_element_menu_en_edit.71e6f08b.jpg",
    "revision": "71e6f08b51fbe4f8f4a8bf227eaaa9fc"
  },
  {
    "url": "assets/img/edit_element_menu_en.41b988c2.jpg",
    "revision": "41b988c2a62a9d9071bac1259f2e3a53"
  },
  {
    "url": "assets/img/edit_en.c2cbce4a.jpg",
    "revision": "c2cbce4a280a463625c2df5dda4350c6"
  },
  {
    "url": "assets/img/edit_grid_element_actions_en.8cb3125d.jpg",
    "revision": "8cb3125d0f25584b298977f63a0a1996"
  },
  {
    "url": "assets/img/edit_grid_element_general_en.c0b2582a.jpg",
    "revision": "c0b2582a9fe7c4dda032420ee70a30b8"
  },
  {
    "url": "assets/img/edit_grid_element_image_en.d78a5e47.jpg",
    "revision": "d78a5e479f6c19bb615fc8ac1818e8d9"
  },
  {
    "url": "assets/img/edit_moremenu_en.619098c5.jpg",
    "revision": "619098c5dee863b68a64d5ab1b30ecc4"
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
    "url": "assets/img/github-dev-preview.1b4ac609.png",
    "revision": "1b4ac609fc039a2b536de4685540c016"
  },
  {
    "url": "assets/img/github-edit-commit-explanation.71943c6f.png",
    "revision": "71943c6f44d6f2a50349c95f25a59d47"
  },
  {
    "url": "assets/img/github-edit-preview.73262122.png",
    "revision": "7326212236523564e63d7b85f66ce008"
  },
  {
    "url": "assets/img/github-edit-upload.4d561aef.png",
    "revision": "4d561aef3a30db953659fe731f6e6ca5"
  },
  {
    "url": "assets/img/github-edit.407e1611.png",
    "revision": "407e161118404c2ffc8495b70852e71e"
  },
  {
    "url": "assets/img/github-upload-location.98927c88.png",
    "revision": "98927c88995727e9bea57b2076304455"
  },
  {
    "url": "assets/img/github-upload.56f5573f.png",
    "revision": "56f5573fe35c32cc3dc611f00961cd5d"
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
    "url": "assets/img/input_channel_keyboard_en.00286afa.jpg",
    "revision": "00286afa3ed46e43fda2eae20fa7bed7"
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
    "url": "assets/img/main_en.0dfdaa0e.jpg",
    "revision": "0dfdaa0e0b59f285e78de058175c7d54"
  },
  {
    "url": "assets/img/main.a269c26b.png",
    "revision": "a269c26b06b0429a9b2c71601e2467e2"
  },
  {
    "url": "assets/img/manage_dict_en.9115ef99.jpg",
    "revision": "9115ef991ea3f589d4699a4ad7290032"
  },
  {
    "url": "assets/img/manage_grids_en.7487da8f.jpg",
    "revision": "7487da8f22c2ed1df8997e0a521fea58"
  },
  {
    "url": "assets/img/manage_grids_more_en.6f493d95.jpg",
    "revision": "6f493d95e3b25c8c9d01be917864abbc"
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
    "url": "assets/img/openHAB-configuration.2613f28d.png",
    "revision": "2613f28d3d1994fa0ed819fdbc6f23c3"
  },
  {
    "url": "assets/img/openHAB-https-exception.efb54332.png",
    "revision": "efb543329b6733af16e070d2c9e150d3"
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
    "url": "assets/js/1.30149d49.js",
    "revision": "94ca6a4680e2b186cd88a540baf95d1f"
  },
  {
    "url": "assets/js/10.173fbb75.js",
    "revision": "6c3d176490b1e4e54e9f251f42336cba"
  },
  {
    "url": "assets/js/100.db169cfb.js",
    "revision": "ed9e0b737b07a4eb186132f443521ba3"
  },
  {
    "url": "assets/js/101.9addfa88.js",
    "revision": "b75e3ec9deb58045eda604e313276708"
  },
  {
    "url": "assets/js/102.a166ffdd.js",
    "revision": "b2f916046c1075ff928ebeff3e209d7e"
  },
  {
    "url": "assets/js/103.baa4f182.js",
    "revision": "00d40a2ff7d7a5a002e9931762252d4a"
  },
  {
    "url": "assets/js/104.a9de914b.js",
    "revision": "851cf44e8a9a7b42a1bcee1a96f60dc7"
  },
  {
    "url": "assets/js/105.8f480820.js",
    "revision": "991058be8e4ad76f34952683615c4537"
  },
  {
    "url": "assets/js/106.bb3abc36.js",
    "revision": "b38cabf48dd667197e1ac02f32c5a4ac"
  },
  {
    "url": "assets/js/107.a026d8ea.js",
    "revision": "5850b96997a2cbb36203833d99955e85"
  },
  {
    "url": "assets/js/108.4465c520.js",
    "revision": "8e6fdb5b45c5c12e45e976aa70291948"
  },
  {
    "url": "assets/js/109.7f7b7ac9.js",
    "revision": "7e7cb6df1579e08702d7609c225dabe1"
  },
  {
    "url": "assets/js/11.5ce53673.js",
    "revision": "e112ea9bca94bbcdbc281c999afb52be"
  },
  {
    "url": "assets/js/110.f42aa7e4.js",
    "revision": "1deb6989345250372b0b15e9608b420d"
  },
  {
    "url": "assets/js/111.f1b5039f.js",
    "revision": "b5b7a467f361f46adb7cfacd9209cabd"
  },
  {
    "url": "assets/js/112.0d89d69a.js",
    "revision": "79a40db39572f48ac5d24cea541b2708"
  },
  {
    "url": "assets/js/113.c9432597.js",
    "revision": "ec5c003afad24dbbecd97f9cb71b1ca3"
  },
  {
    "url": "assets/js/114.462a67e2.js",
    "revision": "f9d569b52e977a03baa919fee2598e8d"
  },
  {
    "url": "assets/js/115.79cfcb44.js",
    "revision": "b2c9f00acbedc84c7dd8b52a33f2c6c1"
  },
  {
    "url": "assets/js/116.8c490c0e.js",
    "revision": "7e107aee4c52cf576efab0fedc0e5f98"
  },
  {
    "url": "assets/js/117.155fc206.js",
    "revision": "17cfb8d103451810e2dbc013f0d22821"
  },
  {
    "url": "assets/js/118.63529000.js",
    "revision": "caa808cacb4913b0eadb1f5a4f81c207"
  },
  {
    "url": "assets/js/119.a5b167e0.js",
    "revision": "90ceffc07ad47e6f3fc95a820db75a2e"
  },
  {
    "url": "assets/js/12.6f202134.js",
    "revision": "d585475c306531ae0a29ce56d8ebec60"
  },
  {
    "url": "assets/js/120.e61afc4a.js",
    "revision": "f4420a62910fe733d8edda686e3cd6e2"
  },
  {
    "url": "assets/js/121.4eb6eb93.js",
    "revision": "b9ac0bf501c70cc0671e5b8dc5d65906"
  },
  {
    "url": "assets/js/122.9c565264.js",
    "revision": "1af2aae35eebf0a3b5a110327ee2e688"
  },
  {
    "url": "assets/js/123.142ff8b4.js",
    "revision": "f4ef42a96f986a8dbac8b88f660edd50"
  },
  {
    "url": "assets/js/124.e7cf1a1b.js",
    "revision": "b43028cbaf4074fe60bd5c4b48cfcac8"
  },
  {
    "url": "assets/js/125.1686c86e.js",
    "revision": "802e9c919635123a5a26ab1535315789"
  },
  {
    "url": "assets/js/126.580efb3c.js",
    "revision": "1e5d9fb7402b546a031f9ea1e045611f"
  },
  {
    "url": "assets/js/127.99bffcf3.js",
    "revision": "00dca697bcc47f4ef3486e326a64a0e7"
  },
  {
    "url": "assets/js/128.0d0bb471.js",
    "revision": "965bd6fc65d6f10e6ea0c208f0e22cc9"
  },
  {
    "url": "assets/js/129.441bdf34.js",
    "revision": "c1669a5d09666963e8e5f06b165c1893"
  },
  {
    "url": "assets/js/13.7e704ae1.js",
    "revision": "0bd61619086ab3ff31c05e290b480ab8"
  },
  {
    "url": "assets/js/130.fc221b5b.js",
    "revision": "8d06eeb6d1f5398e4ead94e34d4f0f09"
  },
  {
    "url": "assets/js/131.d6357684.js",
    "revision": "edb7dabab4bbb236dd90784051ffaa35"
  },
  {
    "url": "assets/js/132.ff717432.js",
    "revision": "cba1d26156fc486aabe3fbcf444a20df"
  },
  {
    "url": "assets/js/133.32b17731.js",
    "revision": "63395eb31fd0a9bdc8a38bf51d6a29bf"
  },
  {
    "url": "assets/js/134.e2ce4140.js",
    "revision": "36d906f717955204865e5fd746837446"
  },
  {
    "url": "assets/js/135.6ecfc6ca.js",
    "revision": "a374d7c4c1ada436c62f56fb0a6050e4"
  },
  {
    "url": "assets/js/136.bc3f6c05.js",
    "revision": "f3f094dbfb60aa711abbdbfc744dbb5d"
  },
  {
    "url": "assets/js/137.329273dd.js",
    "revision": "2affd2e5b5e1b8be0d6da733cf03520a"
  },
  {
    "url": "assets/js/138.33923962.js",
    "revision": "76e85b3b8536e06d37732c218d5c99b1"
  },
  {
    "url": "assets/js/139.9fc47bbb.js",
    "revision": "0f37fe2d1534aae68e1b454b03d66410"
  },
  {
    "url": "assets/js/14.2001cdbb.js",
    "revision": "28c983423940d68ed59d1cd344049ab6"
  },
  {
    "url": "assets/js/140.4c688998.js",
    "revision": "fe3ba17a3b104dc14714ef2fec464136"
  },
  {
    "url": "assets/js/141.a00fd7b2.js",
    "revision": "b8e07d1e0aab546d39b30401482af2db"
  },
  {
    "url": "assets/js/142.72dd4e28.js",
    "revision": "a9d764e64d51aa82a1e75385df15542f"
  },
  {
    "url": "assets/js/143.8bddd35a.js",
    "revision": "7de3d8a7680915349b09a1dde4165b80"
  },
  {
    "url": "assets/js/144.eae8c020.js",
    "revision": "46d20b362fb6ecd1020a9c6fdc09ef17"
  },
  {
    "url": "assets/js/145.99c3fdf5.js",
    "revision": "beea56d6a98b6fb7cc1b43367de655df"
  },
  {
    "url": "assets/js/146.994ac81f.js",
    "revision": "32afcce8966494b72e78f0691fb67491"
  },
  {
    "url": "assets/js/147.d28ec8ea.js",
    "revision": "745356c5e9f3d382d5f4cdf074fc11f1"
  },
  {
    "url": "assets/js/148.3bdb582a.js",
    "revision": "4bb4739014810567ab275378a2a18a70"
  },
  {
    "url": "assets/js/149.8a3b2237.js",
    "revision": "89d59b5947cb1c484f77465329e55f28"
  },
  {
    "url": "assets/js/15.5eeb83d3.js",
    "revision": "c8dd3aac1344cb525ac9a898affad18d"
  },
  {
    "url": "assets/js/150.2c6b2ef6.js",
    "revision": "21716e2a59e1bec7571515d0d9974472"
  },
  {
    "url": "assets/js/151.5966dd8e.js",
    "revision": "1b58989057da3225e99be51d8ab83ea3"
  },
  {
    "url": "assets/js/152.c17bc53e.js",
    "revision": "6dc2c447d4d5783540955a05a690f4f6"
  },
  {
    "url": "assets/js/153.439427d4.js",
    "revision": "6b52f018d1edd0caa94e7dd4ad79d202"
  },
  {
    "url": "assets/js/154.82a532bd.js",
    "revision": "eb820d100d330d8ef684e9315c5d2a39"
  },
  {
    "url": "assets/js/155.6be2a6e3.js",
    "revision": "a3060a6d9eb344853b1a219990ec6f2d"
  },
  {
    "url": "assets/js/156.17baa2c1.js",
    "revision": "83f608e45ab1f23c4c846004abaf0c2a"
  },
  {
    "url": "assets/js/157.54c42d76.js",
    "revision": "d2013bbce91408d6bbf86b37083106e0"
  },
  {
    "url": "assets/js/158.0f2d114c.js",
    "revision": "cde137357aebfc5b8c4229dc6e629fbc"
  },
  {
    "url": "assets/js/159.c4676b07.js",
    "revision": "d7fceeb78269b7c30517265065b9d167"
  },
  {
    "url": "assets/js/16.23989e13.js",
    "revision": "dd94033c9ef0bd0029daa5537fc4f830"
  },
  {
    "url": "assets/js/160.39ac625a.js",
    "revision": "07b52f1c9eea34c624745c7e92d6bcab"
  },
  {
    "url": "assets/js/161.2eeb85b2.js",
    "revision": "33e9c2aba2487bf0988079f8f8c88c5c"
  },
  {
    "url": "assets/js/162.ec917acc.js",
    "revision": "59e2fe0abd213b27abd801d83a805104"
  },
  {
    "url": "assets/js/163.35dc9355.js",
    "revision": "c36dcf0981bfe8cfa716939b9c27255e"
  },
  {
    "url": "assets/js/164.841280ed.js",
    "revision": "f5cd78d1d8c3ad0170ec260079b80104"
  },
  {
    "url": "assets/js/165.836c85e4.js",
    "revision": "b94001184070683cf6599ad2b62b07cb"
  },
  {
    "url": "assets/js/166.5089d760.js",
    "revision": "499ffee94312cd149317a699a6183baf"
  },
  {
    "url": "assets/js/167.4ca29466.js",
    "revision": "28ebecad5b0177b6ddfc9ef87db1c84d"
  },
  {
    "url": "assets/js/168.81edbda1.js",
    "revision": "5ac2bf9f5649cd5fc845842ab12dd80c"
  },
  {
    "url": "assets/js/169.41b9c3d6.js",
    "revision": "70f130fffbc93bdf6e9e2d3187aefe1d"
  },
  {
    "url": "assets/js/17.1f03ffd7.js",
    "revision": "4ab34ec65f6be42012e723dbd8d3df1b"
  },
  {
    "url": "assets/js/170.98c69b91.js",
    "revision": "ba1ede0f7a7b1c87a9accd39e30ac11c"
  },
  {
    "url": "assets/js/171.19b1c223.js",
    "revision": "71bfa3b160dbc7a85133aa4726714869"
  },
  {
    "url": "assets/js/172.113350a3.js",
    "revision": "0e05cd6451fafb0c852f173650968aa5"
  },
  {
    "url": "assets/js/173.c94f1046.js",
    "revision": "a50d9fc75d30335ed0a3545355b501c2"
  },
  {
    "url": "assets/js/174.dc2d4402.js",
    "revision": "031b07f186b43f5b5837045ccbc73447"
  },
  {
    "url": "assets/js/175.fbed6475.js",
    "revision": "78d1fbe87ce5a3814a476ab6b719b523"
  },
  {
    "url": "assets/js/176.5e70863e.js",
    "revision": "3ee72660d2569c38c3d920bde631a145"
  },
  {
    "url": "assets/js/177.50629f40.js",
    "revision": "015796b9d16f04914318aba92be6199b"
  },
  {
    "url": "assets/js/178.6388bbeb.js",
    "revision": "7b68ef6a4cf85f3e81b7d98de4e167b6"
  },
  {
    "url": "assets/js/179.e41df8b6.js",
    "revision": "04fc75811aca85cce2efbc8d90f10205"
  },
  {
    "url": "assets/js/18.a995ccbe.js",
    "revision": "6ad99f60188f03c5995e113b6b1afa90"
  },
  {
    "url": "assets/js/180.26300572.js",
    "revision": "6b73b8f5175d5bb662ce17a9b1c83eb1"
  },
  {
    "url": "assets/js/181.63ff8cc3.js",
    "revision": "89c4f00dd315c994b15f3e98b10fdf5d"
  },
  {
    "url": "assets/js/182.84abfa7d.js",
    "revision": "f9debf0e3e84de263002187ec867fc6f"
  },
  {
    "url": "assets/js/183.55ac5945.js",
    "revision": "8cbcdecf7659ac57cdc5accdabcf7385"
  },
  {
    "url": "assets/js/184.351cb325.js",
    "revision": "390b6912ffe6e5363b8837717019ee58"
  },
  {
    "url": "assets/js/185.783cc1f8.js",
    "revision": "fc13ba156d002526c4a03d96cd25b16e"
  },
  {
    "url": "assets/js/186.ce675ca9.js",
    "revision": "6b8a26b763ac0cc4085efe847dda18ae"
  },
  {
    "url": "assets/js/187.365acd68.js",
    "revision": "551b4ab4ded9dd0eeb528b385acadea3"
  },
  {
    "url": "assets/js/188.45a8208a.js",
    "revision": "641dac4477c3edb95c6d576c1b4edc11"
  },
  {
    "url": "assets/js/189.0a95475a.js",
    "revision": "089813a0c552b011eb5d570f0714e56a"
  },
  {
    "url": "assets/js/19.2a3b3987.js",
    "revision": "d3cfb82c282c2605c8c562664fc95945"
  },
  {
    "url": "assets/js/190.8c3ea371.js",
    "revision": "bda82cfbdbcaefdc241c788236a5a8a3"
  },
  {
    "url": "assets/js/191.b02eecec.js",
    "revision": "c559b69563221325bba17ae69c7d7e73"
  },
  {
    "url": "assets/js/192.fe9b4cb5.js",
    "revision": "91edd64dcfb992b674a6240104bf9ea1"
  },
  {
    "url": "assets/js/193.720c05d6.js",
    "revision": "7e2b59982dd892be2ca3000f596ae148"
  },
  {
    "url": "assets/js/194.451c0f75.js",
    "revision": "65f1a1adf76d8f8db1431287039d1c4c"
  },
  {
    "url": "assets/js/195.f95ad280.js",
    "revision": "bd9e3d7010237abaa09e06e8796ecaeb"
  },
  {
    "url": "assets/js/196.e5fa182f.js",
    "revision": "4a3d1da2118ecbdf14b732c3719d274e"
  },
  {
    "url": "assets/js/197.309e2159.js",
    "revision": "a85bbc4bb4383df8c838af0d8f0d32b1"
  },
  {
    "url": "assets/js/198.dc3a3bc5.js",
    "revision": "1e637f8d016ae72a599adae233483b35"
  },
  {
    "url": "assets/js/199.4be77415.js",
    "revision": "8215971abb29a3d946fd0c7f7df3f18f"
  },
  {
    "url": "assets/js/2.37b343d4.js",
    "revision": "0e1f94b04a2a084f4911d7e1e269a0d2"
  },
  {
    "url": "assets/js/20.2067e919.js",
    "revision": "dd0f51a18b3ad32f2e04fb105d4d1e46"
  },
  {
    "url": "assets/js/200.8c3892e5.js",
    "revision": "092578fa6060ecdd91d24dcdd4c6d6c0"
  },
  {
    "url": "assets/js/201.7dba67e1.js",
    "revision": "635730966ac6a1b79ee147bf90879d5d"
  },
  {
    "url": "assets/js/202.dc2e6891.js",
    "revision": "62366bf2da9099ebc3d48b93965b9788"
  },
  {
    "url": "assets/js/203.0dc9b443.js",
    "revision": "2b16ba74b11fe949ec5b28509654db78"
  },
  {
    "url": "assets/js/204.48f07fa9.js",
    "revision": "6c1d77d0e36284d5211b1c7d7a6fc97b"
  },
  {
    "url": "assets/js/205.8cc25de7.js",
    "revision": "798dba928f929e261a3df2cfffefdcc6"
  },
  {
    "url": "assets/js/206.11ad85cb.js",
    "revision": "0295de0d57d2da41820a2666699e709e"
  },
  {
    "url": "assets/js/207.9b0202b2.js",
    "revision": "ef8548fa8193f27e782dd015ca39683e"
  },
  {
    "url": "assets/js/208.240c2351.js",
    "revision": "fbef3ab28b81c016c1eb7b4095163a9f"
  },
  {
    "url": "assets/js/209.8c608951.js",
    "revision": "bbede4bdbe39815605f836946ca3e164"
  },
  {
    "url": "assets/js/21.a20cc72e.js",
    "revision": "13ca20cf7fe961a6dd3fbf70c623842b"
  },
  {
    "url": "assets/js/210.afae5267.js",
    "revision": "3d436808af8c0a2e0432a257a2adcbd1"
  },
  {
    "url": "assets/js/211.eb1a9ab0.js",
    "revision": "e899bf0d63119f6147de644311a41a22"
  },
  {
    "url": "assets/js/212.919115f9.js",
    "revision": "a8202961353d9a01a47193da5314fe5c"
  },
  {
    "url": "assets/js/213.50453332.js",
    "revision": "d219b789a0c06035eea9c8567165ce3d"
  },
  {
    "url": "assets/js/214.772057a4.js",
    "revision": "0ee5339e297ed88cb7b399d66a6a22ca"
  },
  {
    "url": "assets/js/215.78be50b8.js",
    "revision": "18694cf6fc788ea105d49adf279b792e"
  },
  {
    "url": "assets/js/216.4a0c77c9.js",
    "revision": "a3835488b646b66833c899964b4854fe"
  },
  {
    "url": "assets/js/217.6e8826a7.js",
    "revision": "dd0f15b134b666715ea0f4f9c7ad9b72"
  },
  {
    "url": "assets/js/218.7a95a529.js",
    "revision": "ca1b666ffefcff417a163f0ae13d3fb7"
  },
  {
    "url": "assets/js/219.4cea2ebc.js",
    "revision": "8ffc0058fb1baee28a4fa74827217a05"
  },
  {
    "url": "assets/js/22.9c2eeb3d.js",
    "revision": "3dc535a4b8469bab965a0b196204a4e4"
  },
  {
    "url": "assets/js/220.53a07b0d.js",
    "revision": "d43cab95ab63171e29d289905d67074f"
  },
  {
    "url": "assets/js/221.fb795b44.js",
    "revision": "480671504f3dda58e33e90d9c2fad3f6"
  },
  {
    "url": "assets/js/222.cd45e597.js",
    "revision": "f344aaa099d83492631dcb1e1d53dcdf"
  },
  {
    "url": "assets/js/223.003b5243.js",
    "revision": "ca1f8704c087a64b41fc08fbe6931d08"
  },
  {
    "url": "assets/js/224.b36d556e.js",
    "revision": "1bed3157d13c9f63d6b97e8c1480cfee"
  },
  {
    "url": "assets/js/225.1e121b6a.js",
    "revision": "1b33f476dc20cef8c549d1c2385fe029"
  },
  {
    "url": "assets/js/226.fec3b181.js",
    "revision": "ffbd1cee4820117a87dee58fdc0a2eaf"
  },
  {
    "url": "assets/js/227.f4fd6ff7.js",
    "revision": "b0668e0b64883df54a30290ee76e163c"
  },
  {
    "url": "assets/js/228.014e32fa.js",
    "revision": "d9ce223d042e7ea3b54bda7e587db8e0"
  },
  {
    "url": "assets/js/229.c598faf0.js",
    "revision": "2f2f08249614f8dae60293160209d0a7"
  },
  {
    "url": "assets/js/23.97085ecf.js",
    "revision": "fda21961bc800aaaca46f4987a440f54"
  },
  {
    "url": "assets/js/230.484cda59.js",
    "revision": "e715bd790bb819d9c7ccd74f587fac76"
  },
  {
    "url": "assets/js/231.d02664d0.js",
    "revision": "9566457611abb3f2a7e503e9cf7edffb"
  },
  {
    "url": "assets/js/232.25c74722.js",
    "revision": "7f3719bd16ef14e99d04d0a467b437e5"
  },
  {
    "url": "assets/js/233.bac24a19.js",
    "revision": "de4c6aa40866931b18732d76295dfc2b"
  },
  {
    "url": "assets/js/234.20a9cbe1.js",
    "revision": "64d38eb1b966d57811f41c2c67eb74d4"
  },
  {
    "url": "assets/js/235.5b22230d.js",
    "revision": "25a4a20b43990f6638f4ee86fde3b089"
  },
  {
    "url": "assets/js/236.ef7900ae.js",
    "revision": "a64892e5219cc3118177a617e7d42ff8"
  },
  {
    "url": "assets/js/237.ed7c464d.js",
    "revision": "a1464c9776424a6794e8661b123e3659"
  },
  {
    "url": "assets/js/238.1d2b2b90.js",
    "revision": "f00328a49c9311eac53454fc482775d3"
  },
  {
    "url": "assets/js/239.6a939f08.js",
    "revision": "3a480b9295e51243791ac691391d0d24"
  },
  {
    "url": "assets/js/24.e903463b.js",
    "revision": "bdcb8c3c0306313f9a8f9d17c8d4795b"
  },
  {
    "url": "assets/js/240.10b6be29.js",
    "revision": "29053b069c93a26f7494a9cdccf5493c"
  },
  {
    "url": "assets/js/241.31fa2923.js",
    "revision": "ba0529ec3e4a5f49582f50a275de37f2"
  },
  {
    "url": "assets/js/242.9d07dfbc.js",
    "revision": "b72db08512e4816f2872b532d51b8ae4"
  },
  {
    "url": "assets/js/243.ff0361de.js",
    "revision": "c7932457fa12ebd12f92b0bb481ee966"
  },
  {
    "url": "assets/js/244.af0e72ae.js",
    "revision": "ab4138774936f8f6843330595925fbee"
  },
  {
    "url": "assets/js/245.c56ab897.js",
    "revision": "9727b50504ffb6e1150e8d30dec62b46"
  },
  {
    "url": "assets/js/246.0a67a3e4.js",
    "revision": "6955440a233e6cf7a056a8f9f7650652"
  },
  {
    "url": "assets/js/247.0f1aa381.js",
    "revision": "4a2afcac435adb87b57a18712063070d"
  },
  {
    "url": "assets/js/248.af129ae5.js",
    "revision": "70adb0325fbd717fc6d07ecfafc130bf"
  },
  {
    "url": "assets/js/249.9c3d511a.js",
    "revision": "e2f49fe003f8fbb4d38c87ee3b6f7d69"
  },
  {
    "url": "assets/js/25.1e59ffb3.js",
    "revision": "8a76db6deb060a7a3abacfa8eafc5906"
  },
  {
    "url": "assets/js/250.8df9e220.js",
    "revision": "2f2e126196bd020b7b9bf345946d54b8"
  },
  {
    "url": "assets/js/251.0f253be6.js",
    "revision": "e55f288750312577f295a2cf1a676750"
  },
  {
    "url": "assets/js/252.0ad6363d.js",
    "revision": "720fcee9167c2743208fe422446c45d0"
  },
  {
    "url": "assets/js/253.0dc9d585.js",
    "revision": "f903017054eee2ca51268e92e4a92a7d"
  },
  {
    "url": "assets/js/254.0e2369f7.js",
    "revision": "3075a404e8acd1c85f9ab1468630c372"
  },
  {
    "url": "assets/js/255.50805657.js",
    "revision": "6c9fd083b688d1579aa73566b55c510c"
  },
  {
    "url": "assets/js/256.fe6704a5.js",
    "revision": "6595bada5ebbe28502b3c84c657ea445"
  },
  {
    "url": "assets/js/257.d73f64a3.js",
    "revision": "a4fc87d78c1eda0e6562a17642b640c7"
  },
  {
    "url": "assets/js/258.f9b4326a.js",
    "revision": "71928e2405cfa196270ec6d90c1681bf"
  },
  {
    "url": "assets/js/259.463dc611.js",
    "revision": "e76b7edb005b2792b76438f59ff964f8"
  },
  {
    "url": "assets/js/26.4b79b284.js",
    "revision": "dbb2333516810f11aa1e5b6538a1ebfd"
  },
  {
    "url": "assets/js/260.7fe38570.js",
    "revision": "2a7247b29a6e369301beca739542364d"
  },
  {
    "url": "assets/js/261.e7b185e3.js",
    "revision": "c398e58f371fba1d7bdd9ac5c5976765"
  },
  {
    "url": "assets/js/262.ba0c6abf.js",
    "revision": "98862e1b7b67d93e4fdba61daf2515aa"
  },
  {
    "url": "assets/js/263.986101d4.js",
    "revision": "082e85da092449c80406e8aed551a8fd"
  },
  {
    "url": "assets/js/264.325a3fdc.js",
    "revision": "ebb71ead8ebcc84428c0288a37bb1e68"
  },
  {
    "url": "assets/js/265.eb1c4106.js",
    "revision": "deede9274bc4cc26e836fcb18e204fb9"
  },
  {
    "url": "assets/js/266.3e828205.js",
    "revision": "d52cef1289205b736983f9cdc4c62877"
  },
  {
    "url": "assets/js/267.0f067c01.js",
    "revision": "6537de7d796f15b14ee2e4571f6e1531"
  },
  {
    "url": "assets/js/268.2b2ae2d3.js",
    "revision": "11c51193551c7b7513642b5f50363230"
  },
  {
    "url": "assets/js/269.5fbd165e.js",
    "revision": "bb729036faa8bdb37e3369f723a92035"
  },
  {
    "url": "assets/js/27.da13fe28.js",
    "revision": "75eaab8b9d708115e3db5ea5f4301770"
  },
  {
    "url": "assets/js/270.a8ab8012.js",
    "revision": "3992e74f28d5ea77c38ffcb0de8584f5"
  },
  {
    "url": "assets/js/271.734fc09f.js",
    "revision": "094623ad32642bab7b75c4313ad8c8b6"
  },
  {
    "url": "assets/js/272.f7cbb018.js",
    "revision": "475b515271f4be2fba75be2997a991b2"
  },
  {
    "url": "assets/js/273.a6a313a5.js",
    "revision": "1310ab90533f891ee12b2232b515d1e1"
  },
  {
    "url": "assets/js/274.e3309dae.js",
    "revision": "d00f02fc1e0bf33c0648863a3c9ceadd"
  },
  {
    "url": "assets/js/275.1c4765f8.js",
    "revision": "f83a4ac7d88496fe859231b6753fa44a"
  },
  {
    "url": "assets/js/276.8e36fbf0.js",
    "revision": "1b0955cedb1a2b892223c9b21e5faa8b"
  },
  {
    "url": "assets/js/277.c04eda27.js",
    "revision": "a53af764b96fc54502381b832ba16a06"
  },
  {
    "url": "assets/js/278.074776cd.js",
    "revision": "67334f14ab57b349f924260e10e9281b"
  },
  {
    "url": "assets/js/279.269da191.js",
    "revision": "3ba4530a238ce986ccfab798ab702bf6"
  },
  {
    "url": "assets/js/28.db7108f8.js",
    "revision": "8fb7004421757aaaaba8bd126795a5c3"
  },
  {
    "url": "assets/js/280.d6093ae3.js",
    "revision": "2c195b1c8c3bfab53232d90724f10390"
  },
  {
    "url": "assets/js/281.02fb7bcc.js",
    "revision": "7218aa0382404eddfb32da839d9337c7"
  },
  {
    "url": "assets/js/282.e7152d3d.js",
    "revision": "4e53b10837f2a56f2075044565c9d7e9"
  },
  {
    "url": "assets/js/283.3814a77a.js",
    "revision": "4efff563b0664d69b4329df5a3462b07"
  },
  {
    "url": "assets/js/284.b07173a0.js",
    "revision": "437fd39d3d07af28661d951ed73a0acc"
  },
  {
    "url": "assets/js/285.eb7d0ef8.js",
    "revision": "0334eba3fe19a5d228f1277366d83764"
  },
  {
    "url": "assets/js/286.62425cd0.js",
    "revision": "440a7e5d761abe89b1b5b57a4deebe07"
  },
  {
    "url": "assets/js/287.bedf500c.js",
    "revision": "93a01e1576fb0cac1792354c9f095e8c"
  },
  {
    "url": "assets/js/288.fc8d78df.js",
    "revision": "39221ea9ad1a556d09c92692f9e50038"
  },
  {
    "url": "assets/js/289.a6e17d2f.js",
    "revision": "ca2d108969c400a88131e7ae57530fae"
  },
  {
    "url": "assets/js/29.24dad403.js",
    "revision": "c2e49a5d6d5cdf2425525a1327e3dd4f"
  },
  {
    "url": "assets/js/290.8cc174de.js",
    "revision": "faaf2bf3c1588df60c06029d4420c450"
  },
  {
    "url": "assets/js/291.0880c063.js",
    "revision": "62fad7625135ac2ae2073b2cd514934c"
  },
  {
    "url": "assets/js/292.929aa2e2.js",
    "revision": "537ca51cf9502ea3a6d9b98d05e69379"
  },
  {
    "url": "assets/js/293.eb7f7363.js",
    "revision": "29d4c7a16c3529ab1120b0380131a710"
  },
  {
    "url": "assets/js/294.f738f135.js",
    "revision": "cf40441a4301e116c4777e2174affd64"
  },
  {
    "url": "assets/js/295.a6982099.js",
    "revision": "3f503bee575208007ab7173ff74cf5f9"
  },
  {
    "url": "assets/js/296.30d471c6.js",
    "revision": "02e3e588251ab90a4ad615adc02c475a"
  },
  {
    "url": "assets/js/297.54cd95df.js",
    "revision": "4afcd98ad9ae29a14bddc48104c51ad4"
  },
  {
    "url": "assets/js/298.bd0ea5bd.js",
    "revision": "8f3718774a420501bb8d2f2917e4761c"
  },
  {
    "url": "assets/js/299.693f8cdd.js",
    "revision": "a4a7b03ef2a4b2236da6038775f0e9a5"
  },
  {
    "url": "assets/js/30.3339dbb4.js",
    "revision": "04eea18927861582b7561c542f68c37d"
  },
  {
    "url": "assets/js/300.2a3d9411.js",
    "revision": "ba44be3fd0cf8ad685782137be105719"
  },
  {
    "url": "assets/js/301.d67fcd47.js",
    "revision": "49399a6b8ad1daf0b5ab036c68dad23e"
  },
  {
    "url": "assets/js/302.a821c75e.js",
    "revision": "eec18973906a61b4508f1bd79fb669eb"
  },
  {
    "url": "assets/js/303.850313cb.js",
    "revision": "eaffb26e71def5c4dd0ea3e1a521e49b"
  },
  {
    "url": "assets/js/304.503c34ae.js",
    "revision": "89efb15399761c6ca8f404fd93465a15"
  },
  {
    "url": "assets/js/305.dbfd4c36.js",
    "revision": "fefb21c2bae7924730c14cb82ff54b53"
  },
  {
    "url": "assets/js/306.c2f7fbe4.js",
    "revision": "30c5490c78cd2e3027e7a25fc0022c3d"
  },
  {
    "url": "assets/js/307.7beaf077.js",
    "revision": "15f8ca22194b09efb447aa8d29f10eb5"
  },
  {
    "url": "assets/js/308.741ac70e.js",
    "revision": "1fe88435d7c0a2d329e7c71d6cb799a7"
  },
  {
    "url": "assets/js/309.9f49f037.js",
    "revision": "f944471f5a7544879e77930316d6bfc0"
  },
  {
    "url": "assets/js/31.a065a798.js",
    "revision": "73a7147ff16b3a861148dddde43a2817"
  },
  {
    "url": "assets/js/310.75d8e5a7.js",
    "revision": "543e6433be3adbc846a93b5623e118c8"
  },
  {
    "url": "assets/js/311.b9fc4d92.js",
    "revision": "11d5e7cc3bf1da5bfa59fb3eed23ce17"
  },
  {
    "url": "assets/js/312.c36e0b96.js",
    "revision": "69131e8101f8031d4c1b30ae133eee9a"
  },
  {
    "url": "assets/js/313.0f1d3d3e.js",
    "revision": "953ef46dfff5d8116c5c5ca3cfc45b31"
  },
  {
    "url": "assets/js/314.ba54dfb9.js",
    "revision": "045a70b6df9b62b307ad542509ea2d91"
  },
  {
    "url": "assets/js/315.e71d24ad.js",
    "revision": "6fa61c92b17079e3d40450e051dc56fe"
  },
  {
    "url": "assets/js/316.1680b5ee.js",
    "revision": "328d8858c36f00f9df925dc40dcc1bc7"
  },
  {
    "url": "assets/js/317.d680e13c.js",
    "revision": "27111164888e40adb611892fb88d8d54"
  },
  {
    "url": "assets/js/318.f5ea20b7.js",
    "revision": "a50655c7d4edb09034f031bda736c4f0"
  },
  {
    "url": "assets/js/319.82e44ea3.js",
    "revision": "26dc4595c192dfb582cf4367a96bffc0"
  },
  {
    "url": "assets/js/32.ca865c76.js",
    "revision": "d8c40834b10ad343f152603f626eeecf"
  },
  {
    "url": "assets/js/320.2a285efc.js",
    "revision": "bb266d3f992b982b3edb7296955cdca0"
  },
  {
    "url": "assets/js/321.8d58ff84.js",
    "revision": "c7c02410bb41ba2bdf6a4e4ce627a6d5"
  },
  {
    "url": "assets/js/322.e842ac65.js",
    "revision": "836efb5d8e86aa51ab19ca0de4dd7e6f"
  },
  {
    "url": "assets/js/323.d7570970.js",
    "revision": "5e8ce88766e8cfad46efb9bc51657e5a"
  },
  {
    "url": "assets/js/324.8891115e.js",
    "revision": "0e1209a52047ed950420e088c2c3a1ec"
  },
  {
    "url": "assets/js/325.715facb6.js",
    "revision": "3678340b773ac96a03afcb72cc202034"
  },
  {
    "url": "assets/js/326.f011e214.js",
    "revision": "e0b0f8066677bb6b0a9840620775d45a"
  },
  {
    "url": "assets/js/327.bbd3dffc.js",
    "revision": "c7bb975da5cd9ef0a4263a1430da5e09"
  },
  {
    "url": "assets/js/328.c99d7679.js",
    "revision": "2d94e1d9797e9e2b487892da8e0094e2"
  },
  {
    "url": "assets/js/329.c7681ba5.js",
    "revision": "372e77675ff28b3a2f660290566a655e"
  },
  {
    "url": "assets/js/33.5cf5cd49.js",
    "revision": "c051d52ff5dbf25cf551a98b94d50cfc"
  },
  {
    "url": "assets/js/330.f65c7e4d.js",
    "revision": "29a23ed5aa01e8465d038db0c9814cf1"
  },
  {
    "url": "assets/js/331.fe9e9836.js",
    "revision": "a6a7bd6ebd8839fba7b74ae026f84c47"
  },
  {
    "url": "assets/js/332.8f8d1c74.js",
    "revision": "95efb9dac07c179adc948cd9712b6708"
  },
  {
    "url": "assets/js/333.c02ab3b4.js",
    "revision": "e1ed06b2986aeaabff00c5a32d9401a2"
  },
  {
    "url": "assets/js/334.9ed98d7d.js",
    "revision": "154fffac6636896701137a2f2acfc0c9"
  },
  {
    "url": "assets/js/335.0fbe70a8.js",
    "revision": "8a32a3e4e2b7eb3ae49d78b2777b02d7"
  },
  {
    "url": "assets/js/336.2459483d.js",
    "revision": "f34ed84e943e5e3fa18f74ab6772d904"
  },
  {
    "url": "assets/js/337.eb0b7898.js",
    "revision": "09a4c5ebf95140b93a6cf6984843a254"
  },
  {
    "url": "assets/js/338.aea4eabb.js",
    "revision": "be37f144db592421fb1c56321f3909ba"
  },
  {
    "url": "assets/js/339.5e11e6a0.js",
    "revision": "c4372306c85fde383630228e0418671b"
  },
  {
    "url": "assets/js/34.8fb78d52.js",
    "revision": "61509c4a968c90705fbe2413347be7d3"
  },
  {
    "url": "assets/js/340.099e01a4.js",
    "revision": "3cddfb48ceaecceb45ef792edcee4c0b"
  },
  {
    "url": "assets/js/341.33ee048f.js",
    "revision": "1ed53fb6633f42e41b6d6ed8caf4d53e"
  },
  {
    "url": "assets/js/342.9b5ecd2a.js",
    "revision": "43bfd1365d7286013d877b885d91b109"
  },
  {
    "url": "assets/js/343.096d792b.js",
    "revision": "e27c7bd9f7c5b81221e59c3c75a583de"
  },
  {
    "url": "assets/js/344.ac727b1c.js",
    "revision": "ab2ea9cae7e458709b5cee83a0a2c5fd"
  },
  {
    "url": "assets/js/345.2e1697fe.js",
    "revision": "c96533a58eb14b0b3e09bf493575ae8a"
  },
  {
    "url": "assets/js/346.614062c3.js",
    "revision": "9f383311ec0a4b2be77c3af29317c86a"
  },
  {
    "url": "assets/js/347.78009e15.js",
    "revision": "0252d146dc6925a98fb8901a6926aee0"
  },
  {
    "url": "assets/js/348.fb2beab6.js",
    "revision": "c02f374dd8e231945502454b2fba47fc"
  },
  {
    "url": "assets/js/349.77d245ba.js",
    "revision": "3f1a4ac69892616dcfaa2ce792adaec9"
  },
  {
    "url": "assets/js/35.117ca9c8.js",
    "revision": "b2ddb6323f9f0728bba5f204b3309734"
  },
  {
    "url": "assets/js/350.0da43a65.js",
    "revision": "108dff585992781030e9ae2dc8763fdd"
  },
  {
    "url": "assets/js/351.eb11712c.js",
    "revision": "5fbd5ffbe0eaa2f5455486002315e726"
  },
  {
    "url": "assets/js/352.b453d2b7.js",
    "revision": "1219b26485bc66db436d88f7395ad065"
  },
  {
    "url": "assets/js/353.fcf8ce7d.js",
    "revision": "4f7b12f353c403a7166de0e92f4b76da"
  },
  {
    "url": "assets/js/354.a76795b5.js",
    "revision": "b01f4f6317c7cb0ef0cee137a6a95004"
  },
  {
    "url": "assets/js/355.75e0e3d6.js",
    "revision": "55175dfe7494984fe6f322d9ddf83224"
  },
  {
    "url": "assets/js/356.65316b87.js",
    "revision": "f5c99dfcf1f8c332023e5acc81705f99"
  },
  {
    "url": "assets/js/357.da51a3d1.js",
    "revision": "10d0193ee4b356a65f80b9de1cd5d271"
  },
  {
    "url": "assets/js/358.cde9d0ef.js",
    "revision": "af69d94b33a5860d62c1c91c3f959e63"
  },
  {
    "url": "assets/js/359.a91cfc15.js",
    "revision": "c199672bff5541db47a8e75daeff4908"
  },
  {
    "url": "assets/js/36.1583fdad.js",
    "revision": "fd68a2565bf578a0b16897bfdb3f4a83"
  },
  {
    "url": "assets/js/360.e0eb5abb.js",
    "revision": "8ed7300a66cee4be76a17e86b94a94a6"
  },
  {
    "url": "assets/js/361.b9f48424.js",
    "revision": "98e5802c154a8f6c8572efabc948f02f"
  },
  {
    "url": "assets/js/362.9eae418f.js",
    "revision": "1e5d86143cd045b55cab947b25d27428"
  },
  {
    "url": "assets/js/363.299fa6f3.js",
    "revision": "194e04186dda29e519d16e6b96e7371b"
  },
  {
    "url": "assets/js/364.60bf59d0.js",
    "revision": "7b5769bf6ea9eefebaed7fc06f1dac07"
  },
  {
    "url": "assets/js/365.72583b7f.js",
    "revision": "b79fbe979b2e67da851e8a9081b07def"
  },
  {
    "url": "assets/js/366.e1a7937e.js",
    "revision": "3c6fec9ef5e19348a2e61b04d37cb89b"
  },
  {
    "url": "assets/js/367.833900ab.js",
    "revision": "caa2de7152e4a434984d3984ab4d584d"
  },
  {
    "url": "assets/js/368.eec50b11.js",
    "revision": "5ca3edba754518235e1504e1fec03772"
  },
  {
    "url": "assets/js/369.bc6a072a.js",
    "revision": "c1641bfb0b04a996154ea87eb60d60b9"
  },
  {
    "url": "assets/js/37.942129c2.js",
    "revision": "5116f61d380f74ea7260470cf4521726"
  },
  {
    "url": "assets/js/370.5bb82cc8.js",
    "revision": "f88b0be8299e7e8f2ba9ef0acb3110b8"
  },
  {
    "url": "assets/js/371.c9caca0c.js",
    "revision": "e7895f50bcba3fbaf7da941766fd530a"
  },
  {
    "url": "assets/js/372.5ee09e42.js",
    "revision": "90f3310fc2774ccb4ac0bba92e27152e"
  },
  {
    "url": "assets/js/373.7062ce8d.js",
    "revision": "2210e5de33887934fc9473219c80a812"
  },
  {
    "url": "assets/js/374.befcb4a1.js",
    "revision": "993cdae58fac8fdc89a0cdae852ea8df"
  },
  {
    "url": "assets/js/375.ee653397.js",
    "revision": "0772de91aed61645033c563c06eadcda"
  },
  {
    "url": "assets/js/376.c0a20477.js",
    "revision": "002b7d95ca6c6affa0c2e40bd66da812"
  },
  {
    "url": "assets/js/377.2fbe58be.js",
    "revision": "0e87902a0072dcd632252108109182a7"
  },
  {
    "url": "assets/js/378.9277dfff.js",
    "revision": "28c545aaed6f3bd5b601a9f24f48bd64"
  },
  {
    "url": "assets/js/379.25598e62.js",
    "revision": "e0a2b08d0ff8fc3d0cb05bbae29150bc"
  },
  {
    "url": "assets/js/38.ea31e336.js",
    "revision": "a0f131ab823e989672e514eb6906b7e9"
  },
  {
    "url": "assets/js/380.6f062b1e.js",
    "revision": "00951d9f20cf91be32eec8a2d4fdad02"
  },
  {
    "url": "assets/js/39.d84ff529.js",
    "revision": "e64c88175f8ae90600e6cd5fc862109c"
  },
  {
    "url": "assets/js/4.92350bad.js",
    "revision": "ad96cd85b10082f76009fa8fa7793e50"
  },
  {
    "url": "assets/js/40.c0db2de3.js",
    "revision": "84ae278295eb2165380628ac1e605ab1"
  },
  {
    "url": "assets/js/41.10510222.js",
    "revision": "40fa36f1f97a2ffeb04336dcb5b55505"
  },
  {
    "url": "assets/js/42.1f84748e.js",
    "revision": "cb4de33535c42ed3613177d9ac1e129e"
  },
  {
    "url": "assets/js/43.c13d4da7.js",
    "revision": "49a5fb8a1b4729ecde695a8b0d39fd59"
  },
  {
    "url": "assets/js/44.b825ee65.js",
    "revision": "e6c910d5e8e77bb7da2ddd95ce8d432c"
  },
  {
    "url": "assets/js/45.e2095821.js",
    "revision": "3568b8b0655376d6b6a450a806abaac6"
  },
  {
    "url": "assets/js/46.86c1d0a4.js",
    "revision": "2a9184cbcd1f9502513ecc34aec12916"
  },
  {
    "url": "assets/js/47.b108721a.js",
    "revision": "9fbc82d91c4aab0fa8adde3cab75c920"
  },
  {
    "url": "assets/js/48.307bfbf8.js",
    "revision": "17fba197e2afd8d934789e63f27999bb"
  },
  {
    "url": "assets/js/49.0c2d06c1.js",
    "revision": "a7411742ea0c9fb6dfd9cedfdd17a92d"
  },
  {
    "url": "assets/js/5.0ba75a95.js",
    "revision": "977ebf8cf610653dd4c6165b0d4de281"
  },
  {
    "url": "assets/js/50.28b69ca7.js",
    "revision": "773e4d65d0b23d1811f307de0746fb47"
  },
  {
    "url": "assets/js/51.71fbaef2.js",
    "revision": "ee9d581fb266db6098ad9c7238df46d1"
  },
  {
    "url": "assets/js/52.a1f4ce35.js",
    "revision": "6ceb939b639c9a30097ab049c61e6316"
  },
  {
    "url": "assets/js/53.3260844b.js",
    "revision": "803e1b4e95de1a1df80b4a4838c6c34f"
  },
  {
    "url": "assets/js/54.d4bb7ebb.js",
    "revision": "819d3be32dfc01793a6fd3ca838380db"
  },
  {
    "url": "assets/js/55.f175cd3c.js",
    "revision": "251fb03d3b6eab432d40140c08074862"
  },
  {
    "url": "assets/js/56.cd94998d.js",
    "revision": "0046b01c3c2397daceb7c8076e67f26a"
  },
  {
    "url": "assets/js/57.c2e47d62.js",
    "revision": "c556ffd26ae988d1b3681e451489daf2"
  },
  {
    "url": "assets/js/58.3b20ba1b.js",
    "revision": "7cf53b1868e7684e0bbdcfd2d6c22b69"
  },
  {
    "url": "assets/js/59.86eaa3bc.js",
    "revision": "b86103a7b624d5f6e64f55b0957e5099"
  },
  {
    "url": "assets/js/6.3209fa53.js",
    "revision": "bd71ca376d0f8eaea62b218559972bc0"
  },
  {
    "url": "assets/js/60.d6dd4e34.js",
    "revision": "ccdff4358d626b7284a8f4774eb5ed77"
  },
  {
    "url": "assets/js/61.11f2aaa8.js",
    "revision": "dd3cb361b6a27a0550e589a8c993045c"
  },
  {
    "url": "assets/js/62.954c8ced.js",
    "revision": "9155e8ca5c3f2522fd39855908fe081c"
  },
  {
    "url": "assets/js/63.8f12a3ca.js",
    "revision": "9097babe838a998ed8d280a25c6d3884"
  },
  {
    "url": "assets/js/64.683bae7d.js",
    "revision": "56817d3513c1eb16a4422a98f0aaa3f0"
  },
  {
    "url": "assets/js/65.23253d4f.js",
    "revision": "14280ab73fd42a2ae481ed88f1750ac2"
  },
  {
    "url": "assets/js/66.16556178.js",
    "revision": "c44514f36bd98a99086dd5c5c86d32a5"
  },
  {
    "url": "assets/js/67.f9355fa9.js",
    "revision": "a5faf4bf398df4e170a24f397796123e"
  },
  {
    "url": "assets/js/68.56dcd356.js",
    "revision": "5f11151a104f129896464030c947eb55"
  },
  {
    "url": "assets/js/69.d583ef4d.js",
    "revision": "5e218280b73862d0364486f350dbd2c7"
  },
  {
    "url": "assets/js/7.af066746.js",
    "revision": "ee32c63b3b423e8407b9bf8fc37a719c"
  },
  {
    "url": "assets/js/70.baa47555.js",
    "revision": "f558af877dc938b2c34bb25ef82c5b40"
  },
  {
    "url": "assets/js/71.5a3ff270.js",
    "revision": "daad6bd51ca09da2b98f5e009198f113"
  },
  {
    "url": "assets/js/72.387f3d8c.js",
    "revision": "94e007185ce214b7e8570ca38196f47a"
  },
  {
    "url": "assets/js/73.62630812.js",
    "revision": "a1e88679dd9fadac9bf76e567774102d"
  },
  {
    "url": "assets/js/74.22ca729f.js",
    "revision": "31d7752363e01a3e58ea1300eaec979c"
  },
  {
    "url": "assets/js/75.a211d1f1.js",
    "revision": "ff46cc3039e0b0624e1f2393db02d1de"
  },
  {
    "url": "assets/js/76.4af46925.js",
    "revision": "347cd75233bdbe3ebb50bb4468cd22af"
  },
  {
    "url": "assets/js/77.963fadd4.js",
    "revision": "3210bebbd3113b48c9bcf0af176e35f1"
  },
  {
    "url": "assets/js/78.8b07b4f9.js",
    "revision": "1ca26f1e33d819799305e7374a22a79d"
  },
  {
    "url": "assets/js/79.d2b2153d.js",
    "revision": "ed0e52a40cae3bb0ed766c181a73815d"
  },
  {
    "url": "assets/js/8.0188b0d2.js",
    "revision": "c022dfc5187d7d22994ec63ce0b28f13"
  },
  {
    "url": "assets/js/80.20204c20.js",
    "revision": "f214a8cea7a2c0806c4c494aaab40609"
  },
  {
    "url": "assets/js/81.e7508afd.js",
    "revision": "b9b64e17fb1981eff590a6cffa1f2069"
  },
  {
    "url": "assets/js/82.159a642c.js",
    "revision": "dccd229a5f08b8f9ece2fee062bfd76f"
  },
  {
    "url": "assets/js/83.f0dd585c.js",
    "revision": "874ec3bd7a71545d983c642f19a42add"
  },
  {
    "url": "assets/js/84.70a0db32.js",
    "revision": "6a0f8e39780a499224e31df7449469d5"
  },
  {
    "url": "assets/js/85.7d4d9108.js",
    "revision": "bf5b36d37c3e82d60d7241bdab21fc05"
  },
  {
    "url": "assets/js/86.2bf6b37c.js",
    "revision": "e77305197ad0972cfff8a1d5cc15ebd4"
  },
  {
    "url": "assets/js/87.27c17ac2.js",
    "revision": "62aa2f8cd86fa4c965bf47b6a47f2955"
  },
  {
    "url": "assets/js/88.b86c1e53.js",
    "revision": "7dd4be70ab12484864e1634eec4125dd"
  },
  {
    "url": "assets/js/89.ef0c3f8a.js",
    "revision": "48a878c0fb72c226fa86c98e2c99b744"
  },
  {
    "url": "assets/js/9.996ce37a.js",
    "revision": "7a8292ef6c605ac38c4e1548e234d80b"
  },
  {
    "url": "assets/js/90.d307bdfe.js",
    "revision": "04941f99b6085c11d81d5ee0bb2ee88d"
  },
  {
    "url": "assets/js/91.29207e33.js",
    "revision": "e4132380862a6b1ad7ce6854ecca137f"
  },
  {
    "url": "assets/js/92.09368bfb.js",
    "revision": "c0933f78e3c59c8b3078427315469f7b"
  },
  {
    "url": "assets/js/93.2d07fe5e.js",
    "revision": "ae9b3a4ee5b885ce92108baac1649593"
  },
  {
    "url": "assets/js/94.106fdba7.js",
    "revision": "9c3f04dbd83b15389bf3b074903eec68"
  },
  {
    "url": "assets/js/95.b93aaea5.js",
    "revision": "58397705ae3c01cf6c2ac7a69574d41b"
  },
  {
    "url": "assets/js/96.3a9c532a.js",
    "revision": "8b3c14357ebee9aa89f6da5bcd615b68"
  },
  {
    "url": "assets/js/97.772ec6b0.js",
    "revision": "633d3b69e6f08fd1823c61adad917ba2"
  },
  {
    "url": "assets/js/98.e8852340.js",
    "revision": "3c337111a647f3f6cd5c87fa08401e68"
  },
  {
    "url": "assets/js/99.aca5250a.js",
    "revision": "385f64f1f0248cee3735cd216b66a519"
  },
  {
    "url": "customize/bioelectrical-input/index.html",
    "revision": "10e053d4c12e2901e10a00f8964e48a3"
  },
  {
    "url": "customize/environmental-control/index.html",
    "revision": "02d1801af85af24c154f4d1b6250efa4"
  },
  {
    "url": "customize/gaming-toys-music/index.html",
    "revision": "ac1ad1c98934ce0f23aa7f55699f3d0e"
  },
  {
    "url": "customize/grid/Grid-Creation.html",
    "revision": "2c07751cc117324e0f9350a26b6d4baa"
  },
  {
    "url": "customize/grid/Grid-Customization.html",
    "revision": "7ac2f0900c19cf846b64e502ac941f64"
  },
  {
    "url": "customize/grid/index.html",
    "revision": "4865102385d6f0003c193e084570a582"
  },
  {
    "url": "customize/index.html",
    "revision": "bcfcad57f6c5ed1d014f10157eca6d55"
  },
  {
    "url": "customize/model/index.html",
    "revision": "a0bf18d1a31426bd1f7dab4f05f2f162"
  },
  {
    "url": "customize/model/Model-Creation.html",
    "revision": "ea4f848cfb0d01bad7646c19b3109ddf"
  },
  {
    "url": "customize/model/Model-Customization.html",
    "revision": "1d3b3dbf96a8a0524db425106dc89162"
  },
  {
    "url": "customize/other/index.html",
    "revision": "c8a97d3d2df41fb8f9ee25bfb75d5f7c"
  },
  {
    "url": "develop/APE.html",
    "revision": "f745c2db93f21d874717b142ad13e3cb"
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
    "revision": "ce76416a1afea9b75b867c13f78d71f5"
  },
  {
    "url": "develop/ARE-HW-Interfacing-CIM.html",
    "revision": "8da569c872aba8823d54d94d6cf257c3"
  },
  {
    "url": "develop/ARE-Keyboard-Mouse-Services.html",
    "revision": "ebc9af834499adb3ce70f413381d18d4"
  },
  {
    "url": "develop/are-remote-apis/index.html",
    "revision": "4c362179dfca4b18df6ddd9b17e6ecd0"
  },
  {
    "url": "develop/are-remote-apis/REST-API.html",
    "revision": "b25d00ef2471c2ff97be3e4da4971d9d"
  },
  {
    "url": "develop/are-remote-apis/REST-demos.html",
    "revision": "05268469465e89d5c218ee1605b13552"
  },
  {
    "url": "develop/are-remote-apis/Webserver.html",
    "revision": "aac7876036d13658fa67915d9c543c23"
  },
  {
    "url": "develop/are-remote-apis/Websocket.html",
    "revision": "46c3e615a18c1fc3574a09417106eb0a"
  },
  {
    "url": "develop/ARE-Webserver.html",
    "revision": "d64a851eb85ff66d79ba18cee0780330"
  },
  {
    "url": "develop/ARE.html",
    "revision": "98f89054bb355bf920c93f07d2fc0623"
  },
  {
    "url": "develop/ARE/ARE-Development-Manual.html",
    "revision": "d72b11cc14fc5dcd7070730bb8e72ab9"
  },
  {
    "url": "develop/ARE/index.html",
    "revision": "73a62b2e4927ffa6f546a5b5be222417"
  },
  {
    "url": "develop/asterics-grid/01_structure.html",
    "revision": "a7e8cc8dd603177271cf17f97bd6e029"
  },
  {
    "url": "develop/asterics-grid/02_tools.html",
    "revision": "fe7a58e661655e760baa8df40bbdc9a6"
  },
  {
    "url": "develop/asterics-grid/03_grid.html",
    "revision": "a3f0ea9784788027a4a4a2fc8aaf2e91"
  },
  {
    "url": "develop/asterics-grid/04_vuejs.html",
    "revision": "a68f22d8195e26e2a5c3b6bff93555b9"
  },
  {
    "url": "develop/asterics-grid/05_datamodel.html",
    "revision": "70ce74562d8f938f8c903bdccca1361c"
  },
  {
    "url": "develop/asterics-grid/06_data_storage.html",
    "revision": "090b12bbd880c9153217ab1fb221695a"
  },
  {
    "url": "develop/asterics-grid/07_i18n.html",
    "revision": "1467447c3e592291d6fb638f25d8f50a"
  },
  {
    "url": "develop/asterics-grid/index.html",
    "revision": "23d7a20b6ee52642bc41b295b4b76eac"
  },
  {
    "url": "develop/asterics-wiki/api/AsTeRICS Websocket.html",
    "revision": "66c94f710256fbb122927527566dab1d"
  },
  {
    "url": "develop/asterics-wiki/api/Resource Handling.html",
    "revision": "dbc268ab61bd448bb41bb746a550f681"
  },
  {
    "url": "develop/asterics-wiki/api/REST-API.html",
    "revision": "c3176de88805afdcb32ac1d86346a323"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Solutions.html",
    "revision": "74152f4fce325ebce5a93300f8943d95"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Webserver Document Root.html",
    "revision": "40767f66980e7b7458e9ccfeefc6e9ec"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/JavaCV.html",
    "revision": "fe9c2f1f20bd9a3e2d09110ec5f13be1"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/Unit Tests.html",
    "revision": "d44a75647303927d0629b7192c5cbf3c"
  },
  {
    "url": "develop/asterics-wiki/components/AsTeRICS Plugins.html",
    "revision": "d745a5231c61f86b9167589316e1b6f7"
  },
  {
    "url": "develop/AT_solution_development.html",
    "revision": "5614d9f9923cb1bd1ef577dd15455427"
  },
  {
    "url": "develop/AT-solution-demos.html",
    "revision": "0d931f6574c15a8caa9ac9f2a00e71c5"
  },
  {
    "url": "develop/at-solution/APE.html",
    "revision": "1d063850af55bf4d1a3154c9ded4c849"
  },
  {
    "url": "develop/at-solution/AT-solution-tutorial.html",
    "revision": "6a21e9c0ab738b20a2697858010a6c86"
  },
  {
    "url": "develop/at-solution/index.html",
    "revision": "20ec76577ff655f1884006dc04701be6"
  },
  {
    "url": "develop/Coding-Guidelines.html",
    "revision": "8ff72966800b4a7b2c491e449b3101c0"
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
    "revision": "d71c7a1ce1b17ad92addd70ffdf71502"
  },
  {
    "url": "develop/get-started/Coding-Guidelines.html",
    "revision": "0df98bb06484b3121db4ea18ba1607a1"
  },
  {
    "url": "develop/get-started/Development-Environment.html",
    "revision": "0b77ebc51a6ef3001cc90eaa829b2ebe"
  },
  {
    "url": "develop/get-started/index.html",
    "revision": "b40cd82e9978c11e25538b3e72e14a6d"
  },
  {
    "url": "develop/index.html",
    "revision": "f95bd4486276db8e777b6d5b8d85b7cb"
  },
  {
    "url": "develop/Plugin-Advanced.html",
    "revision": "f426241e3f17e87be4f0b5347df538d7"
  },
  {
    "url": "develop/Plugin-Introduction.html",
    "revision": "8ecab19e168ee1b64dccc1f05012f837"
  },
  {
    "url": "develop/Plugin-Tutorial.html",
    "revision": "bc2b988de42763905b40551c05c016b4"
  },
  {
    "url": "develop/plugin/Computer-Vision.html",
    "revision": "d32d00627ab90844457656ba63aa4812"
  },
  {
    "url": "develop/plugin/index.html",
    "revision": "7f66661e0411a6d2854c8c3de1ae256e"
  },
  {
    "url": "develop/plugin/Plugin-Advanced.html",
    "revision": "072daaa905f4d1852f7a0507ffd4bf63"
  },
  {
    "url": "develop/plugin/Plugin-Averager.html",
    "revision": "51346479e5f106e9d77f5831c389cf7b"
  },
  {
    "url": "develop/plugin/Resource-Handling.html",
    "revision": "5cf8c646507f02b9b78a45ee40b1f0dd"
  },
  {
    "url": "develop/REST-API-java-client.html",
    "revision": "2609ed2fe7d4b5dc530194f9a31d8ad6"
  },
  {
    "url": "develop/REST-API-js-areCommunicator.html",
    "revision": "fa1768905af31ee50b68a84286eb04a4"
  },
  {
    "url": "develop/REST-API-js-wrapper-ext.html",
    "revision": "bbe83433f82b8141f3fdfd6774628ef3"
  },
  {
    "url": "develop/REST-API.html",
    "revision": "ccb81f47bb9f482151aa94e6c13aa4e8"
  },
  {
    "url": "develop/REST-demos.html",
    "revision": "f60039e971ce9a63cf3a57471df52da0"
  },
  {
    "url": "develop/Unit-Testing.html",
    "revision": "befbb867a9462c3786e830e7309f64f2"
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
    "revision": "25d7a370e36e212862c1859cd4b53291"
  },
  {
    "url": "get-involved/Contact.html",
    "revision": "2b78fc913ddb096a2db2943118b03d48"
  },
  {
    "url": "get-involved/Contribute.html",
    "revision": "5da774ac0478c586afbdf055a579fe1f"
  },
  {
    "url": "get-involved/index.html",
    "revision": "71a43f9559fdac35ede53525aa7be936"
  },
  {
    "url": "get-involved/Legal-Notice.html",
    "revision": "335c3872518b894495342ff865af7b75"
  },
  {
    "url": "get-started/Demos.html",
    "revision": "7f4216d1587c5e9114c5ab0ece3d828b"
  },
  {
    "url": "get-started/index.html",
    "revision": "060eab375559104a5d1fa3bbd604828b"
  },
  {
    "url": "get-started/Installation.html",
    "revision": "f31a7cd7328f5264cd65141fe00b9532"
  },
  {
    "url": "get-started/Overview.html",
    "revision": "cb40e3e223d0dbf8e26d8e3a7d5a3847"
  },
  {
    "url": "guide/docs.html",
    "revision": "fd685f3013077850d3c54bdb229ab348"
  },
  {
    "url": "guide/editor.html",
    "revision": "a66fdf5258db7b1b80e737ea58273608"
  },
  {
    "url": "guide/markdown.html",
    "revision": "67561f8230117d03a03d2e136024bed3"
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
    "revision": "cc6f575e3f35077abdf75244cf0bb17e"
  },
  {
    "url": "index.php.html",
    "revision": "c0bc6e8bf2b1b800e44277531d2720d4"
  },
  {
    "url": "manuals/ACS/Actuators.html",
    "revision": "758ab498d95893e285ce71a934e6a1a9"
  },
  {
    "url": "manuals/ACS/Channels.html",
    "revision": "b9a3118df1ac1e34f16aa5ff6fb9bb99"
  },
  {
    "url": "manuals/ACS/Colours_settings.html",
    "revision": "aa116565c38fdf2d759fb4c03be902c2"
  },
  {
    "url": "manuals/ACS/Component_Collection_Manager.html",
    "revision": "1d9d1d12920cf48bfd48a2e0e0d5cd9a"
  },
  {
    "url": "manuals/ACS/Component_Context_Menu.html",
    "revision": "834b9a6d42e96b243542ee56b79df70e"
  },
  {
    "url": "manuals/ACS/Connected.html",
    "revision": "76222e2db9ec641b98cd838cc8ac2e1c"
  },
  {
    "url": "manuals/ACS/Control_the_ARE.html",
    "revision": "130e3a64a611cfb403f704ee2114647f"
  },
  {
    "url": "manuals/ACS/Create_and_Edit_a_Model.html",
    "revision": "440658d1964c44f2218f6e58a0ac08a4"
  },
  {
    "url": "manuals/ACS/Dialogs_settings.html",
    "revision": "956a1b4fa6b42a8d44dc0d1b0fdf574c"
  },
  {
    "url": "manuals/ACS/Disconnected.html",
    "revision": "e576cad16e313f8169f4a3a6ce829767"
  },
  {
    "url": "manuals/ACS/Events.html",
    "revision": "a93e8ed43fd1b3420ea2699a7909a272"
  },
  {
    "url": "manuals/ACS/External_Tools_Options.html",
    "revision": "0f979992cb00be0c85d7fc57c6eddf71"
  },
  {
    "url": "manuals/ACS/External_Tools.html",
    "revision": "664fa7748915d45bf3f8d1da4e5988c1"
  },
  {
    "url": "manuals/ACS/General_settings.html",
    "revision": "1b313110a30ff02ef617d0551ebadcdc"
  },
  {
    "url": "manuals/ACS/GUI_Designer.html",
    "revision": "6362b67321a6a9a426cb86c58d26c967"
  },
  {
    "url": "manuals/ACS/index.html",
    "revision": "c7afb90b76c0399671f8c57493d5c103"
  },
  {
    "url": "manuals/ACS/Keyboard_control.html",
    "revision": "02d1b5df8cbc3a1faf9649416a6fcd73"
  },
  {
    "url": "manuals/ACS/Load_and_Save_Models.html",
    "revision": "a9b162a6f3763a36903e25e0b224b7f3"
  },
  {
    "url": "manuals/ACS/Miscellaneous.html",
    "revision": "056b4d3c32ae49e4cff76f5512e5601a"
  },
  {
    "url": "manuals/ACS/Modes.html",
    "revision": "52e4dab36b243da5e0c1d99799730b9d"
  },
  {
    "url": "manuals/ACS/Options.html",
    "revision": "d0496bf4cba2a42ddef496ffe1205cd8"
  },
  {
    "url": "manuals/ACS/Pause.html",
    "revision": "5a05fb3760a03bf8d41ee0601eef92d8"
  },
  {
    "url": "manuals/ACS/Print.html",
    "revision": "e7d9367b3f08e5c20e7ff8cf13411f62"
  },
  {
    "url": "manuals/ACS/Processors.html",
    "revision": "c159355dd7d594477fcb2ce7752add7e"
  },
  {
    "url": "manuals/ACS/Running.html",
    "revision": "f42248ff1eea12fd5b1e224c55808003"
  },
  {
    "url": "manuals/ACS/Sensors.html",
    "revision": "bd45f3113f64974f41cb122d966f2d4a"
  },
  {
    "url": "manuals/ACS/Setting_the_Properties.html",
    "revision": "2b9856670d8012b5d2c1a0633f3b8741"
  },
  {
    "url": "manuals/ACS/Status_Reporting_and_Error_Logging.html",
    "revision": "0f5df605b4f9c2cceac60d6a6928624b"
  },
  {
    "url": "manuals/ACS/Synchronized.html",
    "revision": "a113468eb5e37f995500b52e2f9e7658"
  },
  {
    "url": "manuals/ACS/The_Edit_Tab.html",
    "revision": "cdd678822ff2e71059f40c0b3828b100"
  },
  {
    "url": "manuals/ACS/Tooltips.html",
    "revision": "828193dd510c75daa23cb5bf1b8a0cd7"
  },
  {
    "url": "manuals/ARE/index.html",
    "revision": "32b7af12d9f4f33a6303cbbb0fb12936"
  },
  {
    "url": "manuals/asterics-grid/01_terms.html",
    "revision": "c71e59c9f153875a6ee16cb36afdd902"
  },
  {
    "url": "manuals/asterics-grid/02_navigation.html",
    "revision": "11cdda61ff9dd689435524c086d4446b"
  },
  {
    "url": "manuals/asterics-grid/03_appearance_layout.html",
    "revision": "43e0fb136e042f231a9118c0853c7644"
  },
  {
    "url": "manuals/asterics-grid/04_input_options.html",
    "revision": "b4316588e26de4f836a43de3bcdf502d"
  },
  {
    "url": "manuals/asterics-grid/05_actions.html",
    "revision": "0b9aaf12d277421a82cba972b28141f9"
  },
  {
    "url": "manuals/asterics-grid/06_users.html",
    "revision": "1018c0ad72c605be3930dbf2945c83a2"
  },
  {
    "url": "manuals/asterics-grid/07_dictionaries.html",
    "revision": "aa1d5498ac80c429cb9987c798abb70d"
  },
  {
    "url": "manuals/asterics-grid/08_keyboard_shortcuts.html",
    "revision": "3b4222a0a980c8826d8715d08cf83c65"
  },
  {
    "url": "manuals/asterics-grid/09_translation.html",
    "revision": "0140f6f7352ac8d4e5e346635b589858"
  },
  {
    "url": "manuals/asterics-grid/index.html",
    "revision": "2c9f1e8dd98a91bd9fda78b910b11129"
  },
  {
    "url": "manuals/index.html",
    "revision": "1718f181584ab52b5d458dc350ef1177"
  },
  {
    "url": "manuals/WebACS/AREStatus.html",
    "revision": "1d99b0db163e5920d5368f4e963bede8"
  },
  {
    "url": "manuals/WebACS/Channels.html",
    "revision": "79942cc204aa70962459a5850a41af63"
  },
  {
    "url": "manuals/WebACS/Control_the_ARE.html",
    "revision": "8d44d5e11c30b3fe235ad8edd31e0d11"
  },
  {
    "url": "manuals/WebACS/Create_and_Edit_a_Model.html",
    "revision": "f75fac9be4a4822af1fa10a821de609a"
  },
  {
    "url": "manuals/WebACS/Events.html",
    "revision": "4bcfc1cdc0c23c9992daf1e372c4cbac"
  },
  {
    "url": "manuals/WebACS/GUI_Designer.html",
    "revision": "93e8f8752a179f78eca026f4fedef177"
  },
  {
    "url": "manuals/WebACS/index.html",
    "revision": "e94fb0d8088d70d5a1b18344b35c8174"
  },
  {
    "url": "manuals/WebACS/Keyboard_control.html",
    "revision": "06613ee4054fadbd8258b390df23911b"
  },
  {
    "url": "manuals/WebACS/List_View.html",
    "revision": "8d799d22ab2517c1d7c86f5a2a5109e3"
  },
  {
    "url": "manuals/WebACS/Miscellaneous.html",
    "revision": "e9a718959e6ce72f98c144ca1629dcfb"
  },
  {
    "url": "manuals/WebACS/Open_and_Save_Models.html",
    "revision": "b65d04797b24c74c24802fb11caccb04"
  },
  {
    "url": "manuals/WebACS/Setting_the_Properties.html",
    "revision": "82a77965223764f02af2e0645e76bdfd"
  },
  {
    "url": "manuals/WebACS/The_Edit_Tab.html",
    "revision": "3b2f16d1581d83e17649fd2bed6864ea"
  },
  {
    "url": "plugins/actuators/AnalogOut.html",
    "revision": "1bcd5f75e7b8952a7d23fa6d1f0c0702"
  },
  {
    "url": "plugins/actuators/Android_connection.html",
    "revision": "d54719f6d2db7162e71cf57c142a6afd"
  },
  {
    "url": "plugins/actuators/android.svg",
    "revision": "e7790cd019054daf4e484e41e8991b13"
  },
  {
    "url": "plugins/actuators/AndroidPhoneControl.html",
    "revision": "543b341d221e37c8a928886dc87ec438"
  },
  {
    "url": "plugins/actuators/AngularCursorControl.html",
    "revision": "27d6b6e1b95521710c39553c491f15bc"
  },
  {
    "url": "plugins/actuators/ApplicationLauncher.html",
    "revision": "184cd99322adff4182e5280ab7c4942c"
  },
  {
    "url": "plugins/actuators/AREWindow.html",
    "revision": "bd694a4496b88905e18bb7cff96cda31"
  },
  {
    "url": "plugins/actuators/BarDisplay.html",
    "revision": "2960c067f15d4e411e1389194db8b1f0"
  },
  {
    "url": "plugins/actuators/CrosshairCursorControl.html",
    "revision": "295db514676d8b01e3d42624af3aeba0"
  },
  {
    "url": "plugins/actuators/DialogBox.html",
    "revision": "f40da520c70e52da350603f91f37ca27"
  },
  {
    "url": "plugins/actuators/DigitalOut.html",
    "revision": "0da67e9e5a3fc2fe0e3f39535888f6f3"
  },
  {
    "url": "plugins/actuators/DotMeter.html",
    "revision": "d1d86897947d9c1443773bb69dc692d9"
  },
  {
    "url": "plugins/actuators/EasyHomeControl.html",
    "revision": "2ce7cd2486ac24ad09ad7532b336fa3f"
  },
  {
    "url": "plugins/actuators/EmulateFaultyPlugin.html",
    "revision": "f0bfb5fc929dcc341f4378f482e51cc3"
  },
  {
    "url": "plugins/actuators/EnobioDisplay.html",
    "revision": "ec6c62fc77f9a7b7458765c9979ee49e"
  },
  {
    "url": "plugins/actuators/Enocean.html",
    "revision": "c09725736bee486d2b682ba626f4904d"
  },
  {
    "url": "plugins/actuators/enocean.svg",
    "revision": "9cd40371d9d4e70f641266cdf21752f1"
  },
  {
    "url": "plugins/actuators/EventVisualizer.html",
    "revision": "fe270008be725296b5e3fe64510510b7"
  },
  {
    "url": "plugins/actuators/FileWriter.html",
    "revision": "125eeef96a2fec20296bbd69f1e5bd99"
  },
  {
    "url": "plugins/actuators/FlickeringLightStimulator.html",
    "revision": "bd5218013f2978e664f79c9e6910ed0d"
  },
  {
    "url": "plugins/actuators/FS20Sender.html",
    "revision": "bee636de1fc520b29944d35fab05b9b2"
  },
  {
    "url": "plugins/actuators/gmail.svg",
    "revision": "1e7b4033d0f972a16d22609a8f6d9a38"
  },
  {
    "url": "plugins/actuators/GMailShortcuts.html",
    "revision": "5a828bac6ae78df8ac58106ac4cf4307"
  },
  {
    "url": "plugins/actuators/GSMModem.html",
    "revision": "3bc9a95feac735a3cb50ebaa9776b29e"
  },
  {
    "url": "plugins/actuators/ImageBox.html",
    "revision": "8e4d78f8bb0740459ad2f2847ad8c4fc"
  },
  {
    "url": "plugins/actuators/infrared.svg",
    "revision": "f5236162c5bb8c950ca90cd3f1b27cca"
  },
  {
    "url": "plugins/actuators/IRTrans.html",
    "revision": "7ade33d8958d7f75703e562a0374a953"
  },
  {
    "url": "plugins/actuators/Keyboard.html",
    "revision": "96ae812e18277d0c2d720aaa7f5fc593"
  },
  {
    "url": "plugins/actuators/Knx.html",
    "revision": "e66bc3f3537398193ed68d82771c9cf3"
  },
  {
    "url": "plugins/actuators/knx.svg",
    "revision": "98a1cf7f3945ab6b8fd88a559429336b"
  },
  {
    "url": "plugins/actuators/LegacyDigitalOut.html",
    "revision": "4af2bbcc40ab50d9aa2c12d831c27a2a"
  },
  {
    "url": "plugins/actuators/LineWriter.html",
    "revision": "0b0fda810502dfd1560f79156660a04c"
  },
  {
    "url": "plugins/actuators/MediaPlayer.html",
    "revision": "389f399a4dae000761a799475b2afd59"
  },
  {
    "url": "plugins/actuators/MidiPlayer.html",
    "revision": "68ab482342cf3908953b8f36e7be27fa"
  },
  {
    "url": "plugins/actuators/ModelSwitcher.html",
    "revision": "ef2cb474c8fc0c570fd3f620e33450da"
  },
  {
    "url": "plugins/actuators/Mouse.html",
    "revision": "5f74a7de2ab4b41ad2e8a50ab8b0c40f"
  },
  {
    "url": "plugins/actuators/MousecursorIcon.html",
    "revision": "7e2df262f9c858ee7c49fac5c7fecc10"
  },
  {
    "url": "plugins/actuators/NetConnection.html",
    "revision": "83883e933c458a40904b80fd6f4d579a"
  },
  {
    "url": "plugins/actuators/osci.svg",
    "revision": "99e5b6196909314c773c113ef5556d93"
  },
  {
    "url": "plugins/actuators/Oscilloscope.html",
    "revision": "1a2a0d8398b5aa493bc2747603d611d3"
  },
  {
    "url": "plugins/actuators/OscOutClient.html",
    "revision": "baa5f77d114db3aea9c7bf67070b86dc"
  },
  {
    "url": "plugins/actuators/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/actuators/PhilipsHue.html",
    "revision": "078c8abb2a668bcd427d3fca592b243d"
  },
  {
    "url": "plugins/actuators/PhoneControl.html",
    "revision": "17b01b0e66f12adc6c779a102f630066"
  },
  {
    "url": "plugins/actuators/PicoTTS.html",
    "revision": "a24065df25edc0777e64f5845172fdec"
  },
  {
    "url": "plugins/actuators/PlatformDigitalOut.html",
    "revision": "66e0355a94dd1d3d6d959c487536aa51"
  },
  {
    "url": "plugins/actuators/PlatformLCD.html",
    "revision": "5ade8a8f71bf4dcd909520e2fcc75729"
  },
  {
    "url": "plugins/actuators/pong.svg",
    "revision": "3c4f85d7ace78bd88351cd14346546ca"
  },
  {
    "url": "plugins/actuators/PongGame.html",
    "revision": "21b7726375eb21de62075946ed13dbd2"
  },
  {
    "url": "plugins/actuators/RemoteJoystick.html",
    "revision": "8d3108ee4037d4a3c8454c55644aebe4"
  },
  {
    "url": "plugins/actuators/RemoteKeyboard.html",
    "revision": "bb7858bada1ae56451efaae085db1e69"
  },
  {
    "url": "plugins/actuators/RemoteMouse.html",
    "revision": "8ea13d1a300c4da91a81830f960e6431"
  },
  {
    "url": "plugins/actuators/RemoteTablet.html",
    "revision": "6061d79023dc18408ee319918f85a8a0"
  },
  {
    "url": "plugins/actuators/RemoteWindow.html",
    "revision": "5542ff7065170367f55e603742255c38"
  },
  {
    "url": "plugins/actuators/SerialSender.html",
    "revision": "2fae80e55198f116b2f9c8689575c5a0"
  },
  {
    "url": "plugins/actuators/SkyWatcherMount.html",
    "revision": "f0b32ece6e1fc25ab74e78e7824e9774"
  },
  {
    "url": "plugins/actuators/SSVEPFileWriter.html",
    "revision": "80cd4245bd836f214d4cfc793fe65c37"
  },
  {
    "url": "plugins/actuators/SSVEPStimulator.html",
    "revision": "788d63d4223198ab302c3eeeaebf2354"
  },
  {
    "url": "plugins/actuators/SyntheticVoice.html",
    "revision": "3185bf43bab3e460c7c21260834106e8"
  },
  {
    "url": "plugins/actuators/TeensyRCPrototype.html",
    "revision": "979ce1a24e4afd4b314e4a5c66e21870"
  },
  {
    "url": "plugins/actuators/TextArea.html",
    "revision": "f77c6dbdc20d4aa74fd08fd01203b338"
  },
  {
    "url": "plugins/actuators/TextDisplay.html",
    "revision": "20ffbb4677af158021127e905ee73ff7"
  },
  {
    "url": "plugins/actuators/ToneGenerator.html",
    "revision": "959f9a72a3e9b7e758aceb53ebe39364"
  },
  {
    "url": "plugins/actuators/Tooltip.html",
    "revision": "458925feea9cdc6fdeb4634d3a766f1c"
  },
  {
    "url": "plugins/actuators/WavefilePlayer.html",
    "revision": "3c3a75890f29f9761e8f6160dce50329"
  },
  {
    "url": "plugins/actuators/WriteCSV.html",
    "revision": "4540b757444a3712baff264f06c293d8"
  },
  {
    "url": "plugins/actuators/WriteEDF.html",
    "revision": "b76680993ff077f3f53c2ff4a7bfc4b9"
  },
  {
    "url": "plugins/index.html",
    "revision": "21cf04d3c22126bd905fe8f62b95c973"
  },
  {
    "url": "plugins/processors/AcousticScanning.html",
    "revision": "65bcc7fc358df047c90942bbacbe7e39"
  },
  {
    "url": "plugins/processors/AdjustmentCurve.html",
    "revision": "ddc79fcb6c508cbf82e0b761a86c274b"
  },
  {
    "url": "plugins/processors/AmazonEchoControl.html",
    "revision": "06f78ffaf099c11aa484f675e92fd7ff"
  },
  {
    "url": "plugins/processors/Amplifier.html",
    "revision": "9fe9f10265db8944cdd790ed5e037608"
  },
  {
    "url": "plugins/processors/arduino-uno.svg",
    "revision": "c2a5829c840320e79e15074f54a18b3b"
  },
  {
    "url": "plugins/processors/Arduino.html",
    "revision": "8812e5f14b90c8c528b5dfa0b9091ca1"
  },
  {
    "url": "plugins/processors/arduino.svg",
    "revision": "1df7842ac6355efe0d6d5e4dcdcc5c3e"
  },
  {
    "url": "plugins/processors/AudioSelector.html",
    "revision": "cc97cdd640e9b8909c9bd23e87380f04"
  },
  {
    "url": "plugins/processors/Averager.html",
    "revision": "6625654c5b8b352a2eb75db538f680cc"
  },
  {
    "url": "plugins/processors/BasicTRalgorithms.html",
    "revision": "e4a6a4d195769962846a0751b679c38b"
  },
  {
    "url": "plugins/processors/Benchmark.html",
    "revision": "557d959b16c1f5ff08033b06b49cb345"
  },
  {
    "url": "plugins/processors/BlinkChangeDetector.html",
    "revision": "e4ab8a2c50f44a7fdea07379e20ea14c"
  },
  {
    "url": "plugins/processors/BlinkDetection.html",
    "revision": "d165f64c92284a081da1472b4d0f6c99"
  },
  {
    "url": "plugins/processors/BlinkDetector.html",
    "revision": "ddbd02428acdd9c91ebd4c9b403ef9d8"
  },
  {
    "url": "plugins/processors/BlinkDetectorTrainer.html",
    "revision": "5c91cd180b9dfd2c4c23c56298ac0310"
  },
  {
    "url": "plugins/processors/Comparator.html",
    "revision": "4fbfffe17747410a82b4c92da270a4fd"
  },
  {
    "url": "plugins/processors/ComPort.html",
    "revision": "c83301827eb054b789be89a70d2f536a"
  },
  {
    "url": "plugins/processors/ComputeBandpower.html",
    "revision": "3abf856aebe70678103d7c42082ef3be"
  },
  {
    "url": "plugins/processors/ConstantDispatcher.html",
    "revision": "e5a1f10bf0a78e5922bef40f5cf60a97"
  },
  {
    "url": "plugins/processors/DataType.html",
    "revision": "241ba1c4774beb74fbef8e4c056904b0"
  },
  {
    "url": "plugins/processors/DateToDouble.html",
    "revision": "38d0a9ba2a9e249b43c174ff2f9bb0f9"
  },
  {
    "url": "plugins/processors/Deadzone.html",
    "revision": "178a85b35464b5188c4f5922f4916c37"
  },
  {
    "url": "plugins/processors/Decimation.html",
    "revision": "dafbd8650313e20ce821332fc4162102"
  },
  {
    "url": "plugins/processors/Delay.html",
    "revision": "ef0e8d1405b2cee00130cead28349318"
  },
  {
    "url": "plugins/processors/Derivative.html",
    "revision": "e71f90351200924e04a8418f54d4a2e6"
  },
  {
    "url": "plugins/processors/Differentiate.html",
    "revision": "09782de3897697d9e8bea935c5c75f45"
  },
  {
    "url": "plugins/processors/Dissimilarity.html",
    "revision": "264a472f9ff7843b5487b05544733670"
  },
  {
    "url": "plugins/processors/DoubleToString.html",
    "revision": "c3327755acbc5e5b25fecf1fea3f1a45"
  },
  {
    "url": "plugins/processors/ECMAScriptInterpreter.html",
    "revision": "dc2d85a8ba8cfc1222bd234a64e920d0"
  },
  {
    "url": "plugins/processors/eg_example.html",
    "revision": "cef499a227ab182e5a1103a1c982b7b6"
  },
  {
    "url": "plugins/processors/EventBlock.html",
    "revision": "1f5a0d9ae061a44584bfa09a8d617bf1"
  },
  {
    "url": "plugins/processors/EventCascade.html",
    "revision": "35dbacd0229d238a9a49d8e3b4c71f09"
  },
  {
    "url": "plugins/processors/EventCounter.html",
    "revision": "9d1a2c42262e0ba3f604d9d8b0bcbc20"
  },
  {
    "url": "plugins/processors/EventDelay.html",
    "revision": "e921bd3b52e35de5db2966b1fe77bce5"
  },
  {
    "url": "plugins/processors/EventDispatcher.html",
    "revision": "e5364c44b6c15b93ac64921e00bfbd1f"
  },
  {
    "url": "plugins/processors/EventFlipFlop.html",
    "revision": "c92962e10a17c36343424cca8fcc97ca"
  },
  {
    "url": "plugins/processors/EventRouter.html",
    "revision": "411c83cf76672abbef23fbee355ad398"
  },
  {
    "url": "plugins/processors/EventStateMachine.html",
    "revision": "d31a7734b46e5cacff9ef2bf6d12fc26"
  },
  {
    "url": "plugins/processors/FABI.html",
    "revision": "313f977438022bed4d1b7f221fa5bac6"
  },
  {
    "url": "plugins/processors/FabiCronusMax.html",
    "revision": "8daa198e7347270d64136b24483226f2"
  },
  {
    "url": "plugins/processors/Filter.html",
    "revision": "ed9697e921ed1a757f3c8b793c996207"
  },
  {
    "url": "plugins/processors/FS20CommandInterpreter.html",
    "revision": "3c8c981e98c51f6c80e5cc987bb81a74"
  },
  {
    "url": "plugins/processors/HRVAnalysis.html",
    "revision": "86112ff3f02f5dda4ad3322066f546ac"
  },
  {
    "url": "plugins/processors/HRVRmssdFromRR.html",
    "revision": "42a55ff23e6b7cd80444ea38ea1ca009"
  },
  {
    "url": "plugins/processors/IIRFilter.html",
    "revision": "fc5bed01ee3f74d8103d1c0d1dbda5fc"
  },
  {
    "url": "plugins/processors/Integrate.html",
    "revision": "893c764c799b5d42dacbf990e6710dda"
  },
  {
    "url": "plugins/processors/IntToString.html",
    "revision": "03f210529976966c1605eba354ae4a7d"
  },
  {
    "url": "plugins/processors/IrMicro.html",
    "revision": "6ca31a6be8e4ede74e7849eb05ffc260"
  },
  {
    "url": "plugins/processors/javascript.svg",
    "revision": "4ce031b5b57c4b726762dc700e7e0eb7"
  },
  {
    "url": "plugins/processors/JsonParser.html",
    "revision": "afdb307bbf6a3e258eeef54058acbf1c"
  },
  {
    "url": "plugins/processors/MathEvaluator.html",
    "revision": "23fb3302e9181c67b4ba69d2c40dce19"
  },
  {
    "url": "plugins/processors/MinMax.html",
    "revision": "89827686b290945cc53763ea5e32e002"
  },
  {
    "url": "plugins/processors/MotionAnalysis.html",
    "revision": "8334330f0f716ec950b7a21258949df6"
  },
  {
    "url": "plugins/processors/MultiSource.html",
    "revision": "d4cc71fd810173b26ed2d165d3f3d38c"
  },
  {
    "url": "plugins/processors/MultiSourceString.html",
    "revision": "8a576f2f75e19a9af0c990f4117c8229"
  },
  {
    "url": "plugins/processors/NeuralNetworkLoader.html",
    "revision": "ca4708acb53d4492e9c67994552086c4"
  },
  {
    "url": "plugins/processors/NexusConnector.html",
    "revision": "22ffdffb3b7465d4c7e3b2783434bfe4"
  },
  {
    "url": "plugins/processors/OneEventManyActions.html",
    "revision": "cb85e1911310a2a57aa29605ca6c836b"
  },
  {
    "url": "plugins/processors/OpenHAB.html",
    "revision": "2ca60e2ac43d577b908f1e2a889bebe5"
  },
  {
    "url": "plugins/processors/openhab.svg",
    "revision": "c6021fcfb65ae0fffecaeb7594e6a83c"
  },
  {
    "url": "plugins/processors/OscGestureFollower.html",
    "revision": "fbc8ff6a43375078a0cdc1aef93f77a2"
  },
  {
    "url": "plugins/processors/OskaExternalScanning1D.html",
    "revision": "1d673c663d5aa3ad8bec0c45bd9fe725"
  },
  {
    "url": "plugins/processors/OskaExternalScanning2D.html",
    "revision": "847bafa2e5b05d958e58c28b49201627"
  },
  {
    "url": "plugins/processors/OskaInternalScanning.html",
    "revision": "57092356e62da86f89a4ddf0577db423"
  },
  {
    "url": "plugins/processors/PathMultiplexer.html",
    "revision": "e8b2ce3d25533f405382d495f982a302"
  },
  {
    "url": "plugins/processors/Pathselector.html",
    "revision": "1bdb52a01ec55ae6de0ce89e672da349"
  },
  {
    "url": "plugins/processors/PeakDetector.html",
    "revision": "225f7d2b761d5e76c76e156a20bff085"
  },
  {
    "url": "plugins/processors/ProtocolSSVEPTrain.html",
    "revision": "f400f5bf7e75d019821d2c797663093c"
  },
  {
    "url": "plugins/processors/Quantizer.html",
    "revision": "0b9265749d385025807f5acd835309b8"
  },
  {
    "url": "plugins/processors/RegularExpression.html",
    "revision": "0401ca05efaea9031cf0032526fa7d51"
  },
  {
    "url": "plugins/processors/RelativeMoveSampler.html",
    "revision": "bd79249097107156784b03568cfb8484"
  },
  {
    "url": "plugins/processors/SampleAndHold.html",
    "revision": "2f4a2269895b45b689cb15479e3be644"
  },
  {
    "url": "plugins/processors/Sampler.html",
    "revision": "eef9a51cc31c94de1026dba0c021d0a7"
  },
  {
    "url": "plugins/processors/SerialPort.html",
    "revision": "87b48cf669d4d8fac070ab335782e061"
  },
  {
    "url": "plugins/processors/SerialSender.html",
    "revision": "a32c2f206569a89b8642dae5854a049c"
  },
  {
    "url": "plugins/processors/SignalTranslation.html",
    "revision": "93e1a1041e3fb09245c8208343cd0810"
  },
  {
    "url": "plugins/processors/SpeechProcessor.html",
    "revision": "78ffe35e04e7b5d8012a86ddfa0a351f"
  },
  {
    "url": "plugins/processors/SSVEPDetect.html",
    "revision": "c9a7c764f7bbb3f1cab1fe2479098426"
  },
  {
    "url": "plugins/processors/StringAppend.html",
    "revision": "444b87c0bc112e1fa54fff6e1c5b265b"
  },
  {
    "url": "plugins/processors/StringDelay.html",
    "revision": "0c4060f0bc58a34a82a945080fea0dda"
  },
  {
    "url": "plugins/processors/StringDispatcher.html",
    "revision": "516f19c4500d0ad9934a64d821b44dbc"
  },
  {
    "url": "plugins/processors/StringExpander.html",
    "revision": "bae6a704b39b3570ed6e36f8aa2025bf"
  },
  {
    "url": "plugins/processors/StringExtractor.html",
    "revision": "2e060a173ee89e6723a1f77c1dd59088"
  },
  {
    "url": "plugins/processors/StringFilter.html",
    "revision": "9a909eeb71e4450aeb4954292064d2f2"
  },
  {
    "url": "plugins/processors/StringFormatter.html",
    "revision": "22c18fe2b787593d922fdb3b2991aac1"
  },
  {
    "url": "plugins/processors/StringPathMultiplexer.html",
    "revision": "73dd8507fa42789b47bbaeeadf24601c"
  },
  {
    "url": "plugins/processors/StringPathSelector.html",
    "revision": "32b29a6b4d6df9f1ddd6b1ac00eb7e45"
  },
  {
    "url": "plugins/processors/StringSplitter.html",
    "revision": "9ab9cba719d7366efab25b6222482134"
  },
  {
    "url": "plugins/processors/StringToDouble.html",
    "revision": "f53217bf41b32dd0a9819af62897d6fc"
  },
  {
    "url": "plugins/processors/StringToInt.html",
    "revision": "1816abccc78d7b131680dbe6f2d9030f"
  },
  {
    "url": "plugins/processors/TextSender.html",
    "revision": "afd850d51e7001cde4555b7d4adb7642"
  },
  {
    "url": "plugins/processors/Threshold.html",
    "revision": "8d522bbfc782a10b799309707045e4e1"
  },
  {
    "url": "plugins/processors/TimestampWriter.html",
    "revision": "0c812c637b5193c506bab6335d3d585c"
  },
  {
    "url": "plugins/processors/UniversalRemoteControl.html",
    "revision": "66557caee5f28f01b7d164246af30776"
  },
  {
    "url": "plugins/processors/WebSocket.html",
    "revision": "975d59f40090587f152d1bfee89ac6f4"
  },
  {
    "url": "plugins/processors/Yaak.html",
    "revision": "75f117717b3e21bb1ef32743b367337f"
  },
  {
    "url": "plugins/sensors/Acceleration.html",
    "revision": "01bdd979b4e49125a9d133f8975b68de"
  },
  {
    "url": "plugins/sensors/AnalogIn.html",
    "revision": "25b704c07b466f629c4f653123c30589"
  },
  {
    "url": "plugins/sensors/AutostartEvent.html",
    "revision": "8e3f9f4ff53fc5f7b606149c24609bf0"
  },
  {
    "url": "plugins/sensors/ButtonGrid.html",
    "revision": "1fb2b707e5453d36f7f7ce6dc8b15a4b"
  },
  {
    "url": "plugins/sensors/CellBoard.html",
    "revision": "d939b07c890c74a78524165e59cce529"
  },
  {
    "url": "plugins/sensors/DigitalIn.html",
    "revision": "0143605688d31cd82b5f96653ba58da1"
  },
  {
    "url": "plugins/sensors/EditBox.html",
    "revision": "31ed96dd9e243419c730d8eec9d07a06"
  },
  {
    "url": "plugins/sensors/Enobio.html",
    "revision": "76ee3a574028dfba9e5971229f333d16"
  },
  {
    "url": "plugins/sensors/EOG.html",
    "revision": "592229560fd37aa26b65fbdfc0c9cef8"
  },
  {
    "url": "plugins/sensors/EShoe.html",
    "revision": "675ce538373e027a6b842361579bc719"
  },
  {
    "url": "plugins/sensors/EventGenerator.html",
    "revision": "4bf1e4d622d5d84737e433e4ff44d5a6"
  },
  {
    "url": "plugins/sensors/Eyetracker.html",
    "revision": "087ae81541231996d06d8b21a82186cc"
  },
  {
    "url": "plugins/sensors/EyeTribe.html",
    "revision": "9a84762cc76e7a5769ff08f5ca627cd2"
  },
  {
    "url": "plugins/sensors/EyeX.html",
    "revision": "60aa5071f22d6061d81399a6c28410b6"
  },
  {
    "url": "plugins/sensors/FacetrackerCLM.html",
    "revision": "30436791d41d97e94bd427caf90c6c4f"
  },
  {
    "url": "plugins/sensors/FacetrackerLK.html",
    "revision": "39ecad2d04b9479a7e24557ba2152142"
  },
  {
    "url": "plugins/sensors/FolderBrowser.html",
    "revision": "4653027447bdd650daa0a76a10635125"
  },
  {
    "url": "plugins/sensors/FS20Receiver.html",
    "revision": "b5d38c2cd53e1b3d54df7246aee60b28"
  },
  {
    "url": "plugins/sensors/HeadPositionHC.html",
    "revision": "83279a2cc5435453fadd315fcf5600dd"
  },
  {
    "url": "plugins/sensors/HoverPanel.html",
    "revision": "65925684b4a2a6bba5c08e3ce6c21c1e"
  },
  {
    "url": "plugins/sensors/IntelRealSense.html",
    "revision": "7c5db9013ef47735e71fa8cf6300593e"
  },
  {
    "url": "plugins/sensors/JoystickCapture.html",
    "revision": "c1b62256c01faa6c0b856abd5e2c7065"
  },
  {
    "url": "plugins/sensors/KeyboardCapture.html",
    "revision": "f6ddc9d6e9c7991736c3f6b294a5a2b0"
  },
  {
    "url": "plugins/sensors/KeyCapture.html",
    "revision": "8402e116e304cc5912b83ecc8e8195a7"
  },
  {
    "url": "plugins/sensors/Kinect.html",
    "revision": "f1a5b4670f8a961dcb9c5f4a7189e50a"
  },
  {
    "url": "plugins/sensors/kinect.png",
    "revision": "34f240cb60e07972fa97031c5bd21964"
  },
  {
    "url": "plugins/sensors/KinectJ4K.html",
    "revision": "39995bb684d763012d315b3520c65cfa"
  },
  {
    "url": "plugins/sensors/kinectj4k.png",
    "revision": "25e7e6fd6803b37e4dfdeef31c1074af"
  },
  {
    "url": "plugins/sensors/LegacyAnalogIn.html",
    "revision": "134b3338e8e0e8298399dce0bf1e1b92"
  },
  {
    "url": "plugins/sensors/LegacyDigitalIn.html",
    "revision": "a3c5e1aa28d6516f7ae621788fb47caa"
  },
  {
    "url": "plugins/sensors/Lightscore.html",
    "revision": "c2f99177dbaaf5da3653b59e21bcdb20"
  },
  {
    "url": "plugins/sensors/LineReader.html",
    "revision": "726baf93612ec5ca0b08baff3a14d7b5"
  },
  {
    "url": "plugins/sensors/lipmouse-ir.svg",
    "revision": "34bb4aa7203f2eb11488121d91d25b6a"
  },
  {
    "url": "plugins/sensors/Lipmouse.html",
    "revision": "84df3abb335bc558443b534079fa5a5f"
  },
  {
    "url": "plugins/sensors/lipmouse.png",
    "revision": "d59692a5eeadfdaa05bd33d1ae38814b"
  },
  {
    "url": "plugins/sensors/LipmouseIR.html",
    "revision": "bb8318ab04951e4b63bac42f371d1218"
  },
  {
    "url": "plugins/sensors/MicGPI.html",
    "revision": "061a0c5260fa68bc9ceb34a809976b6d"
  },
  {
    "url": "plugins/sensors/MouseCapture.html",
    "revision": "b5c05a21a124ceb73d915544972cc20b"
  },
  {
    "url": "plugins/sensors/OpenBCI.html",
    "revision": "1d3d12de63707cd42468ca84326885af"
  },
  {
    "url": "plugins/sensors/OpenVibe.html",
    "revision": "2f291b22f8a3f36b8df63e4caaddb386"
  },
  {
    "url": "plugins/sensors/OscServer.html",
    "revision": "962e631f1834f70f527f55888da14697"
  },
  {
    "url": "plugins/sensors/P2_Parser.html",
    "revision": "5ed46f07e15ccbfd80a15c064dd86031"
  },
  {
    "url": "plugins/sensors/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/sensors/PhilipsHueSensor.html",
    "revision": "20b47ca1a69471f293c74762c7007bbc"
  },
  {
    "url": "plugins/sensors/PlatformAnalogIn.html",
    "revision": "5386649a0c6273dad4536cf88350cf96"
  },
  {
    "url": "plugins/sensors/PlatformDigitalIn.html",
    "revision": "2d28b661fc0a5415e9b335f51d1b77e7"
  },
  {
    "url": "plugins/sensors/Proximity.html",
    "revision": "b6d449150b4b5e4b2972b3c838050230"
  },
  {
    "url": "plugins/sensors/RandomNumber.html",
    "revision": "62d4c70d2d4cb9acdd84d401b161f26d"
  },
  {
    "url": "plugins/sensors/RazorIMU.html",
    "revision": "9d5a4c5f85bb738ff96880d8bd8170dc"
  },
  {
    "url": "plugins/sensors/ReadCSV.html",
    "revision": "7cb6281022ddf5f23136a0debd29283e"
  },
  {
    "url": "plugins/sensors/ReadEDF.html",
    "revision": "faf78d3dcae8b5bc972dbe7aef33b6c3"
  },
  {
    "url": "plugins/sensors/RFIDReader.html",
    "revision": "f886cc2eeb36ebfa0cb089f2f397333b"
  },
  {
    "url": "plugins/sensors/Sensorboard.html",
    "revision": "40bbde500852d17d38933af361c12881"
  },
  {
    "url": "plugins/sensors/SignalGenerator.html",
    "revision": "ca33a83da646ec741c331f179a1901da"
  },
  {
    "url": "plugins/sensors/SignalShaper.html",
    "revision": "a6175240db71445da993366719ae5136"
  },
  {
    "url": "plugins/sensors/Slider.html",
    "revision": "add5479482423970f83284f28eb685d3"
  },
  {
    "url": "plugins/sensors/SpaceNavigator3DMouse.html",
    "revision": "bf5fdd6febd03f6bc34c62f70b075a9b"
  },
  {
    "url": "plugins/sensors/TextfieldReader.html",
    "revision": "95a4210dd5cf887fb7dfaa9f4b832175"
  },
  {
    "url": "plugins/sensors/Timer.html",
    "revision": "38f81167cb1566aea2abbbd25d3e6220"
  },
  {
    "url": "plugins/sensors/tobi4c.png",
    "revision": "6777234a1aed6499d450cdf7ab19762a"
  },
  {
    "url": "plugins/sensors/Tobii4CHeadTracker.html",
    "revision": "adfd7eb8c5b6158d9b686824deadc4a3"
  },
  {
    "url": "plugins/sensors/TobiTic.html",
    "revision": "30d15ea3943aa2a54dd6bde786ab8778"
  },
  {
    "url": "plugins/sensors/TuioReactivision.html",
    "revision": "a018b3cb854f5623ef3cd832b7e1d6e9"
  },
  {
    "url": "plugins/sensors/WiiMote.html",
    "revision": "8aa492886ea328a469c28e3fde0880fd"
  },
  {
    "url": "plugins/sensors/wiimote.png",
    "revision": "8a5c2c5a7a221add26dead3904975fda"
  },
  {
    "url": "plugins/sensors/XFacetrackerLK.html",
    "revision": "7735c35c9c3aa44af3fa2ff55dd7907a"
  },
  {
    "url": "solutions/AAC-Basic.html",
    "revision": "20cf731035399f52840a2a53e1780589"
  },
  {
    "url": "solutions/Camera-Mouse.html",
    "revision": "2273ba31fa7c77b63ff4fffe978f6eb9"
  },
  {
    "url": "solutions/Eye-Tracking-Mouse.html",
    "revision": "6d9b0b8098a5a783f207b63ae3699ae0"
  },
  {
    "url": "solutions/Head-Sound.html",
    "revision": "692c065d38fe59b6c74711bdc00c19b8"
  },
  {
    "url": "solutions/index.html",
    "revision": "0dae6b79dfe5c55af79370e097738b78"
  },
  {
    "url": "solutions/Switch-Mouse.html",
    "revision": "f50bfa9158f21a4c7c5517b6c0f8b39f"
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
    "revision": "77e0f3e4d598fc7f9711b8c112c3bef9"
  },
  {
    "url": "webapps/Plugin-IDE.html",
    "revision": "89391b1d12f19315dd2f26ee306bfe0d"
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
