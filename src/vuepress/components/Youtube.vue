<template>
  <b-card>
    <div slot="header" class="video-container">
      <iframe
        frameborder="0"
        :src="`https://www.youtube${nocookie ? '-nocookie' : ''}.com/embed/${code}?rel=0`"
        allowfullscreen
      ></iframe>
    </div>
    <div class="body">
      <b-card-title>
        <div class="title">
          <a target="_blank" :href="`https://www.youtube.com/watch?v=${code}`">{{title}}</a>
        </div>
      </b-card-title>
      <b-card-text>
        <div class="text">{{description}}</div>
      </b-card-text>
    </div>
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
.card-header {
  padding: 0;
  border: none;
}

.video-container > iframe {
  height: 300px;
  width: 100%;
  position: absolute;
  border-radius: calc(0.25rem - 1px);
}

.body {
  padding-top: 300px;
}

.title {
  height: 1.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text {
  height: 50px;
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>