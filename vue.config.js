const { dev, envs, pages, UglifyJsPlugin, BundleAnalyzerPlugin, isProduction } = require('./customConfiguration');
const path = require('path');
const resolve = (dir) => {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    assetsDir: "static",
    devServer: {
        host: '0.0.0.0',
        disableHostCheck: true,
        port: 8078,
        proxy: {
            '/api': {
                target: dev,
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
        sockHost: 'http://0.0.0.0:8080'
    },
    pages,
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
        config.plugin('define').tap(args => {
            args[0].API_CONFIG = JSON.stringify(envs);
            return args;
        });
    },
    configureWebpack: config => {
        //此处就是
        config.externals = {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
            'js-cookie': 'Cookies',
            'nprogress': 'NProgress'
        }
        if (isProduction) {
            const plugins = [];
            plugins.push(new BundleAnalyzerPlugin({
                analyzerMode: 'disabled',
                generateStatsFile: true,
                statsOptions: { source: false }
            }))
            plugins.push(new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        drop_debugger: true,
                        drop_console: true,
                        pure_funcs: ['console.log']
                    }
                },
                sourceMap: false,
                parallel: true
            }))
            config.plugins = [...config.plugins, ...plugins];
            // 修改打包静态资源文件大小设置的配置
            config.performance = {
                hints: 'warning', // 枚举
                maxAssetSize: 30000000, // 整数类型（以字节为单位）
                maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
                assetFilter: function(assetFilename) {
                    // 提供资源文件名的断言函数
                    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
                }
            };
        }
    },
    css: {
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },
            sass: {},
            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }
    }
}