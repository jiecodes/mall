export default {
  // 购物车商品的有几个商品
  cartLength(state) {
    return state.cartList.length
  },
  // 购物车商品
  cartList(state) {
    return state.cartList
  }
}