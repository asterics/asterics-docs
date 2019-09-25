<template>
  <b-card no-body>
    <b-row no-gutters>
      <div slot="header" class="header">
        <b-card-img-lazy class="card-image" :src="sanitize(image)"></b-card-img-lazy>
      </div>
      <b-card-body>
        <b-card-title class="card-text">
          <a :href="sanitize(link)">{{title}}</a>
        </b-card-title>
        <b-card-text>{{description}}</b-card-text>
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
.header {
  width: 100%;
}

.card-image {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.card-title {
  height: 2rem;
}

p.card-text {
  white-space: wrap !important;
}

// .element {
//   padding: 0;
//   margin: 0;
//   margin-bottom: 2rem;
// }

// @media screen and (min-width: 1290px) {
//   .group-element {
//     padding: 0 20px 0 0;
//   }

//   .group-element:nth-child(2n) {
//     padding: 0 0 0 20px;
//   }
// }
</style>