<template>
  <div>
    <a :href="href" :target="target">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ["href", "target", "text"]
};
</script>

<style scoped>
</style>