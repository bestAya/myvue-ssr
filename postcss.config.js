<<<<<<< HEAD
module.exports = {
    plugins: [
        require("precss"),
        require('autoprefixer'),
        require('cssnano')({
            preset: 'default',
        }),
    ]

=======
var autoprefixer = require("autoprefixer");
var precss = require("precss");
module.exports = {
    plugins: [
        precss,
        autoprefixer
    ]
>>>>>>> 8f3ac3c80697db50152ef6aa6af5d8a95225264f
}