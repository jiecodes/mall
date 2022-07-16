<template>
    <!-- <slot></slot>  具名插槽 会被替换掉 用于占位 -->


  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    /* 阴影 */
    box-shadow: 0 2px 1px  rgba(0, 0, 0, .07);
  }
  .left, .right {
    width: 60px;
    background-color: #f6f6f6;
  }
  .center {
    /* 左右都设置宽度后 剩下的都是中间的 flex:1 */
    flex: 1;
  }

</style>