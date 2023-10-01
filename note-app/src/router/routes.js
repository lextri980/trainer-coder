import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior() {
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
          meta: {
            isAuth: true
          },
        },
        {
          path: "detail/:id", // params
          name: "news-detail",
          component: () => import("@/pages/news/NewsDetail.vue"),
          meta: {
            isAuth: true
          },
        },
      ],
    },
    {
      path: "/post",
      component: () => import("@/layouts/BaseLayout.vue"),
      children: [
        {
          path: "list",
          name: "post-list",
          component: () => import("@/pages/posts/List.vue"),
          meta: {
            isAuth: true
          },
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
