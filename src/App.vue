<template>
  <div id="app">
    <Head></Head>
    <keep-alive>
      <router-view :key="this.$route.path"></router-view>
    </keep-alive>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from "./components/Head.vue";
import Foot from "./components/Foot.vue";

export default {
  name: "app",
  components: {
    Head,
    Foot
  },
  created() {
    // console.log(Webflow.redraw.on())
    // Webflow.redraw()
  }
};
</script>

<style>
#app {
  /* font-family: "Avenir", Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
