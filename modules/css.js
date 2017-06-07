module.exports = function(isProd, extractTextPlugin, outputFile) {
    var extractSass = new extractTextPlugin({
        fileName: outputFile
    });

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
                    use: extractSass.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader'
                            },
                            {
                                loader: 'autoprefixer-loader'
                            },
                            {
                                loader: 'sass-loader'
                            }
                        ]
                    })
                }
            ]
        },
        plugins: [
            extractSass
        ]
    };
};