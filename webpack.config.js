var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // will output as public/build/app.js 
    .addEntry('app', './assets/js/app.js')

    .enableSourceMaps(!Encore.isProduction())
    .disableSingleRuntimeChunk()
;

module.exports = Encore.getWebpackConfig(); 
