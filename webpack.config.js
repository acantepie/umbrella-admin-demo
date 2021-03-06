const path = require('path');
const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addAliases({
        umbrella_core: path.join(__dirname, '/vendor/umbrella2/corebundle/assets/'),
        umbrella_admin: path.join(__dirname, '/vendor/umbrella2/adminbundle/assets/')
    })

    .addEntry('front', './assets/front/front.js')
    .addEntry('admin', './assets/admin/admin.js')
    .addEntry('admin_ckeditor', './assets/admin/ckeditor.js')

    .enableSassLoader()

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()

    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
;

module.exports = Encore.getWebpackConfig();