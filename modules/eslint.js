module.exports = {
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