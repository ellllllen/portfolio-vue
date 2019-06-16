<template>
  <v-footer height="auto" color="primary lighten-1">
    <v-layout justify-center row wrap>
      <v-btn
        v-for="link in links"
        :key="link.id"
        color="white"
        flat
        round
        :href="link.link"
        target="_blank"
      >
        <v-icon size="24px">{{ link.icon }}</v-icon>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: [
      {
        id: "link-0",
        name: "Github",
        link: "https://github.com/ellllllen",
        icon: "fab fa-github"
      },
      {
        id: "link-1",
        name: "Google Photos",
        link:
          "https://photos.google.com/share/AF1QipO8XyZh5_zenH-SIGZGL_g2wzn1oIsoVBeVKeZCrl_F_ub78VoDBCKskhy4p_T6Bg?key=aXppNmpYVWRjSTAtNThKcDRQVWUzSURLNmgwZ0VB",
        icon: "fas fa-image"
      },
      {
        id: "link-2",
        name: "Twitter",
        link: "https://twitter.com/ellllllen57",
        icon: "fab fa-twitter"
      },
      {
        id: "link-3",
        name: "Instagram",
        link: "https://www.instagram.com/ellllllen57/",
        icon: "fab fa-instagram"
      }
    ]
  })
};
</script>