import content from '@/assets/utils/initData';
export default class Component {
    constructor() {}
    registerComponent(vue, list) {
        list.entity.forEach(item => {
            vue.component(item.name, item.entity)
        })
    }
    install(vue) {
        vue.prop('registerComponent', this.registerComponent)
        this.registerComponent(vue, content['template'])
    }
}