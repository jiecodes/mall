<template>
  <div class="nav-bar">
    <!-- 最上面的导航  name='left' 具名插槽指定替换的是哪一个 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar'
}
</script>

<style scoped lang="scss">
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    .left, .right{
      width: 60px;
    }
    .center {
      flex: 1;
    }
  }
</style>