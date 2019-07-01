<template>
  <ParentLayout>
    <Jumbo slot="page-top"/>
  </ParentLayout>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import Jumbo from "@theme/components/Jumbo.vue";
export default {
  components: {
    ParentLayout,
    Jumbo
  }
};
</script>