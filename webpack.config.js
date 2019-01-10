var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    // will output as public/build/app.js 
    .addEntry('app', './assets/js/app.js')
    .addEntry('checkout', './assets/js/checkout.js')

    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .disableSingleRuntimeChunk()
    .splitEntryChunks()
;

module.exports = Encore.getWebpackConfig(); 
