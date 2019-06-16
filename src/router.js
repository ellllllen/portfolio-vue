import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import AboutMe from "@/views/AboutMe.vue";
import Cv from "@/views/Cv.vue";
import Articles from "@/views/Articles.vue";
import Error from "@/views/Error.vue";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about-me",
      name: "about",
      component: AboutMe
    },
    {
      path: "/cv",
      name: "cv",
      component: Cv
    },
    {
      path: "/articles",
      name: "articles",
      component: Articles
    },
    {
      path: "/articles/:id",
      name: "article",
      component: Articles
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
})