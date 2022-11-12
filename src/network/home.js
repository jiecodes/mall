// 网络请求第二层封装 用于home页面的请求

// 导入 request   没有default导出 所有用{} 导入
import {request} from './request.js'
// 导出 首页数据
export function getHomeMultidata() {
  return request({
    url: 'http://123.207.32.32:8000/home/multidata'
    // url: 'home/multidata'
  })
}

// 首页商品数据
export function getHomeGoods(pagenum) {
  return request({
    url: '/goods/search',
    params: {
      pagenum
    }
  })
}