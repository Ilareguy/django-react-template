const path = require('path');

const isProductionBuild = process.env.npm_lifecycle_event === 'build:prod';
console.log(isProductionBuild ? "Production build" : "Development build");

module.exports = {
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },

    // https://webpack.js.org/configuration/devtool/
    // https://webpack.js.org/guides/typescript/#source-maps
    devtool: isProductionBuild ? 'nosources-source-map' : 'source-map',

    watchOptions: {
        ignored: './node_modules',
    },

    mode: isProductionBuild ? 'production' : 'development',
    optimization: {
        usedExports: true,
        removeAvailableModules: isProductionBuild,
        removeEmptyChunks: isProductionBuild,
    },

    output: {
        path: './static',
        filename: 'main.js',
        chunkFilename: isProductionBuild ? 'pages/[id].[chunkhash].js' : 'pages/[id].js',
        library: {
            type: "global",
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx|ts)?$/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                use: [
                    "ts-loader"
                ]
            }/*,
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
            }*/
        ]
    },
};
