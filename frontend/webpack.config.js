module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },

    // https://webpack.js.org/configuration/devtool/
    // https://webpack.js.org/guides/typescript/#source-maps
    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                use: {
                    loader: 'ts-loader'
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            }
        ]
    }
};
