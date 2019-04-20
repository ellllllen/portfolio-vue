<template>
  <div id="app">
    <AppHeader />
    <AppNav />
    <HomeImages />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import HomeImages from './components/Home/HomeImages.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppNav,
    HomeImages
  }
}
</script>

<style lang="scss">
@import url('./assets/css/app.scss');
</style>
