import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import config from '../../../../customConfiguration/config'
const getDay = (times, type = 'YYYY-MM-DD') => {
    if (!times) return ''
    return Vue.$dayjs(times).format(type)
}
const files = require.context('./', true, /\.js$/)
let modules = []
files.keys().forEach((key) => {
    let module = files(key)
    if (module.default) {
        modules.push({
            name: module.default.name,
            entity: module.default
        })
    }
})
const utils = [{
        name: 'dayjs',
        entity: dayjs
    },
    {
        name: 'cookies',
        entity: Cookies
    },
    {
        name: 'config',
        entity: config
    },
    {
        name: 'getDay',
        entity: getDay
    },
]
console.log(1);
export default class parentTool {
    constructor() {}
    registerMethods(vue) {
        vue.prop = (key, value) => {
            vue[`$${key}`] = vue.prototype[`$${key}`] = value;
        };
    }
    install(vue) {
        this.registerMethods(vue)
        utils.forEach(item => {
            vue.prop(item.name, item.entity)
        })
        modules.forEach((item) => {
            vue.use(new item['entity'](this.content[item.name]))
        })
    }
}