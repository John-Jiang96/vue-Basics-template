import content from '@/assets/utils/initData';
export default class Component {
    constructor() {}
    registerComponent(list) {
        list.entity.forEach(item => {
            Vue.component(item.name, item.entity)
        })
    }
    install(vue) {
        vue.prop('registerComponent', this.registerComponent)
        this.registerComponent(content['template'])
    }
}