<template>
  <div class="cart-list-item">
    <div class="item-selector">
      <!-- is-checked="itemInfo.checked"  默认按钮选中   index.js mutations  payload.checked = true -->
      <!-- .native 自定义监听点击组件事件 -->
      <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-describe">{{product.describe}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">X{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton  from "components/content/checkButton/CheckButton.vue";

export default {
  name: 'CartListItem',
  
  // 接收传递过来的数据
  props: {
    product: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked
    }
  }

}
</script>

<style scoped>
  .cart-list-item { 
    width: 100%;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title,
  .item-describe {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 5px;
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }

  .item-info
  .item-describe {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottomk,
  .item-price {
    color: orangered;
  }


</style>