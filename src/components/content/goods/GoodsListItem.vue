<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- @load="imageLoad"  监听每一张图片加载是否完成     解决:butter-scroll不能下拉到底的问题 -->
    <img :src="goodsItem.goods_big_logo" alt="" @load="imageLoad">
    <!-- 懒加载插件使用 报错 好像vue3.0用不了   -->
    <!-- <img v-lazy="goodsItem.goods_big_logo" :key="goodsItem.goods_big_logo" alt="" @load="imageLoad"> -->
    <div class="goods-info">
      <p>{{goodsItem.goods_name}}</p>
      <span class="price">{{goodsItem.goods_price}}</span>
      <span class="collect">{{goodsItem.goods_number}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      console.log('监听 加载了多少张图片 butter-scroll不能下拉到底的问题')
      // 发射出去数据
      this.$bus.$emit('itemImageLoad')
    },
    itemClick() {
      // 点击商品 进行路由跳转    根据商品id跳转(传递参数)
      this.$router.push('/detail/' + this.goodsItem.goods_id )
    }
  }
}
</script>

<style scoped>
  .goods-list-item {
    padding-bottom: 40px;
    position: relative;

  /* 2 俩边显示 */
    width: 48%;
  }
  .goods-list-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    /* 一行显示 溢出显示... */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .goods-info .price {
    color: var(--color-high-text);
  }
  .goods-info .collect {
    position: relative;
    padding-left: 25px;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    top: 0;
    left: 8px;
    right: 0;
    width: 14px;
    height: 14px;
    background: url("~assets/image/common/collect.svg") white 0/14px 16px;
  }
</style>