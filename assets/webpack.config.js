var ExtractTextPlugin = require("extract-text-webpack-plugin");
var sass = new ExtractTextPlugin("[name].css");
var bower_dir = __dirname + "/bower_components";

module.exports = {
  entry: "./js/entry.js",
  output: {
    path: "../site/themes/i3camini/static/",
    filename: "[name].js"
  },
  resolve: {
    alias: {
      "blueimp-gallery": bower_dir + "/blueimp-gallery/js/blueimp-gallery.js",
      "bootstrap": bower_dir + "/bootstrap/dist/js/bootstrap.js",
      "jquery": bower_dir + "/jquery/src/jquery.js"
    }
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: sass.extract(["css", "sass"])
    },

    // Hack required for blueimp gallery.
    // https://gist.github.com/chlab/fe7b8b4116fe79121035107be7e8b2ad
    {
      test: require.resolve(
        bower_dir + "/blueimp-bootstrap-image-gallery/js/" +
        "bootstrap-image-gallery"
      ),
      loader: "imports?define=>false"
    }, {
      test: require.resolve(
        bower_dir + "/blueimp-gallery/js/blueimp-gallery.js"
      ),
      loader: "imports?define=>false"
    }, {
      test: require.resolve(
        bower_dir + "/blueimp-gallery/js/jquery.blueimp-gallery.js"
      ),
      loader: "imports?define=>false"
    },

    // Copy files from assets to output.
    {
      test: /\.jpg$/,
      loader: "file"
    }, {
      test: /\.png$/,
      loader: "file"
    }, {
      test: /\.gif$/,
      loader: "file"
    },

    // Configuration needed by Bootstrap themes.
    // the url-loader uses DataUrls.
    // the file-loader emits files.
    {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
    }]
  },

  plugins: [
    sass
  ]
};
