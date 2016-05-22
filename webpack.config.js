const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve('./build'),
    publicPath: 'http://localhost:1337/',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json', '.scss']
  },
  plugins: [],
  devtool: 'source-map'
};
