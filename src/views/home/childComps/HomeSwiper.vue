<template>
  <div>
    <!-- 第二层封装的轮播图 -->
    <swiper>
      <swiper-item v-for="item in banners" :key="item.index">
        <a v-bind:href="item.link">
          <img v-bind:src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'

export default {
  name:'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
    }
  }
}
</script>

<style>

</style>