<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">有品</a>
          <a href="javascript:;">金融</a>
          <a href="javascript:;">小爱开放平台</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{ username }}</a>
          <a href="javascript:;" v-if="!username" @click="login">登录</a>
          <a href="javascript:;">我的订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"
            ><span class="icon-cart"></span>购物车</a
          >
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index" class=""></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li
                  class="product"
                  v-for="(item, index) in phoneList"
                  :key="index"
                >
                  <a target="_blank" :href="'/#/product/' + item.id">
                    <div class="pri-img">
                      <img :src="item.mainImage" :alt="item.subtitle" />
                    </div>
                    <div class="pro-name">{{ item.name }}</div>
                    <div class="pro-price">{{ item.price | currency }}</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1299元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">3399元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">2799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">5799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4a76ee684e51f0ee531ef3dc7f0aeaf.png?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">2799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cff2977b8aab1e43b94b2f00083f4ae1.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1299元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/742a328bdaa242aea89ec2a9c8661013.jpg?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">3399元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png?thumb=1&w=160&h=110"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">2799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img
                        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/82ddffd7562c54f9166fa876c143ff22.png?thumb=1&w=160&h=110&f=webp&q=90"
                      />
                    </div>
                    <div class="pro-name">小米CC9</div>
                    <div class="pro-price">5799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-1.jpg" />
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-2.jpg" />
                    </div>
                    <div class="pro-name">Redmi 红米电视 70英寸</div>
                    <div class="pro-price">2999元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-3.png" />
                    </div>
                    <div class="pro-name">Redmi 智能电视 MAX 98"</div>
                    <div class="pro-price">¥19999元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-4.jpg" />
                    </div>
                    <div class="pro-name">小米全面屏电视 55英寸</div>
                    <div class="pro-price">9399元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-5.jpg" />
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">2799元</div>
                  </a>
                </li>
              </ul>
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pri-img">
                      <img src="../assets/imgs/nav-img/nav-3-6.png" />
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">5799元</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>笔记本</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>家电</span>
            <div class="children"></div>
          </div>
          <div class="item-menu">
            <span>路由器</span>
            <div class="children"></div>
          </div>
        </div>
        <div class="header-search">
          <div class="warpper">
            <input type="text" name="keyword" />
            <a herf="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "nav-header",
  data() {
    return {
      username: "jack",
      phoneList: []
    };
  },
  filters: {
    currency(val) {
      if (!val) return "0.00";
      return "￥" + val.toFixed(2) + "元";
    }
  },
  mounted() {
    this.getProductList();
  },
  methods: {
    getProductList() {
      this.axios
        .get("/products", {
          params: {
            pageSize: 6
          }
        })
        .then(res => {
          if (res.list.length >= 6) {
            this.phoneList = res.list.slice(4, 10);
          }
        });
    },
    login() {
      this.$router.push("/login");
    },
    goToCart() {
      this.$router.push("/cart");
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";

.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background-color: #333;
    color: #b0b0b0;
    .container {
      @include flex();
      a {
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #fff;
        .icon-cart {
          @include bgImg(16px, 12px, "../assets/imgs/icon-cart-checked.png");
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            @include bgImg(55px, 55px, "../assets/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "../assets/imgs/mi-home.png", 55px);
          }
          &:hover:before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        display: inline-block;
        width: 603px;
        padding-left: 209px;
        .item-menu {
          display: inline-block;
          color: #333;
          font-weight: bold;
          font-size: 16px;
          line-height: 112px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              background-color:#fff;
              height: 220px;
              opacity: 1;
            }
          }
          .children {
            position: absolute;
            top: 112px;
            left: 0;
            overflow: hidden;
            width: 1226px;
            height: 0px;
            opacity: 0;
            border-top: 1px solid #e5e5e5;
            box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition: all 0.5s;
            .product {
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a {
                display: inline-block;
              }
              img {
                width: auto;
                height: 110px;
                margin-top: 26px;
              }
              .pro-img {
                height: 137px;
              }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: " ";
                position: absolute;
                top: 28px;
                right: 0px;
                border-left: 1px solid $colorF;
                width: 1px;
                height: 100px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .warpper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border: none;
            border-right: 1px solid #e0e0e0;
            box-sizing: border-box;
            width: 264px;
            height: 50px;
            padding-left: 14px;
          }
          a {
            @include bgImg(18px, 18px, "../assets/imgs/icon-search.png");
            margin-left: 17px;
          }
        }
      }
    }
  }
}
</style>
