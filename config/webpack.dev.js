const path = require('path');
<<<<<<< HEAD
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config.js');
const vueSSRclientPlugins = require('vue-server-renderer/client-plugin');
module.exports = merge(baseConfig, {
    entry: [path.join(__dirname, '../src/webapp/entry-client.js')],
    plugins: [
        new vueSSRclientPlugins(),
    ]
})
=======
const vueSSRclientPlugins = require('vue-server-renderer/client-plugin');
module.exports = {
    entry: [path.join(__dirname, '../src/entry-client.js')],
    plugins: [
        new vueSSRclientPlugins()
    ]
}
>>>>>>> b54893e5196f395f6f6119f2fb33d733d204a5e0
