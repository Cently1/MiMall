<!--
 * @Author: your name
 * @Date: 2020-05-15 23:12:45
 * @LastEditTime: 2020-05-29 16:17:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\components\NavFooter.vue
-->
<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="../assets/imgs/logo-footer.png" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.143399.xyz/" target="_blank">Cently主页</a><span>|</span> 
      <a href="https://www.143399.xyz/" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://www.143399.xyz/" target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://www.143399.xyz/" target="_blank">支付宝支付</a><span>|</span>
      <a href="https://www.143399.xyz/" target="_blank">Vue全栈课程</a><span>|</span>
    </div>
    <div class="copy-right">
      Copyright @2020 <a class="domain">143399.xyz</a> All Rights Resserved
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 1px solid #ff7301;
  background-color: #333;
  color: #999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copy-right {
    .domain {
      color: #ff6600;
    }
  }
}
</style>
