const path = require('path');
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
};