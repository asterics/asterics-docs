<template>
  <div class="tilegroup">
    <slot></slot>
  </div>
</template>

<style lang="stylus">
.tilegroup {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 800vh;
  max-width: 100%;
  padding-right: 0;

  @media (max-width: 480px) {
    & {
      max-height: none !important;
      padding-right: 1.4rem;
      display: block;

      .topic {
        width: 100% !important;
        max-width: 100% !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 1023px) and (orientation: portrait) {
    & {
      max-height: 950vh; // 500vw
      padding-right: 1.4rem;

      .topic {
        width: 48% !important;
        max-width: 48% !important;
      }
    }
  }

  @media (min-width: 481px) and (max-width: 1023px) and (orientation: landscape) {
    & {
      max-height: 680vw;
      padding-right: 1.5rem;
    }
  }

  @media (min-width: 1024px) and (orientation: portrait) {
    & {
      max-height: 600vw;
    }
  }

  @media (min-width: 1280px) {
    & {
      max-height: 6400px;
    }
  }
}
</style>

<script>
import Vue from "vue";
export default {};
</script>

