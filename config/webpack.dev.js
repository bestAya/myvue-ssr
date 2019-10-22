const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const vueSSRclientPlugins = require('vue-server-renderer/client-plugin');
module.exports = merge(baseConfig, {
    entry: [path.join(__dirname, '../src/webapp/entry-client.js')],
    plugins: [
        new vueSSRclientPlugins(),
    ]
})
