import Vue from 'vue'
import App from './App.vue'
// 4 在mian.js 中挂载
import router from './router'
// 使用vuex
import store from './store'

// 2.1导入 vue-lazyload 图片懒加载
import VueLazyLoad from 'vue-lazyload'

// 1.1 导入 自己创建的 toast(显示弹窗)
import toast from 'components/common/toast/index.js'

// 1.2 安转toast插件    项目在运行时就会触发
Vue.use(toast)

// 2.2 使用vue-lazyload
Vue.use(VueLazyLoad, {
  // 图片占位符
  loading: require('./assets/image/vue-lazyload/vue-lazyload.jpeg')
}) 

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  // 4 在mian.js 中挂载
  router,
  store,
}).$mount('#app')
