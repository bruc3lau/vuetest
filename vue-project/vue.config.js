// vue.config.js
module.exports = {
  // devServer: {
  //   host: '127.0.0.1',
  //   port: 3000,
  //   open: true,// vue项目启动时自动打开浏览器
  //   proxy: {
  //     '/img': { // '/api'是代理标识，用于告诉node，url前面是/api的就是使用代理的
  //       target: "https://merry.aibee.cn", //目标地址，一般是指后台服务器地址
  //       changeOrigin: true, //是否跨域
  //       pathRewrite: { // pathRewrite 的作用是把实际Request Url中的'/api'用""代替
  //         '^/img': ""
  //       }
  //     }
  //   }
  // }
  devServer: {
    proxy: 'https://merry.aibee.cn/img'
  }
}