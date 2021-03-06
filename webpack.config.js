var path = require('path');
var webpack = require('webpack');

var config = {
  debug: process.env.NODE_ENV !== 'production',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    path.resolve('client/main.cjsx')
  ],
  output: {
    path: path.join(__dirname, 'public', 'js'),
    filename: 'bundle.js',
    publicPath: '/js'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    })
  ],
  module: {
    loaders: [
      { 
        test: /\.cjsx$/, 
        loaders: ['coffee', 'cjsx']
      },
      { 
        test: /\.coffee$/, 
        loader: 'coffee' 
      },
      {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              presets: ['react', 'es2015']
          }
      }
    ]
  },
  resolve: {
    extensions: ['', ".webpack.js", ".web.js", '.js', '.jsx']
  }
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = config;
