import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

const APP_DIR = path.resolve(__dirname, 'app')
const BUILD_DIR = path.resolve(__dirname, 'build')

const buildConfig = env => {
  return {
    entry: './app/scripts/index.js',
    output: {
      path: BUILD_DIR,
      filename: 'app.bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './build',
      historyApiFallback: true
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
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }, {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }]
    }
  }
}

export default buildConfig
