<template>
  <div>
    <b-card no-body class="overflow-hidden" style="max-width: 540px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-embed v-if="isVideo" type="iframe" aspect="16by9" :src="imageUrl" allowfullscreen/>
          <b-card-img v-else :src="$withBase(imageUrl)" class="rounded-0"/>
          <b-card-footer>
            <div>
              <b-button-group>
                <div v-for="buttonElem in buttons">
                  <b-button :href="$withBase(buttonElem.href)" variant="primary">{{buttonElem.text}}</b-button>
                </div>
              </b-button-group>
            </div>
          </b-card-footer>
        </b-col>
        <b-col md="6">
          <b-card-body :title="title">
            <div v-for="tag in tags">
              <b-badge :href="$withBase(tag.href)" variant="primary">{{tag.text}}</b-badge>
            </div>
            <b-card-text>{{shortDesc}}</b-card-text>
            <b-button :href="$withBase(target)" variant="primary">Learn More</b-button>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style lang="stylus">
</style>

<script>
import Vue from "vue";
export default {
  props: {
    target: { type: String, default: "#" },
    title: { type: String, default: "Default Title" },
    imageUrl: { type: String, default: "" },
    shortDesc: { type: String, default: "Short Description of element." },
    tags: {
      type: Array,
      default: function() {
        return [];
      }
    },
    buttons: {
      type: Array,
      default: function() {
        return [{ href: "", text: "Start" }, { href: "", text: "Edit" }];
      }
    }
  }
};
</script>

