const path = require('path'),
      webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      build_dir = path.resolve(__dirname, './dist/'),
      src_dir = path.resolve(__dirname, './src/');

module.exports = {
  entry: src_dir + '/index.jsx',
  output: {
    path: build_dir,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader?-autoprefixer', 'sass-loader']})
      },
      {
        test: /\.svg/,
        use: {
            loader: 'svg-url-loader'
        }
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: src_dir + '/index.html'
    })
  ]
};
