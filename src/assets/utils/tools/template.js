import component from '@/components'
export default class Component {
    constructor(content = []) {
            this.content = content
        }
        // 初始化合并全局组件和手动增加的组件
    registerMethods() {
            this.configList = component.concat(this.content)
        }
        // 注册全局组件
    registerComponent(vue) {
        this.configList.forEach(item => {
            vue.component(item.name, item.entity)
        })
    }
    install(vue) {
        this.registerMethods()
        this.registerComponent(vue)
    }
}