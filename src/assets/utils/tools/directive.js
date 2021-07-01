import content from '@/assets/utils/initData';
export default class Directive {
    constructor() {}
    registerDirective(vue, list) {
        list.entity.forEach(item => {
            vue.directive(item.name, item.entity)
        })
    }
    install(vue) {
        console.log(content['directive']);
        vue.prop('registerDirective', this.registerDirective)
        this.registerDirective(vue, content['directive'])
    }
}