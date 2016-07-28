//var ExtractTextPlugin = require('extract-text-webpack-plugin');
/*
plugins: [
 new ExtractTextPlugin('[name].css')
],
loader: ExtractTextPlugin.extract('style','css!sass')
*/
module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module:{
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['babel']
      },
      {
      test: /\.scss$/,
      loader: 'style!css!sass'
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
 }
}
