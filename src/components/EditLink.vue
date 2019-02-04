<template>
  <div>
    <a
      target="_blank"
      :href="editLink(decodeURIComponent(this.$route.path))"
    >Help us improve this page!</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      editLink(path) {
        return this.routes[path][this.version]["editlink"];
      }
    };
  },
  computed: {
    version: function() {
      return this.$site.themeConfig.store.version;
    },
    routes: function() {
      return this.$site.themeConfig.store.routes;
    }
  }
};
</script>

<style scoped>
</style>