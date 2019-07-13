import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './Storepackaing';
import axios from '../src/tools/axios';
import '../node_modules/reset-css/reset.css';
import wxSDK from 'weixin-js-sdk';
import 'lib-flexible/flexible';

Vue.config.productionTip = false;
Vue.prototype.wxSDK = wxSDK;
Vue.prototype.$http = axios;
console.log(wxSDK)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
