const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HappyPack = require('HappyPack')
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const ora = require('ora');
const packageConfig = require('./package.json')
const CopyWebpackPlugin = require('copy-webpack-plugin')
function assetsPath(_path) {
    return path.posix.join('static', _path)
}
// const spinner = ora('Loading unicorns').start();
// setTimeout(() => {
//     spinner.color = 'yellow';
//     spinner.text = 'Loading rainbows';
//     // spinner.stop()
// }, 1000)

module.exports = {
    entry: path.join(__dirname, 'src/main.js'),
    mode: 'develop',
    output: {
        filename: assetsPath('js/[name].js'),
        path: path.join(__dirname, './dist'),
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [{
                    // 一个loader对应一个id
                    loader: "happypack/loader?id=luckfine"
                }]
            },
            {
                test: /\.(sc|sa|c)ss$/,
                use: [{
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
                }] // use的顺序从右往左
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: assetsPath('img/[name].[hash].[ext]')
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    // 文件大小小于limit参数，url-loader将会把文件转为DataUR
                    limit: 10000,
                    name: assetsPath('fonts/[name]-[hash:5].[ext]'),
                    output: 'fonts/'
                }
            },
        ]
    },
    resolve: {
        extensions: [
            '.vue', '.js'
        ],
        modules: ["node_modules"],
        alias: {
            vue: 'vue/dist/vue.min.js',
            components: path.resolve(__dirname + '/src/components/'),
            '@': path.resolve('src')
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            hash: true,
            cache: true,
            favicon:'public/favicon.ico',
            chunksSortMode: 'none',
            title: packageConfig.name, // 可以由外面传入
            filename: 'index.html', // 默认index.html
            template: 'public/index.html',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        new HappyPack({
            // 用唯一的标识符id，来代表当前的HappyPack是用来处理一类特定的文件
            id:'luckfine',
              //如何处理  用法和loader 的配置一样
            loaders: [{
              loader: 'babel-loader?cacheDirectory=true',
            }],
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: 'static',
          ignore: ['.*']
        }
      ]),
        new VueLoaderPlugin(),
    ],
    devServer: {
        clientLogLevel: 'warning', // 输出日志级别
        hot: true, // 启用热更新
        contentBase: path.resolve(__dirname, 'dist'), // 告诉服务器从哪里提供内容
        publicPath: '/', // 此路径下的打包文件可在浏览器下访问
        compress: true, // 启用gzip压缩
        // publicPath: './',
        disableHostCheck: true,
        host: 'localhost',
        port: 8080,
        open: false, // 自动打开浏览器
        overlay: { // 出现错误或者警告时候是否覆盖页面线上错误信息
            warnings: true,
            errors: true
        },
        quiet: true,
        watchOptions: { // 监控文件相关配置
            poll: true,
            ignored: /node_modules/, // 忽略监控的文件夹, 正则
            aggregateTimeout: 300, // 默认值, 当你连续改动时候, webpack可以设置构建延迟时间(防抖)
        }
    },
    devServer: {
        historyApiFallback: {
            index: `/dist/index.html`
        },
        port: 9000, //端口改为9000
        open: false, // 自动打开浏览器，适合懒人
        disableHostCheck: true
    }
}