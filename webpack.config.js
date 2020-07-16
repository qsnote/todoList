const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  mode: 'development',
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
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
      // {
      //   test: /\.js$/,
      //   exclude: /(node_modules|bower_components)/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env']
      //     }
      //   }
      // },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader, // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS 最后的先执行
          }
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
    new HTMLPlugin(),
    
  ]
}

if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: '0.0.0.0',
    overlay: {
      errors: true,
    },
    // open: true
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.output.filename = '[name].[chunkhash:8].js'
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    })
  )
}

module.exports = config