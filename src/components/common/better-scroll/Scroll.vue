<template>
    <!-- 最好的滚动 插件 弹簧滚动    使用home.vue -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- slot 插槽被替换的 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  // 父传子
  props: {
    // 不让probeType的值是确定的 影响性能
    probeType: {
      type: Number,
      // 默认值
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      scroll: null
    }
  },
  // 生命周期函数 被挂载的
  mounted() {
    // 1 创建对象   通过设置ref属性 拿到所在的标签div
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      // probe 侦测 0,1不侦测实际位置 2 不侦测手指离开后滚动的位置 3 只要是滚动都侦测
      // probeType: 3,
      probeType: this.probeType,    // 根据使用的组件确定probeType的值
      click: true,            // 默认按钮不能点击
      // pullUpLoad: true,        // 是否上拉加载     自带 probeType: 3,
      pullUpLoad: this.pullUpLoad,
    })
    //  获取滚动位置距离上面的 距离为0
    // this.scroll.scrollTo(0, 0)

    // 2 监听滚动位置
    this.scroll.on('scroll', (position) => {
      // console.log(position)
      // 通过 emit 把数据传递出去 自定义事件
      this.$emit('scroll', position)
    })

    // 解决不能下拉到底的问题     图片加载完毕后调用refresh()
    this.scroll.refresh()

    // 3 监听上拉加载数据   按需添加 有的页面不需要这个 把pullUpLoad定义为变量
    this.scroll.on('pullingUp', () => {
      console.log('上拉加载更多')
      this.$emit('pullingUp')
    })

  }, 
  methods: {
    // 完成加载更多(没有这个函数只能加载一次)
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    refresh() {
      // && 逻辑与 先判断 this.scroll是否有值 为false不执行后面的 为ture再指向   解决:因为调用出现的报错
      this.scroll && this.scroll.refresh()
      console.log('添加防抖 refresh执行次数')
    }
  }
}
</script>

<style>

</style>