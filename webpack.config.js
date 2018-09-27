/* jslint node:true */
/* For SASS bug http://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html */
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpack = require('webpack'),
    path = require('path'),
    fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'javascript/bundle.js'
    },
    module: {
        loaders: [
            {
                test: 'src/javascript/main.js',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    externals: nodeModules,
    plugins: [
        new ExtractTextPlugin('stylesheets/styles.css', {
            allChunks: true
        })
    ],
    devtool: 'sourcemap'
};
