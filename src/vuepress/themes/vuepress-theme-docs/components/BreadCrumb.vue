<template>
  <b-container>
    <b-row class="breadcrumb-container">
      <b-breadcrumb class="col-12 breadcrumbs mx-2" :items="breadcrumbs"></b-breadcrumb>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    getEntries: function() {
      const delimiter = "/";
      let path = this.$page.path;
      let entries = [...this.loadPageTitles(path), { href: path, title: "" }];
      if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
      while (path !== "") {
        path = path.substr(0, path.lastIndexOf(delimiter));
        entries.push({ href: path + delimiter, title: "" });
      }
      return entries;
    },
    capitalize: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    constructTitle: function(entry) {
      return entry
        .replace(/.*\/(.*?)\/$/, (m, title) => this.capitalize(title))
        .replace(/(\-|\_)/, " ")
        .replace(/asterics/i, "AsTeRICS")
        .split(" ")
        .map(word => this.capitalize(word))
        .join(" ");
    },
    loadPageTitles: function(basePath) {
      let pageTitles = [];
      const headers = this.$page.headers;
      const hash = this.$route.hash ? this.$route.hash.slice(1) : "";
      /*
       * Currently only level 3 and level 2 titles supported.
       */
      let lastLevelTwoIndex;
      headers &&
        headers.find((header, index) => {
          if (header.level === 2) lastLevelTwoIndex = index;

          /* Second level heading */
          if (header.level === 2 && header.slug === hash) {
            pageTitles.push({
              slug: true,
              href: basePath + "#" + header.slug,
              text: header.title
            });
            return true;
          }

          /* Third level heading */
          if (header.level === 3 && header.slug === hash) {
            pageTitles.push({
              slug: true,
              href: basePath + "#" + header.slug,
              text: header.title
            });
            const { slug, title } = headers[lastLevelTwoIndex];
            pageTitles.push({
              slug: true,
              href: basePath + "#" + slug,
              text: title
            });
            return true;
          }
          return false;
        });
      return pageTitles;
    }
  },
  data() {
    return {};
  },
  computed: {
    breadcrumbs: function() {
      return this.getEntries()
        .map((entry, index) => {
          /* Handle paths containing slugs, e.g. (localhost:8080/index.html#overview) */
          if (entry.slug) {
            if (index === 0) {
              return {
                text: entry.text,
                active: true
              };
            }
            return entry;

            /* Handle "pure" paths, i.e. those without slugs */
          } else {
            const page = this.$site.pages.find(
              page => page.path === entry.href
            );

            /*
             * If the page does not exist, the title is constructed
             * from the current subpath and set to active, which usually
             * indicates, that this entry is the currently active path. Thus
             * the link is deactivated.
             *
             * Handling error paths gracefully is, however, only a temporary strategy
             * to mitigate migration to a complete set of pages, including at least
             * one valid page for every available subpath.
             */
            if (typeof page === "undefined") {
              return {
                text: this.constructTitle(entry.href),
                active: true
              };
            }

            if (index === 0) {
              return {
                text: page.title,
                active: true
              };
            } else {
              return {
                text: page.title,
                href: page.regularPath
              };
            }
          }
        })
        .reverse();
    },
    sidebar: function() {
      const path = this.$page.path;
      let hasSidebar = false;
      for (const entry in this.$themeConfig.sidebar) {
        const r = new RegExp(`^${entry}`);
        if (r.exec(path)) {
          hasSidebar = true;
          break;
        }
      }
      return hasSidebar;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  padding: 0;
}
</style>