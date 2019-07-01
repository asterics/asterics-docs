import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDesktop, faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { faWindows, faLinux, faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess, faDesktop, faWindows, faLinux, faApple);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
