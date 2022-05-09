// Webpack configuration
module.exports = {
  module: {
    rules: [
      {
        test: /\.(?<scripts>js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(?<styles>css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(?<formats>png|jpg|jpeg|svg|webp|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', 'tsx'],
  },
  devServer: {
    allowedHosts: ['.gitpod.io'],
  },
}
