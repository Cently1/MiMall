/*
 * @Author: your name
 * @Date: 2020-05-10 19:10:17
 * @LastEditTime: 2020-05-14 22:52:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\main.js
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.config.productionTip = false
//根据前端的跨域方式做调准
// axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;

//根据环境变量获取不同的请求地址
// axios.defaults.baseURL = "/api";

//接口拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login';
  }else{
    alert(res.msg);
  }
})
Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
