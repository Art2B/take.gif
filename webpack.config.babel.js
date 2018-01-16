import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'build')

export default {
  entry: './app/main.js',
  output: {
    path: BUILD_DIR,
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
    new ExtractTextPlugin({filename: 'app.bundle.css'}),
    new FaviconsWebpackPlugin('./app/assets/favicon.png')
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
    }, {
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader'
    }]
  }
}
