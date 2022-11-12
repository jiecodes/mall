<template>
  <div class="bottom_bar">
    <div class="bar_left">
      <div class="service bar_left_item">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shop bar_left_item">
        <i class="iconfont icon-dianpu"></i>
        <span>店铺</span>
      </div>
      <div class="select bar_left_item">
        <i class="iconfont icon-shoucang"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar_right">
      <div class="shopping" @click="addToCart">购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
    addToCart() {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped lang="scss">
  .bottom_bar {
    position: fixed; 
    bottom: 0;
    left: 0;
    right: 0;
    height: 49px;
    background-color: #fff;
    z-index: 99; 

    display: flex;
    .bar_left {
      flex: 50%;
      display: flex;
      justify-content: space-around;
      .serveice {
        
      }
      .bar_left_item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        i {
          font-size: 24px;
          padding-top: 2px;
        }
        span {
          color: black;
          font-size: 15px;
          padding-bottom: 2px;
        }
      }
    }
    .bar_right {
      flex: 50%;

      display: flex;
      text-align: center;
      line-height: 49px;
      .shopping {
        flex: 55%;
        font-size: 20px;
        color: black;
        background-color: yellow;
      }
      .buy {
        flex: 45%;
        color: white;
        background-color: rgb(228, 202, 164);
      }
    }
  }


</style>