<template>
  <div id="home">
    <!-- 顶部导航栏 -->
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>

    <!-- 使用 better-scroll -->
    <scroll ref="refScroll" class="content">
       <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- <swiper>
        <swiper-item v-for="item in banners" :key="item.index">
          <a v-bind:href="item.link">
            <img v-bind:src="item.image" alt="">
          </a>
        </swiper-item>
      </swiper> -->
      <!-- 推荐信息 -->
      <recommend-view v-bind:recommends="recommends"></recommend-view>
      <!-- 特色模块  feature -->
      <feature-view></feature-view>
      <!-- tab 控制栏 -->
      <tab-control v-on:tabClick="tabClick1" class="tab_control" :title="['流行','新款','精选']"></tab-control>
      <!-- 商品信息 goods -->
      <goods-list v-bind:goods="goods"></goods-list>
    </scroll>
  
  
  
  </div>
</template>

<script>
// 网络请求
// 没有default导出 所有用{} 导入
import {getHomeMultidata, getHomeGoods} from 'network/home'


// 组件 顶部导航栏
import NavBar from 'components/common/navbar/NavBar.vue'
// 导入 封装号的 better-scroll
import Scroll from 'components/common/scroll/Scroll.vue'
// 轮播图
import HomeSwiper from './childComps/HomeSwiper.vue'
// import {Swiper, SwiperItem} from 'components/common/swiper'
// 推荐信息
import RecommendView from './childComps/RecommendView.vue'
// 特色 feature
import FeatureView from './childComps/FeatureView.vue'
// tab 控制栏
import TabControl from 'components/content/tabControl/TabControl.vue'
// 商品信息
import GoodsList from 'components/content/goods/GoodsList.vue'



export default {
  name: 'Home',
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: [],
      pagenum: 1
    }
  },
  created() {
    // 首页数据
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list 
      this.recommends = res.data.recommend.list 
      console.log(this.recommends)
    })
    // 商品数据
    this.getHomeGoods()
  },
  methods: {
    // 事件
    // 切换栏 切换
    tabClick1(index) {
      console.log(index)
      // switch (index) {
      //   case 0:
      //     this.pagenum = 1
      //     break;
      //   case 1:
      //     this.pagenum = 2
      //     break;
      //   case 2:
      //     this.pagenum = 3
      //     break;
      // }
    },  
    // 网络请求商品数据
    getHomeGoods(pagenum) {
      getHomeGoods().then(res => {
        console.log(res)
        // this.goods = res.message.goods
        this.goods.push(...res.message.goods)
        this.pagenum += 1
        console.log(this.goods)
      })
    }
  },

}
</script>

<style scoped>
  #home {
    margin: 44px 0 49px 0;
  }
  .home-nav {
    background-color: var(--color);

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab_control {
    position: sticky;
    top: 44px;
  }
  .content {
    height: calc(100vh - 44px - 49px);
  }
</style>