// async function is also supported, too
export default async ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  if (process.env.NODE_ENV === "development" && !isServer) {
    // const pageComponents = await import("@internal/page-components");
    const { default: pageComponents } = await import("@internal/page-components");
    // Hot reload page components,  in development mode, due to custom theme.
    // > [Vue warn]: Unknown custom element: <v-xxxxxxxx> - did you register the component correctly?
    for (const name in pageComponents) {
      Vue.component(name, pageComponents[name]);
    }
  }
};
