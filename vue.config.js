module.exports = {
  lintOnSave: false,
  configureWebpack: {
    devtool: "source-map",
  },
  devServer: {
    port: 8081, // 端口
  },
  publicPath: '/',
  pages: {
    index: {
      entry: 'src/index/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: "Home"
    },
    page2: {
      entry: 'src/pages2/page2.js',
      template: 'public/page2.html',
      filename: 'page2.html',
      title: "Page2"
    }
  }
}