const path = require('path');
const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')

    .addAliases({
        umbrella_core: path.join(__dirname, '/vendor/umbrella2/corebundle/Resources/assets/'),
        umbrella_admin: path.join(__dirname, '/vendor/umbrella2/adminbundle/Resources/assets/')
    })

    .addEntry('admin', './assets/admin/Admin.js')
    .addEntry('ckeditor', './vendor/umbrella2/corebundle/Resources/assets/vendor/ckeditor/ckeditor.js')

    .enableSassLoader()

    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    //.enableBuildNotifications()

    .configureBabel(function (babelConfig) {
        babelConfig.plugins.push('transform-class-properties');
    })

    .copyFiles([
        {
            from: './assets/images',
            to: 'images/[path][name].[ext]'
        },
        {
            from: './vendor/umbrella2/corebundle/Resources/assets/images',
            to: 'images/[path][name].[ext]'
        },
        {
            from: './node_modules/ckeditor4/',
            to: 'ckeditor4/[path][name].[ext]',
            pattern: /\.(js|css)$/,
            includeSubdirectories: false
        },
        {
            from: './node_modules/ckeditor4/adapters',
            to: 'ckeditor4/adapters/[path][name].[ext]'
        },
        {
            from: './node_modules/ckeditor4/lang',
            to: 'ckeditor4/lang/[path][name].[ext]'
        },
        {
            from: './node_modules/ckeditor4/plugins',
            to: 'ckeditor4/plugins/[path][name].[ext]'
        },
        {
            from: './node_modules/ckeditor4/skins',
            to: 'ckeditor4/skins/[path][name].[ext]'
        },
        {
            from: './node_modules/ckeditor4/vendor',
            to: 'ckeditor4/vendor/[path][name].[ext]'
        }
    ])

    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    });

module.exports = Encore.getWebpackConfig();