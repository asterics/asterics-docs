<template>
  <div>
    <a :href="href">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ["href", "text"]
};
</script>

<style scoped>
</style>