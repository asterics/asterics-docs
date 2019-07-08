<template>
  <ParentLayout>
    <BreadCrumb class="theme-default-container" slot="page-top" />
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import BreadCrumb from "@theme/components/BreadCrumb.vue";
export default {
  components: {
    ParentLayout,
    BreadCrumb
  }
};
</script>

<style lang="scss">
.theme-default-container {
  margin-bottom: 3.5rem;
}
</style>