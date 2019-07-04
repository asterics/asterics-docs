<template>
  <b-col :class="{'element': true, 'group-element': !single}" :xl="single ? 12 : 6" cols="12">
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col cols="12" md="6" :order="order(true)">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              class="embed-responsive-item"
              :src="`https://www.youtube${nocookie ? '-nocookie' : ''}.com/embed/${code}?rel=0`"
              allowfullscreen
            ></iframe>
          </div>
        </b-col>
        <b-col cols="12" md="6" :order="order(false)">
          <b-card-body>
            <b-card-title>
              <a target="_blank" :href="`https://www.youtube.com/watch?v=${code}`">{{title}}</a>
            </b-card-title>
            <b-card-text>{{description}}</b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <br />
  </b-col>
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
.element {
  padding: 0;
  margin: 0;
  margin-bottom: 2rem;
}

@media screen and (min-width: 1290px) {
  .group-element {
    padding: 0 20px 0 0;
  }

  .group-element:nth-child(2n) {
    padding: 0 0 0 20px;
  }
}
</style>