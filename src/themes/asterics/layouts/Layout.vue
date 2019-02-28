<template>
  <div>
    <ParentLayout>
      <template v-slot:sidebar-top>
        <SelectVersion/>
      </template>
    </ParentLayout>
  </div>
</template>

<script>
import ParentLayout from "@parent-theme/layouts/Layout.vue";
import SelectVersion from "../components/SelectVersion.vue";
export default {
  components: {
    ParentLayout,
    SelectVersion
  }
};
</script>

<style scoped>
</style>