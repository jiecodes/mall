// 把main.js里面的axios网络请求封装到这里    数据请求 request

import axios from "axios";

// 导出       
export function request(config) {
  // 创建axios实例 
  const instance = axios.create({ 
    // baseURL: 'http://123.207.32.32:8000',
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 5000
  })
  // axios 拦截器
  instance.interceptors.request.use(config => {
    // console.log(config)
    return config       // 拦截后 把数据返回出去 
  }, err=> {
    // console.log(err)
  })
  // 响应拦截 
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }, err => {
    console.log(err)
  })

  // 发送网络请求
  return instance(config)
}
