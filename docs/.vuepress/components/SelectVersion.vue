<template>
  <div class="dd-version">
    <div class="dropdown-wrapper">
      <button @click="toggle" class="dropdown-title">Version</button>
      <ul class="nav-dropdown">
        <li v-for="v in versionNumbers" class="dropdown-item">
          <a href="#" @click="toggleVersion(v)">{{v}}</a>
        </li>
      </ul>
    </div>

    <div id="versionDropdown"></div>
    <div>{{dummy}}</div>
    <!-- <div>{{ $route }}</div> -->
    <!-- <div>{{ $site }}</div> -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      versionNumbers: [
        "v2.3",
        "v2.5",
        "v2.6",
        "v2.7",
        "v2.8",
        "v3.0",
        "latest"
      ],
      dummy: "Text"
    };
  },
  methods: {
    toggle() {
      console.log("HELLO dummy");
      this.$router.base("dummy");
    },
    toggleVersion(v) {
      this.dummy = v;
    }
  }
};
</script>

<style>
</style>

