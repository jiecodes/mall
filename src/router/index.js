import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入 路由 懒加载
const Cart = () => import('@/views/cart/Cart')
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Profile = () => import('@/views/profile/Profile')

// 1 使用vuerouter
Vue.use(VueRouter)

// 2创建对象
const router = new VueRouter({
  // 路由
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    { 
      path: '/home',
      component: Home
    },
    { 
      path: '/category',
      component: Category
    },
    { 
      path: '/cart',
      component: Cart
    },
    { 
      path: '/profile',
      component: Profile
    }
  ],
  mode: 'history'
})

// 3 导出 
export default router

// 4 注册 main.js






















// // 路由

// import Vue from 'vue'
// import VueRouter from 'vue-router'

// // 利用路由对文件进行 懒加载
// const Home = () => import('@/views/home/Home')
// const Category = () => import('@/views/category/Category')
// const Cart = () => import('@/views/cart/Cart')
// const Profile = () => import('@/views/profile/Profile')

// // 1 安装插件
// Vue.use(VueRouter)

// // 2 抽离出去的属性
// const routes = [
//   // 重定向
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/category',
//     component: Category
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   {
//     path: '/cart',
//     component: Cart
//   },
//   {
//     path: '/profile',
//     component: Profile
//   },
// ]
// // 2 创建对象
// const router = new VueRouter({
//   // 属性
//   routes,
//   // 哈希模式
//   mode: 'history'
  
// })


// // 3 导出
// export default router

// // 4 在mian.js 中挂载