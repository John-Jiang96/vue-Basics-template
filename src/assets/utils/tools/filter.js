import content from '@/assets/utils/initData';
export default class Filter {
    constructor() {}
    registerFilter(list) {
        list.entity.forEach((item) => {
            Vue.filter(item.name, item.entity)
        })
    }
    install(vue) {
        vue.prop('registerFilter', this.registerFilter)
        this.registerFilter(content['filter'])
    }
}