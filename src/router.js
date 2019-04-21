import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/pages/Home.vue").default
    },
    {
      path: "/about-me",
      name: "about",
      component: () => import("@/pages/AboutMe.vue")
    },
    {
      path: "/cv",
      name: "cv",
      component: () => import("@/pages/Cv.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/pages/Articles.vue")
    },
    {
      path: "/articles/:id",
      name: "article",
      component: () => import("@/pages/Articles.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/Error.vue").default
    }
  ]
});
