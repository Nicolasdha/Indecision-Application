// two pieces of info needed to set it up
// entry point- where app kicks off = app.js inside
// output point - where to put the final bundle file ( one big js file that has everything)

//webpack.js.org 


// Module is node - a way to expose somthing to another file - webpack will grab this file run it and have access to whatever is on that object

// __dirname contains path to current folder

/* single function from NODE to join together two paths (absolute path and local path to folder) 

Node PATH is the built in module that has a bunch of methods for path manipulation  - PATH.JOIN()
path.join('/foo', "bar", "baz/asdf", "poop", "..")
returns: '/foo/bar/baz/asdf' b/c the .. goes up a dir

*/



/*    LOADER

Loaders customizes the behavior of webpack when it loads a given file like when anytime webpack sees a JS file or SCSS -> CSS 

Happens on the module property on our module object  - on the RULES property

the MODULE.RULES property helps you set up an array of rules that help define how you use your loaders - one rule for JSX -> JS with Babel and another with SCSS -> CSS
rules: [{
    loader: Which loader to use,
    test: What types of files we actually want to run this on - REGEX TO TARGET FILES THAT END IN SOMETHING (like JS)
    exclude: Excludes a given set of files used witH NODE_MODULES folder a lot I would imagine
}]
 */


 /*
 BABEL 
Need to tell babel what to use and how to parse data - did this in the babel build script but need to add it into WEBPACK to set up those presets 
NEED TO CREATE A SEPERATE CONFIGURATION FILE FOR BABEL IN THE ROOT OF THE PROJ AND NEEDS TO BE CALLED       .babelrc

This file we take all of the arguments passed into the command line and put it there - a presets array

{
    "presets": [
        "env", 
        "react"
    ]
}

 */ 


 /*
 ------- CSS ------
CSS-LOADER
 Need to DL and use a LOADER to teach webPack to load in CSS by teaching it to take CSS and convert to JS representation

 STYLE-LOADER
 Takes that css that gets converted to JS and adds it into the DOM by injecting the Style tag that will get it to actually show up in the browser


 Need to set them both up in a RULE - if ever need to use multiple loaders you need to use USE instead of loader

 USE lets you use an array of loaders

Need sass-loader node-sass but only need to put sass loader in the use: array in the rule object

 */

const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
    // needs two things: path and filename
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
    // This is for source mapping 
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    },
};



