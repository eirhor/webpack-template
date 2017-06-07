const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nestedObjectAssign = require('nested-object-assign');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const isProd = (process.env.NODE_ENV === "production");

// webpack modules
var assets = require('./modules/assets')(isProd);
var css = require('./modules/css')(isProd, ExtractTextPlugin, 'bundle.css');
var js = require('./modules/js')(isProd, './test/src/app', 'bundle.js', webpack);
var eslint = require('./modules/eslint')(isProd);
var stylelint = require('./modules/stylelint')(isProd, StyleLintPlugin);

const defaults = {
    output: {
        path: './test/dist'
    }
};

module.exports = nestedObjectAssign({}, defaults, assets, css, js, eslint, stylelint);