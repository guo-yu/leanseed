var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var plugins = [ new ExtractTextPlugin('app.min.css') ]

module.exports = {
  entry: './libs/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js'
  },
  plugins: plugins,
  cssnext: {
    browsers: '> 1%, last 2 versions'
  },
  module: {
    loaders: [{ 
      test: /\.vue$/, 
      loader: 'vue' 
    },{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: { presets: ['es2015'] }
    },{
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!cssnext-loader')
    },
    { test: /\.jpg$/, loader: "file-loader" },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=50000' }]
  },
  devServer: {
    contentBase: './dist'
  }
}