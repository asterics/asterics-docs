<template>
  <SWUpdatePopup>
    <div slot-scope="{ enabled, reload, message, buttonText }">
      <div v-if="enabled" class="asterics-sw-update-popup">
        {{ message }}
        <br>
        <button @click="reload">{{ buttonText }}</button>
      </div>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from "@vuepress/plugin-pwa/lib/SWUpdatePopup.vue";

export default {
  components: { SWUpdatePopup }
};
</script>

<style>
.asterics-sw-update-popup {
  position: fixed;
  right: 1em;
  bottom: 1em;
  padding: 1em;
  border: 2px solid #0ea1d2;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5);
  text-align: center;
}

.asterics-sw-update-popup button {
  display: inline-block;
  background-color: #0ea1d2;
  color: white;
  border: none;
  border-bottom: 1px solid #0d91bd;
  border-radius: 4px;
  /* border: 1px #0ea1d2 solid; */
  font-size: 1rem;
  padding: 0.8rem 1.6rem;
  font-size: 1rem;
  font-weight: 500;
  transition: background-color 0.1s ease;
  margin-top: 1rem;
  /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); */
}

.asterics-sw-update-popup-enter-active,
.asterics-sw-update-popup-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.asterics-sw-update-popup-enter,
.asterics-sw-update-popup-leave-to {
  opacit: 0;
  transform: translate(0, 50%) scale(0.5);
}
</style>