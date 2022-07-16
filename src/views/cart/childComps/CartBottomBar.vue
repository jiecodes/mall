<template>
  <div class="cart-bottom-bar">
    <div class="item-selector"> 
      <check-button :is-checked="isSelectAll" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
    <div class="total">
      合计:{{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      计算: {{checkLength}}
    </div>
  </div>
</template>

<script>
import CheckButton  from "components/content/checkButton/CheckButton.vue";
import { mapGetters } from 'vuex';


export default {
  components: {
    CheckButton,
  },
  computed: {
    // getters.js的映射 传入cartList的值
    ...mapGetters(['cartList']),
    // 总价
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)     // 0表示 preValue 初始值
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    // 是否全选  不是全选返回 false
    isSelectAll() {
      // 如果长度为空 返回false
      if (this.cartList.length === 0) return false
      // 1 filter  遍历全部购物车数据 选出没选中的
      // return !(this.cartList.filter( item => !item.checked).length)
      // 2 find 找到一个没选中的就 停止了
      return !this.cartList.find( item => !item.checked)
      // 3 普通方法
      // for (let item of this.cartList) {
      //   // 查找按钮 有一个没选中的
      //   if (!item.checked) {
      //     // 返回 false 不选中全选按钮    退出循环(也可以break)
      //     return false
      //   }
      // }
      // return true
    }
  },
  methods: {
    // 全选按钮点击全选
    checkClick() {
      // 全部选中     this.isSelectAll 为true 
      if (this.isSelectAll) {
        this.cartList.forEach( item => item.checked = false)
      } else {
        // 部分选中 或 全部没选中
        this.cartList.forEach( item => item.checked = true)
      }
    },
    // 去计算 按钮     当没有商品时,弹出弹窗
    calcClick() {
      if (!this.checkLength) {
        this.$toast.show('请输入商品a', 1000)
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    display: flex;
    height: 40px;
    background-color: #f3f3f3;
    position: relative;
    bottom: 40px;

  }
  .item-selector {
    height: 40px;
    width: 20%;
    display: flex;
    justify-content: center; 
    align-items: center;
  }
  .item-selector span {
    padding-left: 5px;
  }
  
  .total {
    display: flex;
    flex: 1;
    /* justify-content: center;  */
    align-items: center;
    padding-left: 20px;
  }
  .calculate {
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 20%;
    color: #fff;
    background-color: red;
  }

  
</style>