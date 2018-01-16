import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'TAKE.GIF',
      template: 'app/index.html'
    }),
    new ExtractTextPlugin({filename: 'app.bundle.css'})
  ],
  module: {
    rules: [{
      test: /\.worker\.js$/,
      use: { loader: 'worker-loader' }
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader']
      })
    }]
  }
}
