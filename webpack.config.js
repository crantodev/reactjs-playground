var HtmlWebpackPlugin = require('html-webpack-plugin');
var AutoDllPlugin = require('autodll-webpack-plugin');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    devServer: {
        contentBase: __dirname + "/dist",
        compress: true,
        port: 9000
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './dist/index.html'
        }),
        new AutoDllPlugin({
            inject: true, // will inject the DLL bundles to index.html
            filename: '[name]_[hash].js',
            entry: {
                vendor: [
                    'react',
                    'react-dom',
                    'react-router-dom'
                ]
            }
        })
    ]
    // watch: true
    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: "babel",
    //             query: {
    //                 presets: ["es2015"]
    //             }
    //         }
    //     ]
    // }
};