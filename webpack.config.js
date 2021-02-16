const path = require('path');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                    loader: 'style-loader', // inject CSS to page
                    }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                    },  {
                        loader: 'sass-loader' // compiles Sass to CSS
                     }
                ]
            }
        ]
    }
}