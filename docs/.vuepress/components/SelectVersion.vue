<template>
  <div class="dropdown">
    <button v-on:click="toggle()" class="dropbtn">{{this.version}}</button>
    <div class="dropdown-content" v-bind:class="{ show: showDropdown }">
      <a v-for="(route, version) in routes" :href="route">{{version}}</a>
    </div>
  </div>
</template>


<script>
import versions from "../../../src/config/versions.json";

export default {
  data() {
    return {
      showDropdown: false,
      versions
    };
  },
  computed: {
    version: function() {
      return this.$site.themeConfig.store.version;
    },
    routes: function() {
      return this.$site.themeConfig.store.versioned_routes[this.$route.path];
    }
  },
  methods: {
    toggle() {
      this.showDropdown = !this.showDropdown;
    },
    documentClick(e) {
      if (!e.target.matches(".dropbtn")) {
        this.showDropdown = false;
      }
    }
  },
  mounted() {
    document.addEventListener("click", this.documentClick);
  },
  destroyed() {
    document.removeEventListener("click", this.documentClick);
  }
};
</script>

<style>
/* Dropdown Button */
.dropbtn {
  background-color: #0ea1d2;
  color: white;
  padding: 1;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  position: fixed;
  right: 2%;
  top: 5em;
  height: 3em;
  width: 14em;
  opacity: 0.4;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #0b799d;
  opacity: 1;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  /* position: relative; */
  position: absolute;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  right: 2%;
  position: fixed;
  top: 8em;
  background-color: #c5eefb;
  color: white;
  width: 14em;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #0b799d;
  color: white;
}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {
  display: block;
}
</style>

