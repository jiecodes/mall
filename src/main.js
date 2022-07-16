import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 移动端使用延迟300ms(判断双击)
import Fastclick from 'fastclick'
// 图片懒加载 第三方库
import VueLazyLoad from 'vue-lazyload'

// 使用弹窗 1 导入 toast
import toast from 'components/common/toast'

Vue.config.productionTip = false

// 设置一个vue原型  作用: 解决better-scroll
Vue.prototype.$bus = new Vue()
// 2 安装toast
Vue.use(toast)

// 解决移动端300ms延迟
Fastclick.attach(document.body)
// 使用图片懒加载 第三方库
Vue.use(VueLazyLoad, {
  // 懒加载图片 占位图
  loading: require('./assets/image/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  // 导入后 挂载
  router,
  store
}).$mount('#app')
