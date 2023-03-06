const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[name]_[local]-[hash:base64:5]',
              },
            },
          },
          "sass-loader"
        ],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ]
};