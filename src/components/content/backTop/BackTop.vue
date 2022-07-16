<template>
  <!-- backTop  回到顶部 -->
  <div class="back-top">
    <img src="@/assets/image/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  methods: {
    // backClick() {
    //   // 把点击事件 发射 给Home.vue  
    //   this.$emit('backClick')
    // }
  }
}
</script>

<style scoped>
  .back-top {
    position: fixed;
    bottom: 68px;
    right: -30px;
  }
  img {
    width: 50%;
    height: 50%;
  }
</style>