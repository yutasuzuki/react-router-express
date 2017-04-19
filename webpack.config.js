var webpack = require('webpack');

module.exports = {
  entry: {
    app: "./assets/js/admin/app.js",
  },
  output: {
    filename: '[name].js',
    path: __dirname + "/public/js",
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
