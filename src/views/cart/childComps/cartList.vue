<template>
  <div class="cart_list">
    <!-- 导入的 滚动 插件 -->
    <scroll class="content">
      <cart-list-item v-for="(item, index) in cartList1" :key="index" :product="item">

      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue'
// 导入 封装的商品的每一项
import cartListItem from './carLsitItem.vue'

// vuex getters中的 辅助函数  结合computed使用
import {mapGetters} from 'vuex'


export default {
  name: 'cartList',
  components: {
    Scroll,
    cartListItem,

  },
  computed: {
    // 通过vuex getters 调用数据
    ...mapGetters({
      cartList1: 'cartList'
    })
  },
}
</script>

<style scoped>
  .content {
    height: calc(100vh - 93px - 44px);
    overflow: hidden;
  }
</style>