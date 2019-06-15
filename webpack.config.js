const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const buildDate = new Date().getTime();

module.exports = {
    output: {
        filename: "[name].[hash].js"
    },
    plugins: [
        new webpack.DefinePlugin({
            __BUILD_DATE__: JSON.stringify(buildDate)
        }),
        new CopyPlugin([
            {
                from: "src/assets/*.*",
                to: "assets/[name].[ext]"
            },
            {
                test: /\.(png|jpg)$/,
                from: "src/assets/images/*.*",
                to: `assets/images/[name].${buildDate}.[ext]`
            },
            {
                from: "src/data/*.json",
                to: `data/[name].${buildDate}.[ext]`
            }
        ])
    ]
};
