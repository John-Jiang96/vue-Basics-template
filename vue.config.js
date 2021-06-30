const path = require('path')
const dev = 'http://localhost:8080'

function resolve(dir) {
    return path.join(__dirname, dir)
}
const cdn = {
    css: ['https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/theme-chalk/index.css'],
    js: [
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-router/3.0.6/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js",
        "https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/index.js",
        "https://cdn.bootcdn.net/ajax/libs/js-cookie/2.2.0/js.cookie.min.js",
        "https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.js"
    ]
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
    pages: {
        index: {
            entry: 'src/models/demo1/main.js',
            template: 'public/index.html',
            title: 'demo1',
            icon: 'public/favicon.ico',
            cdn,
            rdpModule: 'demo1'
        },
        demo2: {
            entry: 'src/models/demo2/main.js',
            template: 'public/index1.html',
            title: 'demo2',
            icon: 'public/favicon.ico',
            cdn,
            rdpModule: 'demo2'
        }
    },
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('api', resolve('src/api'))
            .set('views', resolve('src/views'))
            .set('components', resolve('src/components'))
            // config.plugin('html').tap(args => {
            //     // 生产配置
            //     args[0].cdn = cdn
            //     return args
            // })
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