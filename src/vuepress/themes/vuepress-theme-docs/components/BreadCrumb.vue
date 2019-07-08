<template>
  <b-container>
    <b-row>
      <div class="col-12 breadcrumb-container">
        <b-breadcrumb :items="items"></b-breadcrumb>
        <span></span>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  methods: {
    getEntries: function() {
      const delimiter = "/";
      let path = this.$page.path;
      let entries = [path];
      if (path[path.length - 1] === "/") path = path.substr(0, path.length - 1);
      while (path !== "") {
        path = path.substr(0, path.lastIndexOf(delimiter));
        entries.push(path + delimiter);
      }
      return entries;
    },
    capitalize: function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
  },
  data() {
    return {};
  },
  computed: {
    items: function() {
      return this.getEntries()
        .map((entry, index) => {
          const page = this.$site.pages.find(page => page.path === entry);

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
            let title = entry
              .replace(/.*\/(.*?)\/$/, (m, title) => this.capitalize(title))
              .replace(/\-/, " ")
              .split(" ")
              .map(word => this.capitalize(word))
              .join(" ");
            return {
              text: title,
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
        })
        .reverse();
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  margin-top: 3.5rem;
  position: fixed;
  // z-index: 999;
  // display: inline-block;
  // padding-bottom: 2rem;
  // padding: 2rem;
  // padding: 0;
}
</style>