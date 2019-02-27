<template>
  <article class="tile">
    <a target="_blank" :href="'/getting-started/' + target" class="tile-link">
      <h3 class="post-title">{{title}}</h3>
      <img v-if="imageUrl && imageUrl.indexOf('favicon.ico') < 0" :src="imageUrl">
    </a>
  </article>
</template>

<style lang="stylus">
.tile {
  width: 10vw;
  max-width: 385px;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.15);
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem;

  .tile-link {
    color: black;

    &:hover {
      text-decoration: none;
    }

    .post-stats {
      font-size: 10pt;
      font-weight: normal;
    }

    h3 {
      margin-top: 0.4rem;
    }

    .tags {
      list-style-type: none;
      padding: 0;
      margin: 0;

      .tag {
        display: inline;
        margin-right: 10px;
        font-size: 8pt;
        background: #eee;
        padding: 4px;

        a {
          color: black;
        }
      }
    }

    .read-more {
      margin-top: 1rem;
      font-size: 0.7rem;
      color: #ff6600;
      width: auto;
      display: flex;
      flex-direction: row;

      .read-more-button {
        padding: 0.3rem 0.8rem;
        border: 1px solid #ff6600;
        border-radius: 4px;
        box-sizing: border-box;

        &:hover, &:focus {
          color: white;
          background-color: #ff6600;
        }
      }
    }
  }
}
</style>

<script>
import Vue from "vue";
export default {
  data() {
    return {
      showTopics: true
    };
  },
  computed: {
    topics() {
      return [
        {
          id: "#definition-asterics",
          title: "Keyboard and Mouse",
          image_url: "/img/keyboard press key.png"
        },
        {
          id: "#definition-asterics",
          title: "Environmental Control",
          image_url: "/img/environmental control.png"
        },
        {
          id: "#definition-asterics",
          title: "Environmental Control",
          image_url: "/img/light on.png"
        },
        {
          id: "#definition-asterics",
          title: "Bioelectric Signal",
          image_url: "/img/ecgl.svg"
        }
      ];
    }
  },
  mounted() {}
};
</script>

