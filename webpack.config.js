
module.exports = {
  entry: './2canvases.js',
  output: {
    path: __dirname,
    filename: './bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  }
}
