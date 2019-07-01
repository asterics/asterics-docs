<template>
  <b-container>
    <b-row class="container">
      <Partner
        class="element"
        v-for="partner of partners"
        :image="partner.image"
        :alt="partner.alt"
      />
    </b-row>
  </b-container>
</template>

<script>
import Partner from "./Partner.vue";
export default {
  data() {
    return {
      partners: [
        {
          image: "https://asterics.github.io/asterics-docs/img/ma23_logo.jpg",
          alt: "MA23, City of Vienna - Logo"
        },
        {
          image:
            "https://asterics.github.io/asterics-docs/img/torades_logo_mini-300x120.png",
          alt: "ToRaDes - Project Logo"
        },
        {
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/FH_Technikum_Wien_logo.svg",
          alt: "UAS Technikum Wien - Logo"
        },
        {
          image: "https://ki-i.at/fileadmin/template/img/ki-i_logo.png",
          alt: "KI-I"
        },
        {
          image:
            "https://embsys.technikum-wien.at/projects/studyathome-intl/studyAThome_noir.svg",
          alt: "StudyATHome Internationally - Project Logo"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  justify-content: space-around;
  padding-top: 1rem;
  align-items: center;
}

.element {
  padding-bottom: 2rem;
  // border: 1px solid gray;
}
</style>