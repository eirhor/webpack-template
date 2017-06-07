module.exports = function(isProd){
    if (isProd){
        // Prod stuff
    }
    else {
        // Dev stuff
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.(eot|ttf|woff|woff2)$/,
                    loader: 'file-loader?name=./assets/fonts/[name].[ext]'
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader: "file-loader?name=./assets/img/[name].[ext]"
                }
            ]
        }
    };
};