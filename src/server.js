import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackDevConfig from '../webpack/webpack.dev'
import { webpackDevPort } from '../config'

new WebpackDevServer(webpack(webpackDevConfig), {
  publicPath: webpackDevConfig.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(webpackDevPort, 'localhost', (err, result) => {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
