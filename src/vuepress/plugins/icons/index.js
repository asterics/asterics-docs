import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
