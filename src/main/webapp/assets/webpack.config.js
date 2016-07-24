module.exports = {
    entry: {
        main: "./frontend/GravityApp.js"
    },
    output: {
        filename: "./public/app.js"
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }]
    },

    devtool: "source-map"
};