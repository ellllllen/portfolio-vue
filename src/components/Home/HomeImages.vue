<template>
  <section class="home-images">
    <div
      v-bind:key="link.id"
      v-for="link in homeLinks"
      class="home-image"
      :class="link.class"
    >
      <a
        :href="link.link"
        v-on:mouseover="link.showText = true"
        v-on:mouseout="link.showText = false"
      >
        <span v-show="link.showText">{{ link.text }}</span>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      homeLinks: [
        {
          id: 1,
          class: "about-me",
          link: "/about-me",
          text: "About Me",
          showText: false
        },
        {
          id: 2,
          class: "cv",
          link: "/cv",
          text: "Curriculum Vitae",
          showText: false
        }
      ]
    };
  }
};
</script>
