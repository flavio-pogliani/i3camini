const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sass = new ExtractTextPlugin("[name].css");


module.exports = {
  entry: "./js/entry.js",
  output: {
    path: path.resolve(__dirname, "..", "site", "themes", "i3camini", "static"),
    filename: "[name].js"
  },
  resolve: {
    alias: {
      // `blueimp-bootstrap-image-gallery` looks for `blueimp-gallery` in the worng place.
      "./blueimp-gallery": path.resolve(
        __dirname, "node_modules", "blueimp-gallery", "js", "blueimp-gallery.js"
      ),
    }
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: sass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      })

    // Load images
    }, {
      test: /\.(jpg|png|gif)$/,
      use: [{
        loader: 'url-loader'
      }]

    // Fonts rules
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      }]
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/octet-stream'
        }
      }]
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      use: [{loader: 'file-loader'}]
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
          mimetype: 'application/svg+xml'
        }
      }]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    sass
  ]
};
