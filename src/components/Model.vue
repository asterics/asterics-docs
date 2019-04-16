<template>
  <div>
    <b-card no-body class="overflow-hidden">
      <b-row no-gutters transition="model">
        <b-col>
          <b-card-img
            class="model-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiuQmVsgi-Kn2lhTrTFZXgaYjb5XrloLJ3wYgCnFtpsV5gIOre"
          ></b-card-img>
        </b-col>
        <b-col>
          <b-card-body>
            <b-card-title>
              Camera Mouse
              <Badge text="webcam" vertical="middle"></Badge>
            </b-card-title>
            <b-card-text title-tag="h6">
              Mouse control according to your head movements with configurable settings.
              <b-badge variant="primary">Read More</b-badge>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
      <div slot="footer" class="container">
        <b-button
          class="model-btn"
          variant="primary"
          v-b-tooltip.hover.bottom="'Make sure the ARE is up and running!'"
        >Start</b-button>
        <b-button class="model-btn" variant="info">Edit</b-button>
        <b-button class="model-btn" variant="info">Settings</b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
}

.model-btn {
  font-size: 1.4rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  flex-grow: 1;
  margin: 0px 2px;
  border-radius: 5px;
  box-shadow: 3px 2px #ccc;
}

.model-btn:focus {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15),
    0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 0.2rem rgba(44, 106, 128, 0.5);
}

.model-img {
  object-fit: cover;
  object-position: 0 100%;
}
</style>