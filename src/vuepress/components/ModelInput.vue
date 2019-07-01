<template>
  <b-input-group class="mt-3">
    <b-input-group-text slot="prepend" class="model-setting-label">
      <div :id="id">
        <transition
          mode="out-in"
          enter-class
          enter-active-class="animated heartBeat"
          leave-class
          leave-active-class
        >
          <!-- :show.sync="showInfo" -->
          <b-img
            tabindex="0"
            thumbnail
            @mouseenter="showInfo = true"
            v-if="!showInfo"
            rounded="circle"
            src="/assets/img/asterics-logo.svg"
            class="model-settings-label-img"
          ></b-img>

          <div
            v-else
            @mouseleave="showInfo = false"
            tabindex="0"
            class="model-settings-label-img"
            style="background-color: white; border-radius: 50%; width: 24px; height: 100%; display: inline-block;"
          >
            <font-awesome-icon icon="question-circle"/>
          </div>
        </transition>
      </div>
      <b-tooltip :delay="{show: 100, hide: 50}" :target="id" placement="bottom">
        <slot name="tool-tip">
          <span>Default tooltip!</span>
        </slot>
      </b-tooltip>

      <span>{{label}}</span>
    </b-input-group-text>
    <b-form-input
      class="model-settings-input"
      :value="setting"
      @input.native="$emit('updateSetting', $event.target.value)"
    ></b-form-input>
    <b-input-group-append>
      <b-button
        @click="$emit('updateSetting', '')"
        variant="primary"
        tabindex="0"
        v-b-tooltip.bottom="tooltipConfig('Clear')"
      >
        <font-awesome-icon icon="backspace"/>
      </b-button>
      <b-button
        @click="$emit('updateSetting', defaults)"
        variant="info"
        v-b-tooltip.bottom="tooltipConfig('Reset')"
      >
        <font-awesome-icon icon="sync"/>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "Label"
    },
    defaults: { type: String, default: "" },
    setting: String
  },
  model: {
    prop: "setting",
    event: "updateSetting"
  },
  data() {
    return {
      showInfo: false,
      id: null
    };
  },
  methods: {
    tooltipConfig(title) {
      return { title, delay: { show: 500, hide: 100 } };
    }
  },
  created() {
    this.id =
      "_" +
      Math.random()
        .toString(36)
        .substr(2, 9);
  }
};
</script>

<style lang="scss" scoped>
.model-settings-input {
  min-height: 40px;
}
.model-setting-label {
  min-width: 140px;
  font-weight: bold;
}
.model-settings-label-img {
  display: inline-block;
  width: 24px;
  background-color: lighten(gray, 50%);
  margin-right: 8px;
}
</style>