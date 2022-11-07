<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/mainTabbar/MainTabBar.vue'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style lang="scss">
/* github上的公共css */
@import url(https://yarn.pm/normalize.css);
// 基础样式
@import url(./assets/css/base.css);
// 阿里图标 
@import url(//at.alicdn.com/t/c/font_3724082_6b7vc6993lw.css);

$color: red;

</style>
