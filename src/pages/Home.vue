<template>
  <div>
    <section class="home-images">
      <NavImage
        v-bind:navLink="homeLink"
        v-bind:key="homeLink.id"
        v-for="homeLink in homeLinks"
      />
    </section>
    <Activities />
  </div>
</template>

<script>
import NavImage from "@/components/NavImage.vue";
import Activities from "@/components/Activities.vue";

export default {
  name: "home",
  components: { NavImage, Activities },
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
