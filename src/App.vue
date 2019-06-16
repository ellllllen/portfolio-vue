<template>
  <v-app>
    <AppHeader/>
    <AppNav/>

    <v-content>
      <router-view></router-view>
    </v-content>

    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppNav from "@/components/AppNav.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "App",
  components: {
    AppHeader,
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
