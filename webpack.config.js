const path = require('path');

const PATHS = {
    app: "./js/app",
    build: path.join(__dirname, 'build')
};

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    entry: {
        app: PATHS.app
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    }
}