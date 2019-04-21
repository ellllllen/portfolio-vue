import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      meta: {
        layout: "no-sidebar"
      },
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
      path: "/articles/:id",
      name: "cv",
      component: () => import("@/pages/Article.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/Error.vue").default
    }
  ]
});
