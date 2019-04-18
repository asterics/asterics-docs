<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters>
        <b-col :order="left ? 1 : 2">
          <b-card-img class="model-img" :src="image"></b-card-img>
        </b-col>
        <b-col :order="left ? 2 : 1">
          <b-card-body>
            <b-card-title class="model-title-container" style="padding-bottom: 0.5rem;">
              <span class="model-title-elements model-title model-btn-text">{{title}}</span>
              <div
                class="model-title-elements"
                style="display: flex; font-size: 1rem; margin-bottom: 0.5rem;"
              >
                <b-badge
                  v-for="tag in tags"
                  :href="tag.href"
                  :key="tag.text"
                  variant="secondary"
                  role="button"
                  class="model-title-tag model-text"
                  tabindex="0"
                >{{tag.text}}</b-badge>
              </div>
            </b-card-title>
            <b-card-text class="model-text" title-tag="h6">
              {{description}}
              <b-badge
                variant="primary"
                :href="docs"
                class="btn model-docs model-text"
                role="button"
                tabindex="0"
              >Read More</b-badge>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <div slot="footer" class="model-btn-container">
        <b-button
          v-if="modelType === 'model' || modelType === 'none'"
          class="model-btn"
          variant="primary"
          :disabled="modelType === 'none'"
          v-b-tooltip.hover.bottom="'Make sure the ARE is up and running!'"
          @click="start"
        >Start</b-button>
        <b-button
          class="model-btn model-btn-text"
          variant="primary"
          :href="open"
          target="_blank"
          v-else
        >Open</b-button>
        <b-button
          :disabled="webapp === ''"
          class="model-btn model-btn-text"
          variant="info"
          :href="webapp"
          target="_blank"
        >Settings</b-button>
        <b-button class="model-btn model-btn-text" variant="info" :href="edit" target="_blank">Edit</b-button>
      </div>
    </b-card>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Short Description"
    },
    tags: {
      type: Array,
      default: function() {
        return [];
      }
    },
    image: {
      type: String,
      default:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAKlBMVEXg4OD////j4+Pb29v7+/vi4uLx8fHs7Oz39/f09PTa2tru7u7m5ubX19cF3ejnAAABRElEQVR4nO3Z27JDMBiAURFVVN//dXfp+ZC6Y0//tS4zphPflARVBQAAAAAAAAAAAAAAAAAAAAAAAADAj6i/23p6G+jSkn7rKa6tXUyS0mHrSa4rp9QuHNKlJq8yl//i1GS/cEgbtsm4Kx0StEme7ipd4ZCgTQ7zrbT7fOoxm+TL+vL58ondZLwPd/2tQ+wm99HTRu4WJWaTapyTtNdTz/Pe9holaJNcnxrsh+vYZbt/iRK0SVUdj8fnf8k9StgmDyMPD4VzlNBN5qU4Pz0nT1EiN2mmdSe/vDroQzdppsX4NUlKOXCT5ry9f3t3ErhJU3qfFLdJMUncJuUkYZvkchJNNJlo8u58P6l3JXXoPVtRxCZ9PX5Tx/u+4zvgu2H5e3E7LP/MbxmWLowhXBIAAAAAAAAAAAAAAAAAAAAAAAAAgF/1BxZSCIBLTls7AAAAAElFTkSuQmCC"
    },
    model: {
      type: String,
      default: ""
    },
    grid: {
      type: String,
      default: ""
    },
    webapp: {
      type: String,
      default: ""
    },
    docs: {
      type: String,
      default: ""
    },
    left: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      webacs: "http://asterics.github.io/AsTeRICS/webapps/WebACS",
      are: "http://localhost:8081",
      aGrid: "https://asterics.github.io/AsTeRICS-Grid/package/static/#grid",
      deploy: null
    };
  },
  computed: {
    modelType: function() {
      let type;
      if (this.model !== "") {
        type = "model";
      } else if (this.grid !== "") {
        type = "grid";
      } else {
        type = "none";
      }
      return type;
    },
    open: function() {
      return `${this.aGrid}/${this.grid}`;
    },
    edit: function() {
      if (this.model !== "") {
        return `${this.webacs}/?areBaseURI=${this.are}&openFile=${this.model}`;
      } else {
        return `${this.aGrid}/edit/${this.grid}`;
      }
    }
  },
  methods: {
    start() {
      this.deploy(
        this.model,
        (data, status) => {
          console.log(data, status);
        },
        (status, error) => {
          console.log(error, status);
        }
      );
    }
  },
  mounted() {
    import("@asterics/web-app-utils").then(
      ({ deployModelFromWebserverApplySettingsAndStartModel }) => {
        this.deploy = deployModelFromWebserverApplySettingsAndStartModel;
      }
    );
  }
};
</script>

<style lang="scss" scoped>
/* .model-text {
  transition: font-size 1s ease-out;
  font-size: 1.5vw;
} */

@media screen and (max-width: 625px) {
  .model-text {
    font-size: 3vw;
  }
  .model-btn-text {
    font-size: 4vw;
  }
}

.model-btn-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.btn {
  cursor: pointer;
}

.model-btn {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  margin: 0px 2px;
  border-radius: 5px;
  box-shadow: 3px 2px 2px 0px #ccc;
}

.model-btn-text {
  text-decoration: none !important;
}

@media screen and (max-width: 425px) {
  .model-btn {
    transition: width 4s;
    width: 100%;
    margin: 5px 0 5px 0;
  }
}

.model-btn:focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(44, 106, 128, 0.5);
}

.model-btn:disabled {
  border: 1px solid darken(gray, 10%);
  background-color: darken(gray, 10%);
}

.model-title-container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  align-content: stretch;
}

.model-title-elements {
  /* border: 1px solid black; */
  /* display: flex; */
}

.model-title-tag {
  margin-right: 0.5rem;
  text-decoration: none;
  box-shadow: 1px 1px 2px 0px gray;
  padding-bottom: 6px;
  background-color: transparent;
  color: darken(#42b983, 20%);
  border: 0.15rem solid #42b983;
}

.model-title {
  padding-right: 1rem;
}

.model-img {
  object-fit: cover;
  object-position: 0 100%;
  height: 100%;
}

.model-docs {
  text-decoration: none;
  box-shadow: 1px 1px 2px 0px gray;
}
</style>