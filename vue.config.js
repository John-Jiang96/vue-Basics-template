const path = require('path')

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
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Index Page',
            icon: 'public/favicon.ico',
            cdn,
            rdpModule: 'rdpModule'

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