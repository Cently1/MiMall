/*
 * @Author: your name
 * @Date: 2020-05-10 19:10:17
 * @LastEditTime: 2020-05-28 20:38:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\main.js
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAxios from "vue-axios";
import axios from "axios";
import VueLazyLoad from "vue-lazyload";
// import env from './env'

const mock = false;
if (mock) {
  require("./mock/api");
}

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
  if (res.status == 0) {
    //0代表成功
    return res.data;
  } else if (res.status == 10) {
    //10代表未登录
    window.location.href = "/#/login";
  } else {
    alert(res.msg);
  }
});

//发请求之所以能够用this来进行调用，
//是因为vue-axios作用于对象挂载到vue实例上面去了，方便我们调用

//加载插件
Vue.use(VueAxios, axios);
Vue.use(VueLazyLoad, {
  loading: require("../src/assets/imgs/loading-svg/loading-bars.svg")
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
