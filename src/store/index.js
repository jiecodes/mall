// vuex使用
import Vue from 'vue'
import Vuex from 'vuex'

// 1 安装插件
Vue.use(Vuex)

// 2 创建store对象
const store = new Vuex.Store({
  // 用于存储数据
  state: {
    // 购物车数据       添加数据 this.$store.carList.push(product) GodsDetail.vue文件里 一般不在state里操作
    cartList: []
  },
  // 用于修改state里面的数据 同步
  mutations: {    // mutations中的每一个方法尽可能完成的事件比较单一 只为修改state中的值
    // 修改 购物车数据包含(添加,删除) 使用mutations   
    // 代码  放到 actions 里面
    // addCart(state, payload) { // state 修改state里面的参数  payload 修改的参数  GodsDetail.vue
    //   // 把数据添加到 state
    //   // state.cartList.push(payload)

    //   // 查找之前数组  是否有该商品
    //   // let oldProduct = null;
    //   // for(let item of state.cartList) {
    //   //   if (item.goods_id === payload.goods_id) {
    //   //     oldProduct = item
    //   //   }
    //   // }
    //   // let oldProduct = state.cartList.find(function (item) {
    //   //   return item.goods_id === payload.goods_id
    //   // })
    //   let oldProduct = state.cartList.find(item => item.goods_id === payload.goods_id)

    //   // 判断是否有 oldProduct    有判断逻辑的放到actions里面
    //   if (oldProduct) {
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }

    // 结合actions修改 state代码
    // 修改 count属性
    addCount(state, payload) {
      payload.count++
    },
    // 添加 carList 数据
    addToCart(state, payload) {
      // 给cartList添加 checked属性 用于判断购物车数据 是否选中
      payload.checked = true
      state.cartList.push(payload)
    }

  },
  // 用于修改state里面的数据 异步
  actions: {
    // 添加商品   context 可以当成 store      payload 接收传递过来的参数
    addCart(context, payload) {
      // Toast 用于提示框
      return new Promise((resolve, reject) => {
        // 查找之前是否有该商品
        let oldProduct = context.state.cartList.find(function(item) {
          return item.goods_id === payload.goods_id
        })
        // 判断是否有旧数据
        if (oldProduct) {
          // 把接收到actions 里面的数据 添加到 mutations      addCount 添加到mutations方法 oldProduct添加到mutations的数据
          // 如果有数据 则把count加一
          context.commit('addCount', oldProduct)
          // oldProduct.count += 1
          resolve('当前商品数量+1')
        } else {
          // 如果没有数据 则添加属性count=1 并且添加新数据
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加商品数量')
        }
      })
    }
  },
  // vuex里面的 计算属性
  getters: {
    // 购物车 最上面导航显示的 数字
    cartLength(state) {
      // 购物车数组的个数长度
      return state.cartList.length
    },
    cartList(state) {
      // 购物车 数组
      return state.cartList
    }
  }
   
})

// 3 挂载到Vue实例上
export default store

