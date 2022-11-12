// 第二层 封装商品详情页

import {request} from './request'

// 商品详情页 信息请求    导出一个函数
export function getDetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  }) 
}

// class 创建一个类 把一些数据都放到一个对象里面   GoodsDetail.vue
// 导出 class构造函数
export class GoodsDetail {
  // 构造函数 里面传递的值
  constructor(message, pics) {
    this.message = message
    this.goods_name = message.goods_name
    this.goods_price = message.goods_price
    this.pics_id = pics.goods_id
  }
}

