import dayjs from 'dayjs'
import Cookies from 'js-cookie'
import config from '../../../../customConfiguration/config'
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
]
export default class parentTool {
    constructor(content) {
        this.content = content || {}
    }
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