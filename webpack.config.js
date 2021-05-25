const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
    entry: "./source/ts/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    },
    plugins: [new ESLintPlugin()],
};