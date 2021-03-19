
const path = require('path');

// module.exports = {
//     entry: './src/app.js',
//     output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             loader: 'babel-loader',
//             test: /\.js$/,
//             exclude:/node_modules/
//         }, {
//             test: /\.s?css$/,
//             use: [
//                 'style-loader',
//                 'css-loader',
//                 'sass-loader'
//             ]
//         }]
//     },
//     // This is for source mapping 
//     devtool: 'eval-cheap-module-source-map',
//     devServer: {
//         contentBase: path.join(__dirname, 'public')
//     },
// };

module.exports = (env) =>{
    console.log('env', env)

    const isProduction = (env.production === true);

    return {
        entry: './src/app.js',
    output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude:/node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // This is for source mapping and dev-server
    devtool: isProduction ? 'source-map' :'inline-source-map',
    mode: isProduction ? 'production' : 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        }
    }
}


