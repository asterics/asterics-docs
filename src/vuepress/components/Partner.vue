<template>
  <!-- <b-col class="col-lg-2 col-md-2 col-sm-12 col-xs-12 text-center"> -->
  <b-col class="text-center" cols="6" md="3">
    <b-img-lazy :src="image"></b-img-lazy>
  </b-col>
</template>

<script>
export default {
  props: {
    image: String,
    alt: {
      type: String,
      default: "Alternative text."
    }
  }
};
</script>

<style lang="scss" scoped>
</style>