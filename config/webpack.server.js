const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const vueSSRserverPlugins = require('vue-server-renderer/server-plugin');
module.exports = merge(baseConfig, {
    target: 'node',
    entry: [path.join(__dirname, '../src/webapp/entry-server.js')],
    output: {
        //此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
        libraryTarget: 'commonjs2',
        filename: '[name].bundle.js'
    },
    plugins: [
        new vueSSRserverPlugins(),
    ]
})