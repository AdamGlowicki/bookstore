const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const API_URL = {
  development: JSON.stringify('http://localhost:3000')
};

module.exports = (env) => {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
          resolve: {
            extensions: ['.js', '.jsx']
          }
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                esModule: false,
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader'
            }
          ]
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
    },
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      }),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      }),
      new webpack.DefinePlugin({
        API_URL: API_URL[env.NODE_ENV]
      })
    ]
  }
};
