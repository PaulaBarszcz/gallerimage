'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

module.exports = {
  entry: ['babel-polyfill', 'whatwg-fetch', './src/js/main.jsx'],

  output: {
    path: __dirname,
    filename: './js/app.js'
  },

  plugins: [
    new ExtractTextPlugin('./css/app.css')
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/, exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'stage-2', 'react']}
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ],

  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};