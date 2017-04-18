var webpack = require('webpack');
var path = require('path');
var polyfill = require("babel-polyfill");

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    },
    {
      test: /\.(scss|css)$/,
      loader: "style-loader!css-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
    },
    {
      test: /\.less$/,
      loader: "style-loader!css-loader!less-loader"
    },
    {
      test: /\.(eot|svg|ttf|woff2|woff|png|jpe?g|gif)$/,
      loader: 'file-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api*': 'http://localhost:3000',
    }
  },
  plugins: [
  ]
};
