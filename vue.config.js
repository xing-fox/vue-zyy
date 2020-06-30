const path = require("path")
const CompressionPlugin = require("compression-webpack-plugin")
const myTheme = path.resolve(__dirname, "src/style/theme.less")

module.exports = {
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "${myTheme}";`
        }
      }
    }
  },
  outputDir: "dist",
  assetsDir: "static",
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://39.96.62.114:10086/', // API服务器的地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
  productionSourceMap: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })]
      }
    }
  }
}
