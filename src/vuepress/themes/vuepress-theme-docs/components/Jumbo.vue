<template>
  <div>
    <br>
    <!-- <b-jumbotron class="jumbo" bg-variant="info" border-variant="dark" text-variant="white" fluid> -->
    <b-jumbotron class="jumbo" text-variant="black" fluid>
      <template slot="header">
        <span class="jumbo-header">AsTeRICS</span>
      </template>
      <template
        slot="lead"
      >Create Customized Low-Cost Assistive Technologies for People with Disabilities.</template>

      <p>Are you disabled and want to use a computer to work, browse the internet or write E-Mails?</p>
      <!-- <b-button-group> -->
      <b-button variant="primary" href="./solutions/">Discover Solutions</b-button>
      <b-button variant="info" href="get-started/">Get Started</b-button>
      <!-- </b-button-group> -->
      <!-- <b-img class="logo" left src="/assets/img/asterics-logo.svg" fluid alt="AsTeRICS Logo"></b-img> -->
    </b-jumbotron>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.jumbo {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  display: inline-block;
  width: 100%;
  // background-color: $info;
  // background-color: lighten(#075069, 10%);
  // background-color: #075069;
  // background-image: linear-gradient(#0ea1d2, #075069);
  // background: #075069;
  // background: linear-gradient(215deg, #0ea1d2, #075069);
  height: 400px;
  // background-color: #0ea1d2;
  background-color: rgb(233, 236, 239);
  // background-color: #075069;
  // background-image: linear-gradient(120deg, #075069, #0ea1d2 20%);
}

.jumbo-header {
  font-family: 'Open Sans';
  // font-family: 'ZCOOL KuaiLe';
  // font-family: 'Roboto';
  // font-family: 'Pacifico';
  // font-family: 'Quicksand';
  // font-family: 'Indie Flower';
  // font-family: 'Creepster';
  // font-family: 'Ewert';
  // font-family: 'Mogra';
  // font-family: 'Gloria Hallelujah';
  // font-family: 'Alfa Slab One';
  // font-family: 'Fredoka One';
  // font-family: 'Viga';
  // font-family: 'Amaranth';
  // font-family: 'Carter One';
  // font-family: 'Baloo';
}

.logo {
  position: absolute;
  // left: -60px;
  right: 60px;
  top: 80px;
  height: 400px;
  width: 35%;
  z-index: 1;
  visibility: hidden;
  // visibility: hidden;
  // position: absolute;
  // z-index: 0;
  // top: 90px;
  // left: -100px;
  // width: 60%;
}

@media screen and (max-width: 1300px) {
  .logo {
    visibility: hidden;
    // margin-top: 5%;
    // width: 55%;
    // transition: width 0.5s ease-out;
    // transition: margin 0.5s ease-out;
  }
}
</style>