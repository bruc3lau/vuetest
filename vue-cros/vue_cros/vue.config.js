// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  // devServer: {
  //   proxy: 'https://merry.aibee.cn/img'
  // }
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/img': {
        target: 'https://merry.aibee.cn',
        changeOrigin: true,
      },
    },
  },
}