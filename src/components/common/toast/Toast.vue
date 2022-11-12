<template>
  <!-- 提示弹窗 组件 -->
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  // 在 GoodsDetail 页面使用 使用这个
  // props: {
  //   message: {
  //     type: String,
  //     default: {}
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    // 在 cartBootomBar 页面使用时 可以直接传递 参数和时间
    show(message='默认数', duration=1000) {
      // 给默认值
      // duration = duration || 1000

      this.isShow = true
      this.message = message

      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, duration);
    }
  }
}
</script>

<style scoped>
  .toast {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;

    padding: 8px 12px;
    color: white;
    background-color: rgba(0, 0, 0, .5);
    border-radius: 8px;
  }
</style>