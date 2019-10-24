const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const vueSSRclientPlugins = require('vue-server-renderer/client-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(baseConfig, {
    mode: 'production',
    entry: [path.join(__dirname, '../src/webapp/entry-client.js')],
    // output: {
    //     // path: conf.rootPath + '/build/assets/',
    //     path: path.resolve(__dirname, '../dist/assets/'),
    //     publicPath: '/',
    //     filename: 'js/[name].[chunkhash:5].bundle.js'
    // },
    module: {

    },
    plugins: [
        new vueSSRclientPlugins(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/webapp/index.html',
            inject: false,
            minify: {
                // removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        })
    ]
})
