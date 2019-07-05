<template>
  <b-container>
    <b-row>
      <div class="col-12 breadcrumb-container">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#"
        },
        {
          text: "Manage",
          href: "#"
        },
        {
          text: "Library",
          active: true
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb-container {
  margin-top: 3.5rem;
  position: fixed;
  z-index: 999;
  display: inline-block;
  padding-bottom: 2rem;
  // padding: 2rem;
  // padding: 0;
}
</style>