const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: '#source-map',
  entry: {
    background: './background.js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules\/(?!metamask-extension)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
      },
    ],
  },
  plugins: [new CopyWebpackPlugin(['manifest.json'])],
};
