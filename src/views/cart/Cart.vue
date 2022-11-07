<template>
  <div>
    <!-- 最上面的导航 -->
    <nav-bar class="nav_bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
     <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
// 导入 最上面的导航
import NavBar from 'components/common/navbar/NavBar.vue'
// 导入 商品列表
import cartList from './childComps/cartList.vue'
// 导入 最底部的全选
import cartBottomBar from './childComps/cartBottomBar.vue'

// vuex getters中的 辅助函数  结合computed使用
import {mapGetters} from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    cartList,
    cartBottomBar,
  },
  computed: {
    cartLength() {
      // 购物车({{cartLength}}) 插值表达式 里面的内容封装到 计算属性里面
      // return this.$store.state.cartList.length
      // 结合vuex中的 计算属性
      return this.$store.getters.cartLength
    }
    // 根据 vuex getters中的mapGetters  购物车({{cartLength}})换成 购物车({{length}}) 也可以实现显示商品数量
    // ...mapGetters({
    //   length: 'cartLength',
      //   list: 'cartList'
      // })
  }
}
</script>

<style scoped>
  .nav_bar {
    color: var(--color);
    background-color: #fff;
  }
</style>