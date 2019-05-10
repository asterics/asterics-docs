<template>
  <div>
    <div id="model">
      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col :order="left ? 1 : 2">
            <b-card-img-lazy class="model-img" :src="sanitize(image)"></b-card-img-lazy>
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
                    :href="sanitize(tag.href)"
                    :key="tag.text"
                    variant="secondary"
                    role="button"
                    class="model-title-tag model-text"
                    tabindex="0"
                  >
                    <font-awesome-icon icon="tag"/>
                    {{tag.text}}
                  </b-badge>
                  <b-badge
                    v-for="disability in disabilties"
                    :href="sanitize(disability.href)"
                    :key="disability.text"
                    variant="info"
                    role="button"
                    class="model-title-tag-accessibility model-text"
                  >
                    <font-awesome-icon icon="universal-access"/>
                    <span>{{disability.text}}</span>
                  </b-badge>

                  <b-badge
                    v-for="sys in os"
                    :key="sys"
                    variant="info"
                    role="button"
                    class="model-title-tag-platform model-text"
                  >
                    <font-awesome-icon icon="universal-access"/>
                    <span>{{sys}}</span>
                  </b-badge>
                </div>
              </b-card-title>
              <b-card-text class="model-text" title-tag="h6">
                {{description}}
                <b-badge
                  variant="primary"
                  :href="sanitize(docs)"
                  class="btn model-docs model-text"
                  role="button"
                  tabindex="0"
                >Read More</b-badge>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
        <div slot="footer">
          <div class="model-btn-container">
            <b-button
              v-if="modelType === 'model' || modelType === 'none'"
              class="model-btn model-btn-text"
              variant="primary"
              :disabled="modelType === 'none'"
              v-b-tooltip.hover.bottom="'Make sure the ARE is up and running!'"
              @click="start"
            >Start</b-button>
            <b-button
              class="model-btn model-btn-text"
              variant="primary"
              :href="sanitize(open)"
              target="_blank"
              v-else
            >Open</b-button>
            <b-button
              :disabled="webapp === ''"
              class="model-btn model-btn-text"
              variant="info"
              :href="sanitize(webapp)"
              target="_blank"
            >Settings</b-button>
            <b-button
              class="model-btn model-btn-text"
              variant="info"
              :href="edit"
              target="_blank"
            >Edit</b-button>
            <b-button
              :disabled="modelType === 'none'"
              class="model-btn-icon model-btn-text model-btn-settings"
              @click="toggleSettings"
              variant="info"
            >
              <font-awesome-icon class="fa-2x" icon="cog"/>
            </b-button>
          </div>
          <div v-if="showSettings">
            <ModelInput
              v-if="modelType === 'model'"
              label="ARE"
              v-model="settings.are"
              :defaults="settings.default.are"
            >
              <template slot="tool-tip">
                <strong>URL</strong> to use for
                <em style="white-space: nowrap;">AsTeRICS ARE</em>.
              </template>
            </ModelInput>

            <ModelInput
              v-if="modelType === 'model'"
              label="WebACS"
              v-model="settings.webacs"
              :defaults="settings.default.webacs"
            >
              <template slot="tool-tip">
                <strong>URL</strong> to use for
                <em style="white-space: nowrap;">AsTeRICS WebACS</em>.
              </template>
            </ModelInput>

            <ModelInput
              v-if="modelType === 'grid'"
              label="Grid"
              v-model="settings.grid"
              :defaults="settings.default.grid"
            >
              <template slot="tool-tip">
                <strong>URL</strong> to use for
                <em style="white-space: nowrap;">AsTeRICS Grid</em>.
              </template>
            </ModelInput>
          </div>
        </div>
      </b-card>
    </div>
    <b-toast auto-hide-delay="5000" :id="startInfo.id" variant="info" solid>
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <b-img blank blank-color="#42b983" class="mr-2" width="12" height="12"></b-img>
        <strong class="mr-auto">Firefox User Information</strong>
      </div>
      <div>
        Please make sure that you've added an exception for the ARE webserver.
        Make sure an
        <strong>ARE</strong> is running and open the link
        <a :href="areWebserver" target="_blank">{{areWebserver}}</a> to add an exception for the local webserver.
      </div>
    </b-toast>
  </div>
</template>

<script>
import bowser from "bowser";
import platform from "platform";
import ModelInput from "./ModelInput.vue";
export default {
  components: {
    ModelInput
  },
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
    disabilties: {
      type: Array,
      default: function() {
        return [];
      }
    },
    os: {
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
      startInfo: {
        show: true,
        id: "show-info"
      },
      areWebserver: "https://127.0.0.1:8083/",
      settings: {
        default: {
          webacs: "http://webacs.asterics.eu/",
          are: "http://127.0.0.1:8081",
          areSecure: "https://127.0.0.1:8083",
          grid: "https://grid.asterics.eu/package/static/#grid"
        },
        webacs: null,
        are: null,
        grid: null
      },
      show: {
        grid: false
      },
      deploy: null,
      setURI: null,
      browser: "default",
      showSettings: false,
      securedConnection: false,
      showInfo: false
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
      return `${this.settings.grid}/${this.grid}`;
    },
    edit: function() {
      if (this.model !== "") {
        return `${this.settings.webacs}?areBaseURI=${
          this.settings.are
        }&openFile=${this.model}`;
      } else {
        return `${this.settings.grid}/edit/${this.grid}`;
      }
    }
  },
  methods: {
    start() {
      this.setURI(`${this.settings.are}/rest/`);
      this.deploy(
        this.model,
        {},
        (data, status) => {
          console.log(data, status);
        },
        (status, error) => {
          console.log(status, error);

          if (error == "Internal Server Error") {
            if (!this.os.includes(platform.os.family)) {
              this.$bvToast.toast(
                `This plugin is only supported on: ${this.os.join(" ")}. ${
                  platform.os.family
                } is unfortunately not included.`,
                {
                  title: "Unsupported Operating System",
                  variant: "info",
                  solid: true
                }
              );
            }
          }

          if (error == "Network Error") {
            if (this.browser === "Firefox") {
              // this.makeToast();
              this.$bvToast.show(this.startInfo.id);
            }
          }
        }
      );
    },
    sanitize(url) {
      if (url[0] === "/") {
        return this.$withBase(url);
      } else {
        return url;
      }
    },
    toggleSettings() {
      this.showSettings = !this.showSettings;
    },
    loadDefault(setting) {
      this.settings[setting] = this.settings.default[setting];
    },
    clearSetting(setting) {
      this.settings[setting] = "";
    },
    generateId() {
      // generate "unique" ids
      this.startInfo.id =
        "_" +
        Math.random()
          .toString(36)
          .substr(2, 9);
    }
  },
  mounted() {
    import("@asterics/web-app-utils").then(
      ({ deployModelFromWebserverApplySettingsAndStartModel, setBaseURI }) => {
        this.deploy = deployModelFromWebserverApplySettingsAndStartModel;
        this.setURI = setBaseURI;
      }
    );
  },
  beforeMount() {
    this.browser = bowser
      .getParser(window.navigator.userAgent)
      .getBrowserName();

    if (this.browser === "Firefox") {
      this.securedConnection = true;
      this.settings["are"] = this.settings.default["areSecure"];
    } else {
      this.securedConnection = false;
    }
  },
  created() {
    this.generateId();
    // load defaults
    for (let setting of ["webacs", "are", "grid"]) {
      this.settings[setting] = this.settings.default[setting];
    }
  }
};
</script>

<style lang="scss" scoped>