<!--
 * @Author: your name
 * @Date: 2020-06-04 17:38:47
 * @LastEditTime: 2020-06-05 17:35:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\components\ProductParam.vue
--> 
<template>
  <div class="nav-bar" :class="{ is_fixed: isFixed }">
    <div class="container">
      <div class="pro-title">
        {{title}}
      </div>
      <div class="pro-param">
        <a href="javascript:;">概述<span>|</span></a>
        <a href="javascript:;">参数<span>|</span></a>
        <a href="javascript:;">用户评价<span></span></a>
        <slot name="buy"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-bar",
  props: {
    title: String
  },
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.initHeight);
  },
  methods: {
    initHeight() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scoll", this.initHeight, false);
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid #e5e5e5;
  background: #fff;

  &.is_fixed {
    position: fixed;
    top: 0px;
    width: 100%;
    box-shadow: 0px 5px 5px #fff;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: 18px;
      color: #333;
      font-weight: bold;
    }
    .pro-param {
      font-size: 14px;
      span {
        margin: 0 10px;
      }
      a {
        color: #666;
      }
    }
  }
}
</style>
