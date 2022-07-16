<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home_nav">
      <!-- 替换插槽  NavBar.vue-->
      <div slot="center">购物</div>
    </nav-bar>
    
    <!-- 首页选项卡   :titles=""传递数据      接收TabCoontrol.vue传递的tabClick-->
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" 
                  ref="tabControl1" v-show="isTabFixed"></tab-control>

    <!-- 滚动插件 弹簧滚动       @scroll="方法" 接收$emit传出去的数据(监听滚动位置) Scroll.vue -->
    <better-scroll class="content" ref="betterScroll" 
        :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      
      <!-- 轮播图 抽离后的   @swiperImageLoad=""接收传过来的 图片加载完的数据 -->
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    
      <!-- 推荐模块 -->
      <recommend :recommends="recommends"></recommend>

      <!-- 特色模块 -->
      <feature-view></feature-view>

      <!-- 首页选项卡   :titles=""传递数据      接收TabCoontrol.vue传递的tabClick-->
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick" 
                  ref="tabControl" ></tab-control>

      <!-- 首页商品 -->
      <!-- <goods-list :goods="goods[currentType].list"></goods-list> -->
      <goods-list :goods="showGoods"></goods-list>

    </better-scroll>

    <!-- 回到顶部       接收BackTop.vue 发射过来的点击事件 -->
    <!-- <back-top @backClick="backClick"></back-top> -->
    <!-- 监听组件 BackTop.vue 的点击事件  .native-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>

    <!-- 轮播图   封装到home文件childcomps里面-->
    <!-- <swiper>
      <swiper-item v-for="item in banners">
        coderwhy的接口轮播图
        <a v-bind:href="item.link">
          <img :src="item.image" alt="">
        </a>
        //  <a :href="item.navigator_url">
        //    <img :src="item.image_src" alt="">
        //  </a>
      </swiper-item>
    </swiper> -->

  </div>
</template>

<script>
// 1 引入  首页使用NavBar组件               components/common   公共组件
import NavBar from 'components/common/navbar/NavBar.vue'
import BetterScroll from 'components/common/better-scroll/Scroll.vue'

//                                        content   项目相关公共组件
import TabControl from 'components/content/tabcontrol/TabControl.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

//                                           home
import HomeSwiper from './childcomps/HomeSwiper.vue'
// swiper 对象导入                    封装到了HomeSwiper.vue里面
// import {Swiper, SwiperItem} from 'components/common/swiper'
import Recommend from './childcomps/Recommend.vue'
import FeatureView from './childcomps/FeatureView.vue'


//                                            network
// 加上{} 是因为没有用 default导出     只有用defalut导出才能去掉{}
import {getHomeMultidata} from 'network/home'
import {getHomeMultidata1} from 'network/home'
import {getHomeGoods} from 'network/home'

//                                              common
import {debounce} from 'common/utils.js'




export default {
  name: 'Home',
  // 2 注册
  components: {
    NavBar,
    BetterScroll,

    TabControl,
    GoodsList,
    BackTop,

    // Swiper,
    // SwiperItem
    HomeSwiper,
    Recommend,
    FeatureView,
  },
  data() {
    return {
      // 把数据保存下来 不让自己回收
      // result: null
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      // 是否显示 回到顶部图标
      isShowBackTop: false,
      // TabContor.vue 首页选项卡 距离顶部的距离 作用:吸顶效果
      tabOffsetTop: 0,
      // 判断选项卡是否 具有吸顶效果
      isTabFixed: false,
      // 组件切换之前 保存的高度
      saveY: 0,
    }
  },
  // 组件创建好了 就发送数据请求 利用生命周期函数 created()
  created() {
    // 1 请求多个数据 home.js里面的   调用函数    返回结果是Promise
    getHomeMultidata().then(res => {
      console.log(res)
      // this.result = res

      // coderwhy的接口
      this.banners = res.data.banner.list
      // this.recommends = res.data.recommend.list
      // 小程序的接口
      // this.banners = res.message

    })
    getHomeMultidata1().then(res1 => {
      console.log(res1)
      // this.result = res
      // coderwhy的接口
      this.recommends = res1.data.recommend.list
      // 小程序的接口
      // this.recommends = res1.message
    })

    // 请求商品数据 goods
    // getHomeGoods('cat_one_id', 1).then(res => {      // 把这段代码封装到methods
    //   console.log(res)
    // })
    this.getHomeGoods('pop')                               // 调用在 methods 封住好的
    this.getHomeGoods('new')   
    this.getHomeGoods('sell')   
  },
  // 生命周期函数 挂载
  mounted() {
    // 接收GoodsListItem.vue 发送过来的数据   监听item图片加载完成  滚动插件
    //   this.$bus.$on('itemImageLoad', () => {
    //   // && 逻辑与 先判断 this.scroll是否有值 为false不执行后面的 为ture再指向   解决:因为调用出现的报错
    //   // 请求一张图片都会调用refresh()   请求过于频繁 可以用防抖
    //   this.$refs.betterScroll && this.$refs.betterScroll.refresh()
    // })

    // 添加防抖
    const refresh = debounce(this.$refs.betterScroll.refresh, 200)
    this.$bus.$on('itemImageLoad', () => {
      refresh()   // 闭包 一个函数作用域可以调用另一个函数作用域的变量
    })
  },
  // 生命周期函数 销毁   通过路由管理的组件,跳转后默认销毁之前的组件  组件销毁 给组件外面包一层 keep-alive App.vue
  destroyed() {
    // console.log('组件销毁了')
  },
  // 活跃的组件   解决:切换tabbar之前的组件销毁不稳定
  activated() {
    this.$refs.betterScroll.scroll.scrollTo(0, this.saveY, 0)
    // 重新刷新页面
    this.$refs.betterScroll.scroll.refresh();
  },
  // 不活跃的组件
  deactivated() {
    this.saveY = this.$refs.betterScroll.scroll.y
  },
  methods: {
    // 事件监听的方法   给pop new sell 传递数据
    tabClick(index) {
      console.log(index)
      switch (index) {
        case 0: 
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl.currentIndex = index
    },
    // 回到顶部  BackTop.vue      Scroll.vue
    backClick() {
      // ref属性 获取到 better-scroll 标签        .scroll 访问scroll.vue里面的属性    scrollTo(0, 0, c) 获取滚动位置距离上面的 距离为0
      // this.$refs.betterScroll  拿到better-scroll组件标签
      this.$refs.betterScroll && this.$refs.betterScroll.scroll.scrollTo(0, 0, 500) // 500滚动的毫秒
    },
    // 获取内容发生滚动的坐标   Scroll.vue
    contentScroll(position) {
      // console.log(position)   // 内容滚动的坐标
      // 1 判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000
      // 2 决定tabControl是否吸顶 (position: fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop + 150
    },
    // 上拉加载更多 
    loadMore() {
      this.getHomeGoods(this.currentType)
    },
    // 获取轮播图加载完的数据       用于判断首页选项卡距离顶部距离 吸顶效果
    swiperImageLoad() {
      // 获取首页选项卡距离顶部位置 通过 ref属性 拿到当前 组件
      // 所有的组件都有一个属性 $el: 用于获取组件元素     .$el.offsetTop 这样拿到的值很小 因为图片没有加载完
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop 
      // console.log(this.$refs.tabControl)      // 拿到的是 vue组件
      // console.log(this.$refs.tabControl.$el.offsetTop)  // 拿到的是 组件元素 标签有 offsetTop属性 获取距离顶部的距离
    },

    // 网络请求
    getHomeGoods(cat_one_id) {
      const page = this.goods[cat_one_id].page + 1
      getHomeGoods(cat_one_id, page).then(res => {       // 把这段代码封装到methods
        console.log(res)
        // res.message.goods                                // 把这个数组添加到 list[]
        // 方法一  for (let item of res.message.goods) {
        //             goods[cat_one_id].list.push(item)
        //           }
        // 方法二
        this.goods[cat_one_id].list.push(...res.message.goods)
        this.goods[cat_one_id].page += 1

        // 上拉加载更多数据(没有这个函数只能加载一次) 
        this.$refs.betterScroll && this.$refs.betterScroll.finishPullUp()
      })
    },
    // 防抖 封装的函数      fun 函数  delay 等多长时间    .apply 改变this指向,不然在定时器指向window    抽离到common文件
    // debounce(fun, delay) {
    //   let timer = null    // timer 定时器
    //   return function (...args) { 
    //     // 第二次函数传入 把之前的定时器清空 在执行下面代码
    //     if (timer) clearTimeout(timer)
    //     // 第一次传入函数 会延迟delay后执行 在延迟过程中 第二次函数就传入了
    //     timer = setTimeout(() => {
    //       fun.apply(this, args)
    //     }, delay); 
    //   }
    // },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
/* scoped 针对当前页面的标签起效果 */
  #home {
    padding-top: 44px;
    /* height: 100vh; */
  }
  .home_nav {
    /* 让navbar 上面导航不动的 第二种方法 */
    /* position: sticky;
    top: 0; */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;

    background: var(--color-tint);
    color: white;
  }
  /* tabcontrol 吸顶效果(流行)  使用better-scroll这个属性就没用了*/
  /* .tab-control {
    粘性属性 
    position: sticky;
    top: 40px;
    z-index: 9;
  } */
  .content {
    /* 可视区高度 - 上下导航高度 */
    /* height: calc( 100% - 44px - 49px ); */
    /* height: 100vh - 44px - 49px ; */
    height: calc( 100vh - 44px - 49px );
    overflow: hidden;
  }
</style>