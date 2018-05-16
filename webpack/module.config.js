const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (theme) {
  return {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          "presets": ["es2015", "react"],
          "plugins": [
            ["antd", {
              "style": true
            }]
          ]
        }
      }
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }]
      })
    }, {
      test: /\.less$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        }, {
          loader: 'less-loader',
          options: {
            modifyVars: theme
          }
        }]
      })
    }, {
      test: /\.(png|jpg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10240,
          name: '[path][name].[ext]'
        }
      }]
    }, {
      test: /\.(woff|svg|eot|ttf)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1,
          name: '[path][name].[ext]'
        }
      }]
    }
    ]
  };
}