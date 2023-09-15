const Dotenv = require('dotenv-webpack');
module.exports = {
    plugins: [
        new Dotenv()
    ]
}

resolve: {
    fallback: { 'path': require.resolve('path-browserify') },
    extensions: ['.jsx', '.js', '.tsx', '.ts'],
 }