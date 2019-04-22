import Vue from "vue";
import Router from "vue-router";

import Home from "@/pages/Home.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Cv from "@/pages/Cv.vue";
import Articles from "@/pages/Articles.vue";
import Error from "@/pages/Error.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
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
});
