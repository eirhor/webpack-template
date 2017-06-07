module.exports = function(isProd, entryFile, outputFile, webpack){
    var plugins = [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin()
    ];

    if (isProd){
        plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }));
        plugins.push(new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
            }
        }));
    }
    else {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new webpack.NoErrorsPlugin());
    }

    return {
        entry: entryFile,
        output: {
            filename: outputFile
        },
        module: {
            loaders: [
                {
                    test: /\.(js|es6|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.es6', '.jsx']
        },
        plugins: plugins
    };
};