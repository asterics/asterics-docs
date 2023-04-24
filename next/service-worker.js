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
    "revision": "6e92189b174245ec847e3f437032c5ec"
  },
  {
    "url": "assets/css/0.styles.14330c41.css",
    "revision": "0ca0d3474396938872302cae9be997b1"
  },
  {
    "url": "assets/fonts/fa-brands-400.83a42241.woff2",
    "revision": "83a42241ada98e0f959353ca0c3ee027"
  },
  {
    "url": "assets/fonts/fa-brands-400.94227daa.ttf",
    "revision": "94227daa6303fd42918ce3af431ef7e8"
  },
  {
    "url": "assets/fonts/fa-regular-400.3f505ed8.woff2",
    "revision": "3f505ed834ca9466cf7efc2806b86604"
  },
  {
    "url": "assets/fonts/fa-regular-400.47fa5e12.ttf",
    "revision": "47fa5e12e9fc4e8325a6e1a0735b38f6"
  },
  {
    "url": "assets/fonts/fa-solid-900.44f8148f.woff2",
    "revision": "44f8148f80e6c3d60fa6425b0cbb862a"
  },
  {
    "url": "assets/fonts/fa-solid-900.e8132d05.ttf",
    "revision": "e8132d053030afa547e23b5163ef8301"
  },
  {
    "url": "assets/fonts/fa-v4compatibility.91fc9b00.ttf",
    "revision": "91fc9b0078b939bddcde338550684848"
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
    "url": "assets/img/f2.9459b77d.svg",
    "revision": "9459b77da66aec05549764e7628647c7"
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
    "url": "assets/img/fig20.1.3a671358.svg",
    "revision": "3a671358ea963b7dced2406b92cc45de"
  },
  {
    "url": "assets/img/fig3.1.86589023.svg",
    "revision": "86589023a0adffde8bab4a2e456bd671"
  },
  {
    "url": "assets/img/fig3.a3e5172a.svg",
    "revision": "a3e5172aac9be41dca13b31f67047c5f"
  },
  {
    "url": "assets/img/fig34.1.f4c90c14.jpg",
    "revision": "f4c90c14bb6d95b3644e34bb026f8137"
  },
  {
    "url": "assets/img/fig34.2.2e78b5e2.jpg",
    "revision": "2e78b5e26c645a578c0ad879e2b6fc5f"
  },
  {
    "url": "assets/img/fig34.3.b598f656.jpg",
    "revision": "b598f656447f167d0afe274db92085fd"
  },
  {
    "url": "assets/img/fig5.1.222be187.svg",
    "revision": "222be187ca97150d104dafed68ad6fb7"
  },
  {
    "url": "assets/img/fig6.1.728afeab.svg",
    "revision": "728afeab78ee75eb5e5d659cda397561"
  },
  {
    "url": "assets/img/fig8.1.2324d0d1.svg",
    "revision": "2324d0d1e620e5e5b127b1418acf8fcf"
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
    "url": "assets/img/flip1.0ad60902.svg",
    "revision": "0ad609028d38bd8b5cd04334e9534ede"
  },
  {
    "url": "assets/img/flipmouseLogo.115b0ada.svg",
    "revision": "115b0ada33bd65ba5bbcf67b79529aa9"
  },
  {
    "url": "assets/img/folderbrowser.b4608102.jpg",
    "revision": "b4608102d876834c916eda1c0f40d00a"
  },
  {
    "url": "assets/img/footer_en.4a5ea909.jpg",
    "revision": "4a5ea909b25762ac3e723507fb3a077a"
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
    "url": "assets/img/header_en.4ea05680.jpg",
    "revision": "4ea0568093f33456417db2395cb2b194"
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
    "url": "assets/img/logo.a7651da9.svg",
    "revision": "a7651da9a8a906f803a081d2fa948de4"
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
    "url": "assets/img/slot_testmode_en.4f688a45.jpg",
    "revision": "4f688a45788bf43442bbfcc8f1c7f4ac"
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
    "url": "assets/img/tab_general_en.78de5896.jpg",
    "revision": "78de58966d752e45c8bee3855ab2918e"
  },
  {
    "url": "assets/img/tab_slots1_en.fd32cba0.jpg",
    "revision": "fd32cba04c1aca64ccbd8875602fd947"
  },
  {
    "url": "assets/img/tab_slots2_en.8d31d491.jpg",
    "revision": "8d31d491c26be2ebc4607d90a04c3c00"
  },
  {
    "url": "assets/img/tab_stick_en.3d1865f1.jpg",
    "revision": "3d1865f137f4968a693198a6f86a5d0a"
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
    "url": "assets/js/1.0f46ea1a.js",
    "revision": "7c8ec9f34b3137bcc1eace9678dd27f0"
  },
  {
    "url": "assets/js/10.762af64f.js",
    "revision": "d253ab8ab7cadad624ee85e60253255e"
  },
  {
    "url": "assets/js/100.7a6ede7f.js",
    "revision": "7495375ddb0502624c26b7cbf972e472"
  },
  {
    "url": "assets/js/101.66d2ce62.js",
    "revision": "d49174783dda20ef555afef07ebab825"
  },
  {
    "url": "assets/js/102.98afc2d6.js",
    "revision": "5f6aba5685250b7064760f3646ca66b0"
  },
  {
    "url": "assets/js/103.2be50442.js",
    "revision": "64645ba73ea4c73c6a08a39a630bc142"
  },
  {
    "url": "assets/js/104.b9e28d03.js",
    "revision": "9f67dff37c3ea1047ab6c1342a2d6e6d"
  },
  {
    "url": "assets/js/105.7f67d66e.js",
    "revision": "f241354871c7f64d25bb1f96abf0e73e"
  },
  {
    "url": "assets/js/106.d038c85b.js",
    "revision": "dded8ed3ffdc5ca813222de1d69639c7"
  },
  {
    "url": "assets/js/107.ff32302d.js",
    "revision": "d575aeef0fc63f9b82eb93ac82339320"
  },
  {
    "url": "assets/js/108.5f88afc0.js",
    "revision": "e76e17231179bdbe9c856db81a0ab3c7"
  },
  {
    "url": "assets/js/109.92f7a842.js",
    "revision": "4bdefa0f7ef31c0b6b81f2f3b3565599"
  },
  {
    "url": "assets/js/11.a2764e72.js",
    "revision": "8ce65ef6aedff1bc4ac4f868c5b0044e"
  },
  {
    "url": "assets/js/110.9e363761.js",
    "revision": "65de9a9557c9587c7d11d59b59cd6c65"
  },
  {
    "url": "assets/js/111.70e7a1b0.js",
    "revision": "bdf8629ded098258db60722eccdcf85a"
  },
  {
    "url": "assets/js/112.c62a3b21.js",
    "revision": "217fccf11db23f7ea7cc0bcd9f85be74"
  },
  {
    "url": "assets/js/113.1f0efdf6.js",
    "revision": "521cb56589998a9f21d008180848d25d"
  },
  {
    "url": "assets/js/114.9dd8b48d.js",
    "revision": "37dfe76f9d4db42fd32af26652b676ad"
  },
  {
    "url": "assets/js/115.5355b2fb.js",
    "revision": "ec219d5780500466e48cf65220ed085f"
  },
  {
    "url": "assets/js/116.b155b685.js",
    "revision": "ea1f60e9d247099e63dc237d95e3b95d"
  },
  {
    "url": "assets/js/117.1d04e398.js",
    "revision": "3ffd3f8653bda2213d779db4cca35631"
  },
  {
    "url": "assets/js/118.c5a2ee28.js",
    "revision": "b0b5336863ad46a67f2e036487807cbc"
  },
  {
    "url": "assets/js/119.55726c55.js",
    "revision": "73bc51498826b0067122af3f2b6bfc8f"
  },
  {
    "url": "assets/js/12.36ab5aba.js",
    "revision": "e5d08da6b9938a68e9089c099debcd75"
  },
  {
    "url": "assets/js/120.cc05b169.js",
    "revision": "e66e0550828faa186670d3a1e63b6d0a"
  },
  {
    "url": "assets/js/121.a155860d.js",
    "revision": "69263ddaf1eba55c7c0473dac8fa5475"
  },
  {
    "url": "assets/js/122.3d9fc939.js",
    "revision": "94fc0ae4f7f001988ab2c48a3bfc9c4a"
  },
  {
    "url": "assets/js/123.47a93dcd.js",
    "revision": "e71fdf0a96138797146e27cfd954c7fb"
  },
  {
    "url": "assets/js/124.1295f915.js",
    "revision": "5566a94227acad68f8f3c5c8d23c14f5"
  },
  {
    "url": "assets/js/125.53234b42.js",
    "revision": "13a20480518228a5fa6e8a6497c24fbc"
  },
  {
    "url": "assets/js/126.da213cbc.js",
    "revision": "4bac912bd3883a2d559e5cb842706520"
  },
  {
    "url": "assets/js/127.785a8aef.js",
    "revision": "d1556bf12b5cf41f8fca029847d4ef7f"
  },
  {
    "url": "assets/js/128.ced8780e.js",
    "revision": "869c4496b8ebbd8c4cf6fcb12c342c9a"
  },
  {
    "url": "assets/js/129.c2240169.js",
    "revision": "4ffe6b565417724c9d159b2f86266029"
  },
  {
    "url": "assets/js/13.00b04a87.js",
    "revision": "2e225c414d0fc31cd7a2c3209ab4d884"
  },
  {
    "url": "assets/js/130.b915d431.js",
    "revision": "f42cccd55e7dae670e8191fccc254e3d"
  },
  {
    "url": "assets/js/131.7097cf56.js",
    "revision": "6aa649f9f21284d383f12c7a56fc68fe"
  },
  {
    "url": "assets/js/132.9f95faba.js",
    "revision": "0db7b9bdabbd4aef4f1209a626b083f0"
  },
  {
    "url": "assets/js/133.36d18b2e.js",
    "revision": "e6df6e658e850f036320648776763833"
  },
  {
    "url": "assets/js/134.7c6fb34c.js",
    "revision": "ac7afd5623b2a5b093d4389404f90ecf"
  },
  {
    "url": "assets/js/135.ea18953c.js",
    "revision": "f75a9c3d262a765cec5dbd1edd660de8"
  },
  {
    "url": "assets/js/136.30a78793.js",
    "revision": "cbc77ca9d4edc172397d00276095206b"
  },
  {
    "url": "assets/js/137.4fb7b99e.js",
    "revision": "f216f41a1f03cb0bbb1ddcce56e3e781"
  },
  {
    "url": "assets/js/138.e712ad9e.js",
    "revision": "35c9ef013f02ea0c19e7c8b2ec333685"
  },
  {
    "url": "assets/js/139.130836de.js",
    "revision": "755d736ff7bebc7e719000b5d9c2fe66"
  },
  {
    "url": "assets/js/14.f76f78ff.js",
    "revision": "0841cf5cdf480ca3f36d276818c5183f"
  },
  {
    "url": "assets/js/140.44c5e45b.js",
    "revision": "e27eaf0a90d777ac4c55ac9d1a18a4bc"
  },
  {
    "url": "assets/js/141.4f8b661b.js",
    "revision": "828f0698560b0a4bb69544458a322800"
  },
  {
    "url": "assets/js/142.9101300d.js",
    "revision": "df117d520e4b63d18e3fc51464bb174d"
  },
  {
    "url": "assets/js/143.81892fec.js",
    "revision": "5142665e7a6cd1a8eace9c987e0123c9"
  },
  {
    "url": "assets/js/144.16320501.js",
    "revision": "202602d93e42aebbf6a1752a805e183d"
  },
  {
    "url": "assets/js/145.23c1320b.js",
    "revision": "dab0ac4d44e1346eb9e3fcc9cd3cc163"
  },
  {
    "url": "assets/js/146.97b0d608.js",
    "revision": "b91b7933d6d8a309370e0f252167dc81"
  },
  {
    "url": "assets/js/147.3952b2a2.js",
    "revision": "160d4eb62055b7e1aae36784ee188eb7"
  },
  {
    "url": "assets/js/148.4ae977f6.js",
    "revision": "e424bf4b2227da4052c892c050b8facd"
  },
  {
    "url": "assets/js/149.9cc22779.js",
    "revision": "f9a534838bb6a1d04c352746b4662f95"
  },
  {
    "url": "assets/js/15.17428cbc.js",
    "revision": "5aeb0e218db1bece83e525eae2abd77e"
  },
  {
    "url": "assets/js/150.0870f892.js",
    "revision": "16fe1822d174e57dee8cfffd12ea7cff"
  },
  {
    "url": "assets/js/151.41660ed4.js",
    "revision": "add0ced86e52a2ee6a21b7da7f89c455"
  },
  {
    "url": "assets/js/152.9686bcc5.js",
    "revision": "7bcee92c84f44e5513f1f6d8d8e4e358"
  },
  {
    "url": "assets/js/153.1622073b.js",
    "revision": "dc93ded8bc0702ed879e3ba51d6945b0"
  },
  {
    "url": "assets/js/154.35d4f426.js",
    "revision": "51b95eae9e8802073caba48ee3a0c3d0"
  },
  {
    "url": "assets/js/155.fca3508b.js",
    "revision": "e47d2e9445d5ea9709cc849059c73ff4"
  },
  {
    "url": "assets/js/156.6fe49e93.js",
    "revision": "95e09019329c0f8e8f63ec4aab41fb23"
  },
  {
    "url": "assets/js/157.d2cc92d3.js",
    "revision": "95c43e67b82fbb405ab99cd2a209962d"
  },
  {
    "url": "assets/js/158.b163387a.js",
    "revision": "c3e8df28cb406fa15254bd2504b07e31"
  },
  {
    "url": "assets/js/159.ddfcb57b.js",
    "revision": "91d84f4731cf661251bc1bf87465ec17"
  },
  {
    "url": "assets/js/16.d4a4d4f4.js",
    "revision": "2f8c79966f5df648ad79cbf4fa2f735b"
  },
  {
    "url": "assets/js/160.cb589b5b.js",
    "revision": "03c68dfa9460803340cfc6c4f7c08cd2"
  },
  {
    "url": "assets/js/161.88e7059d.js",
    "revision": "8f9db62553e61535ca2603e98a71c646"
  },
  {
    "url": "assets/js/162.1c5ee8ca.js",
    "revision": "fb9748ce8ceb2c4a364609cff9ff4eda"
  },
  {
    "url": "assets/js/163.15790519.js",
    "revision": "3a8b04468c3be7c63246453237b10ddd"
  },
  {
    "url": "assets/js/164.53b12532.js",
    "revision": "cb2a58a2d3ec69615870aa56eb008605"
  },
  {
    "url": "assets/js/165.33e5bc1a.js",
    "revision": "fb31d1f1204ad8e48ff73d4951918217"
  },
  {
    "url": "assets/js/166.5a6da113.js",
    "revision": "9f770a09486d76470e3e5d3d70c5d089"
  },
  {
    "url": "assets/js/167.bc6a591e.js",
    "revision": "7ede271699ea849f408d9a36d7c5a918"
  },
  {
    "url": "assets/js/168.39a5aa22.js",
    "revision": "a6d5167633c9a071d07b3f9f143c5631"
  },
  {
    "url": "assets/js/169.5e8fc1b9.js",
    "revision": "3c34aa58d271679ce4dcdfbdc64935a6"
  },
  {
    "url": "assets/js/17.6aa840df.js",
    "revision": "9628b8ff2d6fa7899a506f04188a976f"
  },
  {
    "url": "assets/js/170.c9bfd96b.js",
    "revision": "174eb15db44f8f199a2ba4f34e6d2fd8"
  },
  {
    "url": "assets/js/171.6aed0eb5.js",
    "revision": "18d8ff3087ec03b1747fedaa715897ee"
  },
  {
    "url": "assets/js/172.8787817a.js",
    "revision": "72f723f284c889069cfd52f033feab63"
  },
  {
    "url": "assets/js/173.ce0771af.js",
    "revision": "621a718906c142e7b12fbeebf3cf35a6"
  },
  {
    "url": "assets/js/174.5312141e.js",
    "revision": "1c0dd9f63a70f6b4bdb8c7095d98e9e5"
  },
  {
    "url": "assets/js/175.116a1ff8.js",
    "revision": "507a147131a6e62ace50c9960b0e5a03"
  },
  {
    "url": "assets/js/176.dd03aef7.js",
    "revision": "413493c1a7e7bd530d8f70360e3b74fd"
  },
  {
    "url": "assets/js/177.b73e40aa.js",
    "revision": "6a4719d34b4e96e0e3bb25f27810ab63"
  },
  {
    "url": "assets/js/178.0490cd93.js",
    "revision": "2075aa37533098aec3e5584ae9c913d6"
  },
  {
    "url": "assets/js/179.3d05c7db.js",
    "revision": "750e777f1ea914ac5fe9d345aa111ff6"
  },
  {
    "url": "assets/js/18.4a0332b6.js",
    "revision": "9ce84d56f3f71cd6e9c27fcd2de21d1e"
  },
  {
    "url": "assets/js/180.6bf6fe58.js",
    "revision": "09c12e0064ba52920780f3cb5695d335"
  },
  {
    "url": "assets/js/181.8686081f.js",
    "revision": "edea13af88f7e17531c2ad0a23518572"
  },
  {
    "url": "assets/js/182.a90c6a64.js",
    "revision": "5976ce3d2f197b258887318379fad23e"
  },
  {
    "url": "assets/js/183.98871546.js",
    "revision": "2933feb5af271d5dc80d34dc7279e2c0"
  },
  {
    "url": "assets/js/184.d990143b.js",
    "revision": "ce8608b6c4eb3ae1f8fbdfaf268595a4"
  },
  {
    "url": "assets/js/185.b382fa65.js",
    "revision": "e64f8a94974de628f74142cb7d802af3"
  },
  {
    "url": "assets/js/186.45194d63.js",
    "revision": "3382915d6e5a3e03bbc1af53e15fbb7b"
  },
  {
    "url": "assets/js/187.ba7852f2.js",
    "revision": "fd7aec767278e91c5a65a26e08566d83"
  },
  {
    "url": "assets/js/188.436249a7.js",
    "revision": "5b49890205c02b5111053eacff7b1aaf"
  },
  {
    "url": "assets/js/189.ce23fde1.js",
    "revision": "3d0b2ef0be5ddbf65dcb934779754d4f"
  },
  {
    "url": "assets/js/19.5f3da119.js",
    "revision": "f4cb51baa201c9eca6a5829a8e8e4bb4"
  },
  {
    "url": "assets/js/190.5b0fbf8c.js",
    "revision": "0ef37404c9999a09aaaa0f016bd77291"
  },
  {
    "url": "assets/js/191.afd405bb.js",
    "revision": "10b81d387289f9c37175147c600479bf"
  },
  {
    "url": "assets/js/192.b045d278.js",
    "revision": "c5276302b0de8f7228c364ed606071d7"
  },
  {
    "url": "assets/js/193.cea21a9f.js",
    "revision": "971af54df862f6940d2ff44fdacb4591"
  },
  {
    "url": "assets/js/194.9554713f.js",
    "revision": "d8819a986dab2426af00bb8d68dce953"
  },
  {
    "url": "assets/js/195.d808a4fa.js",
    "revision": "443f7bc76ba810daa36c5783a835f892"
  },
  {
    "url": "assets/js/196.0f38e8e0.js",
    "revision": "1296861da61341cf0bb7e35398f8b870"
  },
  {
    "url": "assets/js/197.57bd4a19.js",
    "revision": "7b1cbe4f4bdbd40f7200122b27a91a92"
  },
  {
    "url": "assets/js/198.eca959bc.js",
    "revision": "cee79f10affce252bc1f5aa9c815be92"
  },
  {
    "url": "assets/js/199.ab9c32be.js",
    "revision": "8d222be9d06db6cca8f06a8c8fec8805"
  },
  {
    "url": "assets/js/2.b68aa0c8.js",
    "revision": "96819979cd8fd9a39a498c841ed7176d"
  },
  {
    "url": "assets/js/20.ca264868.js",
    "revision": "124b1a0fc43ed97e39e05bbad217c008"
  },
  {
    "url": "assets/js/200.05630ed6.js",
    "revision": "b239036bdd48af9ecf52e0d1b95e3308"
  },
  {
    "url": "assets/js/201.e5ca1e27.js",
    "revision": "c947b7aec547cc251b55443bbdedb752"
  },
  {
    "url": "assets/js/202.5f6df53d.js",
    "revision": "7ca27b85fa98bd50c94277fffbc6ef85"
  },
  {
    "url": "assets/js/203.67b3a0d2.js",
    "revision": "a9ffdf154d2d6a7d52a8080370eef542"
  },
  {
    "url": "assets/js/204.5ea82e82.js",
    "revision": "e8dc4cbeb19fb1b178104788149d64c8"
  },
  {
    "url": "assets/js/205.61d83274.js",
    "revision": "536ce0c01f1894c0b44c39de1ea0e5c4"
  },
  {
    "url": "assets/js/206.9a77b3c9.js",
    "revision": "af9b99c501c6ebe0f013164a1ba40f9b"
  },
  {
    "url": "assets/js/207.59f22995.js",
    "revision": "0f43ad9ff06b0a06355fe10870da8629"
  },
  {
    "url": "assets/js/208.f23f5963.js",
    "revision": "581b72d1799a08ea5b3d5dd9baa5d2bf"
  },
  {
    "url": "assets/js/209.70654d56.js",
    "revision": "69950a6cf974fef8b70ee4260b642773"
  },
  {
    "url": "assets/js/21.5fa8ed7d.js",
    "revision": "e043a5483126f4bc6d837195c131cf02"
  },
  {
    "url": "assets/js/210.2786fba5.js",
    "revision": "e937e651e5ea937899ec23668fe22310"
  },
  {
    "url": "assets/js/211.674d60b6.js",
    "revision": "61f1920126e4dec16919355020594501"
  },
  {
    "url": "assets/js/212.e63e6142.js",
    "revision": "c22d781b1a731bfcc205d085d412cd56"
  },
  {
    "url": "assets/js/213.9a14003b.js",
    "revision": "dcc1eb8e196c9354846c9e91ec7269c2"
  },
  {
    "url": "assets/js/214.8480159c.js",
    "revision": "0e8961cbf2d1814762f93916a050e5b4"
  },
  {
    "url": "assets/js/215.0489ff3a.js",
    "revision": "5875e2eff9af7d874b61c93d3eac59a5"
  },
  {
    "url": "assets/js/216.2e0d0c3f.js",
    "revision": "6934001dc4d9b06477ac8bfc5277e08f"
  },
  {
    "url": "assets/js/217.99bf82ab.js",
    "revision": "e6c29585bac3afa667c4349ec4091bb6"
  },
  {
    "url": "assets/js/218.ae1bcd3b.js",
    "revision": "93f076c46b25f93a152a54752c17e78b"
  },
  {
    "url": "assets/js/219.183a97cd.js",
    "revision": "ca746acbe120e36a42ceaf9936ce6760"
  },
  {
    "url": "assets/js/22.90276813.js",
    "revision": "a454791546a685fdaf2b490928997332"
  },
  {
    "url": "assets/js/220.22e3e3c0.js",
    "revision": "9b8bfdd7fa6cc5b942f71e761b3379de"
  },
  {
    "url": "assets/js/221.bbbd0a5f.js",
    "revision": "c33dfe39c62096d1b9b17108e9461e7a"
  },
  {
    "url": "assets/js/222.321d721a.js",
    "revision": "b0749d88059e21fde906a30ff7d10081"
  },
  {
    "url": "assets/js/223.2072e176.js",
    "revision": "5c982f1beedd7d95a85dd48450628ba9"
  },
  {
    "url": "assets/js/224.fdeac932.js",
    "revision": "56086aec190139333d5f293ccfa68324"
  },
  {
    "url": "assets/js/225.a9efde2a.js",
    "revision": "882403b4cacbbf751acc21664cd93cc0"
  },
  {
    "url": "assets/js/226.d0c6f58e.js",
    "revision": "5fe96ab8ad345e361ca094eede854511"
  },
  {
    "url": "assets/js/227.ac93c816.js",
    "revision": "27e99bffa23e8ccc2ccdbaf2827a3a44"
  },
  {
    "url": "assets/js/228.ecd16237.js",
    "revision": "09f230d3db2563860d0a77aafcb036d0"
  },
  {
    "url": "assets/js/229.8ee6aa5f.js",
    "revision": "b070770b0627b1f3c8802693d99ec255"
  },
  {
    "url": "assets/js/23.9bc8409c.js",
    "revision": "aee31ea8856cd2e6610b68ff3f027105"
  },
  {
    "url": "assets/js/230.5fbc690d.js",
    "revision": "f7bf96165c4a0bd983264f781b30f465"
  },
  {
    "url": "assets/js/231.6a4f102a.js",
    "revision": "673e23fda0f74087b508d5aa63f11f68"
  },
  {
    "url": "assets/js/232.ae1e5596.js",
    "revision": "19ef4fa0c1d2852fd32fe1e5aec0cf3e"
  },
  {
    "url": "assets/js/233.a30cdb36.js",
    "revision": "0d1d9fcdb6aaa6f8437488bfa3501058"
  },
  {
    "url": "assets/js/234.2a4f4d7b.js",
    "revision": "d660ea84e2db3052b749e55fff7f0078"
  },
  {
    "url": "assets/js/235.e6f4050d.js",
    "revision": "b0c246d6937ff533a92e5516c8a54e79"
  },
  {
    "url": "assets/js/236.1aef2450.js",
    "revision": "8d518d1474ab8ca3b20bef94007ad055"
  },
  {
    "url": "assets/js/237.6a6cb0b7.js",
    "revision": "80306a82aa4b30e2f2f80bbe105ad1cc"
  },
  {
    "url": "assets/js/238.3d853be2.js",
    "revision": "b912cce771e49b24f7e7d90df908619f"
  },
  {
    "url": "assets/js/239.fff5ce23.js",
    "revision": "78e2704358b123e83b3c334358899ab9"
  },
  {
    "url": "assets/js/24.2c969aa6.js",
    "revision": "902600f307ff07ae2faaa438ff9135d3"
  },
  {
    "url": "assets/js/240.51928b8d.js",
    "revision": "5a6b2da01265fcac1d4a0084853d5186"
  },
  {
    "url": "assets/js/241.4e8dc0d5.js",
    "revision": "dffd136aea39e09d76fa793accfd1c0a"
  },
  {
    "url": "assets/js/242.72b28912.js",
    "revision": "4381b354e414516fa06489d36e2bd283"
  },
  {
    "url": "assets/js/243.10cbe136.js",
    "revision": "79fcc728af0bbe2486d69fe3fd6720ef"
  },
  {
    "url": "assets/js/244.2fdd548f.js",
    "revision": "b06a09787fc6e187fe1b3688ac987699"
  },
  {
    "url": "assets/js/245.e55fdb2d.js",
    "revision": "8b59fa16dad6e50ebf77bdcda0327571"
  },
  {
    "url": "assets/js/246.5b219022.js",
    "revision": "ca538ac5308fdfe30eda80ad0bcdf4d7"
  },
  {
    "url": "assets/js/247.f0b18d9d.js",
    "revision": "04bd43b4a2b4608fa826a017fc4fe91e"
  },
  {
    "url": "assets/js/248.6a3060ff.js",
    "revision": "4d266e54d7087221476c01e91a92df8d"
  },
  {
    "url": "assets/js/249.653e4d06.js",
    "revision": "3eb6fef9c405bad76ec2a62d9ff6c1ab"
  },
  {
    "url": "assets/js/25.764279cd.js",
    "revision": "31b36e96211124d8907b0feb4dc36232"
  },
  {
    "url": "assets/js/250.9189b7ce.js",
    "revision": "6599162daaf9c74b03486e3e989489fd"
  },
  {
    "url": "assets/js/251.2c88a5ce.js",
    "revision": "4ccbd5465355a85a23685fa3196aa0b7"
  },
  {
    "url": "assets/js/252.60d6c205.js",
    "revision": "63e340bd24cda7fd928507c6c41a589d"
  },
  {
    "url": "assets/js/253.00db6850.js",
    "revision": "bfb98ace0999ed9e0ab468dd89d12920"
  },
  {
    "url": "assets/js/254.6cec174a.js",
    "revision": "c76bcadc531253657b358a03b3177265"
  },
  {
    "url": "assets/js/255.1d1dbf8c.js",
    "revision": "97fb379c006c08465a7bf84f275af6bc"
  },
  {
    "url": "assets/js/256.30012fa5.js",
    "revision": "0d7a7f2eacf6157abf4e662900ccb165"
  },
  {
    "url": "assets/js/257.df9a8feb.js",
    "revision": "99e171ac18179f599f7b330f91f63e3b"
  },
  {
    "url": "assets/js/258.47a33d56.js",
    "revision": "445b8c20dfb90c10f98b945e83e2bc07"
  },
  {
    "url": "assets/js/259.0426ab2c.js",
    "revision": "053f2befc241cfc89848fbee81227082"
  },
  {
    "url": "assets/js/26.b1e57557.js",
    "revision": "2c80ad1ac02b649608682b83214f08a1"
  },
  {
    "url": "assets/js/260.8755d76a.js",
    "revision": "94472fe5336b4a4556975edd1393e2ff"
  },
  {
    "url": "assets/js/261.f75d3e89.js",
    "revision": "b71145f4db323c8164a5b414932b24a1"
  },
  {
    "url": "assets/js/262.8d3cbeef.js",
    "revision": "aea46bc4ffbd9806b895cba84370e073"
  },
  {
    "url": "assets/js/263.092509b7.js",
    "revision": "9a55486d09570b0b340d7d3fe019ec24"
  },
  {
    "url": "assets/js/264.930fea0d.js",
    "revision": "551158512e13d2badec166bcaebaea65"
  },
  {
    "url": "assets/js/265.27c92123.js",
    "revision": "33ce555251c6a2eae0272c8b96eabf70"
  },
  {
    "url": "assets/js/266.e0108e94.js",
    "revision": "81f8c4363b1a6e1faf4d61bf3d403046"
  },
  {
    "url": "assets/js/267.e7e9ee02.js",
    "revision": "6f96aab79eee66925f55552ce956ea84"
  },
  {
    "url": "assets/js/268.aba77ff2.js",
    "revision": "c81e868474c8ceedbff4d3e35f492d11"
  },
  {
    "url": "assets/js/269.cf73019b.js",
    "revision": "6c1a134d6245f85dbb5bf8788a78cdd6"
  },
  {
    "url": "assets/js/27.856a5915.js",
    "revision": "90326af37545de3b35c2540681360ef0"
  },
  {
    "url": "assets/js/270.3d98321c.js",
    "revision": "70c0c6b6e53c3062682baf095b44912c"
  },
  {
    "url": "assets/js/271.172564b7.js",
    "revision": "e9e4f806cddea5a95604a547f732e6e4"
  },
  {
    "url": "assets/js/272.3ce6ace0.js",
    "revision": "0795184f09d20dbc2e94f46ef6b19bf8"
  },
  {
    "url": "assets/js/273.9d38937e.js",
    "revision": "82cb57baa44ce2cbd7f69ce6dfbc5d59"
  },
  {
    "url": "assets/js/274.78dbd7dd.js",
    "revision": "84b98c1f757a91668f2b59680af90444"
  },
  {
    "url": "assets/js/275.ff5d7e3c.js",
    "revision": "4c101470e18363c50c93696673eaa243"
  },
  {
    "url": "assets/js/276.be03d46b.js",
    "revision": "2e9c82e7f58383973dec83c7ffb79df6"
  },
  {
    "url": "assets/js/277.40647a98.js",
    "revision": "6ecddf17ba1d38487a586ef78de67629"
  },
  {
    "url": "assets/js/278.2beb8201.js",
    "revision": "cd0119002be40a5bc973c6ed6605cc48"
  },
  {
    "url": "assets/js/279.4d2b6d89.js",
    "revision": "69fbcb211fe8bfc8d8ab01b5c82b5f17"
  },
  {
    "url": "assets/js/28.ab7a4733.js",
    "revision": "67574896afb7a649261336db7940ef58"
  },
  {
    "url": "assets/js/280.ab84f231.js",
    "revision": "1f8fb772cbc10d6a4ea36a85d8ddf180"
  },
  {
    "url": "assets/js/281.c78a043d.js",
    "revision": "60acfcbfafc2ee8fbd09494d3bab197f"
  },
  {
    "url": "assets/js/282.7c8a6b08.js",
    "revision": "7a98ac6573b6f4a24fc25a8891e912d6"
  },
  {
    "url": "assets/js/283.00d4c4dd.js",
    "revision": "1268b813b4afb5409cf202cf232e668c"
  },
  {
    "url": "assets/js/284.914e1e73.js",
    "revision": "953f8aa946a5d5a95a474b54509bec3f"
  },
  {
    "url": "assets/js/285.3a1a83a9.js",
    "revision": "80673198b5b7c9e9241d94de09812053"
  },
  {
    "url": "assets/js/286.3a90a3de.js",
    "revision": "bfad15087659c73fa1b409b206e249c5"
  },
  {
    "url": "assets/js/287.a15827cc.js",
    "revision": "ed81c3564d1ffd2e16c3d79f6c23e2c6"
  },
  {
    "url": "assets/js/288.171d2e52.js",
    "revision": "def48f4a870814421bc212e0df661d75"
  },
  {
    "url": "assets/js/289.5da78ec6.js",
    "revision": "dfdbb432c2ec5d4fb1a4e369a28fc9bc"
  },
  {
    "url": "assets/js/29.273d6c8f.js",
    "revision": "fd3a2276cae6da818941d56fd5a9fa9c"
  },
  {
    "url": "assets/js/290.84deb930.js",
    "revision": "ef54c02620745a3ca308bd25d091311b"
  },
  {
    "url": "assets/js/291.fd58afe5.js",
    "revision": "268c699592cdd3c8418b9976604b4c3a"
  },
  {
    "url": "assets/js/292.4a54767b.js",
    "revision": "335e0b0de9fd95ae3c9c413bf9771ae4"
  },
  {
    "url": "assets/js/293.d0a6f3af.js",
    "revision": "4826608e558858c5ad71ad6f5e14cd16"
  },
  {
    "url": "assets/js/294.6173193e.js",
    "revision": "0c3413f363f6803e069a4253c75c10e3"
  },
  {
    "url": "assets/js/295.d664980d.js",
    "revision": "d1cda67f4fdfe38afea34cc1b3346d48"
  },
  {
    "url": "assets/js/296.55d2d11e.js",
    "revision": "1fc4407d12500aee6cbe0ee8145af10a"
  },
  {
    "url": "assets/js/297.4730add0.js",
    "revision": "e7ffd0da0a4b649437f779b486df76fd"
  },
  {
    "url": "assets/js/298.5222c434.js",
    "revision": "d90066b703a49da88bcf707db74b0a28"
  },
  {
    "url": "assets/js/299.9768fd70.js",
    "revision": "b264959f0e693a8db446f74a3df3f75a"
  },
  {
    "url": "assets/js/30.70520fea.js",
    "revision": "304c361a4509d7b72ca8eda9449e79fa"
  },
  {
    "url": "assets/js/300.035e6acf.js",
    "revision": "598d9b942a8d2dd3b0ad420927d2fcd1"
  },
  {
    "url": "assets/js/301.6c621472.js",
    "revision": "4332930f045bec8f8a3786b6652c3270"
  },
  {
    "url": "assets/js/302.31a8f963.js",
    "revision": "1c593c5b0d17cfc2b321c22259aff4d4"
  },
  {
    "url": "assets/js/303.44a88edd.js",
    "revision": "d96ca82460bddbdc5f3f3b0a26e43f31"
  },
  {
    "url": "assets/js/304.6f7e39f5.js",
    "revision": "b9dc7ca10a3fc9db7d266fa30245195f"
  },
  {
    "url": "assets/js/305.c5c76d3a.js",
    "revision": "cec185143efdf259f8556242f26b95d5"
  },
  {
    "url": "assets/js/306.b84446c9.js",
    "revision": "4378384358a139bb280d4387068e6850"
  },
  {
    "url": "assets/js/307.c456420e.js",
    "revision": "d11baffa4a983faa28e82638456427ba"
  },
  {
    "url": "assets/js/308.d4b2b431.js",
    "revision": "2fc87e01cb5344d4bdfa887448059c17"
  },
  {
    "url": "assets/js/309.9b1c27e3.js",
    "revision": "256d983fe4474e964b57003760782557"
  },
  {
    "url": "assets/js/31.62e78256.js",
    "revision": "8325accf62ad8c7604a26c65c130d598"
  },
  {
    "url": "assets/js/310.4d67b82b.js",
    "revision": "9fa472df0e845866a0847b96ce52b0b1"
  },
  {
    "url": "assets/js/311.49f36297.js",
    "revision": "4538a12fecdc6e865be22637c2296bc2"
  },
  {
    "url": "assets/js/312.1b30e46f.js",
    "revision": "62c708e9430efbbf0384024eee2e8196"
  },
  {
    "url": "assets/js/313.3d7e4446.js",
    "revision": "703284d7a1de8804df31397e24b28e69"
  },
  {
    "url": "assets/js/314.d8ce11b5.js",
    "revision": "3488fea6028f4f235c1a4fbf733ee0bd"
  },
  {
    "url": "assets/js/315.a808627e.js",
    "revision": "2f434e746c396cf67d148ff8b084fb4c"
  },
  {
    "url": "assets/js/316.8369854f.js",
    "revision": "cfdd4d56085d42415ad853febd48b8dd"
  },
  {
    "url": "assets/js/317.e873b95c.js",
    "revision": "17b665e885cc46ae3b5b88ff33800cd7"
  },
  {
    "url": "assets/js/318.c05b8cfa.js",
    "revision": "59b8f2549c092542063987eb94c80d69"
  },
  {
    "url": "assets/js/319.80ec1c9b.js",
    "revision": "1162f7a947289238c1712e61a0c2276d"
  },
  {
    "url": "assets/js/32.749c8e8e.js",
    "revision": "64d82c5e7958f3f38360ae2883fc57d9"
  },
  {
    "url": "assets/js/320.ca23bd12.js",
    "revision": "7839cc3446f288221afe7cd6fe4131ac"
  },
  {
    "url": "assets/js/321.1bdbf1cb.js",
    "revision": "d2dcaab043aad88ca691b0f81591a59d"
  },
  {
    "url": "assets/js/322.f7fdead5.js",
    "revision": "1562728c536a0c45935f03922e1ea94e"
  },
  {
    "url": "assets/js/323.86ba4d5f.js",
    "revision": "24397901dd18ff4ae9e00ab4a4b3b22a"
  },
  {
    "url": "assets/js/324.a2cc749d.js",
    "revision": "3d8dcf052048704249748287b90dc214"
  },
  {
    "url": "assets/js/325.8ba4c341.js",
    "revision": "905595cdfeba8ef1537c763ee5126c06"
  },
  {
    "url": "assets/js/326.053e821b.js",
    "revision": "7656f710aedc6a904e9fc2191bb5ccd8"
  },
  {
    "url": "assets/js/327.c0545ed0.js",
    "revision": "aeee7c9db0b5f32469375ce734e5ed4c"
  },
  {
    "url": "assets/js/328.3db85eb0.js",
    "revision": "88675e26c94f475d224fce16acf3cf51"
  },
  {
    "url": "assets/js/329.0638f0aa.js",
    "revision": "da75817b5fbc243d281d075f1e77474e"
  },
  {
    "url": "assets/js/33.ab2c23d4.js",
    "revision": "5196da9f47d3fc98a8185d12092bd305"
  },
  {
    "url": "assets/js/330.e388a7a6.js",
    "revision": "45b4aa7abb6ae6d5c138629ab7b242cf"
  },
  {
    "url": "assets/js/331.a80d485a.js",
    "revision": "3c53c0e5d89a65d1c578a59f7a46dce1"
  },
  {
    "url": "assets/js/332.b81e576e.js",
    "revision": "46be7f137a82787ab9210b8bffc3e7a5"
  },
  {
    "url": "assets/js/333.f41c6f6c.js",
    "revision": "067edbd2fb897ef008ec3be514fe5680"
  },
  {
    "url": "assets/js/334.7a29853f.js",
    "revision": "b65a64e839315a4599bbd7cef3c4c07c"
  },
  {
    "url": "assets/js/335.00ffbf50.js",
    "revision": "bd5b9fce32d29b697211351634123aed"
  },
  {
    "url": "assets/js/336.cd8388ec.js",
    "revision": "6254ea3c4e02c7aba721705d72a60655"
  },
  {
    "url": "assets/js/337.368f24c9.js",
    "revision": "32d7847fdbf147b72be8935985c9d76b"
  },
  {
    "url": "assets/js/338.f96c702d.js",
    "revision": "a8d5c1d38d37dcb98dfa27faa7b032bc"
  },
  {
    "url": "assets/js/339.202550d6.js",
    "revision": "cfaa14c5356d0fffe2e389520b46f511"
  },
  {
    "url": "assets/js/34.8db325dc.js",
    "revision": "1b10bc14f28659e73ad3a53e8d7fa163"
  },
  {
    "url": "assets/js/340.fdbf6fd7.js",
    "revision": "9c977e033f3d27718b205297f75c575a"
  },
  {
    "url": "assets/js/341.c4e6bc02.js",
    "revision": "7e31ef25a581738d6e9a080f66e89bbc"
  },
  {
    "url": "assets/js/342.ed41dab0.js",
    "revision": "6996fc1192930ce5773a80f77656141f"
  },
  {
    "url": "assets/js/343.e5d7910e.js",
    "revision": "bbe78361f01b51825d00d06292eda9e0"
  },
  {
    "url": "assets/js/344.8c95f21d.js",
    "revision": "161d69ebcd52fcd40986b2361209eff1"
  },
  {
    "url": "assets/js/345.6067318e.js",
    "revision": "47cb78ed99a0d5961d150502a95f3aac"
  },
  {
    "url": "assets/js/346.dd92f9d7.js",
    "revision": "b3178e86250cbcedc59ba4849a333b62"
  },
  {
    "url": "assets/js/347.446be4af.js",
    "revision": "cb9f3e50c83b2fb016832faab23f9bbf"
  },
  {
    "url": "assets/js/348.bf716eeb.js",
    "revision": "04e34361511fdb48efd4b0be3d8081e8"
  },
  {
    "url": "assets/js/349.78f55850.js",
    "revision": "ae0d2dad9f2f00f49608cb5fadd49f85"
  },
  {
    "url": "assets/js/35.51e5713e.js",
    "revision": "728997399249712d387f6fca31d6d3e0"
  },
  {
    "url": "assets/js/350.c66225ca.js",
    "revision": "cabbceec16e1c8f29910ac9254b41b89"
  },
  {
    "url": "assets/js/351.d7bc0509.js",
    "revision": "4931a1e61eba2a563068860542053334"
  },
  {
    "url": "assets/js/352.331c4f58.js",
    "revision": "2db8883d36b90c8993e9c563634ecb71"
  },
  {
    "url": "assets/js/353.550b45db.js",
    "revision": "132d08e87070fbc35ceaf11cffde3983"
  },
  {
    "url": "assets/js/354.392b5faa.js",
    "revision": "4c2e3a2fccefd29e4e164fbcadf335e5"
  },
  {
    "url": "assets/js/355.34b8530c.js",
    "revision": "7c1d174bac050b5c147b311d444eb070"
  },
  {
    "url": "assets/js/356.21aa9fd3.js",
    "revision": "1642171db3f3437a6bcea7c4fcebcb29"
  },
  {
    "url": "assets/js/357.cef11715.js",
    "revision": "cc1e70d0a5b37a7d3d1e05abc6c35b98"
  },
  {
    "url": "assets/js/358.209b2bbc.js",
    "revision": "24b84f8066170a144d7922e76e51b879"
  },
  {
    "url": "assets/js/359.f3a5ea2e.js",
    "revision": "c308ca31a25e243c82607c3fe53923de"
  },
  {
    "url": "assets/js/36.c46b960b.js",
    "revision": "027eb18339ae3cd9872b34f3c0fd59da"
  },
  {
    "url": "assets/js/360.dc41157b.js",
    "revision": "d47821dff84c2f5790ba06e298aace13"
  },
  {
    "url": "assets/js/361.073e8335.js",
    "revision": "f7a74f0058137d76de6828801ce0a9fe"
  },
  {
    "url": "assets/js/362.d7d46256.js",
    "revision": "c6ebe86c91d59a65406a90f4727f9b21"
  },
  {
    "url": "assets/js/363.94deed8f.js",
    "revision": "02eed2b1953920f5bf310303f55ffdfa"
  },
  {
    "url": "assets/js/364.29ffcd3e.js",
    "revision": "142ee4f11d4158a2799d6e9c382b0f1a"
  },
  {
    "url": "assets/js/365.cf7769c1.js",
    "revision": "a9452992e6bd5d674eb78b536dc002cb"
  },
  {
    "url": "assets/js/366.be2e7852.js",
    "revision": "7c62e5740afda6df54c6ae9594bdf637"
  },
  {
    "url": "assets/js/367.948d36eb.js",
    "revision": "dee29baffb59be3d4934d5f65ec6483e"
  },
  {
    "url": "assets/js/368.2e457cda.js",
    "revision": "0419920baf556c0c58af21a936565df8"
  },
  {
    "url": "assets/js/369.450617ac.js",
    "revision": "24fe0e12b30fafda1f1605dbc5f4af59"
  },
  {
    "url": "assets/js/37.79c05aec.js",
    "revision": "ae914448516a28d46081b342e0e25432"
  },
  {
    "url": "assets/js/370.d0099084.js",
    "revision": "d958c48f0233e8810785a8f9f27484cb"
  },
  {
    "url": "assets/js/371.820186c5.js",
    "revision": "5e06d70dafbe41fffc1e5fc1d9b89d46"
  },
  {
    "url": "assets/js/372.fca241e7.js",
    "revision": "7447856e9378769c3d34a566c3c39d1e"
  },
  {
    "url": "assets/js/373.4ae51720.js",
    "revision": "d64020a52d63d912b299fc1fa98f7363"
  },
  {
    "url": "assets/js/374.80724d38.js",
    "revision": "1dbaabd0d31f65517ded9d9c4680a240"
  },
  {
    "url": "assets/js/375.d39aeb82.js",
    "revision": "ee8c64a6838d52af1f2f4cfe2020f401"
  },
  {
    "url": "assets/js/376.f411b4ba.js",
    "revision": "5eca40ff021f961ec3c904e1d0f76e21"
  },
  {
    "url": "assets/js/377.1ccb49cc.js",
    "revision": "dcd0731d442c74c57193d2ee827b0894"
  },
  {
    "url": "assets/js/378.0d481af9.js",
    "revision": "95756c78ece75754bf3d6dddef217be8"
  },
  {
    "url": "assets/js/379.3c9f0adc.js",
    "revision": "64cbf367e4b374d5e7ec3f639adc6d3f"
  },
  {
    "url": "assets/js/38.6f74c8e1.js",
    "revision": "06743063ce8856286a0621cc583bcd67"
  },
  {
    "url": "assets/js/380.050f3a2d.js",
    "revision": "565232d120ef01e2ac4b2ec4412bf5d7"
  },
  {
    "url": "assets/js/381.d9fbf798.js",
    "revision": "6df0e31e24cf8b1d823bb3c8ee13fa28"
  },
  {
    "url": "assets/js/382.19a0dc20.js",
    "revision": "4676c020cc0ecbe05548ff0dbea12459"
  },
  {
    "url": "assets/js/383.af248227.js",
    "revision": "3ed148aea7ad24430a699334482a13cb"
  },
  {
    "url": "assets/js/384.34b07d03.js",
    "revision": "102f7bdfe601dc67c7533505ba117ff2"
  },
  {
    "url": "assets/js/39.337696f4.js",
    "revision": "f32758731d73f8be602d31afc4744daf"
  },
  {
    "url": "assets/js/4.53d9b529.js",
    "revision": "6ec8a3b36d653e650c9a6302f893630a"
  },
  {
    "url": "assets/js/40.a1afe77a.js",
    "revision": "9af135644f0f3838176ee477d43414c1"
  },
  {
    "url": "assets/js/41.39dad49d.js",
    "revision": "375aa47dd81dc8dc809f20673482c027"
  },
  {
    "url": "assets/js/42.3b9ceda7.js",
    "revision": "9d2d10dbd4f7a4942f21d429d38caba8"
  },
  {
    "url": "assets/js/43.0b69acdb.js",
    "revision": "74fd50c460e2acb31395636d7fa9d41f"
  },
  {
    "url": "assets/js/44.e3e6cc84.js",
    "revision": "150336b533d43539fbeb1d1d145b82f5"
  },
  {
    "url": "assets/js/45.3584b9e5.js",
    "revision": "8b29ee3c644d3a6871e91a0161d400f4"
  },
  {
    "url": "assets/js/46.293b2a66.js",
    "revision": "0d37cacc7adcbd2f6484193a345104a8"
  },
  {
    "url": "assets/js/47.0da536c0.js",
    "revision": "504bd902bf58ac2e6add525ed3285e92"
  },
  {
    "url": "assets/js/48.4e6050c1.js",
    "revision": "4c1abf6ff46f0c23b347266ea36cf0e3"
  },
  {
    "url": "assets/js/49.09d519a5.js",
    "revision": "19eb934dae88fb482922e31c908aebc9"
  },
  {
    "url": "assets/js/5.76c31faa.js",
    "revision": "4919869abdad2f3bc92d88bca9fb8081"
  },
  {
    "url": "assets/js/50.f533c2d3.js",
    "revision": "8a8d4c1f81b497ddd811ffc517aed110"
  },
  {
    "url": "assets/js/51.a320708b.js",
    "revision": "6cb9f33cfe8ae262da858df723844946"
  },
  {
    "url": "assets/js/52.f49d6cf9.js",
    "revision": "ddd46d43f62b3aeb93ddf9b7a27ce6fd"
  },
  {
    "url": "assets/js/53.948593f8.js",
    "revision": "9253152e3438f0effb82a0d4a6c2d97b"
  },
  {
    "url": "assets/js/54.8282f89f.js",
    "revision": "7725f0cc2d5873388e677af153087e0c"
  },
  {
    "url": "assets/js/55.4c667160.js",
    "revision": "283a141e1412f18e0e3978b138f95b66"
  },
  {
    "url": "assets/js/56.edcf89d2.js",
    "revision": "86b16d0855750271aa2833205a341b24"
  },
  {
    "url": "assets/js/57.c72d599d.js",
    "revision": "45ce3281252b515f74232d2f851e8fab"
  },
  {
    "url": "assets/js/58.55f0fa4a.js",
    "revision": "c2ed158e70e0ab57777c98138f931a8b"
  },
  {
    "url": "assets/js/59.33ac39a6.js",
    "revision": "2a52e69579c5d116e5337af5aeab4f95"
  },
  {
    "url": "assets/js/6.784c72d4.js",
    "revision": "361712387e7f58cd23deda9e6c244096"
  },
  {
    "url": "assets/js/60.72bab633.js",
    "revision": "7054a2e3d1bea6651eed50e6e9bfa8e0"
  },
  {
    "url": "assets/js/61.b14e84ec.js",
    "revision": "ee348c88295b8d358a8a65903aa8c525"
  },
  {
    "url": "assets/js/62.1bceed31.js",
    "revision": "fec839ef583993cb36a94ebe620ea7ef"
  },
  {
    "url": "assets/js/63.f2bfd187.js",
    "revision": "f0105e030c5ad22c3dfb11282278ef80"
  },
  {
    "url": "assets/js/64.22637016.js",
    "revision": "0a701980fb095967b0c21b217afb7274"
  },
  {
    "url": "assets/js/65.d436d237.js",
    "revision": "ed3ea99513e79c1023cd7e5ee3a2d570"
  },
  {
    "url": "assets/js/66.197c3c20.js",
    "revision": "5843e33ced5dd66f4b50a88d811cd460"
  },
  {
    "url": "assets/js/67.dac297fe.js",
    "revision": "25f872a3375b88b6a02543bf55cf3bac"
  },
  {
    "url": "assets/js/68.91c2ffbf.js",
    "revision": "8b8e314489862ddae7168c6f2128c42a"
  },
  {
    "url": "assets/js/69.c23c9315.js",
    "revision": "242c9e0825e73f8a39746782d643f0eb"
  },
  {
    "url": "assets/js/7.5c7b112d.js",
    "revision": "6e943542a10105c8e51507a496b29412"
  },
  {
    "url": "assets/js/70.df5ecfc6.js",
    "revision": "322c95535c42d7c07e3ef1b5da9a61a6"
  },
  {
    "url": "assets/js/71.404e3beb.js",
    "revision": "2da0931e8d5dfa53555deb9214e2b648"
  },
  {
    "url": "assets/js/72.dd73e6b6.js",
    "revision": "d45bdf75c96c15a1d15feb58dac6af24"
  },
  {
    "url": "assets/js/73.9d9dd4e6.js",
    "revision": "a9a0581918c3e2a56dc794f3e8df5beb"
  },
  {
    "url": "assets/js/74.110a8bdb.js",
    "revision": "03b9c7468a47ce8e155e46b60e165c57"
  },
  {
    "url": "assets/js/75.75e38a04.js",
    "revision": "8760256eb7fd48eb61e66e9d7a4c558b"
  },
  {
    "url": "assets/js/76.47d7f28d.js",
    "revision": "b79a9b5f35af4cfeba779068ea6579e6"
  },
  {
    "url": "assets/js/77.a74ce754.js",
    "revision": "716ec4e2859a463e742526864c5f120e"
  },
  {
    "url": "assets/js/78.0d912f1b.js",
    "revision": "e7f6d9203ac551928faa95b65d9b9852"
  },
  {
    "url": "assets/js/79.8b42a0cc.js",
    "revision": "68fd0f9991b427a0ce1a56027c40ec5b"
  },
  {
    "url": "assets/js/8.55f5b620.js",
    "revision": "23cc82fa62e067077515c2994e6a300b"
  },
  {
    "url": "assets/js/80.e742757d.js",
    "revision": "1cd7cb9b5d9c40fcbe446184ef5d0ba3"
  },
  {
    "url": "assets/js/81.13955843.js",
    "revision": "e61b914a57e3a78ad660f7f3227b7857"
  },
  {
    "url": "assets/js/82.ecb6e800.js",
    "revision": "537cb8f21212f5e6d0ab1a3d20bbd26e"
  },
  {
    "url": "assets/js/83.fa58f368.js",
    "revision": "bd986438318d283f985bfb0861e9197d"
  },
  {
    "url": "assets/js/84.e8d28a49.js",
    "revision": "ac5d0953bc35d9e6df10361d05722289"
  },
  {
    "url": "assets/js/85.a41e9291.js",
    "revision": "70eab48b4b60c261158b30d344b4a5fc"
  },
  {
    "url": "assets/js/86.5adde034.js",
    "revision": "a86a5235799f8d739f5ccd21b6ae10d8"
  },
  {
    "url": "assets/js/87.378f099e.js",
    "revision": "deacc6d09b9e40d15c05247773a8499f"
  },
  {
    "url": "assets/js/88.adb3710f.js",
    "revision": "2f6b0c79ffa1b5203589f31b0ef7ac66"
  },
  {
    "url": "assets/js/89.d1ab3fd0.js",
    "revision": "e5ebca2eefc56d21407a1748fc3c27e4"
  },
  {
    "url": "assets/js/9.29e8400c.js",
    "revision": "54266be4554905f4afe247a2ff168c2a"
  },
  {
    "url": "assets/js/90.f3077e8c.js",
    "revision": "5f9d30be2fef16c71eb41d45c3001232"
  },
  {
    "url": "assets/js/91.2bc77e1a.js",
    "revision": "2baf13f2e25b9c904a349aff32486fb9"
  },
  {
    "url": "assets/js/92.19694182.js",
    "revision": "eb1ca36f1e5426773362072df6dce581"
  },
  {
    "url": "assets/js/93.478bc79d.js",
    "revision": "821c56c7920fe0977ab4054a4ecd79c8"
  },
  {
    "url": "assets/js/94.5fed4993.js",
    "revision": "46a31fc83a6f5b34b9ee6a06b7c392dd"
  },
  {
    "url": "assets/js/95.9fb67122.js",
    "revision": "203fb370b83ec4d91021ceed36569e77"
  },
  {
    "url": "assets/js/96.3f99e42f.js",
    "revision": "34f4081d9b79c01c8bd1e437e1b44707"
  },
  {
    "url": "assets/js/97.0a6079bf.js",
    "revision": "a37c94f69f452c34b1f9ab0d239e645b"
  },
  {
    "url": "assets/js/98.0b667978.js",
    "revision": "b7bb69b4c200e40f29f0f54995753e43"
  },
  {
    "url": "assets/js/99.96a799b8.js",
    "revision": "8026202eadab385ac28d5e5d410c7c14"
  },
  {
    "url": "customize/bioelectrical-input/index.html",
    "revision": "e870095500fa43903b4b0ae84f3528ad"
  },
  {
    "url": "customize/environmental-control/index.html",
    "revision": "52f9db8f16e76b2c91b2a34333d93496"
  },
  {
    "url": "customize/gaming-toys-music/index.html",
    "revision": "8fd416755ced75cd5238e60d3ca59e02"
  },
  {
    "url": "customize/grid/Grid-Creation.html",
    "revision": "5b4835bbfec84fd178f0838dc5c4cc6a"
  },
  {
    "url": "customize/grid/Grid-Customization.html",
    "revision": "3d35242bf3627c407daec6b02f2109f2"
  },
  {
    "url": "customize/grid/index.html",
    "revision": "2d86e47776b4450795f27a173a568b71"
  },
  {
    "url": "customize/index.html",
    "revision": "6aa0854132074529fcd0e2d26ba20e75"
  },
  {
    "url": "customize/model/index.html",
    "revision": "ec0d865d46da72f0e1ada8ac45adcda0"
  },
  {
    "url": "customize/model/Model-Creation.html",
    "revision": "ae4d04b2d992b62ddaaef9457d1990b3"
  },
  {
    "url": "customize/model/Model-Customization.html",
    "revision": "02b440e0fcee02de42f099f024c57afd"
  },
  {
    "url": "customize/other/index.html",
    "revision": "ff81f5cf3d531c7318f9202705274460"
  },
  {
    "url": "develop/APE.html",
    "revision": "df4112044ebc7a70500f0e1de715cfe9"
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
    "revision": "a4709520f02caf2b4759a8edfe1ddbaf"
  },
  {
    "url": "develop/ARE-HW-Interfacing-CIM.html",
    "revision": "2b85185848f5dffbc483a08463040854"
  },
  {
    "url": "develop/ARE-Keyboard-Mouse-Services.html",
    "revision": "32c3461d360b4230d074260171cd5b1e"
  },
  {
    "url": "develop/are-remote-apis/index.html",
    "revision": "9ffeda8e2f6eb030fa67a0594c7dae02"
  },
  {
    "url": "develop/are-remote-apis/REST-API.html",
    "revision": "cdfbee1bf980507f96b28900237c0eed"
  },
  {
    "url": "develop/are-remote-apis/REST-demos.html",
    "revision": "89798c5365c5d4e5db324c8e2ff16d6d"
  },
  {
    "url": "develop/are-remote-apis/Webserver.html",
    "revision": "c8f34881e91765f4b102b8b9cd8abd07"
  },
  {
    "url": "develop/are-remote-apis/Websocket.html",
    "revision": "b49cf8b9d117406324aa02bbe2b6a813"
  },
  {
    "url": "develop/ARE-Webserver.html",
    "revision": "f34fc3febda9e01d93797073479415c7"
  },
  {
    "url": "develop/ARE.html",
    "revision": "10254705e92e8cae32c5870712be83fb"
  },
  {
    "url": "develop/ARE/ARE-Development-Manual.html",
    "revision": "427549824cf5d960b6b43491c90d7136"
  },
  {
    "url": "develop/ARE/index.html",
    "revision": "6fc23c996ff3d6c4db45f31bcb9fb110"
  },
  {
    "url": "develop/asterics-grid/01_structure.html",
    "revision": "720757fed7954d27bdbcc051413afec8"
  },
  {
    "url": "develop/asterics-grid/02_tools.html",
    "revision": "d0c0a8f8bf903a247fc918208d2c1c00"
  },
  {
    "url": "develop/asterics-grid/03_grid.html",
    "revision": "ec0a21f1f2e5a70b767baf90aaafd964"
  },
  {
    "url": "develop/asterics-grid/04_vuejs.html",
    "revision": "6a550af8dd7c08b0219f335ff935b23d"
  },
  {
    "url": "develop/asterics-grid/05_datamodel.html",
    "revision": "26bb340fcae31444470522b020bda7d2"
  },
  {
    "url": "develop/asterics-grid/06_data_storage.html",
    "revision": "79a389fd14fb80aa7f9a3af41da7aeba"
  },
  {
    "url": "develop/asterics-grid/07_i18n.html",
    "revision": "bb02e5ae6c0a4692bdc50e746fbd3076"
  },
  {
    "url": "develop/asterics-grid/collaboration.html",
    "revision": "d028cbaa40050b8524785b78796faa17"
  },
  {
    "url": "develop/asterics-grid/index.html",
    "revision": "66f3a1ffd1a2878d7127f0e73908cb2c"
  },
  {
    "url": "develop/asterics-wiki/api/AsTeRICS Websocket.html",
    "revision": "75bf36de14a06f3c0880688c85fa3698"
  },
  {
    "url": "develop/asterics-wiki/api/Resource Handling.html",
    "revision": "d70997aadc1ff138880d69c70bdfe492"
  },
  {
    "url": "develop/asterics-wiki/api/REST-API.html",
    "revision": "df254b4e74630b146e372f580831f554"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Solutions.html",
    "revision": "8e45fea27ad707af0c55deb6cbb50a52"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/AsTeRICS Webserver Document Root.html",
    "revision": "b1bf0103b0c8b5eaa00ed12504381e42"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/JavaCV.html",
    "revision": "803861f25633b024b17e5a4a1e6bb6ec"
  },
  {
    "url": "develop/asterics-wiki/coding_instructions/Unit Tests.html",
    "revision": "7a5c862a3755eeddc44f5fd37237b70b"
  },
  {
    "url": "develop/asterics-wiki/components/AsTeRICS Plugins.html",
    "revision": "68a45393c455fc81a1912adfdd2d8a31"
  },
  {
    "url": "develop/AT_solution_development.html",
    "revision": "45a48a682849a9869fca63c6899d6244"
  },
  {
    "url": "develop/AT-solution-demos.html",
    "revision": "73d8ed9338af820795971a06b87871de"
  },
  {
    "url": "develop/at-solution/APE.html",
    "revision": "61d70e0fa8f603dde8d45a1da99d2f56"
  },
  {
    "url": "develop/at-solution/AT-solution-tutorial.html",
    "revision": "d71c2e4723d1a9672c6d0c25428e4b30"
  },
  {
    "url": "develop/at-solution/index.html",
    "revision": "44d3ef59212bded6def6b54bd612779a"
  },
  {
    "url": "develop/Coding-Guidelines.html",
    "revision": "772abe4141a1d78ec09529691acee40b"
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
    "revision": "0d045d94392789f5b377a35ecee1c1f3"
  },
  {
    "url": "develop/get-started/Coding-Guidelines.html",
    "revision": "274388cbaecc10039eb00d0243ca9ecc"
  },
  {
    "url": "develop/get-started/Development-Environment.html",
    "revision": "771a30e8ab020522d50a72bd631522f7"
  },
  {
    "url": "develop/get-started/index.html",
    "revision": "fe781ed91ab942380a8c53c6116a6e63"
  },
  {
    "url": "develop/index.html",
    "revision": "27c592a8b21d05abbefd225faa6bbce0"
  },
  {
    "url": "develop/Plugin-Advanced.html",
    "revision": "c61081d810a3a2a3948ea7ddfbf5afb6"
  },
  {
    "url": "develop/Plugin-Introduction.html",
    "revision": "280d44933f99d77742fe7212d0f57478"
  },
  {
    "url": "develop/Plugin-Tutorial.html",
    "revision": "5a904b0881b9bcc63cf67f0666a10286"
  },
  {
    "url": "develop/plugin/Computer-Vision.html",
    "revision": "e95dd00c7410c38de27d13310570c2b5"
  },
  {
    "url": "develop/plugin/index.html",
    "revision": "3b3472e6bbf25a39d5254eee1561b73e"
  },
  {
    "url": "develop/plugin/Plugin-Advanced.html",
    "revision": "1e0b78fd0816340a232ef4a1c3156a00"
  },
  {
    "url": "develop/plugin/Plugin-Averager.html",
    "revision": "190500fd591e3b1268dcab812e972206"
  },
  {
    "url": "develop/plugin/Resource-Handling.html",
    "revision": "0f0e6cbd7fb632b4d550f12dbe6ee62b"
  },
  {
    "url": "develop/REST-API-java-client.html",
    "revision": "70d702f4d252895d1da54894953cfbb4"
  },
  {
    "url": "develop/REST-API-js-areCommunicator.html",
    "revision": "f3c92f0b0dc8a83b1d1ab381d6e7fbc8"
  },
  {
    "url": "develop/REST-API-js-wrapper-ext.html",
    "revision": "de4506062de64396d03c84c98f9f9239"
  },
  {
    "url": "develop/REST-API.html",
    "revision": "4ec4d91b6e53f5a0a77721a4d1247673"
  },
  {
    "url": "develop/REST-demos.html",
    "revision": "bce2a26327ccf0aa75356f35e515d34e"
  },
  {
    "url": "develop/Unit-Testing.html",
    "revision": "eed896e910807cd9287a710b62e8e1ee"
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
    "revision": "b6aeab4c5122325a9bcaadf08827427a"
  },
  {
    "url": "get-involved/Contact.html",
    "revision": "526a2e8bac5b169578d9f154fbd7610a"
  },
  {
    "url": "get-involved/Contribute.html",
    "revision": "9b9581c868b9cb47684b7a8f273a88ce"
  },
  {
    "url": "get-involved/index.html",
    "revision": "8fabe4f383519b2ef4b7aae63b81b47c"
  },
  {
    "url": "get-involved/Legal-Notice.html",
    "revision": "b6e5b099ea688607deebc8530d83934a"
  },
  {
    "url": "get-started/Demos.html",
    "revision": "b764ec21d6913ffcc7843b280c82fcac"
  },
  {
    "url": "get-started/index.html",
    "revision": "51e6db85384d06766028312ed75eecdf"
  },
  {
    "url": "get-started/Installation.html",
    "revision": "667e2c879f178574c23a6880464240ce"
  },
  {
    "url": "get-started/Overview.html",
    "revision": "98056abf748617553bb34cdc05812868"
  },
  {
    "url": "guide/docs.html",
    "revision": "dee0d015851e2609aa49ae4b669b3c60"
  },
  {
    "url": "guide/editor.html",
    "revision": "a59f809c40ca9c457255db89ef05fb5c"
  },
  {
    "url": "guide/markdown.html",
    "revision": "9cf4bd05f8583738167f392837984acd"
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
    "revision": "cf9cdd6e35426db8c19b6169b321b660"
  },
  {
    "url": "index.php.html",
    "revision": "c0bc6e8bf2b1b800e44277531d2720d4"
  },
  {
    "url": "manuals/ACS/Actuators.html",
    "revision": "aae35327c52b24ea1344f887741b5b46"
  },
  {
    "url": "manuals/ACS/Channels.html",
    "revision": "6daefb0469ce70cd17b987687fffb644"
  },
  {
    "url": "manuals/ACS/Colours_settings.html",
    "revision": "42013527db31dda2bb72f76dd1a61d76"
  },
  {
    "url": "manuals/ACS/Component_Collection_Manager.html",
    "revision": "e5a225d5255cdec7a363d017b4cf4a83"
  },
  {
    "url": "manuals/ACS/Component_Context_Menu.html",
    "revision": "073dec87aafa96a5d1096671feb65dc4"
  },
  {
    "url": "manuals/ACS/Connected.html",
    "revision": "1fe46d6ee16c2a1a5eea75fc3ceed5d3"
  },
  {
    "url": "manuals/ACS/Control_the_ARE.html",
    "revision": "bf7b2955633789c7108beaeed1d82d37"
  },
  {
    "url": "manuals/ACS/Create_and_Edit_a_Model.html",
    "revision": "79a11758fecd7f1b20155f982fd89648"
  },
  {
    "url": "manuals/ACS/Dialogs_settings.html",
    "revision": "b29914c0cdeed9d823972633b21b5a96"
  },
  {
    "url": "manuals/ACS/Disconnected.html",
    "revision": "85e7aa9ed5e341d6d9017f2c8a67bb79"
  },
  {
    "url": "manuals/ACS/Events.html",
    "revision": "5cdc024f065df0037caf9c80ea899141"
  },
  {
    "url": "manuals/ACS/External_Tools_Options.html",
    "revision": "3634ef5c68f23a2ccbb4b13c002db91e"
  },
  {
    "url": "manuals/ACS/External_Tools.html",
    "revision": "8c761b8fabc9d213bf38ef147a6f44f2"
  },
  {
    "url": "manuals/ACS/General_settings.html",
    "revision": "bbc6a04cb728a0445ac975d2b4e3e605"
  },
  {
    "url": "manuals/ACS/GUI_Designer.html",
    "revision": "95868d5196d7fdcf617a8c15ecce373a"
  },
  {
    "url": "manuals/ACS/index.html",
    "revision": "6c3012318ed9af6ae5ee660dde277ea9"
  },
  {
    "url": "manuals/ACS/Keyboard_control.html",
    "revision": "1fda1213868ef5706d6685f68381a740"
  },
  {
    "url": "manuals/ACS/Load_and_Save_Models.html",
    "revision": "12ce0c4071c1fc4d0c372d08d6e8cd61"
  },
  {
    "url": "manuals/ACS/Miscellaneous.html",
    "revision": "a45ec1ff7bafb3fc9b5d25e81d40998c"
  },
  {
    "url": "manuals/ACS/Modes.html",
    "revision": "8387f4e41ee390c2eb66a0feb0fe7b5d"
  },
  {
    "url": "manuals/ACS/Options.html",
    "revision": "c10e5ebfa5aa23bc9cc36387d6ce89de"
  },
  {
    "url": "manuals/ACS/Pause.html",
    "revision": "bbae909769950afd0c52695c4d9f97dd"
  },
  {
    "url": "manuals/ACS/Print.html",
    "revision": "7658b8b8077f7617885596b1c67d2952"
  },
  {
    "url": "manuals/ACS/Processors.html",
    "revision": "16cdb0731f6b0400b1954fbeb6d3ffdb"
  },
  {
    "url": "manuals/ACS/Running.html",
    "revision": "07a15b741cf6b0093a5e36be9097fe50"
  },
  {
    "url": "manuals/ACS/Sensors.html",
    "revision": "5f08587df45278c8f19b4d467fd4f30a"
  },
  {
    "url": "manuals/ACS/Setting_the_Properties.html",
    "revision": "bd8814e1b1fd421eabef3a387cb519d9"
  },
  {
    "url": "manuals/ACS/Status_Reporting_and_Error_Logging.html",
    "revision": "e0636e3152ddf14a6e6f2207d50f1b12"
  },
  {
    "url": "manuals/ACS/Synchronized.html",
    "revision": "4259831f8a5a99fbe5239ea7f3745b06"
  },
  {
    "url": "manuals/ACS/The_Edit_Tab.html",
    "revision": "859f5ba6ca33893ec7e9a98cb605abf1"
  },
  {
    "url": "manuals/ACS/Tooltips.html",
    "revision": "c3207fccca627548893e838e51bfc6f0"
  },
  {
    "url": "manuals/ARE/index.html",
    "revision": "023352e1c75891c0c9a8364e2e08a75f"
  },
  {
    "url": "manuals/asterics-grid/01_terms.html",
    "revision": "b53b505d299c381289955cc77ab6b7c9"
  },
  {
    "url": "manuals/asterics-grid/02_navigation.html",
    "revision": "0cd9e0188e1b12f151a0613aeeb23460"
  },
  {
    "url": "manuals/asterics-grid/03_appearance_layout.html",
    "revision": "90ff3b670a5d4a28d70f771b358b2833"
  },
  {
    "url": "manuals/asterics-grid/04_input_options.html",
    "revision": "628d9aca846621af32300203dbb4234f"
  },
  {
    "url": "manuals/asterics-grid/05_actions.html",
    "revision": "d3ac2cd9a19e5f0be25e10d93ff3a15a"
  },
  {
    "url": "manuals/asterics-grid/06_users.html",
    "revision": "5352d1bc0731e4d93c9b2d626fc66bf2"
  },
  {
    "url": "manuals/asterics-grid/07_dictionaries.html",
    "revision": "6e0eb9b6ba8c451f3d0d4dbc98fdd030"
  },
  {
    "url": "manuals/asterics-grid/08_keyboard_shortcuts.html",
    "revision": "5d54bcdab5ffd46e7e781cf8c216815e"
  },
  {
    "url": "manuals/asterics-grid/09_translation.html",
    "revision": "235cfed79ea9ab6d6cc879dce61d8dc3"
  },
  {
    "url": "manuals/asterics-grid/10_faq.html",
    "revision": "cdef5f7f13e200476ab1582445853252"
  },
  {
    "url": "manuals/asterics-grid/index.html",
    "revision": "965ac6ed89ad3bd680f0c40920ee3eec"
  },
  {
    "url": "manuals/fabi/index.html",
    "revision": "1e666867beb9d79949e9ac459fbb2e57"
  },
  {
    "url": "manuals/flipmouse/index.html",
    "revision": "431ec292b014c126342f31bab79117cc"
  },
  {
    "url": "manuals/index.html",
    "revision": "b64b485d6f8e77d21949f2ab5f88bed7"
  },
  {
    "url": "manuals/WebACS/AREStatus.html",
    "revision": "ef8124bf4e56cc87a0f18961f2809969"
  },
  {
    "url": "manuals/WebACS/Channels.html",
    "revision": "5e014259ff7309e4a22b6dc7ecd43585"
  },
  {
    "url": "manuals/WebACS/Control_the_ARE.html",
    "revision": "f84e7fa969582aaca445f5d2ba8bfd25"
  },
  {
    "url": "manuals/WebACS/Create_and_Edit_a_Model.html",
    "revision": "766ea15f1654178be592119acda76b94"
  },
  {
    "url": "manuals/WebACS/Events.html",
    "revision": "8085712f41631bb96bf8c34df1262a66"
  },
  {
    "url": "manuals/WebACS/GUI_Designer.html",
    "revision": "f849cecd32cebce770c3f71b257db539"
  },
  {
    "url": "manuals/WebACS/index.html",
    "revision": "04611ca3deb88dfb7c3e427c9b3d65f7"
  },
  {
    "url": "manuals/WebACS/Keyboard_control.html",
    "revision": "6a929ad240408cda68c37e4beb5ed2cd"
  },
  {
    "url": "manuals/WebACS/List_View.html",
    "revision": "f3c129e688c2b5728835733fbe149a82"
  },
  {
    "url": "manuals/WebACS/Miscellaneous.html",
    "revision": "f6953eb89e65d36e21b9a918da0d7969"
  },
  {
    "url": "manuals/WebACS/Open_and_Save_Models.html",
    "revision": "c1f4fe9b8288f519155ba1b52502955f"
  },
  {
    "url": "manuals/WebACS/Setting_the_Properties.html",
    "revision": "dce7c419e7808d318050a5f39a944d9a"
  },
  {
    "url": "manuals/WebACS/The_Edit_Tab.html",
    "revision": "4c21071c7a157a792b430ebca4f8bcad"
  },
  {
    "url": "plugins/actuators/AnalogOut.html",
    "revision": "4f5014ed2f2f5cb4a85efad0e8c01c06"
  },
  {
    "url": "plugins/actuators/Android_connection.html",
    "revision": "bf1b2ed76048eacc002aca4046b14fec"
  },
  {
    "url": "plugins/actuators/android.svg",
    "revision": "e7790cd019054daf4e484e41e8991b13"
  },
  {
    "url": "plugins/actuators/AndroidPhoneControl.html",
    "revision": "25828472a3dd20ed01f5ab070a73a842"
  },
  {
    "url": "plugins/actuators/AngularCursorControl.html",
    "revision": "1f1024f498a4898cf29ac71896131995"
  },
  {
    "url": "plugins/actuators/ApplicationLauncher.html",
    "revision": "f8125abfa7698dfa946e3e9e02ed390a"
  },
  {
    "url": "plugins/actuators/AREWindow.html",
    "revision": "096fbc3bc69c2ac8759d004e2a2d9004"
  },
  {
    "url": "plugins/actuators/BarDisplay.html",
    "revision": "13b2a9b36d0e8347ef36caa2a0b70982"
  },
  {
    "url": "plugins/actuators/CrosshairCursorControl.html",
    "revision": "93ce5e22b7fadad17d70b2bccaf3c61d"
  },
  {
    "url": "plugins/actuators/DialogBox.html",
    "revision": "48d21b24cd3c8c31718cd5a02e367eb2"
  },
  {
    "url": "plugins/actuators/DigitalOut.html",
    "revision": "b7a80c309caca21f0e8d781e65fbbe7e"
  },
  {
    "url": "plugins/actuators/DotMeter.html",
    "revision": "dc926d683a6fbade01b01cf7b316d0cb"
  },
  {
    "url": "plugins/actuators/EasyHomeControl.html",
    "revision": "2e8749b8c5f4075e3a1c88e97cf81e17"
  },
  {
    "url": "plugins/actuators/EmulateFaultyPlugin.html",
    "revision": "418324e62534d82990bbd0c3c17d5ed5"
  },
  {
    "url": "plugins/actuators/EnobioDisplay.html",
    "revision": "1c1000bae20195e69fdcf6f915e5a512"
  },
  {
    "url": "plugins/actuators/Enocean.html",
    "revision": "916d710c3c7cf5436b05e70351e7ca80"
  },
  {
    "url": "plugins/actuators/enocean.svg",
    "revision": "9cd40371d9d4e70f641266cdf21752f1"
  },
  {
    "url": "plugins/actuators/EventVisualizer.html",
    "revision": "30547ea2b42c09bf2c54b0e1ea7060e8"
  },
  {
    "url": "plugins/actuators/FileWriter.html",
    "revision": "5307f499b251c13d58376634152b5111"
  },
  {
    "url": "plugins/actuators/FlickeringLightStimulator.html",
    "revision": "08580003850a83c42c20a424e328d7ac"
  },
  {
    "url": "plugins/actuators/FS20Sender.html",
    "revision": "79d21ee22f2908016cfda75ca591d278"
  },
  {
    "url": "plugins/actuators/gmail.svg",
    "revision": "1e7b4033d0f972a16d22609a8f6d9a38"
  },
  {
    "url": "plugins/actuators/GMailShortcuts.html",
    "revision": "c8b0f458216752578362161d66320340"
  },
  {
    "url": "plugins/actuators/GSMModem.html",
    "revision": "b1307c6e0dddc4ec5c584815712a017f"
  },
  {
    "url": "plugins/actuators/ImageBox.html",
    "revision": "0dd08257329598070ff5fef9da06028f"
  },
  {
    "url": "plugins/actuators/infrared.svg",
    "revision": "f5236162c5bb8c950ca90cd3f1b27cca"
  },
  {
    "url": "plugins/actuators/IRTrans.html",
    "revision": "1e58784cd1ff82b49e0ad83c44c8facb"
  },
  {
    "url": "plugins/actuators/Keyboard.html",
    "revision": "7e95b75f8dcb474834ceff1d0468f941"
  },
  {
    "url": "plugins/actuators/Knx.html",
    "revision": "94434b72677827066388013391f1a43a"
  },
  {
    "url": "plugins/actuators/knx.svg",
    "revision": "98a1cf7f3945ab6b8fd88a559429336b"
  },
  {
    "url": "plugins/actuators/LegacyDigitalOut.html",
    "revision": "4b69d75f9c05fe094b4b1151432294a2"
  },
  {
    "url": "plugins/actuators/LineWriter.html",
    "revision": "b92eb52b9b449f4d9c4cf97c1fd0379b"
  },
  {
    "url": "plugins/actuators/MediaPlayer.html",
    "revision": "885d844a2200644fa44cdc306e5e034a"
  },
  {
    "url": "plugins/actuators/MidiPlayer.html",
    "revision": "273f440d02dc749f21796377787ca24b"
  },
  {
    "url": "plugins/actuators/ModelSwitcher.html",
    "revision": "2c20d814e8d12877d88ee2c044a95e32"
  },
  {
    "url": "plugins/actuators/Mouse.html",
    "revision": "1e7d0a0a6028a87ac23abca653568bde"
  },
  {
    "url": "plugins/actuators/MousecursorIcon.html",
    "revision": "f176cf0a5c976436e4efd35f6fab000c"
  },
  {
    "url": "plugins/actuators/NetConnection.html",
    "revision": "983a9fe4bb4241a6bc9370d8799618af"
  },
  {
    "url": "plugins/actuators/osci.svg",
    "revision": "99e5b6196909314c773c113ef5556d93"
  },
  {
    "url": "plugins/actuators/Oscilloscope.html",
    "revision": "a853fbf0bddccc11ff1ec6c645e794bc"
  },
  {
    "url": "plugins/actuators/OscOutClient.html",
    "revision": "1463617a6abc1fb4e757f8a2c8beb083"
  },
  {
    "url": "plugins/actuators/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/actuators/PhilipsHue.html",
    "revision": "e1f103e11a428af4d089cb477bfeb214"
  },
  {
    "url": "plugins/actuators/PhoneControl.html",
    "revision": "9e42b5774a3ce2ff83543e4519e6e0c9"
  },
  {
    "url": "plugins/actuators/PicoTTS.html",
    "revision": "d4b9c174b50092c45dc2fd1d84445d78"
  },
  {
    "url": "plugins/actuators/PlatformDigitalOut.html",
    "revision": "4e18ca7ba37c11903415741603a6261c"
  },
  {
    "url": "plugins/actuators/PlatformLCD.html",
    "revision": "6f695492b794cefa5063908484ef354e"
  },
  {
    "url": "plugins/actuators/pong.svg",
    "revision": "3c4f85d7ace78bd88351cd14346546ca"
  },
  {
    "url": "plugins/actuators/PongGame.html",
    "revision": "7d6e05c2f635d97472aff7e34567923b"
  },
  {
    "url": "plugins/actuators/RemoteJoystick.html",
    "revision": "16ebed60f6cc8539fd5d085f849a3113"
  },
  {
    "url": "plugins/actuators/RemoteKeyboard.html",
    "revision": "75608a4a6651b965e556ea6ac2ab4d8e"
  },
  {
    "url": "plugins/actuators/RemoteMouse.html",
    "revision": "12c4db0f8b055bd496487f5b6f73a75c"
  },
  {
    "url": "plugins/actuators/RemoteTablet.html",
    "revision": "70120859daa7a5e5b4580605d66aa933"
  },
  {
    "url": "plugins/actuators/RemoteWindow.html",
    "revision": "a6f3b89cd79948faf055d52eff85c39e"
  },
  {
    "url": "plugins/actuators/SerialSender.html",
    "revision": "355406ffa2ce34d902b8d05c8a20db5b"
  },
  {
    "url": "plugins/actuators/SkyWatcherMount.html",
    "revision": "1ab12eaf593c20a43f1cabf2b9cb7be5"
  },
  {
    "url": "plugins/actuators/SSVEPFileWriter.html",
    "revision": "6cac57777211382f517836b53cc7c27b"
  },
  {
    "url": "plugins/actuators/SSVEPStimulator.html",
    "revision": "4967156df95f44c3771c37e4ac2a8b66"
  },
  {
    "url": "plugins/actuators/SyntheticVoice.html",
    "revision": "c744be64a566bf734b7076203f531669"
  },
  {
    "url": "plugins/actuators/TeensyRCPrototype.html",
    "revision": "ff2af4c76d7ca16af525fb2506b770fb"
  },
  {
    "url": "plugins/actuators/TextArea.html",
    "revision": "3ee474d0a4f4e370f9ab0fc543dccd90"
  },
  {
    "url": "plugins/actuators/TextDisplay.html",
    "revision": "17bff3e3c735d6c2a23dcd6050b8b136"
  },
  {
    "url": "plugins/actuators/ToneGenerator.html",
    "revision": "56511d9ec6a7e1bfdd6a767b2b926573"
  },
  {
    "url": "plugins/actuators/Tooltip.html",
    "revision": "230694e7ed8f968615f6ac511424e179"
  },
  {
    "url": "plugins/actuators/WavefilePlayer.html",
    "revision": "1442bf1da16bd1e6992dc84fe4f96d9b"
  },
  {
    "url": "plugins/actuators/WriteCSV.html",
    "revision": "41688663fd6793eab68c495de239d459"
  },
  {
    "url": "plugins/actuators/WriteEDF.html",
    "revision": "ed0fa0e10f82c9cb7165bb25df5ace3b"
  },
  {
    "url": "plugins/index.html",
    "revision": "08bcd47285dc1aa626796b58bdcd0b9c"
  },
  {
    "url": "plugins/processors/AcousticScanning.html",
    "revision": "aa90229e674042fb80ef689356c193a5"
  },
  {
    "url": "plugins/processors/AdjustmentCurve.html",
    "revision": "2368cf91328015e9e38302fe2cacf183"
  },
  {
    "url": "plugins/processors/AmazonEchoControl.html",
    "revision": "1c86adb46c7404c9819af4c519716ffa"
  },
  {
    "url": "plugins/processors/Amplifier.html",
    "revision": "82243d27cb3e93fce4933a8fee226af1"
  },
  {
    "url": "plugins/processors/arduino-uno.svg",
    "revision": "c2a5829c840320e79e15074f54a18b3b"
  },
  {
    "url": "plugins/processors/Arduino.html",
    "revision": "16efd48b0681eb76009f1c29fc6ed795"
  },
  {
    "url": "plugins/processors/arduino.svg",
    "revision": "1df7842ac6355efe0d6d5e4dcdcc5c3e"
  },
  {
    "url": "plugins/processors/AudioSelector.html",
    "revision": "ed695ba13d2a7d9cb88da96c71f4f469"
  },
  {
    "url": "plugins/processors/Averager.html",
    "revision": "9b2f47a67a45a21c6cdfd0715717126b"
  },
  {
    "url": "plugins/processors/BasicTRalgorithms.html",
    "revision": "602faf3a0cc933e699398d5ebc54318d"
  },
  {
    "url": "plugins/processors/Benchmark.html",
    "revision": "820dd7fee034c92dd2cdf89fe3c686f5"
  },
  {
    "url": "plugins/processors/BlinkChangeDetector.html",
    "revision": "3ad75f5860028628f09f22f8afc53ae5"
  },
  {
    "url": "plugins/processors/BlinkDetection.html",
    "revision": "daec30effe672d195daf01170d9db83f"
  },
  {
    "url": "plugins/processors/BlinkDetector.html",
    "revision": "288de44c9793ba22012c9b10fccd2e43"
  },
  {
    "url": "plugins/processors/BlinkDetectorTrainer.html",
    "revision": "c5b89e9efeb451ac627a2b4463016bd0"
  },
  {
    "url": "plugins/processors/Comparator.html",
    "revision": "e6e9589e2f9b9bc5af215cc392f6fc14"
  },
  {
    "url": "plugins/processors/ComPort.html",
    "revision": "b74f876db749b24a877d2f860674c73b"
  },
  {
    "url": "plugins/processors/ComputeBandpower.html",
    "revision": "c326d707d7fbc4f89e490ec28458ccd8"
  },
  {
    "url": "plugins/processors/ConstantDispatcher.html",
    "revision": "027a5c1867ce45fdc26ca28a7dab20c6"
  },
  {
    "url": "plugins/processors/DataType.html",
    "revision": "8316dbaad6e30be152da1f26f8c2d83d"
  },
  {
    "url": "plugins/processors/DateToDouble.html",
    "revision": "fd3686924b4fc1c8a572025db3c3d563"
  },
  {
    "url": "plugins/processors/Deadzone.html",
    "revision": "8264367d1230ece0ec325b5c7a5d34be"
  },
  {
    "url": "plugins/processors/Decimation.html",
    "revision": "39ffb55b694cc5c4fba1eef4a565bb69"
  },
  {
    "url": "plugins/processors/Delay.html",
    "revision": "fc1d24fd9b7099c24b1b7931593b8835"
  },
  {
    "url": "plugins/processors/Derivative.html",
    "revision": "6721c0b51090c55b178687d6ce06568b"
  },
  {
    "url": "plugins/processors/Differentiate.html",
    "revision": "e8f765b5baf979e5c45785b5157c3bdf"
  },
  {
    "url": "plugins/processors/Dissimilarity.html",
    "revision": "fcfa08b681d618c84e7919fa24a22334"
  },
  {
    "url": "plugins/processors/DoubleToString.html",
    "revision": "03f0d250e2592b2d5be2b0c337a7e8bd"
  },
  {
    "url": "plugins/processors/ECMAScriptInterpreter.html",
    "revision": "bffa731bcfdf8e05aa16617dd83d16b1"
  },
  {
    "url": "plugins/processors/eg_example.html",
    "revision": "5e888e2f551f16ba62dd433e66a91af1"
  },
  {
    "url": "plugins/processors/EventBlock.html",
    "revision": "d117222ca1dfe55ed257d17c9bf1aedc"
  },
  {
    "url": "plugins/processors/EventCascade.html",
    "revision": "eaafb5155d4ac599e53b269ab66bf012"
  },
  {
    "url": "plugins/processors/EventCounter.html",
    "revision": "fbb18b2e1fbf1b6280edc3a12692a826"
  },
  {
    "url": "plugins/processors/EventDelay.html",
    "revision": "7016a1ba59380a190af10dbc6c7ef4dd"
  },
  {
    "url": "plugins/processors/EventDispatcher.html",
    "revision": "493202e95acc6ab794c821927ba8d4dc"
  },
  {
    "url": "plugins/processors/EventFlipFlop.html",
    "revision": "81138a87985ef7e14dc56df74e06c3be"
  },
  {
    "url": "plugins/processors/EventRouter.html",
    "revision": "8189ce3e5a6c7ec907a6f5a9373640a8"
  },
  {
    "url": "plugins/processors/EventStateMachine.html",
    "revision": "8bc2e515e31d6a1537e44cf86d03c9a5"
  },
  {
    "url": "plugins/processors/FABI.html",
    "revision": "9e1564839324d8d894922215668f2ed6"
  },
  {
    "url": "plugins/processors/FabiCronusMax.html",
    "revision": "1dc087df3159396b6a90a6497587766d"
  },
  {
    "url": "plugins/processors/Filter.html",
    "revision": "b16c3bd138c82d787e54926e3bd9e8b3"
  },
  {
    "url": "plugins/processors/FS20CommandInterpreter.html",
    "revision": "9fcb36e951385778fc8927bdc9227afd"
  },
  {
    "url": "plugins/processors/HRVAnalysis.html",
    "revision": "55af9462d2c883f8f934f6b44822b913"
  },
  {
    "url": "plugins/processors/HRVRmssdFromRR.html",
    "revision": "41d1c1f521e89f4fb14f644bee6a5943"
  },
  {
    "url": "plugins/processors/IIRFilter.html",
    "revision": "aee7339fd015229f52192dae96fc9126"
  },
  {
    "url": "plugins/processors/Integrate.html",
    "revision": "7925f088fd86579bce3500b83948daa8"
  },
  {
    "url": "plugins/processors/IntToString.html",
    "revision": "ee310802241fd148bc30e7872f36823c"
  },
  {
    "url": "plugins/processors/IrMicro.html",
    "revision": "e8122abf06f68d0954555c590a07b7b3"
  },
  {
    "url": "plugins/processors/javascript.svg",
    "revision": "4ce031b5b57c4b726762dc700e7e0eb7"
  },
  {
    "url": "plugins/processors/JsonParser.html",
    "revision": "8316537aaf92db82d0af376759c2e82c"
  },
  {
    "url": "plugins/processors/MathEvaluator.html",
    "revision": "9f836b9d6ec61b0df8c966fc3177a45c"
  },
  {
    "url": "plugins/processors/MinMax.html",
    "revision": "d111a1424162c7656ccba8061e8199cc"
  },
  {
    "url": "plugins/processors/MotionAnalysis.html",
    "revision": "aba8f7bfa7e60a3855dbfb98fbdabb78"
  },
  {
    "url": "plugins/processors/MultiSource.html",
    "revision": "9a69aac13e33e7bb479a78483938d363"
  },
  {
    "url": "plugins/processors/MultiSourceString.html",
    "revision": "885279931a7f7b3c6fa54c3333ad3861"
  },
  {
    "url": "plugins/processors/NeuralNetworkLoader.html",
    "revision": "efc69eef6e6db31f5632a13be59b9bb5"
  },
  {
    "url": "plugins/processors/NexusConnector.html",
    "revision": "3e30da4551739917967026c397cf7ce3"
  },
  {
    "url": "plugins/processors/OneEventManyActions.html",
    "revision": "e985fa3831b84f24476faa17b098aa14"
  },
  {
    "url": "plugins/processors/OpenHAB.html",
    "revision": "06fd2f950dfc7b60052edcc718e57635"
  },
  {
    "url": "plugins/processors/openhab.svg",
    "revision": "c6021fcfb65ae0fffecaeb7594e6a83c"
  },
  {
    "url": "plugins/processors/OscGestureFollower.html",
    "revision": "a6753ef7d45b1b8bc17c6b530c96f02e"
  },
  {
    "url": "plugins/processors/OskaExternalScanning1D.html",
    "revision": "53b37e9a2fe15af2799e30bda2b3dac2"
  },
  {
    "url": "plugins/processors/OskaExternalScanning2D.html",
    "revision": "7d4e8c2a17b10bdddae6fbe7ed0f518d"
  },
  {
    "url": "plugins/processors/OskaInternalScanning.html",
    "revision": "ff8727b6831344be1f049fe063118649"
  },
  {
    "url": "plugins/processors/PathMultiplexer.html",
    "revision": "e3e8ef642e10378cb0c16a286bc5b753"
  },
  {
    "url": "plugins/processors/Pathselector.html",
    "revision": "e70ec1e82984a9482f1465872b911a9b"
  },
  {
    "url": "plugins/processors/PeakDetector.html",
    "revision": "3ad13dbcd8c6ee96d0519545488358ee"
  },
  {
    "url": "plugins/processors/ProtocolSSVEPTrain.html",
    "revision": "8707f0cdf78c064dedeb97b364eda8f1"
  },
  {
    "url": "plugins/processors/Quantizer.html",
    "revision": "9cf0d478dc80bdf118bb11c5d6241cb0"
  },
  {
    "url": "plugins/processors/RegularExpression.html",
    "revision": "801833e0888031b77c363111bbc763a0"
  },
  {
    "url": "plugins/processors/RelativeMoveSampler.html",
    "revision": "e0af46fa526b93e5df7b9d58ec952508"
  },
  {
    "url": "plugins/processors/SampleAndHold.html",
    "revision": "3b053e27319cf5a85d59ffa11e272d91"
  },
  {
    "url": "plugins/processors/Sampler.html",
    "revision": "52542461ec455092103fa6f1c052c4bd"
  },
  {
    "url": "plugins/processors/SerialPort.html",
    "revision": "4fd3095dbfb2842b6afef36054a5f40b"
  },
  {
    "url": "plugins/processors/SerialSender.html",
    "revision": "fa61de556b2633566fbcd2c95792540b"
  },
  {
    "url": "plugins/processors/SignalTranslation.html",
    "revision": "928e4dd32a6239842bf358cace32003f"
  },
  {
    "url": "plugins/processors/SpeechProcessor.html",
    "revision": "4a69d2d3b7ee8ac229229f2c300dae76"
  },
  {
    "url": "plugins/processors/SSVEPDetect.html",
    "revision": "8551b6dc0557da9866a3e9aed165ef74"
  },
  {
    "url": "plugins/processors/StringAppend.html",
    "revision": "82dcc8e0c18f9b72c64c6ac8afed1b9c"
  },
  {
    "url": "plugins/processors/StringDelay.html",
    "revision": "54a3d773d4f8c431230e7af9dec564e0"
  },
  {
    "url": "plugins/processors/StringDispatcher.html",
    "revision": "2f21f5bc756c250f701a80d73455954e"
  },
  {
    "url": "plugins/processors/StringExpander.html",
    "revision": "26f39914f89efefe7bc84778743abaa5"
  },
  {
    "url": "plugins/processors/StringExtractor.html",
    "revision": "51d3c026b514ed6720e6b3b1092abe48"
  },
  {
    "url": "plugins/processors/StringFilter.html",
    "revision": "a491cfcd4e4cf01b3178f3ad22f08dd9"
  },
  {
    "url": "plugins/processors/StringFormatter.html",
    "revision": "99b8b0056cc71b7fde768f0eece2e4dc"
  },
  {
    "url": "plugins/processors/StringPathMultiplexer.html",
    "revision": "011c28c8dba281b6d8f43a11924a3839"
  },
  {
    "url": "plugins/processors/StringPathSelector.html",
    "revision": "172ba1ebd96a8da8bda5594fd99c4c71"
  },
  {
    "url": "plugins/processors/StringSplitter.html",
    "revision": "19942014311371218f0e85665c88e869"
  },
  {
    "url": "plugins/processors/StringToDouble.html",
    "revision": "57d41b69cc9a58d6a90d7ef639d28a36"
  },
  {
    "url": "plugins/processors/StringToInt.html",
    "revision": "5bb69ad916f9ae00fe67a8962b0dfc7f"
  },
  {
    "url": "plugins/processors/TextSender.html",
    "revision": "131a40faed396d5d0bf54cdd98df97fc"
  },
  {
    "url": "plugins/processors/Threshold.html",
    "revision": "98adf7ecf10927d40236f6acd01d00f6"
  },
  {
    "url": "plugins/processors/TimestampWriter.html",
    "revision": "14c087445474875a183aef6983ed5986"
  },
  {
    "url": "plugins/processors/UniversalRemoteControl.html",
    "revision": "8dee55126a05be5a4cae5019afdb34d9"
  },
  {
    "url": "plugins/processors/WebSocket.html",
    "revision": "794524e1631bb6b0a8a88b10867c3a2d"
  },
  {
    "url": "plugins/processors/Yaak.html",
    "revision": "bc0239df83f4b5e0b3f4e9079e5bc13e"
  },
  {
    "url": "plugins/sensors/Acceleration.html",
    "revision": "aa0dbef30c5250801e8e35827cd54f7f"
  },
  {
    "url": "plugins/sensors/AnalogIn.html",
    "revision": "5c339c36eaf59c1b794dabfd79b0f02d"
  },
  {
    "url": "plugins/sensors/AutostartEvent.html",
    "revision": "89b5be7622fe8aebc11520ca648100db"
  },
  {
    "url": "plugins/sensors/ButtonGrid.html",
    "revision": "ca9dc49c3197d03f38ff2cac2003bed8"
  },
  {
    "url": "plugins/sensors/CellBoard.html",
    "revision": "615be046dc28c77767e26266fed40bf2"
  },
  {
    "url": "plugins/sensors/DigitalIn.html",
    "revision": "4f2625cf88f87c078936eb9215734d60"
  },
  {
    "url": "plugins/sensors/EditBox.html",
    "revision": "e2a43a81dfa08d099c1b7a1f6ffd3d26"
  },
  {
    "url": "plugins/sensors/Enobio.html",
    "revision": "0c69cd100fc79a1e0484daccbbfd51d0"
  },
  {
    "url": "plugins/sensors/EOG.html",
    "revision": "81c6eea9fa3e42852f93a625f1cc2c08"
  },
  {
    "url": "plugins/sensors/EShoe.html",
    "revision": "37102ff65986ea0a183cb57ca4597fdc"
  },
  {
    "url": "plugins/sensors/EventGenerator.html",
    "revision": "87057fd1c1e94e585291c22d811c1132"
  },
  {
    "url": "plugins/sensors/Eyetracker.html",
    "revision": "de337262c1fe3588102845464e430065"
  },
  {
    "url": "plugins/sensors/EyeTribe.html",
    "revision": "c4c0300bf9c79ad1f1ef9c153936c3dc"
  },
  {
    "url": "plugins/sensors/EyeX.html",
    "revision": "bed29cd269f114f662f5976fe0886cd3"
  },
  {
    "url": "plugins/sensors/FacetrackerCLM.html",
    "revision": "e8af2bd01f301c4b2ef51ee88f5fd6f0"
  },
  {
    "url": "plugins/sensors/FacetrackerLK.html",
    "revision": "6b73334993e859aaa91d7ce04846d008"
  },
  {
    "url": "plugins/sensors/FolderBrowser.html",
    "revision": "418a793d38868873fa35c0cb72d34612"
  },
  {
    "url": "plugins/sensors/FS20Receiver.html",
    "revision": "ed97c7c416eb02c8d89da9e547382deb"
  },
  {
    "url": "plugins/sensors/HeadPositionHC.html",
    "revision": "7de25c6cdebbe46eb30e8e8b360ce47b"
  },
  {
    "url": "plugins/sensors/HoverPanel.html",
    "revision": "3cbc13a14aeff9bf489126474499d4f3"
  },
  {
    "url": "plugins/sensors/IntelRealSense.html",
    "revision": "d963123c15262b0d76f0efdcd69dd698"
  },
  {
    "url": "plugins/sensors/JoystickCapture.html",
    "revision": "de9998d6ccab76f777365832f62b0251"
  },
  {
    "url": "plugins/sensors/KeyboardCapture.html",
    "revision": "022b6a69aa655c887b08ca520e1bd059"
  },
  {
    "url": "plugins/sensors/KeyCapture.html",
    "revision": "1d8280522ecb39b7cdeea607dfea0d2a"
  },
  {
    "url": "plugins/sensors/Kinect.html",
    "revision": "1e476e634057e40d3f7d23c527562c86"
  },
  {
    "url": "plugins/sensors/kinect.png",
    "revision": "34f240cb60e07972fa97031c5bd21964"
  },
  {
    "url": "plugins/sensors/KinectJ4K.html",
    "revision": "46435de1ad8177b838035bde8ea4e40b"
  },
  {
    "url": "plugins/sensors/kinectj4k.png",
    "revision": "25e7e6fd6803b37e4dfdeef31c1074af"
  },
  {
    "url": "plugins/sensors/LegacyAnalogIn.html",
    "revision": "997d7edfdbb23ef5206cc650bdc25a85"
  },
  {
    "url": "plugins/sensors/LegacyDigitalIn.html",
    "revision": "b0c14413bb9c63a52976e18637e29892"
  },
  {
    "url": "plugins/sensors/Lightscore.html",
    "revision": "a570a6d814a2bd605a07f0f820e5babc"
  },
  {
    "url": "plugins/sensors/LineReader.html",
    "revision": "c6bb8689c10edc54ad61a2ed0d1fb001"
  },
  {
    "url": "plugins/sensors/lipmouse-ir.svg",
    "revision": "34bb4aa7203f2eb11488121d91d25b6a"
  },
  {
    "url": "plugins/sensors/Lipmouse.html",
    "revision": "4d233a3ca81b5ddf4e8bb1890123e4df"
  },
  {
    "url": "plugins/sensors/lipmouse.png",
    "revision": "d59692a5eeadfdaa05bd33d1ae38814b"
  },
  {
    "url": "plugins/sensors/LipmouseIR.html",
    "revision": "77711eb5a5b8353ad7fcfc1310fecf64"
  },
  {
    "url": "plugins/sensors/MicGPI.html",
    "revision": "fae229b3141b1353f597d1006b62c820"
  },
  {
    "url": "plugins/sensors/MouseCapture.html",
    "revision": "b2327f460d0006067124bd8ce010fbea"
  },
  {
    "url": "plugins/sensors/OpenBCI.html",
    "revision": "7b711586bec46f487d23cd648c6d6ace"
  },
  {
    "url": "plugins/sensors/OpenVibe.html",
    "revision": "cc0b73235b8a4a88051793f2a95fdc54"
  },
  {
    "url": "plugins/sensors/OscServer.html",
    "revision": "71f324d882abee3d55494bfbbd61ed2d"
  },
  {
    "url": "plugins/sensors/P2_Parser.html",
    "revision": "3c2b7b89dbef90ad846f26406c628c9b"
  },
  {
    "url": "plugins/sensors/philips-hue.png",
    "revision": "e170760f1d17b388a398e5454c8940fa"
  },
  {
    "url": "plugins/sensors/PhilipsHueSensor.html",
    "revision": "65e1a5e0df416677c2aae025369f970d"
  },
  {
    "url": "plugins/sensors/PlatformAnalogIn.html",
    "revision": "3ceebd07f8f38b5ffe2406278bdc64ff"
  },
  {
    "url": "plugins/sensors/PlatformDigitalIn.html",
    "revision": "aa3201e523f5d7746851327d53452c66"
  },
  {
    "url": "plugins/sensors/Proximity.html",
    "revision": "e7c739afeb2225415fb629a814f8f601"
  },
  {
    "url": "plugins/sensors/RandomNumber.html",
    "revision": "e6805ca1b4a2d7c405b985da73ed1112"
  },
  {
    "url": "plugins/sensors/RazorIMU.html",
    "revision": "9b8488958eae165d30d6c0b2305e70e1"
  },
  {
    "url": "plugins/sensors/ReadCSV.html",
    "revision": "77cae939da5a6664e2b88c648388f875"
  },
  {
    "url": "plugins/sensors/ReadEDF.html",
    "revision": "98916619a9ff6539f8a598c9ce4745fd"
  },
  {
    "url": "plugins/sensors/RFIDReader.html",
    "revision": "ae90b4289bbfee532bf7b7fd376b7990"
  },
  {
    "url": "plugins/sensors/Sensorboard.html",
    "revision": "bb3e1912b6ee6969eb8c290eed565f6b"
  },
  {
    "url": "plugins/sensors/SignalGenerator.html",
    "revision": "71e17c10cc43a7c0fa14877203dac14e"
  },
  {
    "url": "plugins/sensors/SignalShaper.html",
    "revision": "c6510e0b33c5ff497b24b979e6cac9eb"
  },
  {
    "url": "plugins/sensors/Slider.html",
    "revision": "c745a40867a732d63c39809b330dde25"
  },
  {
    "url": "plugins/sensors/SpaceNavigator3DMouse.html",
    "revision": "a6fdd2e13bcdfb6fd9bbc400457f8ee4"
  },
  {
    "url": "plugins/sensors/TextfieldReader.html",
    "revision": "b6a38fcbd6a37cb035cb52668e1b7542"
  },
  {
    "url": "plugins/sensors/Timer.html",
    "revision": "ccc7c85a355ee74149602c64bde89cf6"
  },
  {
    "url": "plugins/sensors/tobi4c.png",
    "revision": "6777234a1aed6499d450cdf7ab19762a"
  },
  {
    "url": "plugins/sensors/Tobii4CHeadTracker.html",
    "revision": "7280e3ddaea68d64753f1f0b4f1ce608"
  },
  {
    "url": "plugins/sensors/TobiTic.html",
    "revision": "1a5202e4b1f29dedcd2eba8b40947d62"
  },
  {
    "url": "plugins/sensors/TuioReactivision.html",
    "revision": "fcf61af31914a5369572a6405fb6cdb8"
  },
  {
    "url": "plugins/sensors/WiiMote.html",
    "revision": "0fae828234afbd3e57c918407052f824"
  },
  {
    "url": "plugins/sensors/wiimote.png",
    "revision": "8a5c2c5a7a221add26dead3904975fda"
  },
  {
    "url": "plugins/sensors/XFacetrackerLK.html",
    "revision": "5ff679ad76db41b1e61a5686f7a767d5"
  },
  {
    "url": "solutions/AAC-Basic.html",
    "revision": "e6cc56f77f752a3d15449cba1d2458b4"
  },
  {
    "url": "solutions/Camera-Mouse.html",
    "revision": "9dfabcb9fa39390798e4620111d2e372"
  },
  {
    "url": "solutions/Eye-Tracking-Mouse.html",
    "revision": "1b66c09195d11f576376d9716b3b2fef"
  },
  {
    "url": "solutions/Head-Sound.html",
    "revision": "0e9f5f97636a1ceea59ae0ac2e9be9d6"
  },
  {
    "url": "solutions/index.html",
    "revision": "4eddc9638956201d6e04b50d513987f3"
  },
  {
    "url": "solutions/Switch-Mouse.html",
    "revision": "d6b190026c5b0206b559a970338ffff9"
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
    "revision": "414316611c07dd94605d20c0b43a001f"
  },
  {
    "url": "webapps/Plugin-IDE.html",
    "revision": "2a0896e130c6b80b0d40348dcd3886d4"
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
