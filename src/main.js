import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import './assets/font/icon-font/iconfont.css';
import Vant from 'vant';
import '../node_modules/vant/lib/index.css'


Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
