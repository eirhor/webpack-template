module.exports = {
    module: {
        loaders: [
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file?name=./assets/fonts/[name].[ext]'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file?name=./assets/img/[name].[ext]"
            }
        ]
    }
};