<template>
  <!-- <b-container fluid> -->
  <div class="flex-container">
    <slot></slot>
  </div>
  <!-- </b-container> -->
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex-container {
  // background-color: red !important;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  // white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  & > div {
    height: 33vh;
    width: 48%;
    // margin-bottom: 4%;
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