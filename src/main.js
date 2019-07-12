// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import Global from './components/Global'
import login from './components/Login'

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = Global;
Vue.prototype.$ajax = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
// new Vue({
//   el: '#login',
//   router,
//   components: { login },
//   template: '<login/>'
// });
