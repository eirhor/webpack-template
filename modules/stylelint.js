module.exports = function(isProd, styleLintPlugin){
    if (isProd){
        //Prod stuff
    }
    else {
        //Dev stuff
    }

    return {
        plugins: [
            new styleLintPlugin({
                // stylelint options
            })
        ]
    };
};