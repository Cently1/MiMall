<!--
 * @Author: your name
 * @Date: 2020-05-15 23:11:23
 * @LastEditTime: 2020-05-28 21:31:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\page\index.vue
-->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javascript:;">手机 电视卡</a>
              <div class="children">
                <ul v-for="(item, index) in menuList" :key="index">
                  <li v-for="(sub, index) in item" :key="index">
                    <a :href="sub ? '/#/product/' + sub.id : ''">
                      <img :src="sub ? sub.img : '21212'" alt="" />
                      {{ sub ? sub.name : "小米9" }}
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电视 盒子</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">笔记本 平板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">家电 插线板</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">出行 穿戴</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">耳机 音箱</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">电源 配件</a>
              <div class="children"></div>
            </li>
            <li class="menu-item">
              <a href="javascript:;">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in slideList" :key="index">
            <a :href="'/#/product/' + item.id">
              <img :src="item.img" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box">
        <a
          :href="'/#/product/' + item.id"
          v-for="(item, index) in adsList"
          :key="index"
          ><img v-lazy="item.img"
        /></a>
      </div>
      <div class="banner">
        <a href="/#/product/30"><img src="../assets/imgs/banner-1.png"/></a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper">
          <div class="banner-left">
            <a href="/#product/35/"
              ><img v-lazy="'https://halen-blog-1252760404.cos.ap-chengdu.myqcloud.com/img/20200528213101.jpg'"
            /></a>
          </div>
          <div class="list-box">
            <div class="list" v-for="(arr, i) in phoneList" :key="i">
              <div class="item" v-for="(item, j) in arr" :key="j">
                <span :class="{ 'new-pro': j % 2 == 0 }">新品</span>
                <div class="item-img">
                  <img v-lazy="item.mainImage" alt="" />
                </div>
                <div class="item-info">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.subtitle }}</p>
                  <p class="price" @click="addCart(item.id)">
                    {{ item.price }}元
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <service-bar></service-bar>
    <modal
      title="提示"
      sureText="查看购物车"
      btnType="3"
      modalType="middle"
      :showModal="showModal"
      v-on:submit="gotoCart"
      v-on:cancel="showModal = false"
    >
      <template v-slot:body>
        <p>商品添加成功!</p>
      </template>
    </modal>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
import Modal from "./../components/Modal";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "index",
  data() {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "42",
          img: require("../assets/imgs/slider/slide-1.jpg")
        },
        {
          id: "45",
          img: require("../assets/imgs/slider/slide-2.jpg")
        },
        {
          id: "46",
          img: require("../assets/imgs/slider/slide-3.jpg")
        },
        {
          id: "42",
          img: require("../assets/imgs/slider/slide-4.jpg")
        },
        {
          id: "42",
          img: require("../assets/imgs/slider/slide-5.jpg")
        }
      ],
      menuList: [
        [
          {
            id: 30,
            img: require("../assets/imgs/item-box-1.png"),
            name: "小米CC9"
          },
          {
            id: 31,
            img: require("../assets/imgs/item-box-2.png"),
            name: "小米8青春版"
          },
          {
            id: 32,
            img: require("../assets/imgs/item-box-3.jpg"),
            name: "Redmi K20 Pro"
          },
          {
            id: 33,
            img: require("../assets/imgs/item-box-4.jpg"),
            name: "移动4G专区"
          }
        ],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
      ],
      adsList: [
        {
          id: 33,
          img: require("../assets/imgs/ads/ads-1.png")
        },
        {
          id: 48,
          img: require("../assets/imgs/ads/ads-2.jpg")
        },
        {
          id: 45,
          img: require("../assets/imgs/ads/ads-3.png")
        },
        {
          id: 47,
          img: require("../assets/imgs/ads/ads-4.jpg")
        }
      ],
      phoneList: [],
      showModal: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.phoneList = [res.list.slice(0, 4), res.list.slice(4, 8)];
        });
    },
    addCart(id) {
      this.showModal = true;
      return;
      // this.$axios.post('/carts',{
      //   productId:id,
      //   selected:true
      // }).then(()=>{

      // }).catch(()=>{
      //   this.showModal=true;
      // })
    },
    gotoCart() {
      this.$router.push("/cart");
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";

.index {
  .swiper-box {
    .nav-menu {
      position: absolute;
      width: 264px;
      height: 451px;
      z-index: 9;
      box-sizing: border-box;
      padding: 26px 0;
      background-color: #55585a7a;
      .menu-wrap {
        .menu-item {
          height: 50px;
          line-height: 50px;
          a {
            position: relative;
            display: block;
            font-size: 16px;
            color: #fff;
            padding-left: 30px;
            &:after {
              position: absolute;
              right: 30px;
              top: 17.5px;
              content: " ";
              @include bgImg(10px, 15px, "../assets/imgs/icon-arrow.png");
            }
          }
          &:hover {
            background-color: #ff6600;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            width: 962px;
            height: 451px;
            background-color: #ffffff;
            position: absolute;
            top: 0;
            left: 264px;
            border: 1px solid #e5e5e5;
            ul {
              display: flex;
              justify-content: space-between;
              height: 75px;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                padding-left: 23px;
              }
              a {
                color: #333333;
                font-size: 14px;
              }
              img {
                width: 42px;
                height: 35px;
                vertical-align: middle;
                margin-right: 15px;
              }
            }
          }
        }
      }
    }
    .swiper-container {
      height: 451px;
      .swiper-button-prev {
        left: 274px;
      }
      img {
        width: 100%;
      }
    }
  }
  .ads-box {
    @include flex();
    margin-top: 14px;
    margin-bottom: 31px;
    a {
      width: 296px;
      height: 167px;

    }
  }
  .banner {
    margin-bottom: 50px;
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0px 50px;
    h2 {
      font-size: 22px;
      height: 21px;
      line-height: 21px;
      color: #333;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .banner-left {
        margin-right: 16px;
        img {
          width: 224px;
          height: 619px;
          &:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
            transform: translate3d(0, -2px, 0);
          }
        }
      }
      .list-box {
        .list {
          @include flex();
          width: 986px;
          margin-bottom: 14px;
          &:last-child {
            margin-bottom: 0;
          }
          .item {
            width: 236px;
            height: 302px;
            background-color: #fff;
            text-align: center;
            &:hover {
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
              transform: translate3d(0, -2px, 0);
            }
            span {
              display: inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: #fff;
              &.new-pro {
                background-color: #7ecf68;
              }
              &.kill-pro {
                background-color: #e82626;
              }
            }
            .item-img {
              img {
                height: 195px;
                width: 100%;
                margin-top: 10px;
              }
            }
            .item-info {
              h3 {
                font-size: 14px;
                color: #333;
                line-height: 14px;
                font-weight: bold;
              }
              p {
                color: #999;
                line-height: 13px;
                margin: 6px auto 13px;
              }
              .price {
                color: #f20a0a;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
                &:after {
                  @include bgImg(
                    22px,
                    22px,
                    "../assets/imgs/icon-cart-hover.png"
                  );
                  content: " ";
                  margin-left: 5px;
                  vertical-align: middle;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
