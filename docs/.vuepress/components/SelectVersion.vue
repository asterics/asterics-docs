<template>
  <div class="dropdown">
    <button v-on:click="toggle()" class="dropbtn">Version</button>
    <!-- <div @class="show: showDropdown dropwdown-content: true"> -->
    <!-- <div class="dropdown-content" v-bind:class="{ show: showDropdown }">
      <a href="#" v-on:click="change(v)" v-for="v in versionNumbers">{{v}}</a>
    </div>-->
    <!-- <ul class="nav-dropdown" v-show="showDropdown">
      <li v-for="version in config[this.$route.path]">
        <a>{{version}}</a>
      </li>
    </ul>-->
    <div class="dropdown-content" v-bind:class="{ show: showDropdown }">
      <a
        v-on:click="echo(version,path)"
        v-for="(path, version) in versions[this.$route.path]"
        :href="path"
      >{{version}}</a>
    </div>
  </div>
</template>


<script>
import path from "path";
import versions from "../../../src/config/versions.js";
// let configPath = path.join(process.cwd(), "src", "config", "config.js");
// import config from `${configPath}`;
// import config = require("./src/config/config.js");
export default {
  data() {
    return {
      // versionNumbers: ["v2.3-patch", "v2.5-patch", "v3.0.1", "latest"],
      showDropdown: false,
      versions
    };
  },
  methods: {
    toggle() {
      // console.log("HELLO dummy");
      // this.$router.base("dummy");
      this.showDropdown = !this.showDropdown;
    },
    echo(version, path) {
      console.log(`version: ${version}, path: ${path}`);
    },
    // change(v) {
    //   // console.log(v);
    //   // console.log(this.$route.path);
    //   // let route = `/${v}/${this.$route.path}`;
    //   // console.log(route);
    //   // console.log(this.$router.currentRoute);
    //   // this.$router.push(route);
    //   // this.$router.go(route);
    //   // console.log(this.$page);
    //   // console.log(config);
    // },
    // toggleVersion(v) {
    //   this.dummy = v;
    // },
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
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  left: 90%;
  position: fixed;
  top: 70px;
  /* position: absolute; */
  /* top: 0;
  right: 2190; */
}

/* Dropdown button on hover & focus */
.dropbtn:hover,
.dropbtn:focus {
  background-color: #0b799d;
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
  left: 90%;
  position: fixed;
  top: 120px;
  background-color: #c5eefb;
  color: white;
  min-width: 160px;
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

