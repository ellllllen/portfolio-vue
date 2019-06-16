<template>
  <v-app>
    <AppHeader/>
    <AppNav/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <AppFooter/>
    <AppImages/>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppImages from "@/components/AppImages.vue";
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppImages,
    AppNav,
    AppFooter
  },
  data() {
    return {
      //
    };
  }
};
</script>
