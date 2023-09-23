import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { globalMinxin } from "@/vue-compositions/mixin";

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.mixin(globalMinxin)

const app = new Vue({
  render: (h) => h(App),
}).$mount("#app");

export default app;
