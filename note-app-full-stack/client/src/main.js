import Vue from 'vue'
import App from './App.vue'
import router from "@/router/routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { setInteractionMode } from "vee-validate";
import Toast from "vue-toastification";

Vue.config.productionTip = false
setInteractionMode("passive");

const options = {}

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "vue-toastification/dist/index.css";
// Make BootstrapVue available throughout your project

import "@/assets/scss/global.scss";

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Toast, options);

router.beforeEach((_, __, next) => {
  // if (to.meta.isAuth) {
  //   return;
  // } else {
  //   next();
  // }
  next()
});

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App),
}).$mount('#app')

export default app