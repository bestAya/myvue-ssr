const path = require('path');
const vueSSRclientPlugins = require('vue-server-renderer/client-plugin');
module.exports = {
    entry: [path.join(__dirname, '../src/entry-client.js')],
    plugins: [
        new vueSSRclientPlugins()
    ]
}