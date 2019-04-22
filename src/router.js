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
      component: require("@/pages/AboutMe.vue")
    },
    {
      path: "/cv",
      name: "cv",
      component: require("@/pages/Cv.vue")
    },
    {
      path: "/articles",
      name: "articles",
      component: require("@/pages/Articles.vue")
    },
    // {
    //   path: "/articles/:id",
    //   name: "article",
    //   component: require("@/pages/Articles.vue")
    // },
    {
      path: "*",
      name: "404*",
      component: require("@/pages/Error.vue").default
    }
  ]
});
