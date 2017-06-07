const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nestedObjectAssign = require('nested-object-assign');
const StyleLintPlugin = require('stylelint-webpack-plugin');

var isProd = (process.env.NODE_ENV === "production");

// webpack modules
var assets = require('./modules/assets')(isProd);
var css = require('./modules/css')(isProd, ExtractTextPlugin);
var js = require('./modules/js')(isProd, path.resolve('js'), './js/app', 'bundle.js', webpack);
var eslint = require('./modules/eslint')(isProd);
var stylelint = require('./modules/stylelint')(isProd, StyleLintPlugin);

const defaults = {
    output: {
        path: './dist'
    }
};

module.exports = nestedObjectAssign({}, defaults, assets, css, js, eslint, stylelint);