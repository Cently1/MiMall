<!--
 * @Author: your name
 * @Date: 2020-05-10 19:10:17
 * @LastEditTime: 2020-05-29 22:26:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: "App",
  data() {
    return {};
  },
  mounted() {
    this.getUser();
    this.getCartCount();
    // storage.setItem('hh',100);
    // storage.setItem('user',{a:1});
    // storage.setItem('abc',{a:1},'user');
    // storage.clear('a','user')

    //本地请求加载静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res=res;
    // })

    //通过easy-mock
    // this.axios.get('/user/login').then((res)=>{
    //   console.log("我这边");

    //   this.res=res;
    // })
  },
  methods: {
    getUser() {
      this.axios.get("/user").then(res => {
        //to-do保存到vuex里面
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res) => {
        this.$store.dispatch("saveCartCount", res);
      });
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/reset.scss";
@import "./assets/scss/config.scss";
@import "./assets/scss/button.scss";
</style>
