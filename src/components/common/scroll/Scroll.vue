<template>
  <div class="wrapper" ref="bscroll">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 导入  npm安装的 better-scroll
import BScroll from 'better-scroll'


export default {
  name: 'Scroll',
  data() {
    return {
      scroll: null
    }
  },
  // 挂载
  mounted() {
    this.scroll = new BScroll(this.$refs.bscroll, {
      probeType: this.probeType,    // 根据使用的组件确定probeType的值
      click: true,            // 默认按钮不能点击
      // pullUpLoad: true,        // 是否上拉加载     自带 probeType: 3,
      pullUpLoad: this.pullUpLoad,
    })
  }
}
</script>

<style scoped>

</style>