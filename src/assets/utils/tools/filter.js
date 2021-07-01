import content from '@/assets/utils/initData';
export default class Filter {
    constructor() {}
    registerFilter(vue, list) {
        list.entity.forEach((item) => {
            vue.filter(item.name, item.methodSubject)
        })
    }
    install(vue) {
        vue.prop('registerFilter', this.registerFilter)
        this.registerFilter(vue, content['filter'])
    }
}