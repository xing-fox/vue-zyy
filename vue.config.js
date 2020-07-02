const path = require("path")
// const WebpackAliyunOss = require("webpack-aliyun-oss")
const CompressionPlugin = require("compression-webpack-plugin")
const myTheme = path.resolve(__dirname, "src/style/theme.less")
// const Oss = require('./oss')

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
  publicPath: '/bmxp/',
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
    // let webpackAliyunOss = [
    //   new WebpackAliyunOss({
    //     from: "./dist/**",
    //     region: Oss.region,
    //     accessKeyId: Oss.accessKeyId,
    //     accessKeySecret: Oss.accessKeySecret,
    //     bucket: Oss.bucket,
    //     setOssPath: filePath => {
    //       let index = filePath.lastIndexOf("dist")
    //       let Path = filePath.substring(index + 4, filePath.length)
    //       return Path.replace(/\\/g, "/")
    //     },
    //     setHeaders: filePath => {
    //       return {
    //         "Cache-Control": "max-age=31536000"
    //       }
    //     }
    //   })
    // ]
    // config.plugins = [ ...config.plugins, ...webpackAliyunOss ]
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
