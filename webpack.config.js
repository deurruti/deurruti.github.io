
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
      }
    ]
  },
  resolve: {
   extensions: ['', '.js', '.jsx']
 }
}
