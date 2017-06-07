module.exports = {
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
    }
};