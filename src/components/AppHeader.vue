<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="headline">Ellen Merchant</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-slot:extension>
      <h4 class="display-1">
        Qualified web developer with over
        {{ moment().diff(moment([2010, 5, 1]), "years") }} years industry
        experience
      </h4>
    </template>
  </v-toolbar>
</template>