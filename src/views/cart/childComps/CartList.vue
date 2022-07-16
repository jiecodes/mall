<template>
  <div class="cart-list">
    <!-- 滚动插件 -->
    <scroll class="content" ref="scroll">
      <!-- 购物车商品展示   :product="item" 把item传递给同级组件-->
      <cart-list-item v-for="(item,index) in cartList" :key="index" :product="item">

      </cart-list-item>
    </scroll>
  </div>
</template>

<script>
// 导入滚动插件
import Scroll from "components/common/better-scroll/Scroll.vue";

import CartListItem from "./CartListItem.vue";

// 导入getters.js的数据
import { mapGetters } from "vuex";

export default {
  name: 'CartList',
  // 组件
  components: {
    Scroll,

    CartListItem,
  },
  // 计算属性
  computed: {
    ...mapGetters(['cartList'])
  },
  // vue生命周期 钩子函数 keep-alive 组件激活时调用 切换组件会触发
  activated() {
    this.$refs.scroll.refresh();
  }

}
</script>

<style scoped>
  .content {
    height: calc(100vh - 44px - 49px );
    overflow: hidden;
  }
</style>