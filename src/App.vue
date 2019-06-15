<template>
  <div id="app">
    <AppHeader/>
    <AppNav/>
    <div class="outer-container">
      <router-view/>
    </div>
    <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppHeader,
    AppNav,
    AppFooter
  }
};
</script>

<style lang="scss">
@import "@/assets/css/app.scss";
@import "../node_modules/vuetify/dist/vuetify.min.css";
</style>
