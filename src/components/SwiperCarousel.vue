<template>
<div class="div">


  <swiper
    :style="{
      '--swiper-navigation-color': '#000',
      '--swiper-pagination-color': '#000',
    }"
    style="width: 715px"
    :spaceBetween="1"
    :navigation="true"
    :centeredSlides="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mySwiper2"
  >
    <swiper-slide
    v-for="(bigImage, idx) in bigImages"
    :key="idx"
      ><img
        :src="bigImage.img" /></swiper-slide
    >
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :spaceBetween="1"
    :slidesPerView="3"
    :centeredSlidesBounds="true"
    :watchSlidesProgress="true"
    class="mySwiper"
    
  >
    <swiper-slide
    style="width: 250px"
    v-for="(smallImage, idx) in smallImages"
    :key="idx"
      ><img
        :src="smallImage.img" /></swiper-slide
      >
  </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/thumbs/thumbs.scss'

import SwiperCore, {
  Pagination,Navigation,Thumbs
} from 'swiper';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Thumbs]);

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
       smallImages: [
        {
          img: require("../assets/images/slider-1.png"),
        },
        {
          img: require("../assets/images/slider-1.png"),
        },
        {
          img: require("../assets/images/slider-1.png"),
        },
      ],
      //Картинки слайдера верхнего(основной который)
      bigImages: [
        {
          img: require("../assets/images/slider-1.png"),
        },
        {
          img: require("../assets/images/slider-1.png"),
        },
        {
          img: require("../assets/images/slider-1.png"),
        },
      ],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
  } 
}
</script>
<style scoped>

</style>