// vuex  仓库 大管家(对公共的变量和方法进行管理)

// 导入
import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'

// 使用   1 安装插件
Vue.use(Vuex) 

// 2 创建Store 对象
const store = new Vuex.Store({

  // 状态
  state: {
    cartList: []
  },
  // 模型
  mutations: {
    // 修改state状态(cartList) 里面的每一个方法尽可能完成的事情比较单一 所以把下面方法添加到actions
    //       payload 负载 参数     添加购物车商品
    // addCart(state, payload) {
    //   // state.cartList.push(payload)
    //   let oldProduct = null;
    //   for(let item of state.cartList) {
    //     if (item.goods_id === payload.goods_id) {
    //       oldProduct = item
    //     }
    //   }
    //   // 判断 oldProduct
    //   if (oldProduct) {
    //     // 添加多个一样的商品 使count(数量)加一 不再添加新商品 
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      // state.cartList.push(payload)
      // 查找之前数据是否有该商品
      // let oldProduct = null;
      // for(let item of context.state.cartList) {
      //   if (item.goods_id === payload.goods_id) {
      //     oldProduct = item
      //   }
      // }
      // // 判断 oldProduct
      // if (oldProduct) {
      //   // 添加多个一样的商品 使count(数量)加一 不再添加新商品 
      //   // oldProduct.count += 1
      //   context.commit('addCounter', oldProduct)
      // } else {
      //  添加新商品
      //   payload.count = 1
      //   // state.cartList.push(payload)
      //   context.commit('addToCart', payload)
      // }

      // 通过promise 封装
      return new Promise((resolve, rejcet) => {
        let oldProduct = null;
        for(let item of context.state.cartList) {
          if (item.goods_id === payload.goods_id) {
            oldProduct = item
          }
        }
        // 判断 oldProduct
        if (oldProduct) {
          // 添加多个一样的商品 使count(数量)加一 不再添加新商品 
          // oldProduct.count += 1
          context.commit('addCounter', oldProduct)
          resolve('当前商品数量+1')
        } else {
          payload.count = 1
          // state.cartList.push(payload)
          context.commit('addToCart', payload)
          resolve('添加新商品')
        }       
      })

    }
  },
  getters,
})

// 3 挂载到vue实例上
export default store