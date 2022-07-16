<template>
  <div class="toast"  v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  // props: {
  //   message: {
  //     type: String,
  //     default: ''
  //   },
  //   show: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  // 原型添加上 toast 使用
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message="默认文字a", duration=1000) {      // duration=1000 传递默认值
      // 之前给 duration默认值      选判断有没有值 如果没有传递1000
      duration = duration || 1000
      this.isShow = true;
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
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px 12px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background-color: rgba(0, 0, 0, .6);

  z-index: 99;
}
</style>