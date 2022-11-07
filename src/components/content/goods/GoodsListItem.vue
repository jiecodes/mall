<template>
  <div class="goods_list_item" v-on:click="itemClick">
    <img v-lazy="goodsItem.goods_big_logo" alt="">
    <!-- <img :src="goodsItem.goods_big_logo" alt=""> -->
    <div class="goods_info">
      <p>{{goodsItem.goods_name}}</p>
      <span class="goods_price">{{goodsItem.goods_price}}</span>
      <span class="iconfont icon-shoucang"></span>
      <span class="goods_collect">{{goodsItem.goods_id}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 点击 商品每一项 获取goods_id  
    itemClick() {
      console.log('..')
      // 点击 商品 每一项 跳转到详情页      传递数据 在后面拼接 + goods_id
      this.$router.push('/goods_detail/' + this.goodsItem.goods_id)
    },
  }
}
</script>

<style scoped lang="scss">
  .goods_list_item {
    flex: 48%;
    position: relative;
    padding-bottom: 40px;
    img {
      width: 100%;
    }
    .goods_info {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 5px;
      overflow: hidden;
      text-align: center;
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-size: 12px;
        padding: 0 4px;
        text-align: left;
      }
      .goods_price {
        font-size: 10px;
        color: var(--color);
      }
      .icon-shoucang {
        font-size: 10px;
        padding: 0 4px;
      }
      .goods_collect {
        font-size: 10px;
      }
    }
  }

</style>