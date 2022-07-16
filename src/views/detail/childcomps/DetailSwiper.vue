<template>
  <!-- 详情页的轮播图展示 -->
  <swiper class="item">
    <swiper-item v-for="item in pics">
      <img :src="item.pics_big_url" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
// 如果用轮播图展示 导入封装好的轮播图
import {Swiper, SwiperItem} from 'components/common/swiper'


export default {

  components: {
    // 详情页轮播图
    Swiper,
    SwiperItem

  },
  // 获取Detail.vue中的 pics 图片数据  父传子
  props: {
    pics: {
      type: Array,
      default() {
        return []
      }
    }
  },  
}
</script>

<style scoped>
.item img {
  width: 100%;
  /* height: 400px; */
  overflow: hidden;
}
</style>