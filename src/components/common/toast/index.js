import Toast from './Toast.vue'

const obj = {}

obj.install = function(Vue) {
  console.log('toast', Vue)
  // 1 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2 new方法 根据组件构造器 创建出一个组件对象
  const toast = new toastContrustor()
  
  // 3 将组件对象 手动挂载到一个元素上
  toast.$mount(document.createElement('div'))

  // 4 把toast里面的body内容 添加到document.body上      appendChild() 方法可向节点的子节点列表的末尾添加新的子节点
  document.body.appendChild(toast.$el)

  // 给vue的原型上添加 toast对象   以后使用可以用 this.$toast     toast文件
  Vue.prototype.$toast = toast

}

export default obj;