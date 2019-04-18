import BootstrapVue from "bootstrap-vue";

import "./styles/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(BootstrapVue);

  library.add(faCog, faBackspace, faQuestionCircle, faSync, faTag, faUniversalAccess);
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  Vue.config.productionTip = false;
};
