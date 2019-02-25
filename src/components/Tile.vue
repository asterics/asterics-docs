<template>
  <div class="topics" v-show="showTopics">
    <article v-for="topic in topics" class="topic">
      <a target="_blank" :href="'/getting-started/' + topic.id" class="topic-link">
        <h3 class="post-title">{{topic.title}}</h3>
        <img
          v-if="topic.image_url && topic.image_url.indexOf('favicon.ico') < 0"
          :src="topic.image_url"
        >
      </a>
    </article>
  </div>
</template>

<style lang="stylus">
.topics {
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

  .topic {
    width: 10vw;
    max-width: 385px;
    border: 1px solid #ddd;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.15);
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;

    .topic-link {
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

