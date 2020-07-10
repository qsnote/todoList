const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
//抽离css文件
const cssExtractTextPlugin = new ExtractTextPlugin({filename: 'css/[name].css',allChunks: true})

const config = {
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist1')
  },
  devServer: {
    contentBase: './dist1',
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader",

        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    cssExtractTextPlugin,
    new HtmlWebpackPlugin({ template: './src/index1.html' }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config