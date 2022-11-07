// 导出配置         配置路径
module.exports = {
  // 配置别名 路径
  configureWebpack: {
    resolve: {
      // 别名         @ src/ 默认配置好的
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}