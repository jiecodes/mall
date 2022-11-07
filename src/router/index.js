// 路由

import Vue from 'vue'
import VueRouter from 'vue-router'

// 利用路由对文件进行 懒加载
const Home = () => import('@/views/home/Home')
const Category = () => import('@/views/category/Category')
const Cart = () => import('@/views/cart/Cart')
const Profile = () => import('@/views/profile/Profile')
const GoodsDetail = () => import('@/views/goods_detail/GoodsDetail')

// 1 安装插件
Vue.use(VueRouter)

// 2 抽离出去的属性
const routes = [
  // 重定向
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    // 拼接goods_id 商品页向商品详情页 传递 id
    path: '/goods_detail/:goods_id',
    component: GoodsDetail
  }
]
// 2 创建对象
const router = new VueRouter({
  // 属性
  routes,
  // 哈希模式
  mode: 'history'
  
})


// 3 导出
export default router

// 4 在mian.js 中挂载