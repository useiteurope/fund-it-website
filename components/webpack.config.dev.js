const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    mode: "production",
    entry: {
        youtube_playlist: path.resolve(__dirname, "youtube-playlist", "youtube-playlist.ts"),
    },
    devtool: 'inline-source-map',
    output: {
        library: "[name]",
        path: path.join(__dirname, "../public/assets/js"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".ts"],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};