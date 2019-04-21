<template>
  <div class="home-image" :class="navLink.class">
    <router-link
      class="nav-link"
      tag="a"
      :to="navLink.link"
      @mouseover.native="navLink.showText = true"
      @mouseout.native="navLink.showText = false"
    >
      <span v-show="navLink.showText">{{ navLink.text }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["navLink"]
};
</script>
