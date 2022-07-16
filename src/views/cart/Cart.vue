<template>
  <!-- 购物车 cart -->
  <div class="cart">
    <!-- 导航栏 -->
    <nav-bar class="nav-bar">
      <!-- <div slot="center">购物车({{$store.state.cartList.length}})</div>  -->
      <div slot="center">购物车({{cartLength}})</div> 
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//                                                  components
import NavBar from 'components/common/navbar/NavBar.vue'

//                                                  childComps
import CartList from './childComps/CartList.vue'
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from 'vuex' 


export default {
  name: 'Cart',

  components: {
    NavBar,

    CartList,
    CartBottomBar,
  },
  // 计算属性
  computed: {
    // cartLength() {
    //   return this.$store.state.cartList.length
    // }
    // 抽离到getters.js   俩种写法
    ...mapGetters(['cartLength','cartList'])
    // ...mapGetters([
    //   length: 'cartLength',
    //   list: 'cartList',
    // ])
    
  }
}

</script>

<style scoped>
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>