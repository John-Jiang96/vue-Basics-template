import content from '@/assets/utils/initData';
export default class Directive {
    constructor() {}
    registerDirective(list) {
        list.entity.forEach(item => {
            Vue.directive(item.name, item.entity)
        })
    }
    install(vue) {
        vue.prop('registerDirective', this.registerDirective)
        this.registerDirective(content['directive'])
    }
}