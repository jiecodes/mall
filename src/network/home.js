// 导入request.js 文件
import {request} from './request.js'

// 导出         获取首页的多个数据          首页轮播图
export function getHomeMultidata() {
  return request({
    // url: '/home/swiperdata',
    
    // coderwhy的接口
    // url: '/home/multidata'
    url: 'http://123.207.32.32:8000/home/multidata'
  })
}
// 首页推荐
export function getHomeMultidata1() {
  return request({
    // url: '/home/catitems',

    url: 'http://123.207.32.32:8000/home/multidata'
  })
}
// 获取首页相关商品
export function getHomeGoods(cat_one_id, pagenum) {
  return request({
    url: '/goods/search',
    params: {
      cat_one_id,
      pagenum,
    }
  })
}
