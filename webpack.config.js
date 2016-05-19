var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin')

module.exports = {
  entry: './libs/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].min.js'
  },
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
  plugins: [
    new WebpackCleanupPlugin(), // config `{ exclude: ['file.js', 'file.css'] }` for exclude files
    new ExtractTextPlugin('app.[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true
      },
      templateContent: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>A LeanCloud Seed Project</title>
        </head>
        <body>
          <div id="app">
            <router-view>
            </router-view>
          </div>
        </body>
        </html>
      `
    })
  ],
  devServer: {
    hot: true,
    contentBase: './dist'
  }
}
