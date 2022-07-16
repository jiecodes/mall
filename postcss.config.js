module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      // 按照iPhone6适配  750*1334        retina(1点2个像素)        安装插件 postcss-px-to-viewport 后配置
      viewportWidth: 375,   // 视窗的宽度,对应设计稿的宽度  2px等于1vw 
      viewportHeight: 667,  // 视窗的高度
      unitPrecision: 5,     // 指定'px'装换为视窗单位(vw)的 小数位 (很多时候无法整除)
      viewportUnit: 'vw',   // 指定转化的单位 (一般是vw 也可能使vh)
      selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],   // 指定不需要转换的类(css的类 .tab-bar)
      minPixelValue: 1,     // 小于或等于'1px'不转换为视窗单位
      mediaQuery: false     // 是否允许 媒体查询 转换为'px'
    },
  }
}