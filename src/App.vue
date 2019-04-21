<template>
  <div id="app">
    <AppHeader />
    <AppNav />
    <div class="outer-container">
      <router-view />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "@/components/app-header.vue";
import AppNav from "@/components/app-nav.vue";
import AppFooter from "@/components/app-footer.vue";

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
</style>
