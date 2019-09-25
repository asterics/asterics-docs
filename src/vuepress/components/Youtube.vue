<template>
  <b-card no-body>
    <b-row no-gutters class="video-placer">
      <div slot="header" class="video-container">
        <iframe
          frameborder="0"
          class
          :src="`https://www.youtube${nocookie ? '-nocookie' : ''}.com/embed/${code}?rel=0`"
          allowfullscreen
        ></iframe>
      </div>
      <b-card-body>
        <b-card-title>
          <a target="_blank" :href="`https://www.youtube.com/watch?v=${code}`">{{title}}</a>
        </b-card-title>
        <b-card-text class="card-text">{{description}}</b-card-text>
      </b-card-body>
    </b-row>
  </b-card>
</template>

<script>
export default {
  props: {
    left: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default:
        "This is a wider card with supporting text as a natural lead-in to additional content."
    },
    code: String,
    nocookie: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    order: function(left) {
      if (typeof screen !== "undefined" && screen.width < 789) {
        return left ? 1 : 2;
      } else {
        if (left) {
          return this.left ? 1 : 2;
        } else {
          return this.left ? 2 : 1;
        }
      }
    },
    sanitize(url) {
      if (url[0] === "/") {
        return this.$withBase(url);
      } else {
        return url;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.card-body {
  padding-top: 220px;
}

.video-container > iframe {
  height: 200px;
  width: 100%;
  position: absolute;
  border-radius: calc(0.25rem - 1px);
}

.card-title {
  height: 2rem;
}
</style>