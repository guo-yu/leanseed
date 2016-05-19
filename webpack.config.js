var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var plugins = [ new ExtractTextPlugin('app.min.css') ]

if (process.env.NODE_ENV === 'production')
  plugins.push(new webpack.optimize.UglifyJsPlugin())

module.exports = {
  entry: './libs/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.min.js'
  },
  plugins: plugins,
  postcss: function(webpack) {
    return [
      require('postcss-import')({ addDependencyTo: webpack }),
      require('postcss-url')(),
      require('precss')(),
      require('postcss-cssnext')(),
      require('postcss-browser-reporter')(),
      require('postcss-reporter')()
    ]
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
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?minimize!postcss-loader')
    },
    { test: /\.jpg$/, loader: "file-loader" },
    { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=5000' }]
  },
  devServer: {
    hot: true,
    contentBase: './dist'
  }
}
