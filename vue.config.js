const path = require('path')

module.exports = {
  //1.配置方式一：CLI提供的属性
  outputDir: './build',
  //2.配置方式二：和webpack属性完全一致，最后会合并到webpack配置中
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // 3.配置方式三：
  //chainWebpack: (config) => {
  //  config.resolve.alias.set('@', path.resolve(__dirname, 'src')).set('views', '@/views')
  //}
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('components', '@/components')
  }
}
