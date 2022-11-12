<template>
  <div class="cart_bottom_bar">
    <div class="button" >
      <img :class="{checked: isChecked}" @click="checkClick" src="~assets/image/cart/tick.svg" alt="">
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:</span>
      <span class="pricer">￥{{totalPrice}}</span>
    </div>
    <div class="calculate" @click="calculateClick">结算{{checkLength}}</div>
  </div>
</template>

<script>
export default {
  name: 'cartBootomBar',
  computed: {
    // 总价格
    totalPrice() {
      // filter 过滤函数 返回return中符合条件的所有元素 不会改变原数组    item 当前元素的值
      return this.$store.state.cartList.filter(function(item) {
        //  根据cartList中的 checked属性(选中按钮) 判断添加
        return item.checked
        // reduce 数组求和、求积、数组中元素出现的次数、数组去重 
        //    preValue 上一次调用的返回值   item 需要处理的数组元素  0 表示初始值
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      },0)
    },
    // 结算数量  checked属性为true有几个
    checkLength() {
      return this.$store.state.cartList.filter(function(item) {
        return item.checked
      }).reduce((preValue, item)=> {
        return preValue + item.count
      }, 0)
    },
    // checked属性为ture 选中 全选
    isChecked() {
      // 没有数据 是未选中的
      if (this.$store.state.cartList.length === 0)
      return false

      // 1 普通遍历
      // for (let item of this.$store.state.cartList) {
      //   if (!item.checked) {
      //     return false
      //   }
      // }
      // return true
      // 2 filter 过滤数据 返回符合条件的所有数据
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)
      // 3 find 找到第一个true则停止 
      // return !this.$store.state.cartList.find(item => !item.checked)
      // 4 some 找到 一个true 返回true 没找到返回fasle
      // return !this.$store.state.cartList.some(item => !item.checked)
      // 5 every 都是true 返回true
      return this.$store.state.cartList.every(item => item.checked)
    }
  },
  methods: {
    // 点击全选
    checkClick() {
      if (this.isChecked) {  // 全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {              // 部分选中 全不选中
        this.$store.state.cartList.forEach(item => item.checked = true )
      }
    },
    // 点击结算
    calculateClick() {
      this.$toast.show('请添加商品 cartBootomBar',1000)
    }
  }
}
</script>

<style scoped lang="scss">
  .cart_bottom_bar {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;

    height: 40px;
    background-color: #eee;
    
    display: flex;
    align-items: center;
    .button {
      display: flex;
      align-items: center;
      height: 40px;
      padding-left: 8px;
      img {
        border-radius: 50%;
        border: 2px solid #ccc;
      }
      .checked {
        background-color: red;

      }
      span {
        padding: 0 4px;
      }
    }
    .total {
      flex: 50%;
      padding-left: 20px;
    }
    .calculate {
      flex: 23%;
      text-align: center;      
      line-height: 40px;
      font-size: 16px;
      background-color: var(--color);
      color: white;
      border-radius: 6%;
    }
  }

</style>