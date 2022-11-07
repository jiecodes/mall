<template>
  <!-- 商品详情信息页展示   v-if="goods_detail" 解决报错未定义 -->
  <div v-if="goods_detail" class="detail_info">
    <div class="title">{{goods_detail.message.goods_name}}</div>
    <div class="price">
      <span class="price_left">￥{{goods_detail.message.goods_price}}</span>
      <span class="price_right">￥{{goods_detail.message.goods_price}}</span>
    </div>
    <div class="other">
      <span class="other1">销量{{goods_detail.message.goods_number}}</span>
      <span class="other2">收藏{{goods_detail.message.goods_number}}人</span>
      <span class="right">运费</span>
    </div>
    <div class="line"></div>
    <div class="service">
      <span class="service1">退货</span>
      <span class="delivery">包邮</span>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    goods_detail: {
      type: Object,
      defult() {
        return {}
      }
    }
  },
}
</script>

<style scoped lang="scss">
.detail_info {
  padding: 10px 8px 0;
  .title {
    font-size: 24px;
    color: black;
  }

  .price {
    padding: 2px 0;
    .price_left {
      font-size: 26px;
      color: var(--color);
    }
    .price_right {
      font-size: 14px;
      color: #ccc;
      text-decoration:line-through
    }
  }

  .other {
    display: flex;
    font-size: 15px;
    color: #ccc;
    padding: 5px 0;
    justify-content: space-between;
  }
  .service {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    }
    .service1 {

    }
    .delivery {

    }
    .line {
      height: 2px;
      background: #f7f7f7;
    }
}

</style>