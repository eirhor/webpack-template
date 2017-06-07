module.exports = function(isProd){
    if (isProd){
        // Prod stuff
    }
    else {
        // Dev stuff
    }

    return {
        module: {
            rules: [
                {
                    test: /\.(js|es6|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        'babel-loader',
                        'eslint-loader'
                    ],
                    options: {
                        //eslint options
                    }
                }
            ]
        }
    };
};