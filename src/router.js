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
      meta: {
        layout: "no-sidebar"
      },
      component: () => import("@/pages/AboutMe.vue")
    },
    {
      path: "/cv",
      name: "cv",
      meta: {
        layout: "no-sidebar"
      },
      component: () => import("@/pages/Cv.vue")
    }
    // {
    //   path: "*",
    //   name: "404*",
    //   component: require("@/pages/404.vue").default
    // }
  ]
});
