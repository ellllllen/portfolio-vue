<template>
  <div class="home-image" :class="navLink.class">
    <a
      :href="navLink.link"
      v-on:mouseover="navLink.showText = true"
      v-on:mouseout="navLink.showText = false"
    >
      <span v-show="navLink.showText">{{ navLink.text }}</span>
    </a>
  </div>
</template>

<script>
export default {
  props: ["navLink"]
};
</script>
