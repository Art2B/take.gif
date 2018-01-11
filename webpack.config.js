import 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: './app/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Take a gif"
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
};
