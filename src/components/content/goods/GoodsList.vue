<template>
  <div class="goods">
    <!-- {{goods}} -->
    <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
// 导入组件
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: {
    GoodsListItem,
  },
  // 父传子           home.vue 通过:goods="goods" 传递goods数据
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>
  .goods {
    /* 1 俩边显示 */
    display: flex;
    /* 不让一行显示 根据宽度决定*/
    flex-wrap: wrap;
    /* 每一份都是 左右居中 */
    justify-content: space-evenly;
  }
</style>