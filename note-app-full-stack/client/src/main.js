import Vue from 'vue'
import App from './App.vue'
import router from "@/router/routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

router.beforeEach((_, __, next) => {
  // if (to.meta.isAuth) {
  //   return;
  // } else {
  //   next();
  // }
  next()
});

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

export default app