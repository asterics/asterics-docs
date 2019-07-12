<template>
  <ParentLayout>
    <BreadCrumb
      class="theme-default-content breadcrumb-container p-0 navbar-scroll"
      slot="page-top"
    />
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
  position: sticky;
  top: 3.5rem;
  margin-bottom: 3.5rem;
}
</style>