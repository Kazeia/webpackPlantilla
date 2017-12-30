module.exports = {
    entry: [
        './src/js/lusho.js',
        './src/js/app.js'
    ],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    }
}