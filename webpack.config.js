const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack modules
const assets = require('./modules/assets');
const css = require('./modules/css');
const js = require('./modules/js');
const eslint = require('./modules/eslint');
const stylelint = require('./modules/stylelint');

const defaults = {
    context: path.resolve('js'),
    entry: './app',
    output: {
        path: path.resolve('./dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [],
        rules: []
    },
    resolve: {},
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = Object.assign({}, defaults, assets, css, js, eslint, stylelint);