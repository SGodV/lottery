// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import qs from 'qs'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Global from './components/Global'

Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.prototype.GLOBAL = Global;
// Vue.prototype.$router = router;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$ajax = axios;
Vue.prototype.$qs = qs;

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

router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    // console.log("进");
    // console.log(typeof (Vue.prototype.GLOBAL.userInfo.userEmail));
    if(typeof(Vue.prototype.GLOBAL.userInfo.userEmail) === 'undefined'){ //判断本地是否存在access_token
      // console.log("进来了");
      next({
        name: 'Empty'
      });
      Vue.prototype.GLOBAL.needLogin = true;
      next({
        name: 'Logo',
        params: {
          needLogin: true
        }
      });
    }else {
      next();
    }
  }
  else {
    next();
  }
});
