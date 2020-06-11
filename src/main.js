import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import VueAxios from "vue-axios";
import axios from "axios";
import VueCookie from "vue-cookie";
import VueLazyLoad from "vue-lazyload";
import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// import env from './env'

const mock = false;
if (mock) {
  require("./mock/api");
}

Vue.config.devtools = true;

//生产环境
Vue.config.productionTip = false;
//根据前端的跨域方式做调准
// axios.defaults.baseURL='/api';

//接口拦截
// axios.interceptors.response.use(function(response) {
//   let res = response.data;
//   if (res.status == 0) {
//     return res.data;
//   } else if (res.status == 10) {
//     window.location.href = "/#/login";
//   } else {
//     alert(res.msg);
//   }
// });

//根据前端的跨域方式做调准 /a/b: /api/a/b => /a/b
axios.defaults.baseURL = "/api";
axios.defaults.timeout = 8000;

// axios.defaults.baseURL=env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response) {
  let res = response.data;
  let path = location.hash;
  if (res.status == 0) {
    //0代表成功
    return res.data;
  } else if (res.status == 10) {
    //10代表未登录
    if (path != "#/index") {
      window.location.href = "/#/login";
    }
    return Promise.reject(res);
  } else {
    alert(res.msg);
    return Promise.reject(res);
  }
});

//发请求之所以能够用this来进行调用，
//是因为vue-axios作用于对象挂载到vue实例上面去了，方便我们调用

//加载插件
Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(VueLazyLoad, {
  loading: require("../src/assets/imgs/loading-svg/loading-bars.svg")
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  store,
  router,
  components: { App },
  template: "<App/>"
});
