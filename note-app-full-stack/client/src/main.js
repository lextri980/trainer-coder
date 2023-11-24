import router from "@/router/routes";
import store from "@/store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { setInteractionMode } from "vee-validate";
import Vue from "vue";
import Toast from "vue-toastification";
import App from "./App.vue";
import { globalMixin } from "./mixin";

Vue.config.productionTip = false;
setInteractionMode("passive");

const options = {};

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import "vue-toastification/dist/index.css";
// Make BootstrapVue available throughout your project

import "@/assets/scss/global.scss";

Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(Toast, options);
Vue.mixin(globalMixin)

router.beforeEach((to, _, next) => {
  const localToken = localStorage.getItem("token");

  if (localToken) {
    store.dispatch("verifyAuth", localToken);

    if (to.name.includes("login") || to.name.includes("register")) {
      next({ name: "note-list" });
    } else {
      next();
    }
  } else {
    if (to.meta.auth) {
      next({ name: "login" });
    } else {
      next();
    }
  }
  next();
});

const app = new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

export default app;
