var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'player.js',
    library: 'Enjoy',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
            presets: ['es2015'],
            "plugins": [
              "add-module-exports"
            ]            
        }
      },
      { test: /\.css$/, loader: 'style!css' },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.svg$/, loader: 'svg-inline'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    })
  ],
  resolve: {
      root: path.resolve('./src'),
      extensions: ['', '.js']
  }
} 