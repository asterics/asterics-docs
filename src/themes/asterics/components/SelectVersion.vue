<template>
  <div class="dropdown">
    <button v-on:click="toggle()" class="dropbtn">{{this.version}}</button>
    <div class="dropdown-content" v-bind:class="{ show: showDropdown }">
      <a
        v-bind:key="entry.route"
        v-for="(entry, v) in routes[decodeURIComponent(this.$route.path)]"
        :href="entry.route"
      >{{v}}</a>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showDropdown: false
    };
  },
  computed: {
    version: function() {
      let v = this.$site.themeConfig.store.version;
      let l = this.$site.themeConfig.store.latest;
      return v === l ? "latest" : v;
    },
    routes: function() {
      return this.$site.themeConfig.store.routes;
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
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  background-color: #0ea1d2;
  padding: 0.8rem 1.6rem;
  /* padding: 0.4rem 0em; */
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid #0ea1d2;
  line-height: 1.7;
  width: 100%;
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #10b6ed;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  /* position: relative; */
  /* position: absolute; */
  /* display: inline-block; */
  /* width: 80%;
  margin: 0% 10%; */
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  background-color: #c5eefb;
  box-sizing: border-box;
  max-height: calc(100vh - 2.7rem);
  overflow-y: auto;
  position: absolute;
  width: 100%;
  /* top: 100%; */
  /* right: 0; */
  /* background-color: #fff; */
  padding: 0.6rem 0;
  border: 1px solid #ddd;
  border-bottom-color: #ccc;
  text-align: left;
  border-radius: 0.25rem;
  white-space: nowrap;
  margin: 0;
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

