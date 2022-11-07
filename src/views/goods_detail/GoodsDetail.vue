<template>
  <div id="goods_detail">
    <!-- 最上面的导航   @titleClick 接收子组件 GoodsDetailNavBar.vue中传递过来的数据  -->
    <goods-detail-navbar @titleClick="titleClick" class="navbar"></goods-detail-navbar>
    <!-- 滚动 插件 -->
    <scroll class="content" ref="refScroll">

      <!-- 轮播图 -->
      <swiper>
        <swiper-item v-for="(item, index) in swiperImg" :key="index">
          <img :src="item.pics_big_url" alt="">
        </swiper-item>
      </swiper>
      <!-- 商品详情信息       v-if="goods_detail" 解决message报错 -->
      <detail-info :goods_detail="goods_detail"></detail-info>
      <div v-if="goods_detail">
        <div v-html="goods_detail.message.goods_introduce"></div>
      </div>
      <div class="recommend" ref="params">参数</div>
      <!-- 评论  时间展示  | 使用过滤器 -->
      <div v-if="goods_detail" class="recommend" ref="comment">
        <div class="time">评论时间: {{goods_detail.message.upd_time | showDate}}</div>
      </div>
      <!-- 推荐信息 -->
      <div class="recommend" ref="recommend">商品推荐</div>
      <goods-list :goods="goods_list"></goods-list>
   </scroll>
    <!-- 底部 导航 -->
    <detail-bottom-bar v-on:addCart="addCart"></detail-bottom-bar>
    <!-- 显示弹窗 组件 -->
    <toast :message="message" :show="isShow"></toast>
  </div>
</template>

<script>
// 导入 商品详情页请求的 数据
import {getDetail, GoodsDetail} from 'network/detail.js'
// 导入 商品首页的商品列表数据
import {getHomeGoods} from 'network/home.js'
// 导入 封装好的 防抖 
import {debounce} from 'common/utils.js'

// 导入 滚动 插件
import Scroll from 'components/common/scroll/Scroll.vue'
// 导入 第二次注册的 最上面的导航
import GoodsDetailNavbar from './childComps/GoodsDetailNavBar.vue'
// 导入 轮播图
import {Swiper, SwiperItem} from 'components/common/swiper/index.js'
// 商品详情信息
import DetailInfo from './childComps/DetailInfo.vue'
// 用于推荐信息  复用 商品列表 组件
import GoodsList from 'components/content/goods/GoodsList.vue'
// 导入 底部导航
import DetailBottomBar from './childComps/DetailBottomBar.vue'
// 导入 封装的 弹窗显示
import Toast from 'components/common/toast/Toast.vue'

// 通过vuex 导入 vuex中的actions 方法   methods
import {mapActions} from 'vuex'


export default {
  name: 'GoodsDetail',
  components: {
    GoodsDetailNavbar,
    Scroll,
    Swiper,
    SwiperItem,
    DetailInfo,
    GoodsList,
    DetailBottomBar,
    Toast,
  },
  data() {
    return {
      goods_id: null,
      swiperImg: [],
      goods_detail: null,
      goods_list: [],
      pagenum: 1,
      // 每一个模块距离上面的 距离
      themeTopYs: [],
      getThemeTopY: null,
      // Toast 里面的数据 message   是否显示 show
      message: {},
      isShow: false,
    }
  },

  created() {
    // 获取上页面传递过来的 goods_id
    this.goods_id = this.$route.params.goods_id

    // 根据商品id请求 商品详情数据
    getDetail(this.goods_id).then(res => {
      console.log(res)
      this.swiperImg = res.message.pics
      // this.goods_detail = res.message
      console.log(this.swiperImg)
      // 获取商品数据     new GoodsDetail在detail.js 请求数据时使用class构造函数  res.message给detail.js里面的message传值
      this.goods_detail = new GoodsDetail(res.message, res.message.pics)
      console.log(this.goods_detail)
    })

    // 获取首页商品列表数据
    this.getHomeGoods();

    // 点击最上面的切换 切换到指定位置 给 getThemeTopY 赋值(debounce 对赋值操作进行防抖)
    this.getThemeTopY = debounce(() => {
      this.themeTopYs = []
      this.themeTopYs.push(0)
      // this.themeTopYs.push(1000)
      this.themeTopYs.push(1800)
      this.themeTopYs.push(2300)
      // offsetTop 获取不到
      // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
      // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
      console.log(this.themeTopYs)
    }, 100)
  },

  methods: {
    // 通过vuex导入的 mapActions
    // ...mapActions({
    //   addCart: 'addCart'
    // }),

    // 获取首页商品列表数据
    getHomeGoods(pagenum) {
      getHomeGoods().then(res => {
        console.log(res)
        this.goods_list.push(...res.message.goods)
        this.pagenum += 1
      })
    },
    // 监听到 最上面的导航点击那个  GoodsDetailNavBar.vue 子组件
    titleClick(index) {
      console.log(index)
      // 点击最上面的导航跳转到 指定高度
      this.$refs.refScroll.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      this.getThemeTopY()
    },
    // 监听到 点击购物车按钮 子传父传递过来的
    addCart() {
      // 获取购物车需要展示的数据 
      const product = {}
      product.image = this.goods_detail.message.goods_small_logo
      product.price = this.goods_detail.message.goods_price
      product.title = this.goods_detail.message.goods_name
      product.goods_id = this.goods_detail.message.goods_id
      product.goods_number = this.goods_detail.message.goods_number
      product.count = null

      // 2 通过vuex 将商品数据添加到购物车中 
      // this.$store.cartList.puah(product)   一般不直接操作store 而是操作mutations

      // 通过 mutations 添加数据  addCart修改的方法名  product传递的值
      // this.$store.commit('addCart', product)
      
      // 通过 actions 添加数据      .then 用于提示框显示
      this.$store.dispatch('addCart', product).then(res => {
        // console.log(res)
        // this.message = res
        // this.isShow = true
        // setTimeout(() => {
        //   this.isShow = false
        // }, 1000);

        
        this.$toast.show(res, 1500) 
      })
      // ...mapActions([addCart]) 添加映射后  上面代码可以替换成
      // this.addCart(product).then(res => {
      //   console.log(res)
      // })

    }
  },
  // 时间戳     value 是插值表达式| 前面的值
  filters: {
    showDate(value) {
      let newDate = new Date(value * 1000)
      let year = newDate.getFullYear()
      // let month = newDate.getMonth().toString().padStart(2,0)    俩位数
      let month = newDate.getMonth() + 1
      month = month < 10 ? '0' + month : month
      // let day = newDate.getDay().toString().padStart(2,0)
      let day = newDate.getDay()
      day = day < 10 ? '0' + day : day

      let h = newDate.getHours();
      h = h < 10 ? '0' + h : h    // 判断是否大于10 小于10前面加0
      let m = newDate.getMinutes();
      m = m < 10 ? '0' + m : m
      let s = newDate.getSeconds();
      s = s < 10 ? '0' + s : s
      return year + '-' + month + '-' + day + ' ' + h + ':' + m + ':' + s 
    }
  }
}
 
</script>

<style scoped>
  /* 详情页 隐藏tabbar */
  #goods_detail {
    margin: 44px 0 0 0;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .navbar {
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;
  }
  .content {
    height: calc(100vh - 44px - 49px);
  }
  .recommend {
    padding: 20px 0;
  }

</style>