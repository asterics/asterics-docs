<template>
  <ParentLayout>
    <BreadCrumb class="theme-default-content breadcrumb-container pt-0 mr-2" slot="page-top" />
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
.breadcrumb-container {
  z-index: 2;
}
</style>