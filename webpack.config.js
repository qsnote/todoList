const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  mode: 'none',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'vue-style-loader'
        ]
      },
      {
        test: /\.css/,
        use: [
          'style-loader',//写到html中
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|gif|jpeg|png|svg)$/,
        use: [
          {
            // 依赖file-loader
            loader: 'url-loader',//如果文件小于limit,可以把图片转化到base64写到代码中，减少http请求
            options: {
              limit: 1024,
              name: '[name].[ext]'//ext--拓展名
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = config