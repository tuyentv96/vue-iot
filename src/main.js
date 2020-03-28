import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filter";

import ElementUI from "element-ui";
import "./index.css";
import "element-ui/lib/theme-chalk/index.css";
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

// configure language
locale.use(lang)
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
