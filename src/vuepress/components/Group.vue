<template>
  <div class="flex-container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  & > div {
    min-height: 425px;
    width: 48%;
    margin: 0.4rem auto;
  }
}

@media (max-width: 768px) {
  .flex-container > div {
    width: 100%;
    margin: 0.4rem auto;
  }
}
</style>