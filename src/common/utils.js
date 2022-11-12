// 导出函数 export function

// 防抖 封装的函数      fun 函数  delay 等多长时间    .apply 改变this指向,不然在定时器指向window    Home.vue抽离出来的
export function debounce(fun, delay) {
  let timer = null    // timer 定时器
  return function (...args) { 
    // 第二次函数传入 把之前的定时器清空 在执行下面代码
    if (timer) clearTimeout(timer)
    // 第一次传入函数 会延迟delay后执行 在延迟过程中 第二次函数就传入了
    timer = setTimeout(() => {
      fun.apply(this, args)
    }, delay); 
  }
}

// 封装格式时间的方法
export function formatDate(date, fmt) {
  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let obj = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in obj) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = obj[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}
function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}