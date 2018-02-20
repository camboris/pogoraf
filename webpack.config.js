// procesa el html
const HtmlWebpackPlugin = require("html-webpack-plugin");
// saca el css del js y lo pone en un archivo
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    //devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0"
    },
    module: {
        rules: [{
            test : /\.(s*)css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({filename: 'bundle.css'}),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            hash: true,
            filename: "index.html"
        })
    ]
};
