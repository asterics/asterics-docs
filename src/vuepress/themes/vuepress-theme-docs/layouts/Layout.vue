<template>
  <ParentLayout>
    <BreadCrumb class="theme-default-content breadcrumb-container" slot="page-top" />
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
  padding-top: 0 !important;
}
</style>