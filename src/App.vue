<template>
  <div id="app">
    <!-- 3 使用组件 -->
    <main-tab-bar></main-tab-bar>
    <!-- keep-alive 加上这个组件后 通过路由跳转的组件 跳转之前的组件不会默认销毁 -->
    <!-- keep-alive会保留之前的组件  加上属性 exclude="Detail" 这个页面不会被保留-->
    <keep-alive exclude="Detail">
      <!-- 路由配置后 使用占位符 -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// 1 导入组件
import MainTabBar from './components/content/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    // 2 注册组件
    MainTabBar
  }
}
</script>

<style>
  /* 导入基础css */
  @import './assets/css/base.css';
</style>
