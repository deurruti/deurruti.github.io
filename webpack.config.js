var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
   new ExtractTextPlugin('[name].css')
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
      loader: ExtractTextPlugin.extract('style','css!sass')
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
 }
}
