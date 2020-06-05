/*
 * @Author: your name
 * @Date: 2020-05-10 19:10:17
 * @LastEditTime: 2020-06-05 20:31:41
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\router\index.js
 */ 
import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/page/home.vue";
import Index from "@/page/index.vue";
import Login from "@/page/login.vue";
import Product from "@/page/product.vue";
import Cart from "@/page/cart.vue";
import Order from "@/page/order.vue";
import Detail from "@/page/detail.vue";
// import Home from "@/page/home.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      redirect:'/index',
      children:[
        {
          path:'/index',
          name:'index',
          component:Index,
        },{
          path:'/product/:id',
          name:'product',
          component:Product,
        },{
          path:'/detail/:id',
          name:'detail',
          component:Detail
        }
      ]
    },{
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/cart',
      name:'cart',
      component:Cart
    },{
      path:'/order',
      name:'order',
      component:Order,
      
    }
  ]
});
