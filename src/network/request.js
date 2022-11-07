// 用于网络请求
import axios from 'axios'
// 导出request
export function request(config) {
  // 1 创建axios实例
  const instance = axios.create({
    baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
    timeout: 5000
  })

  // axios拦截器
  // 1 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {

  })
  // 2 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => { 
    console.log(err)
  })
  // 3 发送网络请求
  return instance(config)
}
