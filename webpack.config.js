const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const PUBLIC_DIR = '/public';
const BUILD_DIR = '/build';
const SERVE_HOST = '127.0.0.1';
const SERVE_PORT = 9000;

const PUBLIC_PATH = path.join(__dirname, PUBLIC_DIR);
const BUILD_PATH = path.join(__dirname, PUBLIC_DIR, BUILD_DIR);

module.exports = (env, argv) => {

    const CONFIG = {};

    CONFIG.alias = {
        umbrella_core: path.join(__dirname, '/vendor/umbrella2/corebundle/Resources/assets/'),
        umbrella_admin: path.join(__dirname, '/vendor/umbrella2/adminbundle/Resources/assets/')
    };

    CONFIG.entry = {
        // umbrella_core: './vendor/umbrella/corebundle/Resources/webpack/App.js',
        // umbrella_admin: './vendor/umbrella/adminbundle/Resources/webpack/Admin.js',
        admin: './assets/admin/Admin.js',
        ckeditor: './vendor/umbrella2/corebundle/Resources/assets/vendor/ckeditor/ckeditor.js'
    };

    CONFIG.output = {
        path: BUILD_PATH,
        basePath: path.join(BUILD_DIR, '/')
    };

    if (argv.mode === 'development') {
        CONFIG.output.js = 'dev/[name].js';
        CONFIG.output.css = 'dev/[name].css';
        CONFIG.output.manifest = 'dev/manifest.json';
    } else {
        CONFIG.output.js = 'prod/[name]_[chunkhash].js';
        CONFIG.output.css = 'prod/[name]_[hash].css';
        CONFIG.output.manifest = 'prod/manifest.json';
    }


    return {
        mode: argv.mode,
        performance: {
            hints: argv.mode === 'development' ? "warning" : false
        },
        optimization: {
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
            new CopyPlugin({
                patterns: [
                    {
                        from: './assets/images',
                        to: './images',
                        toType: 'dir'
                    },
                    {
                        from: './vendor/umbrella2/corebundle/Resources/assets/images',
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
                        to: path.join(BUILD_PATH, '/ckeditor4' ),
                        context: path.join(__dirname, '/node_modules/ckeditor4'),
                        globOptions: {
                            ignore: ['**/lang/!(fr|en).js'] // Exclude all lang except fr and en
                        }
                    }
                ]
            }),
            new MiniCssExtractPlugin({
                filename: CONFIG.output.css
            }),
            new ManifestPlugin({
                fileName: CONFIG.output.manifest,
                basePath: CONFIG.output.basePath
            })
        ],
        devtool: "inline-source-map",
        devServer: {
            contentBase: PUBLIC_PATH,
            disableHostCheck: true,
            host: SERVE_HOST,
            port: SERVE_PORT,
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
            publicPath: CONFIG.output.basePath,
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
                                sourceMap: argv.mode === 'development'
                            }
                        },
                        'postcss-loader',
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: argv.mode === 'development'
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
        }
    }
};
