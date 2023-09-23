import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from) {
    console.log(from, to);
    return { x: 0, y: 0, behavior: "smooth" };
  },
  routes: [
    {
      path: "/",
      redirect: "/dashboard",
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("@/pages/Dashboard.vue"),
      meta: {},
    },
    {
      path: "/news",
      component: () => import("@/layouts/BaseLayout.vue"),
      children: [
        {
          path: "list",
          name: "news-list",
          component: () => import("@/pages/news/NewsList.vue"),
          meta: {},
        },
        {
          path: "detail/:id", // params
          name: "news-detail",
          component: () => import("@/pages/news/NewsDetail.vue"),
          meta: {},
        },
      ],
    },
    {
      path: "*",
      name: "error",
      component: () => import("@/pages/Error"),
    },
  ],
});

export default router;
