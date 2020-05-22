import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/page/home.vue";
import Index from "@/page/index.vue";
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
          components:Detail
        }
      ]
    },{
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
