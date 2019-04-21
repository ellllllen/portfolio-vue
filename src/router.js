import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: require("@/pages/home.vue").default
    },
    {
      path: "/about-me",
      name: "about",
      component: () => import("@/pages/about-me.vue")
    },
    {
      path: "/cv",
      name: "cv",
      component: () => import("@/pages/cv.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: () => import("@/pages/articles.vue")
    },
    {
      path: "/articles/:id",
      name: "article",
      component: () => import("@/pages/articles.vue")
    },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/error.vue").default
    }
  ]
});
