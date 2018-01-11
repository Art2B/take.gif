import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'

export default {
  entry: './app/main.js',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: "Take a gif",
      template: 'app/index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'build'), 
    filename: 'main.bundle.js'
  }
}
