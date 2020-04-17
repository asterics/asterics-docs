import pageComponents from "@internal/page-components";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Quick-fix/Workaround for following error messages in development mode:
  // > [Vue warn]: Unknown custom element: <v-00c136c4> - did you register the component correctly?
  // > For recursive components, make sure to provide the "name" option.
  for (const [name, component] of Object.entries(pageComponents)) {
    Vue.component(name, component);
  }
};
