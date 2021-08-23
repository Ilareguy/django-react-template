module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.mdx', '.css'],
    },

    // https://webpack.js.org/configuration/devtool/
    // https://webpack.js.org/guides/typescript/#source-maps
    devtool: 'source-map',

    output: {
        path: './static',
        filename: 'main.js',
        library: {
            type: "global" // "global" is fine currently when exporting a final, fully transpiled web app
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'postcss-loader',
                    options: {
                        config: {
                            path: 'postcss.config.js'
                        },
                        ident: 'postcss',
                        sourceMap: true,
                    }
                }]
            }
        ]
    },
};
