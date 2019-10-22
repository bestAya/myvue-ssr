const path = require('path');
const vueSSRserverPlugins = require('vue-server-renderer/server-plugin');
module.exports = {
    entry: [path.join(__dirname, '../src/entry-server.js')],
    plugins: [
        new vueSSRserverPlugins()
    ]
}