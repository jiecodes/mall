<template>
  <!-- detail 详情页-->
  <div id="detail">
    <!-- 导航栏 NavBar -->
    <detail-nav-bar  @titlesClick="titlesClick" ref="nav"></detail-nav-bar>
    <!-- 滚动插件 -->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!-- 加入购物车的数据展示 -->
       <!-- <ul>
         <li v-for="item in $store.state.cartList">{{item}}</li>
       </ul>      -->

      <!-- 详情页轮播图     :pics="pics"父组件的数据传递给子组件 -->
      <detail-swiper :pics="pics"></detail-swiper>
      <!-- 详情页内容 -->
      <detail-base-info ref="params" :goods="goods" :value="value"></detail-base-info>
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <!-- 底部导航栏 @addCart接收发过来的事件 -->
    <detail-bottom-bar @addCart='addToCart'></detail-bottom-bar>
    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
    <!-- <toast :message="message" :show="show"> </toast> -->
  </div>

</template>

<script>
// 使用组件 1 导入
//                                                childcomps
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import DetailBaseInfo from './childcomps/DetailBaseInfo.vue'
import DetailBottomBar from './childcomps/DetailBottomBar.vue'

//                                                   components
import Scroll from 'components/common/better-scroll/Scroll.vue'
import Toast from 'components/common/toast/Toast.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

//                                                    network
import {getDetail, Goods, getRecommend} from 'network/detail.js'

//                                                   映射 传递数据 store action
import { mapActions } from 'vuex'


export default {
  name: 'Detail',
  data() {
    return {
      // 商品id
      goods_id: null,
      // 根据goods_id请求过来的 轮播图片
      pics: [],
      // 详情页内容
      goods: {},
      // 详情页推荐数据
      recommends: [],
      // themeTopYs: [0, 1000, 2000 ,3000],
      // 主题距离顶部的距离
      themeTopYs: [],
      currentIndex: 0,
      // 返回顶部的变量
      isShowBackTop: false,
      message: '',
      show: false,
      value: '1657262629',
       
    }
  },
  // 2 注册组件
  components: {
    DetailNavBar,
    DetailSwiper,  
    DetailBaseInfo,
    DetailBottomBar,

    Scroll,
    Toast,
    GoodsList,
    BackTop,
  },
  methods: {
    // 接收映射数据
    ...mapActions(['addCart']),
    titlesClick(index) {
      console.log(index)
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 100)

      this.themeTopYs = []
        // 导航栏 跳转到指定页
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        console.log(this.themeTopYs)
    },
    contentScroll(position) {
      // console.log(position)     // 滚动位置
      // 1 获取y值
      const positionY = -position.y 
      // 2 positionY与主题中的值对比
      let length = this.themeTopYs.length
      for( let i = 0; i < length; i++ ) {
        if (this.currentIndex !== i && ((i < length -1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
          this.currentIndex = i
          console.log(i)
          console.log(this.currentIndex)
          this.$refs.nav.currentIndex = this.currentIndex
        }
      // 3 是否显示回调顶部
      this.isShowBackTop = -position.y > 1000
      }
    },
    // 回到顶部的方法
    backTop() {
      this.$refs.scroll.scroll.scrollTo(0,0,300)
    },
    // 添加到购物车
    addToCart() {
      // 1 获取购物车需要展示的东西
      const product = {}
      product.image = this.pics[0].pics_sma
      product.title = this.goods.goods_name
      product.describe = this.goods.goods_name
      product.price = this.goods.goods_price
      product.goods_id = this.goods_id
      // 2 将商品添加到购物车 通过vuex
      // this.$store.cartList.push(product)      // 可以这样添加 但是不建议 建议在route 的 mutations
      // this.$store.commit('addCart', product)         // commit 提交
      // this.$store.dispatch('addCart', product)         // 对应 store index.js actions
      // .then(res => {
      //   console.log(res)
      // })
      // 使用 ...mapActions(['addCart']) 映射接收的数据       显示弹窗
      this.addCart(product).then(res => {
        // console.log(res)
        // this.show = true
        // this.message = res
        // // 一段时间后自己关闭
        // setTimeout(() => {
        //   this.show = false
        //   this.message = ''
        // }, 1000);

        // 封装好 toast 插件 代替上面代码
        this.$toast.show(res, 1000)
      })
      
    }
  },
  // 生命周期函数 创建
  created() {
    // 1 保存传入的goods_id  拿取 GoodsListItem 里面的goods_id  在index里面配置好 detail/:goods_id
    this.goods_id = this.$route.params.goods_id
    // 2 根据goods_id请求详情数据
    getDetail(this.goods_id).then(res => {
      console.log(res)       // 请求过来的goods_id数据
      // 1 获取顶部轮播图 图片
      this.pics = res.message.pics
      // console.log(this.pics)

      // 2 获取商品信息
      this.goods = new Goods(res.message, res.message.attrs)

      // 页面加载完毕 调用 $nextTick()    会出现问题:图片没拿到,导致位置不准确
      this.$nextTick( () => {
        // this.themeTopYs = []
        // // 导航栏 跳转到指定页
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        // console.log(this.themeTopYs)
      })

    })
    // 请求详情页的推荐商品数据
    getRecommend().then(res => {
      console.log(res)
      this.recommends = res.message
    })
  },
  // 生命周期函数 挂载
  mounted() {
    },
  // 生命周期函数 组件数据更新之后 当data中定义的数据有变化时就会加载updated方法
  updated() {
    
  }

}
</script>

<style scoped>
  /* 详情页 隐藏tabbar */
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  /* 滚动插件 必须有高度 */
  .content {
    height: calc(100vh - 44px - 49px);
  }
</style>