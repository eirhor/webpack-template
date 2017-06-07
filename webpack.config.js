const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nestedObjectAssign = require('nested-object-assign');

// webpack modules
var assets = {};
var css = {};
var js = {};
var eslint = {};
var stylelint = {};

var isProd = false;  // TODO: Add node_env check

if (isProd) {
    //TODO: Recreate modules to be a function returning prod config
    assets = require('./modules/assets')();
    css = require('./modules/css')();
    js = require('./modules/js')();
    eslint = require('./modules/eslint')();
    stylelint = require('./modules/stylelint')();
}
else {
    //TODO: Recreate modules to be a function returning dev config
    assets = require('./modules/assets')();
    css = require('./modules/css')();
    js = require('./modules/js')();
    eslint = require('./modules/eslint')();
    stylelint = require('./modules/stylelint')();
}

const defaults = {
    context: path.resolve('js'),
    entry: './app',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = nestedObjectAssign({}, defaults, assets, css, js, eslint, stylelint);