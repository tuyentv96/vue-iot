<template>
  <div id="app">
    <l-header class="header__banner" />
    <!-- <l-header class="header__banner" /> -->

    <div id="main">
      <l-main />
    </div>
  </div>
</template>

<script>
import LMain from "./layout/Main.vue";
import LHeader from "./layout/Header.vue";
export default {
  name: "app",
  components: {
    [LMain.name]: LMain,
    [LHeader.name]: LHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#main {
  margin: 0 15%;
}
</style>
