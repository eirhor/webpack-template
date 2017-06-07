module.exports = function(isProd, extractTextPlugin, outputFile) {
    if (isProd){
        // Production stuff
    }
    else {
        // Dev stuff
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: extractTextPlugin.extract('style', 'css-loader!autoprefixer-loader!sass-loader')
                }
            ]
        },
        plugins: [
            new extractTextPlugin(outputFile)
        ]
    };
};