const merge = require('webpack-merge')
const webpack = require('webpack');
const baseConfig = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssertsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'
const CopyWebpackPlugin = require('copy-webpack-plugin')

const path = require('path');
// const rm = require('rimraf')
// const spinner = ora('Loading unicorns').start();
// rm(path.join(path.join(__dirname,'dist')), err => {
//     if (err) throw err
//     webpack(webpackConfig, (err, stats) => {
//       spinner.stop()
//       if (err) throw err
//       process.stdout.write(stats.toString({
//         colors: true,
//         modules: false,
//         children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
//         chunks: false,
//         chunkModules: false
//       }) + '\n\n')

//       if (stats.hasErrors()) {
//         console.log(chalk.red('  Build failed with errors.\n'))
//         process.exit(1)
//       }

//       console.log(chalk.cyan('  Build complete.\n'))
//       console.log(chalk.yellow(
//         '  Tip: built files are meant to be served over an HTTP server.\n' +
//         '  Opening index.html over file:// won\'t work.\n'
//       ))
//     })
//   })
function assetsPath(_path) {
    return path.posix.join('static', _path)
}
module.exports = merge(baseConfig, {
    output: {
        path: path.join(__dirname, './dist'),
        filename: assetsPath('js/[name].[chunkhash].js'),
        chunkFilename: assetsPath('js/[id].[chunkhash].js')
      },
    module: {
        rules: [
            {
                test: /\.(sc|sa|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        usedExports: true,
        concatenateModules: true,
        minimizer: [
            // 压缩CSS
            new OptimizeCSSAssertsPlugin({}),
            // 压缩JS
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: 'static',
                ignore: ['.*']
            }
        ]),
        new MiniCssExtractPlugin({
            filename: devMode ? assetsPath('css/[name].css') : assetsPath('css/[name].[hash:8].css'),
            chunkFilename: devMode ? assetsPath('css/[id].css') : assetsPath('css/[id].[hash:8].css')
        })
    ]
})