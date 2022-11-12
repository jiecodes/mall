<template>
  <div class="shop_item">
    <!-- :is-check="checked" 判断是否选中 checked属性在 vuex中的index.js mutations -->
    <!-- @click.native 修饰符 给自定义组件绑定原生事件时 如果不加.native不起作用 -->
    <div class="button" :class="{check: product.checked}"
    @click="checkClick" >
      <img src="~assets/image/cart/tick.svg" alt="">
    </div>
    <div class="shop_image">
      <img :src="product.image" alt="">
    </div>
    <div class="shop_info">
      <div class="shop_title">{{product.title}}</div>
      <div class="shop_detail">信息{{product.goods_number}}</div>
      <div class="shop_price">
        <span class="shop_pri">￥{{product.price}}</span>
        <span class="shop_number">×{{product.count}}</span>
      </div>
    </div>
    <!-- product.image = this.goods_detail.message.goods_small_logo
      product.price = this.goods_detail.message.goods_price
      product.title = this.goods_detail.message.goods_name
      product.goods_id = this.goods_detail.message.goods_id
      product.count = null -->
  </div>
</template>

<script>
export default {
  name: 'cartListItem',
  // data() {
  //   return {
  //     isChecked: false
  //   }
  // },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  methods: {
    checkClick() {
      // 点击按钮取反
      this.product.checked = !this.product.checked
      // this.isChecked = !this.isChecked
    }
  },


}
</script>


<style scoped lang="scss">
.shop_item {
  width: 100%;
  display: flex;
  padding: 5px;
  border-bottom: 2px solid #ccc;
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      border-radius: 50%;
      border: 2px solid #ccc;
    }
  }
  .shop_image {
    flex: 30%;

    display: flex;
    text-align: center;
    align-items: center;
    img {
      width: 100%;
    }
  }

  .shop_info {
    flex: 70%;
    padding: 3px 4px;

    // 解决 添加文字超出显示...不能显示
    overflow: hidden;
    .shop_title {
      font-size: 20px;
      color: black;
      font-weight: 600;

      // 一行溢出 隐藏
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .shop_detail {
      font-size: 16px;
      color: #666;
      padding: 7px 0 10px;

      // 一行溢出 隐藏
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .shop_price {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      .shop_pri {
        color: var(--color);
      }

      .shop_number {
        color: black;
      }
    }
  }
  .check {
    img {
      background:red;
    }
  }

}
</style>