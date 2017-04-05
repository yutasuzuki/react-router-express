var webpack = require('webpack');

module.exports = {
  entry: {
    client: "./src/client.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
};
