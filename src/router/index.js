import Vue from 'vue'
import VueRouter from 'vue-router'

// 通过路由跳转
// 懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')



// 1 安装插件
Vue.use(VueRouter)

// 抽离出去的routes属性  配置映射关系 
const routes = [
    // 默认路径
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
    },
    {
      path: '/detail/:goods_id',
      component: Detail
    },
  ]
// 2 创建router
const router = new VueRouter({
  // 传入属性  
  // 把后面的routes抽离到上面
  // routes: routes
  routes,
  // history模式    (默认哈希hash模式)
  mode: 'history',
})

// 3 导出router
export default router