<template>
  <b-card>
    <div slot="header">
      <b-card-img-lazy class="image" :src="sanitize(image)"></b-card-img-lazy>
    </div>
    <b-card-title>
      <div class="title">
        <a :href="sanitize(link)">{{title}}</a>
      </div>
    </b-card-title>
    <b-card-text>
      <div class="text">{{description}}</div>
    </b-card-text>
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
    link: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    order: function(placeLeft) {
      if (typeof screen !== "undefined" && screen.width < 789) {
        return this.left ? 1 : 2;
      } else {
        if (placeLeft) {
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

.image {
  height: 300px;
  width: 100%;
  object-fit: cover;
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