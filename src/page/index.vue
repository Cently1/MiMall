<!--
 * @Author: your name
 * @Date: 2020-05-15 23:11:23
 * @LastEditTime: 2020-05-22 11:39:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mimall\src\page\index.vue
-->
<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
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
          ><img :src="item.img"
        /></a>
      </div>
      <div class="banner">
        <a href="/#/product/30"
          ><img src="../assets/imgs/banner-1.png"
        /></a>
      </div>
      <div class="product-box"></div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import ServiceBar from "./../components/ServiceBar";
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
      ]
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/mixin.scss";

.index {
  .swiper-box {
    .swiper-container {
      height: 451px;
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
}
</style>
