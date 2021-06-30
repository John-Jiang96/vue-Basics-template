const { dev, envs, pages } = require('./customConfiguration');
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