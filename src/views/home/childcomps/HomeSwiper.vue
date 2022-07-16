<template>
  <!-- 轮播图 -->
   <swiper>
      <swiper-item v-for="item in banners">
        <!-- coderwhy的接口轮播图 -->
        <a v-bind:href="item.link">
          <!-- @load="" 轮播图的图片加载完毕会触发的事件 -->
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
        <!-- <a :href="item.navigator_url">
          <img :src="item.image_src" alt="">
        </a> -->
      </swiper-item>
    </swiper>
</template>

<script>
// swiper 对象导入
import {Swiper, SwiperItem} from 'components/common/swiper'


export default {
  // 父传子
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    } 
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad() {
      if (!this.isLoad) {
        console.log('图片加载完毕了 @Load')
        // 把加载完图片后的事件 发送给home.vue    会发送四次,影响效率,只发送一次 在data()中设置 isLoad 然后if
        this.$emit('swiperImageLoad')
        this.isLoad = true
      }
    }
  }
}
</script>

<style>
 
</style>