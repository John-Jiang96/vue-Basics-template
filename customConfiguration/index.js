const isProduction = ['production', 'prod'].includes(process.env.NODE_ENV);
// 本地开发代理地址
const dev = 'http://localhost:8080'

// 引入依赖
const glob = require('glob');

// cdn
const cdn = {
    css: ['https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/theme-chalk/index.css', 'https://lib.baomitu.com/nprogress/0.2.0/nprogress.min.css'],
    js: [
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.10/vue.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vue-router/3.1.3/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.1.0/vuex.min.js",
        "https://cdn.bootcdn.net/ajax/libs/axios/0.18.1/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.0/index.js",
        "https://cdn.bootcdn.net/ajax/libs/js-cookie/2.2.0/js.cookie.min.js",
        "https://lib.baomitu.com/nprogress/0.2.0/nprogress.min.js",
        "https://lib.baomitu.com/lodash.js/4.17.15/lodash.min.js",
    ]
}

// 自动化加入多页面基础配置
const moduleEnvs = glob.sync(`./build/*`);
const modules = [];
const envs = {};
let pages = {};
moduleEnvs.forEach(moduleEnv => {
    const module = moduleEnv.split('/')[2].split('.')[0];
    const env = require('../build/' + module + '.env');
    envs[module] = env;
    if (env.VUE_IS_INDEX) {
        pages['index'] = {
            entry: 'src/modules/' + module + '/main.js',
            cdn,
            title: env.VUE_APP_TITLE,
            icon: env.VUE_APP_ICO,
            rdpModule: module
        };
    } else {
        pages[module] = {
            entry: 'src/modules/' + module + '/main.js',
            cdn,
            title: env.VUE_APP_TITLE,
            icon: env.VUE_APP_ICO,
            filename: module + '/index.html',
            rdpModule: module
        };
    }
});
// 代码压缩 去除无用的打印和debugger
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

// 打包文件可视化插件,用于直观的看到文件的大小进行优化
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    dev,
    envs,
    pages,
    UglifyJsPlugin,
    BundleAnalyzerPlugin,
    isProduction
}