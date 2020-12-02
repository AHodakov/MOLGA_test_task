const MiniCssExtract = require('mini-css-extract-plugin');
const HtmlWebpack = require('html-webpack-plugin');

module.exports = {
  output: {
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtract.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtract({
      filename: 'css/[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpack({
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 8080,
    open: false,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};
