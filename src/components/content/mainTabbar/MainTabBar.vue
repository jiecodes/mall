<template>
  <!-- 主要的tabbar  MainTabBar.vue -->
      <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
      <!-- ~assets 路径配置在 build webpack.base.config.js      使用时:html 别名前面加 ~  -->
        <img slot="item-icon" src="~assets/image/tabbar/_home.png" alt="">
        <img slot="item-icon-active" src="@/assets/image/tabbar/home.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="@/assets/image/tabbar/_img.png" alt="">
        <img slot="item-icon-active" src="@/assets/image/tabbar/img.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="@/assets/image/tabbar/_search.png" alt="">
        <img slot="item-icon-active" src="@/assets/image/tabbar/search.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="@/assets/image/tabbar/_my.png" alt="">
        <img slot="item-icon-active" src="@/assets/image/tabbar/my.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
// 1 导入封装好的 TabBar.vue
import TabBar from '@/components/common/tabbar/TabBar.vue'
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue'

export default {
  name: 'MainTabBar',
  // 注册
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
  
</style>