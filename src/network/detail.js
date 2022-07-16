// 导入
import {request} from './request'

export function getDetail(goods_id) {
  return request({
    url: '/goods/detail',
    params: {
      goods_id
    }
  })
}

// 获取详情页的推荐商品数据
export function getRecommend() {
  return request({
    url: '/categories'
  })
}

// 把详情页的内容 封装到这个class类里面
// 导出class
export class Goods {
  constructor(message, attrs) {
    this.attr_name = attrs.attr_name
    this.goods_name = message.goods_name
    this.goods_price = message.goods_price
    this.goods_number = message.goods_number
    this.goods_introduce = message.goods_introduce
  }
}


