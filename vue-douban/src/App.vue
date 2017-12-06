<template>
  <div id="app">
    <router-view/>
    <Copyright></Copyright>

  </div>
</template>

<script>
import Copyright from "./views/Copyright";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Copyright
  }
};
</script>

<style>
@import "./assets/style.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
