// Webpack configuration
module.exports = {
  module: {
    rules: [
      {
        test: /\.?<id>(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.?<id>(s?)css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.?<id>(png|jpg|jpeg|svg|webp|gif)$/,
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
