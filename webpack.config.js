const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = process.env.NODE_ENV;
const devMode = mode !== 'production';

//--------------------------------------------
// config
const CONFIG = {};

CONFIG.alias = {
    umbrella_core: path.resolve(__dirname, './vendor/umbrella/corebundle/Resources/assets/'),
    umbrella_admin: path.resolve(__dirname, './vendor/umbrella/adminbundle/Resources/assets/')
};

CONFIG.entry = {
    // umbrella_core: './vendor/umbrella/corebundle/Resources/webpack/App.js',
    // umbrella_admin: './vendor/umbrella/adminbundle/Resources/webpack/Admin.js',
    admin: './assets/admin/Admin.js',
    ckeditor: './vendor/umbrella/corebundle/Resources/assets/vendor/ckeditor/ckeditor.js'
};

CONFIG.output = {
    path: __dirname + '/public/build/',
    publicPath: '/build/',
};

if (devMode) {
    CONFIG.output.js = '[name].dev.js';
    CONFIG.output.css = '[name].dev.css';
    CONFIG.output.manifest = 'manifest.dev.json';
} else {
    CONFIG.output.js = '[name]_[chunkhash].js';
    CONFIG.output.css = '[name]_[hash].css';
    CONFIG.output.manifest = 'manifest.prod.json';
}

//--------------------------------------------
// webpack config
module.exports = {
    mode: mode,
    performance: {
        hints: devMode ? "warning" : false
    },
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: "vendors",
        //             chunks: "all"
        //         }
        //     }
        // },
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    output: {
                        comments: false,
                    }
                }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessor: require('cssnano'),
                cssProcessorOptions: {discardComments: {removeAll: true}},
                canPrint: true
            })
        ]
    },
    plugins: [
        new CopyPlugin([
            {
                from: './assets/images',
                to: './images',
                toType: 'dir'
            },
            {
                from: './vendor/umbrella/corebundle/Resources/assets/images',
                to: './images',
                toType: 'dir'
            },
            {
                from: '{' + [
                    'config.js',
                    'contents.css',
                    'styles.js',
                    'adapters/**/*',
                    'lang/**/*',
                    'plugins/**/*',
                    'plugins/**/*',
                    'skins/**/*',
                    'vendor/**/*'
                ].join(',') + '}',
                ignore: [
                    '**/lang/!(fr|en).js' // Exclude all lang except fr and en
                ],
                to: path.resolve( __dirname + '/public/build', 'ckeditor4' ),
                context: path.resolve( __dirname, 'node_modules', 'ckeditor4' )
            }
        ]),
        new MiniCssExtractPlugin({
            filename: CONFIG.output.css
        }),
        // new CleanWebpackPlugin(),
        new ManifestPlugin({
            fileName: CONFIG.output.manifest,
            basePath: CONFIG.output.publicPath
        })
    ],
    devtool: "inline-source-map",
    devServer: {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname),
        host: '127.0.0.1',
        port: 9000,
        headers: {'Access-Control-Allow-Origin': '*'},
        writeToDisk: true,
        stats: {
            colors: true
        }
    },

    resolve: {
        modules: [
            "node_modules"
        ],
        alias: CONFIG.alias
    },

    entry: CONFIG.entry,

    output: {
        filename: CONFIG.output.js,
        path: CONFIG.output.path,
        publicPath: CONFIG.output.publicPath,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: ["@babel/plugin-proposal-class-properties"]
                    }
                }]
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: devMode
                        }
                    },
                    'postcss-loader',
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: devMode
                        }
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[ext]',
                    }
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]',
                    }
                }]
            }
        ]
    },

};
