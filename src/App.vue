<template>
  <div id="app">
    <AppHeader />
    <AppNav />
    <div class="outer-container">
      <HomeImages />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
import HomeImages from "./components/Home/HomeImages.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppNav,
    AppFooter,
    HomeImages
  }
};
</script>

<style lang="scss">
@import "./assets/css/app.scss";
</style>
