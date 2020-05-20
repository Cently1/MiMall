<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'App',
  data(){
    return{
      
    }
  },
  mounted(){
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

  }
}
</script>

<style>
@import './assets/scss/reset.scss'
</style>
