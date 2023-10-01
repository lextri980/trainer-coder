import Vue from "vue";
import App from "./App.vue";
import router from "@/router/routes";

Vue.config.productionTip = false;

router.beforeEach((to, _, next) => {
  // if (to.meta.isAuth) {
  //   return;
  // } else {
  //   next();
  // }
  next()
});

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

export default app;
