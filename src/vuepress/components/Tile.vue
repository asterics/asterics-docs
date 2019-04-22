<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-embed v-if="isVideo" type="iframe" aspect="16by9" :src="imageUrl" allowfullscreen/>
          <b-card-img v-else :src="$withBase(imageUrl)" class="rounded-0"/>
        </b-col>
        <b-col md="6">
          <b-card-body :title="title">
            <b-card-text>
              <slot></slot>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>

  <!-- <div class="mt-4">
    <b-card
      :title="title"
      :img-src="$withBase(imageUrl)"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mt-4"
    ></b-card>
  </div>-->
</template>

<style lang="stylus"></style>

<script>
import Vue from "vue";
export default {
  props: {
    target: { type: String, default: "#" },
    title: { type: String, default: "Default Title" },
    imageUrl: { type: String, default: "" },
    isVideo: { type: Boolean, default: false }
  }
};
</script>

