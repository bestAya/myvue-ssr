const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    devtool: devMode ?
        false : '#cheap-module-source-map',
    output: {
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: './js/[name].[chunkhash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
                        }
                    ] // use的顺序从右往左
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    },
                }, ],
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
            components: path.resolve(__dirname + '/src/webapp/components/'),
            '@': path.resolve('src')
        }
    },
}