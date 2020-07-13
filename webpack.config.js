const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: 'development',
  target: 'web',
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
          'vue-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
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
    // js 中可以直接访问这个环境变量
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"': '"production"'
      }
    }),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    open: true
  }
}

module.exports = config