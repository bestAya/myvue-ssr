const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const vueSSRserverPlugins = require('vue-server-renderer/server-plugin');
module.exports = merge(baseConfig, {
    target: 'node',
    entry: [path.join(__dirname, '../src/webapp/entry-server.js')],
    plugins: [
        new vueSSRserverPlugins()
    ]
})