<template>
  <div>
    <v-tabs fixed dark fixed-tabs>
      <v-tabs-slider color="secondary"></v-tabs-slider>
      <v-tab v-for="item in navLinks" :key="item.id" :to="item.link">{{ item.name }}</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
      navLinks: [
        {
          id: "nav-0",
          name: "Home",
          link: "/"
        },
        {
          id: "nav-1",
          name: "About Me",
          link: "/about-me"
        },
        {
          id: "nav-2",
          name: "Curriculum Vitae",
          link: "/cv"
        },
        {
          id: "nav-3",
          name: "Articles",
          link: "/articles"
        }
      ]
    };
  }
};
</script>

