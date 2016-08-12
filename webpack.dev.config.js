// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/client/index.html',
//   filename: 'index.html',
//   inject: 'body'
// })
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    path.join(__dirname, 'client/index.js')
  ],
  output: {
    // path: __dirname + '/dist',
    path: path.resolve(__dirname + 'dist/'),
    // publicPath:'http://localhost:' + process.env.PORT || '8000' + '/dist',
    publicPath: '/',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  target: 'web'
}
